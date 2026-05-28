import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const content = {
  el: {
    desc: 'Βραβευμένοι ειδικοί σε οδοντικά εμφυτεύματα, αφοσιωμένοι στη μεταμόρφωση χαμόγελων με τεχνολογία αιχμής και εξατομικευμένη φροντίδα.',
    titleServices: 'Υπηρεσίες',
    titleCompany: 'Η Εταιρεία',
    titleContact: 'Επικοινωνία',
    address: 'Λεωφόρος Κηφισίας 123,\nΑθήνα, 11523',
    hours: 'Δευ-Παρ: 9:00 - 18:00\nΣάβ: 10:00 - 14:00',
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
    privacy: 'Πολιτική Απορρήτου',
    terms: 'Όροι Χρήσης',
    accreditations: [
      { name: 'ΕΟΟ', label: 'Ελληνική Οδοντιατρική Ομοσπονδία' },
      { name: 'AAID', label: 'American Academy of Implant Dentistry' },
      { name: 'ISO', label: 'ISO 9001 Certified' },
    ],
    links: {
      services: [
        { href: '#services', label: 'Οδοντικά Εμφυτεύματα' },
        { href: '#services', label: 'Όψεις Πορσελάνης' },
        { href: '#services', label: 'Αναμόρφωση Χαμόγελου' },
        { href: '#services', label: 'Λεύκανση Δοντιών' },
      ],
      company: [
        { href: '#pricing', label: 'Τιμοκατάλογος' },
        { href: '#faq', label: 'Συχνές Ερωτήσεις' },
        { href: '#', label: 'Σχετικά με εμάς' },
        { href: '#', label: 'Επικοινωνία' },
      ],
    }
  },
  en: {
    desc: 'Award-winning specialists in dental implants, dedicated to transforming smiles with cutting-edge technology and personalized care.',
    titleServices: 'Services',
    titleCompany: 'Company',
    titleContact: 'Contact',
    address: '123 Kifisias Avenue,\nAthens, 11523',
    hours: 'Mon-Fri: 9:00 - 18:00\nSat: 10:00 - 14:00',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    accreditations: [
      { name: 'HDA', label: 'Hellenic Dental Association' },
      { name: 'AAID', label: 'American Academy of Implant Dentistry' },
      { name: 'ISO', label: 'ISO 9001 Certified' },
    ],
    links: {
      services: [
        { href: '#services', label: 'Dental Implants' },
        { href: '#services', label: 'Porcelain Veneers' },
        { href: '#services', label: 'Smile Makeover' },
        { href: '#services', label: 'Teeth Whitening' },
      ],
      company: [
        { href: '#pricing', label: 'Pricing Plan' },
        { href: '#faq', label: 'FAQs' },
        { href: '#', label: 'About Us' },
        { href: '#', label: 'Contact Us' },
      ],
    }
  }
}

interface FooterProps {
  lang?: 'el' | 'en'
}

export function Footer({ lang = 'el' }: FooterProps) {
  const activeContent = content[lang]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">Ο</span>
              </div>
              <span className="font-bold text-xl">OdontoClinic</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              {activeContent.desc}
            </p>
            {/* Accreditations */}
            <div className="flex flex-wrap gap-2">
              {activeContent.accreditations.map((acc) => (
                <div
                  key={acc.name}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-xs font-medium"
                  title={acc.label}
                >
                  {acc.name}
                </div>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
              {activeContent.titleServices}
            </h3>
            <ul className="space-y-3">
              {activeContent.links.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
              {activeContent.titleCompany}
            </h3>
            <ul className="space-y-3">
              {activeContent.links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
              {activeContent.titleContact}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+302101234567"
                  className="flex items-start gap-3 text-secondary-foreground/80 hover:text-secondary-foreground text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+30 210 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@odontoclinic.gr"
                  className="flex items-start gap-3 text-secondary-foreground/80 hover:text-secondary-foreground text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>info@odontoclinic.gr</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="whitespace-pre-line">{activeContent.address}</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="whitespace-pre-line">{activeContent.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            {new Date().getFullYear()} OdontoClinic. {activeContent.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
            >
              {activeContent.privacy}
            </Link>
            <Link
              href="#"
              className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
            >
              {activeContent.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
