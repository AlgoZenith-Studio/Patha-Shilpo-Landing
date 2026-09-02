import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OfflineSyncEngineVisualizer } from '../components/OfflineSyncEngineVisualizer';
import { 
  Camera, 
  Mic, 
  Calculator, 
  Sparkles, 
  Store, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Smartphone, 
  Search, 
  CreditCard, 
  Truck 
} from 'lucide-react';

interface HowItWorksProps {
  onOpenDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDemo }) => {
  const { t } = useLanguage();

  const artisanSteps = [
    {
      num: '01',
      titleEn: '1. Voice-Guided Onboarding',
      titleHi: '1. आवाज़ से प्रोफाइल निर्माण',
      descEn: 'Artisan signs in with an OTP and speaks their name, cluster, and craft. Profile is created in 30 seconds with zero typing.',
      descHi: 'कारीगर केवल ओटीपी दर्ज कर अपनी भाषा में नाम, गांव और कला बताता है। 30 सेकंड में बिना टाइप किए प्रोफाइल तैयार।',
      icon: Smartphone,
      offline: true,
    },
    {
      num: '02',
      titleEn: '2. Smart Camera Capture',
      titleHi: '2. कैमरे से फोटो लेना',
      descEn: 'Artisan points phone at the loom. On-device vision detects blur and uneven light, prompting a retake if needed.',
      descHi: 'करघे पर ही फोटो लें। फोन का AI धुंधलेपन और रोशनी की जांच करता है।',
      icon: Camera,
      offline: true,
    },
    {
      num: '03',
      titleEn: '3. AI Background Removal Studio',
      titleHi: '3. AI बैकग्राउंड हटाना',
      descEn: 'Separates the textile/craft from the cluttered background, generating a clean high-contrast marketplace cutout.',
      descHi: 'गड्ढा करघे के अस्त-व्यस्त बैकग्राउंड को हटाकर साफ स्टूडियो कटआउट में बदलता है।',
      icon: Sparkles,
      offline: true,
    },
    {
      num: '04',
      titleEn: '4. Voice Description & STT',
      titleHi: '4. आवाज़ में शिल्प की बात',
      descEn: 'Artisan describes yarn, pattern, and dye in Hindi or dialect. Bhashini creates structured English & Hindi tags.',
      descHi: 'कारीगर धागे, रंग और पैटर्न के बारे में बोलता है। AI दोनों भाषाओं में शीर्षक और विवरण लिखता है।',
      icon: Mic,
      offline: true,
    },
    {
      num: '05',
      titleEn: '5. Transparent Pricing & Publish',
      titleHi: '5. उचित मूल्य एवं प्रकाशन',
      descEn: 'The app reads the fair price reasoning aloud. One tap publishes to storefront, GeM, and ONDC.',
      descHi: 'ऐप मूल्य का कारण बोलकर सुनाता है। एक क्लिक में दुकान, GeM और ONDC पर लाइव।',
      icon: Store,
      offline: true,
    },
  ];

  const buyerSteps = [
    {
      num: '01',
      titleEn: '1. Browse Authentic Clusters',
      titleHi: '1. प्रामाणिक क्लस्टर खोजें',
      descEn: 'Discover genuine GI-tagged handloom and handicrafts directly from verified rural clusters across India.',
      descHi: 'देश भर के सत्यापित स्वदेशी क्लस्टर्स से 100% असली हस्तशिल्प खोजें।',
      icon: Search,
    },
    {
      num: '02',
      titleEn: '2. Direct Inquiry / RFQ',
      titleHi: '2. सीधा संपर्क या कोटेशन',
      descEn: 'Connect directly with the maker or cluster cooperative for retail, custom made-to-order, or institutional bulk RFQs.',
      descHi: 'कारीगर या क्लस्टर समिति से सीधा संपर्क कर मनपसंद नाप या थोक ऑर्डर की बात करें।',
      icon: Calculator,
    },
    {
      num: '03',
      titleEn: '3. Verified GI Delivery & Traceability',
      titleHi: '3. प्रमाणित जीआई डिलीवरी',
      descEn: 'Receive authentic craft directly from the weaver with digital provenance attached to the physical shipment.',
      descHi: 'पारदर्शिता और डिजिटल प्रमाणन के साथ सीधे करघे से अपने घर तक डिलीवरी प्राप्त करें।',
      icon: Truck,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
          {t('End-to-End User Journey', 'संपूर्ण कार्यप्रणाली')}
        </span>
        <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl text-palette-espresso">
          {t('How Pathashilpa Connects Loom to Living Room', 'करघे से खरीदार तक की यात्रा')}
        </h1>
        <p className="text-sm sm:text-base text-palette-wood leading-relaxed">
          {t(
            'Explore the 5-step voice-guided artisan journey, the 3-step buyer discovery process, and the offline-first sync engine that powers it all.',
            'जानिए 5-चरणीय कारीगर यात्रा, 3-चरणीय खरीदार प्रक्रिया और वह ऑफलाइन सिंक इंजन जो इस सब को संभव बनाता है।'
          )}
        </p>
      </div>

      {/* SECTION 1: 5-STEP ARTISAN JOURNEY */}
      <section className="space-y-10">
        <div className="flex items-center justify-between border-b border-borderSoft pb-4">
          <div>
            <span className="text-xs font-mono text-palette-clay uppercase font-bold">Artisan Journey</span>
            <h2 className="font-lora font-bold text-2xl text-palette-espresso">
              {t('5 Steps From Raw Craft to Published Listing', 'कच्चे शिल्प से प्रकाशित लिस्टिंग तक')}
            </h2>
          </div>
          <button
            onClick={onOpenDemo}
            className="bg-palette-clay hover:bg-palette-clay/90 text-white font-bold text-xs px-4 py-2 rounded-full shadow-clay"
          >
            {t('Launch 90s Simulator', '90s सिम्युलेटर खोलें')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisanSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-palette-butter flex items-center justify-center text-palette-clay font-bold font-mono">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                    ⚡ Works Offline
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-palette-wood font-bold">Step {s.num}</span>
                  <h3 className="font-lora font-bold text-lg text-palette-espresso">
                    {t(s.titleEn, s.titleHi)}
                  </h3>
                </div>
                <p className="text-xs text-palette-espresso/80 leading-relaxed">
                  {t(s.descEn, s.descHi)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: OFFLINE SYNC ARCHITECTURE VISUALIZER */}
      <section id="offline" className="space-y-6 scroll-mt-24">
        <OfflineSyncEngineVisualizer />
      </section>

      {/* SECTION 3: 3-STEP BUYER JOURNEY */}
      <section className="space-y-10">
        <div className="border-b border-borderSoft pb-4">
          <span className="text-xs font-mono text-palette-clay uppercase font-bold">Buyer Journey</span>
          <h2 className="font-lora font-bold text-2xl text-palette-espresso">
            {t('3 Steps for Retail & Institutional Buyers', 'खरीदारों के लिए 3 सरल चरण')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buyerSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-palette-espresso text-palette-sand flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-palette-wood font-bold">Step {s.num}</span>
                  <h3 className="font-lora font-bold text-lg text-palette-espresso">
                    {t(s.titleEn, s.titleHi)}
                  </h3>
                </div>
                <p className="text-xs text-palette-espresso/80 leading-relaxed">
                  {t(s.descEn, s.descHi)}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
