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
import { ChevronRight, Users, Briefcase, TrendingUp } from "lucide-react"

export default function HumanResourceManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Human Resource Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Human Resource Management
              <span className="block text-xl text-red-200 mt-2">
                Maamulka Shaqaalaha
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Develop the skills to lead and manage an organization's most valuable asset: its people
              <span className="block text-red-200">
                Horumarso xirfadaha hogaaminta iyo maaraynta hantida ugu qiimaha badan ee hay'adda: shaqaalaheeda
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
                  Our Human Resource Management program prepares you to become a strategic partner in organizational success. You'll learn to effectively manage talent, foster employee development, and create positive work environments.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Maamulka Shaqaalaha wuxuu kuu diyaarinayaa inaad noqoto lamaane istaraatiiji ah oo guusha hay'adda ah. Waxaad baran doontaa sida wax ku ool ah loogu maareeyo kartida, kor loogu qaado horumarinta shaqaalaha, oo loo abuuro jawi shaqo oo wanaagsan.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Talent Acquisition", "Employee Relations", "Performance Management", "Compensation and Benefits", "Organizational Development"].map((item, index) => (
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
                  alt="Human Resource Management Students"
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
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Strategic HR Leadership",
                  soTitle: "Hogaaminta Istaraatiijiga ah ee HR",
                  description: "Develop skills to become a strategic partner in organizational success.",
                  soDescription: "Horumarso xirfadaha aad ku noqon karto lamaane istaraatiiji ah oo guusha hay'adda ah.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-red-600" />,
                  title: "Practical Industry Experience",
                  soTitle: "Khibrad Warshadeed oo Wax ku ool ah",
                  description: "Gain hands-on experience through internships and case studies.",
                  soDescription: "Hel waayo-aragnimo toos ah iyada oo loo marayo tababbarro iyo daraasadaha kiiska.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Career Growth Opportunities",
                  soTitle: "Fursadaha Koboca Shaqada",
                  description: "Prepare for leadership roles in HR across various industries.",
                  soDescription: "U diyaargarow doorarka hoggaaminta HR-ka warshadaha kala duwan.",
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
              Shape the Future of Work
              <span className="block text-xl text-red-200 mt-1">
                Qaabeynta Mustaqbalka Shaqada
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Human Resource Management program and become a key player in shaping organizational culture and driving employee success.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Maamulka Shaqaalaha oo noqo ciyaaryahan muhiim ah oo qaabeynaya dhaqanka hay'adda iyo hoggaaminta guusha shaqaalaha.
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