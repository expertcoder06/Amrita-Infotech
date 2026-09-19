import React from 'react';

export interface RecessedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  unit?: string;
  hint?: string;
  error?: string;
}

export const RecessedInput: React.FC<RecessedInputProps> = ({
  label,
  unit,
  hint,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <div className="flex items-center justify-between px-1">
          <label
            htmlFor={inputId}
            className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#4a5568]"
          >
            {label}
          </label>
          {unit && (
            <span className="font-mono text-[10px] tracking-widest text-[#a3b1c6] uppercase">
              [{unit}]
            </span>
          )}
        </div>
      )}

      <div className="relative flex items-center">
        <input
          id={inputId}
          {...props}
          className={`
            w-full h-13 px-4 font-mono text-sm sm:text-base text-[#2d3436] placeholder-[#4a5568]/50
            bg-[#e0e5ec] rounded-lg border-none outline-none transition-all duration-200
            shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff]
            focus:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#ff4757]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${unit ? 'pr-14' : ''}
            ${error ? 'ring-2 ring-red-500' : ''}
            ${className}
          `}
        />
        {unit && (
          <div className="absolute right-3.5 pointer-events-none font-mono text-xs font-bold text-[#4a5568]">
            {unit}
          </div>
        )}
      </div>

      {hint && !error && (
        <span className="font-mono text-[10px] text-[#4a5568] px-1">{hint}</span>
      )}
      {error && (
        <span className="font-mono text-[10px] text-[#ff4757] font-bold px-1">{error}</span>
      )}
    </div>
  );
};
