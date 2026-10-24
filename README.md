# Tapit landing page

A responsive single-page marketing site for Tapit, built with **Vite, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React**.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Design notes

- Hero: premium deep-black surface, white typography, subtle orbital lines, and two blank-screen phone mockups.
- Features and plans: light sections with clean monochrome UI, rounded cards, soft borders, and restrained motion.
- Footer: black, with navigation and launch/contact notes.
- The blank phone mockup is in `public/assets/phone-tilted.webp`; replace it with a real app screenshot when available.
- Plan prices and premium feature entitlements are deliberately not fabricated. The plans section reflects the supplied Tapit brief, which says paid-plan structure and NFC commercial details are not final.
- The `/privacy-policy` route contains a website privacy notice. Review and update hosting, app-data, and privacy-contact details before public launch; provide a separate app privacy notice when app data practices are confirmed.

## Main files

- `src/App.tsx`: page sections and interactions
- `src/index.css`: layout, visual styling, responsive rules, and motion
- `tailwind.config.js`: theme tokens
- `public/assets/phone-tilted.webp`: transparent phone mockup asset
