import React from 'react';
import { History, Building2, CheckCircle2, Network, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '15+',
      label: 'YEARS EXPERIENCE',
      sublabel: 'Established Regional Integrator',
      icon: <History size={22} className="text-[#22c55e]" />,
      accentColor: 'text-[#22c55e]',
    },
    {
      value: '100+',
      label: 'INSTITUTIONAL CLIENTS',
      sublabel: 'Universities, PSUs & Plants',
      icon: <Building2 size={22} className="text-[#f59e0b]" />,
      accentColor: 'text-[#f59e0b]',
    },
    {
      value: '150+',
      label: 'TURNKEY PROJECTS',
      sublabel: 'End-to-End Implementation',
      icon: <CheckCircle2 size={22} className="text-[#22c55e]" />,
      accentColor: 'text-[#22c55e]',
    },
    {
      value: '6',
      label: 'SERVICE VERTICALS',
      sublabel: 'Unified Tech Architecture',
      icon: <Network size={22} className="text-[#ff4757]" />,
      accentColor: 'text-[#ff4757]',
    },
  ];

  return (
    <section className="relative w-full bg-[#1b2838] text-white py-8 sm:py-10 px-4 sm:px-8 border-y-4 border-[#0e1620] shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]">
      {/* Blueprint grid subtle overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#243447]/60 border border-white/10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.08),0_4px_8px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-[#14202d] shadow-[inset_1.5px_1.5px_3px_rgba(0,0,0,0.6)] shrink-0 mt-0.5">
                {item.icon}
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className={`font-mono text-2xl sm:text-3xl font-black tracking-tight ${item.accentColor} drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]`}>
                    {item.value}
                  </span>
                </div>
                <h4 className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                  {item.label}
                </h4>
                <p className="font-sans text-xs text-[#a0aec0] leading-snug">
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
