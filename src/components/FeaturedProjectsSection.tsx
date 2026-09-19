import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight, MapPin, Building, Sun, Video, Shield, X } from 'lucide-react';

export interface FeaturedProjectsSectionProps {
  onRequestCaseStudies: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onRequestCaseStudies,
}) => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: 'iit-ism',
      title: 'IIT ISM Dhanbad',
      location: 'Dhanbad, Jharkhand',
      badge: 'Surveillance & Optical Fiber',
      grade: 'Institutional Grade',
      scope: '180+ IP Cameras & 10G Fiber',
      description:
        'Turnkey design, supply, and integration of 180+ IP surveillance cameras covering premier academic auditoriums and campus access gates, tied into an armored multi-kilometer fiber optic backbone.',
      // Clean architectural illustration representation
      imageBg: 'from-amber-800 to-stone-900',
      tagline: 'Premier Central University Campus',
      fullDetails: {
        client: 'Indian Institute of Technology (ISM) Dhanbad',
        turnkeyTimeline: '90 Days Turnkey Execution',
        specifications: [
          '180+ Full-HD and 4K Ultra-Low-Light IP Dome & Bullet Cameras',
          'Armored Single-Mode 10Gbps Multi-Core Fiber Optic Ring',
          'Centralized 128-Channel Network Video Recorder with RAID 6 Storage',
          'Real-time automated vehicle number plate recognition (ANPR) at gates',
        ],
      },
    },
    {
      id: 'dav-schools',
      title: 'DAV Public Schools',
      location: 'Rajganj, Purbipara',
      badge: 'Rooftop Solar & Biometrics',
      grade: '50 kW On-Grid Plant',
      scope: '50 kW Grid Solar + Biometric Gates',
      description:
        'Engineered and installed a 50 kW on-grid solar photovoltaic system reducing institution power costs by 58%, accompanied by staff biometric RFID attendance terminals and secure cloud logging.',
      imageBg: 'from-emerald-800 to-sky-950',
      tagline: 'Clean Energy & Smart Access for Educational Hub',
      fullDetails: {
        client: 'DAV Public School Regional Managing Committee',
        turnkeyTimeline: '45 Days Turnkey Execution',
        specifications: [
          '50 kW Tier-1 Monocrystalline Solar PV Modules',
          'Central String Inverter with Zero-Export and Net-Metering Synchronization',
          'Biometric Cloud-Synched RFID Terminals for 120+ Teaching & Non-Teaching Staff',
          '58% reduction in grid electricity expense with automated monthly report generation',
        ],
      },
    },
    {
      id: 'rudra-motors',
      title: 'Rudra Motors',
      location: 'Automobile Dealership',
      badge: 'Commercial Solar & Facility CCTV',
      grade: '32 kW Commercial',
      scope: '32 kW System + Multi-Site NVR',
      description:
        'Consolidated solar power deployment for commercial showroom lighting, coupled with centralized multi-location CCTV access allowing management remote live monitoring from corporate headquarters.',
      imageBg: 'from-slate-700 to-zinc-900',
      tagline: 'Commercial Automotive Showroom & Service Facility',
      fullDetails: {
        client: 'Rudra Motors Commercial Dealership Group',
        turnkeyTimeline: '30 Days Turnkey Execution',
        specifications: [
          '32 kW Rooftop Solar Array powering display lights and hydraulic lifts',
          'Multi-Site NVR Network enabling smartphone live stream for dealership owners',
          'Night vision perimeter cameras protecting open inventory yard',
          'Full return on capital expenditure achieved within 38 months',
        ],
      },
    },
    {
      id: 'bokaro-hub',
      title: 'Bokaro Industrial Hub',
      location: 'Bokaro Steel Industrial Zone',
      badge: 'Perimeter Defense & LAN',
      grade: 'Industrial Plant',
      scope: '4 km Perimeter + Robust Infrastructure',
      description:
        'Enterprise perimeter security involving long-range thermal cameras, biometric turnstiles, and a ruggedized industrial network switch infrastructure resilient against high-dust and harsh factory conditions.',
      imageBg: 'from-orange-950 to-neutral-900',
      tagline: 'Harsh Environment Heavy Industry Defense',
      fullDetails: {
        client: 'Bokaro Steel City Industrial Fabricators',
        turnkeyTimeline: '60 Days Turnkey Execution',
        specifications: [
          '4 km High-Vibration Resistant Perimeter Intrusion Sensing Fiber',
          'IP67 Dustproof Long-Range Thermal Cameras with High-Temperature Resistance',
          'Industrial Ruggedized DIN-Rail Managed Switches with dual power redundancy',
          'Turnstile Access Control with automated gate barrier interlocking',
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#e2e8f0] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#097945]/10 border border-[#097945]/20 mb-2">
            <CheckCircle2 size={13} className="text-[#097945]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
              PROVEN TRACK RECORD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241a] tracking-tight">
            Featured Projects
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] max-w-2xl mt-1">
            Real installations delivered for Eastern India's prestigious institutions and enterprises.
          </p>
        </div>

        <button
          type="button"
          onClick={onRequestCaseStudies}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#097945] hover:text-[#065330] transition-colors cursor-pointer group"
        >
          <span>Request Detailed Case Studies</span>
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-white border border-[#e2e8f0] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image banner simulation with realistic architectural badges */}
              <div className={`relative h-56 w-full bg-gradient-to-tr ${project.imageBg} p-4 flex flex-col justify-between text-white overflow-hidden`}>
                {/* Visual architectural texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Badges on top of image */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {project.badge}
                  </span>
                  <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-md bg-[#097945]/90 backdrop-blur-md text-white">
                    {project.grade}
                  </span>
                </div>

                {/* Subtitle inside banner */}
                <div className="relative z-10">
                  <span className="font-mono text-[11px] text-white/80 uppercase tracking-wider block">
                    VERIFIED DEPLOYMENT
                  </span>
                  <span className="font-sans text-base font-bold text-white drop-shadow">
                    {project.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748b]">
                  <MapPin size={13} className="text-[#097945]" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1a202c]">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="px-6 py-4 bg-[#f8fafc] border-t border-[#edf2f7] flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#1a202c]">
                Scope: <span className="text-[#4a5568] font-medium">{project.scope}</span>
              </span>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="text-xs font-bold text-[#097945] hover:text-[#065330] transition-colors cursor-pointer"
              >
                View Summary
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Summary Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="font-mono text-xs font-bold text-[#097945] uppercase">
                  {selectedProject.grade}
                </span>
                <h3 className="text-xl font-bold text-[#11241a]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono bg-gray-50 p-3 rounded-lg">
                <span className="text-gray-500">LOCATION:</span>
                <span className="font-bold text-gray-800">{selectedProject.location}</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono bg-gray-50 p-3 rounded-lg">
                <span className="text-gray-500">TIMELINE:</span>
                <span className="font-bold text-[#097945]">{selectedProject.fullDetails.turnkeyTimeline}</span>
              </div>

              <h4 className="font-mono text-xs font-bold uppercase text-gray-700 pt-2">
                Turnkey Technical Specifications:
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                {selectedProject.fullDetails.specifications.map((spec: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#097945] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-[#097945] text-white font-bold text-xs"
              >
                CLOSE SUMMARY
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
