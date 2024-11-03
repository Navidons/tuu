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
import { ChevronRight, Leaf, BarChart, Users } from "lucide-react"
import Link from "next/link"

export default function DevelopmentStudies() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Development Studies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Development Studies
              <span className="block text-xl text-red-200 mt-2">
                Daraasaadka Horumarinta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Drive sustainable development and social progress
              <span className="block text-red-200">
                Hoggaaminta horumarinta joogtada ah iyo horumarka bulshada
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
                  Our Development Studies program equips you with the knowledge and skills to address complex social, economic, and environmental challenges. You'll learn to design, implement, and evaluate development projects that drive sustainable growth and improve lives.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Daraasaadka Horumarinta wuxuu ku siinayaa aqoonta iyo xirfadaha aad kula tacaali karto caqabadaha adag ee bulshada, dhaqaalaha, iyo deegaanka. Waxaad baran doontaa sida loo naqshadeynayo, loo hirgelinayo, oo loo qiimeeyo mashruucyada horumarinta ee hoggaamiya koboca joogtada ah oo hagaajiya nolosha.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Sustainable Development", "Project Management", "Social Policy", "Environmental Studies", "Economic Development"].map((item, index) => (
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
                  alt="Development Studies Students"
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
                  icon: <Leaf className="h-10 w-10 text-red-600" />,
                  title: "Sustainable Approach",
                  soTitle: "Hab Joogto ah",
                  description: "Learn to balance social, economic, and environmental factors in development.",
                  soDescription: "Baro inaad isku dheellitirto arrimaha bulshada, dhaqaalaha, iyo deegaanka ee horumarinta.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-red-600" />,
                  title: "Data-Driven Decision Making",
                  soTitle: "Go'aan qaadashada Ku saleysan Xogta",
                  description: "Develop skills in research and analysis for effective policy-making.",
                  soDescription: "Horumarso xirfadaha cilmi-baarista iyo falanqaynta si loo sameeyo siyaasad wax ku ool ah.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Community Engagement",
                  soTitle: "Ka qaybgalka Bulshada",
                  description: "Learn participatory approaches to development projects.",
                  soDescription: "Baro habab ka qaybgal ah oo loogu talagalay mashruucyada horumarinta.",
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
              Be a Catalyst for Change
              <span className="block text-xl text-red-200 mt-1">
                Noqo Horseed Isbedel
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Development Studies program and become a driving force for sustainable development and social progress in communities around the world.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Daraasaadka Horumarinta oo noqo awood hoggaaminaysa horumarinta joogtada ah iyo horumarka bulshada ee bulshooyinka adduunka oo dhan.
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