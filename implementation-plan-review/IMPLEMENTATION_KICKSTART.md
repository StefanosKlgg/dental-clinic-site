# Dental Implant Clinic Landing Page - Implementation Kickstart

## Project Overview

A high-converting, premium dental implant clinic landing page with integrated appointment booking system. Built with Next.js 16, Shadcn/UI, and Tailwind CSS. Fully responsive across mobile, tablet, and desktop with glass morphism effects and subtle animations.

---

## Design Tokens

### Color Palette (5 Colors Max)

```css
/* globals.css - Design Tokens */

:root {
  /* Primary - Coral/Orange (CTAs, Highlights) */
  --primary: 12 76% 71%;           /* #FF6B6B */
  --primary-foreground: 0 0% 100%; /* White text on primary */

  /* Secondary - Clinical Navy (Trust, Headers) */
  --secondary: 216 54% 23%;        /* #1A365D */
  --secondary-foreground: 0 0% 100%;

  /* Background - Off-White (Clean, Clinical) */
  --background: 210 40% 98%;       /* #F8FAFC */
  --foreground: 216 54% 23%;       /* Navy text */

  /* Muted - Soft Gray (Subtle elements) */
  --muted: 210 40% 96%;            /* #F1F5F9 */
  --muted-foreground: 215 16% 47%; /* #64748B */

  /* Accent - Light Coral (Hover states, Glass effects) */
  --accent: 12 76% 95%;            /* Soft coral tint */
  --accent-foreground: 216 54% 23%;

  /* Card - White with transparency for glass effect */
  --card: 0 0% 100%;
  --card-foreground: 216 54% 23%;

  /* Border */
  --border: 214 32% 91%;           /* #E2E8F0 */

  /* Ring (Focus states) */
  --ring: 12 76% 71%;              /* Primary coral */

  /* Radius */
  --radius: 0.75rem;

  /* Destructive (Error states) */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
}

.dark {
  /* Dark mode tokens if needed later */
  --background: 216 54% 11%;
  --foreground: 210 40% 98%;
  --card: 216 54% 15%;
  --card-foreground: 210 40% 98%;
  --primary: 12 76% 71%;
  --primary-foreground: 216 54% 11%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 216 54% 23%;
  --muted: 216 54% 20%;
  --muted-foreground: 215 20% 65%;
  --accent: 12 50% 20%;
  --accent-foreground: 210 40% 98%;
  --border: 216 54% 25%;
  --ring: 12 76% 71%;
}
```

### Color Usage Guidelines

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | #FF6B6B | CTAs, buttons, highlights, links |
| `--secondary` | #1A365D | Headers, nav, trust badges, footer |
| `--background` | #F8FAFC | Page background, sections |
| `--muted` | #F1F5F9 | Alternating sections, subtle backgrounds |
| `--accent` | Soft coral | Glass card overlays, hover states |

---

## Typography System

### Font Stack: Geist (Recommended)

```tsx
// layout.tsx - Font Configuration
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
```

### Type Scale

| Element | Class | Size | Weight | Line Height |
|---------|-------|------|--------|-------------|
| H1 (Hero) | `text-4xl md:text-5xl lg:text-6xl` | 36-60px | `font-bold` | `leading-tight` |
| H2 (Section) | `text-3xl md:text-4xl` | 30-36px | `font-semibold` | `leading-tight` |
| H3 (Card Title) | `text-xl md:text-2xl` | 20-24px | `font-semibold` | `leading-snug` |
| Body | `text-base md:text-lg` | 16-18px | `font-normal` | `leading-relaxed` |
| Small | `text-sm` | 14px | `font-normal` | `leading-normal` |
| Caption | `text-xs` | 12px | `font-medium` | `leading-normal` |

### Typography Best Practices

- Use `text-balance` on headings for optimal line breaks
- Use `text-pretty` on body paragraphs
- Maintain 45-75 character line length with `max-w-prose`

---

