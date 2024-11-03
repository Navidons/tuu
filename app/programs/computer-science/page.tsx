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
import { ChevronRight, Code, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function ComputerScience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Computer Science"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Computer Science
              <span className="block text-xl text-red-200 mt-2">
                Sayniska Kombuyuutarka
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Innovate, create, and shape the future of technology
              <span className="block text-red-200">
                Hal-abuur, abuur, oo qaabeey mustaqbalka teknoolojiyada
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
                  Our Computer Science program prepares you for a dynamic career in technology. You'll gain a strong foundation in programming, algorithms, data structures, and software engineering principles. Our curriculum emphasizes both theoretical knowledge and practical skills, ensuring you're ready for the challenges of the tech industry.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Sayniska Kombuyuutarka wuxuu kuu diyaarinayaa xirfad firfircoon oo teknoolojiyada ah. Waxaad heli doontaa aasaas adag oo ku saabsan barnaamij-sameynta, algorithms-ka, qaab-dhismeedyada xogta, iyo mabaadi'da injineernimada software-ka. Manhajkeenu wuxuu xoogga saarayaa labadaba aqoonta cilmiga iyo xirfadaha wax ku oolka ah, si loo hubiyo inaad diyaar u tahay caqabadaha warshadda teknoolojiyada.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Programming Languages", "Data Structures & Algorithms", "Software Engineering", "Database Systems", "Artificial Intelligence"].map((item, index) => (
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
                  alt="Computer Science Students"
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
                  icon: <Code className="h-10 w-10 text-red-600" />,
                  title: "Cutting-Edge Curriculum",
                  soTitle: "Manhaj Casri ah",
                  description: "Stay updated with the latest technologies and programming languages.",
                  soDescription: "La soco teknoolojiyada ugu dambeeyay iyo luqadaha barnaamij-sameynta.",
                },
                {
                  icon: <Database className="h-10 w-10 text-red-600" />,
                  title: "Hands-On Projects",
                  soTitle: "Mashruucyo Tababar leh",
                  description: "Build real-world applications and systems as part of your coursework.",
                  soDescription: "Dhis applications iyo nidaamyo dhabta ah oo qayb ka ah coursework-gaaga.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Industry Connections",
                  soTitle: "Xiriirrada Warshadaha",
                  description: "Benefit from our partnerships with leading tech companies.",
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

        <section className="py-12 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Tech Journey
              <span className="block text-xl text-red-200 mt-1">
                Bilow Safarkaaga Teknoolojiyada
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Computer Science program and become a part of the digital revolution shaping our world.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Sayniska Kombuyuutarka oo noqo qayb ka mid ah kacaanka dhijitaalka ah ee qaabeynaya adduunkeenna.
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