import React, { useState } from 'react';
import { Building2, Sun, Video, ShieldCheck, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { IndustrialCard } from './IndustrialCard.tsx';
import { PhysicalButton } from './PhysicalButton.tsx';

export const ProjectsSection: React.FC<{ onOpenQuote: () => void }> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<'all' | 'solar' | 'security'>('all');

  const projects = [
    {
      title: 'IIT ISM Dhanbad Campus IP Surveillance',
      client: 'Indian Institute of Technology (ISM) Dhanbad',
      type: 'security',
      capacity: '2,500+ Cameras & Fiber Ring',
      location: 'Dhanbad, Jharkhand',
      year: '2022 - Ongoing',
      description: 'Comprehensive campus perimeter security, AI analytics, high-density server rooms, and 24/7 central command room with multi-monitor control arrays.',
      metric: '99.99% Uptime SLA',
      badge: 'FLAGSHIP INSTITUTION',
    },
    {
      title: 'Industrial Manufacturing Rooftop Solar',
      client: 'Eastern Metallurgical Plants & Foundries',
      type: 'solar',
      capacity: '650 kW On-Grid Solar Plant',
      location: 'Bokaro Industrial Area',
      year: '2023',
      description: 'High-efficiency bifacial monocrystalline solar modules with central string inverters and remote SCADA monitoring reducing monthly power bills by 68%.',
      metric: '82,000 Units/Month',
      badge: 'INDUSTRIAL TURNKEY',
    },
    {
      title: 'Government University Optical Backbone & CCTV',
      client: 'State Technical University Campus',
      type: 'security',
      capacity: '450 IP Cameras & 12km Fiber',
      location: 'Ranchi, Jharkhand',
      year: '2024',
      description: 'Underground armoured optical fiber ring connecting 14 academic blocks, student hostels, and administrative complexes with centralized recording.',
      metric: '10 Gbps Redundancy',
      badge: 'STATE UNIVERSITY',
    },
    {
      title: 'PM Surya Ghar Residential Rooftop Clusters',
      client: 'Jharkhand Residential Housing Societies',
      type: 'solar',
      capacity: '550+ kW Cumulative Installations',
      location: 'Dhanbad, Ranchi, Jamshedpur',
      year: '2024 - 2026',
      description: 'Facilitating central PM Surya Ghar solar subsidies up to ₹78,000 per household with net-metering synchronization and digital mobile app monitoring.',
      metric: '₹78,000 Direct Subsidy',
      badge: 'GOVT APPROVED VENDOR',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#babecc]/60 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d1d9e6]/70 shadow-[inset_1px_1px_2px_#babecc] border border-white/40 mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
              150+ TURNKEY DELIVERIES
            </span>
          </div>
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
            Featured Projects & Implementations
          </h2>
          <p className="font-sans text-sm text-[#4a5568] max-w-2xl mt-1">
            Proven track record powering universities, industrial plants, and housing communities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-[#d1d9e6]/50 p-1 rounded-xl shadow-[inset_1.5px_1.5px_3px_#babecc]">
          <PhysicalButton
            size="sm"
            variant={filter === 'all' ? 'primary' : 'ghost'}
            onClick={() => setFilter('all')}
          >
            ALL
          </PhysicalButton>
          <PhysicalButton
            size="sm"
            variant={filter === 'solar' ? 'primary' : 'ghost'}
            onClick={() => setFilter('solar')}
          >
            SOLAR (1.2 MW+)
          </PhysicalButton>
          <PhysicalButton
            size="sm"
            variant={filter === 'security' ? 'primary' : 'ghost'}
            onClick={() => setFilter('security')}
          >
            SECURITY (2500+ CAM)
          </PhysicalButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj, idx) => (
          <IndustrialCard
            key={idx}
            title={proj.title}
            modelNumber={`PRJ-${idx + 101}`}
            badge={proj.badge}
            withScrews
            withVents
            className="flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-[#097945] font-bold">
                  {proj.type === 'solar' ? <Sun size={15} /> : <Video size={15} />}
                  <span>{proj.capacity}</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-[#4a5568]">
                  <MapPin size={13} />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase font-bold text-[#4a5568]">
                  CLIENT / RECIPIENT:
                </span>
                <h4 className="font-sans text-base font-bold text-[#2d3436]">
                  {proj.client}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                {proj.description}
              </p>

              <div className="p-3 rounded-lg bg-[#d1d9e6]/50 shadow-[inset_1px_1px_2px_#babecc] flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#4a5568]">
                  VERIFIED OUTPUT:
                </span>
                <span className="font-mono text-xs font-extrabold text-[#097945]">
                  {proj.metric}
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#d1d9e6] flex items-center justify-between">
              <span className="font-mono text-xs text-[#4a5568]">
                DEPLOYED: {proj.year}
              </span>
              <PhysicalButton
                size="sm"
                variant="secondary"
                onClick={onOpenQuote}
              >
                DEPLOY SIMILAR
              </PhysicalButton>
            </div>
          </IndustrialCard>
        ))}
      </div>
    </section>
  );
};
