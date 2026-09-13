import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';
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
    { to: '/how-it-works', labelEn: 'How it works', labelHi: 'कैसे काम करता है', labelBn: 'কীভাবে কাজ করে' },
    { to: '/for-artisans', labelEn: 'For Artisans', labelHi: 'कारीगरों के लिए', labelBn: 'কারিগরদের জন্য' },
    { to: '/for-buyers', labelEn: 'For Buyers', labelHi: 'खरीदारों के लिए', labelBn: 'ক্রেতাদের জন্য' },
    { to: '/pricing', labelEn: 'Pricing', labelHi: 'मूल्य निर्धारण', labelBn: 'মূল্য নির্ধারণ' },
    { to: '/about', labelEn: 'About', labelHi: 'हमारे बारे में', labelBn: 'আমাদের সম্পর্কে' },
    { to: '/artisan-charter', labelEn: 'Artisan Charter', labelHi: 'कारीगर अधिकार पत्र', labelBn: 'কারিগর অধিকারপত্র', wide: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-borderSoft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[80px] flex items-center justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/logo.svg"
              alt="Pathashilpa"
              className="w-10 h-10 shrink-0 rounded-xl object-contain transition-transform group-hover:scale-105"
            />
            <span className="flex flex-col justify-center">
              <span className="font-rowan font-bold text-xl xl:text-2xl leading-none tracking-tight text-palette-espresso whitespace-nowrap">
                PATHASHILPA
              </span>
              <span className="hidden sm:block font-pally text-xs leading-none mt-1.5 text-palette-wood whitespace-nowrap">
                {t('Your craft. Your price. Your name.', 'आपकी कला। आपका दाम। आपका नाम।', 'আপনার শিল্প। আপনার দাম। আপনার নাম।')}
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 font-rowan">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ease-out ${
                  link.wide ? 'hidden xl:inline-flex' : 'inline-flex'
                } ${
                  isActive(link.to)
                    ? 'bg-palette-clay/10 text-palette-clay font-bold shadow-xs scale-[1.02]'
                    : 'text-palette-espresso/80 hover:text-palette-clay hover:bg-palette-clay/10 hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-xs active:scale-[0.97]'
                }`}
              >
                {t(link.labelEn, link.labelHi, link.labelBn)}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 font-rowan">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-paperAlt/90 rounded-full p-1 border border-palette-sand/70 shadow-xs">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  aria-pressed={language === l.code}
                  title={l.full}
                  className={`px-3 py-1.5 rounded-full leading-none text-xs font-semibold tracking-wide transition-all duration-200 ease-out cursor-pointer select-none ${
                    language === l.code
                      ? 'bg-palette-espresso text-paper font-semibold shadow-xs scale-[1.02]'
                      : 'text-palette-espresso/70 hover:text-palette-espresso hover:bg-palette-clay/15 hover:scale-[1.06] active:scale-[0.95]'
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>

            {/* Primary CTA */}
            <button
              onClick={onOpenDemo}
              className="group inline-flex items-center gap-2.5 whitespace-nowrap bg-palette-clay hover:bg-palette-clay/95 text-white px-5.5 py-2.5 rounded-full text-sm font-semibold leading-none shadow-clay transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-lg hover:shadow-palette-clay/25 active:scale-[0.97] cursor-pointer select-none font-rowan"
            >
              <Sparkles className="w-4 h-4 text-palette-butter transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span>{t('AI Demo', 'AI डेमो', 'AI ডেমো')}</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Cycles EN → हिं → বাং */}
            <button
              onClick={() => {
                const i = LANGUAGES.findIndex((l) => l.code === language);
                setLanguage(LANGUAGES[(i + 1) % LANGUAGES.length].code);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full bg-paperAlt border border-palette-sand/60 text-palette-espresso text-xs font-semibold leading-none"
              title={`${LANGUAGES.find((l) => l.code === language)?.full} — tap to change language`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{LANGUAGES.find((l) => l.code === language)?.short}</span>
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
                  {t(link.labelEn, link.labelHi, link.labelBn)}
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
                <span>{t('Launch AI Listing Demo', 'AI लिस्टिंग डेमो चलाएं', 'AI লিস্টিং ডেমো চালান')}</span>
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-craft border border-palette-sand text-palette-espresso text-sm font-medium hover:bg-paperAlt"
              >
                {t('Contact & Cluster Support', 'संपर्क एवं क्लस्टर सहायता', 'যোগাযোগ ও ক্লাস্টার সহায়তা')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
