"use client"

// Latest optimized layout with desktop grids and price text fixes
import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { BeforeAfterSection } from '@/components/sections/before-after-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { BookingDialog } from '@/components/booking/booking-dialog'

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [lang, setLang] = useState<'el' | 'en'>('el')

  const handleBookClick = () => {
    setBookingOpen(true)
  }

  return (
    <>
      <Header onBookClick={handleBookClick} lang={lang} onLangChange={setLang} />
      
      <main>
        <HeroSection onBookClick={handleBookClick} lang={lang} />
        <ServicesSection onBookClick={handleBookClick} lang={lang} />
        <BeforeAfterSection onBookClick={handleBookClick} lang={lang} />
        <PricingSection onBookClick={handleBookClick} lang={lang} />
        <FAQSection lang={lang} />
        <CTASection onBookClick={handleBookClick} lang={lang} />
      </main>

      <Footer lang={lang} />

      {/* Booking Dialog */}
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} lang={lang} />
    </>
  )
}