## Responsive Breakpoints

### Tailwind Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Default | 0-639px | Mobile |
| `sm:` | 640px+ | Large phones |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Desktop |
| `xl:` | 1280px+ | Large desktop |

### Layout Grid System

```tsx
// Container pattern
<div className="container mx-auto px-4 sm:px-6 lg:px-8">

// Section grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

---

## Glass Morphism Effects

### Card Glass Effect Classes

```css
/* Glass card utility classes */
.glass-card {
  @apply bg-white/70 backdrop-blur-md border border-white/20 shadow-lg;
}

.glass-card-strong {
  @apply bg-white/80 backdrop-blur-lg border border-white/30 shadow-xl;
}

/* Alternative with CSS custom properties */
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Usage Example

```tsx
<Card className="bg-white/70 backdrop-blur-md border-white/20 shadow-lg">
  <CardContent>...</CardContent>
</Card>
```

---

## Animation System

### Scroll Animations (Intersection Observer)

```tsx
// hooks/use-scroll-animation.ts
"use client"
import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
```

### Animation Classes

```css
/* globals.css - Animation utilities */

/* Fade up on scroll */
.animate-fade-up {
  @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
}
.animate-fade-up.visible {
  @apply opacity-100 translate-y-0;
}

/* Stagger children */
.stagger-children > * {
  @apply opacity-0 translate-y-4;
  animation: fadeUp 0.5s ease-out forwards;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Hover transitions */
.hover-lift {
  @apply transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl;
}

/* Button pulse for CTA */
.pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}
@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
```

---

## Component Architecture

### File Structure

```
/app
  /page.tsx                    # Main landing page (assembles sections)
  /layout.tsx                  # Root layout with fonts, metadata
  /globals.css                 # Design tokens, animations

/components
  /layout
    /header.tsx                # Navigation with burger menu
    /footer.tsx                # Footer with accreditations
    /mobile-bottom-bar.tsx     # Sticky mobile CTA

  /sections
    /hero-section.tsx          # Hero with CTA #1
    /services-section.tsx      # 3 service cards
    /before-after-section.tsx  # Before/After slider
    /testimonials-section.tsx  # Video + text testimonials
    /pricing-section.tsx       # Pricing packages with CTA #2
    /faq-section.tsx           # Accordion FAQ
    /cta-section.tsx           # Final CTA #3 (pre-footer)

  /booking
    /booking-dialog.tsx        # Modal booking form
    /booking-calendar.tsx      # Calendar date picker
    /booking-form.tsx          # Form fields
    /booking-success.tsx       # Success state

  /ui                          # Shadcn components (pre-installed)

/hooks
  /use-scroll-animation.ts     # Intersection observer hook
  /use-mobile.tsx              # Mobile detection (pre-installed)

/lib
  /utils.ts                    # cn() helper (pre-installed)
  /analytics.ts                # GA4 + Facebook Pixel helpers
```

---

## CTA Placement Strategy (Minimum 3)

| Location | CTA Text | Type | Priority |
|----------|----------|------|----------|
| **Hero Section** | "Book Your Free Smile Assessment" | Primary Button (Large) | HIGH |
| **After Services** | "Get Started Today" | Secondary inline | MEDIUM |
| **Pricing Section** | "Claim Your Package" | Primary per-card | HIGH |
| **Pre-Footer** | "Ready to Transform Your Smile?" | Full-width CTA section | HIGH |
| **Mobile Bottom Bar** | "Book Now" | Sticky floating | CRITICAL |
| **Header** | "Book Now" | Nav button | MEDIUM |

---

## Navigation & Burger Menu

### Desktop Navigation

```tsx
// Horizontal nav with Book Now CTA
<nav className="hidden md:flex items-center gap-8">
  <a href="#services">Services</a>
  <a href="#results">Results</a>
  <a href="#pricing">Pricing</a>
  <a href="#faq">FAQ</a>
  <Button>Book Now</Button>
</nav>
```

