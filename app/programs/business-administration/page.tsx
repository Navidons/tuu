"use client"
import { Header } from "../../static-components/header/Header"
import { Footer } from "../../static-components/footer/Footer"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronRight, Briefcase, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

export default function BusinessAdministration() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Business Administration"
              className="w-full h-full object-cover"
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
                  Our Business Administration program prepares you for leadership roles in various industries. You'll gain a comprehensive understanding of business principles, management strategies, and global market dynamics.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Maamulka Ganacsiga wuxuu kuu diyaarinayaa doorarka hoggaaminta warshadaha kala duwan. Waxaad heli doontaa faham buuxa oo ku saabsan mabaadi'da ganacsiga, xeeladaha maamulka, iyo dhaqdhaqaaqa suuqa caalamiga ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Management Principles", "Marketing Strategies", "Financial Analysis", "Organizational Behavior", "Business Ethics"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Apply Now
                  <span className="block text-xs">Codso Hadda</span>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Business Administration Students"
                  className="absolute inset-0 w-full h-full object-cover"
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

        <section className="py-12 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Launch Your Business Career
              <span className="block text-xl text-red-200 mt-1">
                Bilow Xirfaddaada Ganacsiga
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Business Administration program and develop the skills to become a successful business leader in today's competitive market.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Maamulka Ganacsiga oo horumarso xirfadaha aad ku noqon karto hoggaamiye ganacsi oo guuleysta suuqa tartanka badan ee maanta.
              </span>
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-red-800 hover:bg-red-100">
                Apply Now
                <span className="block text-xs">Codso Hadda</span>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-red-700">
                Request Information
                <span className="block text-xs">Codso Macluumaad</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}