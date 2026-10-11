import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, ShieldAlert, Sparkles, TrendingUp, Info } from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [materialCost, setMaterialCost] = useState<number>(1400);
  const [hours, setHours] = useState<number>(8);
  const [hourlyWage, setHourlyWage] = useState<number>(150);

  // Exact PRD Pricing Formula
  const laborCost = hours * hourlyWage;
  const rawBase = materialCost + laborCost;
  const floor = Math.round(rawBase * 1.15); // 15% safety / contingency floor
  const roundTo50 = (val: number) => Math.round(val / 50) * 50;
  const suggested = roundTo50(floor * 1.25); // 25% artisan profit margin
  const maxPrice = roundTo50(suggested * 1.3); // 30% upper market headroom

  return (
    <div className="bg-white rounded-craft-lg border border-palette-sand/60 p-6 md:p-8 shadow-soft space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-borderSoft pb-6">
        <div>
          <div className="flex items-center gap-2 text-palette-clay font-rowan text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>{t('Open Pricing Formula Engine', 'खुला मूल्य निर्धारण फॉर्मूला इंजन')}</span>
          </div>
          <h3 className="font-rowan font-bold text-2xl text-palette-espresso">
            {t('Calculate Defensible, Fair Craft Pricing', 'पारदर्शी एवं उचित कारीगर मूल्य की गणना करें')}
          </h3>
          <p className="font-rowan font-bold text-palette-clay text-xs mt-1">
            {t(
              'Deterministic formulas guarantee the artisan never undersells, while buyers understand the true economic value.',
              'निश्चित फॉर्मूला यह सुनिश्चित करता है कि कारीगर कभी नुकसान में न बेचे, और खरीदार वास्तविक मूल्य समझे।'
            )}
          </p>
        </div>

        <div className="bg-palette-butter/60 border border-palette-sand/80 px-4 py-2 rounded-xl text-xs flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-palette-clay flex-shrink-0" />
          <span className="font-rowan font-bold text-xs text-palette-espresso">
            {t('100% Identical Online & Offline', 'ऑफलाइन और ऑनलाइन दोनों जगह बिल्कुल एक समान')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Input Area */}
        <div className="lg:col-span-6 space-y-6">
          {/* Material Cost */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-rowan font-bold">
              <label className="text-palette-espresso uppercase tracking-wider">
                {t('Material Cost (Raw Silk / Cotton / Dyes)', 'कच्चा माल खर्च (धागा / रंग / सामग्री)')}
              </label>
              <span className="text-base font-bold text-palette-clay">
                ₹{materialCost.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="5000"
              step="50"
              value={materialCost}
              onChange={(e) => setMaterialCost(Number(e.target.value))}
              className="w-full h-2 bg-paperAlt rounded-lg appearance-none cursor-pointer accent-palette-clay"
            />
            <div className="flex justify-between text-[11px] text-palette-wood font-rowan font-bold">
              <span>₹200 (Simple Clay/Toys)</span>
              <span>₹2,500 (Tussar Silk)</span>
              <span>₹5,000 (Zari Brocade)</span>
            </div>
          </div>

          {/* Weaving Hours */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-rowan font-bold">
              <label className="text-palette-espresso uppercase tracking-wider">
                {t('Crafting Time (Hours of Work)', 'मेहनत का समय (कारीगरी के घंटे)')}
              </label>
              <span className="text-base font-bold text-palette-clay">
                {hours} {t('Hours', 'घंटे')}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 bg-paperAlt rounded-lg appearance-none cursor-pointer accent-palette-clay"
            />
            <div className="flex justify-between text-[11px] text-palette-wood font-rowan font-bold">
              <span>1 hr (Pottery)</span>
              <span>8 hrs (1 Day Loom)</span>
              <span>40 hrs (Complex Ikat/Zari)</span>
            </div>
          </div>

          {/* Wage Rate (Configurable Benchmark) */}
          <div className="bg-paperAlt p-4 rounded-xl border border-palette-sand/40 flex items-center justify-between text-xs font-rowan font-bold">
            <div>
              <span className="text-palette-espresso block">
                {t('Labor Rate Benchmark', 'मजदूरी दर मानक')}
              </span>
              <span className="text-[11px] text-palette-clay">
                {t('Indexed to rural skilled artisan fair wage floor', 'कुशल ग्रामीण कारीगर की मानक दर')}
              </span>
            </div>
            <div className="font-bold text-sm text-palette-espresso bg-white px-3 py-1 rounded-lg border border-palette-sand/60">
              ₹150 / hr
            </div>
          </div>

          {/* The Formula Breakdown Box */}
          <div className="bg-palette-espresso text-paper p-4 rounded-xl font-rowan font-bold text-xs space-y-2">
            <div className="text-[10px] uppercase text-palette-sand tracking-widest font-bold">
              Mathematical Formula (Standard Specification)
            </div>
            <div className="text-palette-butter text-[11px]">
              floor = (materialCost + hours × ₹150) × 1.15
            </div>
            <div className="text-palette-sand text-[11px]">
              suggested = round(floor × 1.25, ₹50)
            </div>
            <div className="text-paper/80 text-[10px]">
              * Artisan retains 100% discretion to adjust or override the final listing price.
            </div>
          </div>
        </div>

        {/* Output & Visual Breakdown */}
        <div className="lg:col-span-6 bg-paperAlt rounded-2xl p-6 border border-palette-sand/50 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-rowan uppercase text-palette-clay font-bold tracking-wider block">
              {t('Transparent Price Spectrum', 'पारदर्शी मूल्य दायरा')}
            </span>

            {/* 3 Price Cards */}
            <div className="grid grid-cols-3 gap-3 text-center">
              {/* Cost Floor */}
              <div className="bg-white p-3 rounded-xl border border-palette-wood/30 shadow-xs font-rowan font-bold">
                <span className="text-[10px] sm:text-xs text-palette-wood uppercase tracking-wider block">
                  {t('Cost Floor', 'लागत आधार')}
                </span>
                <div className="text-lg font-bold text-palette-espresso mt-1">
                  ₹{floor.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-palette-clay block mt-0.5">
                  {t('Never sell below', 'न्यूनतम सीमा')}
                </span>
              </div>

              {/* Suggested Fair Price (Highlighted) */}
              <div className="bg-palette-butter/50 p-3 rounded-xl border-2 border-palette-clay shadow-sm relative font-rowan font-bold">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-palette-clay text-white text-[9px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider">
                  Recommended
                </div>
                <span className="text-[10px] sm:text-xs text-palette-clay uppercase tracking-wider block">
                  {t('Fair Suggested', 'उचित मूल्य')}
                </span>
                <div className="text-xl font-extrabold text-palette-clay mt-1">
                  ₹{suggested.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-palette-espresso block mt-0.5">
                  {t('+25% Artisan Margin', '+25% कारीगर लाभ')}
                </span>
              </div>

              {/* Max Ceiling */}
              <div className="bg-white p-3 rounded-xl border border-palette-wood/30 shadow-xs font-rowan font-bold">
                <span className="text-[10px] sm:text-xs text-palette-wood uppercase tracking-wider block">
                  {t('Max Retail Band', 'अधिकतम दायरा')}
                </span>
                <div className="text-lg font-bold text-palette-espresso mt-1">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-palette-clay block mt-0.5">
                  {t('Premium tier', 'प्रीमियम बाज़ार')}
                </span>
              </div>
            </div>

            {/* Step-by-Step Breakdown Table */}
            <div className="bg-white rounded-xl p-4 border border-borderSoft text-xs font-rowan font-bold space-y-2">
              <div className="flex justify-between text-palette-espresso">
                <span>1. {t('Raw Material Input:', 'कच्चा माल लागत:')}</span>
                <span>₹{materialCost}</span>
              </div>
              <div className="flex justify-between text-palette-espresso">
                <span>2. {t(`Labor (${hours} hrs @ ₹150/hr):`, `कारीगरी (${hours} घंटे @ ₹150/घंटा):`)}</span>
                <span>₹{laborCost}</span>
              </div>
              <div className="flex justify-between text-palette-espresso/80 border-t border-borderSoft pt-1.5">
                <span>3. {t('Subtotal Base Cost:', 'कुल आधार लागत:')}</span>
                <span>₹{rawBase}</span>
              </div>
              <div className="flex justify-between text-palette-wood">
                <span>4. {t('+15% Contingency & Wastage:', '+15% सुरक्षा मार्जिन:')}</span>
                <span>+₹{Math.round(rawBase * 0.15)}</span>
              </div>
              <div className="flex justify-between text-emerald-800 border-t border-dashed border-palette-sand pt-1.5">
                <span>5. {t('Net Artisan Profit Margin (+25%):', 'कारीगर का शुद्ध लाभ (+25%):')}</span>
                <span>+₹{Math.round(floor * 0.25)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-palette-sand/40 flex items-start gap-2 text-xs font-rowan font-bold text-palette-clay">
            <Info className="w-4 h-4 text-palette-clay flex-shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs leading-relaxed">
              {t(
                'Every listing created in Pathashilpa has this pricing rationale read aloud to the artisan in Hindi/regional language before publishing.',
                'पाथाशिल्पा में बनने वाली हर लिस्टिंग का यह कारण कारीगर को प्रकाशित करने से पहले उसकी भाषा में बोलकर सुनाया जाता है।'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
