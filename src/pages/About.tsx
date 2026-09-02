import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Target, Users, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase text-palette-clay font-bold tracking-widest">
          {t('Mission & Hackathon Origin', 'हमारा मिशन एवं उत्पत्ति')}
        </span>
        <h1 className="font-rowan font-extrabold text-4xl sm:text-5xl text-palette-espresso">
          {t('The 0.2% Story: Closing India’s Digital Craft Divide', '0.2% की कहानी: भारत की डिजिटल खाई को पाटना')}
        </h1>
      </div>

      {/* THE 0.2% INSIGHT SECTION */}
      <section className="bg-white rounded-craft-lg border border-palette-sand/60 p-8 md:p-12 shadow-soft space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-palette-espresso/85 leading-relaxed">
            <h2 className="font-lora font-bold text-2xl text-palette-espresso">
              {t('A Contrast of Two Realities', 'दो वास्तविकताओं का विरोधाभास')}
            </h2>
            <p>
              According to the 4th All India Handloom Census, **only 0.2% of Indian handloom sales occur online**. Meanwhile, official NSO telecom data shows that **95.5% of rural mobile owners already possess a smartphone**.
            </p>
            <p>
              Why has e-commerce bypassed 35.2 lakh weavers and allied artisans? Because every major marketplace — from Amazon Karigar to Flipkart Samarth — begins *after* four prerequisite artefacts exist: **a studio photograph, English product copy, a defensible price, and complex online tax registration forms.**
            </p>
            <p>
              For Kamala, a 42-year-old silk weaver in Chanderi who uses WhatsApp voice notes but cannot type in English, that barrier is impassable. **Pathashilpa eliminates the need for typing entirely.**
            </p>
          </div>

          <div className="lg:col-span-5 bg-paperAlt p-6 rounded-2xl border border-palette-sand/70 space-y-4 text-center">
            <span className="font-mono text-[10px] uppercase text-palette-wood font-bold">The Hackathon Premise</span>
            <div className="font-rowan font-extrabold text-5xl text-palette-clay">0.2%</div>
            <p className="text-xs font-semibold text-palette-espresso">
              Current Handloom Share Online
            </p>
            <div className="w-full h-px bg-borderSoft my-2" />
            <div className="font-rowan font-extrabold text-5xl text-palette-espresso">95.5%</div>
            <p className="text-xs font-semibold text-palette-espresso">
              Rural Smartphone Ownership
            </p>
            <p className="text-[11px] font-kalam text-palette-clay">
              "The device is there. What was missing was the software."
            </p>
          </div>
        </div>
      </section>

      {/* SIH 2026 CONTEXT & OBJECTIVE */}
      <section className="bg-palette-espresso text-paper rounded-craft-lg p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-palette-butter flex items-center justify-center text-palette-espresso font-bold">
            <Award className="w-6 h-6 text-palette-clay" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-palette-sand font-bold">Hackathon Prototype</span>
            <h3 className="font-rowan font-bold text-2xl text-paper">Smart India Hackathon 2026</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-paper/80 leading-relaxed font-sans">
          <div className="space-y-2 bg-white/10 p-5 rounded-xl border border-white/10">
            <h4 className="font-lora font-bold text-base text-palette-sand">Problem Statement</h4>
            <p>
              AI-Driven Market Linkage and Smart Cataloging Mobile Application for Marginalized Rural Artisans.
            </p>
          </div>

          <div className="space-y-2 bg-white/10 p-5 rounded-xl border border-white/10">
            <h4 className="font-lora font-bold text-base text-palette-sand">Open Public Rails</h4>
            <p>
              Built directly on Bhashini ULCA speech models, publishing natively into the ONDC open network and GeM portal.
            </p>
          </div>

          <div className="space-y-2 bg-white/10 p-5 rounded-xl border border-white/10">
            <h4 className="font-lora font-bold text-base text-palette-sand">Core Target Metric</h4>
            <p>
              Listing completion rate &gt; 80% with time-to-publish under 3 minutes on low-end ₹6,000 Android devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
