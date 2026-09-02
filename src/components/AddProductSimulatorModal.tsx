import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Camera, 
  Mic, 
  Sparkles, 
  DollarSign, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Volume2, 
  ShieldCheck, 
  WifiOff, 
  Wifi, 
  Layers, 
  RefreshCw,
  Store
} from 'lucide-react';

interface AddProductSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProductSimulatorModal: React.FC<AddProductSimulatorModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isRecording, setIsRecording] = useState(false);
  const [materialCost, setMaterialCost] = useState<number>(1400);
  const [hours, setHours] = useState<number>(8);
  const [isOffline, setIsOffline] = useState(false);
  const [publishedSuccess, setPublishedSuccess] = useState(false);
  const [audioExplaining, setAudioExplaining] = useState(false);

  if (!isOpen) return null;

  // Formula as per PRD:
  // floor = (materialCost + hours * 150) * 1.15
  // suggested = round(floor * 1.25, 50)
  // max = round(suggested * 1.3, 50)
  const floor = Math.round((materialCost + hours * 150) * 1.15);
  const roundTo50 = (val: number) => Math.round(val / 50) * 50;
  const suggested = roundTo50(floor * 1.25);
  const maxPrice = roundTo50(suggested * 1.3);

  const resetDemo = () => {
    setStep(1);
    setIsRecording(false);
    setPublishedSuccess(false);
    setAudioExplaining(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-palette-espresso/80 backdrop-blur-sm animate-fadeIn select-none">
      <div className="bg-paper border border-palette-sand/60 rounded-craft-lg shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-palette-espresso text-paper p-4 flex items-center justify-between border-b border-palette-wood/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-palette-butter flex items-center justify-center text-palette-espresso font-bold">
              <Sparkles className="w-5 h-5 text-palette-clay" />
            </div>
            <div>
              <h3 className="font-rowan font-bold text-lg text-paper flex items-center gap-2">
                {t('90-Second Artisan Listing Studio', '90 सेकंड कारीगर लिस्टिंग स्टूडियो')}
                <span className="text-[10px] bg-palette-butter text-palette-espresso font-mono px-2 py-0.5 rounded font-semibold">
                  INTERACTIVE SIMULATOR
                </span>
              </h3>
              <p className="text-xs text-paper/70 font-mono">
                {t('Experience the exact 4-step offline-first mobile flow', 'कारीगर का 4-चरणीय ऑफलाइन-प्रथम मोबाइल अनुभव')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode switch */}
            <button
              onClick={() => setIsOffline(!isOffline)}
              className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition-colors ${
                isOffline 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/40' 
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
              }`}
            >
              {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
              <span>{isOffline ? 'Offline Mode' : 'Online Mode'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-paper/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="bg-paperAlt px-6 py-3 border-b border-borderSoft flex items-center justify-between text-xs font-medium">
          {[
            { num: 1, labelEn: '1. Photo Capture', labelHi: '1. फोटो' },
            { num: 2, labelEn: '2. Voice Description', labelHi: '2. आवाज़' },
            { num: 3, labelEn: '3. Costs & Time', labelHi: '3. लागत व समय' },
            { num: 4, labelEn: '4. AI Review & Publish', labelHi: '4. समीक्षा' },
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => setStep(s.num as any)}
              className={`cursor-pointer flex items-center gap-1.5 transition-colors ${
                step === s.num
                  ? 'text-palette-clay font-bold border-b-2 border-palette-clay pb-0.5'
                  : step > s.num
                  ? 'text-emerald-700 font-semibold'
                  : 'text-palette-wood/70'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === s.num
                  ? 'bg-palette-clay text-white'
                  : step > s.num
                  ? 'bg-emerald-600 text-white'
                  : 'bg-borderSoft text-palette-wood'
              }`}>
                {step > s.num ? <Check className="w-3 h-3" /> : s.num}
              </span>
              <span className="hidden sm:inline">{t(s.labelEn, s.labelHi)}</span>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: PHOTO */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-lora font-bold text-lg text-palette-espresso">
                    {t('Step 1 · Shoot or Capture Product Photo', 'चरण 1 · उत्पाद की तस्वीर लें')}
                  </h4>
                  <p className="text-xs text-palette-wood">
                    {t(
                      'The on-device AI automatically inspects blur, fixes lighting, and cleanly removes the background.',
                      'डिवाइस पर चलने वाला AI धुंधलापन जांचता है, रोशनी ठीक करता है और बैकग्राउंड हटाता है।'
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-palette-butter flex items-center justify-center text-palette-clay">
                  <Camera className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Raw Photo */}
                <div className="border border-dashed border-palette-sand rounded-craft p-4 text-center bg-white space-y-2">
                  <span className="text-[11px] font-mono text-palette-wood uppercase font-semibold block">
                    Before: Raw Loom Shot
                  </span>
                  <div className="h-40 bg-palette-wood/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-amber-900/15" />
                    <span className="text-xs font-mono text-palette-wood">
                      [Raw Photo with Loom Background]
                    </span>
                  </div>
                  <p className="text-[10px] text-palette-wood">Artisan holds phone with one hand on the loom</p>
                </div>

                {/* AI Cleaned */}
                <div className="border-2 border-palette-clay rounded-craft p-4 text-center bg-white space-y-2 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-palette-clay uppercase font-bold">
                      After: AI Studio Cutout
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                      ✓ Pass (0.3s)
                    </span>
                  </div>
                  <div className="h-40 bg-gradient-to-b from-palette-butter/30 to-white rounded-lg flex items-center justify-center relative border border-palette-sand/40">
                    <div className="text-palette-clay font-bold text-sm font-lora">
                      Pure Silk Chanderi Saree
                    </div>
                  </div>
                  <p className="text-[10px] text-emerald-700 font-semibold">
                    ✓ Clean background · Balanced contrast · Crisp edges
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: VOICE */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-lora font-bold text-lg text-palette-espresso">
                    {t('Step 2 · Speak About Your Craft', 'चरण 2 · अपनी कला के बारे में बोलें')}
                  </h4>
                  <p className="text-xs text-palette-wood">
                    {t(
                      'No typing needed. The artisan speaks in Hindi, Bundeli or regional dialect. Bhashini AI creates the catalog.',
                      'टाइपिंग की कोई ज़रूरत नहीं। कारीगर अपनी भाषा में बोलता है। भाषिणी AI विवरण तैयार करता है।'
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-palette-butter flex items-center justify-center text-palette-clay">
                  <Mic className="w-5 h-5" />
                </div>
              </div>

              {/* Large Voice Recording Button */}
              <div className="bg-white rounded-craft p-6 border border-palette-sand/60 text-center space-y-4 shadow-soft">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center shadow-lg transition-all ${
                    isRecording
                      ? 'bg-red-600 text-white animate-pulse scale-105'
                      : 'bg-palette-clay hover:bg-palette-clay/90 text-white'
                  }`}
                >
                  <Mic className="w-8 h-8" />
                </button>
                <div className="font-pally text-base text-palette-espresso">
                  {isRecording 
                    ? '"बोलिए... हम सुन रहे हैं..." (Listening to spoken Hindi voice note...)' 
                    : 'माइक दबाएं और बोलें (Tap to simulate speaking in Hindi)'}
                </div>

                {/* Spoken Voice Transcript Bubble */}
                <div className="bg-paperAlt p-3.5 rounded-xl border border-palette-sand/40 text-left space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-palette-wood">
                    <span>Bhashini STT · Live Speech Recognition</span>
                    <span className="text-emerald-700 font-bold">Confidence: 98.4%</span>
                  </div>
                  <p className="text-palette-espresso font-sans text-sm italic font-medium">
                    "यह शुद्ध चंदेरी सिल्क साड़ी है, पारंपरिक सुनहरी ज़री का काम है। इसे बनाने में 8 घंटे लगे हैं और 1400 रुपये का धागा लगा है।"
                  </p>
                  <div className="border-t border-palette-sand/30 pt-2 text-[11px] text-palette-wood font-sans">
                    <strong>Auto-translated English Listing:</strong> "Handcrafted Authentic Pure Silk Chanderi Saree with traditional gold zari pallu work."
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: COSTS */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-lora font-bold text-lg text-palette-espresso">
                    {t('Step 3 · Material Costs & Work Hours', 'चरण 3 · लागत एवं मेहनत के घंटे')}
                  </h4>
                  <p className="text-xs text-palette-wood">
                    {t(
                      'Two simple numbers protect the artisan from ever underselling or running a loss.',
                      'दो सरल संख्याएँ कारीगर को कभी भी घाटे में बेचने से बचाती हैं।'
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-palette-butter flex items-center justify-center text-palette-clay">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Material Cost Input */}
                <div className="bg-white p-4 rounded-craft border border-palette-sand/50 shadow-soft space-y-3">
                  <label className="block text-xs font-mono uppercase text-palette-wood font-bold">
                    कच्चा माल खर्च (Material Cost)
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="font-rowan text-2xl font-bold text-palette-espresso">₹</span>
                    <input
                      type="number"
                      value={materialCost}
                      onChange={(e) => setMaterialCost(Number(e.target.value) || 0)}
                      className="w-full text-2xl font-mono font-bold text-palette-clay bg-paperAlt p-2 rounded-lg border border-palette-sand focus:outline-none focus:ring-2 focus:ring-palette-clay"
                    />
                  </div>
                  <div className="flex gap-2">
                    {[800, 1400, 2200].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setMaterialCost(amt)}
                        className="text-[11px] font-mono px-2 py-1 bg-paperAlt hover:bg-palette-butter rounded border border-palette-sand/40"
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weaving Hours Input */}
                <div className="bg-white p-4 rounded-craft border border-palette-sand/50 shadow-soft space-y-3">
                  <label className="block text-xs font-mono uppercase text-palette-wood font-bold">
                    काम के घंटे (Weaving / Craft Hours)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value) || 0)}
                      className="w-full text-2xl font-mono font-bold text-palette-clay bg-paperAlt p-2 rounded-lg border border-palette-sand focus:outline-none focus:ring-2 focus:ring-palette-clay"
                    />
                    <span className="font-rowan text-lg font-bold text-palette-espresso">घंटे</span>
                  </div>
                  <div className="flex gap-2">
                    {[4, 8, 16, 24].map((h) => (
                      <button
                        key={h}
                        onClick={() => setHours(h)}
                        className="text-[11px] font-mono px-2 py-1 bg-paperAlt hover:bg-palette-butter rounded border border-palette-sand/40"
                      >
                        {h} घंटे
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Realtime Summary */}
              <div className="bg-palette-espresso text-paper p-4 rounded-craft flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-paper/70 font-mono">लागत आधार (Cost Floor @ ₹150/hr + 15% buffer):</span>
                  <div className="font-rowan text-xl font-bold text-palette-butter">₹{floor}</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-paper/70 font-mono">सुझाया गया उचित मूल्य:</span>
                  <div className="font-rowan text-2xl font-extrabold text-palette-sand">₹{suggested}</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & PUBLISH */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-lora font-bold text-lg text-palette-espresso">
                    {t('Step 4 · AI Review & One-Click Publish', 'चरण 4 · AI समीक्षा एवं प्रकाशन')}
                  </h4>
                  <p className="text-xs text-palette-wood">
                    {t(
                      'Review the generated bilingual listing and fair price. Spoken reasoning gives total transparency.',
                      'तैयार द्विभाषी लिस्टिंग और उचित मूल्य की समीक्षा करें। बोलकर कारण समझाता है।'
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-palette-butter flex items-center justify-center text-palette-clay">
                  <Store className="w-5 h-5" />
                </div>
              </div>

              {/* Complete Listing Review Card */}
              <div className="bg-white rounded-craft p-4 border border-palette-sand shadow-soft space-y-3">
                <div className="flex flex-col sm:flex-row justify-between gap-3 border-b border-borderSoft pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-palette-wood uppercase font-bold">
                      शीर्षक · Bilingual Title
                    </span>
                    <h5 className="font-lora font-bold text-base text-palette-espresso">
                      हाथ से बुनी चंदेरी सिल्क साड़ी (ज़री बॉर्डर)
                    </h5>
                    <p className="text-xs text-palette-wood italic">
                      Handwoven Chanderi Pure Silk Saree with Traditional Gold Zari
                    </p>
                  </div>
                  <div className="text-right sm:border-l sm:border-borderSoft sm:pl-4">
                    <span className="text-[10px] font-mono text-palette-wood uppercase font-bold">
                      उचित मूल्य
                    </span>
                    <div className="font-rowan font-extrabold text-2xl text-palette-clay">
                      ₹{suggested}
                    </div>
                    <span className="text-[10px] text-palette-wood font-mono">
                      (दायरा: ₹{floor} - ₹{maxPrice})
                    </span>
                  </div>
                </div>

                {/* Spoken Explanation Trigger */}
                <div className="bg-paperAlt p-3 rounded-lg flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-palette-clay" />
                    <span className="text-palette-espresso font-medium">
                      {audioExplaining 
                        ? 'मूल्य कारण: "1400 धागा + 8 घंटे मजदूरी ₹1200 = ₹2600 + सुरक्षा व कारीगर लाभ = ₹' + suggested + '"'
                        : 'कीमत का कारण ऑडियो में सुनें (Listen to Voice Pricing Explanation)'}
                    </span>
                  </div>
                  <button
                    onClick={() => setAudioExplaining(!audioExplaining)}
                    className="px-2.5 py-1 rounded bg-palette-espresso text-paper text-[11px] font-semibold hover:bg-palette-espresso/90"
                  >
                    {audioExplaining ? 'रोकें' : 'सुनें'}
                  </button>
                </div>

                {/* Publishing Channels */}
                <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded border border-emerald-200 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3 text-emerald-600" />
                    Public Artisan Storefront
                  </span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-800 rounded border border-blue-200 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3 text-blue-600" />
                    GeM Portal Ready
                  </span>
                  <span className="px-2 py-1 bg-amber-50 text-amber-800 rounded border border-amber-200 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3 text-amber-600" />
                    ONDC Open Network Ready
                  </span>
                </div>
              </div>

              {/* Published Success Banner */}
              {publishedSuccess && (
                <div className="p-4 bg-emerald-600 text-white rounded-craft flex items-center justify-between animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 bg-white/20 rounded-full p-1" />
                    <div>
                      <h5 className="font-bold text-sm">बधाई हो! लिस्टिंग लाइव हो चुकी है।</h5>
                      <p className="text-xs text-white/90">
                        {isOffline 
                          ? 'ऑफलाइन ड्राफ्ट सुरक्षित हो गया है। नेटवर्क आते ही स्वचालित रूप से सिंक हो जाएगा।' 
                          : 'आपकी साड़ी अब खरीदारों और सरकारी विभागों को दिखाई दे रही है।'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={resetDemo}
                    className="bg-white text-emerald-800 font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-palette-butter transition-colors"
                  >
                    पुनः डेमो देखें
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Controls */}
        <div className="bg-paperAlt p-4 border-t border-borderSoft flex items-center justify-between">
          <button
            onClick={() => setStep((Math.max(1, step - 1) as any))}
            disabled={step === 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-craft border border-palette-wood/40 text-palette-espresso text-xs font-semibold hover:bg-paper disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('Back', 'पीछे')}</span>
          </button>

          <div className="flex items-center gap-2">
            {step < 4 ? (
              <button
                onClick={() => setStep((Math.min(4, step + 1) as any))}
                className="flex items-center gap-2 bg-palette-clay hover:bg-palette-clay/90 text-white px-5 py-2.5 rounded-craft text-xs font-bold shadow-clay transition-all active:scale-95"
              >
                <span>{t('Next Step', 'आगे बढ़ें')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setPublishedSuccess(true)}
                className="flex items-center gap-2 bg-palette-clay hover:bg-palette-clay/90 text-white px-6 py-2.5 rounded-craft text-xs font-bold shadow-clay transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-palette-butter" />
                <span>{t('Publish Listing to Storefront', 'दुकान पर प्रकाशित करें')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
