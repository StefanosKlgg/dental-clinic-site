"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  lang?: 'el' | 'en'
}

export function BookingDialog({ open, onOpenChange, lang = 'el' }: BookingDialogProps) {
  const handleClose = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[850px] w-full p-0 overflow-hidden bg-white border border-border rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>
            {lang === 'el' ? 'Γρήγορη Κράτηση Ραντεβού' : 'Quick Appointment Booking'}
          </DialogTitle>
          <DialogDescription>
            {lang === 'el' 
              ? 'Κλείστε το ραντεβού σας άμεσα μέσω του Cal.com' 
              : 'Request an appointment immediately via Cal.com'}
          </DialogDescription>
        </DialogHeader>

        <iframe
          src="https://cal.com/stefanios-klg-o0qx5x"
          style={{ width: '100%', height: '650px', border: 'none' }}
          scrolling="yes"
          title="Cal.com Booking Widget"
          className="w-full h-[650px] border-none"
        />
      </DialogContent>
    </Dialog>
  )
}

