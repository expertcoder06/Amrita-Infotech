import React from 'react';
import { soundEngine } from '../tokens.ts';

export interface PhysicalSwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  accent?: boolean;
}

export const PhysicalSwitch: React.FC<PhysicalSwitchProps> = ({
  label,
  checked,
  onChange,
  onLabel = 'ON',
  offLabel = 'OFF',
  accent = true,
}) => {
  const handleToggle = () => {
    soundEngine.playClick('toggle');
    onChange(!checked);
  };

  return (
    <div className="flex flex-col items-center gap-1.5 select-none">
      {label && (
        <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-[#4a5568]">
          {label}
        </span>
      )}

      {/* Recessed switch housing */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        className="relative w-14 h-8 rounded-full bg-[#d1d9e6] shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff] p-1 flex items-center cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#ff4757]"
      >
        {/* Rocker slider lever */}
        <div
          className={`
            w-6 h-6 rounded-full transition-all duration-200 ease-out flex items-center justify-center
            ${checked
              ? `${accent ? 'translate-x-6 bg-[#ff4757] shadow-[2px_2px_4px_rgba(166,50,60,0.5),-1px_-1px_3px_rgba(255,140,150,0.7)]' : 'translate-x-6 bg-[#2d3436] shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'}`
              : 'translate-x-0 bg-[#f0f2f5] shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff]'}
          `}
        >
          {/* Inner mechanical contact pin */}
          <div
            className={`w-2 h-2 rounded-full ${
              checked ? 'bg-white/80 shadow-[0_0_2px_#ffffff]' : 'bg-[#babecc]'
            }`}
          />
        </div>
      </button>

      {/* Status labels */}
      <div className="flex items-center justify-between w-14 px-1">
        <span
          className={`font-mono text-[9px] font-bold ${
            !checked ? 'text-[#2d3436]' : 'text-[#a3b1c6]'
          }`}
        >
          {offLabel}
        </span>
        <span
          className={`font-mono text-[9px] font-bold ${
            checked ? 'text-[#ff4757]' : 'text-[#a3b1c6]'
          }`}
        >
          {onLabel}
        </span>
      </div>
    </div>
  );
};
