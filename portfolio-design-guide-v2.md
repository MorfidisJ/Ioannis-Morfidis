# Portfolio Design Guide v2 — "Terminal Glass"

**Same aesthetic ambition. None of the friction.** This version keeps the cyberpunk-terminal-meets-liquid-glass identity but rebuilds every interaction so a recruiter can skim it in 30 seconds, a screen reader can navigate it, and a contact form actually collects your emails.

---

## 0. Design Thesis

One sentence a visitor should be able to say after 5 seconds: *"This person builds real things and has real taste."*

The site proves that with two claims running in parallel, never competing for the same pixel at the same time:

- **The logic claim:** a developer who thinks in systems (terminal, code blocks, structured data).
- **The craft claim:** a developer with visual taste (glass, light, restraint).

Everything below exists to serve one of those two claims. If a decoration doesn't serve either, it's cut.

---

## 1. Design Tokens

### Color (4–6 named values, not a rainbow)

| Name | Hex | Use |
|---|---|---|
| `void` | `#050505` | Base background |
| `glass` | `rgba(255,255,255,0.06)` | Panel fill |
| `glass-border` | `rgba(255,255,255,0.12)` | Panel edges |
| `signal-green` | `#39FF88` | Terminal text, system status |
| `signal-yellow` | `#F6E642` | Hero accent, hover state, the *one* pop of warmth |
| `fog` | `#9AA0A6` | Secondary/body text on dark |

Two accent colors, not five. Green means "system," yellow means "you, the human, made a choice here" (hover, active nav, CTA). Never mix them in the same component — that's how you avoid the "AI generated neon soup" look.

### Type (2 roles, used with restraint)

- **Display:** a condensed, high-contrast grotesk (e.g. *Neue Machina* or *General Sans*, semibold+) — used only for your name and section titles. Max 3 uses per screen.
- **Utility/body:** `JetBrains Mono` for anything technical, labeled, or numeric — code, dates, nav labels, form prompts.
- Everything else (project descriptions, bios) — a plain, highly legible sans (e.g. *Inter*), **not** monospace. Long-form mono text is a real readability tax; save mono for short technical strings.

### Layout concept

Vertical scroll, one dominant idea per screen. No scroll-jacking, no horizontal hijack of the wheel. Motion earns its place at *transitions between* sections, not as a permanent gimmick within one.

### Signature element

**The live JSON hero block** is the one thing this site should be remembered for — a real, editable object that changes the page state when clicked. Everything else (glass panels, terminal contact form) supports it; nothing else competes with it for "most interesting element on the page."

---

## 2. Global Rules (apply everywhere)

