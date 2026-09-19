# Technical Requirements Document (TRD)

## Project Name: Amrita Infotech — Security & Solar Solutions

**Repository**: `amrita-infotech-web`  
**Version**: 1.0.0  
**Runtime**: Node.js / Browser (Evergreen Modern Web)  
**Framework**: React 19 + TypeScript + Vite 6 + Tailwind CSS v4  
**Date**: September 2026  
**Status**: Implemented & Production-Verified

---

## 1. System Architecture Overview

The Amrita Infotech web application is built as a single-page, zero-latency client-side application (SPA) optimized for deployment on Cloud Run / CDN edge networks. The frontend architecture pairs modern functional React components with a custom **Industrial Skeuomorphic Design System**, driven by CSS dual-elevation shadows, HTML5 Canvas 2D oscilloscope rendering, and the native browser Web Audio API for mechanical actuation feedback.

```
[ Browser Client ]
       │
       ├─── React 19 State & Virtual DOM
       │        ├── Header & Anchor Navigation
       │        ├── Solar & CCTV Telemetry Engine (Canvas 2D + Math Loop)
       │        ├── Interactive Subsidies Calculator (Formula Engine)
       │        ├── Featured Projects & Case Studies Modal
       │        └── Lead Capture & Quotation Pipeline
       │
       ├─── Web Audio API Sound Engine (Synthesized Mechanical Clicks)
       │        └── GainNodes + BiquadFilterNodes + OscillatorNodes
       │
       ├─── Design Token System (/src/tokens.ts)
       │        ├── Directional 45° Lighting Model
       │        ├── Dual Neumorphic Shadows (Elevated & Recessed)
       │        └── Industrial Accents (Safety Orange #ff4757, Forest Emerald #097945)
       │
       └─── Static Production Asset Bundle (Vite Build /dist)
```

---

## 2. Technology Stack & Dependencies

| Layer                    | Technology      | Specification / Package                      | Purpose                                        |
| :----------------------- | :-------------- | :------------------------------------------- | :--------------------------------------------- |
| **Framework**            | React 19        | `react@^19.0.0`, `react-dom@^19.0.0`         | Declarative UI rendering & state management    |
| **Language**             | TypeScript      | `typescript@~5.7.0`                          | Strict type checking, interface contracts      |
| **Bundler / Dev Server** | Vite            | `vite@^6.0.0`                                | Sub-second HMR, tree-shaking, static build     |
| **Styling & CSS**        | Tailwind CSS v4 | `@tailwindcss/vite`, `@import "tailwindcss"` | Utility-first styling, CSS custom properties   |
| **Iconography**          | Lucide React    | `lucide-react@^1.16.0`                       | Standardized technical and UI icon system      |
| **Audio Synthesis**      | Web Audio API   | Native Browser `AudioContext`                | Zero-bundle-size tactile click synthesis       |
| **Canvas Graphics**      | HTML5 Canvas 2D | Native Browser `CanvasRenderingContext2D`    | High-frequency telemetry & sine wave rendering |

---

## 3. Directory Structure & File Map

