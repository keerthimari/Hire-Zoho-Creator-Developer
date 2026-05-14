# ZoFlowX v3

A modern, premium iteration of the ZoFlowX website built on Next.js 14 (App Router). Same brand identity as v2 — refreshed content and polished interactions.

## What changed from v2

**Content** (full rewrite around the "Zoho Creator partner who actually ships" positioning):
- New hero with the Zoho Creator partner positioning
- New "The Why" section — 4 problem cards instead of 6 generic reasons
- New "Why ZoFlowX" — 6 differentiators (Authorized Partner, Deluge Specialists, Ship in Weeks, End-to-End coverage, Mobile-Ready, Transparent)
- "What We Build" services rebuilt around 6 service pillars (Custom App Development, Implementation, Workflow Automation, Integration, Customization & Migration, Ongoing Support)
- New "Deluge · The Engine Room" section with live code snippet and stats (100+ workflows, 99.7% uptime, 34 verticals)
- New "How We Work" 5-step process (Discovery → Scoping → Build → UAT → Launch)
- "How to Hire Us" — three engagement models (Fixed Scope, Dedicated Hire, On-Demand)
- New "Zoho Ecosystem" section — 12-app grid showing the full Zoho One coverage
- Updated FAQ with the 9 new questions
- Updated footer with Tirunelveli & Chennai office references
- "Let's replace your spreadsheets" consultation CTA

**Identity preserved** (no redesign):
- Same color palette (cream `#faf9f7`, navy `#0f172a`, primary blue `#1a56db`, tri-color gradient blue → purple → orange)
- Same fonts (Plus Jakarta Sans + Inter)
- Same Navbar with Zoho Authorized Partner badge & WhatsApp button
- Same Bootstrap 5 + inline-styles coding pattern
- Same Footer skeleton

**Polish added**:
- Animated gradient text (`grad-flow-text`) for hero & key headlines
- Refined hover effects — micro-rotations, gradient backgrounds on cards, animated icons
- Decorative floating "blobs" and grid backgrounds in hero/dark sections
- Backdrop-blur navbar when scrolled
- Smoother `cubic-bezier` easings across all transitions
- Number count-up animations on the hero & Deluge stats
- Improved scrollbar styling
- Better mobile menu animation
- Reduced-motion respected
- `:focus-visible` for accessibility

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 — redirects to /hire-zoho-developer.

## Stack

- Next.js 14.2 (App Router)
- React 18
- Bootstrap 5.3 + Bootstrap Icons
- No CSS-in-JS / Tailwind — pure CSS variables + inline styles (same pattern as v2)
