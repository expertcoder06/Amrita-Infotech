import React from 'react';

export interface ConnectorPipeProps {
  className?: string;
  active?: boolean;
}

export const ConnectorPipe: React.FC<ConnectorPipeProps> = ({
  className = '',
  active = false,
}) => {
  return (
    <div className={`relative h-3 w-full rounded-full bg-[#d1d9e6] shadow-[inset_0_1px_3px_rgba(0,0,0,0.25),inset_0_-1px_2px_#ffffff] flex items-center overflow-hidden ${className}`}>
      {/* Metallic collar joints */}
      <div className="absolute left-2 w-2 h-full bg-[#babecc] shadow-[0_0_2px_rgba(0,0,0,0.3)]" />
      <div className="absolute right-2 w-2 h-full bg-[#babecc] shadow-[0_0_2px_rgba(0,0,0,0.3)]" />

      {active && (
        <div className="h-1 w-1/3 rounded-full bg-[#ff4757]/60 blur-[1px] animate-[pulse_1.5s_ease-in-out_infinite] mx-auto" />
      )}
    </div>
  );
};
