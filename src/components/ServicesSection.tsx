import React from 'react';
import { Sun, Video, Network, Cpu, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { IndustrialCard } from './IndustrialCard.tsx';
import { PhysicalButton } from './PhysicalButton.tsx';

export interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'solar',
      title: 'Solar Rooftop & Industrial Power',
      modelNumber: 'SRV-01',
      badge: '1.2 MW+ DEPLOYED',
      icon: <Sun size={24} className="text-[#097945]" />,
      desc: 'Complete on-grid, off-grid, and hybrid solar power plants for colleges, manufacturing units, and commercial complexes with net metering.',
      highlights: ['Tier-1 Solar PV Modules', 'MNRE Net Metering Sync', '5-Year Inverter Warranty'],
    },
    {
      id: 'surveillance',
      title: 'Enterprise IP Surveillance & AI CCTV',
      modelNumber: 'SRV-02',
      badge: '2,500+ CAMERAS',
      icon: <Video size={24} className="text-[#ff4757]" />,
      desc: 'Mission-critical IP CCTV networks featuring PTZ cameras, night vision, perimeter intrusion detection, and campus command centers like IIT ISM.',
      highlights: ['4K Optical Zoom Feeds', 'AI Perimeter Analytics', 'Centralized NVR Arrays'],
    },
    {
      id: 'fiber',
      title: 'Campus Optical Fiber & Networking',
      modelNumber: 'SRV-03',
      badge: 'GIGABIT BACKBONE',
      icon: <Network size={24} className="text-[#2563eb]" />,
      desc: 'High-throughput single-mode & multi-mode underground and aerial optical fiber laying, fusion splicing, and enterprise switching infrastructure.',
      highlights: ['OTDR Certified Splicing', 'Structured Cat6A Cabling', 'Zero Packet Drop Architecture'],
    },
    {
      id: 'subsidies',
      title: 'PM Surya Ghar: Muft Bijli Yojana',
      modelNumber: 'SRV-04',
      badge: 'DIRECT SUBSIDY',
      icon: <ShieldCheck size={24} className="text-[#097945]" />,
      desc: 'End-to-end facilitation of Central Government subsidies up to ₹78,000 for residential rooftops with portal registration and DISCOM net-metering.',
      highlights: ['Direct Bank Account DBT', 'Govt Approved Vendor', 'Zero Hassle Paperwork'],
    },
    {
      id: 'iot',
      title: 'Smart IoT Automation & Metering',
      modelNumber: 'SRV-05',
      badge: 'REAL-TIME I/O',
      icon: <Cpu size={24} className="text-[#f59e0b]" />,
      desc: 'Remote smart energy meters, industrial power factor monitoring, automated street lighting, and campus environmental sensors.',
      highlights: ['Cloud Telemetry Dashboards', 'Threshold SMS Alerts', 'Power Factor Optimization'],
    },
    {
      id: 'amc',
      title: 'Comprehensive Turnkey AMC Maintenance',
      modelNumber: 'SRV-06',
      badge: '24/7 SLA',
      icon: <Wrench size={24} className="text-[#4a5568]" />,
      desc: 'Round-the-clock technical support, bi-weekly solar panel robotic washdowns, inverter diagnostics, and CCTV camera lens calibrations.',
      highlights: ['< 4-Hour On-Site SLA', 'Preventative Diagnostics', 'Spare Parts Availability'],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#babecc]/60 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d1d9e6]/70 shadow-[inset_1px_1px_2px_#babecc] border border-white/40 mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
              UNIFIED TECH ARCHITECTURE
            </span>
          </div>
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
            Our 6 Service Verticals
          </h2>
          <p className="font-sans text-sm text-[#4a5568] max-w-2xl mt-1">
            Engineered for high availability, compliance, and guaranteed uptime across Jharkhand and Eastern India.
          </p>
        </div>

        <span className="font-mono text-xs text-[#4a5568] uppercase tracking-widest hidden sm:block">
          ISO 9001:2015 CERTIFIED
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <IndustrialCard
            key={s.id}
            title={s.title}
            modelNumber={s.modelNumber}
            badge={s.badge}
            withScrews
            withVents
            className="flex flex-col justify-between hover:border-[#097945]/40"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                {s.icon}
              </div>

              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                {s.desc}
              </p>

              <div className="space-y-1.5 pt-2">
                {s.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#2d3436]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#097945]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#d1d9e6]">
              <PhysicalButton
                variant="secondary"
                size="sm"
                className="w-full text-xs"
                onClick={() => onSelectService(s.title)}
              >
                REQUEST SPEC & QUOTE
              </PhysicalButton>
            </div>
          </IndustrialCard>
        ))}
      </div>
    </section>
  );
};
