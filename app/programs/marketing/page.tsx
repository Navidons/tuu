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
import { ChevronRight, TrendingUp, Globe, Target } from "lucide-react"

export default function Marketing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Marketing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Marketing
              <span className="block text-xl text-red-200 mt-2">
                Suuq-geynta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Master the art and science of creating value for customers and building strong brands
              <span className="block text-red-200">
                La soco fanka iyo sayniska abuurista qiimaha macaamiisha iyo dhisidda calaamadaha xooggan
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
                  Our Marketing program equips you with the skills to understand consumer behavior, develop effective marketing strategies, and drive business growth in the digital age. You'll learn to create compelling campaigns, analyze market trends, and leverage digital platforms for brand success.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Suuq-geynta wuxuu ku siinayaa xirfadaha aad ku fahmi karto dabeecadda macmiilka, horumarinta xeeladaha suuq-geynta wax ku oolka ah, iyo hoggaaminta koboca ganacsiga ee casriga ah. Waxaad baran doontaa inaad abuurto ololayaal soo jiidanaya, falanqeyso isbedelada suuqa, oo aad u isticmaasho madallada dhijitaalka ah guusha calaamadda.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Consumer Behavior", "Digital Marketing", "Brand Management", "Market Research", "Integrated Marketing Communications"].map((item, index) => (
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
                  alt="Marketing Students"
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
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Industry-Relevant Skills",
                  soTitle: "Xirfado Ku Habboon Warshadaha",
                  description: "Gain practical skills in digital marketing, analytics, and brand management.",
                  soDescription: "Hel xirfado wax ku ool ah oo ku saabsan suuq-geynta dhijitaalka ah, falanqaynta, iyo maaraynta calaamadda.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Global Perspective",
                  soTitle: "Aragtida Caalamiga ah",
                  description: "Understand international marketing strategies and cross-cultural consumer behavior.",
                  soDescription: "Faham xeeladaha suuq-geynta caalamiga ah iyo dabeecadda macmiilka ee dhaqamada kala duwan.",
                },
                {
                  icon: <Target className="h-10 w-10 text-red-600" />,
                  title: "Creative Problem-Solving",
                  soTitle: "Xallinta Dhibaatooyinka Hal-abuurka leh",
                  description: "Develop innovative solutions to real-world marketing challenges.",
                  soDescription: "Horumar xalal hal-abuur leh oo loogu talagalay caqabadaha suuq-geynta ee dhabta ah.",
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
              Launch Your Marketing Career
              <span className="block text-xl text-red-200 mt-1">
                Bilow Xirfaddaada Suuq-geynta
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Marketing program and become a creative force in shaping brand narratives and driving business growth in the digital era.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Suuq-geynta oo noqo awood hal-abuur leh oo qaabeynaysa sheekada calaamadda iyo hoggaaminta koboca ganacsiga ee casriga dhijitaalka ah.
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