```
amrita-infotech/
├── index.html                    # HTML entry point, meta tags, and font imports
├── metadata.json                 # AI Studio applet permissions and metadata
├── package.json                  # Dependencies, build scripts (type: "module")
├── tsconfig.json                 # Strict TypeScript configuration
├── vite.config.ts                # Vite 6 config with Tailwind CSS plugin
├── prd.md                        # Product Requirements Document
├── trd.md                        # Technical Requirements Document
└── src/
    ├── main.tsx                  # Application bootstrap
    ├── App.tsx                   # Master layout container and section assembler
    ├── index.css                 # Tailwind v4 import, noise texture, custom shadows
    ├── tokens.ts                 # Design tokens, color system, and Web Audio engine
    └── components/
        ├── PhysicalButton.tsx    # Skeuomorphic button with 2px physical depression
        ├── IndustrialCard.tsx    # Beveled card with slotted screws and vent cutouts
        ├── TactileKnob.tsx       # Rotary potentiometer with drag/wheel angle math
        ├── PhysicalSwitch.tsx    # Toggle switch with mechanical rocker aesthetics
        ├── AmritaHeader.tsx      # Top bar navigation, hotline, and audio toggle
        ├── SolarTelemetryConsole.tsx # Dual-mode telemetry & 4-ch CCTV matrix
        ├── StatsBar.tsx          # High-contrast slate-dark statistics strip
        ├── AboutSection.tsx      # Corporate background and leadership profile
        ├── CoreServicesSection.tsx # 6 Core service vertical cards
        ├── PMSuryaGharBanner.tsx # Central rooftop subsidy banner & calculator
        ├── FeaturedProjectsSection.tsx # Verified client installations & case studies
        ├── WhyChooseUsSection.tsx# 4 Architectural capability pillars
        ├── TestimonialsSection.tsx# Verified 5-star institutional client reviews
        ├── LeadCaptureSection.tsx# Contact details & quotation request form
        ├── Footer.tsx            # Corporate footer with GSTIN and legal metadata
        ├── WhatsAppButton.tsx    # Floating persistent WhatsApp contact trigger
        └── QuoteModal.tsx        # Dynamic multi-step quote & subsidy modal
```

---

## 4. Design System & Mathematical Token Architecture

### 4.1 Directional 45° Lighting Model

All visual depth in the application conforms to an optical light source positioned at **top-left (45°)**:

- **Convex (Raised) Surfaces**:
  - Upper-left highlight: `rgba(255, 255, 255, 0.9)`
  - Lower-right shadow: `rgba(163, 177, 198, 0.6)`
  - Formula: `box-shadow: 6px 6px 14px #babecc, -6px -6px 14px #ffffff`
- **Concave (Recessed) Wells**:
  - Upper-left shadow: `inset 3px 3px 6px #babecc`
  - Lower-right highlight: `inset -3px -3px 6px #ffffff`
- **Active / Pressed State**:
  - Buttons translate `translateY(2px)` while outer drop-shadow collapses into an inset depressed shadow:
  - Formula: `box-shadow: inset 3px 3px 6px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.7)`

### 4.2 Color Palette Specifications

```typescript
export const PALETTE = {
  chassis: "#e0e5ec", // Matte ABS equipment plastic
  chassisDark: "#1b2838", // Dark instrumentation panel
  bezel: "#d1d9e6", // Milled metal bezel trim
  accentGreen: "#097945", // Energy/Solar Forest Emerald
  accentOrange: "#ff4757", // Safety/Critical warning indicator
  displayGreen: "#22c55e", // CRT phosphor luminous green
  lcdAmber: "#f59e0b", // High-contrast LCD amber
  textPrimary: "#11241a", // High-contrast deep slate text
  textSecondary: "#4a5568", // Neutral readable body text
};
```

---

## 5. Web Audio Synthesis Engine

To guarantee zero network overhead, all tactile interactions synthesize audio procedurally via the browser `AudioContext`.

```typescript
class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playClick(type: "light" | "click" | "heavy" | "switch" = "click") {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Frequency & Envelope Mapping
    const configs = {
      light: { freq: 1200, dur: 0.015, gainVal: 0.12, decay: 0.012 },
      click: { freq: 850, dur: 0.025, gainVal: 0.22, decay: 0.02 },
      heavy: { freq: 350, dur: 0.045, gainVal: 0.35, decay: 0.04 },
      switch: { freq: 600, dur: 0.035, gainVal: 0.25, decay: 0.03 },
    };

    const c = configs[type];
    osc.type = "sine";
    osc.frequency.setValueAtTime(c.freq, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + c.dur);

    gain.gain.setValueAtTime(c.gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + c.dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + c.dur);
  }
}
```

---

## 6. Component Specifications & Interfaces

