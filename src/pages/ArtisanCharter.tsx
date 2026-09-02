import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, HeartHandshake, CheckCircle2, Lock, FileCheck, Trash2, Ban } from 'lucide-react';

export const ArtisanCharter: React.FC = () => {
  const { t } = useLanguage();

  const commitments = [
    {
      num: '01',
      titleEn: '1. The Artisan Never Pays',
      titleHi: '1. कारीगर से कभी कोई शुल्क नहीं',
      descEn: 'Pathashilpa is completely free for rural artisans, forever. We take ₹0 in commission, ₹0 in listing fees, and ₹0 in platform cuts.',
      descHi: 'कारीगर के लिए ऐप हमेशा मुफ़्त रहेगा। न कोई कमीशन, न कोई लिस्टिंग फीस।',
      icon: Ban,
    },
    {
      num: '02',
      titleEn: '2. The Suggested Price is Never Below the Cost Floor',
      titleHi: '2. न्यूनतम लागत मूल्य से कम कभी नहीं',
      descEn: 'The algorithmic floor mandates that raw material expenditures and skilled hourly wages are mathematically covered before any listing is published.',
      descHi: 'कच्चा माल और कारीगर की मजदूरी का पूरा हिसाब लगाकर ही दाम तय होता है, ताकि कभी घाटा न हो।',
      icon: ShieldCheck,
    },
    {
      num: '03',
      titleEn: '3. Full Autonomy to Override Any Price',
      titleHi: '3. मूल्य बदलने का 100% अधिकार',
      descEn: 'The AI provides a defensible advisory benchmark with audible reasoning, but the artisan retains 100% freedom to raise or modify the final price.',
      descHi: 'AI केवल सलाह देता है, पर अपनी कला का अंतिम मूल्य तय करने का पूरा अधिकार सिर्फ कारीगर का है।',
      icon: CheckCircle2,
    },
    {
      num: '04',
      titleEn: '4. The Maker’s Story Stays Attached Forever',
      titleHi: '4. कारीगर की पहचान हमेशा उत्पाद के साथ',
      descEn: 'We never commoditize handloom into anonymous inventory. The weaver’s name, face, cluster, and GI tag travel with the product to every customer.',
      descHi: 'कारीगर का नाम, चेहरा और क्लस्टर हर खरीदार तक पहुंचेगा। कला को कभी बेनाम नहीं किया जाएगा।',
      icon: HeartHandshake,
    },
    {
      num: '05',
      titleEn: '5. Absolute Data Portability & Deletion',
      titleHi: '5. डेटा पर पूरा अधिकार व हटाने की आज़ादी',
      descEn: 'Artisans own their listings, images, and voice recordings. In compliance with the DPDP Act 2023, they can export or permanently delete all their records at any time.',
      descHi: 'अपनी तस्वीर, आवाज़ और सभी डेटा को जब चाहें डाउनलोड करें या स्थायी रूप से डिलीट करें।',
      icon: Trash2,
    },
    {
      num: '06',
      titleEn: '6. We Never Sell Artisan Data',
      titleHi: '6. कारीगर का डेटा कभी नहीं बेचा जाएगा',
      descEn: 'Artisan phone numbers, voice recordings, and cluster sales histories are never monetized, traded, or shared with third-party advertising networks.',
      descHi: 'कारीगरों की जानकारी किसी भी विज्ञापन कंपनी या तीसरे पक्ष को कभी नहीं बेची जाएगी।',
      icon: Lock,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-palette-butter text-palette-espresso px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border border-palette-sand">
          <ShieldCheck className="w-4 h-4 text-palette-clay" />
          <span>CONSTITUTION OF ETHICAL CATALOGING</span>
        </div>
        <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl text-palette-espresso">
          {t('The Pathashilpa Artisan Charter', 'पाथाशिल्पा कारीगर अधिकार पत्र')}
        </h1>
        <p className="font-kalam text-xl text-palette-clay">
          "{t('Six Uncompromising Commitments to India’s Rural Artisans', 'भारत के ग्रामीण कारीगरों के प्रति हमारे 6 अटूट वादे')}"
        </p>
      </div>

      {/* Commitments List */}
      <div className="space-y-6">
        {commitments.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.num}
              className="bg-white rounded-craft-lg border border-palette-sand/70 p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row items-start gap-6 hover:border-palette-clay/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-palette-butter text-palette-clay flex items-center justify-center flex-shrink-0 shadow-xs">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-palette-wood font-bold">ARTICLE {c.num}</span>
                  <h3 className="font-lora font-bold text-xl text-palette-espresso">
                    {t(c.titleEn, c.titleHi)}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-palette-wood leading-relaxed">
                  {t(c.descEn, c.descHi)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Seal Note */}
      <div className="bg-paperAlt rounded-craft p-6 border border-palette-sand text-center space-y-2 text-xs font-mono text-palette-espresso">
        <p className="font-bold">
          Smart India Hackathon 2026 Innovation Charter · Aligned with Digital Personal Data Protection (DPDP) Act 2023
        </p>
        <p className="text-palette-wood text-[11px]">
          Dedicated to the Ministry of Textiles and the Handloom Development Commissionerate.
        </p>
      </div>
    </div>
  );
};
