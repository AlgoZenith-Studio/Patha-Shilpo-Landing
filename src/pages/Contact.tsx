import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const clusterHubs = [
    {
      city: 'Chanderi Hub (Pilot)',
      state: 'Madhya Pradesh',
      craft: 'Silk Saree & Zari Weavers Association',
      phone: '+91 7547 252 001',
    },
    {
      city: 'Bastar Hub',
      state: 'Chhattisgarh',
      craft: 'Dhokra & Bell-Metal Tribal Artisan Guild',
      phone: '+91 7782 229 104',
    },
    {
      city: 'Varanasi Hub',
      state: 'Uttar Pradesh',
      craft: 'Banarasi Handloom Co-operative Society',
      phone: '+91 542 222 3410',
    },
    {
      city: 'Madhubani Hub',
      state: 'Bihar',
      craft: 'Mithila Folk Painting Collective',
      phone: '+91 6276 222 098',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
          {t('Support & Regional Hubs', 'संपर्क एवं क्लस्टर हब')}
        </span>
        <h1 className="font-rowan font-extrabold text-4xl text-palette-espresso">
          {t('Get in Touch with Pathashilpa', 'हमसे संपर्क करें')}
        </h1>
        <p className="text-xs sm:text-sm text-palette-wood">
          {t(
            'Whether you are an artisan cluster coordinator, institutional buyer, or hackathon evaluator, we are here to assist.',
            'चाहे आप क्लस्टर समन्वयक हों, खरीदार हों या हैकाथॉन परीक्षक, हम सहायता के लिए सदैव तत्पर हैं।'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-craft-lg border border-palette-sand/60 p-6 md:p-8 shadow-soft">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-lora font-bold text-xl text-palette-espresso">
                {t('Message Sent Successfully!', 'संदेश सफलतापूर्वक भेज दिया गया!')}
              </h3>
              <p className="text-xs text-palette-wood max-w-sm mx-auto">
                {t(
                  'Our cluster support team will get back to you within 24 business hours.',
                  'हमारी क्लस्टर सहायता टीम 24 घंटे के भीतर आपसे संपर्क करेगी।'
                )}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-palette-clay hover:underline"
              >
                {t('Send Another Message', 'दूसरा संदेश भेजें')}
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
              <h3 className="font-lora font-bold text-lg text-palette-espresso border-b border-borderSoft pb-3">
                {t('Send an Inquiry / Message', 'संदेश या पूछताछ भेजें')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-palette-wood text-[10px]">
                    {t('Your Name', 'आपका नाम')}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Kamal / Priya / Organisation"
                    className="w-full p-2.5 rounded-lg border border-palette-sand bg-paper focus:outline-none focus:ring-2 focus:ring-palette-clay"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono uppercase font-bold text-palette-wood text-[10px]">
                    {t('Email Address', 'ईमेल पता')}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="contact@example.com"
                    className="w-full p-2.5 rounded-lg border border-palette-sand bg-paper focus:outline-none focus:ring-2 focus:ring-palette-clay"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-palette-wood text-[10px]">
                  {t('Subject / Inquiry Type', 'विषय')}
                </label>
                <select className="w-full p-2.5 rounded-lg border border-palette-sand bg-paper focus:outline-none focus:ring-2 focus:ring-palette-clay">
                  <option>Artisan Onboarding Support</option>
                  <option>Bulk Buyer / RFQ Inquiry</option>
                  <option>GeM / ONDC Technical Integration</option>
                  <option>NGO / Cluster Partnership</option>
                  <option>Smart India Hackathon 2026 Evaluation Query</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase font-bold text-palette-wood text-[10px]">
                  {t('Message', 'संदेश')}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we assist you?"
                  className="w-full p-2.5 rounded-lg border border-palette-sand bg-paper focus:outline-none focus:ring-2 focus:ring-palette-clay"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-palette-clay hover:bg-palette-clay/90 text-white font-bold text-xs shadow-clay flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-palette-butter" />
                <span>{t('Submit Inquiry', 'संदेश भेजें')}</span>
              </button>
            </form>
          )}
        </div>

        {/* Cluster Hub Locations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-palette-espresso text-paper p-6 rounded-craft-lg space-y-4">
            <div className="flex items-center gap-2 text-palette-sand font-mono text-xs font-bold uppercase">
              <Building className="w-4 h-4" />
              <span>Pilot Cluster Network</span>
            </div>
            <h3 className="font-lora font-bold text-lg text-paper">
              {t('Regional Grassroots Desks', 'क्षेत्रीय क्लस्टर केंद्र')}
            </h3>
            <p className="text-xs text-paper/75 leading-relaxed">
              Field coordinators operate directly in weaving clusters with Bhashini voice assistance equipment.
            </p>

            <div className="space-y-3 pt-2">
              {clusterHubs.map((hub, idx) => (
                <div key={idx} className="bg-white/10 p-3 rounded-xl border border-white/10 text-xs font-mono space-y-0.5">
                  <div className="text-palette-butter font-bold">{hub.city}, {hub.state}</div>
                  <div className="text-[11px] text-paper/80 font-sans">{hub.craft}</div>
                  <div className="text-[10px] text-palette-sand">{hub.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
