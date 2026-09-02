import React, { useEffect, useState } from 'react';
import { Globe2 } from 'lucide-react';
import { cn, readableOn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useScrollEffects';
import { SDG_GOALS } from '../data/mockData';

const CYCLE_MS = 2800;

/**
 * The UN goals the product advances, each tied to a concrete mechanism.
 *
 * A spotlight travels from card to card once the section is in view, tinting
 * the active card in that goal's official colour. Pointer or keyboard focus
 * takes over the spotlight; reduced-motion stops it travelling altogether.
 */
export const SdgSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || held !== null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % SDG_GOALS.length),
      CYCLE_MS
    );
    return () => clearInterval(id);
  }, [inView, held]);

  const spotlight = held ?? active;

  return (
    <section className="relative overflow-hidden border-y border-palette-sand/40 bg-paperAlt/50 py-16 md:py-24">
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            <Globe2 className="w-4 h-4" />
            {t('United Nations Global Goals', 'संयुक्त राष्ट्र वैश्विक लक्ष्य')}
          </span>
          <h2 className="font-rowan font-bold text-3xl sm:text-4xl text-palette-espresso">
            {t(
              'Seven Goals, Built Into the Product',
              'सात वैश्विक लक्ष्य, उत्पाद की बुनियाद में'
            )}
          </h2>
          <p className="text-sm text-palette-espresso/75">
            {t(
              'Not a statement of intent — each goal below names the specific mechanism that advances it.',
              'केवल इरादा नहीं — हर लक्ष्य के साथ वह ठोस तरीका दिया गया है जिससे वह पूरा होता है।'
            )}
          </p>
        </div>

        {/* Goal grid — the featured card spans two columns so seven cards fill
            two rows of four exactly. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SDG_GOALS.map((goal, i) => {
            const lit = spotlight === i;
            return (
              <button
                key={goal.number}
                type="button"
                onMouseEnter={() => setHeld(i)}
                onMouseLeave={() => setHeld(null)}
                onFocus={() => setHeld(i)}
                onBlur={() => setHeld(null)}
                style={{
                  transitionDelay: inView ? `${i * 70}ms` : '0ms',
                  borderColor: lit ? goal.color : undefined,
                  boxShadow: lit ? `0 10px 30px -12px ${goal.color}80` : undefined,
                }}
                className={cn(
                  'group relative overflow-hidden rounded-craft border bg-white p-5 text-left',
                  'transition-all duration-500 ease-out motion-reduce:transition-none',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paperAlt',
                  lit ? 'border-transparent -translate-y-1' : 'border-palette-sand/60',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                  goal.featured && 'sm:col-span-2'
                )}
              >
                {/* Colour wash, revealed only while lit */}
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: goal.color }}
                  className={cn(
                    'pointer-events-none absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none',
                    lit ? 'opacity-[0.06]' : 'opacity-0'
                  )}
                />

                {/* Accent rule that draws itself when the section arrives */}
                <span
                  aria-hidden="true"
                  style={{
                    backgroundColor: goal.color,
                    transitionDelay: inView ? `${i * 70 + 180}ms` : '0ms',
                  }}
                  className={cn(
                    'absolute left-0 top-0 h-full w-1 origin-top transition-transform duration-700 ease-out motion-reduce:transition-none',
                    inView ? 'scale-y-100' : 'scale-y-0'
                  )}
                />

                <div className="relative space-y-3 pl-3">
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        backgroundColor: goal.color,
                        color: readableOn(goal.color),
                      }}
                      className={cn(
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-rowan text-lg font-extrabold',
                        'transition-transform duration-500 motion-reduce:transition-none',
                        lit && 'scale-110'
                      )}
                    >
                      {goal.number}
                    </span>
                    <h3 className="font-lora font-bold text-base leading-tight text-palette-espresso">
                      {language === 'hi' ? goal.titleHi : goal.titleEn}
                    </h3>
                  </div>

                  <p
                    className={cn(
                      'text-xs leading-relaxed text-palette-espresso/75',
                      goal.featured && 'sm:text-[13px]'
                    )}
                  >
                    {language === 'hi' ? goal.mechanismHi : goal.mechanismEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-[11px] font-mono text-palette-espresso/60">
          {t(
            'Goal names and colours are those of the UN Sustainable Development Goals. Pathashilpa is not affiliated with or endorsed by the United Nations.',
            'लक्ष्यों के नाम एवं रंग संयुक्त राष्ट्र सतत विकास लक्ष्यों के हैं। पाथाशिल्पा का संयुक्त राष्ट्र से कोई संबंध या अनुमोदन नहीं है।'
          )}
        </p>
      </div>
    </section>
  );
};
