---
name: Doomsday Studios
description: One connected creative + performance team, proven through an unbroken editorial throughline
colors:
  surface: "#ffffff"
  surface-warm: "#f7f6f4"
  surface-black: "#0a0a0a"
  ink: "#1a1a1a"
  ink-muted: "#6f6d72"
  ink-on-black: "#f5f3f0"
  ink-on-black-muted: "#a9a6a3"
  line: "#e7e5e2"
  line-on-black: "rgba(245, 243, 240, 0.14)"
  accent: "#ff4400"
  accent-deep: "#d8220c"
  accent-light: "#f4631e"
typography:
  display:
    fontFamily: "var(--font-sans)"
    fontSize: "clamp(2.75rem, 6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "var(--font-sans)"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "var(--font-sans)"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-sans)"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "var(--font-sans)"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "normal"
  pull-quote:
    fontFamily: "var(--font-serif)"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
rounded:
  pill: "999px"
  card: "1.75rem"
  chip: "50%"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
  gap-sm: "0.75rem"
  gap-md: "2.5rem"
  gap-lg: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.ink-on-black}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.surface-black}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-outline-hover:
    textColor: "{colors.accent-deep}"
  quote-card:
    backgroundColor: "{colors.surface-black}"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "1.75rem"
---

# Design System: Doomsday Studios

## Overview

**Creative North Star: "The Unbroken Line"**

Doomsday's landing page argues one connected team over a disconnected vendor stack, and the design carries that argument structurally: a single hairline rule runs through the services list, a single accent-colored progress line fills through the process steps, and every section shares the same warm-white/near-black/brand-orange register with no visual seams between them. The register is editorial and restrained — warm-white paper grounds, near-black ink, hairline dividers, flat surfaces — with the brand gradient (`#D8220C → #FF4400 → #F4631E`) deployed at full commitment only where it is structurally earned: the hero's GradientWaves field, testimonial-card washes, and the closing CTA band's radial glow. True black (`#0A0A0A`) is reserved for primary buttons, the nav's scrolled state, and the full-bleed closing band — never as the page's resting background.

This is a code-led, no-comp build: the direction contract pinned palette, mode, typography, and section order before any layout decision, leaving composition (not identity) as the open variable. A finish-review pass removed one violation before ship — a generic gray eyebrow/kicker above the hero headline — replacing it with the ICP claim woven directly into the hero's body copy. That is not a system rule to preserve going forward; it is a defect the build avoided, and no kicker/eyebrow pattern exists anywhere in the shipped surfaces.

**Key Characteristics:**
- Warm-white paper grounds (`#FFFFFF` / `#F7F6F4`) with near-black ink (`#1A1A1A`), never pure black for body text
- Brand gradient carried at full saturation only in the hero canvas, testimonial-card washes, and the closing CTA glow — never as gradient text
- True black (`#0A0A0A`) reserved structurally: primary buttons, header-on-scroll, closing CTA band
- Flat, editorial register: hairline 1px dividers do the separating work: no drop-shadow card scaffolding
- Inter (500–900) for every heading and UI element; Playfair Display italic reserved exclusively for testimonial pull-quotes

## Colors

A warm-white editorial base with true black and a single warm-orange gradient held in reserve for high-conviction moments.

### Primary
- **Doomsday Orange** (`#ff4400`): the accent token. Used for interactive accents — focus rings, selection color, hover states, small dot/rule markers, the "3x" emphasis word, checkmarks.
- **Doomsday Orange Deep** (`#d8220c`): the deeper gradient stop. Used for emphasized inline text (execution problem, connected-work claim), scrolled-nav CTA fill, sticky-bar CTA fill, process-step numerals.
- **Doomsday Orange Light** (`#f4631e`): the lightest gradient stop, used only within the three-stop brand gradient (GradientWaves crest color, quote-card wash, closing-band radial), never standalone as a UI color.

### Neutral
- **Paper White** (`#ffffff`): primary section background (hero, problem, pricing).
- **Warm Paper** (`#f7f6f4`): alternating section background (metrics, services, testimonials, booking explainer) — the tonal shift that separates sections without a border or shadow.
- **Near-Black Ink** (`#1a1a1a`): primary text color on light surfaces. Never pure `#000`.
- **Muted Ink** (`#6f6d72`): secondary/supporting text on light surfaces (subheads, captions, stat labels).
- **True Black** (`#0a0a0a`): structural black — primary button fill, header-on-scroll fill, closing CTA band background.
- **Ink on Black** (`#f5f3f0`): primary text on the true-black surfaces.
- **Muted Ink on Black** (`#a9a6a3`): secondary text on true-black surfaces.
- **Hairline** (`#e7e5e2`): all dividers, borders, and the services/process rule lines on light surfaces.
- **Hairline on Black** (`rgba(245,243,240,0.14)`): dividers on true-black surfaces (sticky CTA bar border).

