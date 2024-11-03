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
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const programs = [
  "Business Administration",
  "Computer Science",
  "Environmental Science",
  "International Relations",
  "Engineering",
  "Health Sciences"
]

export function ApplyForAdmissionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    educationLevel: '',
    previousSchool: '',
    gpa: '',
    essay: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsOpen(false)
    setStep(1)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      educationLevel: '',
      previousSchool: '',
      gpa: '',
      essay: ''
    })
    toast({
      title: "Application Submitted",
      description: "Thank you for applying to Unity University. We will contact you soon.",
    })
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-white text-green-600 hover:bg-green-100" size="lg">
          Apply for Admission
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Apply for Admission</DialogTitle>
          <DialogDescription>
            Fill out the application form to start your journey at Unity University.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="program">Desired Program</Label>
                <Select
                  name="program"
                  value={formData.program}
                  onValueChange={handleSelectChange('program')}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map((program) => (
                      <SelectItem key={program} value={program}>
                        {program}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Education Level</Label>
                <RadioGroup
                  name="educationLevel"
                  value={formData.educationLevel}
                  onValueChange={handleSelectChange('educationLevel')}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="highschool" id="highschool" />
                    <Label htmlFor="highschool">High School</Label>
                  </div>
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
              <div className="space-y-2">
                <Label htmlFor="previousSchool">Previous School</Label>
                <Input
                  id="previousSchool"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA</Label>
                <Input
                  id="gpa"
                  name="gpa"
                  type="number"
                  min="0"
                  max="4"
                  step="0.01"
                  value={formData.gpa}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          {step === 3 && (
            <div className="space-y-2">
              <Label htmlFor="essay">Personal Statement</Label>
              <Textarea
                id="essay"
                name="essay"
                value={formData.essay}
                onChange={handleInputChange}
                placeholder="Tell us about your academic goals and why you want to study at Unity University."
                className="h-[200px]"
                required
              />
            </div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}