# Advolve — 45-Minute Client Pipeline Audit Landing Page

## Original problem statement
Landing page for Advolve, a performance marketing agency in India. Sells one thing: a 45-minute 1:1 "Client Pipeline Audit" with founder Nishant Bhutani for ₹21, targeting relationship coaches in India charging ₹10,000+. Centrepiece: the published minute-by-minute agenda (6 segments). Mobile-first (Meta ads traffic, slow connections), WhatsApp-shareable OG preview, real shared midnight-IST countdown, sticky bottom booking bar, all CTAs → Razorpay, Meta Pixel PageView + click conversion, legal pages (Privacy, Terms, Cancellation & Rescheduling, Contact), thank-you page → Calendly.

## Architecture
- React (CRA/craco) SPA — no backend needed (all payments/scheduling via Razorpay + Calendly)
- framer-motion (masked hero reveal, scroll reveals), lenis (smooth scroll)
- @paper-design/shaders → LiquidMetalButton (sticky bar CTA), DotLoader (hero live indicator)
- Config-driven assets: `/app/frontend/src/config/site.js` (Razorpay URL, Calendly URL, Meta Pixel ID, YouTube video ID, VSL thumbnail, host photo, contact email)
- Meta Pixel loader: `/app/frontend/src/lib/pixel.js` (inactive until META_PIXEL_ID is set)
- IST countdown: `/app/frontend/src/hooks/useIstCountdown.js` (true midnight-IST, shared, resets daily)
- Routes: `/` landing, `/privacy-policy`, `/terms`, `/cancellation`, `/contact`, `/thank-you`

## User personas
- Relationship coach (India, ₹10k+ program), arriving from Meta ads on a phone, sceptical of "strategy calls"
- Founder Nishant — needs the page to filter serious buyers and preview properly on WhatsApp

## Implemented (2026-07-19 … session 1)
- Full landing page: kinetic masked hero, VSL inline YouTube player (click-to-play, placeholder video + branded placeholder thumbnail), editorial marquee, 6-fact highlights grid, why-book section, dark agenda centrepiece with running clock (00:00→00:45), about-meeting, host section, 6-item FAQ accordion, final CTA footer
- Sticky bottom bar: 45 mins · 1:1 · Google Meet, ₹21, real midnight-IST countdown, LiquidMetalButton booking CTA
- DotLoader "LIVE" indicator in hero badge row
- Legal pages + thank-you page with Calendly handoff
- SEO component (canonical/OG from live origin), llms.txt, Cabinet Grotesk / DM Sans / JetBrains Mono
- Verified: mobile + desktop screenshots, FAQ opens, countdown ticking correctly, all routes 200

## Placeholders to replace (all in src/config/site.js)
- RAZORPAY_URL, CALENDLY_URL, META_PIXEL_ID, YOUTUBE_VIDEO_ID, VSL_THUMBNAIL, HOST_PHOTO, CONTACT_EMAIL, logos (currently text wordmark)

## Backlog
- P0: Swap real Razorpay/Calendly/Pixel/YouTube/thumbnail/logos/host photo + bio
- P1: OG share image (1200×630) once real thumbnail arrives
- P2: WhatsApp click-to-chat fallback, Hindi locale toggle
