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
import { ChevronRight, Users, Lightbulb, Target } from "lucide-react"
import Image from 'next/image'


export default function EducationLeadershipAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Education Leadership & Management"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education Leadership & Management
              <span className="block text-xl text-red-200 mt-2">
                Hoggaaminta Waxbarashada & Maaraynta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Lead and innovate in educational institutions and systems
              <span className="block text-red-200">
                Hoggaami oo hal-abuur ku samee hay&apos;adaha iyo nidaamyada waxbarashada
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
                  Our Education Leadership & Management program prepares you for leadership roles in educational institutions and organizations. You&apos;ll develop skills in strategic planning, organizational management, and educational innovation to effectively lead and transform educational environments.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Hoggaaminta Waxbarashada & Maaraynta wuxuu kuu diyaarinayaa doorarka hoggaaminta ee hay&apos;adaha iyo ururada waxbarashada. Waxaad horumarinaysaa xirfadaha qorsheynta istaraatiijiga ah, maamulka ururka, iyo hal-abuurka waxbarashada si aad si wax ku ool ah u hoggaamiso oo aad u beddesho deegaannada waxbarashada.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Educational Leadership", "Organizational Behavior in Education", "Strategic Planning for Educational Institutions", "Educational Technology Integration", "Change Management in Education"].map((item, index) => (
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
                  alt="Education Leadership & Management Students"
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
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Leadership Development",
                  soTitle: "Horumarinta Hoggaaminta",
                  description: "Cultivate essential skills for effective educational leadership.",
                  soDescription: "Horumarso xirfadaha muhiimka ah ee hoggaaminta waxbarashada ee wax ku oolka ah.",
                },
                {
                  icon: <Lightbulb  className="h-10 w-10 text-red-600" />,
                  title: "Innovation in Education",
                  soTitle: "Hal-abuurka Waxbarashada",
                  description: "Learn to implement innovative practices in educational settings.",
                  soDescription: "Baro sida loo hirgeliyo dhaqamada hal-abuurka leh ee goobaha waxbarashada.",
                },
                {
                  icon: <Target className="h-10 w-10 text-red-600" />,
                  title: "Strategic Management",
                  soTitle: "Maaraynta Istaraatiijiga ah",
                  description: "Develop skills in strategic planning and organizational management.",
                  soDescription: "Horumarso xirfadaha qorsheynta istaraatiijiga ah iyo maamulka ururka.",
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
              Lead the Future of Education
              <span className="block text-xl text-red-200 mt-1">
                Hoggaami Mustaqbalka Waxbarashada
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Education Leadership & Management program and become a transformative leader in educational institutions and systems.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Hoggaaminta Waxbarashada & Maaraynta oo noqo hoggaamiye isbedel ku sameeya hay&apos;adaha iyo nidaamyada waxbarashada.
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