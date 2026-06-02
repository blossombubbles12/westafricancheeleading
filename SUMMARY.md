# WACLG → WAC Rebrand & Page Creation

## Goal
- Complete rebrand from "West African Cheer Leaders Group (WACLG)" to **"West African Cheerleading (WAC)"** with a high-energy sports platform design
- Create all 10 pages from the provided brand document
- Fix `/membership` 404 by making it the canonical membership route
- Migrate all emails from `@westafricancheerleaders.org` → `@westafricancheerleading.org`

## Constraints & Preferences
- **Brand name**: "West African Cheerleading" (WAC), not WACLG
- **Colors**: Green `#096b38` (primary), Gold `#fab708` (highlights), Red `#de020c` (accents)
- **Logo**: `/waclogo.png`
- **Tagline**: "Empowering Youth. Building Champions." / "Uniting West Africa Through Cheerleading."
- **Domain**: wacleaders.org (unchanged)
- **Emails**: `@westafricancheerleading.org` (all migrated) — `info`, `membership`, `training`, `partnerships`, `media`
- **Pages (10)**: Home, About (+ Mission & Vision, Leadership), Programs, Competitions & Events, Membership, Training & Certification, News & Media, Partners & Sponsors, Volunteer, Contact Us
- **Nav**: Full 10-item header menu; `/community` redirects → `/membership`
- **Design**: Bold typography (Outfit), large section titles, glassmorphism, mobile-first, sports-focused, youth-energetic
- **Build system**: Next.js 16.1.6, React 19.2.3, Tailwind CSS v4, Framer Motion, Neon PostgreSQL, Cloudinary

## Progress

### Completed
- **Design system**: `globals.css` brand colors + CSS animations (shimmer, pulse-glow, marquee)
- **Layout**: `app/layout.tsx` — WAC metadata, JSON-LD, OG/Twitter cards
- **Header**: `components/layout/Header.tsx` — WAC logo, full 10-page nav with dropdowns (About → Mission & Vision, Leadership)
- **Footer**: `components/layout/Footer.tsx` — WAC logo, quick links, all 5 email contacts
- **Homepage**: Hero carousel (3 slides), impact counters (15 countries/100+ members/50+ comps/2024), focus areas (6 WAC programs), mission, 15-country grid, membership benefits, cheerleading values, CTA
- **About page** (`/about`): WAC story, pillars, timeline, vision/mission, gallery
- **Leadership** (`/about/board`): Executive Board cards
- **Programs** (`/programs`): 8 development programs, member nations, benefits
- **Events** (`/events`): Competitions & Events
- **Membership** (`/membership`): Canonical membership page
- **Training** (`/training`): Training & Certification (coach cert, judge cert, athlete workshops, safety, event management)
- **Partners** (`/partners`): 8 partner types, 6 partnership benefits
- **Volunteer** (`/volunteer`): 8 opportunity types, application CTA
- **News & Media** (`/news`, `/media`): WAC-branded content sections
- **Contact** (`/contact`): Full contact form + 5 email contacts
- **Community**: `/community` 301-redirects to `/membership`
- **Admin**: Login page and sidebar rebranded to WAC
- **Email migration**: All 14 occurrences of `@westafricancheerleaders.org` → `@westafricancheerleading.org` across all files
- **Build**: Verified — all routes compile cleanly

### Pending
- Review database seed data for old `@westafricancheerleaders.org` email refs
- Replace `/waclogo.png` with final polished logo
- Update social media handles to match WAC branding
- Deploy to verify `/membership` no longer 404s

## Key Decisions
- `/community` → 301 redirect to `/membership` (canonical); backward-compatible
- Cloudinary folder paths stay `waclg/` (preserves existing media); only display text changed
- 5 new pages (membership, programs, training, partners, volunteer) follow the doc structure with green/gold/red design system
- 10 nav items in header with 2 dropdowns (About → Mission & Vision, Leadership)
- Media email `media@westafricancheerleading.org` added alongside standard 4
- Old `bg-accent/20` CSS class no longer maps to amber; manual hex/specificity used for gold elements

## Relevant Files
| File | Purpose |
|------|---------|
| `app/globals.css` | Brand colors + animations |
| `app/layout.tsx` | Root layout, metadata, JSON-LD |
| `components/layout/Header.tsx` | Full 10-page nav |
| `components/layout/Footer.tsx` | WAC footer with all emails |
| `app/(public)/page.tsx` | Homepage |
| `app/(public)/about/page.tsx` | About / Mission & Vision |
| `app/(public)/about/board/page.tsx` | Leadership |
| `app/(public)/programs/page.tsx` | Programs |
| `app/(public)/events/page.tsx` | Competitions & Events |
| `app/(public)/membership/page.tsx` | Membership (canonical) |
| `app/(public)/training/page.tsx` | Training & Certification |
| `app/(public)/news/page.tsx` | News |
| `app/(public)/media/page.tsx` | Media Gallery |
| `app/(public)/partners/page.tsx` | Partners & Sponsors |
| `app/(public)/volunteer/page.tsx` | Volunteer |
| `app/(public)/contact/page.tsx` | Contact |
| `app/(public)/community/page.tsx` | Redirects → /membership |
