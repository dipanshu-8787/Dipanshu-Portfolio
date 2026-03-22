# Dipanshu Agnihotri — 3D Portfolio

A stunning, fully responsive 3D portfolio built with React + Vite + Tailwind + Framer Motion.

## 🚀 Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS v3**
- **Framer Motion** (animations)
- **Canvas API** (particle system in Hero)

## ✨ Features
- Animated loader with progress bar
- Custom cursor with trail (desktop)
- Scroll progress indicator
- 3D particle canvas hero with mouse parallax
- Typewriter role animation
- 3D tilt cards (About, Skills, Projects) — mouse-reactive perspective
- Animated skill bars
- Timeline-based Education section
- Fully responsive on all screen sizes (mobile → 4K)
- Smooth scroll navigation
- Gradient glows and atmospheric depth

## 📦 Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy
Works perfectly on **Vercel** or **Netlify**:
- Push to GitHub
- Connect repo on Vercel → Deploy ✅

## 📁 Structure
```
src/
├── App.jsx                  # Root with loader
├── main.jsx
├── index.css                # Global styles + fonts
└── components/
    ├── Navbar.jsx           # Sticky nav with mobile menu
    ├── Hero.jsx             # Particle canvas + typewriter
    ├── About.jsx            # 3D tilt card + stats
    ├── Skills.jsx           # Animated bars + soft skills
    ├── Projects.jsx         # 3D tilt project cards
    ├── Certificates.jsx     # Certs grid + training highlight
    ├── Education.jsx        # Alternating timeline
    ├── Contact.jsx          # Contact cards + footer
    ├── CustomCursor.jsx     # Dual-layer cursor
    └── ScrollProgress.jsx   # Top progress bar
```

## 🎨 Design
- Dark deep-space theme (`#050510` base)
- Cyan `#22d3ee` + Purple `#a855f7` accent system
- **Syne** display font + **Space Mono** for code
- Atmospheric glow orbs and grid overlays

## 🖼️ Adding Your Photo
1. Save your photo as `profile.jpg` (or `.png`)
2. Place it inside the `public/` folder: `portfolio/public/profile.jpg`
3. The Hero section will automatically show it

If no photo is found, it shows a fallback "DA" avatar automatically.

## 📧 Email Form Setup (EmailJS — Free)
1. Sign up at https://emailjs.com
2. Add Email Service → Gmail → copy **Service ID**
3. Create Template with vars: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → copy **Template ID**
4. Account tab → copy **Public Key**
5. Open `src/components/Contact.jsx` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`  
   - `YOUR_PUBLIC_KEY`

## 🔗 Google Drive Certificates
Open `src/components/Certificates.jsx` and replace `YOUR_FOLDER_ID_HERE` in the `DRIVE_LINK` with your actual Google Drive folder ID.
