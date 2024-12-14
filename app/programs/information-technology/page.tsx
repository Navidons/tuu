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
import { CallToAction } from "../../components/program/CallToAction"

export default function InformationTechnology() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/technology.jpg"
              alt="Information Technology"
              layout="fill"
              objectFit="cover"
              priority
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
                  src="/courses/technology.jpg"
                  alt="Information Technology Students"
                  layout="fill"
                  objectFit="cover"
                  priority
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
                  icon: <Server className="h-6 w-6 text-red-600" />,
                  title: "Infrastructure",
                  description: "Master modern IT infrastructure and cloud computing"
                },
                {
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                  title: "Cybersecurity",
                  description: "Learn to protect systems and data from cyber threats"
                },
                {
                  icon: <Globe className="h-6 w-6 text-red-600" />,
                  title: "Network Systems",
                  description: "Design and manage enterprise network solutions"
                }
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

        <CallToAction 
          title="Start Your Journey in IT"
          description="Join our Information Technology program and become a leader in the digital transformation era."
        />
      </main>
      <Footer />
    </div>
  )
}