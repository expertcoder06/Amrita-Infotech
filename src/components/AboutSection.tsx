import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, Award, FileText, Check } from 'lucide-react';
import { IndustrialCard } from './IndustrialCard.tsx';
import { PhysicalButton } from './PhysicalButton.tsx';
import { MaskingTape } from './MaskingTape.tsx';
import { soundEngine } from '../tokens.ts';

export const AboutSection: React.FC = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <IndustrialCard
        withScrews
        withVents
        modelNumber="CORP-DOSSIER // 01"
        badge="CERTIFIED PARTNER"
        className="p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Mission & Operational Overview */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tag Badge matching Image 2 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d1d9e6]/70 shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff] border border-white/40">
              <span className="w-2 h-2 rounded-sm bg-[#097945]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
                ABOUT AMRITA INFOTECH
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2d3436] tracking-tight leading-tight drop-shadow-[0_1px_1px_#ffffff]">
              A Dependable Regional Systems Integrator & Certified Solar Engineering Partner
            </h2>

            {/* Body Paragraph 1 */}
            <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed">
              Founded and directed under the strategic leadership of{' '}
              <strong className="text-[#2d3436] font-bold">Mr. Rajendra Nath Pattanayak</strong>,
              Amrita Infotech has evolved into Eastern India's premier turnkey provider for modern
              infrastructure. We integrate mission-critical security setups, high-throughput enterprise
              fiber backbones, and smart IoT automation alongside green solar power systems that slash
              operating costs.
            </p>

            {/* Body Paragraph 2 */}
            <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed">
              Whether deploying high-security IP surveillance for premier institutes like{' '}
              <strong className="text-[#2d3436] font-bold">IIT ISM Dhanbad</strong> or
              facilitating central{' '}
              <strong className="text-[#097945] font-bold">PM Surya Ghar solar subsidies</strong> for
              rural homeowners, our team guarantees unmatched technical precision, transparent pricing,
              and rigorous after-sales maintenance.
            </p>

            {/* Action Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick('click');
                  setProfileModalOpen(true);
                }}
                className="group inline-flex items-center gap-2 font-sans text-sm font-bold text-[#097945] hover:text-[#065330] transition-colors cursor-pointer"
              >
                <span>Read Leadership Profile & Credentials</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Leadership Quote Card matching Image 2 */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#f0f2f5] p-6 sm:p-8 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] border border-white/80 space-y-6">
              {/* Corner screws for physical skeuomorphism */}
              <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_1.5px_#a3b1c6] pointer-events-none" />
              <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_1.5px_#a3b1c6] pointer-events-none" />

              {/* Leader Avatar & Title Header */}
              <div className="flex items-center gap-4">
                {/* Monogram Box "RP" */}
                <div className="w-14 h-14 rounded-xl bg-[#1b2838] shadow-[3px_3px_8px_rgba(27,40,56,0.35),-2px_-2px_4px_#ffffff] flex items-center justify-center text-white shrink-0 border border-white/10">
                  <span className="font-mono text-xl font-extrabold tracking-tight">RP</span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-sans text-lg font-extrabold text-[#2d3436] tracking-tight">
                    Rajendra N. Pattanayak
                  </h3>
                  <p className="font-mono text-xs font-bold text-[#4a5568]">
                    Managing Director & Lead Systems Engineer
                  </p>
                </div>
              </div>

              {/* Quote Block */}
              <blockquote className="font-sans text-sm sm:text-base italic text-[#4a5568] leading-relaxed relative pl-3 border-l-2 border-[#097945]/40">
                “Our philosophy is uncompromising technical diligence: we build solutions that operate
                seamlessly 24 hours a day, 365 days a year without downtime.”
              </blockquote>

              {/* Government Approved Verification Badge */}
              <div className="pt-2 border-t border-[#d1d9e6]/70 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#4a5568] font-bold">Government Registered</span>
                  <span className="font-extrabold text-[#097945] bg-[#097945]/10 px-2 py-0.5 rounded border border-[#097945]/20">
                    Vendor Approved
                  </span>
                </div>
                <Shield size={16} className="text-[#097945]" />
              </div>
            </div>
          </div>
        </div>
      </IndustrialCard>

      {/* Leadership Profile Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#e0e5ec] p-6 sm:p-8 shadow-[16px_16px_32px_rgba(0,0,0,0.3)] border border-white/60 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#babecc]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1b2838] flex items-center justify-center text-white font-mono font-bold">
                  RP
                </div>
                <div>
                  <h3 className="font-sans text-lg font-extrabold text-[#2d3436]">
                    Mr. Rajendra Nath Pattanayak
                  </h3>
                  <span className="font-mono text-xs text-[#4a5568]">
                    Managing Director & Certified Systems Architect
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="p-2 rounded-lg bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6] text-[#2d3436] font-mono text-xs font-bold"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#4a5568]">
              <p>
                With over 15+ years spearheading large-scale telecommunication, grid-tied renewable
                energy, and institutional surveillance infrastructure across Eastern India, Mr.
                Rajendra Nath Pattanayak has established Amrita Infotech as a dependable pillar for
                both government entities and private industrial plants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_1.5px_1.5px_3px_#babecc] space-y-1">
                  <span className="font-mono text-[10px] text-[#4a5568] uppercase font-bold">
                    PREMIER DEPLOYMENT
                  </span>
                  <div className="font-sans font-bold text-xs text-[#2d3436]">
                    IIT ISM Dhanbad Security Infrastructure
                  </div>
                  <span className="text-[11px] text-[#4a5568] block">
                    2,500+ Camera campus surveillance network with centralized fiber backbone.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#d1d9e6]/50 shadow-[inset_1.5px_1.5px_3px_#babecc] space-y-1">
                  <span className="font-mono text-[10px] text-[#4a5568] uppercase font-bold">
                    RENEWABLE CAPACITY
                  </span>
                  <div className="font-sans font-bold text-xs text-[#2d3436]">
                    1.2+ MW Clean Rooftop & Ground Mounted
                  </div>
                  <span className="text-[11px] text-[#4a5568] block">
                    Turnkey EPC with certified MNRE net-metering synchronization.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#097945]/10 border border-[#097945]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#097945] font-sans font-bold text-xs">
                  <CheckCircle2 size={16} />
                  <span>PM Surya Ghar: Muft Bijli Yojana Certified Integrator</span>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#097945] bg-white px-2 py-0.5 rounded shadow-sm">
                  PORTAL VERIFIED
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <PhysicalButton
                variant="emerald"
                size="md"
                onClick={() => setProfileModalOpen(false)}
              >
                ACKNOWLEDGE
              </PhysicalButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
