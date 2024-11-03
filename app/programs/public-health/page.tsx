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
import { ChevronRight, Heart, Globe, Activity } from "lucide-react"
import Image from 'next/image'

export default function PublicHealth() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Public Health"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Public Health
              <span className="block text-xl text-red-200 mt-2">
                Caafimaadka Dadweynaha
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Promote health, prevent disease, and protect communities
              <span className="block text-red-200">
                Kor u qaadida caafimaadka, ka hortagga cudurrada, iyo ilaalinta bulshada
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
                  Our Public Health program prepares you to address critical health challenges on a population level. You&apos;ll gain expertise in epidemiology, health policy, environmental health, and community health promotion to make a significant impact on societal well-being.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Caafimaadka Dadweynaha wuxuu kuu diyaarinayaa inaad wajahdo caqabadaha caafimaad ee muhiimka ah heerka dadweynaha. Waxaad heli doontaa aqoon ku saabsan cilmiga faafidda cudurrada, siyaasadda caafimaadka, caafimaadka deegaanka, iyo kor u qaadida caafimaadka bulshada si aad u sameyso saamayn weyn oo ku aadan fayo-qabka bulshada.
                  </span>
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
                  Apply Now |
                  <span className="block text-xs">Codso Hadda</span>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Public Health Students"
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
                  title: "Community Impact",
                  soTitle: "Saamaynta Bulshada",
                  description: "Make a difference in population health outcomes.",
                  soDescription: "Samee farqi ku aadan natiijooyinka caafimaadka dadweynaha.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Global Perspective",
                  soTitle: "Aragtida Caalamiga ah",
                  description: "Address health challenges on a local and global scale.",
                  soDescription: "Wajah caqabadaha caafimaadka heerka deegaanka iyo caalamiga ah.",
                },
                {
                  icon: <Activity className="h-10 w-10 text-red-600" />,
                  title: "Research Opportunities",
                  soTitle: "Fursadaha Cilmi-baarista",
                  description: "Engage in cutting-edge public health research.",
                  soDescription: "Ka qayb gal cilmi-baarista caafimaadka dadweynaha ee ugu dambeeyay.",
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
              Shape the Future of Public Health
              <span className="block text-lg md:text-xl text-red-200 mt-1">
                Qaabeynta Mustaqbalka Caafimaadka Dadweynaha
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Public Health program and become a leader in promoting health equity and improving population health outcomes.
              <span className="block text-xs md:text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Caafimaadka Dadweynaha oo noqo hoggaamiye ku aadan kor u qaadida sinnaanta caafimaadka iyo hagaajinta natiijooyinka caafimaadka dadweynaha.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now |
                <span className="block text-xs">Codso Hadda</span>
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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