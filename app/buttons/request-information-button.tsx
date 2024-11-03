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
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const programs = [
  { id: "business", label: "Business Administration" },
  { id: "cs", label: "Computer Science" },
  { id: "env", label: "Environmental Science" },
  { id: "ir", label: "International Relations" },
  { id: "eng", label: "Engineering" },
  { id: "health", label: "Health Sciences" }
]

export function RequestInformationButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [] as string[]
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean, id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, id]
        : prev.interests.filter(item => item !== id)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsOpen(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interests: []
    })
    toast({
      title: "Information Request Submitted",
      description: "Thank you for your interest in Unity University. We will contact you soon with more information.",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 shadow-md rounded-lg font-semibold text-lg py-3 transform hover:scale-105 active:scale-95 transition-transform"
          variant="default" 
          size="lg"
        >
          Request Information
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
        <DialogHeader>
          <DialogTitle className="animate-in slide-in-from-left duration-300 delay-100">Request Information</DialogTitle>
          <DialogDescription className="animate-in slide-in-from-left duration-300 delay-200">
            Fill out this form to receive more information about Unity University and our programs.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-300">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2 animate-in slide-in-from-right duration-300 delay-300">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="space-y-2 animate-in slide-in-from-left duration-300 delay-400">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2 animate-in slide-in-from-right duration-300 delay-500">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2 animate-in fade-in duration-300 delay-600">
            <Label>Areas of Interest</Label>
            <div className="grid grid-cols-2 gap-2">
              {programs.map((program, index) => (
                <div key={program.id} className="flex items-center space-x-2 animate-in slide-in-from-bottom duration-300" style={{ animationDelay: `${600 + index * 100}ms` }}>
                  <Checkbox
                    id={program.id}
                    checked={formData.interests.includes(program.id)}
                    onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, program.id)}
                    className="transition-all duration-300 focus:ring-2 focus:ring-green-500"
                  />
                  <Label htmlFor={program.id}>{program.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full animate-in slide-in-from-bottom duration-300 delay-700 transform hover:scale-105 active:scale-95 transition-all" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}