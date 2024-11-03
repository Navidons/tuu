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
import { ChevronRight, Server, Shield, Globe } from "lucide-react"
import Image from 'next/image'

export default function InformationTechnology() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Information Technology"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Information Technology
              <span className="block text-xl text-red-200 mt-2">
                Teknoolojiyada Macluumaadka
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Build, manage, and secure the digital infrastructure of tomorrow
              <span className="block text-red-200">
                Dhis, maamul, oo ilaali kaabayaasha dhijitaalka ah ee berri
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
                  Our Information Technology program equips you with the skills to design, implement, and manage complex IT systems. You&apos;ll learn about network administration, cybersecurity, cloud computing, and IT project management, preparing you for a versatile career in the ever-evolving tech industry.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Teknoolojiyada Macluumaadka wuxuu ku siinayaa xirfadaha aad ku naqshadeyn karto, ku hirgelin karto, oo ku maamuli karto nidaamyada IT-ga ee kakan. Waxaad baran doontaa maamulka shabakadda, amniga cyber-ka, cloud computing, iyo maaraynta mashruucyada IT, taas oo kuu diyaarinaysa xirfad kala duwan oo ku jirta warshadda teknoolojiyada ee had iyo jeer isbedelaysa.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Network Administration", "Cybersecurity", "Cloud Computing", "Database Management", "IT Project Management"].map((item, index) => (
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
                  alt="Information Technology Students"
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
                  icon: <Server className="h-10 w-10 text-red-600" />,
                  title: "Hands-On Experience",
                  soTitle: "Khibrad Toos ah",
                  description: "Work with the latest technologies in our state-of-the-art IT labs.",
                  soDescription: "La shaqee teknoolojiyada ugu dambeeyay ee sheybaarkayaga IT-ga ee casriga ah.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-red-600" />,
                  title: "Cybersecurity Focus",
                  soTitle: "Diiradda Amniga Cyber-ka",
                  description: "Gain expertise in protecting digital assets and information systems.",
                  soDescription: "Hel aqoon ku saabsan ilaalinta hantida dhijitaalka ah iyo nidaamyada macluumaadka.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Industry Partnerships",
                  soTitle: "Iskaashiyada Warshadaha",
                  description: "Benefit from our collaborations with leading tech companies.",
                  soDescription: "Ka faa'iideyso iskaashigayaga shirkadaha teknoolojiyada ee hormuudka ah.",
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
              Become an IT Professional
              <span className="block text-lg md:text-xl text-red-200 mt-1">
                Noqo Xirfadle IT
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Information Technology program and gain the skills to lead in the digital transformation of businesses and organizations.
              <span className="block text-xs md:text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Teknoolojiyada Macluumaadka oo hel xirfadaha aad ku hogaamin karto isbedelka dhijitaalka ah ee ganacsiyada iyo hay&apos;adaha.
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