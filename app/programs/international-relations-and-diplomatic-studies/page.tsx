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
import { ChevronRight, Globe, Users, Briefcase } from "lucide-react"
import Image from 'next/image'

export default function InternationalRelationsAndDiplomaticStudies() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="International Relations and Diplomatic Studies"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              International Relations & Diplomatic Studies
              <span className="block text-xl text-red-200 mt-2">
                Xiriirrada Caalamiga & Daraasaadka Diblomaasiyada
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Navigate global politics and shape international cooperation
              <span className="block text-red-200">
                La socoshada siyaasadda caalamiga ah iyo qaabeynta iskaashiga caalamiga ah
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
                  Our International Relations & Diplomatic Studies program prepares you for a career in global affairs. You&apos;ll gain a deep understanding of international politics, diplomacy, and global economic systems, equipping you to address complex global challenges.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Xiriirrada Caalamiga & Daraasaadka Diblomaasiyada wuxuu kuu diyaarinayaa xirfad ku aadan arrimaha caalamiga ah. Waxaad heli doontaa faham qoto dheer oo ku saabsan siyaasadda caalamiga ah, diblomaasiyada, iyo nidaamyada dhaqaalaha adduunka, taas oo kuu diyaarinaysa inaad wajahdo caqabadaha adag ee caalamiga ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Global Politics", "Diplomatic Theory and Practice", "International Law", "Global Economic Systems", "Conflict Resolution"].map((item, index) => (
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
                  alt="International Relations and Diplomatic Studies Students"
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
              <span className="block text-lg text-red-600 mt-1">
                Maxaa Loogu Doortay Barnaamijkeena?
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Global Perspective",
                  soTitle: "Aragtida Caalamiga ah",
                  description: "Gain insights into international politics and global affairs.",
                  soDescription: "Hel aragtiyo ku saabsan siyaasadda caalamiga ah iyo arrimaha adduunka.",
                },
                {
                  icon: <Users className="h-10 w-10  text-red-600" />,
                  title: "Diplomatic Skills",
                  soTitle: "Xirfadaha Diblomaasiyada",
                  description: "Develop negotiation and cross-cultural communication skills.",
                  soDescription: "Horumarso xirfadaha wada-xaajoodka iyo isgaarsiinta dhaqamada kala duwan.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                  title: "Career Opportunities",
                  soTitle: "Fursadaha Shaqada",
                  description: "Prepare for roles in diplomacy, international organizations, and global NGOs.",
                  soDescription: "U diyaargarow doorarka diblomaasiyada, hay'adaha caalamiga ah, iyo NGO-yada caalamiga ah.",
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
              Shape Global Affairs
              <span className="block text-lg md:text-xl text-red-200 mt-1">
                Qaabeynta Arrimaha Caalamiga ah
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our International Relations & Diplomatic Studies program and become a key player in shaping international cooperation and global policy.
              <span className="block text-xs md:text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Xiriirrada Caalamiga & Daraasaadka Diblomaasiyada oo noqo ciyaaryahan muhiim ah oo qaabeynaya iskaashiga caalamiga ah iyo siyaasadda adduunka.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 font-semibold tracking-wide transform hover:scale-105">
                Apply Now |
                <span className="block text-xs">Codso Hadda</span>
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 font-semibold tracking-wide transform hover:scale-105">
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