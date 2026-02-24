# Vatix Landing Page Trial

## Goal

Recreate the Vatix Lone Worker Device landing page (vatix.com/lp/lone-worker-device)
as a Next.js page, matching the existing design as closely as possible.

## Brand

* Primary yellow: #FFC83D
* Dark/navy: #1A1A2E
* Clean, modern, professional SaaS style
* Font: Roboto (weights: 300, 400, 500, 600, 700)
* Match spacing, and visual hierarchy from the original

## Tech Stack

* Next.js (App Router)
* Tailwind CSS
* TypeScript
* Vercel deployment

## Rules

* Download images locally to /public/images/ — do not hotlink to Webflow CDN
* Forms: use placeholder divs with comments (we'll add HubSpot embeds later)
* Must be fully responsive
* Run npm run build after every change to verify no errors

## Reference Files (in /reference/)

All scraped via Firecrawl API on 2024-02-24. These are the source of truth for building the page.

| File | Description |
|------|-------------|
| `lone-worker-device.html` | Full HTML (120K) of the landing page — includes hero, form, all sections, CSS classes, inline SVGs, exact structure |
| `lone-worker-device-firecrawl.md` | Markdown version of page content |
| `lone-worker-device-screenshot.png` | Full-page screenshot for visual reference |
| `homepage.html` | Vatix homepage HTML — use for header/footer structure |
| `homepage-firecrawl.md` | Homepage markdown |
| `image-urls.txt` | All 93 image URLs to download (one per line) |
| `image-urls.json` | Categorized image URLs (56 SVGs, 25 AVIFs, 8 PNGs, 3 WebPs, 1 JPG) |

## Page Sections (top to bottom)

1. **Header/Navbar** — White bg, Vatix logo left, nav center (Solutions/Customers/Resources/Company dropdowns), Login + Contact Us + Get a Demo buttons right
2. **Hero** — `section_form-header`, split layout: left has tagline "Lone Worker Device", h1 "Safe Pro Device", body text, 3 checkmark bullet points; right has product image carousel (6 angles) + quote form
3. **Quote Form** — "Get a Quote in 30 Minutes", fields: First Name, Last Name, Work Email, Phone, Company, device count dropdown (1-9, 10-49, 50-149, 150+), privacy checkbox, Submit button
4. **Trust Badges** — G2 badges row (class `g2-badges`)
5. **Customer Logos** — `section_logo`, scrolling marquee: "Join 500+ forward-thinking leaders...", logos: Siemens, Swissport, NHS, Cambridge, Coop, Intel, IAG, Highland Spring, Ineos, NG Bailey, Crown Estate, Danaher
6. **Testimonials** — `bg-color-alternative` dark bg, "What Our Customers Say", 3 cards with 5-star rating, quote, name, title, "Verified Review" badge
7. **How It Works** — Tabbed layout, 3 steps: "Activate the Alarm Instantly", "Speak to a Trained Operator", "Get the Fastest Possible Emergency Response" — each tab shows different image
8. **Features Grid** — `bg-color-secondary` dark bg, "Built with Powerful Features", 3×3 grid: 4G Device, 4G/HD Calls, Roaming SIM, 24/7 Monitoring, 7-Day Battery, Fast Charging, Location Tracking, Status Updates, Management Portal
9. **24/7 Monitoring Centre** — `bg-color-alternative` dark bg, two-column: left text "Supported by Our Dedicated 24/7 Alarm Monitoring Centre" + 3 bullet points + Learn More button; right image
10. **Platform Management** — Tabbed layout, "Manage Everything with Ease in One Platform", 3 tabs: Easy to Setup, Detailed Alarm Reports, Track & Monitor Engagement — each with screenshot
11. **Customer Case Studies** — `bg-color-alternative` dark bg, Swiper carousel, "Secure Your Future With Us", 11 company cards with logo, quote, role, "Read Full Story" link
12. **FAQ** — Two-column: "Frequently Asked Questions" left, 5 accordion items right
13. **Final CTA** — Centered, "Protect Your Lone Workers with Easy-to-Use Devices", "Get a Quote" button
14. **Footer** — Dark navy bg, multi-column: logo/address/phone/email/socials, H&S Solutions links, Care & Healthcare links, Resources links, Company links, trust badges row, legal links, copyright

## Next Steps — Build Instructions

1. **Initialise Next.js project** with Tailwind CSS and TypeScript (`npx create-next-app@latest`)
2. **Download all images** from `image-urls.txt` to `/public/images/` — use the filename from each URL
3. **Build Header component** — match `homepage.html` navbar structure
4. **Build Footer component** — match `homepage.html` footer structure
5. **Build landing page** — read `lone-worker-device.html` for exact content, CSS classes, and structure per section. View `lone-worker-device-screenshot.png` for visual reference
6. **Run `npm run build`** to verify no errors

## Key CSS Classes from Original (Webflow)

* `bg-color-alternative` — dark background sections (#1A1A2E)
* `bg-color-secondary` — dark background for features (#1A1A2E)
* `heading-style-h1` through `heading-style-h6` — heading sizes
* `text-size-medium` — body text size
* `text-color-white`, `text-color-alternate`, `text-color-primary` — text colors
* `text-highlight` — bold/emphasized text in bullet points
* `padding-section-large`, `padding-section-small` — section padding
* `container-large` — max-width container
* `button`, `button is-small`, `button is-link` — button variants
* `icon-embed-small`, `icon-embed-40`, `icon-embed-xsmall` — icon sizes

## Current Progress (2026-02-24)

### Completed — v3 (colour & interaction accuracy pass)

The Next.js project is in `/vatix-landing/`. Run `cd vatix-landing && npm run dev` to preview.

**What's built:**
* Next.js project initialised (App Router, Tailwind CSS, TypeScript)
* 94 images downloaded to `vatix-landing/public/images/` (all local, no CDN hotlinks)
* `src/components/Header.tsx` (616 lines) — sticky navbar, mega dropdown for Solutions, dropdowns for Resources/Company, mobile hamburger menu
* `src/components/Footer.tsx` (291 lines) — dark 5-column footer, trust badges row, social links, legal bar
* `src/app/page.tsx` (~1000 lines) — all 14 page sections with interactive tabs, device carousel, logo marquee, case study scroller with prev/next arrows, FAQ accordion
* `src/app/layout.tsx` — Roboto font configured
* `src/app/globals.css` — brand colours, marquee/scroll animations, progress bar animation, FAQ transitions, scrollbar-hide utility
* `vatix-landing/next.config.ts` — `turbopack.root` set to fix workspace resolution with parent lockfile
* `npm run build` passes with zero errors

**v3 fixes applied (colour & interaction accuracy):**
* Page background gradient: #EEF6FF at top fading to white by G2 badges section (matching original)
* Tick bullet points: changed from yellow circle to #EEF6FF circle with #2E90FA blue checkmark (hero + 24/7 monitoring sections)
* Quote form: removed yellow banner bar, left-aligned "Get a Quote in 30 Minutes" heading
* Testimonials: background changed to #102A56, heading changed from yellow to white
* Star ratings: replaced PNG with inline SVGs for correct 1:1 proportions (no more squashed stars)
* How It Works: added auto-advancing progress bar (#2E90FA on grey) that fills over 5s then cycles to next step; icon background consistent #F2F4F7 (no yellow on active)
* Platform Management tabs: same auto-advancing progress bar; removed yellow background and icon inversion on active tab
* 24/7 Monitoring section: background changed to #102A56
* Case studies section: background changed to #102A56; "View All" button now yellow bg with #102A56 text
* Footer: background changed to #102A56
* Progress bar CSS animation added to globals.css (`animate-progress-fill`, 5s linear fill)

**Previous versions:**
* v2 — visual polish pass (yellow form banner, full-colour logos, Learn More button, case study arrows, CTA shapes, section padding)
* v1 — initial build (all sections, basic styling)

**Key colour mappings (original → recreated):**
* Dark sections (testimonials, 24/7 monitoring, case studies, footer): #102A56
* Page top gradient: #EEF6FF → #FFFFFF over ~900px
* Progress bars (How It Works, Platform tabs): #2E90FA on #E4E7EC
* Tick icons: #2E90FA check on #EEF6FF circle
* Brand yellow (buttons, CTA): #FFC83D

**What still needs work:**
* Form section is placeholder HTML — HubSpot embed to be added later
* All nav/footer links point to `#` — update with real URLs when ready
* Mobile responsiveness may need fine-tuning on specific breakpoints
* Image optimisation — some Next.js Image components may need width/height adjustments

## Key Files

| File | Purpose |
|------|---------|
| `vatix-landing/src/app/page.tsx` | Main landing page — all 14 sections |
| `vatix-landing/src/components/Header.tsx` | Sticky navbar with dropdowns |
| `vatix-landing/src/components/Footer.tsx` | Dark footer with 5 columns |
| `vatix-landing/src/app/globals.css` | Custom animations and utilities |
| `vatix-landing/src/app/layout.tsx` | Root layout with Roboto font |

## Taking Comparison Screenshots

A Playwright script at `comparison/screenshot.mjs` takes consistent full-page screenshots for visual comparison. It handles:
* Fixed 1440px viewport width (so both screenshots are the same width)
* Scrolls the full page incrementally to trigger lazy-loaded images (Next.js `<Image>` components)
* Auto-dismisses cookie consent banners on external sites
* Scrolls back to top before capturing

**Prerequisites:** `playwright` is installed at the project root (`npm install playwright`). Playwright Chromium browser must be installed (`npx playwright install chromium`).

**Usage:**
```bash
cd "C:/Projects/Landing Page Creation"

# Screenshot the local dev server (must be running: cd vatix-landing && npm run dev)
node comparison/screenshot.mjs http://localhost:3000 "comparison/recreated-local-v2.png"

# Screenshot the original live page
node comparison/screenshot.mjs https://vatix.com/lp/lone-worker-device "comparison/original-vatix-v2.png"
```

**Naming convention:** Use `-v2`, `-v3` etc. suffix to distinguish from previous iterations. Previous screenshots are kept for reference.

**Comparison files in `/comparison/`:**
* `original-vatix.png` / `recreated-local.png` — v1 screenshots (pre-polish)
* `original-vatix-v2.png` / `recreated-local-v2.png` — v2 screenshots (after visual polish)

## Firecrawl API Key

Stored in `.env` as `FIRECRAWL_API_KEY` — available if further scraping is needed.