### Named Rules
**The Reserved Black Rule.** True black (`#0a0a0a`) is not a background default; it appears only at three structural points (primary buttons, header once scrolled, the closing full-bleed band). Everywhere else the ground is warm white or warm paper.

**The No-Gradient-Text Rule.** The brand gradient renders as a field, wash, or glow — never as a text-fill effect. Confirmed by the direction contract and consistent across every shipped section (closing headline uses solid ink-on-black, not a gradient clip).

## Typography

**Display Font:** Inter (variable, weights 500–900), with ui-sans-serif/system-ui fallback
**Body Font:** Inter, same stack
**Accent Serif:** Playfair Display italic, with ui-serif/Georgia fallback — testimonial pull-quotes only

**Character:** A confident, heavy-weight grotesque (Inter at 700–800) carries every headline and UI label; Playfair Display italic is a single deliberate accent voice, reserved for quoted client language so it reads as a distinct "other person's words" register against Inter's house voice.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 6vw, 5.25rem)`, line-height 0.98, tracking -0.035em): closing CTA headline only.
- **Headline** (800, `clamp(2rem, 4vw, 3.25rem)`, line-height 1.04, tracking -0.03em): section headlines (problem, services, testimonials, pricing, qualification, booking explainer). Hero headline uses the same weight at a slightly tighter clamp (`clamp(2.5rem, 5.6vw, 4.75rem)`, 16ch max width) as the largest first-viewport instance.
- **Title** (700, ~1.2–1.4rem, tight leading): card/step titles (service discipline names, process step titles).
- **Body** (400, ~1–1.15rem, line-height 1.55, 65–75ch measure): paragraph copy; hero sub-paragraph is explicitly held to the 65–75ch contract measure (`max-w-[70ch]`).
- **Label** (600, ~0.85–0.95rem, tabular-nums where numeric): step numerals (01–04), stat labels, nav links.
- **Pull-quote** (400 italic, Playfair Display, ~1.05–1.15rem, line-height ~1.35): testimonial quotes only, always on the true-black quote-card wash.

### Named Rules
**The One Serif Rule.** Playfair Display appears in exactly one place — testimonial pull-quotes inside the quote-fan-carousel. It never appears in a headline, label, or button.

## Layout

Single max-width container (`max-w-[90rem]`, `px-6` mobile / `px-10` desktop) reused across every section. Sections alternate between white and warm-paper backgrounds as the only tonal separator between them — no borders or shadows mark section boundaries. Vertical rhythm is generous and consistent: `py-20`–`py-24` for compact sections (hero, metrics), `py-24`–`py-32` for content sections. Hairline horizontal or vertical rules (`border-[var(--color-line)]`) are the recurring structural device that threads sections together (metrics-bar stat dividers, services' single connecting rule, process's vertical progress line, pricing's divider, qualification's column divider) — this is the literal expression of the "unbroken line" thesis. Two-column splits (`md:grid-cols-[1.1fr_0.9fr]` or similar) appear in pricing and qualification for content/detail pairs; the services and process lists use a single continuous line with items hung off it rather than a card grid. Mobile collapses all multi-column layouts to a single stacked column with the connecting line reorienting from horizontal to vertical.

## Elevation & Depth

The system is flat by explicit contract: no drop-shadow card scaffolding. Depth is conveyed through tonal layering (white vs. warm-paper section backgrounds, true-black bands) and hairline dividers, not shadows. The two confirmed exceptions are functional, not decorative: the primary CTA button gets a soft orange glow shadow only on hover/focus (a state response, not a resting elevation), and the sticky CTA bar — a floating, fixed-position element that must read as detached from page flow — carries a soft ambient shadow at rest.

### Shadow Vocabulary
- **CTA hover glow** (`box-shadow: 0 0 0 1px var(--color-accent), 0 10px 30px -8px rgba(255,68,0,0.55)`): primary button hover/focus state only.
- **Sticky bar ambient** (`box-shadow: 0 12px 40px -12px rgba(10,10,10,0.45)`): the fixed sticky CTA bar at rest, justified by its floating/overlaid position.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadow appears only on the primary CTA's hover/focus state and on the one element that floats above page flow (sticky CTA bar).

