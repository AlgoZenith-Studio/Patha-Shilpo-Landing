import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ARTISAN_FAQS } from '../data/mockData';
import { 
  Smartphone, 
  Sparkles, 
  Volume2, 
  ShieldCheck, 
  Check, 
  Download, 
  ArrowRight, 
  WifiOff, 
  HeartHandshake, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Clock
} from 'lucide-react';

interface ForArtisansProps {
  onOpenDemo: () => void;
}

export const ForArtisans: React.FC<ForArtisansProps> = ({ onOpenDemo }) => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const artisanBenefits = [
    {
      titleEn: '1. No English, No Typing',
      titleHi: '1. न अंग्रेज़ी, न टाइपिंग',
      descEn: 'Operate the entire application by voice in Hindi or your mother tongue. Speak naturally about your craft.',
      descHi: 'अपनी बोली में बोलकर काम करें। माइक दबाएं और अपनी कला की बात कहें।',
    },
    {
      titleEn: '2. Works Offline on ₹6,000 Phones',
      titleHi: '2. ₹6,000 वाले फोन पर ऑफलाइन',
      descEn: 'No high-speed WiFi required. Works smoothly on Android 8+ devices with 2 GB RAM right at your loom.',
      descHi: 'महंगे फोन या 5G की कोई आवश्यकता नहीं। आपके मौजूदा फोन पर बिना इंटरनेट के काम करता है।',
    },
    {
      titleEn: '3. Instant Studio Cutouts',
      titleHi: '3. साफ बैकग्राउंड वाली फोटो',
      descEn: 'Take a picture anywhere. The AI cleans the background so your craft looks just like luxury showroom listings.',
      descHi: 'साधारण फोटो भी बड़े शोरूम जैसी चमकदार दिखेगी। बैकग्राउंड खुद हट जाएगा।',
    },
    {
      titleEn: '4. Never Sell at a Loss',
      titleHi: '4. कभी भी घाटे में न बेचें',
      descEn: 'The fair-price floor guarantees that your raw yarn cost and crafting hours are always fully compensated.',
      descHi: 'कच्चे माल और मेहनत के घंटों की सही गणना। कोई बिचौलिया आपका दाम नहीं गिरा सकता।',
    },
    {
      titleEn: '5. Direct to GeM & ONDC',
      titleHi: '5. सीधा सरकारी खरीद व ओएनडीसी',
      descEn: 'Reach government departments and urban retail buyers across India without paying intermediary commission.',
      descHi: 'सरकारी विभागों और बड़े खरीदारों तक आपकी पहुंच सीधे आपके अपने नाम से।',
    },
    {
      titleEn: '6. Your Name & Story Attached',
      titleHi: '6. आपकी पहचान आपके साथ',
      descEn: 'Every buyer sees your face, your village, and the verified Geographical Indication (GI) heritage tag.',
      descHi: 'खरीदार आपका चेहरा, आपका गांव और आपकी प्रामाणिक विरासत देखेगा।',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-palette-butter/50 via-white to-palette-sand/20 rounded-craft-lg border-2 border-palette-sand p-8 md:p-12 shadow-soft space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
            {t('For Rural Weavers & Artisans', 'कारीगरों एवं बुनकरों के लिए')}
          </span>
          <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl text-palette-espresso">
            {t('Your Craft. Your Price. In 90 Seconds.', 'आपकी कला। आपका दाम। केवल 90 सेकंड में।')}
          </h1>
          <p className="font-pally text-xl text-palette-clay">
            "{t('No typing, no paperwork, and zero commission — ever.', 'न लिखना, न कागज़ात, न कोई कमीशन — कभी नहीं।')}"
          </p>
          <p className="text-xs sm:text-sm text-palette-espresso/80 leading-relaxed">
            {t(
              'Pathashilpa is built specifically for Indian artisans who want to sell their own handloom and handicraft products without depending on village middlemen or learning complicated English computers.',
              'पाथाशिल्पा विशेष रूप से उन भारतीय कारीगरों के लिए बना है जो बिना किसी बिचौलिए के अपने फोन से सीधे अपनी कला बेचना चाहते हैं।'
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => setDownloadModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-palette-clay hover:bg-palette-clay/90 text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-clay"
          >
            <Download className="w-4 h-4 text-palette-butter" />
            <span>{t('Download Android APK (Free)', 'एंड्रॉयड ऐप डाउनलोड करें (मुफ़्त)')}</span>
          </button>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 bg-white hover:bg-paperAlt text-palette-espresso font-semibold text-xs px-6 py-3.5 rounded-full border border-palette-sand shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-palette-clay" />
            <span>{t('Try 90s Simulator First', 'पहले 90s डेमो चलाकर देखें')}</span>
          </button>
        </div>
      </div>

      {/* 6 CORE BENEFITS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            {t('Artisan Empowerment', 'कारीगरों के 6 बड़े लाभ')}
          </span>
          <h2 className="font-rowan font-bold text-3xl text-palette-espresso">
            {t('Why Thousands of Weavers Choose Pathashilpa', 'कारीगर पाथाशिल्पा क्यों चुनते हैं')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisanBenefits.map((b, idx) => (
            <div key={idx} className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3">
              <h3 className="font-lora font-bold text-lg text-palette-espresso">
                {t(b.titleEn, b.titleHi)}
              </h3>
              <p className="text-xs text-palette-wood leading-relaxed">
                {t(b.descEn, b.descHi)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU NEED (Phone Only Checklist) */}
      <section className="bg-palette-espresso text-paper rounded-craft-lg p-8 md:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-palette-wood/40 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-palette-sand font-bold tracking-wider">
              {t('Hardware Requirements', 'उपकरण की ज़रूरत')}
            </span>
            <h2 className="font-rowan font-bold text-2xl md:text-3xl text-paper">
              {t('What You Need to Start: Just Your Phone', 'शुरुआत के लिए क्या चाहिए: केवल आपका फोन')}
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-palette-butter text-palette-espresso px-4 py-2 rounded-xl text-xs font-bold font-mono">
            <Check className="w-4 h-4 text-palette-clay" />
            <span>₹6,000 Class Smartphone Compatible</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
          <div className="bg-white/10 p-4 rounded-xl space-y-1 border border-white/10">
            <span className="text-palette-sand block font-bold">1. Device</span>
            <p className="text-paper/80 font-sans">Any Android phone (Android 8+, 2 GB RAM). No computer needed.</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl space-y-1 border border-white/10">
            <span className="text-palette-sand block font-bold">2. Language</span>
            <p className="text-paper/80 font-sans">Your natural speaking voice in Hindi or regional dialect.</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl space-y-1 border border-white/10">
            <span className="text-palette-sand block font-bold">3. Network</span>
            <p className="text-paper/80 font-sans">Zero internet required at the loom. Uploads on 2G/patchy signal.</p>
          </div>
        </div>
      </section>

      {/* BILINGUAL FAQ */}
      <section id="faq" className="bg-white rounded-craft-lg border border-palette-sand/60 p-6 md:p-8 shadow-soft space-y-6 scroll-mt-24">
        <div className="flex items-center gap-2 text-palette-clay font-mono text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>{t('Artisan Questions & Answers', 'कारीगर प्रश्नोत्तरी')}</span>
        </div>
        <h3 className="font-rowan font-bold text-2xl text-palette-espresso">
          {t('Common Questions Asked by Weavers', 'बुनकरों के मन में उठने वाले सवाल')}
        </h3>

        <div className="space-y-3">
          {ARTISAN_FAQS.map((faq, idx) => (
            <div key={idx} className="border border-borderSoft rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 bg-paper hover:bg-paperAlt transition-colors"
              >
                <div className="space-y-1">
                  <span className="font-lora font-bold text-sm text-palette-espresso block">
                    {faq.qHi}
                  </span>
                  <span className="text-xs text-palette-wood block italic">
                    {faq.qEn}
                  </span>
                </div>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-palette-clay flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-palette-wood flex-shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="p-4 bg-white border-t border-borderSoft text-xs space-y-2 leading-relaxed">
                  <p className="text-palette-espresso font-medium">
                    {faq.aHi}
                  </p>
                  <p className="text-palette-wood italic border-t border-borderSoft/60 pt-2">
                    {faq.aEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Download Modal / APK Instruction */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-palette-espresso/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-paper border border-palette-sand rounded-craft-lg p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-rowan font-bold text-lg text-palette-espresso">
                {t('Download Pathashilpa Android App', 'पाथाशिल्पा एंड्रॉयड ऐप डाउनलोड')}
              </h4>
              <button onClick={() => setDownloadModalOpen(false)} className="text-palette-wood hover:text-palette-espresso">
                ✕
              </button>
            </div>
            <p className="text-xs text-palette-wood leading-relaxed">
              {t(
                'The Smart India Hackathon 2026 pilot build is optimized for Android 8+ devices. You can install the APK directly or explore via the web simulator.',
                'स्मार्ट इंडिया हैकाथॉन 2026 का पायलट वर्जन एंड्रॉयड 8+ के लिए अनुकूलित है।'
              )}
            </p>
            <div className="bg-white p-4 rounded-xl border border-palette-sand space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span>Version:</span>
                <span className="font-bold text-palette-clay">v1.0.0-SIH-MVP</span>
              </div>
              <div className="flex justify-between">
                <span>Size:</span>
                <span className="font-bold">18.4 MB (Offline Bundle)</span>
              </div>
              <div className="flex justify-between">
                <span>Languages:</span>
                <span className="font-bold">हिन्दी, Bundeli, English</span>
              </div>
            </div>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  alert(t('Pathashilpa APK download initiated for SIH 2026 demonstration build.', 'पाथाशिल्पा एपीके डाउनलोड शुरू किया गया।'));
                  setDownloadModalOpen(false);
                }}
                className="w-full py-3 rounded-full bg-palette-clay text-white font-bold text-xs shadow-clay hover:bg-palette-clay/90 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{t('Download APK Now', 'एपीके डाउनलोड करें')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
