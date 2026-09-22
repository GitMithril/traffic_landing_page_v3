---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface: `/` (src/app/page.tsx) — Doomsday Studios marketing landing page

**Mode:** Persuade. **Audience:** scaling founders/growing brands juggling disconnected freelancers/agencies for content + paid media. **Job:** understand Doomsday is one connected team, not another vendor, and book a call (or self-qualify out). **Proof/content:** `content.md` (verbatim copy, stats, 3 real named testimonials, pricing), brand assets in `public/`. **Constraints:** black+orange brand palette in light mode (user-pinned), doomsday.studio as spacing/type reference, GradientWaves (`@react-bits`) hero background, the `card-fan-carousel` component adapted to text-only branded quote cards (no fabricated client photos/logos — real assets pending), MagicUI for supporting accents.

## Direction contract

**THESIS:** One connected creative + performance team, proven through unbroken continuity — not the five-panel "content / paid / brand / web" agency menu every competitor ships as disconnected service cards. Every section demonstrates connection (recurring visual throughline, not just a claim in the copy).

**OWN-WORLD:** Warm-white paper ground (`#FFFFFF` / `#F7F6F4`), near-black ink (`#1A1A1A`, never pure black for body text). The Doomsday brand gradient `#D8220C → #FF4400 → #F4631E` carried at full commitment through the GradientWaves hero field, testimonial-card washes, and CTA bands — never as gradient text (banned by craft floor). True black `#0A0A0A` reserved structurally: primary buttons, nav-on-scroll state, and the closing full-bleed CTA band. `Inter` (variable, weights 500–900) for every heading and UI element; `Playfair Display` italic used exclusively for testimonial pull-quotes, nowhere else. Hairline 1px borders (`#E7E5E2`), no drop-shadow card scaffolding — flat, editorial, confident register matching the reference site's restraint.

**STORY:** A scaling founder arrives mid-fatigue from coordinating multiple freelancers/agencies. Within one viewport they see Doomsday is a single connected team, not another vendor. They scroll through real proof (stats, named client voices), see the four-discipline offer and the four-step process, self-qualify against an explicit "who this is for / not for" split, and either book a call or leave with a clear no — never mid-funnel confusion.

**FIRST VIEWPORT:** Full-bleed `GradientWaves` canvas behind the hero, tuned low-amplitude/warm so type stays legible on white. The ICP line ("For scaling founders") renders as an integrated qualification tag (icon + label, sitting beside/above the headline as a real compositional element, not a generic gray eyebrow label — it carries the audience claim, not decoration). Headline in `Inter` 800 at display scale, left-aligned, short line breaks. Sub-paragraph at 65–75ch measure. Primary CTA: solid black pill, orange glow/underline on hover, directly followed by the "boost conversion 3x in 30 days" microline in the same eye path as the action — the promise and the action read together.

**FORM:** Editorial-agency own-world direction, chosen directly from the user's pinned brief (palette, light mode, doomsday.studio reference, required components, content.md section order) rather than run through `concept-seed`'s tournament: the brief already pins world, palette, typography reference, and structural section order, leaving no genuinely open invention space at surface or world scope for a precisely specified request. No seed key.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Section map (content.md order)

1. Hero — GradientWaves bg, qualification tag, headline, CTA, microline
2. Metric bar — 4 stats, animated count-up
3. Problem — handoff breakdown, orange-accented resolution line (swapped from content.md's literal green note, per user decision)
4. Services — Content / Paid Media / Brand / Web, non-card-grid treatment (craft floor bans same-size icon+heading+text cards as page structure)
5. How we work — 01–04 process (numbers justified: sequence is a real ordered workflow)
6. Testimonials — fan-carousel adapted to branded text-only quote cards (3 real quotes, no fabricated photos)
7. Pricing — The Essentials, $1,250/mo, 2-month minimum
8. Qualification — fit / not-fit two-column split
9. Booking explainer — 01–03 (numbers justified: literal call structure)
10. Closing CTA — full-bleed black band, gradient headline treatment via color not gradient-text, location line, final CTA, scroll-triggered sticky CTA bar (interpretation of "Sticky CTA — 45 seconds": appears once the visitor scrolls past the hero, confirmed with user)

## Unresolved decisions

None — palette, mode, typography, required components, and testimonial-card treatment were confirmed directly with the user before this brief was written.