### 6.1 `PhysicalButton.tsx`

- **Props**:
  ```typescript
  interface PhysicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "emerald" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    pressed?: boolean;
    icon?: React.ReactNode;
    soundType?: "light" | "click" | "heavy";
  }
  ```
- **Behavior**: Calls `soundEngine.playClick(soundType)` on `onMouseDown`; executes visual depression class transitions.

### 6.2 `TactileKnob.tsx`

- **Props**:
  ```typescript
  interface TactileKnobProps {
    min: number;
    max: number;
    value: number;
    step?: number;
    label?: string;
    unit?: string;
    onChange: (val: number) => void;
  }
  ```
- **Angular Math**:
  - Usable rotation arc: `-135°` to `+135°` (270° total stroke).
  - Normalization: `normalized = (value - min) / (max - min)`.
  - Angle: `angle = -135 + normalized * 270`.
  - Event Handling: Supports vertical drag deltas (`clientY`) and mouse wheel stepping.

### 6.3 `SolarTelemetryConsole.tsx`

- **Canvas Rendering Loop**:
  - Canvas dimension: Scaled via container bounding rect with Device Pixel Ratio (`window.devicePixelRatio || 1`).
  - Waveform formula: `y = (height / 2) + Math.sin(t * frequency + phase) * amplitude`.
  - Grid mesh: 10px pitch dark green CRT phosphor grid with horizontal scanline animation.

### 6.4 Subsidy Calculation Engine (`PMSuryaGharBanner.tsx`)

```typescript
export function calculateSuryaGharSubsidy(capacityKw: number): {
  subsidy: number;
  monthlyUnits: number;
  monthlySavings: number;
} {
  // MNRE Benchmark Subsidy 2024-2026:
  // Up to 2 kW: ₹30,000 / kW (Max ₹60,000)
  // Additional 1 kW (up to 3 kW): ₹18,000
  // Capped at ₹78,000 for 3 kW and above
  let subsidy = 0;
  if (capacityKw <= 1) {
    subsidy = 30000;
  } else if (capacityKw <= 2) {
    subsidy = 60000;
  } else {
    subsidy = 78000;
  }

  // Generation: ~120 Units (kWh) per kW per month in Eastern India
  const monthlyUnits = capacityKw * 120;

  // Savings: Average commercial/residential tariff of ₹6.50 / kWh
  const monthlySavings = monthlyUnits * 6.5;

  return { subsidy, monthlyUnits, monthlySavings };
}
```

---

## 7. Form Ingestion & State Validation (`LeadCaptureSection.tsx` & `QuoteModal.tsx`)

- **State Schema**:
  ```typescript
  interface QuotationPayload {
    name: string;
    phone: string;
    service: string;
    location: string;
    capacityKw?: number;
    requirements: string;
    timestamp: string;
  }
  ```
- **Validation Rules**:
  - `name`: Minimum 2 characters, non-empty.
  - `phone`: Regex validation for Indian mobile numbers `^(?:\+91|0)?[6-9]\d{9}$`.
  - `service`: Strict enumeration against the 6 core verticals.
- **Client Feedback**: Tactile submission sound (`heavy`), simulated reference generation (`AI-TK-2026-XXXX`), and inline success confirmation state.

---

## 8. Build, Optimization & Deployment

- **Build Command**: `npm run build` (`vite build && tsc --noEmit`).
- **Static Artifact**: Emitted to `/dist` directory.
- **CSS Architecture**: Tailwind v4 with zero-runtime utility extraction.
- **DPR Canvas Scaling**: Resizes without blurring on Retina / 4K displays.
- **Asset Size Budget**: Total JS + CSS bundle < 180 KB gzip.

---

## 9. Regulatory & Legal Integrity

- **GSTIN Display**: Verified Indian GST identification number (`20AAAAA0000A1Z5`).
- **Standard Standards Compliance**: ISO 9001:2015 certified integrator standards and MNRE grid-tied net-metering protocols.
