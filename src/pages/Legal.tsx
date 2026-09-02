import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, FileText, RotateCcw } from 'lucide-react';

export const Legal: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  const isPrivacy = pathname.includes('/privacy');
  const isTerms = pathname.includes('/terms');
  const isRefund = pathname.includes('/refund-policy');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Navigation Tabs */}
      <div className="flex border-b border-borderSoft gap-4 text-xs font-mono font-semibold">
        <Link
          to="/privacy"
          className={`pb-3 px-2 border-b-2 transition-all ${
            isPrivacy 
              ? 'border-palette-clay text-palette-clay font-bold' 
              : 'border-transparent text-palette-wood hover:text-palette-espresso'
          }`}
        >
          Privacy Policy (DPDP 2023)
        </Link>
        <Link
          to="/terms"
          className={`pb-3 px-2 border-b-2 transition-all ${
            isTerms 
              ? 'border-palette-clay text-palette-clay font-bold' 
              : 'border-transparent text-palette-wood hover:text-palette-espresso'
          }`}
        >
          Terms of Service
        </Link>
        <Link
          to="/refund-policy"
          className={`pb-3 px-2 border-b-2 transition-all ${
            isRefund 
              ? 'border-palette-clay text-palette-clay font-bold' 
              : 'border-transparent text-palette-wood hover:text-palette-espresso'
          }`}
        >
          Returns & Made-to-Order Policy
        </Link>
      </div>

      {/* PRIVACY POLICY */}
      {isPrivacy && (
        <article className="bg-white rounded-craft-lg border border-palette-sand/60 p-8 sm:p-12 shadow-soft space-y-6 text-xs sm:text-sm text-palette-espresso/85 leading-relaxed">
          <div className="border-b border-borderSoft pb-4">
            <span className="font-mono text-xs text-palette-wood font-bold">LEGAL DOCUMENT · VERSION 1.0</span>
            <h1 className="font-rowan font-extrabold text-3xl text-palette-espresso mt-1">
              Privacy Policy (DPDP Act 2023 Aligned)
            </h1>
            <p className="text-xs text-palette-wood mt-1">Last Updated: February 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">1. Digital Personal Data Protection Commitment</h2>
            <p>
              Pathashilpa is committed to absolute data minimization and data sovereignty for rural Indian artisans in accordance with India’s Digital Personal Data Protection (DPDP) Act 2023. We collect only what is strictly required to generate and publish authentic craft listings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">2. Voice Recordings & Processing</h2>
            <p>
              When an artisan describes a craft item, the audio stream is processed via Government of India Bhashini ULCA speech APIs. Raw voice data is retained temporarily for speech-to-text conversion and transcription error verification only. The artisan retains the explicit right to delete raw audio recordings at any time directly from the app settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">3. Data Processors & Cloud Hosting</h2>
            <p>
              Product listing data and studio-rendered images are stored securely on Indian cloud infrastructure. We do not sell, barter, or distribute artisan demographic, sales volume, or personal phone records to third-party ad networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">4. Artisan Rights: Export & Erasure</h2>
            <p>
              Every artisan profile has one-click data portability. You may export your entire catalog history or request permanent profile erasure, which immediately de-indexes all listings from public storefronts.
            </p>
          </section>
        </article>
      )}

      {/* TERMS OF SERVICE */}
      {isTerms && (
        <article className="bg-white rounded-craft-lg border border-palette-sand/60 p-8 sm:p-12 shadow-soft space-y-6 text-xs sm:text-sm text-palette-espresso/85 leading-relaxed">
          <div className="border-b border-borderSoft pb-4">
            <span className="font-mono text-xs text-palette-wood font-bold">LEGAL DOCUMENT · VERSION 1.0</span>
            <h1 className="font-rowan font-extrabold text-3xl text-palette-espresso mt-1">
              Terms of Service
            </h1>
            <p className="text-xs text-palette-wood mt-1">Last Updated: February 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">1. Artisan Ownership of Content</h2>
            <p>
              The artisan retains full intellectual property and physical ownership over all craft designs, uploaded photographs, and original storytelling descriptions. Pathashilpa holds a non-exclusive license solely to display and syndicate listings to ONDC and GeM.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">2. Price Recommendations are Advisory</h2>
            <p>
              The AI fair-price formula is a deterministic calculation intended to prevent distress sales. The artisan holds full autonomy to set their final price higher or lower. Pathashilpa is not a price-fixing entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">3. Strict Prohibition of Counterfeit & Machine Goods</h2>
            <p>
              Listing machine-made powerloom goods as handmade handloom or falsely claiming Geographical Indication (GI) heritage is strictly prohibited. Violating listings are removed immediately upon moderator review.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">4. Enquiries & Purchase Orders</h2>
            <p>
              Enquiries and RFQs generated through the platform constitute non-binding expressions of interest until formally confirmed and accepted by the cluster cooperative.
            </p>
          </section>
        </article>
      )}

      {/* REFUND & MADE-TO-ORDER POLICY */}
      {isRefund && (
        <article className="bg-white rounded-craft-lg border border-palette-sand/60 p-8 sm:p-12 shadow-soft space-y-6 text-xs sm:text-sm text-palette-espresso/85 leading-relaxed">
          <div className="border-b border-borderSoft pb-4">
            <span className="font-mono text-xs text-palette-wood font-bold">LEGAL DOCUMENT · VERSION 1.0</span>
            <h1 className="font-rowan font-extrabold text-3xl text-palette-espresso mt-1">
              Returns & Made-to-Order Policy
            </h1>
            <p className="text-xs text-palette-wood mt-1">Last Updated: February 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">1. Made-to-Order Binding Nature</h2>
            <p>
              Because indigenous handloom items are woven individually by master weavers following confirmed orders, purchase commitments are binding once the artisan commences warping and weft preparation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">2. Transit Damage & Natural Variations</h2>
            <p>
              Items damaged during shipping are eligible for complete insurance claim or replacement. Minor variations in handloom texture, dye slubs, and natural vegetable pigments are hallmarks of genuine handmade authenticity and are not considered manufacturing defects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-lora font-bold text-lg text-palette-espresso">3. Return Shipping & Quality Verification</h2>
            <p>
              In the event of an unresolvable mismatch in agreed dimensions or verified material blend, return shipping is coordinated directly via cluster logistics with 100% buyer refund upon inspection.
            </p>
          </section>
        </article>
      )}
    </div>
  );
};
