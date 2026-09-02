import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PricingCalculator } from '../components/PricingCalculator';
import { Check, ShieldCheck, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const freeArtisanFeatures = [
    { titleEn: 'Unlimited AI Listings', titleHi: 'असीमित AI लिस्टिंग', descEn: 'Zero cost per photograph, voice note, or catalog generated.' },
    { titleEn: 'AI Background Removal', titleHi: 'AI बैकग्राउंड रिमूवल', descEn: 'Instant studio cutouts without paying for professional photography.' },
    { titleEn: 'Bilingual Translation', titleHi: 'द्विभाषी अनुवाद', descEn: 'Automatic Hindi to English cataloging via Bhashini ULCA.' },
    { titleEn: 'Offline Sync Engine', titleHi: 'ऑफलाइन सिंक इंजन', descEn: 'Local device draft storage with automatic background synchronization.' },
    { titleEn: 'Explained Pricing Floor', titleHi: 'लागत आधार गारंटी', descEn: 'Deterministic cost calculation protecting from loss-making sales.' },
    { titleEn: 'Public Storefront & ONDC', titleHi: 'सार्वजनिक दुकान व ONDC', descEn: 'Direct syndication to ONDC rails and government GeM procurement.' },
  ];

  const pricingFaqs = [
    {
      qEn: 'Why is Pathashilpa completely free for artisans?',
      qHi: 'पाथाशिल्पा कारीगरों के लिए पूरी तरह निःशुल्क क्यों है?',
      aEn: 'Our mission is to eliminate the economic barriers preventing 35.2 lakh rural artisans from entering the digital market. We monetize exclusively through B2B exporter features and institutional procurement tools, never taking a single rupee from the artisan.',
      aHi: 'हमारा उद्देश्य 35.2 लाख ग्रामीण कारीगरों को डिजिटल बाज़ार में लाना है। हम केवल बड़े व्यावसायिक खरीदारों और संस्थागत सेवाओं से राजस्व प्राप्त करते हैं, कारीगर की कमाई से नहीं।'
    },
    {
      qEn: 'How does Pathashilpa make money if artisans pay nothing?',
      qHi: 'यदि कारीगर कुछ नहीं देते तो पाथाशिल्पा की आय कैसे होती है?',
      aEn: 'We charge small facilitation commissions on large bulk B2B purchase orders, and offer paid subscription tools for exporters needing batch provenance certificates and GeM automated bidding.',
      aHi: 'हम बड़े थोक B2B ऑर्डरों पर व्यावसायिक खरीदारों से कमीशन लेते हैं और निर्यातकों को विशेष प्रमाणन व टूल्स प्रदान करते हैं।'
    },
    {
      qEn: 'Can an artisan set a price higher than the AI recommendation?',
      qHi: 'क्या कारीगर AI द्वारा बताए गए मूल्य से अधिक मांग सकता है?',
      aEn: 'Absolutely. The AI price serves as an audible safety floor so the artisan is never coerced into selling below cost. The artisan has 100% autonomy to price higher for rare artistry or custom zari motifs.',
      aHi: 'बिल्कुल। AI का मूल्य केवल एक सुरक्षा आधार है ताकि कारीगर को घाटा न हो। दुर्लभ कला या विशेष काम के लिए कारीगर अपनी इच्छानुसार अधिक मूल्य रख सकता है।'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
          {t('Transparent Economics', 'पारदर्शी मूल्य नीति')}
        </span>
        <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl text-palette-espresso">
          {t('Free for Artisans. Always Open. Always Fair.', 'कारीगरों के लिए हमेशा निःशुल्क। शत-प्रतिशत पारदर्शी।')}
        </h1>
        <p className="text-sm sm:text-base text-palette-wood leading-relaxed">
          {t(
            'We believe no artisan should ever pay to sell their own handmade heritage. Explore our open fair-price calculator and sustainable model.',
            'हमारा मानना है कि किसी भी कारीगर को अपनी कला बेचने के लिए भुगतान नहीं करना चाहिए। खुला फॉर्मूला कैलकुलेटर देखें।'
          )}
        </p>
      </div>

      {/* SECTION 1: ARTISAN FREE FOREVER PANEL */}
      <section className="bg-gradient-to-br from-palette-butter/50 via-white to-palette-sand/20 rounded-craft-lg border-2 border-palette-sand p-8 md:p-12 shadow-soft space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-palette-sand/60 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-palette-espresso text-palette-butter px-3 py-1 rounded-full text-xs font-mono font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-palette-sand" />
              <span>THE ZERO-RUPEE PROMISE</span>
            </div>
            <h2 className="font-rowan font-bold text-3xl text-palette-espresso">
              {t('₹0 For Artisans, Forever.', 'कारीगरों के लिए ₹0, हमेशा के लिए।')}
            </h2>
            <p className="text-xs text-palette-wood mt-1">
              {t(
                'No registration charges, no listing fees, no commission deductions, and no hidden subscriptions.',
                'न कोई पंजीयन शुल्क, न लिस्टिंग फीस, न कोई कमीशन कटौती।'
              )}
            </p>
          </div>

          <div className="text-center bg-white p-4 rounded-2xl border border-palette-sand shadow-sm">
            <span className="text-[10px] font-mono uppercase text-palette-wood block">Artisan Cost</span>
            <div className="font-rowan font-extrabold text-4xl text-palette-clay">₹0</div>
            <span className="text-[10px] text-emerald-800 font-bold font-mono">100% Payout to Loom</span>
          </div>
        </div>

        {/* 6 Things That Cost Nothing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeArtisanFeatures.map((f, i) => (
            <div key={i} className="bg-white/90 p-4 rounded-xl border border-palette-sand/50 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-palette-clay font-bold text-sm">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t(f.titleEn, f.titleHi)}</span>
              </div>
              <p className="text-xs text-palette-wood leading-relaxed pl-6">
                {f.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: LIVE FAIR-PRICE FORMULA ENGINE */}
      <section className="space-y-6">
        <PricingCalculator />
      </section>

      {/* SECTION 3: BUYER TIERS TABLE */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            {t('Buyer Ecosystem', 'खरीदार योजनाएं')}
          </span>
          <h2 className="font-rowan font-bold text-3xl text-palette-espresso">
            {t('Fair Plans for Retail, B2B, and Institutions', 'खुदरा, थोक एवं सरकारी खरीदारों के लिए')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Retail Buyer */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-palette-wood font-bold">Individual / Retail</span>
                <h3 className="font-lora font-bold text-xl text-palette-espresso">Direct Connoisseur</h3>
                <div className="font-rowan font-extrabold text-3xl text-palette-espresso pt-2">Free</div>
              </div>
              <ul className="space-y-2 text-xs text-palette-espresso/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Browse authentic cluster catalogs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>View maker story & verified GI tag</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct contact with rural weavers</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-full border border-palette-sand text-palette-espresso font-semibold text-xs hover:bg-paperAlt">
              Explore Storefront
            </button>
          </div>

          {/* B2B / Boutique Tier (Highlighted) */}
          <div className="bg-white rounded-craft p-6 border-2 border-palette-clay shadow-lift space-y-6 flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-palette-clay text-white text-[9px] font-mono uppercase px-3 py-1 rounded-full font-bold tracking-wider">
              Popular for Boutiques
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-palette-clay font-bold">B2B Exporters & Brands</span>
                <h3 className="font-lora font-bold text-xl text-palette-espresso">Cluster Direct B2B</h3>
                <div className="font-rowan font-extrabold text-3xl text-palette-clay pt-2">
                  ₹2,499 <span className="text-xs font-sans text-palette-wood font-normal">/ month</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-palette-espresso/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>Direct Bulk RFQ negotiation tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>Custom made-to-order sample tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>GSTIN verified compliance invoices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>Dedicated cluster coordinator desk</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-full bg-palette-clay text-white font-bold text-xs hover:bg-palette-clay/90 shadow-clay">
              Start 14-Day Free Trial
            </button>
          </div>

          {/* Institutional / GeM */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-palette-wood font-bold">Government & GeM</span>
                <h3 className="font-lora font-bold text-xl text-palette-espresso">Institutional Rail</h3>
                <div className="font-rowan font-extrabold text-3xl text-palette-espresso pt-2">Custom</div>
              </div>
              <ul className="space-y-2 text-xs text-palette-espresso/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>GeM API automated bulk catalog sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>GI authenticity lab batch certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>State department cluster monitoring</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-full border border-palette-sand text-palette-espresso font-semibold text-xs hover:bg-paperAlt">
              Request Institutional Desk
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING FAQ */}
      <section className="bg-white rounded-craft-lg border border-palette-sand/60 p-6 md:p-8 shadow-soft space-y-6">
        <div className="flex items-center gap-2 text-palette-clay font-mono text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>{t('Pricing FAQs', 'मूल्य संबंधित प्रश्न')}</span>
        </div>
        <h3 className="font-rowan font-bold text-2xl text-palette-espresso">
          {t('Frequently Asked Questions on Pricing', 'अक्सर पूछे जाने वाले प्रश्न')}
        </h3>

        <div className="space-y-3">
          {pricingFaqs.map((faq, idx) => (
            <div key={idx} className="border border-borderSoft rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 bg-paper hover:bg-paperAlt transition-colors"
              >
                <span className="font-lora font-bold text-sm text-palette-espresso">
                  {t(faq.qEn, faq.qHi)}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-palette-clay flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-palette-wood flex-shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="p-4 bg-white border-t border-borderSoft text-xs text-palette-wood leading-relaxed">
                  {t(faq.aEn, faq.aHi)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
