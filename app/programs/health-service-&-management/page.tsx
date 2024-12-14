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
import { ChevronRight, Stethoscope } from "lucide-react"
import Image from 'next/image'
import { CallToAction } from "../../components/program/CallToAction"

interface ProgramItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const programItems: ProgramItem[] = [
  {
    icon: <Stethoscope className="w-6 h-6 text-blue-800" />,
    title: "Healthcare Management",
    description: "Learn about managing healthcare systems efficiently."
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-blue-800" />,
    title: "Clinical Services",
    description: "Understand the intricacies of clinical service management."
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-blue-800" />,
    title: "Hospital Administration",
    description: "Master the skills needed for effective hospital administration."
  }
];

export default function HealthServiceAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/health-sciences.jpg"
              alt="Health Service & Management"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Health Service & Management
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Lead the future of healthcare through effective management and service
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-800">
                  Program Overview
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Health Service & Management program prepares you for leadership roles in healthcare organizations. You&apos;ll gain expertise in healthcare policy, finance, operations management, and quality improvement to effectively lead and innovate in this dynamic field.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Healthcare Policy and Economics", "Health Information Systems", "Quality Management in Healthcare", "Healthcare Finance", "Strategic Planning in Healthcare"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Apply Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/courses/health-sciences.jpg"
                  alt="Health Service & Management Students"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Why Choose Our Program?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programItems.map((item, index) => (
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
          title="Start Your Journey in Health Service Management"
          description="Join our Health Service & Management program and make a difference in healthcare delivery and administration."
        />
      </main>
      <Footer />
    </div>
  )
}