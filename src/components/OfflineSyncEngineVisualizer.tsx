import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Wifi, WifiOff, ArrowRight, RefreshCw, CheckCircle, Database, Smartphone, Cloud, ShieldCheck } from 'lucide-react';

export const OfflineSyncEngineVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [networkState, setNetworkState] = useState<'offline' | 'syncing' | 'online'>('offline');

  const triggerSync = () => {
    setNetworkState('syncing');
    setTimeout(() => {
      setNetworkState('online');
    }, 1500);
  };

  return (
    <div className="bg-white rounded-craft-lg border border-palette-sand/60 p-6 md:p-8 shadow-soft space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderSoft pb-4">
        <div>
          <span className="font-rowan text-xs sm:text-sm font-bold uppercase tracking-widest text-palette-clay">
            {t('Core Architecture Differentiator', 'मुख्य तकनीकी विशेषता')}
          </span>
          <h3 className="font-rowan font-bold text-xl md:text-2xl text-palette-espresso">
            {t('Offline-First Architecture & Silent Sync', 'ऑफलाइन-प्रथम आर्किटेक्चर एवं साइलेंट सिंक')}
          </h3>
        </div>

        {/* Network Toggle Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setNetworkState('offline')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold font-rowan flex items-center gap-1.5 transition-all ${
              networkState === 'offline'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-paperAlt text-palette-espresso/70 hover:bg-palette-sand/30'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5" />
            <span>{t('Zero Internet', 'इंटरनेट बंद')}</span>
          </button>

          <button
            onClick={triggerSync}
            className={`px-3 py-1.5 rounded-full text-xs font-bold font-rowan flex items-center gap-1.5 transition-all ${
              networkState === 'online'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-paperAlt text-palette-espresso/70 hover:bg-palette-sand/30'
            }`}
          >
            {networkState === 'syncing' ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-palette-butter" />
            ) : (
              <Wifi className="w-3.5 h-3.5" />
            )}
            <span>{t('Reconnect 4G', '4G कनेक्ट करें')}</span>
          </button>
        </div>
      </div>

      {/* Interactive Visual Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs items-stretch">
        {/* Step 1: On Device (Local SQLite / Cache) */}
        <div className="bg-paperAlt p-5 rounded-craft-lg border border-palette-sand/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
          <div className="flex items-center justify-between gap-2 text-palette-espresso">
            <div className="flex items-center gap-2 font-rowan font-bold text-sm">
              <Smartphone className="w-4 h-4 text-palette-clay shrink-0" />
              <span>1. {t('Artisan Android Phone', 'कारीगर का फोन')}</span>
            </div>
            <span className="font-rowan font-bold text-[10px] bg-white px-2.5 py-0.5 rounded-full border border-palette-sand/60 text-palette-clay shrink-0 whitespace-nowrap">
              ₹6,000 Class
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-palette-sand/50 font-rowan flex-1 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between gap-2 font-bold text-xs text-palette-espresso pb-2 border-b border-palette-sand/30">
              <span>localId: #chanderi-9021</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                networkState === 'offline' 
                  ? 'bg-amber-100 text-amber-900 border border-amber-300/60' 
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-300/60'
              }`}>
                {networkState === 'offline' ? 'Offline Draft' : 'Synced'}
              </span>
            </div>
            <p className="text-xs font-bold text-palette-clay leading-relaxed flex-1">
              Compressed raw image (180 KB), offline speech-to-text, cost floor calculated instantly.
            </p>
            <div className="text-xs font-bold text-palette-espresso pt-2.5 border-t border-palette-sand/30 flex items-center justify-between">
              <span className="text-palette-clay">Fixed Price:</span>
              <span className="text-palette-espresso font-extrabold">₹2,850 (Locked)</span>
            </div>
          </div>
        </div>

        {/* Step 2: FIFO Sync Engine Queue */}
        <div className="bg-paperAlt p-5 rounded-craft-lg border border-palette-sand/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
          <div className="flex items-center justify-between gap-2 text-palette-espresso">
            <div className="flex items-center gap-2 font-rowan font-bold text-sm">
              <RefreshCw className={`w-4 h-4 text-palette-clay shrink-0 ${networkState === 'syncing' ? 'animate-spin' : ''}`} />
              <span>2. {t('Sync Engine', 'सिंक इंजन')}</span>
            </div>
            <span className="font-rowan font-bold text-[10px] bg-white px-2.5 py-0.5 rounded-full border border-palette-sand/60 text-emerald-800 shrink-0 whitespace-nowrap">
              Payload ≤ 400 KB
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-palette-sand/50 font-rowan flex-1 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between gap-2 font-bold text-xs text-palette-espresso pb-2 border-b border-palette-sand/30">
              <span>Queue Status:</span>
              <span className="text-xs font-bold text-palette-clay shrink-0">
                {networkState === 'offline' 
                  ? 'Queued in FIFO' 
                  : networkState === 'syncing' 
                  ? 'Streaming...' 
                  : 'Delivered (0 msgs)'}
              </span>
            </div>
            <p className="text-xs font-bold text-palette-clay leading-relaxed flex-1">
              Automatic exponential backoff. Server-wins conflict rules prevent data collision.
            </p>
            <div className="text-xs font-bold text-emerald-800 pt-2.5 border-t border-palette-sand/30 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Self-resuming on patchy rural signal</span>
            </div>
          </div>
        </div>

        {/* Step 3: Cloud & Multi-Channel Publishing */}
        <div className="bg-paperAlt p-5 rounded-craft-lg border border-palette-sand/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
          <div className="flex items-center justify-between gap-2 text-palette-espresso">
            <div className="flex items-center gap-2 font-rowan font-bold text-sm">
              <Cloud className="w-4 h-4 text-palette-clay shrink-0" />
              <span>3. {t('Cloud Channels', 'क्लाउड चैनल')}</span>
            </div>
            <span className="font-rowan font-bold text-[10px] bg-white px-2.5 py-0.5 rounded-full border border-palette-sand/60 text-palette-clay shrink-0 whitespace-nowrap">
              Silent Upgrade
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-palette-sand/50 font-rowan flex-1 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between gap-2 font-bold text-xs text-palette-espresso pb-2 border-b border-palette-sand/30">
              <span>ONDC & GeM:</span>
              <span className={`text-xs font-bold shrink-0 ${networkState === 'online' ? 'text-emerald-800' : 'text-palette-clay'}`}>
                {networkState === 'online' ? 'Live & Indexed' : 'Awaiting Connection'}
              </span>
            </div>
            <p className="text-xs font-bold text-palette-clay leading-relaxed flex-1">
              On reconnect, image enhances silently & English copy upgrades — <span className="text-palette-espresso font-extrabold">and price never changes.</span>
            </p>
            <div className="text-xs font-bold text-palette-espresso pt-2.5 border-t border-palette-sand/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-palette-clay shrink-0" />
              <span>GI Provenance Verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-palette-espresso text-paper p-4 sm:p-5 rounded-2xl text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3 font-rowan">
        <p className="font-bold text-paper/90 leading-relaxed text-center sm:text-left">
          {t(
            'The artisan performs all 4 actions at the loom with zero network bars. The listing is instantly sellable.',
            'कारीगर बिना किसी इंटरनेट कनेक्शन के अपने करघे पर सभी 4 चरण पूरे करता है। लिस्टिंग तुरंत बिकने योग्य बन जाती है।'
          )}
        </p>
        <span className="font-rowan font-bold text-palette-butter text-xs px-3.5 py-1.5 rounded-full bg-white/10 shrink-0 whitespace-nowrap border border-white/10">
          DPDP Act 2023 Aligned
        </span>
      </div>
    </div>
  );
};
