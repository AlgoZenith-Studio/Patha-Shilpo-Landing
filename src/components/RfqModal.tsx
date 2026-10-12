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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-palette-espresso/75 backdrop-blur-sm animate-fadeIn select-none">
      <div className="bg-paper border border-palette-sand/60 rounded-craft-lg shadow-2xl max-w-[540px] w-full overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="bg-palette-espresso text-paper px-6 sm:px-8 pt-7 pb-6 flex items-center justify-between border-b border-palette-wood/40">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-palette-sand/20 flex items-center justify-center text-palette-sand flex-shrink-0">
              <Building className="w-5 h-5 text-palette-sand" />
            </div>
            <div>
              <h3 className="font-rowan font-bold text-lg sm:text-xl text-paper leading-snug">
                {t('Direct Artisan Connection / RFQ', 'कारीगर से सीधा संपर्क / कोटेशन मांग')}
              </h3>
              <p className="text-xs font-rowan text-palette-sand/90 font-medium mt-1">
                {craftName} · {artisanName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2.5 rounded-xl text-paper/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-soft">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-rowan font-bold text-xl text-palette-espresso">
                {t('Inquiry Sent Directly to Cluster!', 'पूछताछ सीधे क्लस्टर तक पहुंच गई!')}
              </h4>
              <p className="font-rowan font-bold text-xs sm:text-sm text-palette-clay max-w-sm mx-auto leading-relaxed">
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
                className="bg-palette-clay hover:bg-palette-espresso text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-clay font-rowan uppercase tracking-wider transition-all duration-200 active:scale-[0.98]"
              >
                {t('Close Window', 'विंडो बंद करें')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Buyer Type Selector */}
              <div className="space-y-2">
                <label className="font-rowan uppercase font-bold text-palette-clay text-xs tracking-wider block">
                  {t('Buyer Profile Category', 'खरीदार श्रेणी')}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'retail', labelEn: 'Retail / Individual', labelHi: 'व्यक्तिगत' },
                    { id: 'b2b', labelEn: 'B2B / Boutique', labelHi: 'व्यावसायिक' },
                    { id: 'institutional', labelEn: 'GeM / Export', labelHi: 'सरकारी / निर्यात' },
                  ].map((b) => (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setBuyerType(b.id as any)}
                      className={`py-2 px-2.5 rounded-xl border text-center font-rowan font-bold text-xs transition-all duration-200 active:scale-[0.98] ${
                        buyerType === b.id
                          ? 'bg-palette-butter border-palette-clay text-palette-espresso shadow-xs'
                          : 'bg-white border-palette-sand/40 text-palette-wood hover:bg-paperAlt hover:text-palette-espresso'
                      }`}
                    >
                      {t(b.labelEn, b.labelHi)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-rowan text-xs text-palette-clay font-bold uppercase tracking-wider block">
                    {t('Your Name / Organisation', 'नाम / संस्था')}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. FabIndia / Sanskriti Boutique"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-palette-sand/50 bg-paperAlt/40 hover:bg-white focus:bg-white font-rowan text-xs sm:text-sm text-palette-espresso placeholder:text-palette-wood/60 focus:outline-none focus:ring-2 focus:ring-palette-clay/20 focus:border-palette-clay transition-all shadow-2xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-rowan text-xs text-palette-clay font-bold uppercase tracking-wider block">
                    {t('Phone or WhatsApp Number', 'फोन / व्हाट्सएप')}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-palette-sand/50 bg-paperAlt/40 hover:bg-white focus:bg-white font-rowan text-xs sm:text-sm text-palette-espresso placeholder:text-palette-wood/60 focus:outline-none focus:ring-2 focus:ring-palette-clay/20 focus:border-palette-clay transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Quantity & Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-rowan text-xs text-palette-clay font-bold uppercase tracking-wider block">
                    {t('Quantity (Pieces / Meters)', 'मात्रा (पीस / मीटर)')}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25 sarees / 50 meters"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-palette-sand/50 bg-paperAlt/40 hover:bg-white focus:bg-white font-rowan text-xs sm:text-sm text-palette-espresso placeholder:text-palette-wood/60 focus:outline-none focus:ring-2 focus:ring-palette-clay/20 focus:border-palette-clay transition-all shadow-2xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-rowan text-xs text-palette-clay font-bold uppercase tracking-wider block">
                    {t('GSTIN / Udyam (Optional)', 'जीएसटी / उद्यम')}
                  </label>
                  <input
                    type="text"
                    placeholder="23AAAAA0000A1Z5"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-palette-sand/50 bg-paperAlt/40 hover:bg-white focus:bg-white font-rowan text-xs sm:text-sm text-palette-espresso placeholder:text-palette-wood/60 focus:outline-none focus:ring-2 focus:ring-palette-clay/20 focus:border-palette-clay transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Message Note */}
              <div className="space-y-1.5">
                <label className="font-rowan text-xs text-palette-clay font-bold uppercase tracking-wider block">
                  {t('Custom Requirement Details', 'विशिष्ट मांग विवरण')}
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention color preferences, zari motifs, or delivery timeframe..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-palette-sand/50 bg-paperAlt/40 hover:bg-white focus:bg-white font-rowan text-xs sm:text-sm text-palette-espresso placeholder:text-palette-wood/60 focus:outline-none focus:ring-2 focus:ring-palette-clay/20 focus:border-palette-clay transition-all resize-none shadow-2xs"
                />
              </div>

              {/* Guarantee Note */}
              <div className="bg-palette-butter/50 border border-palette-sand/60 p-3.5 rounded-xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-palette-clay flex-shrink-0" />
                <p className="font-rowan font-bold text-xs text-palette-espresso leading-relaxed">
                  {t(
                    'Direct cluster linkage guarantees 100% genuine GI handmade verification and zero middleman inflation.',
                    'सीधा क्लस्टर संपर्क शत-प्रतिशत प्रामाणिक हस्तशिल्प और बिना किसी बिचौलिए के सही मूल्य की गारंटी देता है।'
                  )}
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-palette-clay hover:bg-palette-espresso text-white font-rowan font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-clay hover:shadow-md transition-all duration-200 active:scale-[0.98]"
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
