"use client"

import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileBottomBarProps {
  onBookClick?: () => void
}

export function MobileBottomBar({ onBookClick }: MobileBottomBarProps) {
  return (
    <>
      {/* Spacer for footer content to not be hidden behind the bar */}
      <div className="h-20 lg:hidden" />
      
      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-background/95 backdrop-blur-md border-t border-border shadow-xl">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <a
                href="tel:+302101234567"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span className="sr-only">Καλέστε μας</span>
              </a>
              <Button
                onClick={onBookClick}
                size="lg"
                className="flex-1 h-12 text-base font-semibold gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Κλείστε Ραντεβού
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
