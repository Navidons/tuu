"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Users, Building, Globe, Award } from "lucide-react"
import { CallToAction } from "../components/program/CallToAction"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full h-[60vh] bg-cover bg-center relative">
          <Image 
            src="/hero-section/hero.png" 
            alt="About Banner" 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          <div className="container relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                About The Unity University
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Empowering minds and shaping futures since 2021
              </p>
            </div>
          </div>
        </section>

        {/* History & Mission Section */}
        <section className="py-20">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-block rounded-lg bg-red-100 p-2">
                  <span className="text-red-600 font-semibold">Our Legacy</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our History
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 2021, The Unity University has grown from a small institution to one of the leading universities in the region. Our journey reflects the perseverance and aspirations of our academic community.
                </p>
              </div>
              <div className="space-y-8">
                <div className="inline-block rounded-lg bg-red-100 p-2">
                  <span className="text-red-600 font-semibold">Our Purpose</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The Unity University is committed to providing high-quality education that empowers our students to become leaders, innovators, and responsible citizens. We strive to contribute to the development of our region through quality education, research, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-red-50 to-white">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Values
              </h2>
              <p className="text-gray-600 max-w-[700px] mx-auto text-lg">
                The principles that guide our institution and shape our community
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-all duration-200 border-none">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                    <Book className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Academic Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are dedicated to maintaining the highest standards of academic rigor and intellectual inquiry.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200 border-none">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Inclusivity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We embrace diversity and promote an inclusive environment where all voices are heard and valued.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200 border-none">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">
                    Global Perspective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We prepare our students to thrive in an interconnected world, fostering international understanding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Unity University by the Numbers
              </h2>
              <p className="text-red-100 max-w-[700px] mx-auto text-lg">
                Our impact in numbers that tell our story
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                <p className="text-4xl font-bold mb-2">5,000+</p>
                <p className="text-red-100">Students Enrolled</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                <p className="text-4xl font-bold mb-2">200+</p>
                <p className="text-red-100">Expert Faculty Members</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                <p className="text-4xl font-bold mb-2">30+</p>
                <p className="text-red-100">Academic Programs</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
                <p className="text-4xl font-bold mb-2">95%</p>
                <p className="text-red-100">Graduate Employment Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Campus & Community Section */}
        <section className="py-20 bg-gradient-to-b from-white to-red-50">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-block rounded-lg bg-red-100 p-2">
                  <span className="text-red-600 font-semibold">Our Facilities</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Campus
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The Unity University's modern campus provides state-of-the-art facilities for learning, research, and student life. Our campus features advanced laboratories, a comprehensive library, comfortable dormitories, and spaces for sports and recreation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Building className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-600">Modern Lecture Halls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Book className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-600">Extensive Digital Library</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-600">Student Activity Center</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-8">
                <div className="inline-block rounded-lg bg-red-100 p-2">
                  <span className="text-red-600 font-semibold">Our Impact</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Community Engagement
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At The Unity University, we believe in the power of education to transform communities. Our students and faculty are actively involved in various outreach programs, research projects, and partnerships that address local and national challenges.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-600">Local Business Partnerships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-600">Community Health Initiatives</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Award className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-600">Youth Mentorship Programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <CallToAction 
            title="Begin Your Academic Journey"
            description="Join The Unity University and be part of our diverse, innovative learning community. Take the next step towards your future today."
          />
        </section>
      </main>      
      <Footer />
    </div>
  )
}
