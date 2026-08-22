# Kiran Rajvanshi — 3D Personal Portfolio Website

A production-ready, futuristic 3D personal developer portfolio website for **Kiran Rajvanshi** (Web Developer • WordPress Developer • App Developer • AI Automation).

Built with **React 18**, **TypeScript**, **Three.js**, **@react-three/fiber**, **@react-three/drei**, **Framer Motion**, and **Tailwind CSS**.

---

## 🌟 Highlights & Features

- 🌌 **Interactive 3D Hero Scene**: Procedural 3D polyhedrons, glowing rings, starfield particle system, and smooth mouse-follow parallax.
- 🖼️ **3D Holographic Portrait Frame**: Creative 3D depth frame with glowing gradients, floating tech badges ("Open to Work", "Full-Cycle Dev"), and automatic fallback handling.
- 🪐 **Interactive 3D Tech Ecosystem**: 3D orbital space visualizing core technologies orbiting around a central "KIRAN" core with interactive node selection and mobile filter grid.
- 💼 **Real-World Client Work**: Showcasing WordPress development, e-commerce catalog implementations, and infrastructure hosting landing pages (Global Grania, HeadwearHouse, Aroma Aegis, VPS/Server portals).
- 🚀 **Featured Projects Showcase**: Detailed breakdowns of key engineering projects:
  1. **Blood Donation App** (Java • Android Studio • XML • Firebase)
  2. **Food Ordering App** (Java • Android Studio • XML)
  3. **Certificate Verification System** (WordPress • PHP • MySQL • CPTs • Shortcodes)
  4. **MyAgent** (Python • Gemini API • Google GenAI SDK • Playwright • Chrome CDP)
- 🎯 **Career Timeline & Services**: Internships (Indolike, CodeLeft, Prodigy Infotech) and service offerings with practical problem solving values.
- 📬 **Interactive Contact Section**: Direct email copy pill, working message triggers with confetti celebration, and social links.
- ⚡ **High Performance & Accessibility**: 60fps WebGL rendering, mobile LOD simplifications, `prefers-reduced-motion` compliance, OpenGraph meta tags, and Schema.org JSON-LD structured data.

---

## 🛠️ Project Structure

```
├── public/
│   ├── assets/
│   │   ├── profile.svg        # Stylized avatar fallback
│   │   └── profile.jpg        # Drop your personal photo here
│   ├── favicon.svg            # Custom KR neon monogram
│   ├── robots.txt             # SEO crawler directives
│   └── sitemap.xml            # SEO sitemap
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Hero3DCanvas.tsx       # 3D procedural hero scene
│   │   │   └── TechEcosystem3D.tsx   # 3D orbital tech nodes
│   │   ├── About.tsx
│   │   ├── ClientWork.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── TechEcosystem.tsx
│   │   └── WhyWorkWithMe.tsx
│   ├── data/
│   │   └── portfolioData.ts   # Centralized portfolio data
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── DEPLOYMENT.md              # Vercel / Netlify / Custom Domain guide
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📸 Adding Your Personal Photo

1. Place your photo into `public/assets/` named `profile.jpg` (or `profile.png`).
2. The website will automatically render it within the 3D holographic frame with glowing depth effects and responsive lighting.

---

## 🌐 Production Deployment

See [DEPLOYMENT.md](file:///d:/antigravity-chat1me/DEPLOYMENT.md) for full instructions on deploying to **Vercel**, **Netlify**, or **GitHub Pages**, and connecting a custom domain like `kiranrajvanshi.dev`.

---

© 2026 Kiran Rajvanshi. All rights reserved.
