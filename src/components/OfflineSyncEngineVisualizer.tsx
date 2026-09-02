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
          <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-wider">
            {t('Core Architecture Differentiator', 'मुख्य तकनीकी विशेषता')}
          </span>
          <h3 className="font-lora font-bold text-xl md:text-2xl text-palette-espresso">
            {t('Offline-First Architecture & Silent Sync', 'ऑफलाइन-प्रथम आर्किटेक्चर एवं साइलेंट सिंक')}
          </h3>
        </div>

        {/* Network Toggle Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setNetworkState('offline')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 transition-all ${
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
            className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 transition-all ${
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Step 1: On Device (Local SQLite / Cache) */}
        <div className="bg-paperAlt p-4 rounded-xl border border-palette-sand/50 space-y-3">
          <div className="flex items-center justify-between text-palette-espresso font-bold">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-palette-clay" />
              <span>1. {t('Artisan Android Phone', 'कारीगर का फोन')}</span>
            </div>
            <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-palette-sand/50">
              ₹6,000 Class
            </span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-borderSoft space-y-1.5 font-mono text-[11px]">
            <div className="text-palette-espresso font-semibold flex items-center justify-between">
              <span>localId: #chanderi-9021</span>
              <span className="text-[9px] bg-amber-100 text-amber-900 px-1.5 rounded">
                {networkState === 'offline' ? 'Offline Draft' : 'Synced'}
              </span>
            </div>
            <p className="text-[10px] text-palette-wood font-sans">
              Compressed raw image (180 KB), offline speech-to-text, cost floor calculated instantly.
            </p>
            <div className="text-palette-clay font-bold">
              Fixed Price: ₹2,850 (Locked)
            </div>
          </div>
        </div>

        {/* Step 2: FIFO Sync Engine Queue */}
        <div className="bg-paperAlt p-4 rounded-xl border border-palette-sand/50 space-y-3">
          <div className="flex items-center justify-between text-palette-espresso font-bold">
            <div className="flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 text-palette-clay ${networkState === 'syncing' ? 'animate-spin' : ''}`} />
              <span>2. {t('Sync Engine (<400KB)', 'सिंक इंजन')}</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-800 font-bold">
              Payload ≤ 400 KB
            </span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-borderSoft space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between">
              <span>Queue Status:</span>
              <span className="font-bold">
                {networkState === 'offline' 
                  ? 'Queued in FIFO' 
                  : networkState === 'syncing' 
                  ? 'Streaming...' 
                  : 'Delivered (0 msgs)'}
              </span>
            </div>
            <p className="text-[10px] text-palette-wood font-sans">
              Automatic exponential backoff. Server-wins conflict rules prevent data collision.
            </p>
            <div className="text-[10px] text-emerald-700 font-semibold font-sans">
              ✓ Self-resuming on patchy rural signal
            </div>
          </div>
        </div>

        {/* Step 3: Cloud & Multi-Channel Publishing */}
        <div className="bg-paperAlt p-4 rounded-xl border border-palette-sand/50 space-y-3">
          <div className="flex items-center justify-between text-palette-espresso font-bold">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-palette-clay" />
              <span>3. {t('Cloud & Public Channels', 'क्लाउड एवं सरकारी पोर्टल')}</span>
            </div>
            <span className="font-mono text-[10px] text-palette-clay font-bold">
              Silent Upgrade
            </span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-borderSoft space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between">
              <span>ONDC & GeM:</span>
              <span className={networkState === 'online' ? 'text-emerald-700 font-bold' : 'text-palette-wood'}>
                {networkState === 'online' ? 'Live & Indexed' : 'Awaiting Connection'}
              </span>
            </div>
            <p className="text-[10px] text-palette-wood font-sans">
              On reconnect, image enhances silently & English copy upgrades — <strong>and the price never changes.</strong>
            </p>
            <div className="flex items-center gap-1 text-[10px] text-palette-espresso font-bold font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-palette-clay" />
              <span>GI Provenance Verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-palette-espresso text-paper p-4 rounded-xl text-xs flex items-center justify-between">
        <p className="font-medium text-paper/90">
          {t(
            'The artisan performs all 4 actions at the loom with zero network bars. The listing is instantly sellable.',
            'कारीगर बिना किसी इंटरनेट कनेक्शन के अपने करघे पर सभी 4 चरण पूरे करता है। लिस्टिंग तुरंत बिकने योग्य बन जाती है।'
          )}
        </p>
        <span className="font-mono text-palette-butter text-[11px] font-bold px-2 py-1 rounded bg-white/10 flex-shrink-0 ml-4">
          DPDP Act 2023 Aligned
        </span>
      </div>
    </div>
  );
};
