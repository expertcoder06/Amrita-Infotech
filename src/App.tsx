import React, { useState } from 'react';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  FolderKanban,
} from 'lucide-react';
import { AmritaHeader } from './components/AmritaHeader.tsx';
import { SolarTelemetryConsole } from './components/SolarTelemetryConsole.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { CoreServicesSection } from './components/CoreServicesSection.tsx';
import { PMSuryaGharBanner } from './components/PMSuryaGharBanner.tsx';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { LeadCaptureSection } from './components/LeadCaptureSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { PhysicalButton } from './components/PhysicalButton.tsx';
import { DynamicHeroBackground } from './components/DynamicHeroBackground.tsx';
import { soundEngine } from './tokens.ts';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedCapacity, setSelectedCapacity] = useState<number | undefined>(undefined);

  const handleOpenQuote = (service?: string, capacity?: number) => {
    setSelectedService(service);
    setSelectedCapacity(capacity);
    soundEngine.playClick('click');
    setQuoteModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-[#2d3436] font-sans noise-overlay relative flex flex-col selection:bg-[#097945] selection:text-white">
      {/* 45-degree top-left ambient lighting */}
      <div className="pointer-events-none fixed top-0 left-0 w-[550px] h-[550px] bg-white/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* 1. Header Navigation matching screen.png */}
      <AmritaHeader
        activeNav={activeNav}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        soundEnabled={soundEnabled}
        onToggleSound={(enabled) => {
          setSoundEnabled(enabled);
          soundEngine.enabled = enabled;
        }}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Dynamic Solar & CCTV Visual Layers */}
        <section id="home" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 px-4 sm:px-8 w-full overflow-hidden">
          {/* Dynamic Solar & CCTV Visual Background with Ken Burns Zoom & Live Telemetry HUD */}
          <DynamicHeroBackground />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Transparent directly over dynamic background picture */}
            <div className="lg:col-span-7 space-y-6">
              {/* Government Approved Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md shadow-sm border border-white/90">
                <Shield size={16} className="text-[#097945]" />
                <span className="font-mono text-xs font-bold text-[#1a202c] tracking-tight">
                  Government-Approved Solar Vendor &amp; Certified Systems Integrator
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0a1b14] tracking-tight leading-[1.12] drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)]">
                Technology, Security &amp; Solar Solutions You Can Trust
              </h1>

              {/* Subheadline */}
              <p className="text-[#1a202c] text-base sm:text-lg font-medium leading-relaxed max-w-[62ch] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                Powering regional institutions, universities, and commercial enterprises across Jharkhand &amp; Eastern India with 15+ years of certified turnkey excellence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PhysicalButton
                  variant="emerald"
                  size="lg"
                  onClick={() => handleOpenQuote()}
                  className="font-sans font-bold shadow-lg"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight size={18} />
                </PhysicalButton>

                <PhysicalButton
                  variant="secondary"
                  size="lg"
                  icon={<FolderKanban size={18} className="text-[#097945]" />}
                  onClick={() => handleNavigate('projects')}
                  className="font-sans font-bold shadow-md bg-white/90 backdrop-blur-md"
                >
                  View Our Projects
                </PhysicalButton>
              </div>

              {/* Verification Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-3 text-xs sm:text-sm font-sans font-bold text-[#1a202c]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-xs">
                  <CheckCircle2 size={17} className="text-[#097945]" />
                  <span>ISO &amp; GST Registered</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-xs">
                  <CheckCircle2 size={17} className="text-[#097945]" />
                  <span>Direct PM Surya Ghar Subsidy</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Console (1.2 MW+ Deployed & 2,500+ Cameras) */}
            <div className="lg:col-span-5">
              <SolarTelemetryConsole />
            </div>
          </div>
        </div>
      </section>

        {/* 3. Dark Stats Strip from screen.png */}
        <StatsBar />

        {/* 4. About Amrita Infotech Section from screen.png */}
        <AboutSection />

        {/* 5. Our Core Services Section (6 Verticals) from screen.png */}
        <CoreServicesSection
          onSelectService={(srv) => handleOpenQuote(srv)}
        />

        {/* 6. PM Surya Ghar Direct Subsidy Banner from screen.png */}
        <PMSuryaGharBanner
          onCheckEligibility={() => handleOpenQuote('PM Surya Ghar: Muft Bijli Subsidy')}
          onCallDesk={() => {
            window.location.href = 'tel:+919876543210';
          }}
        />

        {/* 7. Featured Projects Section (IIT ISM, DAV, Rudra, Bokaro) from screen.png */}
        <FeaturedProjectsSection
          onRequestCaseStudies={() => handleOpenQuote('Detailed Case Studies Request')}
        />

        {/* 8. Why Choose Amrita Infotech (4 Pillars) from screen.png */}
        <WhyChooseUsSection />

        {/* 9. What Our Clients Say (Testimonials) from screen.png */}
        <TestimonialsSection />

        {/* 10. Ready to Secure or Solar-Power Your Facility? Lead Capture Form */}
        <LeadCaptureSection />
      </main>

      {/* 11. Complete Footer matching screen.png */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* 12. Floating WhatsApp Connect Button from screen.png */}
      <WhatsAppButton />

      {/* 13. Interactive Turnkey Quote & Subsidy Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
        initialCapacity={selectedCapacity}
      />
    </div>
  );
}
