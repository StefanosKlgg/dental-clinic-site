"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const content = {
  el: {
    sectionSub: 'Διαφανής Τιμολόγηση',
    sectionTitle: 'Επένδυση στο Χαμόγελό σας',
    sectionDesc: 'Όλα τα πακέτα περιλαμβάνουν ολοκληρωμένη φροντίδα με ευέλικτα προγράμματα πληρωμής. Επικοινωνήστε μαζί μας για λεπτομερή προσφορά.',
    badgePopular: 'Πιο Δημοφιλές',
    priceLabel: 'Επικοινωνήστε για την τιμή',
    btnBookPkg: 'Κλείστε Αυτό το Πακέτο',
    btnStart: 'Ξεκινήστε',
    bottomNote: 'Όλα τα πακέτα περιλαμβάνουν συμβουλευτική, θεραπεία και επανεξετάσεις. Διαθέσιμη χρηματοδότηση με 0% επιτόκιο για δικαιούχους ασθενείς.',
    bottomLink: 'Δείτε τις συχνές ερωτήσεις για χρηματοδότηση',
    packages: [
      {
        name: 'Μονό Εμφύτευμα',
        description: 'Ιδανικό για αντικατάσταση ενός δοντιού',
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
  },
  en: {
    sectionSub: 'Transparent Pricing',
    sectionTitle: 'Investment in Your Smile',
    sectionDesc: 'All packages include comprehensive care with flexible payment plans. Contact us for a detailed quotation.',
    badgePopular: 'Most Popular',
    priceLabel: 'Επικοινωνήστε για την τιμή',
    btnBookPkg: 'Book This Package',
    btnStart: 'Get Started',
    bottomNote: 'All packages include consultation, treatment, and follow-ups. 0% interest financing options available for qualified patients.',
    bottomLink: 'View FAQs on financing',
    packages: [
      {
        name: 'Single Implant',
        description: 'Ideal for replacing a single tooth',
        features: [
          'Premium titanium implant',
          'Porcelain crown',
          '3D imaging & planning',
          'Local anesthesia',
          'Follow-up examinations',
          '5-year warranty',
        ],
        popular: false,
      },
      {
        name: 'Full Mouth Restoration',
        description: 'Complete upper or lower jaw rehabilitation',
        features: [
          '4-6 dental implants',
          'Fixed prosthetic bridge',
          'Temporary teeth on the same day',
          '3D CT scan & planning',
          'Sedation options',
          'Lifetime warranty',
          'Free tooth whitening',
        ],
        popular: true,
      },
      {
        name: 'Smile Makeover',
        description: 'Comprehensive cosmetic transformation pack',
        features: [
          '8-10 porcelain veneers',
          'Professional teeth whitening',
          'Digital smile design',
          'Customized shade selection',
          'Gum contouring if needed',
          '10-year warranty',
        ],
        popular: false,
      },
    ]
  }
}

interface PricingSectionProps {
  onBookClick?: () => void
  lang?: 'el' | 'en'
}

export function PricingSection({ onBookClick, lang = 'el' }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState(1) // default to 'Ολική Αποκατάσταση' (index 1)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 })
  const activeContent = content[lang]

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
            {activeContent.sectionSub}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            {activeContent.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            {activeContent.sectionDesc}
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden bg-muted/60 p-1 rounded-xl mb-6 gap-1 w-full max-w-sm mx-auto border border-border/50">
          {activeContent.packages.map((pkg, idx) => (
            <button
              key={pkg.name}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "flex-1 py-2.5 text-[11px] leading-tight font-bold rounded-lg transition-all cursor-pointer text-center px-1",
                activeTab === idx
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Mobile Dynamic Tab Card View */}
        <div
          ref={cardsRef}
          className={cn(
            'block md:hidden animate-fade-up',
            cardsVisible && 'visible'
          )}
        >
          {activeContent.packages.map((pkg, idx) => {
            if (idx !== activeTab) return null;
            return (
              <Card
                key={pkg.name}
                className={cn(
                  'relative overflow-hidden transition-all duration-500 flex flex-col',
                  'bg-card/80 backdrop-blur-lg border-white/30 shadow-subtle',
                  pkg.popular && 'ring-2 ring-primary shadow-2xl'
                )}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center text-sm font-semibold py-2.5">
                    <Sparkles className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                    {activeContent.badgePopular}
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
                  <div className="mb-6 text-center">
                    <span className="text-xl font-bold text-primary">
                      Επικοινωνήστε για την τιμή
                    </span>
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
                    {pkg.popular ? activeContent.btnBookPkg : activeContent.btnStart}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Desktop/Tablet Pricing Cards Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {activeContent.packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={cn(
                'relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col',
                'bg-card/80 backdrop-blur-lg border-white/30 shadow-subtle',
                pkg.popular && 'ring-2 ring-primary shadow-2xl lg:scale-105'
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center text-sm font-semibold py-2.5">
                  <Sparkles className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                  {activeContent.badgePopular}
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
                <div className="mb-6 text-center">
                  <span className="text-xl font-bold text-primary">
                    Επικοινωνήστε για την τιμή
                  </span>
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
                  {pkg.popular ? activeContent.btnBookPkg : activeContent.btnStart}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          {activeContent.bottomNote}{' '}
          <a href="#faq" className="text-primary font-semibold hover:underline">
            {activeContent.bottomLink}
          </a>
        </p>
      </div>
    </section>
  )
}
