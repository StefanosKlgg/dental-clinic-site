"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Phone, Globe, Stethoscope, Sparkles, CreditCard, CircleHelp, ChevronRight } from 'lucide-react'
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
          ? 'pt-3 px-4 sm:px-6'
          : 'pt-0 px-0'
      )}
    >
      <div 
        className={cn(
          'container mx-auto transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg border border-slate-200/20 rounded-2xl px-4 sm:px-6 lg:px-8'
            : 'px-4 sm:px-6 lg:px-8'
        )}
      >
        <div 
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
          )}
        >
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
            <SheetContent 
              side="right" 
              className="w-[310px] sm:w-[360px] bg-gradient-to-b from-white via-white to-sky-50/30 border-l border-sky-100/40 shadow-2xl flex flex-col justify-between h-full p-0 gap-0"
            >
              {/* Header section with brand mark */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-100/50 flex items-center justify-between">
                <SheetHeader className="p-0">
                  <SheetTitle className="text-left text-lg font-bold tracking-tight text-secondary flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                      <span className="text-primary-foreground font-bold text-sm">Ο</span>
                    </div>
                    <span>{lang === 'el' ? 'Μενού' : 'Menu'}</span>
                  </SheetTitle>
                </SheetHeader>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col gap-2">
                  {currentNavLinks.map((link) => {
                    let Icon = Sparkles;
                    if (link.href === '#services') Icon = Stethoscope;
                    else if (link.href === '#results') Icon = Sparkles;
                    else if (link.href === '#pricing') Icon = CreditCard;
                    else if (link.href === '#faq') Icon = CircleHelp;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-sky-50/40 active:bg-sky-50/80 border border-transparent hover:border-sky-100/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-lg bg-sky-50/60 group-hover:bg-primary/10 flex items-center justify-center text-primary group-hover:text-primary transition-colors shadow-xs">
                            <Icon className="w-4.5 h-4.5 stroke-[2]" />
                          </div>
                          <span className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Action & Contact Block */}
              <div className="p-6 bg-slate-50/80 border-t border-slate-100/80 flex flex-col gap-4">
                {/* Phone Number */}
                <a
                  href="tel:+302101234567"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-100 hover:border-slate-200/80 hover:bg-white text-slate-600 hover:text-primary transition-all duration-300 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Phone className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-[14px] font-semibold tracking-tight">+30 210 123 4567</span>
                </a>

                {/* Language Selector */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                  <div className="flex items-center gap-2.5 text-slate-500">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                      <Globe className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[13px] font-semibold">{lang === 'el' ? 'Γλώσσα' : 'Language'}</span>
                  </div>
                  
                  <div className="flex items-center gap-0.5 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/30 text-xs font-bold">
                    <button
                      onClick={() => handleLanguageChange('el')}
                      className={cn(
                        "px-3 py-1.5 rounded-md transition-all cursor-pointer",
                        lang === 'el' 
                          ? "bg-white text-primary shadow-sm font-semibold border-b border-slate-200/40" 
                          : "text-slate-500 hover:text-slate-800"
                      )}
                    >
                      EL
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={cn(
                        "px-3 py-1.5 rounded-md transition-all cursor-pointer",
                        lang === 'en' 
                          ? "bg-white text-primary shadow-sm font-semibold border-b border-slate-200/40" 
                          : "text-slate-500 hover:text-slate-800"
                      )}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Booking Button */}
                <Button 
                  onClick={() => {
                    handleNavClick()
                    onBookClick?.()
                  }} 
                  size="lg" 
                  className="w-full py-6 rounded-xl font-bold bg-primary hover:bg-primary/95 text-white shadow-md hover:shadow-lg transition-all cursor-pointer text-[15px]"
                >
                  {lang === 'el' ? 'Κλείστε Ραντεβού' : 'Book Appointment'}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
