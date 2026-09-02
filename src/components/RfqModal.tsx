import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, ShieldCheck, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  artisanName?: string;
  craftName?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ 
  isOpen, 
  onClose, 
  artisanName = 'Chanderi Weaver Cluster', 
  craftName = 'Handwoven Silk Sarees' 
}) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [buyerType, setBuyerType] = useState<'retail' | 'b2b' | 'institutional'>('b2b');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-palette-espresso/80 backdrop-blur-sm animate-fadeIn select-none">
      <div className="bg-paper border border-palette-sand/60 rounded-craft-lg shadow-2xl max-w-lg w-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-palette-espresso text-paper p-4 flex items-center justify-between border-b border-palette-wood/40">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-palette-sand" />
            <div>
              <h3 className="font-rowan font-bold text-lg text-paper">
                {t('Direct Artisan Connection / RFQ', 'कारीगर से सीधा संपर्क / कोटेशन मांग')}
              </h3>
              <p className="text-[11px] text-paper/70 font-mono">
                {craftName} · {artisanName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-paper/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-soft">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-lora font-bold text-xl text-palette-espresso">
                {t('Inquiry Sent Directly to Cluster!', 'पूछताछ सीधे क्लस्टर तक पहुंच गई!')}
              </h4>
              <p className="text-xs text-palette-wood max-w-sm mx-auto leading-relaxed">
                {t(
                  'The cluster coordinator will review your request. Since artisans operate made-to-order, you will receive guaranteed GI provenance and batch timelines within 24 hours.',
                  'क्लस्टर समन्वयक आपके अनुरोध की समीक्षा करेगा। चूँकि कारीगर मांग पर उत्पादन करते हैं, आपको 24 घंटे के भीतर सत्यापित जीआई प्रमाणन और समय-सीमा प्राप्त होगी।'
                )}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-palette-clay hover:bg-palette-clay/90 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-clay"
              >
                {t('Close Window', 'विंडो बंद करें')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Buyer Type Selector */}
              <div className="space-y-1.5">
                <label className="font-mono uppercase font-bold text-palette-wood text-[10px]">
                  {t('Buyer Profile Category', 'खरीदार श्रेणी')}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'retail', labelEn: 'Retail / Individual', labelHi: 'व्यक्तिगत' },
                    { id: 'b2b', labelEn: 'B2B / Boutique', labelHi: 'व्यावसायिक' },
                    { id: 'institutional', labelEn: 'GeM / Export', labelHi: 'सरकारी / निर्यात' },
                  ].map((b) => (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setBuyerType(b.id as any)}
                      className={`py-2 px-2 rounded-lg border text-center font-medium transition-all ${
                        buyerType === b.id
                          ? 'bg-palette-butter border-palette-clay text-palette-espresso font-bold'
                          : 'bg-white border-borderSoft text-palette-wood hover:bg-paperAlt'
                      }`}
                    >
                      {t(b.labelEn, b.labelHi)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-palette-wood font-bold uppercase">
                    {t('Your Name / Organisation', 'नाम / संस्था')}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. FabIndia / Sanskriti Boutique"
                    className="w-full p-2.5 rounded-lg border border-palette-sand bg-white text-palette-espresso focus:outline-none focus:ring-2 focus:ring-palette-clay"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-palette-wood font-bold uppercase">
                    {t('Phone or WhatsApp Number', 'फोन / व्हाट्सएप')}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 rounded-lg border border-palette-sand bg-white text-palette-espresso focus:outline-none focus:ring-2 focus:ring-palette-clay"
                  />
                </div>
              </div>

              {/* Quantity & Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-palette-wood font-bold uppercase">
                    {t('Quantity (Pieces / Meters)', 'मात्रा (पीस / मीटर)')}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25 sarees / 50 meters"
                    className="w-full p-2.5 rounded-lg border border-palette-sand bg-white text-palette-espresso focus:outline-none focus:ring-2 focus:ring-palette-clay"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-palette-wood font-bold uppercase">
                    {t('GSTIN / Udyam (Optional)', 'जीएसटी / उद्यम')}
                  </label>
                  <input
                    type="text"
                    placeholder="23AAAAA0000A1Z5"
                    className="w-full p-2.5 rounded-lg border border-palette-sand bg-white text-palette-espresso focus:outline-none focus:ring-2 focus:ring-palette-clay"
                  />
                </div>
              </div>

              {/* Message Note */}
              <div className="space-y-1">
                <label className="font-mono text-[10px] text-palette-wood font-bold uppercase">
                  {t('Custom Requirement Details', 'विशिष्ट मांग विवरण')}
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention color preferences, zari motifs, or delivery timeframe..."
                  className="w-full p-2.5 rounded-lg border border-palette-sand bg-white text-palette-espresso focus:outline-none focus:ring-2 focus:ring-palette-clay"
                />
              </div>

              {/* Guarantee Note */}
              <div className="bg-palette-butter/40 border border-palette-sand p-3 rounded-lg flex items-center gap-2 text-[11px] text-palette-espresso">
                <ShieldCheck className="w-4 h-4 text-palette-clay flex-shrink-0" />
                <span>
                  {t(
                    'Direct cluster linkage guarantees 100% genuine GI handmade verification and zero middleman inflation.',
                    'सीधा क्लस्टर संपर्क शत-प्रतिशत प्रामाणिक हस्तशिल्प और बिना किसी बिचौलिए के सही मूल्य की गारंटी देता है।'
                  )}
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-palette-clay hover:bg-palette-clay/90 text-white font-bold flex items-center justify-center gap-2 shadow-clay transition-transform active:scale-95"
              >
                <Send className="w-4 h-4 text-palette-butter" />
                <span>{t('Send Direct Inquiry to Artisan', 'कारीगर को सीधी पूछताछ भेजें')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
