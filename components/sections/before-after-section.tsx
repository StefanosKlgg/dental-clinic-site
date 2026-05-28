"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const content = {
  el: {
    sectionSub: 'Πραγματικά Αποτελέσματα',
    sectionTitle: 'Δείτε τη Μεταμόρφωση',
    sectionDesc: 'Περιηγηθείτε στη συλλογή επιτυχημένων μεταμορφώσεων χαμόγελου. Κάθε περίπτωση αντιπροσωπεύει πραγματικό ασθενή με πραγματικά αποτελέσματα.',
    labelBefore: 'Πριν',
    labelAfter: 'Μετά',
    ariaCompare: 'Σύγκριση πριν και μετά',
    labelTreatment: 'Θεραπεία:',
    labelDuration: 'Διάρκεια:',
    btnCTA: 'Θέλω Παρόμοια Αποτελέσματα',
    btnPrev: 'Προηγούμενη περίπτωση',
    btnNext: 'Επόμενη περίπτωση',
    ariaGoTo: 'Μετάβαση στην περίπτωση',
    cases: [
      {
        id: 1,
        title: 'Ολική Αποκατάσταση Στόματος',
        description: 'Πλήρης μεταμόρφωση χαμόγελου με 8 οδοντικά εμφυτεύματα',
        treatment: 'Οδοντικά Εμφυτεύματα + Όψεις',
        duration: '6 μήνες',
        beforeImage: '/images/case1-before.jpg',
        afterImage: '/images/case1-after.jpg',
      },
      {
        id: 2,
        title: 'Μεταμόρφωση με Όψεις',
        description: 'Φυσικές όψεις για ένα χαμόγελο Hollywood',
        treatment: 'Όψεις Πορσελάνης (10 μονάδες)',
        duration: '2 εβδομάδες',
        beforeImage: '/images/case2-before.jpg',
        afterImage: '/images/case2-after.jpg',
      },
      {
        id: 3,
        title: 'Μονό Εμφύτευμα',
        description: 'Άψογη αντικατάσταση μπροστινού δοντιού',
        treatment: 'Μονό Οδοντικό Εμφύτευμα',
        duration: '3 μήνες',
        beforeImage: '/images/case3-before.jpg',
        afterImage: '/images/case3-after.jpg',
      },
    ]
  },
  en: {
    sectionSub: 'Real Results',
    sectionTitle: 'See the Transformation',
    sectionDesc: 'Browse our gallery of successful smile transformations. Every case represents a real patient with real results.',
    labelBefore: 'Before',
    labelAfter: 'After',
    ariaCompare: 'Compare before and after',
    labelTreatment: 'Treatment:',
    labelDuration: 'Duration:',
    btnCTA: 'I Want Similar Results',
    btnPrev: 'Previous case',
    btnNext: 'Next case',
    ariaGoTo: 'Go to case',
    cases: [
      {
        id: 1,
        title: 'Full Mouth Restoration',
        description: 'Full smile transformation with 8 dental implants',
        treatment: 'Dental Implants + Veneers',
        duration: '6 months',
        beforeImage: '/images/case1-before.jpg',
        afterImage: '/images/case1-after.jpg',
      },
      {
        id: 2,
        title: 'Veneer Transformation',
        description: 'Natural-looking veneers for a Hollywood smile',
        treatment: 'Porcelain Veneers (10 units)',
        duration: '2 weeks',
        beforeImage: '/images/case2-before.jpg',
        afterImage: '/images/case2-after.jpg',
      },
      {
        id: 3,
        title: 'Single Implant',
        description: 'Flawless restoration of a missing front tooth',
        treatment: 'Single Dental Implant',
        duration: '3 months',
        beforeImage: '/images/case3-before.jpg',
        afterImage: '/images/case3-after.jpg',
      },
    ]
  }
}

interface BeforeAfterSectionProps {
  onBookClick?: () => void
  lang?: 'el' | 'en'
}

export function BeforeAfterSection({ onBookClick, lang = 'el' }: BeforeAfterSectionProps) {
  const [currentCase, setCurrentCase] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const { ref, isVisible } = useScrollAnimation()
  const activeContent = content[lang]
  const casesList = activeContent.cases

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % casesList.length)
    setSliderPosition(50)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + casesList.length) % casesList.length)
    setSliderPosition(50)
  }

  const activeCase = casesList[currentCase]

  return (
    <section id="results" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 animate-fade-up',
            isVisible && 'visible'
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

        {/* Before/After Viewer */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/80 backdrop-blur-lg border-white/30 shadow-subtle">
            <CardContent className="p-0">
              {/* Image Comparison Slider */}
              <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                {/* Before image */}
                <div className="absolute inset-0">
                  <Image
                    src={activeCase.beforeImage}
                    alt={`${activeCase.title} - ${activeContent.labelBefore}`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                
                {/* After image - clipped */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={activeCase.afterImage}
                    alt={`${activeCase.title} - ${activeContent.labelAfter}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Slider handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary">
                    <div className="flex gap-0.5">
                      <ChevronLeft className="w-4 h-4 text-primary" />
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Slider input (invisible) */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  aria-label={activeContent.ariaCompare}
                />

                {/* Labels */}
                <div className="absolute bottom-2 left-2 px-2.5 py-1 sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 bg-secondary/90 text-secondary-foreground text-xs sm:text-sm font-semibold rounded-lg backdrop-blur-sm shadow-lg">
                  {activeContent.labelBefore}
                </div>
                <div className="absolute bottom-2 right-2 px-2.5 py-1 sm:bottom-4 sm:right-4 sm:px-4 sm:py-2 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-lg shadow-lg">
                  {activeContent.labelAfter}
                </div>
              </div>

              {/* Case Info */}
              <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-muted/50 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {activeCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm sm:text-base">
                      {activeCase.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
                      <span className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{activeContent.labelTreatment}</span>{' '}
                        {activeCase.treatment}
                      </span>
                      <span className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{activeContent.labelDuration}</span>{' '}
                        {activeCase.duration}
                      </span>
                    </div>
                  </div>
                  <Button onClick={onBookClick} className="shrink-0 shadow-lg w-full md:w-auto justify-center">
                    {activeContent.btnCTA}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCase}
              aria-label={activeContent.btnPrev}
              className="shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {casesList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCase(index)
                    setSliderPosition(50)
                  }}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all',
                    index === currentCase
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`${activeContent.ariaGoTo} ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextCase}
              aria-label={activeContent.btnNext}
              className="shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
