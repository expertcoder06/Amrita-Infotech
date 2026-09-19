import React, { useState, useEffect } from 'react';
import { Activity, Radio, Cpu, RefreshCw } from 'lucide-react';

export interface DeviceScreenProps {
  title?: string;
  frequency?: number;
  gain?: number;
  online?: boolean;
}

export const DeviceScreen: React.FC<DeviceScreenProps> = ({
  title = 'TELEMETRY CRT-104',
  frequency = 440,
  gain = 75,
  online = true,
}) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!online) return;
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, [online]);

  // Generate dynamic waveform SVG points
  const points = Array.from({ length: 32 }, (_, i) => {
    const x = (i / 31) * 320;
    const freqFactor = (frequency / 200) * 0.4;
    const y =
      40 +
      Math.sin(i * freqFactor + frame * 0.2) * (gain * 0.3) +
      Math.cos(i * 0.8 + frame * 0.1) * 6;
    return `${x},${Math.max(8, Math.min(72, y))}`;
  }).join(' ');

  return (
    <div className="relative rounded-2xl bg-[#2d3436] p-3 shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff] border-4 border-[#1e272e] transition-transform duration-300 hover:scale-[1.01]">
      {/* Top Bezel Bar: Power LED & Stamped Label */}
      <div className="flex items-center justify-between pb-2 px-1 text-[10px] font-mono tracking-widest text-[#a4b0be]">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              online
                ? 'bg-[#22c55e] shadow-[0_0_8px_#22c55e]'
                : 'bg-[#ff4757] shadow-[0_0_8px_#ff4757]'
            } animate-pulse`}
          />
          <span className="font-bold text-white uppercase">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#68d391]">PWR: {online ? 'NORM' : 'STBY'}</span>
          <span>REV 3.2</span>
        </div>
      </div>

      {/* The CRT Screen with Scanlines & Inset Shadow */}
      <div className="relative overflow-hidden rounded-lg bg-[#0d1317] border border-[#1a252f] p-4 shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)]">
        {/* Scanlines overlay */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-40 z-10" />

        {/* Phosphor glow ambiance */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 rounded-full bg-[#22c55e]/10 blur-2xl" />

        {/* Screen Content */}
        <div className="relative z-0 font-mono flex flex-col gap-3">
          {/* Diagnostic header */}
          <div className="flex items-center justify-between border-b border-[#22c55e]/20 pb-2 text-[11px]">
            <div className="flex items-center gap-2 text-[#68d391]">
              <Radio size={14} className="animate-spin text-[#68d391]" style={{ animationDuration: '6s' }} />
              <span className="font-bold">LIVE OSCILLOSCOPE CH-A</span>
            </div>
            <span className="text-[#a0aec0] text-[10px]">
              {online ? 'SAMPLE RATE: 48.0 kHz' : 'CARRIER LOST'}
            </span>
          </div>

          {/* Oscilloscope Waveform Canvas / SVG */}
          <div className="h-20 w-full rounded bg-[#080d10] border border-[#22c55e]/15 flex items-center justify-center relative overflow-hidden">
            {/* Grid Reticle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e08_1px,transparent_1px),linear-gradient(to_bottom,#22c55e08_1px,transparent_1px)] bg-[size:16px_16px]" />

            {online ? (
              <svg className="w-full h-full" viewBox="0 0 320 80" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={points}
                  className="drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]"
                />
              </svg>
            ) : (
              <div className="text-xs text-[#ff4757] font-bold tracking-widest animate-pulse">
                [ NO SIGNAL DETECTED ]
              </div>
            )}
          </div>

          {/* Telemetry Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="bg-[#141e24] p-2 rounded border border-[#22c55e]/20 flex flex-col">
              <span className="text-[9px] text-[#718096] uppercase">Carrier Freq</span>
              <span className="text-xs font-bold text-[#68d391] drop-shadow-[0_0_4px_rgba(104,211,145,0.6)]">
                {frequency.toFixed(1)} Hz
              </span>
            </div>
            <div className="bg-[#141e24] p-2 rounded border border-[#22c55e]/20 flex flex-col">
              <span className="text-[9px] text-[#718096] uppercase">Gain Factor</span>
              <span className="text-xs font-bold text-[#f6ad55] drop-shadow-[0_0_4px_rgba(246,173,85,0.6)]">
                {gain}%
              </span>
            </div>
            <div className="bg-[#141e24] p-2 rounded border border-[#22c55e]/20 flex flex-col">
              <span className="text-[9px] text-[#718096] uppercase">Impedance</span>
              <span className="text-xs font-bold text-[#63b3ed] drop-shadow-[0_0_4px_rgba(99,179,237,0.6)]">
                50.2 Ω
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Side Hardware Buttons */}
      <div className="flex items-center justify-between pt-2 px-1">
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 rounded bg-[#1e272e] shadow-[inset_1px_1px_1px_rgba(0,0,0,0.8)]" />
          <div className="w-4 h-2 rounded bg-[#1e272e] shadow-[inset_1px_1px_1px_rgba(0,0,0,0.8)]" />
          <div className="w-4 h-2 rounded bg-[#1e272e] shadow-[inset_1px_1px_1px_rgba(0,0,0,0.8)]" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#718096]">
          CATHODE RAY CORE // 45° LIGHT RIG
        </span>
      </div>
    </div>
  );
};
