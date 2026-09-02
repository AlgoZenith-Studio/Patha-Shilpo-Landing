import React from 'react';
import { cn } from '../lib/utils';
import { useInView } from '../hooks/useScrollEffects';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger in ms — keep siblings within ~240ms of each other. */
  delay?: number;
  className?: string;
}

/**
 * Fades and lifts its children once, the first time they scroll into view.
 * Under `prefers-reduced-motion` the content is simply visible from the start.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </div>
  );
};
