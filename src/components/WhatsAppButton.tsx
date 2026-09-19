import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Quick Communication" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919437000000?text=Hello%20Amrita%20Infotech,%20I%20would%20like%20to%20inquire%20about%20your%20turnkey%20solar%20and%20security%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 group relative"
        title="Chat on WhatsApp with Amrita Infotech"
      >
        <span className="sr-only">Chat with Amrita Infotech on WhatsApp</span>
        {/* Pulse beacon */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white ring-2 ring-[#25D366] animate-ping" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#ff4757] ring-1 ring-white" />

        <MessageCircle size={30} className="fill-white text-[#25D366]" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-sans font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
          Chat on WhatsApp Desk
        </span>
      </a>
    </aside>
  );
};
