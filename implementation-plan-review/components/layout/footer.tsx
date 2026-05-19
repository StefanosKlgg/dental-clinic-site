import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const footerLinks = {
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

const accreditations = [
  { name: 'ΕΟΟ', label: 'Ελληνική Οδοντιατρική Ομοσπονδία' },
  { name: 'AAID', label: 'American Academy of Implant Dentistry' },
  { name: 'ISO', label: 'ISO 9001 Certified' },
]

export function Footer() {
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
              Βραβευμένοι ειδικοί σε οδοντικά εμφυτεύματα, αφοσιωμένοι στη μεταμόρφωση 
              χαμόγελων με τεχνολογία αιχμής και εξατομικευμένη φροντίδα.
            </p>
            {/* Accreditations */}
            <div className="flex flex-wrap gap-2">
              {accreditations.map((acc) => (
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
              Υπηρεσίες
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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
              Η Εταιρεία
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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
              Επικοινωνία
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
                <span>Λεωφόρος Κηφισίας 123,<br />Αθήνα, 11523</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Δευ-Παρ: 9:00 - 18:00<br />Σάβ: 10:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            {new Date().getFullYear()} OdontoClinic. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
            >
              Πολιτική Απορρήτου
            </Link>
            <Link
              href="#"
              className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
            >
              Όροι Χρήσης
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
