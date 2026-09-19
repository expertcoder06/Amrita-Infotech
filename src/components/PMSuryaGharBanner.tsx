import React from 'react';
import { ShieldCheck, Phone, ArrowRight, Sun, Zap, CheckCircle2 } from 'lucide-react';

export interface PMSuryaGharBannerProps {
  onCheckEligibility: () => void;
  onCallDesk: () => void;
}

export const PMSuryaGharBanner: React.FC<PMSuryaGharBannerProps> = ({
  onCheckEligibility,
  onCallDesk,
}) => {
  return (
    <section id="subsidies" className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-3xl bg-[#0d2218] border-2 border-[#184530] text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_16px_36px_rgba(13,34,24,0.35)]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#4ade80]">
              <Sun size={14} className="text-[#4ade80]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                PM SURYA GHAR MUFT BIJLI YOJANA &amp; AGRICULTURAL SUBSIDIES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Get Up to ₹78,000 Direct Government Subsidy on Rooftop Solar
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-2xl">
              Slash your monthly electricity bills by up to 90%. Amrita Infotech manages your complete end-to-end documentation, DISCOM net-metering approvals, and subsidized panel commissioning with zero paperwork hassle.
            </p>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-[#4ade80] block">
                  1 kW - 3 kW
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                  ₹30,000 to ₹78,000 Subsidy
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-[#4ade80] block">
                  Solar Agri Pumps
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                  Up to 60% Subsidized Cost
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-[#4ade80] block">
                  Zero Hassle
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                  Complete DISCOM Clearance
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Box */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md space-y-4 text-center">
              <div className="space-y-1">
                <h3 className="font-sans text-lg font-bold text-white">
                  Calculate Savings
                </h3>
                <p className="font-sans text-xs text-[#94a3b8]">
                  Quick eligibility check takes 60 seconds
                </p>
              </div>

              <button
                type="button"
                onClick={onCheckEligibility}
                className="w-full h-12 rounded-xl bg-[#097945] hover:bg-[#07663a] text-white font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(9,121,69,0.4)] transition-all cursor-pointer"
              >
                <span>Check Subsidy Eligibility</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={onCallDesk}
                className="w-full h-12 rounded-xl bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone size={15} className="text-[#4ade80]" />
                <span>Speak to Subsidy Desk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
