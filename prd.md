# Product Requirements Document (PRD)

## Project Name: Amrita Infotech — Security & Solar Solutions

**Target URL**: `https://amritainfotech.in`  
**Version**: 1.0.0  
**Document Author**: Lead Product Architect & Frontend Systems Engineer  
**Date**: September 2026  
**Status**: Approved & Implemented

---

## 1. Executive Summary

Amrita Infotech is Eastern India’s premier turnkey systems integrator and certified solar engineering partner, operating with 15+ years of operational excellence across Jharkhand, Bihar, and West Bengal. Directed under the strategic leadership of **Mr. Rajendra Nath Pattanayak**, the company delivers mission-critical campus IP surveillance (e.g., IIT ISM Dhanbad), multi-gigabit optical fiber backbones, industrial rooftop and ground-mounted solar power plants (1.2 MW+ deployed), and central PM Surya Ghar Muft Bijli Yojana renewable subsidies.

The Amrita Infotech web platform serves as an interactive, authoritative digital flagship. Designed with an **Industrial Skeuomorphic** design system, it delivers tactile, tangible physical controls, real-time telemetry simulation, government subsidy estimation, verified client case studies, and rapid quotation capture.

---

## 2. Business Objectives & Problem Statement

### 2.1 Problem Statement

1. **Sub-contractor Fragmentation**: Institutional clients (universities, manufacturing plants, housing societies) traditionally coordinate across 4–6 separate vendors for solar panels, CCTV security, fiber cabling, and networking.
2. **Opacity in Government Subsidies**: Commercial and residential customers find Central Government rooftop subsidies (PM Surya Ghar) complex and difficult to navigate without certified portal assistance.
3. **Lack of Verifiable Technical Credibility**: Regional integrators often lack public proof of high-availability enterprise installations or engineering diligence.

### 2.2 Business Goals & Success Metrics

- **Qualified Lead Generation**: Convert institutional administrators and homeowners into direct quotation requests within 24 business hours.
- **Authority & Trust**: Highlight government-approved vendor credentials, ISO 9001:2015 certification, and Tier-1 institutional clientele (such as IIT ISM Dhanbad).
- **Interactive Subsidy Transparency**: Enable customers to calculate their PM Surya Ghar Central subsidy and monthly power bill reductions instantly.
- **Conversion Rate Target**: > 4.5% conversion from visitor to quotation/WhatsApp lead.

---

## 3. Target Audience & User Personas

| Persona                          | Role / Profile                                                         | Primary Goals                                                                | Key Pain Points                                                               |
| :------------------------------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Institutional Director / CSO** | Chief Security Officer at universities or PSUs (e.g., IIT ISM Dhanbad) | Deploy multi-kilometer perimeter IP CCTV & fiber networks with 99.99% uptime | Vendor accountability, multi-building packet drops, delayed emergency repairs |
| **Plant / Facility Head**        | General Manager at industrial plants (e.g., Bokaro Steel Hub)          | Slash industrial electricity bills via 50 kW–1 MW+ rooftop solar             | High factory dust, net-metering red tape, return on investment clarity        |
| **Residential Homeowner**        | Homeowner / Housing Society Head in Jharkhand                          | Install residential rooftop solar under PM Surya Ghar Yojana                 | Confusion around direct DBT bank transfers, DISCOM meter clearance            |
| **Commercial Business Owner**    | Auto Dealership or Retail Showroom Manager                             | Unified CCTV monitoring and rooftop solar to lower operational expenses      | Lack of centralized multi-site feeds and single-point AMC support             |

---

## 4. Key Functional Requirements

### 4.1 Global Navigation & Header (`F-01`)

- **Brand Identity**: Render high-contrast Amrita Infotech emblem and "SECURITY & SOLAR SOLUTIONS" descriptor.
- **Anchor Navigation**: Smooth scroll to `Home`, `About`, `Services`, `Projects`, `• Green Subsidies` (with active pulsing green status beacon), and `Contact`.
- **Direct Phone Contact**: Click-to-call link for `+91-9876543210`.
- **Tactile Audio Toggle**: Global button allowing users to toggle synthetic mechanical actuation audio feedback on/off.
- **Primary CTA**: Prominent, physical tactile button to trigger the "Get a Quote" modal.

### 4.2 Hero Section & Trust Architecture (`F-02`)

