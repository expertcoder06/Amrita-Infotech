import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote:
        '“Amrita Infotech delivered our multi-building IP surveillance network ahead of schedule. Their optical fiber splicing was immaculate, and we have experienced zero packet loss or downtime over 2 years of continuous recording.”',
      author: 'Chief Security Officer',
      org: 'Higher Education Institute, Dhanbad',
    },
    {
      quote:
        '“Their team walked us through the PM Surya Ghar application flawlessly. The direct bank subsidy arrived right on time, and our campus electricity bill dropped by over 60% in the first quarter itself.”',
      author: 'School Administrator',
      org: 'Regional Public School Network',
    },
    {
      quote:
        '“Having one trusted vendor handle our showroom computer networks, CCTV setup, and rooftop solar gave us complete peace of mind. Mr. Pattanayak and his engineers are always reachable on call.”',
      author: 'Operations Manager',
      org: 'Commercial Dealership Group',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#097945]/10 border border-[#097945]/20">
          <MessageSquare size={13} className="text-[#097945]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#097945]">
            VERIFIED TESTIMONIALS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11241a] tracking-tight">
          What Our Clients Say
        </h2>

        <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
          Long-term partnerships built on prompt service, honest technical advice, and transparent billing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-[#e2e8f0] p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xs sm:text-sm text-[#4a5568] leading-relaxed italic flex-1">
              {rev.quote}
            </blockquote>

            {/* Author */}
            <div className="pt-4 border-t border-[#f1f5f9]">
              <h4 className="font-sans text-sm font-bold text-[#1a202c]">
                {rev.author}
              </h4>
              <p className="font-sans text-xs text-[#64748b]">
                {rev.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
