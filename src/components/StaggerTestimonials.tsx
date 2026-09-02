import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

// Size of the angled corner cut, and the length of the bevel line that
// covers its diagonal (hypotenuse of a NOTCH x NOTCH right triangle).
const NOTCH = 44;
const BEVEL = Math.sqrt(NOTCH * NOTCH * 2);

type StackedTestimonial = Testimonial & { tempId: number };

interface TestimonialCardProps {
  position: number;
  testimonial: StackedTestimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const { language, t } = useLanguage();
  const isCenter = position === 0;
  // Cards beyond the visible fan are clipped by the container; keep them out
  // of the accessibility tree and out of the tab order.
  const isVisible = Math.abs(position) <= 2;

  const name = language === 'hi' ? testimonial.nameHi : testimonial.name;
  const quote = language === 'hi' ? testimonial.quoteHi : testimonial.quoteEn;
  const title = language === 'hi' ? testimonial.titleHi : testimonial.titleEn;
  const isArtisan = testimonial.role === 'artisan';

  return (
    <div
      onClick={() => handleMove(position)}
      role="group"
      aria-hidden={!isVisible}
      aria-label={`${name} — ${title}`}
      className={cn(
        'absolute left-1/2 top-1/2 select-none border p-7 sm:p-8',
        'transition-all duration-500 ease-in-out motion-reduce:transition-none',
        isCenter
          ? 'z-10 cursor-default bg-palette-espresso border-palette-espresso'
          : 'z-0 cursor-pointer bg-white border-palette-sand/60 hover:border-palette-clay'
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(${NOTCH}px 0%, 100% 0%, 100% calc(100% - ${NOTCH}px), calc(100% - ${NOTCH}px) 100%, 0 100%, 0 ${NOTCH}px)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -56 : position % 2 ? 14 : -14}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? '0px 8px 0px 3px #d4a262' : 'none',
      }}
    >
      {/* Bevel line closing the top-left corner cut */}
      <span
        className={cn(
          'absolute block origin-top-left -rotate-45',
          isCenter ? 'bg-palette-sand' : 'bg-palette-sand/60'
        )}
        style={{ left: -1, top: NOTCH - 1, width: BEVEL, height: 1 }}
      />

      {/* Role badge + initial avatar */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            'w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-rowan font-bold text-base',
            isCenter
              ? 'bg-palette-butter text-palette-espresso'
              : 'bg-palette-sand/30 text-palette-espresso border border-palette-clay/40'
          )}
        >
          {name.charAt(0)}
        </div>
        <span
          className={cn(
            'font-mono text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full',
            isCenter
              ? 'bg-white/10 text-palette-butter'
              : 'bg-paperAlt text-palette-wood'
          )}
        >
          {isArtisan ? t('Artisan', 'कारीगर') : t('Buyer', 'खरीदार')}
        </span>
      </div>

      <Quote
        className={cn(
          'w-5 h-5 mb-2',
          isCenter ? 'text-palette-sand' : 'text-palette-clay/50'
        )}
      />

      <p
        className={cn(
          'font-lora font-medium leading-snug text-[15px] sm:text-lg',
          isCenter ? 'text-paper' : 'text-palette-espresso'
        )}
      >
        “{quote}”
      </p>

      <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8">
        <div
          className={cn(
            'font-lora font-bold text-sm',
            isCenter ? 'text-palette-butter' : 'text-palette-espresso'
          )}
        >
          {name}
        </div>
        <div
          className={cn(
            'font-mono text-[10px] mt-0.5 leading-tight',
            isCenter ? 'text-paper/70' : 'text-palette-wood'
          )}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const { t } = useLanguage();
  const [cardSize, setCardSize] = useState(340);
  const [list, setList] = useState<StackedTestimonial[]>(
    TESTIMONIALS.map((item) => ({ ...item, tempId: item.id }))
  );

  const handleMove = (steps: number) => {
    if (steps === 0) return;
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.matchMedia('(min-width: 640px)').matches ? 340 : 280);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-paperAlt/60 border-y border-palette-sand/40"
      role="group"
      aria-roledescription="carousel"
      aria-label={t('Pilot feedback from artisans and buyers', 'कारीगरों और खरीदारों की प्रतिक्रिया')}
      style={{ height: 540 }}
    >
      {list.map((testimonial, index) => {
        const position =
          list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-palette-sand text-palette-espresso transition-colors hover:bg-palette-clay hover:text-white hover:border-palette-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palette-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          aria-label={t('Previous testimonial', 'पिछली प्रतिक्रिया')}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-palette-sand text-palette-espresso transition-colors hover:bg-palette-clay hover:text-white hover:border-palette-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palette-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          aria-label={t('Next testimonial', 'अगली प्रतिक्रिया')}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
