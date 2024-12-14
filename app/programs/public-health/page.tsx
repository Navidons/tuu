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
import { ChevronRight, Heart, Users, Globe } from "lucide-react"
import Image from 'next/image'
import { CallToAction } from "../../components/program/CallToAction"

export default function PublicHealth() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/health-sciences.jpg"
              alt="Public Health"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Public Health
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Promote health, prevent disease, and protect communities
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
                  Our Public Health program prepares you to address critical health challenges on a population level. You&apos;ll gain expertise in epidemiology, health policy, environmental health, and community health promotion to make a significant impact on societal well-being.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Epidemiology", "Health Policy and Management", "Environmental Health", "Biostatistics", "Global Health"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Apply Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/courses/health-sciences.jpg"
                  alt="Public Health Students"
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
                  icon: <Heart className="h-6 w-6 text-red-600" />,
                  title: "Community Health",
                  description: "Learn to develop and implement community health programs"
                },
                {
                  icon: <Globe className="h-6 w-6 text-red-600" />,
                  title: "Global Perspective",
                  description: "Understand public health challenges on a global scale"
                },
                {
                  icon: <Users className="h-6 w-6 text-red-600" />,
                  title: "Health Policy",
                  description: "Master the principles of health policy and management"
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
          title="Start Your Journey in Public Health"
          description="Join our Public Health program and make a lasting impact on community health and well-being."
        />
      </main>
      <Footer />
    </div>
  )
}