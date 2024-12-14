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
import { ChevronRight, Users, Briefcase, TrendingUp } from "lucide-react"
import Image from 'next/image'
import { CallToAction } from "../../components/program/CallToAction"

export default function HumanResourceManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/human-resources.jpg"
              alt="Human Resource Management"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Human Resource Management
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Develop the skills to lead and manage an organization&apos;s most valuable asset: its people
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
                  Our Human Resource Management program prepares you to become a strategic partner in organizational success. You&apos;ll learn to effectively manage talent, foster employee development, and create positive work environments.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Talent Acquisition", "Employee Relations", "Performance Management", "Compensation and Benefits", "Organizational Development"].map((item, index) => (
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
                  src="/courses/human-resources.jpg"
                  alt="Human Resource Management Students"
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
                  icon: <Users className="h-6 w-6 text-red-600" />,
                  title: "Talent Management",
                  description: "Master strategies for attracting and retaining talent"
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-red-600" />,
                  title: "Employee Relations",
                  description: "Learn to build positive workplace relationships"
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-red-600" />,
                  title: "Strategic HR",
                  description: "Develop HR strategies aligned with business goals"
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
          title="Start Your Journey in HR Management"
          description="Join our Human Resource Management program and become a strategic partner in organizational success."
        />
      </main>
      <Footer />
    </div>
  )
}