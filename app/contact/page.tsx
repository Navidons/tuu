"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-[40vh] bg-cover bg-center relative">
          <Image 
            src="/hero-section/hero.png" 
            alt="Contact Banner" 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <div className="container relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                We're here to help and answer any questions you might have
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full transition-all duration-200 focus:ring-2 focus:ring-red-500"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full transition-all duration-200 focus:ring-2 focus:ring-red-500"
                          placeholder="student@tuu.university"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full transition-all duration-200 focus:ring-2 focus:ring-red-500"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="min-h-[150px] w-full transition-all duration-200 focus:ring-2 focus:ring-red-500"
                        placeholder="Your message here..."
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
                  <p className="text-gray-600">Choose the most convenient way to reach us.</p>
                </div>

                <div className="grid gap-6">
                  {/* Contact Cards */}
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="p-3 bg-red-100 rounded-full">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-sm text-gray-600">info@tuu.university</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="p-3 bg-red-100 rounded-full">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-sm text-gray-600">+252 634210013</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="p-3 bg-red-100 rounded-full">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Visit Us</h3>
                        <p className="text-sm text-gray-600">JigJiga Yar Street near Masjid Jabir, Hargeisa, Somaliland</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/theunityuniversity/" className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5 text-red-600" />
                    </Link>
                    <Link href="https://x.com/ProfPLOLumumba/status/1605872680317616128?lang=en" className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5 text-red-600" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/the-unity-university/?originalSubdomain=so" className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-red-600" />
                    </Link>
                    <Link href="https://www.instagram.com/p/Cmd3K5Oj1D1/?img_index=1" className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5 text-red-600" />
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=8vBnxHefYZs" className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-5 w-5 text-red-600" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[400px] bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1639458283805!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  )
}