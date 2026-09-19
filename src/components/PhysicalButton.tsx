import React, { useState } from 'react';
import { soundEngine } from '../tokens.ts';

export interface PhysicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  soundType?: 'click' | 'heavy' | 'toggle';
  icon?: React.ReactNode;
  active?: boolean;
}

export const PhysicalButton: React.FC<PhysicalButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  soundType = 'click',
  icon,
  active = false,
  className = '',
  onClick,
  onMouseDown,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    sm: 'h-10 px-4 text-xs tracking-wider font-mono font-bold rounded-md min-h-[40px]',
    md: 'h-12 px-6 text-xs sm:text-sm tracking-wider font-mono font-bold rounded-lg min-h-[48px]',
    lg: 'h-14 px-8 text-sm sm:text-base tracking-widest font-mono font-extrabold rounded-xl min-h-[56px]',
  };

  const getVariantStyles = () => {
    if (variant === 'emerald') {
      const pressedState = isPressed || active;
      return `
        bg-[#097945] text-white border border-white/25
        ${pressedState
          ? 'translate-y-[2px] shadow-[inset_4px_4px_8px_rgba(4,70,38,0.7),inset_-4px_-4px_8px_rgba(20,160,95,0.4)]'
          : 'shadow-[4px_4px_10px_rgba(4,70,38,0.45),-4px_-4px_10px_rgba(25,180,105,0.35)] hover:brightness-105'}
      `;
    }

    if (variant === 'primary' || variant === 'danger') {
      const pressedState = isPressed || active;
      return `
        bg-[#ff4757] text-white border border-white/20
        ${pressedState
          ? 'translate-y-[2px] shadow-[inset_4px_4px_8px_rgba(140,20,30,0.6),inset_-4px_-4px_8px_rgba(255,120,130,0.4)]'
          : 'shadow-[4px_4px_10px_rgba(166,50,60,0.45),-4px_-4px_10px_rgba(255,110,120,0.45)] hover:brightness-105'}
      `;
    }

    if (variant === 'ghost') {
      const pressedState = isPressed || active;
      return `
        bg-transparent text-[#4a5568] hover:text-[#2d3436]
        ${pressedState
          ? 'translate-y-[1px] bg-[#d1d9e6]/50 shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff]'
          : 'hover:bg-[#d1d9e6]/30 hover:shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff]'}
      `;
    }

    // Default: secondary (chassis color #e0e5ec)
    const pressedState = isPressed || active;
    return `
      bg-[#e0e5ec] text-[#2d3436] hover:text-[#ff4757]
      ${pressedState
        ? 'translate-y-[2px] shadow-[inset_6px_6px_12px_#babecc,inset_-6px_-6px_12px_#ffffff]'
        : 'shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]'}
    `;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    soundEngine.playClick(variant === 'primary' ? 'heavy' : soundType);
    onMouseDown?.(e);
  };

  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      {...props}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center gap-2 select-none uppercase
        cursor-pointer outline-none transition-all duration-150 ease-out
        focus-visible:ring-2 focus-visible:ring-[#ff4757] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e0e5ec]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
        ${sizeClasses[size]}
        ${getVariantStyles()}
        ${className}
      `}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
