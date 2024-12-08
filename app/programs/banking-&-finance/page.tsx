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
import { ChevronRight, BookOpen, GraduationCap, Users } from "lucide-react"
import Image from 'next/image'


export default function BankingAndFinance() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/banking-finance-hero.jpg"
              alt="Banking and Finance"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Banking & Finance
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Prepare for a dynamic career in the financial sector
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
                  Our Banking & Finance program equips students with the knowledge and skills needed to excel in the dynamic world of finance. You&apos;ll gain a deep understanding of financial markets, banking operations, investment strategies, and risk management.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Financial Analysis", "Banking Systems", "Investment Management", "Risk Assessment", "Corporate Finance"].map((item, index) => (
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
                  src="/banking-finance-overview.jpg"
                  alt="Banking and Finance Students"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
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
                  icon: <BookOpen className="h-10 w-10 text-red-600" />,
                  title: "Comprehensive Curriculum",
                  description: "Our program covers all aspects of modern banking and finance.",
                },
                {
                  icon: <GraduationCap className="h-10 w-10 text-red-600" />,
                  title: "Industry-Experienced Faculty",
                  description: "Learn from professionals with real-world financial sector experience.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Networking Opportunities",
                  description: "Connect with industry leaders and fellow finance enthusiasts.",
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
              Ready to Start Your Journey?
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Banking & Finance program and pave the way for a successful career in the financial sector.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:from-yellow-500 hover:to-red-600 transition-all duration-300 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl">
                Apply Now
              </Button>
              <Button variant="outline" className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white border-2 border-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 px-8 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg">
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