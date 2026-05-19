"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Είναι επώδυνη η τοποθέτηση εμφυτεύματος;',
    answer: 'Οι σύγχρονες διαδικασίες εμφυτευμάτων είναι σχεδόν ανώδυνες. Χρησιμοποιούμε προηγμένη τοπική αναισθησία και προσφέρουμε επιλογές καταστολής για ανήσυχους ασθενείς. Οι περισσότεροι ασθενείς αναφέρουν μόνο ήπια πίεση κατά τη διαδικασία και περιγράφουν τη δυσφορία μετά ως λιγότερη από μια εξαγωγή δοντιού.',
  },
  {
    question: 'Πόσο διαρκούν τα οδοντικά εμφυτεύματα;',
    answer: 'Με σωστή φροντίδα, τα οδοντικά εμφυτεύματα μπορούν να διαρκέσουν μια ζωή. Το ίδιο το εμφύτευμα τιτανίου συγχωνεύεται με το σαγόνι σας και γίνεται μόνιμο μέρος του στόματός σας. Το στέμμα συνήθως διαρκεί 10-15 χρόνια πριν χρειαστεί αντικατάσταση. Υποστηρίζουμε τη δουλειά μας με εγγύηση εφ\' όρου ζωής.',
  },
  {
    question: 'Ποιες επιλογές χρηματοδότησης υπάρχουν;',
    answer: 'Προσφέρουμε ευέλικτη χρηματοδότηση για να κάνουμε το χαμόγελο των ονείρων σας προσιτό. Οι επιλογές περιλαμβάνουν προγράμματα 0% επιτοκίου έως 24 μήνες, εκτεταμένα σχέδια πληρωμής έως 60 μήνες. Οι περισσότεροι ασθενείς πληρούν τις προϋποθέσεις για δόσεις από 99€/μήνα. Δεχόμαστε επίσης τις περισσότερες ασφάλειες.',
  },
  {
    question: 'Πόσο διαρκεί η ολοκληρωμένη θεραπεία;',
    answer: 'Ο χρόνος ποικίλλει ανάλογα με τον τύπο θεραπείας. Τα μονά εμφυτεύματα συνήθως διαρκούν 3-6 μήνες από την τοποθέτηση έως το τελικό στέμμα. Για εμφυτεύματα ίδιας ημέρας (All-on-4), μπορείτε να φύγετε με ένα όμορφο χαμόγελο σε μία μέρα. Οι όψεις συνήθως απαιτούν 2-3 επισκέψεις σε 2-4 εβδομάδες.',
  },
  {
    question: 'Είμαι κατάλληλος υποψήφιος για εμφυτεύματα;',
    answer: 'Οι περισσότεροι ενήλικες με καλή γενική υγεία είναι εξαιρετικοί υποψήφιοι για οδοντικά εμφυτεύματα. Η ηλικία δεν είναι περιοριστικός παράγοντας - έχουμε θεραπεύσει επιτυχώς ασθενείς στα 80 και 90 τους. Παθήσεις όπως διαβήτης ή οστεοπόρωση δεν σας αποκλείουν αυτόματα. Κατά τη δωρεάν αξιολόγηση, θα λάβουμε 3D σαρώσεις για εξατομικευμένο πλάνο.',
  },
  {
    question: 'Τι κάνει την κλινική σας διαφορετική;',
    answer: 'Η κλινική μας ξεχωρίζει για πολλούς λόγους: Χρησιμοποιούμε την τελευταία 3D απεικόνιση και χειρουργική καθοδηγούμενη από υπολογιστή. Η ομάδα μας περιλαμβάνει ειδικούς σε εμφυτευματολογία, προσθετική και αισθητική οδοντιατρική. Προσφέρουμε εγγύηση εφ\' όρου ζωής και διατηρούμε 98% ικανοποίηση ασθενών εδώ και 15 χρόνια.',
  },
]

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30">
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
            Έχετε Απορίες;
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Όλα όσα πρέπει να γνωρίζετε για τις θεραπείες, τις διαδικασίες και τη φροντίδα μας.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-lg border border-white/30 rounded-xl px-6 shadow-md hover:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            Έχετε ακόμα ερωτήσεις;
          </p>
          <a
            href="tel:+302101234567"
            className="text-primary font-bold hover:underline text-lg"
          >
            Καλέστε μας στο +30 210 123 4567
          </a>
        </div>
      </div>
    </section>
  )
}
