"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  onBookClick?: () => void
}

export function CTASection({ onBookClick }: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop"
          alt="Χαμογελαστός ασθενής"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={cn(
            'max-w-4xl mx-auto text-center animate-fade-up',
            isVisible && 'visible'
          )}
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance mb-6 text-white">
            Έτοιμοι να Μεταμορφώσετε το Χαμόγελό σας;
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
            Κάντε το πρώτο βήμα προς το χαμόγελο των ονείρων σας. Κλείστε τη δωρεάν συμβουλευτική σας σήμερα 
            και ανακαλύψτε τις δυνατότητες. Χωρίς δεσμεύσεις, χωρίς πίεση - μόνο εξειδικευμένες συμβουλές.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              onClick={onBookClick}
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Κλείστε Ραντεβού
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:+302101234567"
              className="flex items-center gap-2 h-14 px-8 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all text-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              +30 210 123 4567
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span>Δωρεάν συμβουλευτική</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Χωρίς δεσμεύσεις</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Ευέλικτη χρηματοδότηση</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Εγγύηση εφ&apos; όρου ζωής</span>
          </div>
        </div>
      </div>
    </section>
  )
}
