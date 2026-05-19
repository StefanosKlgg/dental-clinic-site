"use client"

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MobileBottomBar } from '@/components/layout/mobile-bottom-bar'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { BeforeAfterSection } from '@/components/sections/before-after-section'

import { PricingSection } from '@/components/sections/pricing-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { BookingDialog } from '@/components/booking/booking-dialog'

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const handleBookClick = () => {
    setBookingOpen(true)
  }

  return (
    <>
      <Header onBookClick={handleBookClick} />
      
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <ServicesSection onBookClick={handleBookClick} />
        <BeforeAfterSection onBookClick={handleBookClick} />
        <PricingSection onBookClick={handleBookClick} />
        <FAQSection />
        <CTASection onBookClick={handleBookClick} />
      </main>

      <Footer />

      {/* Mobile bottom bar - only visible on mobile/tablet */}
      <MobileBottomBar onBookClick={handleBookClick} />

      {/* Booking Dialog */}
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  )
}