- **Government Badge**: Highlight "Government-Approved Solar Vendor & Certified Systems Integrator".
- **Headline**: "Technology, Security & Solar Solutions You Can Trust".
- **Value Proposition**: 15+ years of turnkey excellence powering universities, PSUs, and industries in Jharkhand & Eastern India.
- **Dual Call-to-Actions**:
  - Primary: "Get a Free Quote →" with 2px physical depression.
  - Secondary: "View Our Projects" with direct anchor scroll.
- **Trust Badges**: "ISO & GST Registered" and "Direct PM Surya Ghar Subsidy".

### 4.3 Interactive Solar & Security Telemetry Console (`F-03`)

- **Dual-Mode Visual Switcher**: Toggle between "Solar Grid Telemetry" and "Campus CCTV Feeds".
- **Solar Grid Telemetry**:
  - Real-time simulated inverter output display (kW instant output and cumulative kWh).
  - Oscilloscope sinusoidal power waveform animation.
  - Interactive rotary potentiometer (knob) allowing visitors to simulate inverter load (500 kW to 1,200 kW).
  - Physical toggle switch for grid synchronization ("LOCKED" vs. "ISOLATED").
- **Campus CCTV Matrix**:
  - 4-channel live telemetry matrix simulating camera feeds (e.g., "IIT ISM GATE 1", "ACADEMIC COMPLEX", "SOLAR PLANT 4MW", "PERIMETER NORTH").
  - 1080p / 30FPS status tags and live recording pulse beacons.
- **Metric Overlays**:
  - "1.2 MW+ Deployed — Clean Rooftop & Industrial Solar [Active]".
  - "2,500+ Cameras — Active Campus Feeds".

### 4.4 High-Contrast Stats Strip (`F-04`)

- Charcoal slate technical panel (`#1b2838`) with dual-elevation depth.
- 4 Core Metrics:
  1. **15+ Years Experience** — _Established Regional Integrator_
  2. **100+ Institutional Clients** — _Universities, PSUs & Plants_
  3. **150+ Turnkey Projects** — _End-to-End Implementation_
  4. **6 Service Verticals** — _Unified Tech Architecture_

### 4.5 Corporate Dossier: About Amrita Infotech (`F-05`)

- Stamped "ABOUT AMRITA INFOTECH" section header.
- Detailed historical context highlighting the strategic leadership of **Mr. Rajendra Nath Pattanayak**.
- High-profile institutional mentions: **IIT ISM Dhanbad** surveillance and **PM Surya Ghar** rural solar initiatives.
- **Leadership Profile Panel**:
  - Distinctive dark navy "RP" monogram badge.
  - Credentials: "Rajendra N. Pattanayak, Managing Director & Lead Systems Engineer".
  - Signature Philosophy Quote: _“Our philosophy is uncompromising technical diligence: we build solutions that operate seamlessly 24 hours a day, 365 days a year without downtime.”_
  - "Government Registered Vendor Approved" shield badge.
  - Interactive modal displaying detailed leadership qualifications and project milestones.

### 4.6 Core Services Architecture (`F-06`)

Structured catalog across 6 core technical verticals:

1. **Solar Power Systems** (`RENEWABLE`): On-grid, off-grid, and agricultural solar pumps with MNRE net-metering.
2. **System Integration** (`TURNKEY`): Unified server room setups, peripheral convergence, and enterprise software.
3. **Security & Surveillance** (`PROTECTION`): Enterprise IP CCTV, multi-terabyte NVRs, biometric gates, and perimeter defense.
4. **Home Automation (IoT)** (`SMART TECH`): Capacitive switches, smartphone/voice control, and sensor automation.
5. **Computer Networking** (`CONNECTIVITY`): Cat6/Cat6A structured cabling, optical fiber splicing, and Wi-Fi 6.
6. **Desktop/Laptop Sales & Service** (`HARDWARE & AMC`): Tier-1 procurement (Dell/HP/Lenovo) and corporate AMC support.

### 4.7 PM Surya Ghar Direct Subsidy Engine (`F-07`)

- **Direct Subsidy Banner**: Up to ₹78,000 Direct Central Government Subsidy on rooftop solar.
- **Key Metric Badges**:
  - _1 kW – 3 kW_: ₹30,000 to ₹78,000 Subsidy.
  - _Solar Agri Pumps_: Up to 60% Subsidized Cost.
  - _Zero Hassle_: Complete DISCOM Clearance.
