import React, { useState } from 'react';
import { Sun, CheckCircle2, ShieldCheck, Zap, IndianRupee, ArrowRight } from 'lucide-react';
import { IndustrialCard } from './IndustrialCard.tsx';
import { PhysicalButton } from './PhysicalButton.tsx';
import { TactileKnob } from './TactileKnob.tsx';
import { MaskingTape } from './MaskingTape.tsx';

export const SubsidiesCalculator: React.FC<{ onApply: (kW: number) => void }> = ({ onApply }) => {
  const [capacity, setCapacity] = useState(3); // in kW

  // Official PM Surya Ghar Muft Bijli Yojana calculation rules
  const getSubsidyAmount = (kw: number) => {
    if (kw <= 1) return 30000;
    if (kw <= 2) return 60000;
    return 78000; // max cap for residential rooftop
  };

  const estimatedCost = capacity * 65000;
  const subsidy = getSubsidyAmount(capacity);
  const netInvestment = estimatedCost - subsidy;
  const monthlyUnits = capacity * 120;
  const monthlySavings = monthlyUnits * 6.5; // avg ₹6.5/unit in Jharkhand

  return (
    <section id="subsidies" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <IndustrialCard
        withScrews
        withVents
        modelNumber="CALC // PM-SURYA-GHAR"
        badge="CENTRAL GOVT SCHEME"
        className="p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Scheme Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <MaskingTape color="yellow" rotation={-1.5}>
                DIRECT PM SURYA GHAR SUBSIDY
              </MaskingTape>
              <span className="font-mono text-xs font-bold text-[#097945]">
                ● DIRECT DBT BANK TRANSFER
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-[#2d3436] tracking-tight leading-tight drop-shadow-[0_1px_1px_#ffffff]">
              Calculate Your PM Surya Ghar Central Solar Subsidy
            </h2>

            <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed">
              As a <strong>Government-Approved Solar Vendor & Certified Systems Integrator</strong> in
              Jharkhand & Eastern India, Amrita Infotech manages your complete end-to-end portal
              registration, DISCOM net-metering synchronization, and direct bank subsidy disbursement.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-[#2d3436]">
                <CheckCircle2 size={16} className="text-[#097945]" />
                <span>Up to ₹78,000 Direct Central Subsidy Credited in 30 Days</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-[#2d3436]">
                <CheckCircle2 size={16} className="text-[#097945]" />
                <span>Zero Electricity Bills (Up to 300 Free Units Every Month)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-[#2d3436]">
                <CheckCircle2 size={16} className="text-[#097945]" />
                <span>25-Year Performance Warranty on Solar PV Modules</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Skeuomorphic Calculator Rig */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#f0f2f5] p-6 shadow-[8px_8px_20px_#babecc,-8px_-8px_20px_#ffffff] border border-white/80 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#d1d9e6]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2d3436]">
                  ROOFTOP CAPACITY DIAL
                </span>
                <span className="font-mono text-xs font-bold text-[#097945] bg-[#097945]/10 px-2 py-0.5 rounded">
                  {capacity} kW SYSTEM
                </span>
              </div>

              {/* Rotary Knob / Stepper */}
              <div className="flex flex-col sm:flex-row items-center justify-around gap-6 p-4 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff]">
                <TactileKnob
                  label="CAPACITY (kW)"
                  min={1}
                  max={10}
                  step={1}
                  value={capacity}
                  onChange={setCapacity}
                  unit=" kW"
                  accent
                />

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <span className="font-mono text-[10px] text-[#4a5568] uppercase font-bold text-center">
                    QUICK PRESETS
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 5].map((kw) => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => setCapacity(kw)}
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                          capacity === kw
                            ? 'bg-[#097945] text-white shadow-[0_2px_6px_rgba(9,121,69,0.4)]'
                            : 'bg-[#d1d9e6] text-[#2d3436] shadow-[inset_1px_1px_2px_#babecc]'
                        }`}
                      >
                        {kw}kW
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Financial Calculation Readout */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_1.5px_1.5px_3px_#babecc] space-y-1">
                  <span className="text-[10px] text-[#4a5568] uppercase block">
                    GOVT SUBSIDY (DBT)
                  </span>
                  <span className="text-lg sm:text-xl font-black text-[#097945]">
                    ₹{subsidy.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_1.5px_1.5px_3px_#babecc] space-y-1">
                  <span className="text-[10px] text-[#4a5568] uppercase block">
                    MONTHLY SAVINGS
                  </span>
                  <span className="text-lg sm:text-xl font-black text-[#2d3436]">
                    ₹{Math.round(monthlySavings).toLocaleString('en-IN')}/mo
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <PhysicalButton
                variant="emerald"
                size="lg"
                className="w-full"
                onClick={() => onApply(capacity)}
              >
                APPLY FOR ₹{subsidy.toLocaleString('en-IN')} SUBSIDY →
              </PhysicalButton>
            </div>
          </div>
        </div>
      </IndustrialCard>
    </section>
  );
};
