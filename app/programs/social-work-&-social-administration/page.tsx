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
import { ChevronRight, Heart, Users, Briefcase } from "lucide-react"
import Image from 'next/image'

export default function SocialWorkAndSocialAdministration() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Social Work and Social Administration"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Social Work & Social Administration
              <span className="block text-xl text-red-200 mt-2">
                Shaqada Bulshada & Maamulka Bulshada
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Empower communities and drive social change
              <span className="block text-red-200">
                Awood-siinta bulshada iyo hoggaaminta isbedelka bulshada
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
                  Our Social Work & Social Administration program prepares you to make a meaningful impact in people&apos;s lives. You&apos;ll develop the skills to address social issues, advocate for vulnerable populations, and manage social service organizations effectively.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Shaqada Bulshada & Maamulka Bulshada wuxuu kuu diyaarinayaa inaad sameysid saamayn macno leh oo nolosha dadka ah. Waxaad horumarinaysaa xirfadaha aad kula tacaali karto arrimaha bulshada, u doodi karto dadka nugul, oo si wax ku ool ah u maamuli karto hay&apos;adaha adeegga bulshada.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Social Policy", "Community Development", "Case Management", "Social Research Methods", "Nonprofit Management"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 ease-in-out">
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
                  alt="Social Work and Social Administration Students"
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
                  icon: <Heart className="h-10 w-10 text-red-600" />,
                  title: "Compassionate Practice",
                  soTitle: "Dhaqanka Naxariista leh",
                  description: "Develop empathy and ethical approaches to social work.",
                  soDescription: "Horumarso naxariis iyo hab-dhaqanno anshax leh oo shaqada bulshada ah.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Community Engagement",
                  soTitle: "Ka qaybgalka Bulshada",
                  description: "Gain hands-on experience through community projects and internships.",
                  soDescription: "Hel waayo-aragnimo toos ah iyada oo loo marayo mashruucyada bulshada iyo tababbarka.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                  title: "Leadership Skills",
                  soTitle: "Xirfadaha Hoggaaminta",
                  description: "Prepare for management roles in social service organizations.",
                  soDescription: "U diyaargarow doorarka maamulka ee hay&apos;adaha adeegga bulshada.",
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
              Make a Difference in Society
              <span className="block text-lg md:text-xl text-red-200 mt-1">
                Samee Farqi ku Bulshada
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Social Work & Social Administration program and become a catalyst for positive change in communities and individuals&apos; lives.
              <span className="block text-xs md:text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Shaqada Bulshada & Maamulka Bulshada oo noqo horseed isbedel wanaagsan oo bulshada iyo nolosha shakhsiyaadka ah.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now |
                <span className="block text-xs">Codso Hadda</span>
              </Button>
              <Button variant="outline" className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                Request Information |
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