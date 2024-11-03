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
              src="/placeholder.svg?height=600&width=1200"
              alt="Business Administration"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business Administration
              <span className="block text-xl text-red-200 mt-2">
                Maamulka Ganacsiga
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Develop the skills to lead and innovate in the global business landscape
              <span className="block text-red-200">
                Horumarso xirfadaha hogaaminta iyo hal-abuurka muuqaalka ganacsiga caalamiga ah
              </span>
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-red-800">
                  Program Overview
                  <span className="block text-lg text-red-600 mt-1">
                    Guudmar Barnaamijka
                  </span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Business Administration program prepares you for leadership roles in various industries. You&apos;ll gain a comprehensive understanding of business principles, management strategies, and global market dynamics.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Maamulka Ganacsiga wuxuu kuu diyaarinayaa doorarka hoggaaminta warshadaha kala duwan. Waxaad heli doontaa faham buuxa oo ku saabsan mabaadi&apos;da ganacsiga, xeeladaha maamulka, iyo dhaqdhaqaaqa suuqa caalamiga ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Management Principles", "Marketing Strategies", "Financial Analysis", "Organizational Behavior", "Business Ethics"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 hover:text-red-600">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Apply Now |
                  <span className="block text-xs">Codso Hadda</span>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Business Administration Students"
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
              <span className="block text-lg text-red-600 mt-1">
                Maxaa Loogu Doortay Barnaamijkeena?
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                  title: "Practical Business Skills",
                  soTitle: "Xirfadaha Ganacsiga ee Wax ku ool ah",
                  description: "Develop real-world skills through case studies and internships.",
                  soDescription: "Horumarso xirfadaha dhabta ah iyada oo loo marayo daraasadaha kiiska iyo tababbarka.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Career Growth Opportunities",
                  soTitle: "Fursadaha Koboca Shaqada",
                  description: "Prepare for leadership roles across various industries.",
                  soDescription: "U diyaargarow doorarka hoggaaminta warshadaha kala duwan.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Global Business Perspective",
                  soTitle: "Aragtida Ganacsiga Caalamiga ah",
                  description: "Gain insights into international markets and business practices.",
                  soDescription: "Hel aragtiyo ku saabsan suuqyada caalamiga ah iyo dhaqannada ganacsiga.",
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      {item.icon}
                      <div>
                        {item.title}
                        <span className="block text-sm text-red-600">{item.soTitle}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {item.description}
                      <span className="block text-sm text-red-500 mt-1">{item.soDescription}</span>
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
              <span className="block text-lg md:text-xl text-red-200 mt-1">
                Bilow Xirfaddaada Ganacsiga
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Business Administration program and develop the skills to become a successful business leader in today&apos;s competitive market.
              <span className="block text-xs md:text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Maamulka Ganacsiga oo horumarso xirfadaha aad ku noqon karto hoggaamiye ganacsi oo guuleysta suuqa tartanka badan ee maanta.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:from-yellow-500 hover:to-red-600 transition-all duration-300 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl">
                Apply Now |
                <span className="block text-xs mt-1">Codso Hadda</span>
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl">
                Request Information |
                <span className="block text-xs mt-1">Codso Macluumaad</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}