"use client"
import { Header } from "../../static-components/header/Header"
import { Footer } from "../../static-components/footer/Footer"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronRight, Briefcase, TrendingUp, Globe } from "lucide-react"
import Image from 'next/image'

export default function BusinessAdministration() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/leadership-skills.jpg"
              alt="Business Administration"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business Administration
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Develop the skills to lead and innovate in the global business landscape
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
                  Our Business Administration program prepares you for leadership roles in various industries. You&apos;ll gain a comprehensive understanding of business principles, management strategies, and global market dynamics.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Management Principles", "Marketing Strategies", "Financial Analysis", "Organizational Behavior", "Business Ethics"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 hover:text-red-600">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/courses/leadership-skills.jpg"
                  alt="Business Administration Students"
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
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                  title: "Practical Business Skills",
                  description: "Develop real-world skills through case studies and internships.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Career Growth Opportunities",
                  description: "Prepare for leadership roles across various industries.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Global Business Perspective",
                  description: "Gain insights into international markets and business practices.",
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
              Launch Your Business Career
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Business Administration program and develop the skills to become a successful business leader in today&apos;s competitive market.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}