- **Interactive Calculator Rig**: Rotary dial to adjust rooftop capacity (1 kW to 10 kW) with instant calculation of:
  - Central DBT Subsidy Amount.
  - Monthly Power Unit Generation (approx. 120 units/kW/month).
  - Monthly Electricity Bill Savings (at ₹6.5/unit avg tariff).
- **Call-to-Action**: Direct modal application pre-filled with the calculated kW system size.

### 4.8 Featured Turnkey Projects (`F-08`)

- Detailed portfolio cards highlighting verified installations:
  1. **IIT ISM Dhanbad** (Surveillance & Optical Fiber / Institutional Grade — 180+ IP Cameras & 10G Fiber).
  2. **DAV Public Schools** (Rooftop Solar & Biometrics — 50 kW On-Grid Plant reducing power bills by 58%).
  3. **Rudra Motors** (Commercial Solar & Facility CCTV — 32 kW Commercial).
  4. **Bokaro Industrial Hub** (Perimeter Defense & LAN — 4 km Perimeter + Robust Factory Switchgear).
- **Interactive Case Study Modal**: Displays client entity, execution timeline, and technical engineering specifications.

### 4.9 The Amrita Advantage (`F-09`)

Four foundational capability pillars:

1. **One-Stop Vendor**: Unified SLA for solar, networking, and security.
2. **15+ Years Track Record**: Verified institutional metrics across Jharkhand.
3. **End-to-End Subsidy**: Complete portal filing, inspection, and DISCOM meter synchronization.
4. **Localized 24/7 AMC**: Rapid dispatch teams for emergency fiber splicing, camera swaps, and inverter repairs.

### 4.10 Verified Client Testimonials (`F-10`)

- 5-Star verified testimonials from:
  - _Chief Security Officer_ (Higher Education Institute, Dhanbad).
  - _School Administrator_ (Regional Public School Network).
  - _Operations Manager_ (Commercial Dealership Group).

### 4.11 Fast-Track Lead Capture Engine (`F-11`)

- **Direct Hotlines**: Phone (`+91-9876543210`), WhatsApp connect, and regional headquarters address.
- **Interactive Quotation Form**:
  - Full Name (required).
  - Phone Number with `+91` validation (required).
  - Service of Interest dropdown selector.
  - Installation Location (Dhanbad / Bokaro / Ranchi / Eastern India).
  - Project Scope / Capacity description.
- **Feedback Loop**: Immediate tactile confirmation with generated reference tracking ID (`AI-TK-2026-XXX`).

### 4.12 Real-Time WhatsApp & Direct Assistance Desk (`F-12`)

- Persistent floating WhatsApp contact widget on the bottom right.
- Pre-filled greeting: _"Hello Amrita Infotech, I would like to inquire about your turnkey solar and security solutions."_
- Animated ping beacon and hover tooltips for high visibility.

### 4.13 Enterprise Footer & Legal Metadata (`F-13`)

- Formal company registration, GSTIN: `20AAAAA0000A1Z5`.
- Strategic leadership acknowledgment of Mr. Rajendra Nath Pattanayak.
- Solution and case study quick links.
- Full physical address: Main Road Commercial Complex, Near Station Chowk, Dhanbad, Jharkhand 826001.

---

## 5. User Experience & Design System Standards

### 5.1 Design Philosophy: Industrial Skeuomorphism

1. **Physicality Through Light**: Consistent 45° top-left directional illumination governing all surface elevations.
2. **Mechanical Authenticity**: Physical button actuation with 2px downward translation, shadow inversion upon press, and Web Audio click synthesizers.
3. **Manufacturing Signatures**: Modeled slotted corner screws, recessed 4-pill vertical ventilation slots, CRT scanlines, and luminous status LEDs.
4. **Material Honesty**: Matte ABS chassis (`#e0e5ec`), brushed aluminum trims, and Braun-inspired Safety Orange (`#ff4757`) alongside Emerald Green (`#097945`) functional accents.

---

## 6. Non-Functional Requirements (NFRs)

- **Performance**: Initial page load < 1.2s; 60fps frame rate for animations and oscilloscope rendering.
- **Responsiveness**: Pixel-accurate layout from mobile viewports (360px) to ultra-wide desktop displays (2560px). Minimum touch target size of 44px.
- **Accessibility**: Strict WCAG AA compliance for contrast ratios (minimum 4.5:1 on text surfaces); full keyboard navigability.
- **Browser Compatibility**: Evergreen modern browsers (Chrome, Edge, Safari, Firefox).
