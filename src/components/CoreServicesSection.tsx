import React from 'react';
import { Sun, Sliders, Shield, Smartphone, Network, Laptop, ArrowRight } from 'lucide-react';

export interface CoreServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'solar',
      title: 'Solar Power Systems',
      badge: 'RENEWABLE',
      badgeColor: 'bg-[#097945]/10 text-[#097945] border-[#097945]/20',
      icon: <Sun size={24} className="text-[#097945]" />,
      iconBg: 'bg-[#097945]/10',
      desc: 'On-grid and off-grid rooftop solar installations for institutions, businesses, and rural agricultural water pumps. Full assistance with MNRE subsidy disbursement.',
      cta: 'Learn More & Request Sizing',
    },
    {
      id: 'integration',
      title: 'System Integration',
      badge: 'TURNKEY',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      icon: <Sliders size={24} className="text-blue-600" />,
      iconBg: 'bg-blue-50',
      desc: 'Turnkey hardware, server room setup, unified software deployment, and peripheral convergence tailored for enterprise-scale administration.',
      cta: 'Explore Integration Models',
    },
    {
      id: 'security',
      title: 'Security & Surveillance',
      badge: 'PROTECTION',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
      icon: <Shield size={24} className="text-amber-600" />,
      iconBg: 'bg-amber-50',
      desc: 'Enterprise IP-CCTV cameras, multi-terabyte NVRs, biometric attendance gates, smart perimeter lasers, and 24/7 central monitoring desks.',
      cta: 'View Surveillance Specs',
    },
    {
      id: 'home-auto',
      title: 'Home Automation (IoT)',
      badge: 'SMART TECH',
      badgeColor: 'bg-[#097945]/10 text-[#097945] border-[#097945]/20',
      icon: <Smartphone size={24} className="text-[#097945]" />,
      iconBg: 'bg-[#097945]/10',
      desc: 'Smart capacitive wall-switches, smartphone and voice control, scheduled energy management, automated curtains, and intelligent sensor ecosystems.',
      cta: 'Upgrade to Smart IoT',
    },
    {
      id: 'networking',
      title: 'Computer Networking',
      badge: 'CONNECTIVITY',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      icon: <Network size={24} className="text-blue-600" />,
      iconBg: 'bg-blue-50',
      desc: 'Cat6/Cat6A structured cabling, single & multimode optical fiber splicing, managed switches, enterprise Wi-Fi 6 access points, and hardware firewalls.',
      cta: 'Audit Your Network',
    },
    {
      id: 'hardware-amc',
      title: 'Desktop/Laptop Sales & Service',
      badge: 'HARDWARE & AMC',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
      icon: <Laptop size={24} className="text-amber-600" />,
      iconBg: 'bg-amber-50',
      desc: 'Tier-1 OEM hardware procurement (Dell, HP, Lenovo), chip-level motherboard diagnostic repairs, OS setups, and corporate Annual Maintenance Contracts (AMC).',
      cta: 'Inquire for Institutional Rates',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header matching screen.png */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#097945]/10 border border-[#097945]/20">
          <span className="w-2 h-2 rounded-full bg-[#097945]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
            COMPREHENSIVE SOLUTIONS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241a] tracking-tight">
          Our Core Services
        </h2>

        <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
          Engineered hardware, unified software, and renewable energy infrastructure delivered through disciplined turnkey execution.
        </p>
      </div>

      {/* 6 Cards Grid (2 rows x 3 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-2xl bg-white border border-[#e2e8f0] p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="space-y-4">
              {/* Top row: Icon & Pill Badge */}
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <span className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1a202c] group-hover:text-[#097945] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Action link */}
            <div className="pt-6 mt-4 border-t border-[#f1f5f9]">
              <button
                type="button"
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#097945] hover:text-[#065330] transition-colors group-hover:gap-2.5"
              >
                <span>{service.cta}</span>
                <ArrowRight size={14} className="transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
