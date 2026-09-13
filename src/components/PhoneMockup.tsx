import React, { useEffect, useRef, useState } from 'react';
import {
  Wifi,
  WifiOff,
  Volume2,
  Sparkles,
  CheckCircle2,
  Check,
  ShieldCheck,
  Camera,
  Mic,
  Tag,
  Share2,
  IndianRupee,
  Store,
  RefreshCw,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

const ADVANCE_MS = 4200;

/** The saree cut-out, shared by the capture and review screens. */
const SareeArtwork: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 240 180" className={cn('object-contain', className)}>
    <defs>
      <linearGradient id="sareeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B3A2F" />
        <stop offset="50%" stopColor="#cc915c" />
        <stop offset="100%" stopColor="#513a24" />
      </linearGradient>
      <pattern id="zariPattern" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 0,8 L 8,0 L 16,8 L 8,16 Z" fill="none" stroke="#fffbb6" strokeWidth="1" />
      </pattern>
    </defs>
    <path
      d="M 30,30 Q 120,15 210,35 Q 220,130 190,160 Q 100,165 40,150 Q 20,90 30,30 Z"
      fill="url(#sareeGrad)"
    />
    <path
      d="M 30,30 Q 120,15 210,35 L 200,65 Q 120,45 35,55 Z"
      fill="url(#zariPattern)"
      stroke="#d4a262"
      strokeWidth="1.5"
    />
    <path d="M 40,150 Q 100,165 190,160 L 180,135 Q 100,140 45,128 Z" fill="#d4a262" opacity="0.9" />
    <circle cx="120" cy="95" r="28" fill="#fffbb6" opacity="0.15" />
    {[70, 90, 110].map((y, i) => (
      <line
        key={y}
        x1={60 + i * 5}
        y1={y}
        x2={170 - i * 5}
        y2={y}
        stroke="#fffbb6"
        strokeWidth="0.75"
        strokeDasharray="3,3"
        opacity="0.6"
      />
    ))}
  </svg>
);

const Panel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('bg-white rounded-craft border border-borderSoft p-3', className)}>
    {children}
  </div>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="block text-[10px] font-mono uppercase tracking-wider font-semibold text-palette-wood">
    {children}
  </span>
);

