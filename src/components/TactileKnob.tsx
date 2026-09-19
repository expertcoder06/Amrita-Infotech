import React, { useState, useRef, useEffect } from 'react';
import { soundEngine } from '../tokens.ts';

export interface TactileKnobProps {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  accent?: boolean;
}

export const TactileKnob: React.FC<TactileKnobProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  unit = '',
  accent = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef<number>(0);
  const startValRef = useRef<number>(value);

  // Map value to angle (-135 deg to +135 deg, 270 total sweep)
  const percent = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const angle = -135 + percent * 270;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startYRef.current = e.clientY;
    startValRef.current = value;
    soundEngine.playClick('click');
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = startYRef.current - e.clientY;
      const range = max - min;
      const change = (deltaY / 150) * range;
      let nextVal = startValRef.current + change;
      nextVal = Math.max(min, Math.min(max, nextVal));
      if (step) {
        nextVal = Math.round(nextVal / step) * step;
      }
      onChange(nextVal);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, min, max, step, onChange]);

  return (
    <div className="flex flex-col items-center gap-2 select-none group">
      <div className="flex items-center justify-between w-full px-1">
        <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-[#4a5568]">
          {label}
        </span>
        <span className="font-mono text-[10px] font-bold text-[#2d3436]">
          {value}
          {unit}
        </span>
      </div>

      {/* Rotary dial chassis recess */}
      <div
        onMouseDown={handleMouseDown}
        className="relative w-16 h-16 rounded-full bg-[#d1d9e6] shadow-[inset_2px_2px_4px_#a3b1c6,inset_-2px_-2px_4px_#ffffff] p-1 flex items-center justify-center cursor-ns-resize"
        title="Drag up/down to adjust"
      >
        {/* Tick marks around dial */}
        <div className="absolute inset-0 pointer-events-none">
          {[-135, -90, -45, 0, 45, 90, 135].map((tAngle) => (
            <div
              key={tAngle}
              className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#a3b1c6]"
              style={{
                transformOrigin: 'bottom center',
                transform: `rotate(${tAngle}deg) translateY(-26px)`,
              }}
            />
          ))}
        </div>

        {/* The rotating knob body */}
        <div
          className={`
            w-13 h-13 rounded-full flex items-center justify-center transition-transform duration-75 relative
            ${accent
              ? 'bg-gradient-to-br from-[#ff5e6e] to-[#e83647] shadow-[3px_3px_6px_rgba(166,50,60,0.4),-2px_-2px_4px_rgba(255,140,150,0.6)]'
              : 'bg-gradient-to-br from-[#f0f2f5] to-[#d1d9e6] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff]'}
            ${isDragging ? 'scale-[0.98]' : 'hover:scale-[1.02]'}
          `}
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {/* Top highlight cap */}
          <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center relative">
            {/* Position indicator notch */}
            <div
              className={`absolute top-1 w-1 h-3 rounded-full ${
                accent ? 'bg-white shadow-[0_0_4px_#ffffff]' : 'bg-[#ff4757] shadow-[0_0_3px_#ff4757]'
              }`}
            />
            {/* Center machined knurl */}
            <div className="w-3 h-3 rounded-full bg-[#babecc]/50 shadow-[inset_1px_1px_2px_#718096]" />
          </div>
        </div>
      </div>

      <span className="font-mono text-[9px] tracking-widest text-[#a3b1c6] uppercase">
        ROTARY POT
      </span>
    </div>
  );
};
