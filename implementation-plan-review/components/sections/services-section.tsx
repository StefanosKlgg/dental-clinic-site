"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const services = [
  {
    title: 'Οδοντικά Εμφυτεύματα',
    description: 'Μόνιμη, φυσική αντικατάσταση δοντιών με τεχνολογία αιχμής τιτανίου. Τα εμφυτεύματά μας ενσωματώνονται άψογα με το σαγόνι σας.',
    features: ['Εμφυτεύματα την ίδια μέρα', 'Εγγύηση εφ\' όρου ζωής', '98% ποσοστό επιτυχίας'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Όψεις Πορσελάνης',
    description: 'Εξαιρετικά λεπτά, προσαρμοσμένα κελύφη που μεταμορφώνουν το χαμόγελό σας άμεσα. Ιδανικά για διόρθωση σπασιμάτων και αποχρωματισμού.',
    features: ['Φυσική απόχρωση BL4', 'Ελάχιστα επεμβατική διαδικασία', 'Διάρκεια 10-15 χρόνια'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Ολική Αναμόρφωση Χαμόγελου',
    description: 'Ένα ολοκληρωμένο πλάνο θεραπείας που συνδυάζει πολλαπλές διαδικασίες για το χαμόγελο των ονείρων σας.',
    features: ['Εξατομικευμένο πλάνο', 'Ψηφιακή προεπισκόπηση', 'All-inclusive τιμολόγηση'],
    popular: false,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop',
  },
]

interface ServicesSectionProps {
  onBookClick?: () => void
}

export function ServicesSection({ onBookClick }: ServicesSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 animate-fade-up',
            titleVisible && 'visible'
          )}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Οι Υπηρεσίες μας
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Κορυφαίες Οδοντιατρικές Λύσεις
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Από μονά εμφυτεύματα έως ολικές μεταμορφώσεις χαμόγελου, 
            προσφέρουμε ολοκληρωμένες λύσεις προσαρμοσμένες στις ανάγκες σας.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-up',
            cardsVisible && 'visible'
          )}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              className={cn(
                'group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
                'bg-card/80 backdrop-blur-lg border-white/30',
                service.popular && 'ring-2 ring-primary shadow-xl'
              )}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    Πιο Δημοφιλές
                  </span>
                </div>
              )}
              
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={service.popular ? 'default' : 'outline'}
                  className="w-full group/btn"
                  onClick={onBookClick}
                >
                  Μάθετε Περισσότερα
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA after services */}
        <div
          className={cn(
            'text-center mt-12 animate-fade-up',
            cardsVisible && 'visible'
          )}
        >
          <p className="text-muted-foreground mb-4">
            Δεν είστε σίγουροι ποια θεραπεία είναι κατάλληλη για εσάς;
          </p>
          <Button onClick={onBookClick} variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all">
            Δωρεάν Συμβουλευτική
          </Button>
        </div>
      </div>
    </section>
  )
}
