"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Users, Building, Globe, Award } from "lucide-react"
import { CallToAction } from "../components/program/CallToAction"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-section/hero.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-down text-white">
                  About The Unity University
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up">
                  Empowering minds and shaping futures since 2021
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4 animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our History
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2021, The Unity University has grown from a small institution to one of the leading universities in the region. Our journey reflects the perseverance and aspirations of our academic community.
                </p>
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Mission
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Unity University is committed to providing high-quality education that empowers our students to become leaders, innovators, and responsible citizens. We strive to contribute to the development of our region through quality education, research, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20 bg-red-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-down">
              Our Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <Book className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>
                    Academic Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We are dedicated to maintaining the highest standards of academic rigor and intellectual inquiry.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up delay-150">
                <CardHeader>
                  <Users className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>
                    Inclusivity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We embrace diversity and promote an inclusive environment where all voices are heard and valued.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up delay-300">
                <CardHeader>
                  <Globe className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>
                    Global Perspective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We prepare our students to thrive in an interconnected world, fostering international understanding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-down">
              The Unity University by the Numbers
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">5,000+</CardTitle>
                  <CardDescription>
                    Students Enrolled
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in-up delay-150">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">200+</CardTitle>
                  <CardDescription>
                    Expert Faculty Members
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in-up delay-300">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">30+</CardTitle>
                  <CardDescription>
                    Academic Programs
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in-up delay-450">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">95%</CardTitle>
                  <CardDescription>
                    Graduate Employment Rate
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4 animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Campus
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Unity University's modern campus provides state-of-the-art facilities for learning, research, and student life. Our campus features advanced laboratories, a comprehensive library, comfortable dormitories, and spaces for sports and recreation.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-red-600" /> Modern Lecture Halls
                  </li>
                  <li className="flex items-center gap-2">
                    <Book className="w-4 h-4 text-red-600" /> Extensive Digital Library
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-600" /> Student Activity Center
                  </li>
                </ul>
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Community Engagement
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At The Unity University, we believe in the power of education to transform communities. Our students and faculty are actively involved in various outreach programs, research projects, and partnerships that address local and national challenges.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-red-600" /> Local Business Partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-600" /> Community Health Initiatives
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-red-600" /> Youth Mentorship Programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <CallToAction 
          title="Begin Your Academic Journey"
          description="Join The Unity University and be part of our diverse, innovative learning community. Take the next step towards your future today."
        />
      </main>      
      <Footer />
    </div>
  )
}