export const PhoneMockup: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [published, setPublished] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const steps = [
    { labelEn: 'Photo', labelHi: 'फोटो', labelBn: 'ছবি', icon: Camera },
    { labelEn: 'Voice', labelHi: 'आवाज़', labelBn: 'কণ্ঠ', icon: Mic },
    { labelEn: 'Costs', labelHi: 'लागत', labelBn: 'খরচ', icon: IndianRupee },
    { labelEn: 'Publish', labelHi: 'प्रकाशन', labelBn: 'প্রকাশ', icon: Store },
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

  // Advance on its own, but never while hovered, off-screen, or when the
  // viewer has asked for reduced motion.
  useEffect(() => {
    if (!interactive || paused || !inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % steps.length), ADVANCE_MS);
    return () => clearInterval(id);
  }, [interactive, paused, inView, steps.length]);

  const screens = [
    /* 1 · Capture -------------------------------------------------------- */
    <div key="photo" className="space-y-3">
      <Panel className="relative overflow-hidden bg-gradient-to-b from-white to-paperAlt">
        <span className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-full bg-palette-espresso/85 px-2 py-0.5 text-[9px] font-mono text-paper backdrop-blur-sm">
          <Camera className="h-2.5 w-2.5 text-palette-butter" />
          {t('Live viewfinder', 'कैमरा चालू', 'ক্যামেরা চালু')}
        </span>
        <div className="relative my-1 flex h-36 w-full items-center justify-center">
          {/* framing guides */}
          <span className="absolute inset-4 rounded-lg border border-dashed border-palette-clay/40" />
          <SareeArtwork className="h-full w-full drop-shadow-md" />
        </div>
      </Panel>

      <Panel className="space-y-2">
        <Eyebrow>{t('On-device quality check', 'फोन पर गुणवत्ता जाँच', 'ফোনেই গুণমান যাচাই')}</Eyebrow>
        {[
          [t('Sharpness', 'स्पष्टता', 'স্পষ্টতা'), t('Pass', 'ठीक', 'ঠিক')],
          [t('Brightness', 'रोशनी', 'আলো'), t('Corrected', 'सुधारी गई', 'সংশোধিত')],
          [t('Background', 'पृष्ठभूमि', 'পটভূমি'), t('Removed', 'हटाई गई', 'সরানো হয়েছে')],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-palette-espresso/75">{k}</span>
            <span className="flex items-center gap-1 font-bold text-emerald-700">
              <Check className="h-3 w-3" /> {v}
            </span>
          </div>
        ))}
      </Panel>
    </div>,

    /* 2 · Voice ---------------------------------------------------------- */
    <div key="voice" className="space-y-3">
      <Panel className="space-y-3 text-center">
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-palette-clay/25 motion-reduce:animate-none" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-palette-clay text-white shadow-lg">
            <Mic className="h-7 w-7" />
          </span>
        </div>
        {/* waveform */}
        <div className="flex h-8 items-end justify-center gap-[3px]">
          {[7, 14, 22, 30, 18, 26, 12, 20, 30, 16, 9, 24, 14, 8].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
              className="w-[3px] rounded-full bg-palette-sand motion-safe:animate-pulse"
            />
          ))}
        </div>
        <p className="font-pally text-xs text-palette-espresso/80">
          {t('Listening — speak in your own language', 'सुन रहे हैं — अपनी भाषा में बोलें', 'শুনছি — নিজের ভাষায় বলুন')}
        </p>
      </Panel>

      <Panel className="space-y-2 bg-paperAlt">
        <div className="flex items-center justify-between font-mono text-[10px] text-palette-wood">
          <span>Bhashini STT</span>
          <span className="font-bold text-emerald-700">98.4%</span>
        </div>
        <p className="text-[13px] font-medium italic leading-snug text-palette-espresso">
          “यह शुद्ध चंदेरी सिल्क साड़ी है, पारंपरिक सुनहरी ज़री का काम है।”
        </p>
        <p className="border-t border-palette-sand/40 pt-2 text-[11px] leading-snug text-palette-espresso/70">
          <strong className="font-semibold">EN ·</strong> Handwoven pure silk Chanderi saree with
          traditional gold zari pallu.
        </p>
      </Panel>
    </div>,

    /* 3 · Costs ---------------------------------------------------------- */
    <div key="costs" className="space-y-3">
      <Panel className="space-y-2">
        <Eyebrow>कच्चा माल · Material cost</Eyebrow>
        <div className="flex items-baseline gap-1">
          <span className="font-rowan text-xl font-bold text-palette-espresso">₹</span>
          <span className="font-mono text-2xl font-bold text-palette-clay">1,400</span>
        </div>
      </Panel>

      <Panel className="space-y-2">
        <Eyebrow>काम के घंटे · Hours of work</Eyebrow>
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-2xl font-bold text-palette-clay">8</span>
          <span className="font-rowan text-sm font-bold text-palette-espresso">घंटे</span>
        </div>
      </Panel>

      <div className="space-y-1.5 rounded-craft bg-palette-espresso p-3 text-paper">
        <div className="flex items-center justify-between font-mono text-[10px] text-paper/70">
          <span>{t('Labour @ ₹150/hr', 'मजदूरी ₹150/घंटा')}</span>
          <span>₹1,200</span>
        </div>
        <div className="flex items-center justify-between font-mono text-[10px] text-paper/70">
          <span>{t('+15% contingency', '+15% सुरक्षा')}</span>
          <span>₹390</span>
        </div>
        <div className="flex items-center justify-between border-t border-white/15 pt-1.5">
          <span className="font-mono text-[10px] text-palette-sand">
            {t('Cost floor', 'लागत आधार')}
          </span>
          <span className="font-rowan text-lg font-bold text-palette-butter">₹2,990</span>
        </div>
      </div>
    </div>,

    /* 4 · Review & publish ----------------------------------------------- */
    <div key="review" className="space-y-3">
      <Panel className="relative overflow-hidden bg-gradient-to-b from-white to-paperAlt">
        <span className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-full bg-palette-espresso/85 px-2 py-0.5 text-[9px] font-mono text-paper backdrop-blur-sm">
          <Sparkles className="h-2.5 w-2.5 text-palette-butter" />
          {t('Background removed', 'पृष्ठभूमि हटाई गई', 'পটভূমি সরানো হয়েছে')}
        </span>
        <div className="relative my-1 flex h-36 w-full items-center justify-center">
          <SareeArtwork className="h-full w-full drop-shadow-md" />
          <span className="absolute bottom-1 right-1 flex items-center gap-1 rounded-full border border-palette-sand bg-palette-butter px-2 py-0.5 text-[9px] font-bold text-palette-espresso">
            <ShieldCheck className="h-2.5 w-2.5 text-palette-clay" />
            GI: Chanderi
          </span>
        </div>
      </Panel>

      <Panel className="space-y-1">
        <Eyebrow>शीर्षक · AI title</Eyebrow>
        <h4 className="font-lora text-sm font-bold leading-snug text-palette-espresso">
          हाथ से बुनी चंदेरी सिल्क साड़ी (ज़री बॉर्डर)
        </h4>
        <p className="text-[11px] italic text-palette-espresso/70">
          Handwoven Chanderi Pure Silk Saree with Gold Zari
        </p>
      </Panel>

      <div className="space-y-2 rounded-craft border border-palette-sand/50 bg-gradient-to-br from-palette-butter/40 via-white to-palette-sand/20 p-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-bold text-palette-espresso">
            <Tag className="h-3.5 w-3.5 text-palette-clay" />
            {t('Fair price', 'उचित मूल्य', 'ন্যায্য মূল্য')}
          </span>
          <span className="font-rowan text-lg font-extrabold text-palette-clay">₹3,750</span>
        </div>
        <button
          onClick={() => interactive && setPlayingAudio((v) => !v)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-palette-espresso px-3 py-1.5 text-[10px] font-semibold text-paper transition-colors hover:bg-palette-espresso/90"
        >
          <Volume2
            className={cn('h-3.5 w-3.5 text-palette-butter', playingAudio && 'animate-bounce')}
          />
          {playingAudio
            ? t('Explaining the price…', 'कारण बता रहे हैं…', 'দাম ব্যাখ্যা করা হচ্ছে…')
            : t('Hear why this price', 'कीमत का कारण सुनें', 'এই দামের কারণ শুনুন')}
        </button>
      </div>
    </div>,
  ];

  const Icon = steps[index].icon;

  return (
    <div
      ref={hostRef}
      className="relative mx-auto w-full max-w-[340px] select-none sm:max-w-[360px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[56px] bg-gradient-to-tr from-palette-clay/25 via-palette-sand/20 to-palette-butter/40 opacity-75 blur-3xl" />

      {/* Chassis — tilts into the page on wide screens, straightens on hover */}
      <div
        className={cn(
          'relative rounded-[42px] border-[9px] border-palette-espresso bg-palette-espresso p-2.5 shadow-2xl',
          'transition-transform duration-700 ease-out motion-reduce:transition-none',
          'lg:[transform:perspective(1600px)_rotateY(-10deg)_rotateX(3deg)]',
          'lg:hover:[transform:perspective(1600px)_rotateY(0deg)_rotateX(0deg)_scale(1.02)]'
        )}
      >
        {/* Notch */}
        <div className="absolute top-4 left-1/2 z-30 flex h-4 w-28 -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-palette-espresso">
          <span className="h-2.5 w-2.5 rounded-full border border-neutral-700 bg-neutral-900" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-900/60" />
        </div>

        <div className="relative flex h-[500px] flex-col overflow-hidden rounded-[32px] border border-borderSoft bg-paper font-sans text-palette-espresso">
          {/* Status bar */}
          <div className="z-20 flex items-center justify-between bg-palette-espresso px-5 pt-3 pb-2 font-mono text-[11px] text-paper/90">
            <span>09:41</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => interactive && setIsOffline((v) => !v)}
                title="Toggle network"
                className={cn(
                  'flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] transition-colors',
                  isOffline
                    ? 'bg-amber-500/20 font-bold text-amber-300'
                    : 'bg-emerald-500/20 text-emerald-300'
                )}
              >
                {isOffline ? (
                  <WifiOff className="h-3 w-3 text-amber-400" />
                ) : (
                  <Wifi className="h-3 w-3 text-emerald-400" />
                )}
                {isOffline ? 'OFFLINE' : '4G LIVE'}
              </button>
              <span className="flex h-2 w-4 items-center rounded-sm border border-paper/60 p-0.5">
                <span className="h-full w-full rounded-xs bg-paper/80" />
              </span>
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between border-b border-borderSoft bg-paper px-4 py-2.5">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt=""
                className="h-6 w-6 rounded border border-palette-sand/40 bg-white p-0.5"
              />
              <div>
                <span className="font-rowan text-xs font-bold text-palette-espresso">
                  PATHASHILPA
                </span>
                <span className="-mt-0.5 flex items-center gap-1 text-[9px] text-palette-wood">
                  <Icon className="h-2.5 w-2.5" />
                  {t(steps[index].labelEn, steps[index].labelHi, steps[index].labelBn)}
                </span>
              </div>
            </div>
            <span className="rounded-full border border-palette-sand/50 bg-palette-butter/60 px-2 py-0.5 font-mono text-[10px] font-semibold text-palette-clay">
              {index + 1}/4
            </span>
          </div>

          {/* Sliding screen track */}
          <div className="relative flex-1 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {screens.map((screen, i) => (
                <div
                  key={i}
                  aria-hidden={i !== index}
                  className="h-full w-full shrink-0 overflow-y-auto p-3.5 text-xs"
                >
                  {screen}
                </div>
              ))}
            </div>
          </div>

          {/* Action footer */}
          <div className="space-y-1.5 border-t border-borderSoft bg-white p-3">
            <button
              onClick={() => {
                if (!interactive) return;
                if (index < 3) setIndex(index + 1);
                else setPublished((v) => !v);
              }}
              className={cn(
                'flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold shadow-clay transition-all',
                published && index === 3
                  ? 'bg-emerald-700 text-white'
                  : 'bg-palette-clay text-white hover:bg-palette-clay/90 active:scale-95'
              )}
            >
              {index < 3 ? (
                <>
                  <Icon className="h-4 w-4 text-palette-butter" />
                  {t('Continue', 'आगे बढ़ें', 'এগিয়ে যান')}
                </>
              ) : published ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-palette-butter" />
                  प्रकाशित! (Live on ONDC &amp; GeM)
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4 text-palette-butter" />
                  दुकान पर प्रकाशित करें
                </>
              )}
            </button>
            <p className="text-center font-mono text-[9px] text-palette-espresso/70">
              {isOffline ? (
                <>
                  <RefreshCw className="mr-1 inline h-2.5 w-2.5" />
                  {t('Saved offline — syncs when signal returns', 'ऑफलाइन सेव — नेटवर्क आते ही सिंक', 'অফলাইনে সংরক্ষিত — সিগন্যাল ফিরলে সিঙ্ক')}
                </>
              ) : (
                t('Publishes to your storefront, GeM and ONDC', 'आपकी दुकान, GeM और ONDC पर प्रकाशित', 'আপনার দোকান, GeM ও ONDC-তে প্রকাশিত')
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Step selector, captioned with the 90-second promise */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 flex items-center gap-1.5 rounded-full border border-palette-sand bg-palette-butter/70 px-2.5 py-1.5 font-mono text-[10px] font-bold text-palette-espresso">
          <span className="text-palette-clay">90s</span>
          {t('total', 'कुल', 'মোট')}
        </span>
        {steps.map((s, i) => (
          <button
            key={s.labelEn}
            onClick={() => setIndex(i)}
            aria-label={t(s.labelEn, s.labelHi, s.labelBn)}
            aria-current={i === index}
            className={cn(
              'group flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 transition-all',
              i === index
                ? 'border-palette-clay bg-palette-clay text-white shadow-clay'
                : 'border-palette-sand/70 bg-white/80 text-palette-espresso/70 hover:border-palette-clay/60'
            )}
          >
            <s.icon className="h-3 w-3" />
            <span
              className={cn(
                'overflow-hidden whitespace-nowrap font-mono text-[10px] font-semibold transition-all',
                i === index ? 'max-w-[70px] opacity-100' : 'max-w-0 opacity-0'
              )}
            >
              {t(s.labelEn, s.labelHi, s.labelBn)}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
};
