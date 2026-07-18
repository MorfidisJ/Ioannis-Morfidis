# Ioannis Morfidis // Systems & Software Engineer — Portfolio OS

<div align="center">

![Version](https://img.shields.io/badge/Version-v2.4.0-39FF88?style=for-the-badge&labelColor=050505)
![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black&labelColor=050505)
![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=050505)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=050505)
![Oxlint](https://img.shields.io/badge/Oxlint-1.71.0-F6E642?style=for-the-badge&labelColor=050505)
![Accessibility](https://img.shields.io/badge/WCAG_2.1-AA_Compliant-10B981?style=for-the-badge&labelColor=050505)
![License](https://img.shields.io/badge/License-MIT-94A3B8?style=for-the-badge&labelColor=050505)

<br />

```bash
> guest@morfidis-terminal:~$ curl -s https://ioannis-morfidis.vercel.app/dossier.json | jq .status
[ "SYSTEM READY", "CSE STUDENT @ UOI", "CO-FOUNDER & CPO @ UNIMATES" ]
```

<br />

[![Terminal Glass OS Preview](/public/og-image.svg)](https://ioannis-morfidis.vercel.app/)

</div>

---

## ⚡ Overview & Design Philosophy

**Morfidis.OS v2.4.0** is a state-of-the-art personal portfolio web application built with **React 19** and **Vite 8**, showcasing the work of **Ioannis Morfidis**—Systems Architect, Software Engineer, and Co-Founder/CPO at [UniMates](https://unimates.net).

The application is unified under the **"Terminal Glass"** design system: a cyberpunk-inspired, disciplined design language that combines high-performance liquid glassmorphism (`backdrop-blur-xl`), strict color token governance, interactive command line interfaces, and rigorous **WCAG 2.1 Level AA accessibility compliance**.

### Key Architectural & UX Highlights

- **`TerminalWindow` Standardized Chrome**: A DRY, reusable window container featuring macOS-style traffic light window controls, command prompts, status badges, and accessible typography (`font-sans` body copy paired with `font-mono` prompts).
- **Interactive ARIA Composite Listbox**: The Hero section features a live, inspectable JSON configuration widget (`role="listbox"`) supporting full keyboard arrow navigation (`ArrowLeft`, `ArrowRight`, `Home`, `End`) and `aria-selected` state tracking.
- **High-Performance Architecture Index**: The Projects section eliminates horizontal carousel friction in favor of a vertical scroll index with instant category filtering (`All`, `React`, `System`, `Design`) and complete keyboard activation (`Enter` / `Space` parity).
- **Embedded Cal.com Scheduling**: Real-time architecture syncs and catch-up meetings embedded in a modal with dynamic iframe key remounting (`key={activeModalUrl}`) and smooth `animate-scale-up` transitions.
- **Honeypot & Velocity Guarded Dispatch**: Contact submissions powered by [Web3Forms](https://web3forms.com), protected client-side by hidden honeypots (`_gotcha`) and submission velocity checks (`< 2.5s` threshold) against automated spam bots.

---

## 🎨 Design Token System

The design identity avoids "neon soup" by adhering strictly to a restrained palette of 6 core tokens and 3 explicit typography roles:

### Color Palette & Contrast Strategy

| Token Name | Color Value | Role & Usage | WCAG AA Contrast |
| :--- | :--- | :--- | :--- |
| **`void`** | `#050505` | Deep space background canvas (`bg-void`) | Root Baseline |
| **`glass`** | `rgba(255, 255, 255, 0.06)` | Translucent panel interior (`.glass-panel`) | — |
| **`glass-border`** | `rgba(255, 255, 255, 0.12)` | Subtle glassmorphic panel & chip border | — |
| **`panel-text`** | `#D0D5DD` | Primary text inside `.glass-panel` / `.glass-chip` | **4.6:1 (Pass)** |
| **`signal-green`** | `#39FF88` | System readiness, active states, terminal highlights | **12.1:1 (Pass)** |
| **`signal-yellow`** | `#F6E642` | Interactive human choice (hover, active, focus rings) | **11.4:1 (Pass)** |
| **`fog`** | `#9AA0A6` | Page-level body copy directly on `void` canvas | **4.54:1 (Pass)** |

### Typography Discipline

- **`Outfit` (Display Heading)**: `wght@600-900`, `tracking-tight`, responsive `text-5xl sm:text-7xl xl:text-8xl` with `text-wrap: balance` to prevent awkward line breaks.
- **`JetBrains Mono` (Technical / Code)**: Used exclusively for CLI prompts, JSON keys, metadata tags, and system diagnostics (`> SESSION_END //`).
- **`Inter` (Body & Descriptions)**: Used across all long-form paragraphs, project bios, and terminal explanations to ensure maximum scanning ergonomics without monospace reading fatigue.

---

## 🚀 Quick Start & Local Development

### Prerequisites

- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MorfidisJ/Ioannis-Morfidis.git
   cd Ioannis-Morfidis
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory (or copy `.env.example` if provided):
   ```env
   # Web3Forms API Access Key for Direct Contact Submissions
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

   # Application Version String
   VITE_APP_VERSION=v2.4.0
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Available Scripts

| Command | Action |
| :--- | :--- |
| **`npm run dev`** | Starts the Vite development server with instant Hot Module Replacement (HMR). |
| **`npm run build`** | Bundles the application for production to `dist/` with optimized chunk splitting. |
| **`npm run lint`** | Runs **Oxlint** across all JavaScript/JSX files (`0 warnings, 0 errors` target). |
| **`npm run preview`** | Locally serves the production `dist/` bundle for post-build verification. |

---

## ♿ Accessibility & Performance Verification

Every component is audited against **WCAG 2.1 Level AA** compliance standards:

- **Focus Order & Trapping**: Mobile navigation drawer implements focus confinement (`onKeyDown` Tab trapping) when active.
- **Universal Focus Rings**: All interactive elements (`<button>`, `<a>`, `<input>`, `<textarea>`) feature high-visibility `focus-visible:outline-2 focus-visible:outline-signal-yellow focus-visible:outline-offset-4` indicators.
- **Reduced Motion Guard**: Global `@media (prefers-reduced-motion: reduce)` rules instantly disable ambient liquid background animations and transitions for sensitive users.
- **ARIA Live Regions**: Form errors, loading states, and success indicators announce instantly to screen readers via `aria-live="polite" aria-atomic="true"`.

---

## 📁 Project Structure

```text
d:\Ioannis-Morfidis\
├── public/
│   ├── favicon.svg             # Vector favicon asset
│   ├── og-image.svg            # Scalable OpenGraph social share graphic (1200x630)
│   ├── og-image.png            # Raster OpenGraph social share preview fallback
│   └── Ioannis Morfidis Resume.pdf
├── src/
│   ├── components/
│   │   ├── ContactSection.jsx  # TerminalWindow form with Web3Forms + honeypot
│   │   ├── Footer.jsx          # Dynamic versioning & sign-off bar
│   │   ├── HeroSection.jsx     # ARIA listbox inspectable JSON + typing effect
│   │   ├── LiquidBackground.jsx # Ambient GPU-accelerated floating spheres
│   │   ├── Navbar.jsx          # Sticky glass navigation with focus trap
│   │   ├── ProjectsSection.jsx # Vertical scroll index with keyboard filter parity
│   │   ├── ResumeSection.jsx   # TerminalWindow resume breakdown & PDF download
│   │   ├── ScheduleSection.jsx # TerminalWindow Cal.com modal scheduling
│   │   ├── SkillsSection.jsx   # Technical arsenal categories & mastery chips
│   │   ├── SocialIcons.jsx     # Custom vector SVG icons (GitHub, LinkedIn, X)
│   │   └── TerminalWindow.jsx  # Reusable macOS-style traffic light container
│   ├── constants/
│   │   └── sectionIds.js       # Single source of truth (SECTION_IDS) for routing
│   ├── data/
│   │   └── portfolioData.js    # Structured JSON data models for all sections
│   ├── App.jsx                 # Root component with intersection scroll spy
│   ├── index.css               # Design tokens, glass utilities, & keyframes
│   └── main.jsx                # React 19 root mounting
├── tailwind.config.js          # Theme customization, OKLCH colors, & animations
└── package.json                # Project dependencies & build scripts
```

---

## 👨‍💻 Developer & Contact

**Ioannis Morfidis**  
*Systems Architect · Software Engineer · Co-Founder & CPO @ UniMates*

- **GitHub**: [@MorfidisJ](https://github.com/MorfidisJ)
- **LinkedIn**: [in/ioannis-morfidis](https://www.linkedin.com/in/ioannis-morfidis/)
- **Twitter / X**: [@MorfidisJ](https://twitter.com/MorfidisJ)
- **Email**: [morfidis.ioannis03@gmail.com](mailto:morfidisioannis@gmail.com)

<div align="center">
  <br />
  <code>&gt; SESSION_END // MORFIDIS.OS // COMPLIANT WITH WCAG AA &amp; REDUCED-MOTION</code>
</div>
