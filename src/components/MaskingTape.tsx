import React from 'react';

export interface MaskingTapeProps {
  children: React.ReactNode;
  color?: 'yellow' | 'white' | 'kraft';
  rotation?: number;
  className?: string;
}

export const MaskingTape: React.FC<MaskingTapeProps> = ({
  children,
  color = 'yellow',
  rotation = -2,
  className = '',
}) => {
  const colorStyles = {
    yellow: 'bg-[rgba(255,230,0,0.4)] text-[#2d3436] border-y border-[rgba(230,200,0,0.4)]',
    white: 'bg-[rgba(255,255,255,0.65)] text-[#2d3436] border-y border-[rgba(200,200,200,0.5)]',
    kraft: 'bg-[rgba(215,180,140,0.45)] text-[#2d3436] border-y border-[rgba(180,140,100,0.5)]',
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`
        inline-block px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider
        shadow-[0_2px_4px_rgba(0,0,0,0.08)] backdrop-blur-sm select-none
        ${colorStyles[color]}
        ${className}
      `}
    >
      {/* Tape frayed jagged edges simulated */}
      <span className="relative z-10">{children}</span>
    </div>
  );
};
