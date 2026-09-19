import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Send, Phone, MapPin } from 'lucide-react';
import { RecessedInput } from './RecessedInput.tsx';
import { PhysicalButton } from './PhysicalButton.tsx';
import { soundEngine } from '../tokens.ts';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCapacity?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialCapacity,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
    facilityType: 'Institutional / Commercial',
    service: initialService || 'Solar Rooftop & Industrial Power',
    capacity: initialCapacity ? `${initialCapacity} kW` : '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick('heavy');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#e0e5ec] p-6 sm:p-8 shadow-[16px_16px_32px_rgba(0,0,0,0.4)] border border-white/70 max-h-[95vh] overflow-y-auto">
        {/* Header with screws */}
        <div className="flex items-center justify-between pb-4 border-b border-[#babecc]/60">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#097945] animate-pulse shadow-[0_0_6px_#097945]" />
            <h3 className="font-mono text-sm sm:text-base font-extrabold uppercase text-[#2d3436]">
              TURNKEY SPECIFICATION & QUOTE REQUEST
            </h3>
          </div>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick('click');
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6] text-[#2d3436] hover:text-[#ff4757]"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#097945]/10 text-[#097945] flex items-center justify-center mx-auto shadow-[inset_2px_2px_4px_rgba(9,121,69,0.2)]">
              <CheckCircle2 size={36} />
            </div>

            <h4 className="font-sans text-xl font-bold text-[#2d3436]">
              Engineering Specification Dispatched!
            </h4>

            <p className="text-sm text-[#4a5568] max-w-md mx-auto">
              Thank you, <strong>{formData.name || 'Client'}</strong>. Our Lead Systems Engineer{' '}
              <strong>Mr. Rajendra Nath Pattanayak</strong> and the technical team at Amrita Infotech
              will contact you within 4 business hours with custom blueprints and subsidy approvals.
            </p>

            <div className="p-3 rounded-lg bg-[#d1d9e6]/50 shadow-[inset_1px_1px_2px_#babecc] font-mono text-xs text-[#2d3436] inline-block">
              DISPATCH REF: <span className="text-[#097945] font-bold">AI-TK-2026-884</span>
            </div>

            <div className="pt-4">
              <PhysicalButton
                variant="emerald"
                size="md"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
              >
                RETURN TO DASHBOARD
              </PhysicalButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <p className="text-xs text-[#4a5568]">
              Direct engineering consultation with Eastern India's certified systems integrator. Zero middleman markup.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <RecessedInput
                label="FULL NAME"
                required
                placeholder="e.g. Dr. A. K. Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <RecessedInput
                label="CONTACT MOBILE"
                required
                unit="+91"
                placeholder="98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <RecessedInput
                label="INSTITUTION / COMPANY / RESIDENCE"
                placeholder="e.g. University Campus / Factory"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#4a5568] px-1">
                  SERVICE VERTICAL
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-13 px-4 font-mono text-xs sm:text-sm text-[#2d3436] bg-[#e0e5ec] rounded-lg border-none outline-none shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#097945]"
                >
                  <option>Solar Rooftop & Industrial Power (1.2 MW+)</option>
                  <option>Enterprise IP Surveillance & AI CCTV (2,500+ Cams)</option>
                  <option>Campus Optical Fiber & Networking</option>
                  <option>PM Surya Ghar: Muft Bijli Subsidy</option>
                  <option>Smart IoT Automation & Energy Metering</option>
                  <option>Comprehensive Annual Maintenance (AMC)</option>
                </select>
              </div>
            </div>

            <RecessedInput
              label="CAPACITY / SCOPE / REQUIREMENT"
              placeholder="e.g. 50 kW Rooftop, 40 IP PTZ Cameras, or 3 kW Residential"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            />

            <div className="p-3 rounded-xl bg-[#097945]/10 border border-[#097945]/20 flex items-center justify-between text-xs font-mono text-[#097945]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                <span className="font-bold">Government Registered Vendor Verified</span>
              </div>
              <span className="text-[10px] text-[#4a5568]">ISO 9001:2015</span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <PhysicalButton
                type="button"
                variant="ghost"
                size="md"
                onClick={onClose}
              >
                CANCEL
              </PhysicalButton>

              <PhysicalButton
                type="submit"
                variant="emerald"
                size="lg"
                icon={<Send size={16} />}
              >
                GET FREE TURNKEY QUOTE →
              </PhysicalButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
