import React, { useState } from 'react';
import { Phone, Shield, Volume2, VolumeX, Menu, X, Sun, Video } from 'lucide-react';
import { PhysicalButton } from './PhysicalButton.tsx';
import { LedIndicator } from './LedIndicator.tsx';
import { soundEngine } from '../tokens.ts';

export interface AmritaHeaderProps {
  onOpenQuote: () => void;
  activeNav: string;
  onNavigate: (sectionId: string) => void;
  soundEnabled: boolean;
  onToggleSound: (enabled: boolean) => void;
}

export const AmritaHeader: React.FC<AmritaHeaderProps> = ({
  onOpenQuote,
  activeNav,
  onNavigate,
  soundEnabled,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'subsidies', label: 'Green Subsidies', hasDot: true },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    soundEngine.playClick('click');
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav px-4 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          {/* Logo icon with solar/security emblem and glass refraction */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b9354] to-[#097945] shadow-[0_4px_12px_rgba(9,121,69,0.25),inset_0_1px_1px_rgba(255,255,255,0.6)] flex items-center justify-center text-white border border-white/40 transition-transform group-hover:scale-105">
            <div className="relative">
              <Sun size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ff4757] ring-1.5 ring-white shadow-xs" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-[#0f2e21] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]">
                Amrita Infotech
              </span>
            </div>
            <span className="font-mono text-[9.5px] font-bold text-[#4a5568] tracking-widest uppercase block">
              SECURITY &amp; SOLAR SOLUTIONS
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links (Floating Glass Pill Strip) */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/45 backdrop-blur-md border border-white/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_10px_rgba(0,0,0,0.03)]">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer outline-none relative px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white/90 text-[#097945] shadow-[0_2px_8px_rgba(9,121,69,0.12),inset_0_1px_1px_#ffffff] border border-white'
                    : 'text-[#4a5568] hover:text-[#097945] hover:bg-white/50'
                }`}
              >
                {link.hasDot && (
                  <span className="w-2 h-2 rounded-full bg-[#097945] animate-pulse" />
                )}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions: Call, Sound, CTA */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Phone Contact in Frosted Glass Pill */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 font-mono text-xs font-bold text-[#2d3436] hover:text-[#097945] transition-all py-1.5 px-3 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-[0_2px_6px_rgba(0,0,0,0.03),inset_0_1px_1px_#ffffff]"
          >
            <Phone size={13} className="text-[#097945]" />
            <span>+91-9876543210</span>
          </a>

          {/* Tactile Audio Toggle with Glass Finish */}
          <button
            type="button"
            onClick={() => onToggleSound(!soundEnabled)}
            className="p-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-[0_2px_6px_rgba(0,0,0,0.03),inset_0_1px_1px_#ffffff] text-[#4a5568] hover:text-[#2d3436] hover:bg-white/80 cursor-pointer transition-all"
            title={soundEnabled ? 'Tactile Sound On' : 'Tactile Sound Muted'}
          >
            {soundEnabled ? (
              <Volume2 size={15} className="text-[#097945]" />
            ) : (
              <VolumeX size={15} className="text-[#a3b1c6]" />
            )}
          </button>

          {/* Primary CTA */}
          <PhysicalButton
            variant="emerald"
            size="md"
            onClick={onOpenQuote}
            className="font-sans uppercase font-bold text-xs tracking-wider"
          >
            Get a Quote
          </PhysicalButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <PhysicalButton
            variant="emerald"
            size="sm"
            onClick={onOpenQuote}
            className="text-xs"
          >
            Quote
          </PhysicalButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_1px_#ffffff] text-[#2d3436]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.08)] space-y-3">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-left transition-all ${
                  activeNav === link.id
                    ? 'bg-white text-[#097945] shadow-xs border border-white'
                    : 'text-[#2d3436] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.hasDot && <span className="w-2 h-2 rounded-full bg-[#097945]" />}
                  <span>{link.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#babecc]/30 flex items-center justify-between px-1">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 font-mono text-xs font-bold text-[#097945]"
            >
              <Phone size={14} />
              <span>+91-9876543210</span>
            </a>

            <button
              type="button"
              onClick={() => onToggleSound(!soundEnabled)}
              className="flex items-center gap-1.5 font-mono text-xs text-[#4a5568] bg-white/60 px-2.5 py-1 rounded-lg border border-white/70"
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span>{soundEnabled ? 'Sound ON' : 'Sound OFF'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
