"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Crown, Sparkles, Smile, Check, ArrowLeft, ArrowRight, Phone, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { el } from 'date-fns/locale'

const services = [
  { id: 'implants', name: 'Οδοντικά Εμφυτεύματα', icon: Crown, description: 'Μόνιμη αντικατάσταση δοντιών' },
  { id: 'veneers', name: 'Όψεις Πορσελάνης', icon: Sparkles, description: 'Τέλεια μεταμόρφωση χαμόγελου' },
  { id: 'makeover', name: 'Αναμόρφωση Χαμόγελου', icon: Smile, description: 'Ολική επανασχεδίαση χαμόγελου' },
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
]

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedService
      case 2: return !!selectedDate
      case 3: return !!selectedTime
      case 4: return name.trim() && phone.trim()
      default: return false
    }
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after close animation
    setTimeout(() => {
      setStep(1)
      setSelectedService('')
      setSelectedDate(undefined)
      setSelectedTime('')
      setName('')
      setPhone('')
      setIsSuccess(false)
    }, 200)
  }

  const stepTitles = [
    'Επιλέξτε Υπηρεσία',
    'Επιλέξτε Ημερομηνία',
    'Επιλέξτε Ώρα',
    'Τα Στοιχεία σας'
  ]

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl mb-2">Η Κράτηση Επιβεβαιώθηκε!</DialogTitle>
              <DialogDescription className="text-base">
                Λάβαμε το αίτημα ραντεβού σας. Η ομάδα μας θα επικοινωνήσει μαζί σας 
                σύντομα για επιβεβαίωση.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 p-4 bg-muted rounded-xl text-sm text-left space-y-1">
              <p><strong>Υπηρεσία:</strong> {services.find(s => s.id === selectedService)?.name}</p>
              <p><strong>Ημερομηνία:</strong> {selectedDate?.toLocaleDateString('el-GR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Ώρα:</strong> {selectedTime}</p>
              <p><strong>Όνομα:</strong> {name}</p>
              <p><strong>Τηλέφωνο:</strong> {phone}</p>
            </div>
            <Button onClick={handleClose} className="mt-6 w-full">
              Ολοκλήρωση
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Κλείστε Ραντεβού</DialogTitle>
              <DialogDescription>
                Βήμα {step} από 4: {stepTitles[step - 1]}
              </DialogDescription>
            </DialogHeader>

            {/* Progress bar */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={cn(
                    'h-2 flex-1 rounded-full transition-colors',
                    s <= step ? 'bg-primary' : 'bg-muted'
                  )}
                />
              ))}
            </div>

            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="space-y-3">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={cn(
                      'cursor-pointer transition-all hover:shadow-lg',
                      selectedService === service.id && 'ring-2 ring-primary shadow-lg'
                    )}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{service.name}</p>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      {selectedService === service.id && (
                        <Check className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Step 2: Select Date */}
            {step === 2 && (
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={el}
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date > new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
                  }
                  className="rounded-xl border shadow-sm"
                />
              </div>
            )}

            {/* Step 3: Select Time */}
            {step === 3 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="h-11"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ονοματεπώνυμο</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Εισάγετε το ονοματεπώνυμό σας"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Τηλέφωνο</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+30 210 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Θα σας καλέσουμε για επιβεβαίωση του ραντεβού. Τα στοιχεία σας είναι ασφαλή και δεν θα κοινοποιηθούν.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-6">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Πίσω
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed() || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  'Υποβολή...'
                ) : step === 4 ? (
                  'Επιβεβαίωση Κράτησης'
                ) : (
                  <>
                    Επόμενο
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
