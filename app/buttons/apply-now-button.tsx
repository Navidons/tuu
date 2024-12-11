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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ApplyNowButton({ className }: { className?: string }) {
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
        <Button className={`${className} bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300`}>
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg p-6 shadow-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Apply to Unity University</DialogTitle>
          <DialogDescription className="text-gray-600 mb-4">
            Fill out this form to start your application process. Our admissions team will contact you with next steps.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</Label>
            <Input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</Label>
            <Input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
          </div>
          <div>
            <Label htmlFor="program" className="block text-sm font-medium text-gray-700">Program of Interest</Label>
            <Select id="program" name="program" required>
              <SelectTrigger className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50">
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="science">Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300">
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}