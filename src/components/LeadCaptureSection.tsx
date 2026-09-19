import React, { useState } from 'react';
import { Zap, Phone, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../tokens.ts';

export const LeadCaptureSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Solar Power Systems (Rooftop & Industrial)',
    location: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick('heavy');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="rounded-3xl bg-[#0e1e2d] border border-[#1e344a] text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_20px_40px_rgba(14,30,45,0.4)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Information & Hotlines) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#4ade80]">
              <Zap size={14} className="text-[#4ade80]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                FAST-TRACK RESPONSE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
              Ready to Secure or Solar-Power Your Facility?
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Get an itemized quotation, site inspection proposal, or subsidy eligibility calculation within 24 business hours from our certified engineering staff.
            </p>

            {/* Direct Contact Action Boxes */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#94a3b8] uppercase block">
                    Direct Telephone Desk
                  </span>
                  <a href="tel:+919876543210" className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#4ade80]">
                    +91-9876543210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#94a3b8] uppercase block">
                    Instant WhatsApp Connect
                  </span>
                  <a href="https://wa.me/919437000000" target="_blank" rel="noopener noreferrer" className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#25D366]">
                    +91-94370 XXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#94a3b8] uppercase block">
                    Head Office &amp; Service Hub
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-white">
                    Jharkhand &amp; Eastern India Operations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white text-[#1a202c] p-6 sm:p-8 shadow-2xl border border-gray-100">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#097945]/10 text-[#097945] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-[#11241a]">
                    Quotation Request Received!
                  </h3>
                  <p className="text-sm text-[#64748b] max-w-sm mx-auto">
                    Thank you, <strong>{form.name || 'Valued Client'}</strong>. Our engineering desk will review your site specifications and contact you at <strong>{form.phone}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#097945] text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#4a5568]">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 px-3.5 text-xs sm:text-sm rounded-lg border border-[#cbd5e1] focus:border-[#097945] focus:ring-1 focus:ring-[#097945] outline-none text-[#1a202c]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#4a5568]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-11 px-3.5 text-xs sm:text-sm rounded-lg border border-[#cbd5e1] focus:border-[#097945] focus:ring-1 focus:ring-[#097945] outline-none text-[#1a202c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#4a5568]">
                        Service of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full h-11 px-3 text-xs sm:text-sm rounded-lg border border-[#cbd5e1] focus:border-[#097945] focus:ring-1 focus:ring-[#097945] outline-none text-[#1a202c] bg-white"
                      >
                        <option>Solar Power Systems (Rooftop &amp; Industrial)</option>
                        <option>System Integration (Enterprise Setup)</option>
                        <option>Security &amp; Surveillance (IP CCTV)</option>
                        <option>Home Automation (Smart IoT)</option>
                        <option>Computer Networking (Fiber / LAN)</option>
                        <option>Desktop/Laptop Sales &amp; Service (AMC)</option>
                        <option>PM Surya Ghar Direct Subsidy</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#4a5568]">
                        Installation Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dhanbad | Bokaro | Ranchi"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="w-full h-11 px-3.5 text-xs sm:text-sm rounded-lg border border-[#cbd5e1] focus:border-[#097945] focus:ring-1 focus:ring-[#097945] outline-none text-[#1a202c]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#4a5568]">
                      Project Requirements / Capacity Needed
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your requirements (e.g., 10 kW Rooftop solar or 30 CCTV IP cameras)..."
                      value={form.requirements}
                      onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                      className="w-full p-3 text-xs sm:text-sm rounded-lg border border-[#cbd5e1] focus:border-[#097945] focus:ring-1 focus:ring-[#097945] outline-none text-[#1a202c] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#097945] hover:bg-[#07663a] text-white font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(9,121,69,0.4)] transition-all cursor-pointer"
                  >
                    <span>Submit Free Quote Request</span>
                    <Send size={15} />
                  </button>

                  <p className="text-[11px] text-[#94a3b8] text-center pt-1">
                    Your data is strictly confidential. No spam, guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
