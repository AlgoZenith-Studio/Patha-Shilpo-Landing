import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { useParallax } from '../hooks/useScrollEffects';

interface MediaBackdropProps {
  /** Basename inside /public/media, without extension. */
  src: string;
  kind?: 'video' | 'image';
  /** Overlay that protects text contrast. Always pass one. */
  scrim?: string;
  /** Applied to the moving media layer — use for opacity / object-position. */
  mediaClassName?: string;
  /** 0 disables. ~0.10–0.18 reads as depth without feeling loose. */
  parallax?: number;
  /**
   * Mirror the media horizontally, to move a composition's dense side away
   * from the text column. Applied to the media elements rather than the
   * parallax layer, whose transform is driven by inline style.
   */
  flip?: boolean;
  /** Skip the near-viewport wait. Use only for above-the-fold media. */
  eager?: boolean;
}

/**
 * Full-bleed background layer for a section. The host element must be
 * `relative` (and usually `overflow-hidden`).
 *
 * Video is a progressive enhancement only: the poster renders first and stays
 * beneath, and the clip is fetched only on wide viewports, with motion allowed,
 * once the section is close to the fold. Everywhere else the poster is the
 * finished state rather than a placeholder.
 */
export const MediaBackdrop: React.FC<MediaBackdropProps> = ({
  src,
  kind = 'image',
  scrim = 'bg-paper/70',
  mediaClassName,
  parallax = 0.12,
  flip = false,
  eager = false,
}) => {
  const layerRef = useParallax<HTMLDivElement>(parallax);
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mountVideo, setMountVideo] = useState(false);
  const [ready, setReady] = useState(false);

  // Decide whether this client should download the clip at all.
  useEffect(() => {
    if (kind !== 'video') return;
    const allowed =
      window.matchMedia('(min-width: 768px)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!allowed) return;

    if (eager) {
      setMountVideo(true);
      return;
    }
    const host = hostRef.current;
    if (!host) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMountVideo(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    io.observe(host);
    return () => io.disconnect();
  }, [kind, eager]);

  // Don't burn decode cycles on a clip nobody is looking at.
  useEffect(() => {
    if (!mountVideo) return;
    const host = hostRef.current;
    const video = videoRef.current;
    if (!host || !video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.01 }
    );
    io.observe(host);
    return () => io.disconnect();
  }, [mountVideo]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        ref={layerRef}
        className={cn(
          'absolute inset-x-0 -inset-y-[12%] will-change-transform',
          mediaClassName
        )}
      >
        <img
          src={`/media/${src}.jpg`}
          alt=""
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(
            'absolute inset-0 h-full w-full object-cover',
            flip && 'scale-x-[-1]'
          )}
        />
        {mountVideo && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            poster={`/media/${src}.jpg`}
            onCanPlay={() => setReady(true)}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
              ready ? 'opacity-100' : 'opacity-0',
              flip && 'scale-x-[-1]'
            )}
          >
            <source src={`/media/${src}.webm`} type="video/webm" />
            <source src={`/media/${src}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>

      <div className={cn('absolute inset-0', scrim)} />
    </div>
  );
};
