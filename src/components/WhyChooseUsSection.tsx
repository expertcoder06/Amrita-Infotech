import React from 'react';
import { ShieldCheck, Layers, Award, Clock, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'One-Stop Vendor',
      icon: <Layers size={24} className="text-[#097945]" />,
      desc: 'No coordinating between 5 separate sub-contractors. We design, wire, deploy, and maintain solar, networking, and security under one SLA.',
    },
    {
      title: '15+ Years Track Record',
      icon: <ShieldCheck size={24} className="text-[#097945]" />,
      desc: 'Trusted by top universities, government entities, and enterprises across Jharkhand with verifiable project performance metrics.',
    },
    {
      title: 'End-to-End Subsidy',
      icon: <Award size={24} className="text-[#097945]" />,
      desc: 'Complete portal management, inspection paperwork, and DISCOM meter synchronization for central and state solar schemes.',
    },
    {
      title: 'Localized 24/7 AMC',
      icon: <Clock size={24} className="text-[#097945]" />,
      desc: 'Direct regional service teams ready to deploy within hours for emergency fiber splicing, camera swaps, and inverter repairs.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#097945]/10 border border-[#097945]/20">
          <span className="w-2 h-2 rounded-full bg-[#097945]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
            THE AMRITA ADVANTAGE
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241a] tracking-tight">
          Why Choose Amrita Infotech
        </h2>

        <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
          Built on engineering accountability, local presence, and certified technical reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-[#e2e8f0] p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#097945]/10 flex items-center justify-center">
                {pillar.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1a202c]">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
