import React from 'react';

export interface IndustrialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  withScrews?: boolean;
  withVents?: boolean;
  modelNumber?: string;
  badge?: string;
  title?: string;
}

export const IndustrialCard: React.FC<IndustrialCardProps> = ({
  children,
  elevated = false,
  withScrews = true,
  withVents = true,
  modelNumber,
  badge,
  title,
  className = '',
  ...props
}) => {
  return (
    <div
      {...props}
      className={`
        relative rounded-2xl bg-[#e0e5ec] transition-all duration-300 ease-out
        ${elevated
          ? 'shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff,inset_1px_1px_0_rgba(255,255,255,0.7)]'
          : 'shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] hover:-translate-y-1 hover:shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff]'}
        border border-white/40
        ${className}
      `}
    >
      {/* Precision corner screws */}
      {withScrews && (
        <>
          <div
            className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center pointer-events-none"
            title="Mount screw"
          >
            <div className="w-1.5 h-[1px] bg-[#636e72] rotate-45" />
          </div>
          <div
            className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center pointer-events-none"
            title="Mount screw"
          >
            <div className="w-1.5 h-[1px] bg-[#636e72] -rotate-12" />
          </div>
          <div
            className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center pointer-events-none"
            title="Mount screw"
          >
            <div className="w-1.5 h-[1px] bg-[#636e72] rotate-12" />
          </div>
          <div
            className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff] flex items-center justify-center pointer-events-none"
            title="Mount screw"
          >
            <div className="w-1.5 h-[1px] bg-[#636e72] 90deg" />
          </div>
        </>
      )}

      {/* Header bar with model and vents */}
      {(title || modelNumber || withVents || badge) && (
        <div className="px-6 pt-5 pb-2 flex items-center justify-between border-b border-[#d1d9e6]/50">
          <div className="flex items-center gap-3">
            {modelNumber && (
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#4a5568] bg-[#d1d9e6]/60 px-2 py-0.5 rounded shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff]">
                {modelNumber}
              </span>
            )}
            {title && (
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[#2d3436]">
                {title}
              </h3>
            )}
            {badge && (
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-[#ff4757] bg-[#ff4757]/10 px-2 py-0.5 rounded border border-[#ff4757]/20">
                {badge}
              </span>
            )}
          </div>

          {/* Vent slots */}
          {withVents && (
            <div className="flex items-center gap-1.5 shrink-0" aria-label="Ventilation slots">
              <div className="h-5 w-1 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),inset_-1px_-1px_1px_#ffffff]" />
              <div className="h-5 w-1 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),inset_-1px_-1px_1px_#ffffff]" />
              <div className="h-5 w-1 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),inset_-1px_-1px_1px_#ffffff]" />
              <div className="h-5 w-1 rounded-full bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),inset_-1px_-1px_1px_#ffffff]" />
            </div>
          )}
        </div>
      )}

      {/* Main card body */}
      <div className="p-6">{children}</div>
    </div>
  );
};
