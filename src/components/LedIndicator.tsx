import React from 'react';

export interface LedIndicatorProps {
  color?: 'green' | 'red' | 'amber' | 'blue';
  status?: 'active' | 'standby' | 'off';
  pulse?: boolean;
  label?: string;
  sublabel?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LedIndicator: React.FC<LedIndicatorProps> = ({
  color = 'green',
  status = 'active',
  pulse = true,
  label,
  sublabel,
  size = 'md',
}) => {
  const colorMap = {
    green: {
      on: 'bg-[#22c55e] shadow-[0_0_10px_2px_rgba(34,197,94,0.85)]',
      off: 'bg-[#1b4332]',
    },
    red: {
      on: 'bg-[#ff4757] shadow-[0_0_10px_2px_rgba(255,71,87,0.85)]',
      off: 'bg-[#4a151b]',
    },
    amber: {
      on: 'bg-[#f59e0b] shadow-[0_0_10px_2px_rgba(245,158,11,0.85)]',
      off: 'bg-[#452c08]',
    },
    blue: {
      on: 'bg-[#3b82f6] shadow-[0_0_10px_2px_rgba(59,130,246,0.85)]',
      off: 'bg-[#172554]',
    },
  };

  const sizeMap = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3.5 h-3.5',
  };

  const isOn = status === 'active';
  const isStandby = status === 'standby';

  return (
    <div className="inline-flex items-center gap-2 select-none">
      {/* Recessed metal housing */}
      <div className="p-[2px] rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center">
        <div
          className={`
            rounded-full transition-all duration-300
            ${sizeMap[size]}
            ${isOn ? colorMap[color].on : colorMap[color].off}
            ${isOn && pulse ? 'animate-pulse' : ''}
            ${isStandby ? 'opacity-40 animate-pulse' : ''}
          `}
        />
      </div>

      {(label || sublabel) && (
        <div className="flex flex-col">
          {label && (
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2d3436]">
              {label}
            </span>
          )}
          {sublabel && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#4a5568]">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
