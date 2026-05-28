# Implementation Plan: Typography, Layout & Booking Form Updates

This document outlines the planned design and functionality updates for the dental clinic landing page. The goal is to elevate the website's visual hierarchy, typography, stock photography realism, and overall user experience.

---

## Progress Checklist

- [ ] **1. Typography & Global Styling**
  - [ ] Import a modern, premium sans-serif font (e.g., `Outfit` or `Poppins`) from `next/font/google` in `app/layout.tsx`.
  - [ ] Update `globals.css` theme variables to map `--font-sans` to the new font family.
  - [ ] Adjust letter-spacing and font weights globally for a sleek, high-end, and welcoming aesthetic.

- [ ] **2. Hero Section (Header Area)**
  - [ ] Center the main headline: "Μεταμορφώστε το Χαμόγελό σας με Premium Οδοντικά Εμφυτεύματα".
  - [ ] Reduce the headline font size so it is prominent but not dominating.
  - [ ] Center the sub-headline supporting text below the main headline.
  - [ ] Center the benefits checkmarks and primary CTA buttons.
  - [ ] Completely remove any moving, pulse, or emoji animations in the hero/header area (such as the pulsing decorative background orbs or bouncing icons).

- [ ] **3. Premium Stock Photography (Visual Cards)**
  - [ ] **Dental Implants Card**: Replace doctor-focused image with a high-resolution, professional close-up of a dental implant or detailed mouth-area procedure.
  - [ ] **Porcelain Veneers Card**: Replace scan/X-ray image with a high-quality photograph displaying natural-looking porcelain shells on a bright, aesthetic smile.
  - [ ] **Before/After Section**: Replace generic teeth images with 3 distinct cases showing realistic reconstruction.
    - [ ] Create and process aligned "before" and "after" image pairs where facial structures, lips, and lighting belong to the exact same person.
    - [ ] Update cases configuration in `before-after-section.tsx`.

- [ ] **4. Navigation & Language Selector**
  - [ ] Add a premium language selector dropdown/text toggle (`Ελληνικά` / `English`) to the top-right desktop navigation header.
  - [ ] Integrate the language selector into the mobile sidebar navigation.
  - [ ] Implement simulation/support for language switching to demonstrate a polished user interface.

- [ ] **5. Simplified Booking Modal**
  - [ ] Replace the multi-step form wizard in `components/booking/booking-dialog.tsx` with a single-screen, minimalist booking form.
  - [ ] Include exactly 4 fields:
    1. Full Name (*Ονοματεπώνυμο*)
    2. Mobile Number (*Τηλέφωνο Κινητού*)
    3. Reason for Visit (*Λόγος Επίσκεψης*)
    4. Preferred Date & Time (*Προτιμώμενη Ημερομηνία/Ώρα*)
  - [ ] Design a clean, custom inline date-time picker.
  - [ ] Provide a sleek submit ("Υποβολή") button with success validation.

---

## Proposed Changes

### Global Layout & Styling

#### [MODIFY] [layout.tsx](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/app/layout.tsx)
- Replace `Space_Grotesk` with `Outfit` from Google Fonts.
- Update metadata titles if necessary to improve SEO.

#### [MODIFY] [globals.css](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/app/globals.css)
- Change font-sans fallback stack to reference `'Outfit'` as the primary font family.
- Fine-tune global letter-spacing and line heights for headings and body copy.

---

### Components & Sections

#### [MODIFY] [hero-section.tsx](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/components/sections/hero-section.tsx)
- Change alignment of text container and inner items to `text-center mx-auto`.
- Change headline sizes from `text-4xl md:text-5xl lg:text-6xl` to `text-3xl md:text-4xl lg:text-5xl`.
- Center the list of benefits and the CTA button container.
- Remove the animated decorative pulse orbs and check for other moving animations.

#### [MODIFY] [services-section.tsx](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/components/sections/services-section.tsx)
- Replace Unsplash URLs in `services` configuration array with high-quality close-ups (e.g., Unsplash/Pexels stock dental images).
  - **Implants**: `https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600` (high-quality dental tools/implant focus) or similar.
  - **Veneers**: `https://images.unsplash.com/photo-1581594549595-b56a422c8e92?q=80&w=600` (beautiful aesthetic smile focus) or similar.

#### [MODIFY] [before-after-section.tsx](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/components/sections/before-after-section.tsx)
- Update the images config for cases to point to newly created files for each case:
  - Case 1: `case1-before.jpg` / `case1-after.jpg`
  - Case 2: `case2-before.jpg` / `case2-after.jpg`
  - Case 3: `case3-before.jpg` / `case3-after.jpg`

#### [NEW] Before/After Stock Image Assets
- Generate highly realistic dental before/after comparisons representing the same person's teeth transformation.
- Place them in `/public/images/`.

---

### Booking & Navigation

#### [MODIFY] [header.tsx](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/components/layout/header.tsx)
- Insert a clean language selector toggle in the desktop navigation (top-right next to the CTA) and within the mobile sheet.

#### [MODIFY] [booking-dialog.tsx](file:///c:/Users/Stefanos/.gemini/antigravity-ide/scratch/dental-clinic-site/components/booking/booking-dialog.tsx)
- Redesign the modal content to show a single-screen form instead of 4 separate steps.
- Create 4 modern input fields: Name, Phone, Message, and Date/Time Picker.
- Display a clean confirmation layout upon successful submission.

---

## Verification Plan

### Automated & Manual Verification
- Validate the site compiles and builds successfully with `npm run build`.
- Open the application locally in the browser to manually check:
  - Font changes applied across all text elements.
  - Correct centring and font sizing of the hero headline.
  - Proper alignment and responsiveness of services cards.
  - Before/after slider functionality with distinct aligned case images.
  - Modal opening and closing, validation on inputs, and submission flow.
  - Language selector switching states smoothly.
