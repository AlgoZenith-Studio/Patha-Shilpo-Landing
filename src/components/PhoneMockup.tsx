import React, { useEffect, useRef, useState } from 'react';
import {
  LogIn,
  Home,
  MessageSquareText,
  User,
  Sparkles,
  Wifi,
  WifiOff,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

const ADVANCE_MS = 4200;

export const PhoneMockup: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const steps = [
    {
      id: 'login',
      labelEn: 'Login',
      labelHi: 'लॉगिन',
      labelBn: 'লগইন',
      captionEn: 'Artisan Phone Sign-in',
      captionHi: 'कारीगर फोन लॉगिन',
      captionBn: 'কারিগর ফোন লগইন',
      icon: LogIn,
      image: '/app-screens/login.png',
    },
    {
      id: 'home',
      labelEn: 'Home',
      labelHi: 'होम',
      labelBn: 'হোম',
      captionEn: 'Artisan Studio Dashboard',
      captionHi: 'कारीगर स्टूडियो डैशबोर्ड',
      captionBn: 'কারিগর স্টুডিও ড্যাশবোর্ড',
      icon: Home,
      image: '/app-screens/home.png',
    },
    {
      id: 'enquiries',
      labelEn: 'Enquiries',
      labelHi: 'पूछताछ',
      labelBn: 'অনুসন্ধান',
      captionEn: 'Buyer Enquiries & Bulk RFQs',
      captionHi: 'खरीदार पूछताछ एवं थोक अनुरोध',
      captionBn: 'ক্রেতাদের অনুসন্ধান ও বাল্ক অর্ডার',
      icon: MessageSquareText,
      image: '/app-screens/enquiries.png',
    },
    {
      id: 'profile',
      labelEn: 'Profile',
      labelHi: 'प्रोफाइल',
      labelBn: 'প্রোফাইল',
      captionEn: 'Verified GI & Aadhaar Identity',
      captionHi: 'सत्यापित जीआई एवं आधार पहचान',
      captionBn: 'যাচাইকৃত GI ও আধার পরিচয়',
      icon: User,
      image: '/app-screens/profile.png',
    },
  ];

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance through screens, unless paused (hovered) or off-screen
  useEffect(() => {
    if (!interactive || paused || !inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % steps.length), ADVANCE_MS);
    return () => clearInterval(id);
  }, [interactive, paused, inView, steps.length]);

  return (
    <div
      ref={hostRef}
      className="relative mx-auto w-full max-w-[340px] select-none sm:max-w-[360px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient background glow */}
      <div className="absolute -inset-6 -z-10 rounded-[56px] bg-gradient-to-tr from-palette-clay/25 via-palette-sand/20 to-palette-butter/40 opacity-75 blur-3xl" />

      {/* Smartphone Chassis Frame */}
      <div
        className={cn(
          'relative rounded-[42px] border-[9px] border-palette-espresso bg-palette-espresso p-2 shadow-2xl',
          'transition-transform duration-700 ease-out motion-reduce:transition-none',
          'lg:[transform:perspective(1600px)_rotateY(-10deg)_rotateX(3deg)]',
          'lg:hover:[transform:perspective(1600px)_rotateY(0deg)_rotateX(0deg)_scale(1.02)]'
        )}
      >
        {/* Camera Notch */}
        <div className="absolute top-3.5 left-1/2 z-30 flex h-4 w-28 -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-palette-espresso">
          <span className="h-2.5 w-2.5 rounded-full border border-neutral-700 bg-neutral-900" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Screen Viewport */}
        <div className="relative flex h-[500px] flex-col overflow-hidden rounded-[32px] border border-borderSoft bg-paper font-sans text-palette-espresso">
          {/* Top Indicator Overlay (Floating Status Badge) */}
          <div className="absolute top-2 right-3 z-20 flex items-center gap-1.5">
            <button
              onClick={() => interactive && setIsOffline((v) => !v)}
              title="Toggle network state"
              className={cn(
                'flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono font-semibold backdrop-blur-md transition-colors shadow-xs cursor-pointer',
                isOffline
                  ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                  : 'bg-palette-espresso/80 text-emerald-300 border border-emerald-500/40'
              )}
            >
              {isOffline ? (
                <WifiOff className="h-2.5 w-2.5 text-amber-400" />
              ) : (
                <Wifi className="h-2.5 w-2.5 text-emerald-400" />
              )}
              {isOffline ? 'OFFLINE' : 'LIVE APP'}
            </button>
          </div>

          {/* Sliding Screen Track */}
          <div className="relative flex-1 overflow-hidden bg-neutral-900">
            <div
              className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.id}
                  aria-hidden={i !== index}
                  className="relative h-full w-full shrink-0 overflow-hidden bg-paperAlt"
                >
                  <img
                    src={step.image}
                    alt={t(step.labelEn, step.labelHi, step.labelBn)}
                    className="h-full w-full object-cover object-top select-none"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Below Mockup: Login, Home, Enquiries, Profile */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isSelected = i === index;
          return (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={t(s.labelEn, s.labelHi, s.labelBn)}
              aria-current={isSelected}
              className={cn(
                'group flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-rowan text-xs font-semibold transition-all duration-200 cursor-pointer select-none',
                isSelected
                  ? 'border-palette-clay bg-palette-clay text-white shadow-clay scale-[1.05]'
                  : 'border-palette-sand/70 bg-white/90 text-palette-espresso/80 hover:border-palette-clay/80 hover:bg-palette-butter/40 hover:scale-[1.02]'
              )}
            >
              <Icon className={cn('h-3.5 w-3.5', isSelected ? 'text-palette-butter' : 'text-palette-clay')} />
              <span>{t(s.labelEn, s.labelHi, s.labelBn)}</span>
            </button>
          );
        })}
      </div>

      {/* Active Screen Caption Badge */}
      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-palette-butter/80 border border-palette-sand/60 font-rowan text-xs font-semibold text-palette-espresso shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-palette-clay" />
          <span>{t(steps[index].captionEn, steps[index].captionHi, steps[index].captionBn)}</span>
        </span>
      </div>
    </div>
  );
};
