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
import { ChevronRight, BookOpen, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function EducationPolicyPlanningAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Education Policy, Planning & Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education Policy, Planning & Management
              <span className="block text-xl text-red-200 mt-2">
                Siyaasadda Waxbarashada, Qorsheynta & Maaraynta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Shape the future of education systems and policies
              <span className="block text-red-200">
                Qaabeynta mustaqbalka nidaamyada iyo siyaasadaha waxbarashada
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
                  Our Education Policy, Planning & Management program prepares you to become a leader in shaping educational systems. You'll gain expertise in policy analysis, strategic planning, and effective management of educational institutions at local, national, and international levels.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Siyaasadda Waxbarashada, Qorsheynta & Maaraynta wuxuu kuu diyaarinayaa inaad noqoto hoggaamiye ku aadan qaabeynta nidaamyada waxbarashada. Waxaad heli doontaa aqoon ku saabsan falanqaynta siyaasadda, qorsheynta istaraatiijiga ah, iyo maaraynta wax ku oolka ah ee hay'adaha waxbarashada heerarka deegaanka, qaranka, iyo caalamiga ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Education Policy Analysis", "Strategic Planning in Education", "Educational Leadership", "Economics of Education", "Comparative Education Systems"].map((item, index) => (
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
                  alt="Education Policy, Planning & Management Students"
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
                  icon: <BookOpen className="h-10 w-10 text-red-600" />,
                  title: "Comprehensive Curriculum",
                  soTitle: "Manhaj Dhammaystiran",
                  description: "Gain a holistic understanding of education systems and policies.",
                  soDescription: "Hel faham dhammaystiran oo ku saabsan nidaamyada iyo siyaasadaha waxbarashada.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Policy Analysis Skills",
                  soTitle: "Xirfadaha Falanqaynta Siyaasadda",
                  description: "Develop expertise in analyzing and shaping educational policies.",
                  soDescription: "Horumarso aqoonta falanqaynta iyo qaabeynta siyaasadaha waxbarashada.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Global Perspective",
                  soTitle: "Aragtida Caalamiga ah",
                  description: "Learn from international case studies and best practices.",
                  soDescription: "Ka baro daraasadaha kiisaska caalamiga ah iyo dhaqamada ugu wanaagsan.",
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
              Transform Education Systems
              <span className="block text-xl text-red-200 mt-1">
                Bedel Nidaamyada Waxbarashada
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Education Policy, Planning & Management program and become a leader in shaping the future of education systems and policies.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Siyaasadda Waxbarashada, Qorsheynta & Maaraynta oo noqo hoggaamiye ku aadan qaabeynta mustaqbalka nidaamyada iyo siyaasadaha waxbarashada.
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