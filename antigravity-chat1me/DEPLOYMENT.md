# Production Deployment & Custom Domain Guide

This document explains how to deploy the portfolio website for **Kiran Rajvanshi** to permanent static hosting platforms and connect a custom domain (e.g. `kiranrajvanshi.dev`).

---

## 1. Fast One-Click Deployment to Vercel (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kiran Rajvanshi 3D Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/kiran-rajvanshi-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New** > **Project** and select your `kiran-rajvanshi-portfolio` repository.
4. Settings will automatically detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a `*.vercel.app` URL within 60 seconds!

---

## 2. Deployment to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository. Netlify will use the included [netlify.toml](file:///d:/antigravity-chat1me/netlify.toml) automatically.
4. Click **Deploy site**.

---

## 3. Connecting a Custom Domain (e.g., `kiranrajvanshi.dev`)

Once deployed on Vercel or Netlify:

### On Vercel:
1. Go to **Project Settings** > **Domains**.
2. Type your domain: `kiranrajvanshi.dev` and click **Add**.
3. In your domain registrar (Namecheap, GoDaddy, Cloudflare, Google Domains):
   - Add a `CNAME` record: `cname.vercel-dns.com` for `www`
   - Add an `A` record pointing to Vercel's IP (`76.76.21.21`) for apex `@`

### On Netlify:
1. Go to **Site Configuration** > **Domain Management** > **Custom domains**.
2. Add `kiranrajvanshi.dev` and follow the DNS verification prompts.

---

## 4. How to Update Content & Personal Photo

- **Replace Photo**: Drop your photo file directly into `public/assets/profile.jpg` (or `profile.png` and update the reference in [Hero.tsx](file:///d:/antigravity-chat1me/src/components/Hero.tsx)).
- **Update Information**: Edit [src/data/portfolioData.ts](file:///d:/antigravity-chat1me/src/data/portfolioData.ts) to update social links, project descriptions, or contact information.
- **Redeploy**: Simply run `git add . && git commit -m "Update portfolio" && git push` — Vercel / Netlify will automatically build and publish your updates.
