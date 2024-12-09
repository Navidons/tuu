"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center relative">
          <Image src="/university-banner.jpg" alt="University Banner" layout="fill" objectFit="cover" className="absolute inset-0" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-down text-white">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up">
                  We're here to help. Get in touch with us for any inquiries or information.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in-left">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We value your feedback and inquiries. Please fill out the form, and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      placeholder="your@email.com" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject
                    </Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full animate-pulse">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in-right">
                  Contact Information
                </h2>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <MapPin className="w-8 h-8 text-red-600" />
                      <CardTitle>
                        Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                      JigJiga Yar Street near Masjid Jabir, Hargeisa, Somaliland
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Phone className="w-8 h-8 text-red-600" />
                      <CardTitle>
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                      +252 63 6359696
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Mail className="w-8 h-8 text-red-600" />
                      <CardTitle>
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                      info@tuu.university
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/theunityuniversity/" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://x.com/ProfPLOLumumba/status/1605872680317616128?lang=en" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://www.instagram.com/p/Cmd3K5Oj1D1/?img_index=1" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://www.linkedin.com/company/the-unity-university/?originalSubdomain=so" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=8vBnxHefYZs" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-6 w-6" />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-down">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="animate-fade-in-left">
                <CardHeader>
                  <CardTitle>
                    How can I apply to The Unity University?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Visit our Admissions page for detailed information on the application process, requirements, and deadlines.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-right">
                <CardHeader>
                  <CardTitle>
                    What scholarships are available?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We offer various merit-based and need-based scholarships. Check our Financial Aid page for more information.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-left">
                <CardHeader>
                  <CardTitle>
                    Are there accommodation options for students?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, we provide on-campus housing for students. Visit our Student Life page to learn about accommodation options.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-right">
                <CardHeader>
                  <CardTitle>
                    How can I request a campus tour?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You can schedule a campus tour through our Admissions Office. Contact them directly or use the form on this page.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-down">
              Our Location
            </h2>
            <div className="aspect-video overflow-hidden rounded-xl animate-fade-in-up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15736.79006234156!2d44.0332504!3d9.5782359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bf060db4b1e3%3A0x35127f7dd280f4ae!2sTHE%20UNITY%20UNIVERSITY!5e0!3m2!1sen!2sca!4v1729921796797!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}