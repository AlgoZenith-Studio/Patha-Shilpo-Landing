import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Wifi, 
  WifiOff, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ChevronRight, 
  Camera, 
  Mic, 
  Tag, 
  Share2 
} from 'lucide-react';

interface PhoneMockupProps {
  interactive?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ interactive = true }) => {
  const { t } = useLanguage();
  const [isOffline, setIsOffline] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [published, setPublished] = useState(false);

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[360px] select-none">
      {/* Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-palette-clay/30 via-palette-sand/20 to-palette-butter/40 rounded-[50px] blur-2xl opacity-75 -z-10" />

      {/* Phone Outer Chassis */}
      <div className="relative rounded-[42px] border-[9px] border-palette-espresso bg-palette-espresso shadow-2xl p-2.5 overflow-hidden">
        {/* Notch / Camera Bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-palette-espresso rounded-full z-30 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Screen Content */}
        <div className="rounded-[32px] bg-paper overflow-hidden flex flex-col h-[650px] border border-borderSoft relative font-sans text-palette-espresso">
          {/* Android Status Bar */}
          <div className="bg-palette-espresso text-paper/90 px-5 pt-3 pb-2 text-[11px] font-mono flex items-center justify-between z-20">
            <span>09:41</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => interactive && setIsOffline(!isOffline)}
                className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                  isOffline ? 'bg-amber-500/20 text-amber-300 font-bold' : 'bg-emerald-500/20 text-emerald-300'
                }`}
                title="Toggle Offline/Online Simulation"
              >
                {isOffline ? <WifiOff className="w-3 h-3 text-amber-400" /> : <Wifi className="w-3 h-3 text-emerald-400" />}
                <span>{isOffline ? 'OFFLINE DRAFT' : '4G LIVE'}</span>
              </button>
              <div className="w-4 h-2 border border-paper/60 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-paper/80 rounded-xs" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-paper border-b border-borderSoft px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="logo" className="w-6 h-6 rounded bg-white p-0.5 border border-palette-sand/40" />
              <div>
                <span className="font-rowan font-bold text-xs text-palette-espresso">PATHASHILPA</span>
                <span className="block text-[9px] text-palette-wood -mt-0.5">चरण 4: समीक्षा (Review)</span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-semibold text-palette-clay bg-palette-butter/60 px-2 py-0.5 rounded-full border border-palette-sand/50">
              {t('Step 4/4', 'चरण 4/4')}
            </span>
          </div>

          {/* Scrollable Screen Body */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 scrollbar-none text-xs">
            {/* Cut-out Product Image Card */}
            <div className="relative rounded-craft bg-gradient-to-b from-white to-paperAlt p-3 border border-palette-sand/30 shadow-soft overflow-hidden group">
              {/* Studio Clean Background Badge */}
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-palette-espresso/85 text-paper px-2 py-0.5 rounded-full text-[9px] font-mono backdrop-blur-sm">
                <Sparkles className="w-2.5 h-2.5 text-palette-butter" />
                <span>AI Background Removed</span>
              </div>

              {/* Saree Cutout Display */}
              <div className="h-44 w-full flex items-center justify-center relative my-1">
                {/* SVG Artistic Saree Representation */}
                <svg viewBox="0 0 240 180" className="w-full h-full object-contain filter drop-shadow-md">
                  <defs>
                    <linearGradient id="sareeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B3A2F" />
                      <stop offset="50%" stopColor="#cc915c" />
                      <stop offset="100%" stopColor="#513a24" />
                    </linearGradient>
                    <pattern id="zariPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 0,8 L 8,0 L 16,8 L 8,16 Z" fill="none" stroke="#fffbb6" strokeWidth="1" />
                    </pattern>
                  </defs>
                  {/* Folded Silk Saree Body */}
                  <path d="M 30,30 Q 120,15 210,35 Q 220,130 190,160 Q 100,165 40,150 Q 20,90 30,30 Z" fill="url(#sareeGrad)" />
                  {/* Zari Gold Border Pallu */}
                  <path d="M 30,30 Q 120,15 210,35 L 200,65 Q 120,45 35,55 Z" fill="url(#zariPattern)" stroke="#d4a262" strokeWidth="1.5" />
                  <path d="M 40,150 Q 100,165 190,160 L 180,135 Q 100,140 45,128 Z" fill="#d4a262" opacity="0.9" />
                  <circle cx="120" cy="95" r="28" fill="#fffbb6" opacity="0.15" />
                  {/* Weave texture lines */}
                  <line x1="60" y1="70" x2="170" y2="70" stroke="#fffbb6" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.6" />
                  <line x1="65" y1="90" x2="165" y2="90" stroke="#fffbb6" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.6" />
                  <line x1="70" y1="110" x2="160" y2="110" stroke="#fffbb6" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.6" />
                </svg>

                {/* GI Tag Overlay */}
                <div className="absolute bottom-1 right-1 bg-palette-butter text-palette-espresso font-bold text-[9px] px-2 py-0.5 rounded-full border border-palette-sand flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="w-2.5 h-2.5 text-palette-clay" />
                  <span>GI Verified: Chanderi</span>
                </div>
              </div>
            </div>

            {/* AI Generated Hindi & English Title */}
            <div className="bg-white rounded-craft p-3 border border-borderSoft space-y-1">
              <span className="text-[10px] font-mono uppercase text-palette-wood tracking-wider font-semibold">
                AI Title · शीर्षक
              </span>
              <h4 className="font-lora font-bold text-sm text-palette-espresso leading-snug">
                हाथ से बुनी चंदेरी सिल्क साड़ी (ज़री बॉर्डर)
              </h4>
              <p className="text-[11px] text-palette-espresso/70 italic">
                Handcrafted Pure Silk Chanderi Saree with Traditional Gold Zari Pallu
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <span className="bg-paperAlt px-1.5 py-0.5 rounded text-[9px] text-palette-wood font-medium">#Handloom</span>
                <span className="bg-paperAlt px-1.5 py-0.5 rounded text-[9px] text-palette-wood font-medium">#ChanderiSilk</span>
                <span className="bg-paperAlt px-1.5 py-0.5 rounded text-[9px] text-palette-wood font-medium">#AuthenticGI</span>
              </div>
            </div>

            {/* AI Fair Price Breakdown Card */}
            <div className="bg-gradient-to-br from-palette-butter/40 via-white to-palette-sand/20 rounded-craft p-3 border border-palette-sand/50 shadow-soft space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-palette-clay" />
                  <span className="font-bold text-xs text-palette-espresso">AI उचित मूल्य (Fair Price)</span>
                </div>
                <span className="font-rowan font-extrabold text-base text-palette-clay">
                  ₹2,850
                </span>
              </div>

              {/* Price Calculation Transparency */}
              <div className="bg-white/80 rounded-lg p-2 text-[10px] space-y-1 border border-palette-sand/30 font-mono">
                <div className="flex justify-between text-palette-espresso/80">
                  <span>कच्चा माल (Material Cost):</span>
                  <span className="font-bold">₹1,400</span>
                </div>
                <div className="flex justify-between text-palette-espresso/80">
                  <span>बुनाई समय (Labor: 8 hrs @ ₹150):</span>
                  <span className="font-bold">₹1,200</span>
                </div>
                <div className="flex justify-between text-palette-clay border-t border-palette-sand/30 pt-1 font-bold">
                  <span>लागत आधार + 25% कारीगर लाभ:</span>
                  <span>₹2,850</span>
                </div>
              </div>

              {/* Voice Explanation Audio Player */}
              <button
                onClick={() => interactive && setIsPlayingAudio(!isPlayingAudio)}
                className="w-full flex items-center justify-center gap-2 bg-palette-espresso text-paper py-1.5 px-3 rounded-lg text-[10px] font-semibold hover:bg-palette-espresso/90 transition-colors"
              >
                <Volume2 className={`w-3.5 h-3.5 text-palette-butter ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                <span>{isPlayingAudio ? 'मूल्य का कारण सुन रहे हैं...' : 'कीमत का कारण सुनें (Voice Explanation)'}</span>
              </button>
            </div>

            {/* Artisan Profile Snapshot */}
            <div className="bg-white rounded-craft p-2.5 border border-borderSoft flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-palette-sand/40 border border-palette-clay/40 flex items-center justify-center font-bold text-palette-espresso font-rowan text-xs">
                KD
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[11px] text-palette-espresso">कमला देवी (Kamala Devi)</div>
                <div className="text-[10px] text-palette-wood">चंदेरी क्लस्टर, मध्य प्रदेश · मास्टर बुनकर</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-3 bg-white border-t border-borderSoft space-y-1.5">
            <button
              onClick={() => {
                if (interactive) setPublished(!published);
              }}
              className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-clay transition-all ${
                published 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-palette-clay hover:bg-palette-clay/90 text-white active:scale-95'
              }`}
            >
              {published ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-palette-butter" />
                  <span>प्रकाशित हो गया! (Live on ONDC & GeM)</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-palette-butter" />
                  <span>दुकान पर प्रकाशित करें (Publish Listing)</span>
                </>
              )}
            </button>
            
            <p className="text-[9px] text-center text-palette-wood font-mono">
              {isOffline 
                ? '⚡ ऑफलाइन सेव — नेटवर्क आते ही अपने आप सिंक होगा' 
                : '✓ ONDC एवं सरकारी GeM पोर्टल पर तुरंत लिस्ट होगा'}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Differentiator Badge */}
      <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm border border-palette-sand p-2.5 rounded-2xl shadow-lift flex items-center gap-2 text-xs">
        <div className="w-7 h-7 rounded-full bg-palette-butter flex items-center justify-center text-palette-clay font-bold font-mono">
          90s
        </div>
        <div>
          <span className="font-bold text-palette-espresso block text-[11px]">90 Seconds Total</span>
          <span className="text-[10px] text-palette-wood">Photo + Voice = Live Listing</span>
        </div>
      </div>
    </div>
  );
};
