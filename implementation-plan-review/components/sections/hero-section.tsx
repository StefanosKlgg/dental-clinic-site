"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Shield, Award } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const trustBadges = [
  { icon: Star, label: '15+ Χρόνια Εμπειρίας' },
  { icon: Shield, label: 'Εγγύηση Εφ\' Όρου Ζωής' },
  { icon: Award, label: 'Βραβευμένη Ομάδα' },
]

const benefits = [
  'Ραντεβού την ίδια μέρα',
  'Ευέλικτα προγράμματα πληρωμής',
  '98% ικανοποίηση ασθενών',
]

interface HeroSectionProps {
  onBookClick?: () => void
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Σύγχρονο οδοντιατρείο"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            'max-w-3xl animate-fade-up',
            isVisible && 'visible'
          )}
        >
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            Μεταμορφώστε το Χαμόγελό σας με{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Premium Οδοντικά Εμφυτεύματα
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed">
            Απολαύστε κορυφαία οδοντιατρική φροντίδα με την βραβευμένη ομάδα μας. 
            Αποκτήστε φυσικά, μόνιμα αποτελέσματα που διαρκούν μια ζωή.
          </p>

          {/* Benefits list */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button
              onClick={onBookClick}
              size="lg"
              className="h-14 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Κλείστε Ραντεβού
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg backdrop-blur-sm"
              asChild
            >
              <a href="#results">Δείτε τα Αποτελέσματά μας</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
