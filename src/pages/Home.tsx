import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PhoneMockup } from '../components/PhoneMockup';
import { PricingCalculator } from '../components/PricingCalculator';
import { RfqModal } from '../components/RfqModal';
import { StaggerTestimonials } from '../components/StaggerTestimonials';
import { MediaBackdrop } from '../components/MediaBackdrop';
import { SdgSection } from '../components/SdgSection';
import { Reveal } from '../components/Reveal';
import { FEATURED_ARTISANS } from '../data/mockData';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Camera, 
  Mic, 
  Store, 
  WifiOff, 
  Check, 
  X, 
  TrendingUp, 
  Award, 
  Heart, 
  Building2, 
  Layers, 
  HelpCircle,
  ShoppingBag,
  AlertTriangle
} from 'lucide-react';

interface HomeProps {
  onOpenDemo: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenDemo }) => {
  const { language, t, pick } = useLanguage();
  const [selectedArtisanForRfq, setSelectedArtisanForRfq] = useState<{ name: string; craft: string } | null>(null);

  return (
    <div className="space-y-20 md:space-y-28 overflow-hidden">
      {/* 14.1 HERO SECTION */}
      <section className="relative overflow-hidden pt-2 sm:pt-3 md:pt-4 pb-6 sm:pb-8 md:pb-10">
        <MediaBackdrop
          src="hero-inkbloom"
          kind="video"
          eager
          flip
          parallax={0.07}
          mediaClassName="opacity-[0.72]"
          scrim="bg-gradient-to-r from-paper/92 via-paper/84 to-paper/35"
        />
        {/* Blend the section's lower edge back into the page ground */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center lg:text-left lg:-mt-4">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-palette-butter/80 text-palette-espresso px-4 py-1.5 rounded-full text-xs font-rowan font-semibold border border-palette-sand/60 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-palette-clay shrink-0" />
                <span>{t('Offline-first', 'ऑफलाइन', 'অফলাইন')}</span>
                <span className="text-palette-clay/60 text-[10px]">•</span>
                <span>{t('Voice-only', 'केवल आवाज़', 'শুধু কণ্ঠস্বর')}</span>
                <span className="text-palette-clay/60 text-[10px]">•</span>
                <span>{t('Zero commission', 'शून्य कमीशन', 'শূণ্য কমিশন')}</span>
              </div>

              {/* H1 Title */}
              <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl lg:text-6xl text-palette-espresso tracking-tight leading-[1.1]">
                {pick({
                  en: <>Your craft. <br /><span className="text-palette-clay">Your price.</span> Your name.</>,
                  hi: <>आपकी कला। <br /><span className="text-palette-clay">आपका दाम।</span> आपका नाम।</>,
                  bn: <>আপনার শিল্প। <br /><span className="text-palette-clay">আপনার দাম।</span> আপনার নাম।</>,
                })}
              </h1>

              {/* Subheading */}
              <p className="font-rowan font-medium text-base sm:text-lg text-palette-espresso/95 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t(
                  'Pathashilpa turns a photograph and a spoken sentence into a live, fairly priced product listing, in about ninety seconds, even with no internet.',
                  'पाथाशिल्पा एक तस्वीर और एक बोले गए वाक्य को 90 सेकंड में एक लाइव, उचित मूल्य वाली उत्पाद लिस्टिंग में बदल देता है, बिना किसी इंटरनेट के।',
                  'পাথশিল্প একটি ছবি ও একটি বলা বাক্যকে প্রায় নব্বই সেকেন্ডে একটি লাইভ, ন্যায্য মূল্যের পণ্য তালিকায় রূপান্তরিত করে, ইন্টারনেট ছাড়াই।'
                )}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-palette-clay hover:bg-palette-clay/90 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-clay hover:-translate-y-0.5 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-palette-butter" />
                  <span>{t('Try 90-Second AI Demo', '90-सेकंड AI डेमो आज़माएं', '৯০ সেকেন্ডের AI ডেমো দেখুন')}</span>
                </button>

                <Link
                  to="/for-artisans"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-paperAlt text-palette-espresso px-6 py-3.5 rounded-full text-sm font-semibold border border-palette-sand/80 shadow-xs transition-colors"
                >
                  <span>{t('For Artisans', 'कारीगरों के लिए', 'কারিগরদের জন্য')}</span>
                  <ArrowRight className="w-4 h-4 text-palette-clay" />
                </Link>
              </div>

              {/* Trust Line */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 text-xs font-rowan font-semibold">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/95 border border-emerald-400/80 text-emerald-950 shadow-xs transition-all hover:bg-emerald-100/60 hover:scale-[1.02]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Built on Bhashini ULCA</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/95 border border-blue-400/80 text-blue-950 shadow-xs transition-all hover:bg-blue-100/60 hover:scale-[1.02]">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Publishes to GeM Portal</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/95 border border-amber-400/80 text-amber-950 shadow-xs transition-all hover:bg-amber-100/60 hover:scale-[1.02]">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>ONDC Open Network</span>
                </div>
              </div>
            </div>

            {/* Right Phone Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 14.2 STAT STRIP (Four Exact PRD Tiles) */}
      <section className="-mt-8 max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="bg-white rounded-craft-lg border border-palette-sand/60 p-6 md:p-8 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-borderSoft">
            {/* Tile 1 */}
            <div className="pt-4 sm:pt-0 sm:px-4 first:pl-0 space-y-2 text-center sm:text-left">
              <div className="font-rowan font-extrabold text-3xl md:text-4xl text-palette-clay">
                0.2%
              </div>
              <p className="font-rowan text-sm font-semibold text-palette-espresso">
                {t('of handloom sales happen online', 'हथकरघा बिक्री का केवल ऑनलाइन हिस्सा', 'তাঁত পণ্যের অনলাইন বিক্রির অংশ')}
              </p>
              <span className="text-[10px] text-palette-wood block font-mono">
                Source: 4th All India Handloom Census, via IDR
              </span>
            </div>

            {/* Tile 2 */}
            <div className="pt-4 sm:pt-0 sm:px-4 space-y-2 text-center sm:text-left">
              <div className="font-rowan font-extrabold text-3xl md:text-4xl text-palette-espresso">
                95.5%
              </div>
              <p className="font-rowan text-sm font-semibold text-palette-espresso">
                {t('rural mobile owners have a smartphone', 'ग्रामीण मोबाइल धारकों के पास स्मार्टफोन', 'গ্রামীণ মোবাইল ব্যবহারকারীর কাছে স্মার্টফোন')}
              </p>
              <span className="text-[10px] text-palette-wood block font-mono">
                Source: NSO Telecom Survey 2025
              </span>
            </div>

            {/* Tile 3 */}
            <div className="pt-4 sm:pt-0 sm:px-4 space-y-2 text-center sm:text-left">
              <div className="font-rowan font-extrabold text-3xl md:text-4xl text-palette-clay">
                67%
              </div>
              <p className="font-rowan text-sm font-semibold text-palette-espresso">
                {t('handloom households earn under ₹5,000/mo', 'हथकरघा परिवारों की आय ₹5,000/माह से कम', 'তাঁতি পরিবারের মাসিক আয় ₹৫,০০০-এর কম')}
              </p>
              <span className="text-[10px] text-palette-wood block font-mono">
                Source: PIB, Ministry of Textiles
              </span>
            </div>

            {/* Tile 4 */}
            <div className="pt-4 sm:pt-0 sm:px-4 space-y-2 text-center sm:text-left">
              <div className="font-rowan font-extrabold text-3xl md:text-4xl text-palette-espresso">
                35.2 Lakh
              </div>
              <p className="font-rowan text-sm font-semibold text-palette-espresso">
                {t('weavers & allied handicraft workers', 'बुनकर एवं संबंधित हस्तशिल्प कर्मी', 'তাঁতি ও সংশ্লিষ্ট হস্তশিল্প কর্মী')}
              </p>
              <span className="text-[10px] text-palette-wood block font-mono">
                Source: PIB, Ministry of Textiles
              </span>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* 14.3 THE INSIGHT BAND (Full-Width Dark Espresso Band) */}
      <section className="bg-palette-espresso text-paper py-20 md:py-28 relative overflow-hidden">
        <MediaBackdrop
          src="insight-indigo"
          kind="video"
          parallax={0.14}
          scrim="bg-gradient-to-b from-palette-espresso/92 via-palette-espresso/78 to-palette-espresso/95"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-palette-sand font-bold">
            {t('The Foundational Insight', 'मौलिक दृष्टिकोण', 'মূল উপলব্ধি')}
          </span>
          <blockquote className="font-rowan text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-paper">
            "{t(
              '0.2% online against 95.5% smartphone ownership. The device barrier is already gone. What is missing is software the artisan can operate.',
              '95.5% स्मार्टफोन के मुकाबले केवल 0.2% ऑनलाइन बिक्री। फोन पहले से उनके हाथ में है। कमी सिर्फ ऐसे सॉफ्टवेयर की है जिसे वे आसानी से चला सकें।',
              '৯৫.৫% স্মার্টফোনের বিপরীতে মাত্র ০.২% অনলাইন বিক্রি। ফোন আগে থেকেই তাঁদের হাতে। অভাব কেবল এমন সফটওয়্যারের, যা তাঁরা চালাতে পারেন।'
            )}"
          </blockquote>
          <p className="font-rowan text-lg text-palette-butter">
            — Pathashilpa Problem Statement Analysis (Smart India Hackathon 2026)
          </p>
        </div>
      </section>

      {/* 14.4 HOW IT WORKS (3-Column Flow) */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <MediaBackdrop
          src="process-kalam"
          parallax={0.1}
          mediaClassName="opacity-70"
          scrim="bg-gradient-to-b from-paper via-paper/80 to-paper"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            {t('The 3-Action Workflow', '3 सरल चरण', '৩টি সহজ ধাপ')}
          </span>
          <h2 className="font-rowan font-bold text-3xl sm:text-4xl text-palette-espresso">
            {t('How an Artisan Creates a Listing in 90 Seconds', 'कारीगर 90 सेकंड में लिस्टिंग कैसे बनाता है', '৯০ সেকেন্ডে কারিগর কীভাবে তালিকা তৈরি করেন')}
          </h2>
          <p className="text-sm text-palette-wood">
            {t(
              'No registration forms, no English typing, and no waiting for urban middlemen.',
              'न कोई जटिल फॉर्म, न अंग्रेज़ी टाइपिंग, न बिचौलियों का इंतज़ार।'
            )}
          </p>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-4 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-palette-butter text-palette-clay flex items-center justify-center font-bold font-mono text-lg shadow-xs">
              <Camera className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-palette-wood uppercase font-bold">Step 1 · 20 Seconds</span>
              <h3 className="font-lora font-bold text-xl text-palette-espresso">
                {t('Photograph it', 'तस्वीर लें', 'ছবি তুলুন')}
              </h3>
            </div>
            <p className="text-xs text-palette-espresso/80 leading-relaxed">
              {t(
                'Point the camera at the loom. The on-device AI automatically inspects blur, fixes exposure, and removes the messy background for an instant studio cutout.',
                'करघे पर ही कैमरा घुमाएं। फोन पर मौजूद AI अपने आप धुंधलापन जांचता है और स्टूडियो जैसा साफ बैकग्राउंड तैयार करता है।'
              )}
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-4 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-palette-butter text-palette-clay flex items-center justify-center font-bold font-mono text-lg shadow-xs">
              <Mic className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-palette-wood uppercase font-bold">Step 2 · 30 Seconds</span>
              <h3 className="font-lora font-bold text-xl text-palette-espresso">
                {t('Speak about it', 'अपनी भाषा में बोलें', 'নিজের ভাষায় বলুন')}
              </h3>
            </div>
            <p className="text-xs text-palette-espresso/80 leading-relaxed">
              {t(
                'Describe the piece in Hindi or your regional dialect. Bhashini AI extracts craft details, yarn type, and generates bilingual English & Hindi descriptions automatically.',
                'अपनी बोली या भाषा में बोलें। भाषिणी AI स्वतः शिल्प, धागे के प्रकार को समझकर अंग्रेज़ी और हिन्दी में पूरा विवरण तैयार कर देता है।'
              )}
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-4 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-palette-butter text-palette-clay flex items-center justify-center font-bold font-mono text-lg shadow-xs">
              <Store className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-palette-wood uppercase font-bold">Step 3 · 40 Seconds</span>
              <h3 className="font-lora font-bold text-xl text-palette-espresso">
                {t('It goes live', 'लाइव प्रकाशित', 'লাইভ প্রকাশিত')}
              </h3>
            </div>
            <p className="text-xs text-palette-espresso/80 leading-relaxed">
              {t(
                'Calculates a transparent fair price with spoken reasoning. One tap publishes the listing directly to your storefront, GeM portal, and ONDC.',
                'उचित मूल्य तय करता है और बोलकर कारण समझाता है। एक क्लिक में आपकी दुकान, GeM पोर्टल और ONDC पर प्रकाशित हो जाता है।'
              )}
            </p>
          </div>
        </div>
        </Reveal>

        {/* Footnote on Offline Silent Upgrade */}
        <div className="bg-paperAlt/90 backdrop-blur-sm p-4 rounded-xl border border-palette-sand/50 text-center text-xs text-palette-wood font-mono">
          ⚡ <strong>{t('Zero Internet Guarantee:', 'ऑफलाइन गारंटी:')}</strong> {t(
            'All three steps work with zero network bars. The listing is saved as a live draft and improves silently when you reconnect, and the price never changes.',
            'तीनों चरण बिना इंटरनेट के पूरे होते हैं। नेटवर्क आते ही लिस्टिंग साइलेंटली अपग्रेड होती है, और तय मूल्य कभी नहीं बदलता।'
          )}
        </div>
        </div>
      </section>

      {/* 14.5 WHAT MAKES IT DIFFERENT (5 Distinct Cards) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            {t('Core Differentiators', '5 मुख्य अंतर', 'মূল পার্থক্য')}
          </span>
          <h2 className="font-rowan font-bold text-3xl sm:text-4xl text-palette-espresso">
            {t('Not Another Marketplace. The Layer That Creates the Listing.', 'कोई अन्य बाज़ार नहीं, बल्कि लिस्टिंग बनाने वाली तकनीक।', 'আরেকটি বাজার নয়। তালিকা তৈরির স্তর।')}
          </h2>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3">
            <div className="w-8 h-8 rounded-lg bg-palette-butter text-palette-espresso flex items-center justify-center font-bold text-xs font-mono">
              01
            </div>
            <h3 className="font-lora font-bold text-lg text-palette-espresso">
              {t('1. Offline-First AI', '1. ऑफलाइन-प्रथम AI')}
            </h3>
            <p className="text-xs text-palette-wood leading-relaxed">
              {t(
                'Complete listing creation works fully without internet. Self-resuming queue uploads under 400 KB payloads on 2G/patchy signal.',
                'पूरी लिस्टिंग बिना इंटरनेट के बनती है। नेटवर्क आते ही 400 KB से कम का डेटा अपने आप सिंक हो जाता है।'
              )}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3">
            <div className="w-8 h-8 rounded-lg bg-palette-butter text-palette-espresso flex items-center justify-center font-bold text-xs font-mono">
              02
            </div>
            <h3 className="font-lora font-bold text-lg text-palette-espresso">
              {t('2. Voice-Only Workflow', '2. केवल आवाज़ से संचालन')}
            </h3>
            <p className="text-xs text-palette-wood leading-relaxed">
              {t(
                'Zero typing at any step. Speaks natural Hindi and dialect; Bhashini STT translates and formats titles, tags, and catalog attributes.',
                'किसी भी चरण में टाइपिंग की आवश्यकता नहीं। अपनी प्राकृतिक बोली में बोलें; AI सभी विवरण खुद तैयार करता है।'
              )}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3">
            <div className="w-8 h-8 rounded-lg bg-palette-butter text-palette-espresso flex items-center justify-center font-bold text-xs font-mono">
              03
            </div>
            <h3 className="font-lora font-bold text-lg text-palette-espresso">
              {t('3. Explained Pricing', '3. कारण सहित उचित मूल्य')}
            </h3>
            <p className="text-xs text-palette-wood leading-relaxed">
              {t(
                'Shows why, not just the number. An audible breakdown of material cost + labor hours prevents artisans from ever selling below cost.',
                'केवल एक संख्या नहीं, बल्कि पूरा कारण। कच्चा माल + मजदूरी का हिसाब बोलकर सुनाता है ताकि कभी घाटा न हो।'
              )}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3">
            <div className="w-8 h-8 rounded-lg bg-palette-butter text-palette-espresso flex items-center justify-center font-bold text-xs font-mono">
              04
            </div>
            <h3 className="font-lora font-bold text-lg text-palette-espresso">
              {t('4. Story as Listing Data', '4. कारीगर की पहचान उत्पाद के साथ')}
            </h3>
            <p className="text-xs text-palette-wood leading-relaxed">
              {t(
                'Maker identity, cluster location, and authentic GI verification tag travel permanently with every product listing.',
                'कारीगर का चेहरा, क्लस्टर का नाम और जीआई टैग हर उत्पाद के साथ हमेशा जुड़ा रहता है।'
              )}
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3 lg:col-span-2">
            <div className="w-8 h-8 rounded-lg bg-palette-butter text-palette-espresso flex items-center justify-center font-bold text-xs font-mono">
              05
            </div>
            <h3 className="font-lora font-bold text-lg text-palette-espresso">
              {t('5. One Record, All Public Channels', '5. एक रिकॉर्ड, सभी सार्वजनिक नेटवर्क')}
            </h3>
            <p className="text-xs text-palette-wood leading-relaxed">
              {t(
                'Publish once to syndicate across the public artisan storefront, GeM government procurement rails, and the ONDC decentralized network simultaneously.',
                'एक बार लिस्टिंग बनाएं और वह आपकी अपनी दुकान, सरकारी GeM पोर्टल और ONDC नेटवर्क पर एक साथ लाइव हो जाती है।'
              )}
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* 14.6 FEATURED ARTISANS (3 Cards with Kalam Handwritten Touch) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
              {t('Verified Indigenous Clusters', 'सत्यापित स्वदेशी क्लस्टर', 'যাচাইকৃত দেশীয় ক্লাস্টার')}
            </span>
            <h2 className="font-rowan font-bold text-3xl text-palette-espresso">
              {t('Meet the Masters Behind the Craft', 'कला के पीछे के उस्ताद कारीगरों से मिलें', 'শিল্পের পিছনের কারিগরদের সঙ্গে পরিচিত হন')}
            </h2>
          </div>

          <Link
            to="/for-buyers"
            className="text-xs font-bold text-palette-clay hover:text-palette-clay/80 inline-flex items-center gap-1"
          >
            <span>{t('Browse all cluster directories', 'सभी क्लस्टर देखें')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Reveal delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_ARTISANS.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-craft-lg border border-palette-sand/60 overflow-hidden shadow-soft flex flex-col justify-between hover:shadow-lift transition-all"
            >
              <div className="p-6 space-y-4">
                {/* Cluster Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-palette-butter text-palette-espresso font-mono text-[10px] px-2.5 py-1 rounded-full font-semibold border border-palette-sand/60">
                    GI: {language === 'hi' ? artisan.clusterHi : artisan.cluster}
                  </span>
                  <span className="text-[10px] text-palette-wood font-mono">
                    {artisan.experienceYears} {t('Yrs Exp', 'वर्ष अनुभव')}
                  </span>
                </div>

                {/* Artisan Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-palette-sand/30 border border-palette-clay/40 flex items-center justify-center font-rowan font-bold text-palette-espresso text-base">
                    {artisan.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-lora font-bold text-lg text-palette-espresso">
                      {language === 'hi' ? artisan.nameHi : artisan.name}
                    </h3>
                    <p className="text-xs text-palette-wood">
                      {language === 'hi' ? artisan.craftHi : artisan.craft}
                    </p>
                  </div>
                </div>

                {/* Artisan Story in Kalam Font */}
                <div className="bg-paperAlt p-3.5 rounded-xl border border-borderSoft">
                  <p className="font-pally text-sm text-palette-espresso leading-relaxed">
                    "{language === 'hi' ? artisan.storyHi : artisan.story}"
                  </p>
                </div>

                {/* Sample Live Product */}
                <div className="border border-palette-sand/40 rounded-xl p-3 bg-paper flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[9px] text-palette-wood uppercase block">Sample Listing</span>
                    <span className="font-bold text-palette-espresso text-[11px] line-clamp-1">
                      {language === 'hi' ? artisan.sampleProduct.titleHi : artisan.sampleProduct.title}
                    </span>
                  </div>
                  <div className="font-rowan font-bold text-sm text-palette-clay">
                    ₹{artisan.sampleProduct.price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-paperAlt border-t border-borderSoft flex gap-2">
                <button
                  onClick={() => setSelectedArtisanForRfq({ name: artisan.name, craft: artisan.craft })}
                  className="w-full py-2 px-3 rounded-lg bg-palette-clay hover:bg-palette-clay/90 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-palette-butter" />
                  <span>{t('Direct RFQ / Connect', 'कोटेशन मांगें / संपर्क करें')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      {/* VOICES FROM THE PILOT — stacked testimonial carousel */}
      <section className="space-y-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
              {t('Voices From the Cluster', 'क्लस्टर की आवाज़ें', 'ক্লাস্টারের কণ্ঠস্বর')}
            </span>
            <h2 className="font-rowan font-bold text-3xl sm:text-4xl text-palette-espresso">
              {t('What Artisans and Buyers Say', 'कारीगर और खरीदार क्या कहते हैं', 'কারিগর ও ক্রেতারা কী বলেন')}
            </h2>
            <p className="text-sm text-palette-wood">
              {t(
                'Tap any card to bring it forward, or use the arrows to move through the stack.',
                'किसी भी कार्ड पर टैप करें या तीरों से आगे-पीछे जाएं।'
              )}
            </p>
          </div>
          </Reveal>
        </div>

        <StaggerTestimonials />

        {/* Sample-content label, per the same standard applied to press coverage */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-2 text-[11px] font-mono text-palette-wood text-center">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span>
              {t(
                'Illustrative pilot feedback shown for Smart India Hackathon 2026 demonstration purposes.',
                'यह प्रतिक्रिया केवल स्मार्ट इंडिया हैकाथॉन 2026 प्रदर्शन के उद्देश्य से दिखाई गई है।'
              )}
            </span>
          </p>
        </div>
      </section>

      {/* 14.7 CONDENSED COMPARISON MATRIX */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            {t('Capability Matrix', 'सटीक तुलना', 'সক্ষমতার তুলনা')}
          </span>
          <h2 className="font-rowan font-bold text-3xl text-palette-espresso">
            {t('How Pathashilpa Compares to Legacy Platforms', 'पारंपरिक प्लेटफॉर्म्स से तुलना', 'প্রচলিত প্ল্যাটফর্মের সঙ্গে তুলনা')}
          </h2>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="overflow-x-auto bg-white rounded-craft-lg border border-palette-sand/60 shadow-soft">
          <table className="w-full text-xs text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-borderSoft bg-paperAlt font-mono">
                <th className="p-4 font-bold text-palette-espresso">Capability / Feature</th>
                <th className="p-4 font-bold text-palette-clay bg-palette-butter/50 border-x border-palette-sand/60">
                  ★ Pathashilpa
                </th>
                <th className="p-4 text-palette-wood">Amazon Karigar / Flipkart</th>
                <th className="p-4 text-palette-wood">Traditional Middleman</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borderSoft text-palette-espresso">
              <tr>
                <td className="p-4 font-medium">100% Offline Listing Creation</td>
                <td className="p-4 bg-palette-butter/30 border-x border-palette-sand/40 font-bold text-emerald-800 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-600" /> Yes (On-Device AI)
                </td>
                <td className="p-4 text-palette-wood">No (Requires high-speed web)</td>
                <td className="p-4 text-palette-wood">Paper ledger</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Voice-Only (No English Typing)</td>
                <td className="p-4 bg-palette-butter/30 border-x border-palette-sand/40 font-bold text-emerald-800 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-600" /> Yes (Bhashini STT)
                </td>
                <td className="p-4 text-palette-wood">No (Complex forms)</td>
                <td className="p-4 text-palette-wood">Verbal haggling</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Explained Cost Floor Guarantee</td>
                <td className="p-4 bg-palette-butter/30 border-x border-palette-sand/40 font-bold text-emerald-800 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-600" /> Yes (Spoken Rationale)
                </td>
                <td className="p-4 text-palette-wood">No (Algorithm discount cuts)</td>
                <td className="p-4 text-palette-wood">Prices depressed at will</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Artisan Commission Fee</td>
                <td className="p-4 bg-palette-butter/30 border-x border-palette-sand/40 font-bold text-emerald-800 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-600" /> ₹0 (Free Forever)
                </td>
                <td className="p-4 text-palette-wood">15% - 28% Platform fee</td>
                <td className="p-4 text-palette-wood">40% - 60% Margin markup</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">GI Provenance Attached to Product</td>
                <td className="p-4 bg-palette-butter/30 border-x border-palette-sand/40 font-bold text-emerald-800 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-600" /> Yes (Maker Identity Stays)
                </td>
                <td className="p-4 text-palette-wood">No (Anonymous SKU)</td>
                <td className="p-4 text-palette-wood">Trader claims origin</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Public Channel Syndication (GeM + ONDC)</td>
                <td className="p-4 bg-palette-butter/30 border-x border-palette-sand/40 font-bold text-emerald-800 flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-600" /> Yes (One Record, All Rails)
                </td>
                <td className="p-4 text-palette-wood">No (Walled Garden Lock-in)</td>
                <td className="p-4 text-palette-wood">Physical melas only</td>
              </tr>
            </tbody>
          </table>
        </div>
        </Reveal>
      </section>

      {/* UN SUSTAINABLE DEVELOPMENT GOALS */}
      <SdgSection />

      {/* 14.8 FOR ARTISANS / FOR BUYERS SPLIT BAND */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Artisan Panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-paper to-palette-sand/20 rounded-craft-lg p-8 border border-palette-sand/70 shadow-soft space-y-6 flex flex-col justify-between">
            <MediaBackdrop
              src="artisan-loom"
              kind="video"
              parallax={0.06}
              mediaClassName="opacity-[0.28]"
              scrim="bg-gradient-to-br from-paper/85 via-paper/75 to-paper/60"
            />
            <div className="relative space-y-4">
              <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
                {t('For Rural Artisans & Weavers', 'ग्रामीण कारीगरों व बुनकरों के लिए', 'গ্রামীণ কারিগর ও তাঁতিদের জন্য')}
              </span>
              <h3 className="font-rowan font-bold text-2xl text-palette-espresso">
                {t('Sell Without Typing. Sell at Your Fair Price.', 'बिना टाइपिंग के बेचें। अपने तय दाम पर बेचें।', 'টাইপ না করেই বিক্রি করুন। নিজের ন্যায্য দামে বিক্রি করুন।')}
              </h3>
              <ul className="space-y-2.5 text-xs text-palette-espresso/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>{t('Zero commission taken: you keep 100% of your earnings.', 'कोई कमीशन नहीं: आपकी 100% कमाई आपकी।')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>{t('Works 100% offline at your loom on any ₹6,000 smartphone.', 'करघे पर बिना इंटरनेट के ₹6,000 वाले किसी भी फोन पर काम करता है।')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-clay flex-shrink-0" />
                  <span>{t('Voice explanation tells you why your craft is worth every rupee.', 'ऑडियो में सुनिए कि आपकी मेहनत की असली कीमत क्या है।')}</span>
                </li>
              </ul>
            </div>

            <Link
              to="/for-artisans"
              className="relative inline-flex items-center justify-center gap-2 bg-palette-clay hover:bg-palette-clay/90 text-white py-3 px-6 rounded-full text-xs font-bold shadow-clay"
            >
              <span>{t('Artisan Guide & App Details', 'कारीगर मार्गदर्शिका व ऐप')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Buyer Panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-palette-espresso to-neutral-900 text-paper rounded-craft-lg p-8 border border-palette-wood/40 shadow-soft space-y-6 flex flex-col justify-between">
            <MediaBackdrop
              src="buyer-bolts"
              kind="video"
              parallax={0.06}
              mediaClassName="opacity-60"
              scrim="bg-gradient-to-br from-palette-espresso/85 via-palette-espresso/80 to-neutral-900/90"
            />
            <div className="relative space-y-4">
              <span className="text-xs font-mono uppercase text-palette-sand font-bold tracking-wider">
                {t('For Retail & Institutional Buyers', 'खरीदारों व सरकारी एजेंसियों के लिए', 'খুচরা ও প্রাতিষ্ঠানিক ক্রেতাদের জন্য')}
              </span>
              <h3 className="font-rowan font-bold text-2xl text-paper">
                {t('100% Verified GI Provenance. Direct Maker Contact.', 'शत-प्रतिशत प्रमाणित जीआई हस्तशिल्प। सीधा कारीगर संपर्क।', '১০০% যাচাইকৃত GI উৎস। সরাসরি কারিগরের সঙ্গে যোগাযোগ।')}
              </h3>
              <ul className="space-y-2.5 text-xs text-paper/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-sand flex-shrink-0" />
                  <span>{t('Direct made-to-order procurement with verified cluster identity.', 'सीधा कारीगर से ऑर्डर पर निर्माण, शून्य मिलावट।')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-sand flex-shrink-0" />
                  <span>{t('Full GeM and ONDC compliance with GSTIN invoices.', 'GeM और ONDC अनुपालन के साथ विधिवत जीएसटी बिल।')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palette-sand flex-shrink-0" />
                  <span>{t('Bulk RFQ workflow for exporters and luxury boutiques.', 'थोक मांग और निर्यातकों के लिए समर्पित कोटेशन प्रणाली।')}</span>
                </li>
              </ul>
            </div>

            <Link
              to="/for-buyers"
              className="relative inline-flex items-center justify-center gap-2 bg-palette-sand hover:bg-palette-sand/90 text-palette-espresso py-3 px-6 rounded-full text-xs font-bold shadow-sm"
            >
              <span>{t('Buyer RFQ & Provenance Portal', 'खरीदार पोर्टल एवं कोटेशन')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        </Reveal>
      </section>

      {/* 14.9 CLOSING CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative overflow-hidden bg-palette-butter/40 border-2 border-palette-sand rounded-craft-lg p-8 md:p-12 text-center shadow-soft">
          <MediaBackdrop
            src="cta-craft"
            parallax={0.08}
            mediaClassName="opacity-50"
            scrim="bg-gradient-to-br from-palette-butter/75 via-paper/80 to-palette-sand/45"
          />
          <div className="relative space-y-6">
            <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
              {t('Smart India Hackathon 2026 Innovation', 'स्मार्ट इंडिया हैकाथॉन 2026')}
            </span>
            <blockquote className="font-rowan text-2xl sm:text-3xl md:text-4xl font-bold text-palette-espresso max-w-2xl mx-auto leading-snug">
              "{t(
                'Every rival starts at the server. We start in the artisan’s hand.',
                'हर दूसरा मंच सर्वर से शुरू होता है। हम कारीगर के हाथ से शुरू करते हैं।',
                'প্রতিটি প্রতিদ্বন্দ্বী শুরু করে সার্ভার থেকে। আমরা শুরু করি কারিগরের হাত থেকে।'
              )}"
            </blockquote>
            <p className="text-xs text-palette-wood max-w-md mx-auto">
              {t(
                'Join us in bringing 35.2 lakh rural artisans into the formal digital economy without making them type a single word.',
                '35.2 लाख ग्रामीण कारीगरों को बिना एक भी शब्द टाइप कराए डिजिटल अर्थव्यवस्था से जोड़ने के हमारे मिशन में शामिल हों।'
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="bg-palette-clay hover:bg-palette-clay/90 text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-clay"
              >
                {t('Explore Crafts & Try Demo', 'शिल्प देखें एवं डेमो चलाएं')}
              </button>
              <Link
                to="/contact"
                className="bg-white hover:bg-paperAlt text-palette-espresso font-semibold text-xs px-8 py-3.5 rounded-full border border-palette-sand"
              >
                {t('Partner With Us', 'हमारे साथ भागीदार बनें')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ Modal instance */}
      <RfqModal
        isOpen={!!selectedArtisanForRfq}
        onClose={() => setSelectedArtisanForRfq(null)}
        artisanName={selectedArtisanForRfq?.name}
        craftName={selectedArtisanForRfq?.craft}
      />
    </div>
  );
};
