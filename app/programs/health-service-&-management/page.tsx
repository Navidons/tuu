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
import { ChevronRight, Stethoscope, TrendingUp, Users } from "lucide-react"
import Image from 'next/image'

export default function HealthServiceAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Health Service and Management"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Health Service & Management
              <span className="block text-xl text-red-200 mt-2">
                Adeegga Caafimaadka & Maaraynta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Lead and innovate in healthcare delivery and administration
              <span className="block text-red-200">
                Hoggaami oo hal-abuur ku samee bixinta iyo maamulka daryeelka caafimaadka
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
                  Our Health Service & Management program prepares you for leadership roles in healthcare organizations. You&apos;ll gain expertise in healthcare policy, finance, operations management, and quality improvement to effectively lead and innovate in this dynamic field.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Adeegga Caafimaadka & Maaraynta wuxuu kuu diyaarinayaa doorarka hoggaaminta ee hay&apos;adaha daryeelka caafimaadka. Waxaad heli doontaa aqoon ku saabsan siyaasadda daryeelka caafimaadka, maaliyadda, maamulka hawlgallada, iyo hagaajinta tayada si aad si wax ku ool ah ugu hoggaamiso oo aad ugu hal-abuurto goobtan isbedelka badan.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Healthcare Policy and Economics", "Health Information Systems", "Quality Management in Healthcare", "Healthcare Finance", "Strategic Planning in Healthcare"].map((item, index) => (
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
                  alt="Health Service and Management Students"
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
                  icon: <Stethoscope className="h-10 w-10 text-red-600" />,
                  title: "Healthcare Expertise",
                  soTitle: "Khibradda Daryeelka Caafimaadka",
                  description: "Gain comprehensive knowledge of healthcare systems and management.",
                  soDescription: "Hel aqoon dhammaystiran oo ku saabsan nidaamyada daryeelka caafimaadka iyo maaraynta.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Leadership Development",
                  soTitle: "Horumarinta Hoggaaminta",
                  description: "Develop skills to lead and innovate in healthcare organizations.",
                  soDescription: "Horumarso xirfadaha aad ku hoggaamin karto oo aad ku hal-abuur ku samayn karto hay&apos;adaha daryeelka caafimaadka.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Industry Connections",
                  soTitle: "Xiriirrada Warshadaha",
                  description: "Benefit from our partnerships with leading healthcare providers.",
                  soDescription: "Ka faa&apos;iideyso iskaashigayaga bixiyeyaasha daryeelka caafimaadka ee hormuudka ah.",
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
              Transform Healthcare Delivery
              <span className="block text-lg md:text-xl text-red-200 mt-1">
                Bedel Bixinta Daryeelka Caafimaadka
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Health Service & Management program and become a leader in shaping the future of healthcare delivery and administration.
              <span className="block text-xs md:text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Adeegga Caafimaadka & Maaraynta oo noqo hoggaamiye ku aadan qaabeynta mustaqbalka bixinta iyo maamulka daryeelka caafimaadka.
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