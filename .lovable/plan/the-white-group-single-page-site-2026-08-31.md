# THE WHITE GROUP — Single-Page Site

A faithful, responsive build of the supplied mockup: premium editorial, coastal, quiet-confidence. No redesign.

## Note on the logo

Both uploaded files are the same full-page mockup image — a standalone pelican logo file was not included. I'll crop the logo directly out of the mockup at full resolution: the dark-on-white version from the header for the nav, and the white/ivory version from the footer for the dark footer. Both get uploaded as CDN assets. If you have the original logo file (PNG/SVG with transparency), send it and I'll swap it in — that will look sharper.

## Design system

- Palette (tokens in `src/styles.css`, oklch): ivory/warm white background (dominant), deep midnight navy, muted ocean teal, soft coastal blue, charcoal, restrained warm sand/gold accent.
- Type: Cormorant Garamond for editorial headings, Inter-alternative clean sans (Jost/Work Sans) for nav, body, labels, buttons; a refined script (Petit Formal Script / Dancing Script-class) used *only* for "Insight. Discernment. Direction. Impact." Loaded via `<link>` in the root route head.
- Restraint: minimal border radius, thin 1px rules, hairline gold dividers, letterspaced small caps for labels, near-imperceptible transitions only.

## Imagery (generated, photographic, not illustrated)

1. Hero: brown pelican on rocky shoreline over calm blue water, soft coastal light — right side, blending left into ivory via a gradient mask.
2. CTA: coastal rocky shoreline at sunrise/sunset with generous negative space.
3. Offerings background: subtle dark navy water texture.
4. Ring graphics, capability icons (compass, wave, mountain, lighthouse, birds) and the small pelican line mark drawn as inline navy SVG line art — no colorful icon sets.

## Page structure

Single route at `/` composed of section components in `src/components/`:

- `SiteNav` — white bar, logo left, ABOUT / WHAT WE DO / WHO WE SERVE / APPROACH / INSIGHTS / CONTACT, navy INVITATION ONLY button. Mobile: hamburger with a clean full-width panel.
- `Hero` (`#about`) — split ivory/photo, headline "Clarity for What's Next. / Direction for What Matters.", gold rule, eyebrow copy, script accent, EXPLORE OUR APPROACH button.
- `WhatWeDo` (`#what-we-do`) — centered heading + subcopy, five columns with vertical separators, line-art icons, gold accent line under each. Responsive: 5 → 2/3 → 1.
- `Offerings` (`#who-we-serve`) — full-width navy with water texture, three columns, imperfect ring above each (teal / silver / sand), ivory type, gold pricing, teal engagement line.
- `ApproachCta` — two columns: left shoreline photo with overlay copy, gold divider, REQUEST AN INTRODUCTION; right (`#approach`) warm white, OUR APPROACH, four numbered steps with vertical rules.
- `PhilosophyStrip` (`#insights`) — muted teal band, pelican line mark, "WE WORK WHERE WATER MEETS LAND." plus four principles: CLARITY OVER NOISE, HUMANITY OVER EGO, OWNERSHIP OVER DEFAULT, INTENTION OVER INHERITANCE.
- `SiteFooter` (`#contact`) — midnight navy, light logo left, center copy + THEWHITEGROUP.US, right contact block with minimal mail/phone/pin SVG icons (mailto + tel links).

All copy lives in a single `src/content/site.ts` module so it's easy to edit.

## Interaction

Nav links and buttons smooth-scroll to `#about`, `#what-we-do`, `#who-we-serve`, `#approach`, `#insights`, `#contact` via CSS `scroll-behavior` plus scroll-margin offsets for the sticky nav. No fake testimonials, logos, or statistics.

## Technical

- React + TypeScript + Tailwind v4 tokens; semantic `<header>/<section>/<footer>`, one H1, accessible focus/hover states, `loading="lazy"` + explicit dimensions on non-hero images (hero eager).
- Route `head()` on `/` with White Group title, description, og/twitter tags.
- No new dependencies.
