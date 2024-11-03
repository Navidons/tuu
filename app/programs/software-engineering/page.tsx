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
import { ChevronRight, Code, Layers, Users } from "lucide-react"
import Image from 'next/image'

export default function SoftwareEngineering() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Software Engineering"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Software Engineering
              <span className="block text-xl text-red-200 mt-2">
                Injineernimada Software-ka
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Design, develop, and deliver innovative software solutions
              <span className="block text-red-200">
                Naqshadeynta, horumarinta, iyo bixinta xalal software oo hal-abuur leh
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
                  Our Software Engineering program prepares you to become a skilled professional in the dynamic field of software development. You&apos;ll learn to design, implement, and maintain complex software systems using industry-standard methodologies and cutting-edge technologies.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Injineernimada Software-ka wuxuu kuu diyaarinayaa inaad noqoto xirfadle aqoon leh oo ku jira goobta horumarinta software-ka ee isbedelka badan. Waxaad baran doontaa sida loo naqshadeynayo, loo hirgelinayo, oo loo ilaalinayo nidaamyada software-ka ee kakan adiga oo isticmaalaya hab-raacyada heerka warshadda iyo teknoolojiyada ugu dambeeyay.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Software Design Principles", "Agile Development", "Web and Mobile App Development", "Database Systems", "Software Testing and Quality Assurance"].map((item, index) => (
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
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Software Engineering Students"
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
                  icon: <Code className="h-10 w-10 text-red-600" />,
                  title: "Industry-Aligned Curriculum",
                  soTitle: "Manhaj Ku Habboon Warshadaha",
                  description: "Learn the latest programming languages and development frameworks.",
                  soDescription: "Baro luqadaha barnaamij-sameynta iyo qaab-dhismeedyada horumarinta ugu dambeeyay.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-red-600" />,
                  title: "Comprehensive Project Experience",
                  soTitle: "Khibrad Mashruuc oo Dhammaystiran",
                  description: "Build a portfolio of real-world software projects.",
                  soDescription: "Dhis portfolio-yo mashruucyo software oo dhabta ah.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Collaborative Learning",
                  soTitle: "Waxbarasho Wadajir ah",
                  description: "Work on team projects that simulate real software development environments.",
                  soDescription: "Ka shaqee mashruucyo kooxeed oo u ekeysiinaaya deegaannada horumarinta software-ka ee dhabta ah.",
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
              Build the Future of Software
              <span className="block text-xl text-red-200 mt-1">
                Dhis Mustaqbalka Software-ka
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Software Engineering program and become a creator of innovative digital solutions that shape our world.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Injineernimada Software-ka oo noqo abuuraha xalal dhijitaal ah oo hal-abuur leh oo qaabeynaya adduunkeenna.
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