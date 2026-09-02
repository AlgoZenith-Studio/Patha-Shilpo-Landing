import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';
import { ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-palette-espresso text-paper/90 border-t border-palette-wood/40">
      {/* Top utility bar */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-palette-sand" />
            <span className="text-paper/75">
              {t(
                'AI-driven market linkage for India’s rural artisan clusters',
                'भारत के ग्रामीण कारीगर क्लस्टरों के लिए AI आधारित बाज़ार पहुँच',
                'ভারতের গ্রামীণ কারিগর ক্লাস্টারের জন্য AI-চালিত বাজার সংযোগ'
              )}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-paper/60">{t('Language:', 'भाषा:', 'ভাষা:')}</span>
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  aria-pressed={language === l.code}
                  className={`px-2 py-0.5 rounded-full transition-all text-xs ${
                    language === l.code
                      ? 'bg-palette-clay text-white font-semibold'
                      : 'text-paper/70 hover:text-white'
                  }`}
                >
                  {l.full}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="Pathashilpa Logo" 
              className="w-10 h-10 object-contain rounded-lg p-0.5 bg-white"
            />
            <span className="font-rowan font-bold text-2xl tracking-tight text-paper">
              PATHASHILPA
            </span>
          </div>
          <p className="font-pally text-lg text-palette-butter">
            "{t('Your craft. Your price. Your name.', 'आपकी कला। आपका दाम। आपका नाम।', 'আপনার শিল্প। আপনার দাম। আপনার নাম।')}"
          </p>
          <p className="text-sm text-paper/75 leading-relaxed max-w-sm">
            {t(
              'The smart cataloging layer that converts a single photograph and spoken sentence into a published, verified product listing, working offline-first for 35.2 lakh rural Indian artisans.',
              'स्मार्ट कैटलॉगिंग लेयर जो एक तस्वीर और बोले गए वाक्य को प्रकाशित, सत्यापित उत्पाद लिस्टिंग में बदल देती है, 35.2 लाख ग्रामीण भारतीय कारीगरों के लिए ऑफलाइन-प्रथम कार्य करती है।',
              'স্মার্ট ক্যাটালগিং স্তর, যা একটি ছবি ও একটি বলা বাক্যকে প্রকাশিত, যাচাইকৃত পণ্য তালিকায় রূপান্তরিত করে, ৩৫.২ লক্ষ গ্রামীণ ভারতীয় কারিগরের জন্য অফলাইন-প্রথম।'
            )}
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs text-paper/70 font-rowan font-medium">
            <ShieldCheck className="w-4 h-4 text-palette-sand" />
            <span>Built on Bhashini · Publishes to GeM & ONDC</span>
          </div>
        </div>

        {/* Column 1: Product */}
        <div className="space-y-3">
          <h3 className="font-lora font-semibold text-palette-sand text-sm uppercase tracking-wider">
            {t('Product', 'उत्पाद', 'পণ্য')}
          </h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <Link to="/how-it-works" className="hover:text-palette-butter transition-colors">
                {t('How It Works', 'यह कैसे काम करता है', 'কীভাবে কাজ করে')}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-palette-butter transition-colors">
                {t('Fair-Price Formula', 'उचित मूल्य फॉर्मूला', 'ন্যায্য মূল্যের সূত্র')}
              </Link>
            </li>
            <li>
              <Link to="/for-buyers" className="hover:text-palette-butter transition-colors">
                {t('GI Provenance Verification', 'जीआई प्रमाणन प्रणाली', 'GI উৎস যাচাই')}
              </Link>
            </li>
            <li>
              <Link to="/how-it-works#offline" className="hover:text-palette-butter transition-colors">
                {t('Offline Sync Architecture', 'ऑफलाइन सिंक आर्किटेक्चर', 'অফলাইন সিঙ্ক স্থাপত্য')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: For Artisans */}
        <div className="space-y-3">
          <h3 className="font-lora font-semibold text-palette-sand text-sm uppercase tracking-wider">
            {t('For Artisans', 'कारीगरों के लिए', 'কারিগরদের জন্য')}
          </h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <Link to="/for-artisans" className="hover:text-palette-butter transition-colors">
                {t('Artisan Benefits', 'कारीगरों के लाभ', 'কারিগরদের সুবিধা')}
              </Link>
            </li>
            <li>
              <Link to="/artisan-charter" className="hover:text-palette-butter transition-colors">
                {t('The Artisan Charter (6 Commitments)', 'कारीगर अधिकार पत्र (6 वादे)')}
              </Link>
            </li>
            <li>
              <Link to="/for-artisans#faq" className="hover:text-palette-butter transition-colors">
                {t('Bilingual FAQ (हिं / EN)', 'सामान्य प्रश्नोत्तरी')}
              </Link>
            </li>
            <li>
              <Link to="/for-artisans#download" className="hover:text-palette-butter transition-colors">
                {t('Get the Android App', 'एंड्रॉयड ऐप डाउनलोड करें')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Company */}
        <div className="space-y-3">
          <h3 className="font-lora font-semibold text-palette-sand text-sm uppercase tracking-wider">
            {t('Company & Legal', 'संस्था एवं नीतियां', 'সংস্থা ও আইনি')}
          </h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <Link to="/about" className="hover:text-palette-butter transition-colors">
                {t('About & 0.2% Story', 'हमारे बारे में और 0.2% कहानी')}
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:text-palette-butter transition-colors">
                {t('Press & Media (Samples)', 'प्रेस एवं मीडिया')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-palette-butter transition-colors">
                {t('Contact & Cluster Hubs', 'संपर्क एवं क्लस्टर हब', 'যোগাযোগ ও ক্লাস্টার কেন্দ্র')}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-palette-butter transition-colors">
                {t('Privacy Policy (DPDP 2023)', 'गोपनीयता नीति')}
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-palette-butter transition-colors">
                {t('Terms of Service', 'सेवा की शर्तें', 'পরিষেবার শর্তাবলি')}
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-palette-butter transition-colors">
                {t('Refunds & Made-to-Order', 'वापसी एवं रिफंड नीति')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-palette-wood/20 py-6 text-center text-xs text-paper/60">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Pathashilpa. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <HeartHandshake className="w-3.5 h-3.5 text-palette-clay" />
            <span>Dedicated to the indigenous weaving & handicraft clusters of India.</span>
          </p>
        </div>
        {/*
          Required by the Lipighor free-font licence, clause 6: webfont use
          needs e-mail permission plus this backlink in the landing page footer.
        */}
        <div className="max-w-6xl mx-auto px-4 pt-3 text-[11px] text-paper/45">
          <span>Bengali webfont — </span>
          <a
            href="https://lipighor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-palette-butter transition-colors"
          >
            lipighor.com
          </a>
        </div>
      </div>
    </footer>
  );
};