### Mobile Burger Menu

```tsx
// Using Shadcn Sheet component
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="h-6 w-6" />
      <span className="sr-only">Open menu</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-[300px]">
    {/* Mobile nav links */}
  </SheetContent>
</Sheet>
```

---

## Booking System Flow

### User Journey

1. User clicks any CTA button
2. Shadcn Dialog opens with booking form
3. Step 1: Select Service (Implants, Veneers, Smile Design)
4. Step 2: Select Date from Calendar
5. Step 3: Select Time Slot
6. Step 4: Enter Contact Info (Name, Phone)
7. Submit triggers webhook to n8n
8. Success state displays confirmation message

### Webhook Payload Structure

```typescript
interface BookingPayload {
  service: 'implants' | 'veneers' | 'smile-design'
  date: string // ISO format
  time: string // HH:mm
  name: string
  phone: string
  createdAt: string
}

// POST to n8n webhook URL (stored in env)
```

---

## SEO & Metadata

### Head Configuration

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Premium Dental Implants | [Clinic Name]',
  description: 'Transform your smile with our award-winning dental implant specialists. Book your free consultation today.',
  openGraph: {
    title: 'Premium Dental Implants | [Clinic Name]',
    description: '...',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

### JSON-LD Local Business Schema

```tsx
// Embedded in layout or page
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "[Clinic Name]",
  "image": "[Logo URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "...",
    "postalCode": "..."
  },
  "telephone": "+30...",
  "priceRange": "$$$$"
}
</script>
```

---

## Analytics Integration

### Google Analytics 4

```tsx
// components/analytics.tsx
'use client'
import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

### Event Tracking Helper

```typescript
// lib/analytics.ts
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// Usage:
trackEvent('cta_click', { location: 'hero' })
trackEvent('booking_submitted', { service: 'implants' })
```

---

## Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| Lighthouse Score | 90+ | Image optimization, code splitting |
| LCP | < 2.5s | Preload hero image, optimize fonts |
| FID | < 100ms | Minimize JS, defer non-critical |
| CLS | < 0.1 | Set image dimensions, font-display |

---

## Implementation Phases

### Phase 1: Foundation (Day 1)
- [ ] Update `globals.css` with design tokens
- [ ] Configure fonts in `layout.tsx`
- [ ] Create animation utilities and hooks
- [ ] Set up component folder structure

### Phase 2: Layout Components (Day 1-2)
- [ ] Build `Header` with responsive burger menu
- [ ] Build `Footer` with accreditations
- [ ] Build `MobileBottomBar` sticky CTA
- [ ] Test responsive breakpoints

### Phase 3: Landing Page Sections (Day 2-3)
- [ ] Build `HeroSection` with CTA #1
- [ ] Build `ServicesSection` with glass cards
- [ ] Build `BeforeAfterSection` with swipe slider
- [ ] Build `TestimonialsSection` with video placeholder
- [ ] Build `PricingSection` with CTA #2
- [ ] Build `FAQSection` with accordion
- [ ] Build `CTASection` final CTA #3

### Phase 4: Booking System (Day 3-4)
- [ ] Build `BookingDialog` modal
- [ ] Build `BookingCalendar` date picker
- [ ] Build `BookingForm` with validation
- [ ] Build `BookingSuccess` confirmation
- [ ] Implement webhook submission (n8n placeholder)

### Phase 5: Polish & Optimization (Day 4-5)
- [ ] Add scroll animations to all sections
- [ ] Implement analytics tracking
- [ ] Add JSON-LD schema
- [ ] Optimize images and fonts
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Lighthouse performance check

---

## Environment Variables Required

```env
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
WEBHOOK_URL=https://n8n.example.com/webhook/booking
```

---

## Ready to Implement

This document provides a complete specification for building the dental clinic landing page. All design decisions have been made, tokens defined, and architecture planned.

**Next Step:** Begin Phase 1 - Foundation setup.
