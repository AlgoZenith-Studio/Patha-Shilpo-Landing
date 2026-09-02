import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RfqModal } from '../components/RfqModal';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Send, 
  Layers, 
  Truck, 
  FileText, 
  Building2, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const ForBuyers: React.FC = () => {
  const { t } = useLanguage();
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const provenancePoints = [
    {
      titleEn: '1. Verified Geographic Indication (GI)',
      titleHi: '1. प्रमाणित भौगोलिक संकेत (GI)',
      descEn: 'Every listing is cryptographically mapped to the authentic registered cluster (e.g. Chanderi Silk, Bastar Dhokra, Madhubani Art).',
      descHi: 'हर उत्पाद पंजीकृत भौगोलिक क्लस्टर से प्रमाणित होता है।',
      icon: Award,
    },
    {
      titleEn: '2. Direct Maker Traceability',
      titleHi: '2. सीधा कारीगर प्रमाणन',
      descEn: 'View the weaver’s profile, workshop coordinates, and creation timeline. No fake industrial counterfeits.',
      descHi: 'कारीगर का नाम, करघा और निर्माण प्रक्रिया की पूरी जानकारी। कोई नकली या मशीनी माल नहीं।',
      icon: ShieldCheck,
    },
    {
      titleEn: '3. Made-to-Order Efficiency',
      titleHi: '3. ऑर्डर पर निर्माण की कुशलता',
      descEn: 'Artisans produce against confirmed bulk orders. Zero dead capital locked in unsold warehouses.',
      descHi: 'ऑर्डर मिलने पर ताजा हस्तनिर्मित निर्माण। गोदामों में बेकार पड़े माल का कोई झंझट नहीं।',
      icon: Layers,
    },
    {
      titleEn: '4. Institutional & GeM Ready',
      titleHi: '4. सरकारी खरीद एवं GeM अनुरूप',
      descEn: 'Formal GST-compliant digital invoices and transparent batch provenance ready for institutional procurement.',
      descHi: 'जीएसटी बिल और संस्थागत खरीद के लिए सरकारी नियमों के शत-प्रतिशत अनुरूप।',
      icon: FileText,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
          {t('Provenance & Institutional Procurement', 'प्रामाणिकता एवं संस्थागत खरीद')}
        </span>
        <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl text-palette-espresso">
          {t('100% Verified GI Handloom & Handicrafts', 'शत-प्रतिशत प्रामाणिक जीआई हथकरघा व हस्तशिल्प')}
        </h1>
        <p className="text-sm sm:text-base text-palette-wood leading-relaxed">
          {t(
            'Connect directly with master artisans across India. Discover verified provenance, request bulk RFQs, and procure authentic made-to-order craft with zero middleman markup.',
            'भारत भर के उस्ताद कारीगरों से सीधे जुड़ें। प्रामाणिक जीआई हस्तशिल्प खोजें, थोक कोटेशन मांगें और बिना किसी बिचौलिये के सीधे करघे से खरीद करें।'
          )}
        </p>
      </div>

      {/* PROVENANCE PILLARS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {provenancePoints.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="bg-white rounded-craft p-6 border border-palette-sand/60 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-palette-butter flex items-center justify-center text-palette-clay font-bold">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-lora font-bold text-lg text-palette-espresso">
                {t(p.titleEn, p.titleHi)}
              </h3>
              <p className="text-xs text-palette-wood leading-relaxed">
                {t(p.descEn, p.descHi)}
              </p>
            </div>
          );
        })}
      </section>

      {/* WHY MADE TO ORDER */}
      <section className="bg-palette-espresso text-paper rounded-craft-lg p-8 md:p-12 space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase text-palette-sand font-bold tracking-wider">
            {t('The Supply Chain Shift', 'आपूर्ति श्रृंखला में क्रांति')}
          </span>
          <h2 className="font-rowan font-bold text-3xl text-paper">
            {t('Why Made-to-Order Protects Both Buyer & Artisan', 'ऑर्डर पर निर्माण खरीदार व कारीगर दोनों के लिए क्यों बेहतर है')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-paper/80 leading-relaxed">
          <div className="space-y-3 bg-white/10 p-5 rounded-xl border border-white/10">
            <h4 className="font-lora font-bold text-base text-palette-sand">
              {t('For the Rural Artisan:', 'कारीगर के दृष्टिकोण से:')}
            </h4>
            <p>
              {t(
                'Traditional artisans lock their small working capital into unsold stock and are forced to accept distress prices from predatory middlemen. With Pathashilpa, production commences against confirmed purchase enquiries.',
                'पारंपरिक व्यवस्था में कारीगर का थोड़ा सा पैसा भी अनबिके माल में फंसा रहता है। पाथाशिल्पा पर पुष्टि किए गए ऑर्डर पर ही काम शुरू होता है।'
              )}
            </p>
          </div>

          <div className="space-y-3 bg-white/10 p-5 rounded-xl border border-white/10">
            <h4 className="font-lora font-bold text-base text-palette-sand">
              {t('For the Buyer / Exporter:', 'खरीदार व निर्यातक के दृष्टिकोण से:')}
            </h4>
            <p>
              {t(
                'Buyers receive fresh, authentic pieces crafted specifically to agreed color palettes, zari motifs, and dimension specifications. Every shipment arrives with verifiable GI cluster provenance.',
                'खरीदार को मनपसंद रंग, धागे और नाप के अनुसार ताजा तैयार किया गया हस्तशिल्प मिलता है, जिसमें नकली माल की कोई संभावना नहीं होती।'
              )}
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => setRfqModalOpen(true)}
            className="bg-palette-sand hover:bg-palette-sand/90 text-palette-espresso font-bold text-xs px-8 py-3.5 rounded-full shadow-sm flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-palette-espresso" />
            <span>{t('Submit a Bulk RFQ / Custom Inquiry', 'थोक मांग / कोटेशन भेजें')}</span>
          </button>
        </div>
      </section>

      {/* RFQ MODAL */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />
    </div>
  );
};
