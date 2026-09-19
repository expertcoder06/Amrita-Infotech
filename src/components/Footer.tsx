import React from 'react';
import { Sun, Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

export interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#0e1620] text-white border-t border-[#1e2a38] pt-14 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#097945] flex items-center justify-center text-white font-black text-xl shadow-[0_0_12px_rgba(9,121,69,0.5)]">
                AI
              </div>
              <div>
                <h4 className="font-sans text-xl font-extrabold tracking-tight text-white">
                  Amrita Infotech
                </h4>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#a0aec0] block">
                  SECURITY &amp; SOLAR SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Eastern India's dependable systems integrator and certified green energy solutions partner. Delivering institutional CCTV surveillance, optical networking, and subsidized solar installations with 15+ years of operational trust.
            </p>

            <div className="space-y-1 pt-2 font-mono text-[11px] text-[#cbd5e1]">
              <div>
                GSTIN: <span className="text-[#4ade80] font-bold">20AAAAA0000A1Z5</span>
              </div>
              <div className="text-[10px] text-[#64748b]">
                Incorporated under the strategic leadership of Mr. Rajendra Nath Pattanayak
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Amrita Infotech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services Directory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Featured Projects Portfolio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('subsidies')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  PM Surya Ghar Subsidy Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors cursor-pointer text-left font-bold text-[#4ade80]"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Our Solutions
            </h5>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Solar Power Systems
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Security &amp; Surveillance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  System Integration
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Computer Networking (Fiber/LAN)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Smart Home Automation (IoT)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hardware Sales &amp; AMC
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Regional Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Regional Office
            </h5>
            <div className="space-y-2 text-xs text-[#94a3b8]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#4ade80] shrink-0 mt-0.5" />
                <span className="text-white">
                  Main Road Commercial Complex, Near Station Chowk, Dhanbad, 826001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#4ade80] shrink-0" />
                <span>
                  Phone:{' '}
                  <a href="tel:+919876543210" className="text-white hover:text-[#4ade80] font-mono">
                    +91-9876543210
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#4ade80] shrink-0" />
                <span className="font-mono">Support: +91-94370 XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#4ade80] shrink-0" />
                <span>
                  Email:{' '}
                  <a href="mailto:contact@amritainfotech.com" className="text-white hover:text-[#4ade80] font-mono">
                    contact@amritainfotech.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#4ade80] shrink-0" />
                <span>Working Hours: Mon - Sat: 9:30 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal strip */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#64748b]">
          <div>
            © 2026 Amrita Infotech. All Rights Reserved. Registered GSTIN: 20AAAAA0000A1Z5.
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => onNavigate('subsidies')} className="hover:text-white cursor-pointer">
              Government Subsidies
            </button>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
