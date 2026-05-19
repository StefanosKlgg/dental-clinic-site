"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const packages = [
  {
    name: 'Μονό Εμφύτευμα',
    description: 'Ιδανικό για αντικατάσταση ενός δοντιού',
    price: '1.200',
    originalPrice: '1.800',
    perMonth: '99',
    features: [
      'Premium εμφύτευμα τιτανίου',
      'Στέμμα πορσελάνης',
      '3D απεικόνιση & σχεδιασμός',
      'Τοπική αναισθησία',
      'Επανεξετάσεις',
      'Εγγύηση 5 ετών',
    ],
    popular: false,
  },
  {
    name: 'Ολική Αποκατάσταση',
    description: 'Πλήρης αποκατάσταση άνω ή κάτω γνάθου',
    price: '8.500',
    originalPrice: '12.000',
    perMonth: '299',
    features: [
      '4-6 οδοντικά εμφυτεύματα',
      'Σταθερή προσθετική γέφυρα',
      'Προσωρινά δόντια την ίδια μέρα',
      '3D CT scan & σχεδιασμός',
      'Επιλογές καταστολής',
      'Εγγύηση εφ\' όρου ζωής',
      'Δωρεάν λεύκανση',
    ],
    popular: true,
  },
  {
    name: 'Μεταμόρφωση Χαμόγελου',
    description: 'Ολοκληρωμένο πακέτο μετασχηματισμού',
    price: '4.500',
    originalPrice: '6.500',
    perMonth: '189',
    features: [
      '8-10 όψεις πορσελάνης',
      'Λεύκανση δοντιών',
      'Ψηφιακός σχεδιασμός χαμόγελου',
      'Εξατομικευμένη απόχρωση',
      'Διαμόρφωση ούλων αν χρειαστεί',
      'Εγγύηση 10 ετών',
    ],
    popular: false,
  },
]

interface PricingSectionProps {
  onBookClick?: () => void
}

export function PricingSection({ onBookClick }: PricingSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 animate-fade-up',
            titleVisible && 'visible'
          )}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Διαφανής Τιμολόγηση
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Επένδυση στο Χαμόγελό σας
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Χωρίς κρυφές χρεώσεις, χωρίς εκπλήξεις. Όλα τα πακέτα περιλαμβάνουν 
            ολοκληρωμένη φροντίδα με ευέλικτα προγράμματα πληρωμής.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-up',
            cardsVisible && 'visible'
          )}
        >
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={cn(
                'relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col',
                'bg-card/80 backdrop-blur-lg border-white/30',
                pkg.popular && 'ring-2 ring-primary shadow-2xl lg:scale-105'
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center text-sm font-semibold py-2.5">
                  <Sparkles className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                  Πιο Δημοφιλές
                </div>
              )}
              <CardHeader className={cn('pb-4', pkg.popular && 'pt-14')}>
                <CardTitle className="text-xl font-bold">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-foreground">
                      {pkg.price}€
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {pkg.originalPrice}€
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ή από <span className="font-bold text-primary">{pkg.perMonth}€/μήνα</span> με χρηματοδότηση
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={onBookClick}
                  variant={pkg.popular ? 'default' : 'outline'}
                  size="lg"
                  className={cn(
                    "w-full",
                    pkg.popular && "shadow-lg hover:shadow-xl"
                  )}
                >
                  {pkg.popular ? 'Κλείστε Αυτό το Πακέτο' : 'Ξεκινήστε'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          Όλες οι τιμές περιλαμβάνουν συμβουλευτική, θεραπεία και επανεξετάσεις. 
          Διαθέσιμη χρηματοδότηση με 0% επιτόκιο για δικαιούχους ασθενείς.{' '}
          <a href="#faq" className="text-primary font-semibold hover:underline">
            Δείτε τις συχνές ερωτήσεις για χρηματοδότηση
          </a>
        </p>
      </div>
    </section>
  )
}
