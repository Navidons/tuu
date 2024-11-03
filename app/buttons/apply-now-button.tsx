'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ApplyNowButton() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Here you would typically handle the form submission, e.g., send data to a server
    console.log('Form submitted')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 text-white hover:bg-green-700">Apply Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply to Unity University</DialogTitle>
          <DialogDescription>
            Fill out this form to start your application process. Our admissions team will contact you with next steps.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="johndoe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+252 63 1234567" required />
          </div>
          <div className="space-y-2">
            <Label>Program of Interest</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business Administration</SelectItem>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="environmental-science">Environmental Science</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Application Type</Label>
            <RadioGroup defaultValue="undergraduate" required>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="undergraduate" id="undergraduate" />
                <Label htmlFor="undergraduate">Undergraduate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="graduate" id="graduate" />
                <Label htmlFor="graduate">Graduate</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}