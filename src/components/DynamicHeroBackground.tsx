import React, { useState, useEffect } from 'react';
import { Sun, Video, Zap, Play, Pause } from 'lucide-react';
import { soundEngine } from '../tokens.ts';
import solarFarmImg from '../assets/hero/solar_farm.jpg';
import cctvSurveillanceImg from '../assets/hero/cctv_surveillance.jpg';
import solarRooftopImg from '../assets/hero/solar_rooftop.jpg';

interface BackgroundSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  location: string;
  icon: React.ReactNode;
  animationClass: string;
}

const SLIDES: BackgroundSlide[] = [
  {
    id: 'solar-farm',
    image: solarFarmImg,
    badge: '1.2 MW+ SOLAR ARRAY',
    title: 'Turnkey Ground & Industrial Solar Power Plants',
    location: 'Rudra Solar Field / Eastern Grid',
    icon: <Sun size={14} className="text-[#097945]" />,
    animationClass: 'animate-kenburns-zoom',
  },
  {
    id: 'cctv-matrix',
    image: cctvSurveillanceImg,
    badge: 'CAMPUS IP SURVEILLANCE',
    title: 'Mission-Critical Optical CCTV & PTZ AI Security',
    location: 'IIT ISM Dhanbad Campus Complex',
    icon: <Video size={14} className="text-[#3b82f6]" />,
    animationClass: 'animate-kenburns-zoom-alt',
  },
  {
    id: 'solar-rooftop',
    image: solarRooftopImg,
    badge: 'COMMERCIAL ROOFTOP & SCADA',
    title: 'High-Efficiency Rooftop Photovoltaics & Inverters',
    location: 'Bokaro Steel Industrial Corridor',
    icon: <Zap size={14} className="text-[#ff4757]" />,
    animationClass: 'animate-kenburns-zoom',
  },
];

export const DynamicHeroBackground: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION_MS = 8000;
  const INTERVAL_STEP_MS = 100;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % SLIDES.length);
          return 0;
        }
        return prev + (INTERVAL_STEP_MS / SLIDE_DURATION_MS) * 100;
      });
    }, INTERVAL_STEP_MS);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleSelectSlide = (index: number) => {
    soundEngine.playClick('click');
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlay = () => {
    soundEngine.playClick('toggle');
    setIsPlaying(!isPlaying);
  };

  const activeSlide = SLIDES[currentIndex];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Dynamic Background Images with smooth Ken Burns zoom-in / zoom-out */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center ${
                isActive ? slide.animationClass : ''
              } transition-transform will-change-transform`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transformOrigin: index % 2 === 0 ? 'center center' : 'top right',
              }}
            />
          </div>
        );
      })}

      {/* Gentle bottom edge gradient to seamlessly transition into stats strip */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#e0e5ec] to-transparent pointer-events-none" />

      {/* Subtle HUD Telemetry Indicator at Bottom-Left of Hero */}
      <div className="pointer-events-auto absolute bottom-4 left-4 sm:left-8 z-10 hidden sm:flex items-center gap-3">
        {/* Glassmorphic Telemetry Pill */}
        <div className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2.5 shadow-md border border-white/80 bg-white/70 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#097945] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#097945] absolute" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#2d3436]">
            <span className="font-extrabold text-[#097945] tracking-wider">LIVE FEED:</span>
            <span className="font-bold text-[#11241a]">{activeSlide.badge}</span>
            <span className="text-[#636e72] font-medium hidden md:inline">({activeSlide.location})</span>
          </div>
        </div>

        {/* Slide Selector Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-md">
          {SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleSelectSlide(idx)}
                className={`relative px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-[#097945] text-white shadow-sm'
                    : 'text-[#4a5568] hover:text-[#11241a] hover:bg-white/60'
                }`}
                title={slide.title}
              >
                {slide.icon}
                <span>0{idx + 1}</span>
                {isCurrent && isPlaying && (
                  <span
                    className="absolute bottom-0 left-1 right-1 h-0.5 bg-white/80 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}

          {/* Pause / Play Toggle */}
          <button
            type="button"
            onClick={togglePlay}
            className="p-1.5 rounded-full text-[#4a5568] hover:text-[#097945] hover:bg-white/60 cursor-pointer transition-colors mr-1"
            title={isPlaying ? 'Pause Auto-cycle' : 'Resume Auto-cycle'}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>
        </div>
      </div>
    </div>
  );
};
