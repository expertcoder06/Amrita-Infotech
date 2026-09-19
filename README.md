# Amrita Infotech Web Portfolio


## Overview

A modern, premium‑looking web portfolio for **Amrita Infotech**, showcasing its **CCTV surveillance**, **solar panel**, and **security solutions**. The site features a **dynamic hero background** with zoom‑in/out effects, a **glass‑morphism navigation bar**, and smooth micro‑animations throughout the UI. Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, it delivers a fast, responsive experience.

## Live Demo

- **Development**: Run locally at `http://localhost:3000`
- **Production**: Deployed on Vercel – <https://amrita-infotech.vercel.app> (replace with your actual URL)

## Features

- Dynamic hero section with animated solar panel, CCTV, and solar technology images
- Glass‑morphism navigation bar with smooth hover effects
- Responsive design for desktop, tablet, and mobile
- Dark‑mode ready with elegant color palette
- SEO‑friendly structure (meta tags, proper headings)
- Easy deployment to Vercel

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS (v4) & vanilla CSS for custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (>= 20) and npm (>= 10) – verify with `node -v` and `npm -v`
- A Gemini API key (optional, for server‑side features) – add to `.env.local`

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd AmritaInfotech

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open `http://localhost:3000` in your browser. The site supports hot‑module replacement; changes will reflect instantly.

### Building for Production

```bash
npm run build
# Preview the production build
npm run preview
```

### Deploy to Vercel

1. Sign in to **Vercel** and create a new project linked to this repository.
2. Ensure the **build command** is `npm run build` and the **output directory** is `dist`.
3. Add any required environment variables in Vercel (e.g., `GEMINI_API_KEY`).
4. Deploy – Vercel will automatically run the build and host the site.

## Environment Variables

Create a `.env.local` based on `.env.example`:

```dotenv
GEMINI_API_KEY="your-gemini-api-key"
APP_URL="http://localhost:3000"
```

- `GEMINI_API_KEY` – required only if you use server‑side Gemini AI features.
- `APP_URL` – used by the app for relative links during local development.

## Project Structure

```
├─ public/                # Static assets (favicon, images)
├─ src/                   # Source code
│  ├─ components/         # Reusable React components
│  │   └─ DynamicHeroBackground.tsx   # Hero background with animations
│  ├─ App.tsx             # Root component
│  ├─ index.css           # Global Tailwind + custom CSS
│  └─ tokens.ts           # Design tokens (colors, spacing)
├─ .env.example           # Example env file
├─ .gitignore
├─ package.json
├─ vite.config.ts         # Vite configuration
└─ README.md              # THIS FILE
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes with clear messages
4. Open a Pull Request describing the changes

Make sure to run `npm run lint` and `npm run format` before submitting.

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ by the Amrita Infotech team*
