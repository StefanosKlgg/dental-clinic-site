"use client"

import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const content = {
  el: {
    srCall: 'Καλέστε μας',
    btnBook: 'Κλείστε Ραντεβού'
  },
  en: {
    srCall: 'Call us',
    btnBook: 'Book Appointment'
  }
}

interface MobileBottomBarProps {
  onBookClick?: () => void
  lang?: 'el' | 'en'
}

export function MobileBottomBar({ onBookClick, lang = 'el' }: MobileBottomBarProps) {
  const activeContent = content[lang]

  return (
    <>
      {/* Spacer for footer content to not be hidden behind the bar */}
      <div className="h-20 lg:hidden" />
      
      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-white/80 backdrop-blur-md border-t border-slate-100/50 shadow-2xl">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3">
              <a
                href="tel:+302101234567"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <Phone className="w-5 h-5 stroke-[2.5]" />
                <span className="sr-only">{activeContent.srCall}</span>
              </a>
              <Button
                onClick={onBookClick}
                size="lg"
                className="flex-1 h-12 text-base font-bold bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                {activeContent.btnBook}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
