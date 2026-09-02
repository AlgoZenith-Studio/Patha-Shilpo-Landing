import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenDemo?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // `wide: true` links only appear once there is room for them (xl and up).
  // They stay reachable from the mobile drawer and the footer at every width.
  const navLinks = [
    { to: '/how-it-works', labelEn: 'How it works', labelHi: 'कैसे काम करता है' },
    { to: '/for-artisans', labelEn: 'For Artisans', labelHi: 'कारीगरों के लिए' },
    { to: '/for-buyers', labelEn: 'For Buyers', labelHi: 'खरीदारों के लिए' },
    { to: '/pricing', labelEn: 'Pricing', labelHi: 'मूल्य निर्धारण' },
    { to: '/about', labelEn: 'About', labelHi: 'हमारे बारे में' },
    { to: '/artisan-charter', labelEn: 'Artisan Charter', labelHi: 'कारीगर अधिकार पत्र', wide: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-borderSoft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/logo.svg"
              alt="Pathashilpa"
              className="w-9 h-9 shrink-0 rounded-lg object-contain transition-transform group-hover:scale-105"
            />
            <span className="flex flex-col justify-center">
              <span className="font-rowan font-bold text-lg xl:text-xl leading-none tracking-tight text-palette-espresso whitespace-nowrap">
                PATHASHILPA
              </span>
              <span className="hidden sm:block font-pally text-[11px] leading-none mt-1.5 text-palette-wood whitespace-nowrap">
                {t('Your craft. Your price. Your name.', 'आपकी कला। आपका दाम। आपका नाम।')}
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`relative h-full flex items-center px-2.5 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  link.wide ? 'hidden xl:flex' : ''
                } ${
                  isActive(link.to)
                    ? 'text-palette-clay font-semibold'
                    : 'text-palette-espresso/75 hover:text-palette-clay'
                }`}
              >
                {t(link.labelEn, link.labelHi)}
                {isActive(link.to) && (
                  <span className="absolute inset-x-2 bottom-0 h-[3px] rounded-t-full bg-palette-clay" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Language switcher */}
            <div className="flex items-center gap-0.5 bg-paperAlt rounded-full p-0.5 border border-palette-sand/60 text-xs font-medium">
              <button
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`px-2.5 py-1 rounded-full leading-none transition-colors ${
                  language === 'en'
                    ? 'bg-palette-espresso text-paper font-semibold'
                    : 'text-palette-espresso/70 hover:text-palette-espresso'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                aria-pressed={language === 'hi'}
                className={`px-2.5 py-1 rounded-full leading-none transition-colors ${
                  language === 'hi'
                    ? 'bg-palette-espresso text-paper font-semibold'
                    : 'text-palette-espresso/70 hover:text-palette-espresso'
                }`}
                title="हिन्दी (Hindi)"
              >
                हिं
              </button>
            </div>

            {/* Primary CTA */}
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 whitespace-nowrap bg-palette-clay hover:bg-palette-clay/90 text-white pl-3.5 pr-4 py-2.5 rounded-full text-[13px] font-semibold leading-none shadow-clay transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-palette-butter" />
              <span>{t('90s AI Demo', '90 सेकंड डेमो')}</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full bg-paperAlt border border-palette-sand/60 text-palette-espresso text-xs font-semibold leading-none"
              title={language === 'en' ? 'हिन्दी में देखें' : 'View in English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-palette-espresso hover:bg-paperAlt transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-borderSoft bg-paper shadow-lift animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-palette-butter text-palette-espresso font-semibold'
                      : 'text-palette-espresso/90 hover:bg-paperAlt'
                  }`}
                >
                  {t(link.labelEn, link.labelHi)}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-borderSoft flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo?.();
                }}
                className="w-full inline-flex justify-center items-center gap-2 bg-palette-clay text-white px-4 py-3 rounded-craft text-sm font-semibold shadow-clay"
              >
                <Sparkles className="w-4 h-4 text-palette-butter" />
                <span>{t('Launch 90s AI Listing Demo', '90 सेकंड AI डेमो चलाएं')}</span>
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-craft border border-palette-sand text-palette-espresso text-sm font-medium hover:bg-paperAlt"
              >
                {t('Contact & Cluster Support', 'संपर्क एवं क्लस्टर सहायता')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
