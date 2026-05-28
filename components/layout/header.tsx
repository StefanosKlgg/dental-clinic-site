"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

const navLinks = {
  el: [
    { href: '#services', label: 'Υπηρεσίες' },
    { href: '#results', label: 'Αποτελέσματα' },
    { href: '#pricing', label: 'Τιμές' },
    { href: '#faq', label: 'Συχνές Ερωτήσεις' },
  ],
  en: [
    { href: '#services', label: 'Services' },
    { href: '#results', label: 'Results' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ],
}

interface HeaderProps {
  onBookClick?: () => void
  lang?: 'el' | 'en'
  onLangChange?: (lang: 'el' | 'en') => void
}

export function Header({ onBookClick, lang: propLang, onLangChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [localLang, setLocalLang] = useState<'el' | 'en'>('el')

  const lang = propLang ?? localLang
  const setLang = onLangChange ?? setLocalLang
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  const handleLanguageChange = (newLang: 'el' | 'en') => {
    if (newLang === lang) return
    setLang(newLang)
    toast({
      title: newLang === 'el' ? "Αλλαγή γλώσσας" : "Language switched",
      description: newLang === 'el' 
        ? "Η γλώσσα άλλαξε σε Ελληνικά (Προσομοίωση)" 
        : "Language switched to English (Simulated)",
    })
  }

  const currentNavLinks = navLinks[lang]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">Ο</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block tracking-tight">
              OdontoClinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+302101234567"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+30 210 123 4567</span>
            </a>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-muted/65 border border-border/80 rounded-full px-2 py-1 text-xs font-semibold shadow-sm transition-all duration-300 hover:border-muted-foreground/35">
              <Globe className="w-3.5 h-3.5 text-muted-foreground mr-1" />
              <button
                onClick={() => handleLanguageChange('el')}
                className={cn(
                  "px-2 py-0.5 rounded-full transition-all cursor-pointer",
                  lang === 'el' 
                    ? "bg-primary text-primary-foreground shadow-sm font-semibold" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EL
              </button>
              <span className="text-muted-foreground/30 text-[10px]">|</span>
              <button
                onClick={() => handleLanguageChange('en')}
                className={cn(
                  "px-2 py-0.5 rounded-full transition-all cursor-pointer",
                  lang === 'en' 
                    ? "bg-primary text-primary-foreground shadow-sm font-semibold" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>

            <Button onClick={onBookClick} size="lg" className="shadow-lg hover:shadow-xl transition-all">
              {lang === 'el' ? 'Κλείστε Ραντεβού' : 'Book Appointment'}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">{lang === 'el' ? 'Άνοιγμα μενού' : 'Open menu'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="text-left">{lang === 'el' ? 'Μενού' : 'Menu'}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {currentNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-4 border-border" />

                {/* Mobile Language Selector */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Globe className="w-4 h-4" />
                    <span>{lang === 'el' ? 'Γλώσσα' : 'Language'}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-muted border border-border rounded-full p-0.5 text-xs font-semibold shadow-sm">
                    <button
                      onClick={() => handleLanguageChange('el')}
                      className={cn(
                        "px-3 py-1 rounded-full transition-all cursor-pointer",
                        lang === 'el' 
                          ? "bg-primary text-primary-foreground shadow-sm font-semibold" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      EL
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={cn(
                        "px-3 py-1 rounded-full transition-all cursor-pointer",
                        lang === 'en' 
                          ? "bg-primary text-primary-foreground shadow-sm font-semibold" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <hr className="my-2 border-border" />
                <a
                  href="tel:+302101234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+30 210 123 4567</span>
                </a>
                <Button 
                  onClick={() => {
                    handleNavClick()
                    onBookClick?.()
                  }} 
                  size="lg" 
                  className="mt-4 w-full"
                >
                  {lang === 'el' ? 'Κλείστε Ραντεβού' : 'Book Appointment'}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
