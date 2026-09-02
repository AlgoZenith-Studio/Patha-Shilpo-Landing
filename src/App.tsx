import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddProductSimulatorModal } from './components/AddProductSimulatorModal';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Pricing } from './pages/Pricing';
import { ForArtisans } from './pages/ForArtisans';
import { ForBuyers } from './pages/ForBuyers';
import { About } from './pages/About';
import { ArtisanCharter } from './pages/ArtisanCharter';
import { Press } from './pages/Press';
import { PressArticle } from './pages/PressArticle';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-palette-espresso font-sans selection:bg-palette-butter selection:text-palette-espresso">
      <ScrollToTop />
      <Header onOpenDemo={() => setDemoModalOpen(true)} />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenDemo={() => setDemoModalOpen(true)} />} />
          <Route path="/how-it-works" element={<HowItWorks onOpenDemo={() => setDemoModalOpen(true)} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/for-artisans" element={<ForArtisans onOpenDemo={() => setDemoModalOpen(true)} />} />
          <Route path="/for-buyers" element={<ForBuyers />} />
          <Route path="/about" element={<About />} />
          <Route path="/artisan-charter" element={<ArtisanCharter />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press/:slug" element={<PressArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/refund-policy" element={<Legal />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Interactive 90s Simulator Modal */}
      <AddProductSimulatorModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
