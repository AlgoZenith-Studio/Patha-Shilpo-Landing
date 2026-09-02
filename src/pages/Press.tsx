import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PRESS_ARTICLES } from '../data/mockData';
import { Newspaper, ArrowRight, AlertTriangle } from 'lucide-react';

export const Press: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Disclaimer Banner Required by PRD */}
      <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl flex items-center gap-3 text-xs text-amber-900 font-mono">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
        <div>
          <strong>{t('Demonstration Notice:', 'प्रदर्शन सूचना:')}</strong>{' '}
          {t(
            'Sample coverage shown for demonstration purposes. These simulated press excerpts illustrate media narratives for Smart India Hackathon 2026 evaluation.',
            'यह कवरेज केवल हैकाथॉन प्रदर्शन के उद्देश्य से दिखाया गया है।'
          )}
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
          {t('Media & Publications', 'प्रेस एवं समाचार')}
        </span>
        <h1 className="font-rowan font-extrabold text-4xl text-palette-espresso">
          {t('Pathashilpa in the News', 'समाचारों में पाथाशिल्पा')}
        </h1>
        <p className="text-xs sm:text-sm text-palette-wood">
          {t('Sample editorial reviews and field trial features from rural handloom hubs.', 'ग्रामीण हथकरघा केंद्रों से संपादकीय समीक्षाएं और फील्ड ट्रायल रिपोर्ट्स।')}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRESS_ARTICLES.map((art) => (
          <div
            key={art.slug}
            className="bg-white rounded-craft border border-palette-sand/60 p-6 shadow-soft space-y-4 flex flex-col justify-between hover:shadow-lift transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-palette-wood">
                <span className="bg-palette-butter text-palette-espresso px-2 py-0.5 rounded font-semibold">
                  {art.category}
                </span>
                <span>{art.readTime}</span>
              </div>
              <h3 className="font-lora font-bold text-lg text-palette-espresso leading-snug">
                {art.title}
              </h3>
              <p className="text-xs text-palette-wood leading-relaxed">
                {art.summary}
              </p>
            </div>

            <div className="border-t border-borderSoft pt-4 flex items-center justify-between">
              <span className="text-[11px] font-mono text-palette-wood">
                {art.publication}
              </span>
              <Link
                to={`/press/${art.slug}`}
                className="text-xs font-bold text-palette-clay hover:text-palette-clay/80 inline-flex items-center gap-1"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
