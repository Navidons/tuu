"use client"
import { Header } from "../../static-components/header/Header"
import { Footer } from "../../static-components/footer/Footer"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronRight, Server, Shield, Globe } from "lucide-react"
import Image from 'next/image'

export default function InformationTechnology() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Information Technology"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Information Technology
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Master the technologies that power modern business
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-red-800">
                  Program Overview
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Information Technology program equips you with the skills to manage and innovate with modern technology. Learn about network administration, cybersecurity, cloud computing, and IT infrastructure management.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Network Administration", "Cybersecurity", "Cloud Computing", "IT Infrastructure", "System Administration"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 group hover:text-red-600 hover:translate-x-2 transition-all duration-300">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 group-hover:animate-bounce" />
                      <span className="group-hover:animate-pulse">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Apply Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Information Technology Students"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-800">
              Why Choose Our Program?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Server className="h-10 w-10 text-red-600" />,
                  title: "Hands-On Experience",
                  description: "Work with the latest technologies in our state-of-the-art IT labs.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-red-600" />,
                  title: "Cybersecurity Focus",
                  description: "Gain expertise in protecting digital assets and information systems.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Industry Partnerships",
                  description: "Benefit from our collaborations with leading tech companies.",
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      {item.icon}
                      <div>
                        {item.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Become an IT Professional
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Information Technology program and gain the skills to lead in the digital transformation of businesses and organizations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Request Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}