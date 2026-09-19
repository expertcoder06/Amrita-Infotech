import React, { useState, useEffect } from 'react';
import { Sun, Video, Zap, Activity, Radio, Shield, CheckCircle, Eye } from 'lucide-react';
import { TactileKnob } from './TactileKnob.tsx';
import { PhysicalSwitch } from './PhysicalSwitch.tsx';

export const SolarTelemetryConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'solar' | 'cctv'>('solar');
  const [gridSync, setGridSync] = useState(true);
  const [solarGeneration, setSolarGeneration] = useState(842); // in kW
  const [cameraFeedsActive, setCameraFeedsActive] = useState(2548);
  const [frameTick, setFrameTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameTick((t) => (t + 1) % 100);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl bg-[#e0e5ec] p-3 sm:p-4 shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff] border border-white/60">
      {/* Precision corner mount screws */}
      <div className="absolute top-2.5 left-2.5 w-3 h-3 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-[1px] bg-[#636e72] rotate-45" />
      </div>
      <div className="absolute top-2.5 right-2.5 w-3 h-3 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-[1px] bg-[#636e72] -rotate-45" />
      </div>

      {/* Frame Top Header & Mode Tabs */}
      <div className="flex items-center justify-between px-3 pt-1 pb-3 border-b border-[#babecc]/50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_6px_#22c55e]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2d3436]">
            COMMAND HUB // AMRITA-OS
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#d1d9e6]/60 p-1 rounded-lg shadow-[inset_1.5px_1.5px_3px_#babecc]">
          <button
            type="button"
            onClick={() => setActiveTab('solar')}
            className={`px-3 py-1 rounded font-mono text-[11px] font-bold uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'solar'
                ? 'bg-[#097945] text-white shadow-[0_2px_4px_rgba(9,121,69,0.3)]'
                : 'text-[#4a5568] hover:text-[#2d3436]'
            }`}
          >
            <Sun size={12} />
            <span>Solar Grid</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cctv')}
            className={`px-3 py-1 rounded font-mono text-[11px] font-bold uppercase transition-all flex items-center gap-1.5 ${
              activeTab === 'cctv'
                ? 'bg-[#1b2838] text-white shadow-[0_2px_4px_rgba(27,40,56,0.3)]'
                : 'text-[#4a5568] hover:text-[#2d3436]'
            }`}
          >
            <Video size={12} />
            <span>Campus CCTV</span>
          </button>
        </div>
      </div>

      {/* The Central Visual Display Screen with Inset Bezel */}
      <div className="relative mt-3 rounded-xl overflow-hidden bg-[#101720] border-2 border-[#1e2a38] shadow-[inset_0_4px_16px_rgba(0,0,0,0.9)] aspect-[16/10] flex flex-col justify-between p-4 text-white">
        {/* CRT Scanline effect */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-30 z-10" />

        {/* Top telemetry status bar */}
        <div className="relative z-20 flex items-center justify-between font-mono text-[11px] text-[#a0aec0] border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-[#22c55e] font-bold">● ONLINE</span>
            <span>EASTERN GRID NODE 04</span>
          </div>
          <span className="text-[#f59e0b] font-bold">IIT ISM & INDUSTRIAL PARKS</span>
        </div>

        {/* Display Content based on Active Tab */}
        {activeTab === 'solar' ? (
          <div className="relative z-20 flex-1 flex flex-col justify-center py-2 space-y-3">
            {/* Visual representation of Rooftop Solar Array */}
            <div className="relative h-28 w-full rounded-lg bg-[#14202d] border border-[#22c55e]/25 overflow-hidden flex items-center justify-center p-3">
              {/* Solar array grid simulation */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#09794518_1px,transparent_1px),linear-gradient(to_bottom,#09794518_1px,transparent_1px)] bg-[size:18px_18px]" />

              <div className="relative z-10 w-full flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#22c55e]">
                    <Zap size={16} className="animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">
                      INVERTER ARRAY TELEMETRY
                    </span>
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-black text-white">
                    {solarGeneration.toFixed(1)}{' '}
                    <span className="text-sm font-normal text-[#68d391]">kW INSTANT</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#a0aec0] block">
                    TOTAL CUMULATIVE: 1,248,600 kWh GENERATED
                  </span>
                </div>

                {/* Animated Solar Waveform */}
                <div className="hidden sm:block w-32 h-14 bg-[#080d12] rounded border border-[#22c55e]/30 p-1">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <polyline
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      points={Array.from({ length: 12 }, (_, i) => {
                        const y = 20 + Math.sin((i + frameTick * 0.4) * 0.8) * 12;
                        return `${(i / 11) * 100},${y}`;
                      }).join(' ')}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-20 flex-1 flex flex-col justify-center py-2 space-y-3">
            {/* Visual representation of 2,500+ Active CCTV Campus Feeds */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-28">
              {['IIT ISM GATE 1', 'ACADEMIC COMPLEX', 'SOLAR PLANT 4MW', 'PERIMETER NORTH'].map(
                (feed, i) => (
                  <div
                    key={i}
                    className="relative rounded bg-[#091118] border border-white/10 p-1.5 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-[8px] font-mono text-[#68d391]">
                      <span>CAM-0{i + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4757] animate-ping" />
                    </div>
                    <div className="text-center font-mono text-[9px] text-[#a0aec0] uppercase tracking-tighter">
                      {feed}
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-[#718096]">
                      <span>1080p</span>
                      <span>30FPS</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Overlay Badges matching the image! */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
          {/* Badge 1: 1.2 MW+ Deployed */}
          <div className="flex items-center gap-2.5 bg-[#1a2c3a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#22c55e]/40 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <div className="p-1 rounded bg-[#097945] text-white">
              <Sun size={14} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs sm:text-sm font-extrabold text-white">
                  1.2 MW+ Deployed
                </span>
                <span className="font-mono text-[9px] font-bold text-[#22c55e] bg-[#22c55e]/20 px-1.5 py-0.2 rounded">
                  Active
                </span>
              </div>
              <span className="font-sans text-[10px] text-[#a0aec0] block">
                Clean Rooftop & Industrial Solar
              </span>
            </div>
          </div>

          {/* Badge 2: 2,500+ Cameras */}
          <div className="flex items-center gap-2.5 bg-[#1a2c3a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <div className="p-1 rounded bg-[#243447] text-[#63b3ed]">
              <Video size={14} />
            </div>
            <div>
              <span className="font-mono text-xs sm:text-sm font-extrabold text-white block">
                2,500+ Cameras
              </span>
              <span className="font-sans text-[10px] text-[#a0aec0] block">
                Active Campus Feeds
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Hardware Sub-Panel for adjustments */}
      <div className="mt-3 p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff] flex flex-wrap items-center justify-around gap-4 border border-white/40">
        <PhysicalSwitch
          label="GRID SYNC"
          checked={gridSync}
          onChange={setGridSync}
          onLabel="LOCKED"
          offLabel="ISOLATED"
        />

        <TactileKnob
          label="INVERTER LOAD"
          min={500}
          max={1200}
          step={20}
          value={solarGeneration}
          onChange={setSolarGeneration}
          unit="kW"
          accent
        />

        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] uppercase font-bold text-[#4a5568]">
            SECURITY ENCRYPTION
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#097945] bg-[#d1d9e6] px-2.5 py-1 rounded shadow-[inset_1px_1px_2px_#babecc]">
            <Shield size={13} />
            <span>256-BIT AES ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