## Shapes

Two recurring silhouettes: the full pill (`rounded-full` / 999px) for every clickable action (buttons, sticky-bar dismiss, carousel arrows, process-step dots), and a soft large rounding (`1.75rem`) reserved for the testimonial quote cards, the system's one card-shaped object. Everything else is rectilinear with no radius — section containers, dividers, the services/process line structure. Borders are hairline (1px, `#e7e5e2` on light surfaces, low-opacity white on black surfaces) and never decorative-weight.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`), `px-6 py-3.5` padding, `0.95rem` semibold label, small trailing arrow glyph (inline SVG, `stroke: currentColor`) that nudges right on hover.
- **Primary (solid):** true-black fill (`#0a0a0a`), `ink-on-black` text; hover adds a 1px orange ring plus a soft orange drop shadow and shifts text to white. Used for the main conversion action everywhere it appears (hero, pricing, booking explainer, closing CTA).
- **Outline/ghost:** transparent fill, hairline border, ink text; hover shifts border and text to orange-deep. Used for secondary actions (services' "See If We're a Fit").
- **On-black variant (closing CTA):** inverted — `ink-on-black` fill, true-black text, hover flips to orange-deep fill with white text.

### Cards / Containers
- **Corner Style:** `1.75rem` radius, used only by the testimonial quote card.
- **Background:** true black (`#0a0a0a`) with a radial brand-gradient wash layered at ~90% opacity plus a dark scrim, so the gradient reads as light hitting a black surface rather than a flat gradient fill.
- **Shadow Strategy:** none on the card itself; depth comes from the fan-carousel's rotation/scale/z-index staging (GSAP), not from shadow.
- **Border:** hairline white-at-10%-opacity.
- **Internal Padding:** `1.75rem` (mobile) / `2rem` (sm+).

### Iconography
Inline SVGs only (no icon font, no `<img>`), used sparingly and functionally: a directional arrow inside CTA buttons, chevrons on the testimonial carousel's prev/next controls, and small checkmark/X glyphs (Lucide `Check`/`X`, 14–16px) inside circular chips for the pricing feature list and the qualification fit/not-fit split. Icons are never used as the leading element of a decorative icon-over-heading pattern — the services section explicitly avoids an icon+heading+text card grid in favor of the single connecting-line list.

### Navigation
Fixed header, transparent over the hero, filling to true-black with a color-inversion of the wordmark once scrolled past 24px. Nav links are `0.9rem` medium weight, muted by default, full ink/white on hover. The "Book a call" pill is always present, top-right, solid on both header states.

### Number Ticker (signature component)
Animated count-up (`motion/react` spring, damping 60 / stiffness 100) triggered once each stat scrolls into view. Used only for the four metrics-bar stats; renders as `tabular-nums` inline with static prefix/suffix strings (`$`, `M+`, `K+`).

### Quote Fan Carousel (signature component)
GSAP-driven card fan: up to 7 visible cards staged in a rotation/scale/offset arc, hover-responsive (hovered card lifts and scales, neighbors push aside), paginated when more than 7 cards exist. This is the one place in the system where cards, drop-shadow-adjacent staging, and a secondary serif voice all combine — reserved for testimonials only, not a general card pattern.

## Do's and Don'ts

### Do:
- **Do** alternate white (`#ffffff`) and warm-paper (`#f7f6f4`) backgrounds section-to-section as the only separator; don't add a border or shadow at the seam.
- **Do** run a single hairline rule or accent progress-line through any sequential/ordered list of items (services, process) rather than boxing each item in its own card.
- **Do** hold body paragraph measure to 65–75ch.
- **Do** reserve Playfair Display italic exclusively for quoted client language.
- **Do** keep the brand gradient as a field/wash/glow (hero canvas, quote-card wash, closing-band glow), never as a gradient-clipped headline.
- **Do** gate any WebGL/animated background loop behind `prefers-reduced-motion`.

### Don't:
- **Don't** use a gray eyebrow/kicker label above a headline. The one instance drafted for the hero was removed in finish review and folded into body copy; the pattern is not part of this system.
- **Don't** add drop-shadow card scaffolding to services, process, pricing, or qualification content — this system separates content with tonal backgrounds and hairlines, not elevation.
- **Don't** use true black (`#0a0a0a`) as a section's resting background outside the three structural placements (buttons, scrolled nav, closing band).
- **Don't** introduce a same-size icon-over-heading card grid for the services/discipline list; the connecting-line treatment is the confirmed replacement for the generic four-panel agency layout this build is arguing against.
