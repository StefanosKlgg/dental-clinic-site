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
import { Textarea } from '@/components/ui/textarea'
import { Check, Phone, User, CalendarDays, Clock, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { el, enUS } from 'date-fns/locale'



const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
]

const content = {
  el: {
    successTitle: 'Η Κράτηση Επιβεβαιώθηκε!',
    successDesc: 'Λάβαμε το αίτημα ραντεβού σας. Η ομάδα μας θα επικοινωνήσει μαζί σας σύντομα στο κινητό σας τηλέφωνο.',
    labelReason: 'Λόγος Επίσκεψης:',
    labelDate: 'Ημερομηνία:',
    labelTime: 'Ώρα:',
    labelName: 'Όνομα:',
    labelPhone: 'Τηλέφωνο:',
    btnFinish: 'Ολοκλήρωση',
    dialogTitle: 'Γρήγορη Κράτηση Ραντεβού',
    dialogDesc: 'Συμπληρώστε τα στοιχεία σας παρακάτω για να ζητήσετε ένα ραντεβού άμεσα.',
    inputName: 'Ονοματεπώνυμο',
    placeholderName: 'Εισάγετε το ονοματεπώνυμό σας',
    inputPhone: 'Τηλέφωνο Κινητού',
    placeholderPhone: '+30 697 123 4567',
    inputReason: 'Λόγος Επίσκεψης',
    placeholderReason: 'Περιγράψτε το ζήτημα σας...',
    inputDateTime: 'Προτιμώμενη Ημερομηνία & Ώρα',
    labelAvailableHours: 'Διαθέσιμες Ώρες για',
    labelSelectedAppt: 'Επιλεγμένο ραντεβού:',
    labelAt: 'στις',
    btnConfirm: 'Επιβεβαίωση & Υποβολή',
    btnSubmitting: 'Υποβολή αιτήματος...',
  },
  en: {
    successTitle: 'Booking Confirmed!',
    successDesc: 'We received your appointment request. Our team will contact you on your mobile phone shortly.',
    labelReason: 'Reason for Visit:',
    labelDate: 'Date:',
    labelTime: 'Time:',
    labelName: 'Name:',
    labelPhone: 'Phone:',
    btnFinish: 'Finish',
    dialogTitle: 'Quick Appointment Booking',
    dialogDesc: 'Fill in your details below to request an appointment immediately.',
    inputName: 'Full Name',
    placeholderName: 'Enter your full name',
    inputPhone: 'Mobile Phone',
    placeholderPhone: '+30 697 123 4567',
    inputReason: 'Reason for Visit',
    placeholderReason: 'Describe your concern...',
    inputDateTime: 'Preferred Date & Time',
    labelAvailableHours: 'Available Slots for',
    labelSelectedAppt: 'Selected appointment:',
    labelAt: 'at',
    btnConfirm: 'Confirm & Submit',
    btnSubmitting: 'Submitting request...',
  }
}

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  lang?: 'el' | 'en'
}

export function BookingDialog({ open, onOpenChange, lang = 'el' }: BookingDialogProps) {
  const [reason, setReason] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const activeContent = content[lang]
  const activeLocale = lang === 'el' ? el : enUS
  const formatLocale = lang === 'el' ? 'el-GR' : 'en-US'

  const canSubmit = name.trim() && phone.trim() && reason.trim() && selectedDate && selectedTime

  const handleSubmit = async () => {
    if (!canSubmit) return
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
      setReason('')
      setSelectedDate(undefined)
      setSelectedTime('')
      setName('')
      setPhone('')
      setIsSuccess(false)
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-full sm:max-w-lg md:max-w-3xl h-full sm:h-auto max-h-screen sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-none sm:rounded-2xl border-0 sm:border bg-white">
        {isSuccess ? (
          <div className="py-8 text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/50 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl mb-2 font-bold">{activeContent.successTitle}</DialogTitle>
              <DialogDescription className="text-base">
                {activeContent.successDesc}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 p-5 bg-muted rounded-2xl text-sm text-left space-y-2 border border-border/50">
              <p className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted-foreground">{activeContent.labelReason}</span> 
                <span className="font-semibold text-foreground">{reason}</span>
              </p>
              <p className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted-foreground">{activeContent.labelDate}</span> 
                <span className="font-semibold text-foreground">{selectedDate?.toLocaleDateString(formatLocale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
              <p className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted-foreground">{activeContent.labelTime}</span> 
                <span className="font-semibold text-foreground">{selectedTime}</span>
              </p>
              <p className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted-foreground">{activeContent.labelName}</span> 
                <span className="font-semibold text-foreground">{name}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-muted-foreground">{activeContent.labelPhone}</span> 
                <span className="font-semibold text-foreground">{phone}</span>
              </p>
            </div>
            <Button onClick={handleClose} size="lg" className="mt-6 w-full shadow-lg">
              {activeContent.btnFinish}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-foreground">{activeContent.dialogTitle}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {activeContent.dialogDesc}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left Column: Form Details */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-1.5">
                    <User className="w-4 h-4 text-primary" />
                    {activeContent.inputName}
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder={activeContent.placeholderName}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-3 py-5 rounded-xl border-border bg-input/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-primary" />
                    {activeContent.inputPhone}
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={activeContent.placeholderPhone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-3 py-5 rounded-xl border-border bg-input/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-sm font-semibold flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-primary" />
                    {activeContent.inputReason}
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder={activeContent.placeholderReason}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="pl-3 py-3 rounded-xl border-border bg-input/10 min-h-28 resize-none text-base"
                  />
                </div>
              </div>

              {/* Right Column: Date & Time Picker */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  {activeContent.inputDateTime}
                </Label>
                <div className="border border-border/80 rounded-2xl p-2 sm:p-4 bg-muted/20 flex flex-col items-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(d) => {
                      setSelectedDate(d);
                      setSelectedTime(''); // Reset time selection on date change
                    }}
                    locale={activeLocale}
                    disabled={(date) => 
                      date < new Date(new Date().setHours(0,0,0,0)) || 
                      date.getDay() === 0 || 
                      date > new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
                    }
                    className="rounded-xl border-0 p-0 max-w-full"
                  />
                  
                  {selectedDate && (
                    <div className="mt-4 w-full border-t border-border/50 pt-4">
                      <Label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mb-2 justify-center">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {activeContent.labelAvailableHours} {selectedDate.toLocaleDateString(formatLocale, { day: 'numeric', month: 'short' })}
                      </Label>
                      <div className="grid grid-cols-4 gap-1.5 max-h-32 overflow-y-auto pr-1">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-1.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer",
                              selectedTime === time 
                                ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                                : "bg-card text-foreground border-border hover:border-muted-foreground/30"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Form Feedback Summary */}
            {selectedDate && selectedTime && (
              <div className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/10 text-xs flex justify-between items-center">
                <span className="text-muted-foreground">{activeContent.labelSelectedAppt}</span>
                <span className="font-semibold text-primary">
                  {selectedDate.toLocaleDateString(formatLocale, { weekday: 'short', day: 'numeric', month: 'long' })} {activeContent.labelAt} {selectedTime}
                </span>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-6 flex gap-3">
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit || isSubmitting}
                className="w-full py-6 rounded-xl text-base font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    {activeContent.btnSubmitting}
                  </span>
                ) : (
                  activeContent.btnConfirm
                )}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
