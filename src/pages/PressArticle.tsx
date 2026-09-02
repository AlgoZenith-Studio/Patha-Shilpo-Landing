import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PRESS_ARTICLES } from '../data/mockData';
import { ArrowLeft, AlertTriangle, Calendar, Clock, Bookmark } from 'lucide-react';

export const PressArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const article = PRESS_ARTICLES.find((a) => a.slug === slug) || PRESS_ARTICLES[0];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link
        to="/press"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-palette-clay hover:text-palette-clay/80"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t('Back to Press Hub', 'प्रेस हब पर वापस जाएं')}</span>
      </Link>

      {/* Mandatory Demo Disclaimer */}
      <div className="bg-amber-50 border border-amber-300 p-3.5 rounded-xl flex items-center gap-3 text-xs text-amber-900 font-mono">
        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <span>Sample coverage shown for demonstration purposes (Smart India Hackathon 2026).</span>
      </div>

      {/* Article Container */}
      <article className="bg-white rounded-craft-lg border border-palette-sand/60 p-8 sm:p-12 shadow-soft space-y-6">
        <div className="space-y-3 border-b border-borderSoft pb-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-palette-wood">
            <span className="bg-palette-butter text-palette-espresso px-2.5 py-0.5 rounded font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
          <h1 className="font-rowan font-extrabold text-3xl sm:text-4xl text-palette-espresso leading-tight">
            {article.title}
          </h1>
          <p className="text-xs font-mono text-palette-clay font-bold">
            Published in: {article.publication}
          </p>
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-sm text-palette-espresso/85 leading-relaxed font-sans">
          <p className="font-semibold text-palette-espresso text-base">
            {article.summary}
          </p>
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* SIH Context Box */}
        <div className="bg-paperAlt p-4 rounded-xl border border-palette-sand/40 text-xs font-mono text-palette-wood space-y-1">
          <span className="font-bold text-palette-espresso block">Field Evaluation Context:</span>
          <p>This prototype is submitted under Problem Statement: AI-Driven Market Linkage for Marginalized Artisans at Smart India Hackathon 2026.</p>
        </div>
      </article>
    </div>
  );
};