- **Contrast floor:** all body text on `void` must hit at least 4.5:1. `fog` (#9AA0A6) on `#050505` clears this — verify any new text/background pairing before shipping.
- **Focus states are visible, always.** Every interactive element gets a `focus-visible` ring in `signal-yellow`. This is non-negotiable — it's the single most common accessibility failure on "creative" portfolios.
- **`prefers-reduced-motion` is respected.** Every animation (gradient drift, boot sequence, hover glow) has a static fallback. This isn't a nice-to-have; some visitors have vestibular disorders triggered by motion, and some are just on a battery-saving laptop.
- **Nothing important is mouse-only or hover-only.** If a hover reveals content, that content must also be reachable by keyboard focus and by tap on mobile.
- **The site works with JavaScript failing halfway through.** Progressive enhancement: HTML content (your name, project titles, contact info) exists in the DOM before any animation library mounts.

---

## 3. Section 1 — Hero (rebuilt)

**The old version:** a mandatory 2.5s boot animation blocking the name and work, every single visit.

**The fix:** the boot sequence becomes a **1-second atmospheric flourish that layers *behind* content that's already legible**, not a gate in front of it.

```
[ 0.0s ]  Name and nav are already visible at full opacity.
[ 0.0–0.8s ]  A thin strip of green terminal text types itself out
              ABOVE the name — small, secondary, skippable —
              e.g. "> SYSTEM READY · CSE STUDENT · CO-FOUNDER, UNIMATES"
[ any time ]  Pressing any key or clicking anywhere instantly completes it.
```

You get the terminal flavor without making anyone wait for your name to render. First-time visitors get a nice touch; repeat visitors (recruiters revisiting your tab) never see the same 2.5 seconds twice.

**Layout:**

- **Left:** your name, one line, `text-6xl` to `text-8xl` (not 12rem — at that size on a laptop screen it usually forces awkward wrapping or overflow; test at 1440px and 375px before committing to a number).
- **Right:** the JSON hero block — real, semantic, and accessible:

```javascript
const Developer = {
  status: "CSE Student",
  stack: ["React", "Next.js", "Java", "Tailwind"],
  currentFocus: "Architecting the unexpected.",
  render: () => <Experience />
}
```

Clicking a value (e.g. `"Next.js"`) swaps an accent color or the `currentFocus` line elsewhere on the page — same idea as before, but implemented as real `<button>` elements styled to look like code tokens, so it's keyboard-operable and announced correctly by a screen reader (`aria-label="Show Next.js projects"`, not a bare `<span onClick>`).

**Cut:** the animating gradient text on the name. A gradient gimmick on your own name reduces legibility exactly where legibility matters most. Save the gradient for accents, not for your own identity.

---

## 4. Section 2 — Projects ("The Archive")

**The old version:** scroll-jacked horizontal carousel, one project per full screen.

**The fix:** normal vertical scroll, but each project still gets a full-bleed, cinematic treatment — you keep 90% of the drama and all of the usability.

```
┌─────────────────────────────┐
│  [full-bleed muted image]   │  ← scroll normally
│  ┌───────────────────────┐  │
│  │ glass card, bottom-left│ │
│  │ UniMates               │ │
│  │ Co-founder / Developer │ │
│  │ Roommate-matching algo │ │
│  │ → national media       │ │
│  └───────────────────────┘  │
└─────────────────────────────┘
        ↓ normal scroll
┌─────────────────────────────┐
│  PANTELEOS .NRG              │
│  ...                          │
└─────────────────────────────┘
```

Each project section still bursts from muted to full color on hover/focus (the visual payoff from the original stays intact) — but a visitor with a trackpad, a touchscreen, or a keyboard now navigates it exactly the way every other website works. Add a slim project-index rail on the side (`01 UniMates · 02 PANTELEOS · 03 TEDx · 04 Epirus`) as a scroll-spy nav — here numbering is justified, since these genuinely are a sequence you're presenting in order.

Keep the four projects and their individual framing (startup / structural-engineering grid / TEDx red-black / fintech terminal) exactly as originally conceived — that differentiation is good and should stay.

---

## 5. Section 3 — Technical Arsenal & Academia

**The old version:** draggable, physics-based skill tags via `matter.js`.

**The problem:** fun for eight seconds, then it's an accessibility dead-end (unusable by keyboard/screen reader) and it doesn't communicate skill level any better than text — dragging "Java" around a box tells nobody anything about your Java ability.

**The fix — keep the "not boring progress bars" instinct, lose the physics:**

- Skills render as a bento grid of glass chips, grouped by category (`Languages`, `Frameworks`, `Tools`).
- On load, each chip does one subtle, GPU-cheap entrance animation (staggered fade + 8px rise) — orchestrated once, not continuous.
- On hover/focus, a chip lifts slightly and shows a one-line context string pulled from your real experience (e.g. `Java → 2 years, TA for OOP course`). This is more informative than a physics toy *and* it's real content, which is what recruiters are actually scanning for.
- Every chip is a real `<li>` inside a `<ul>`, tab-reachable, with the context string in a visually-hidden `aria-describedby` node for screen readers.

Academia card stays as designed — clean, minimal, grounding. No changes needed there; it already does its job.

---

## 6. Section 4 — Contact ("The Terminal")

**The old version:** a simulated command line with no real form fields.

**The fix — same look, real inputs underneath.** This is the highest-value screen on the entire site (it's where opportunities convert), so it gets the least amount of gimmick.

```html
<form aria-label="Contact form">
  <label for="name">&gt; ENTER_NAME:</label>
  <input id="name" name="name" type="text" autocomplete="name" required />

  <label for="email">&gt; ENTER_EMAIL:</label>
  <input id="email" name="email" type="email" autocomplete="email" required />

  <label for="message">&gt; ENTER_MESSAGE:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">&gt; EXECUTE: initiate_contact.sh</button>
</form>
```

Style these with the terminal aesthetic (blinking cursor caret via CSS, `signal-green` text, monospace, no visible "box" chrome) — visually indistinguishable from the original concept. But they're real `<input>`/`<textarea>` elements: browser autofill works, mobile keyboards switch correctly (email keyboard for the email field), and validation errors are announced (`aria-live="polite"` region showing `> ERROR: EMAIL_FORMAT_INVALID` in-character, rather than a silent failure).

On submit: keep the "TRANSMISSION SENT" glitch-text confirmation — that's a nice, low-cost payoff moment with zero accessibility cost as long as the success message is also pushed to the `aria-live` region.

---

## 7. Tailwind Execution Cheat Sheet (updated)

```
Glass Panel:
  bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
  shadow-[0_4px_30px_rgba(0,0,0,0.5)]

Terminal Text:
  text-[#39FF88] font-mono drop-shadow-[0_0_8px_rgba(57,255,136,0.6)]

Accent Hover / Active (keyboard-visible too):
  hover:text-[#F6E642] focus-visible:text-[#F6E642]
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F6E642]
  transition-colors duration-300 ease-in-out

Reduced Motion Guard (put near the top of globals.css):
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

Liquid Background:
  Same as before (animated radial-gradient in a fixed -z-10 div) —
  just make sure it's covered by the reduced-motion guard above.
```

---

## 8. Pre-Launch Checklist

- [ ] Tab through the entire site with a keyboard only — every interactive element reachable and visibly focused
- [ ] Test with `prefers-reduced-motion: reduce` enabled — site is fully usable, nothing broken
- [ ] Run a contrast checker on body text against the void background
- [ ] Submit the contact form with a screen reader running — confirm labels and error/success states are announced
- [ ] Load the site on a throttled connection — confirm name and nav render before any JS-driven animation
- [ ] Test hero and project sections at 375px, 768px, and 1440px widths

---

**What stayed the same:** the void-and-glass identity, the neon accent system, the JSON-hero concept, the four-project structure, the terminal voice throughout. **What changed:** every place where the aesthetic was quietly taxing the visitor's patience, mouse-dependency, or ability to actually reach you now does its job without asking them to pay for it.
