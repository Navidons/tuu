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
import { ChevronRight, Target, Clock, Users } from "lucide-react"
import Image from 'next/image'

export default function ProjectPlanningAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Project Planning and Management"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Planning & Management
              <span className="block text-xl text-red-200 mt-2">
                Qorsheynta & Maaraynta Mashruuca
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Turn ideas into reality through effective project management
              <span className="block text-red-200">
                U bedel fikradaha xaqiiq iyada oo loo marayo maaraynta mashruuca oo wax ku ool ah
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
                  Our Project Planning & Management program equips you with the skills to lead complex projects from conception to completion. You&apos;ll learn to develop project strategies, manage resources effectively, and deliver results on time and within budget across various industries.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Qorsheynta & Maaraynta Mashruuca wuxuu ku siinayaa xirfadaha aad ku hoggaamin karto mashruucyo adag laga bilaabo fikradda ilaa dhammaadka. Waxaad baran doontaa inaad horumariso xeeladaha mashruuca, si wax ku ool ah u maamusho kheyraadka, oo aad u gaarsiin natiijooyin waqtiga la rabay iyo miisaaniyadda la qorsheeyay ee warshadaha kala duwan.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Project Lifecycle Management", "Risk Assessment", "Budgeting and Cost Control", "Stakeholder Management", "Agile Methodologies"].map((item, index) => (
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
                  alt="Project Planning and Management Students"
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
                  icon: <Target className="h-10 w-10 text-red-600" />,
                  title: "Strategic Planning",
                  soTitle: "Qorsheynta Istaraatiijiga ah",
                  description: "Learn to develop and execute effective project strategies.",
                  soDescription: "Baro inaad horumariso oo aad fuliso xeelado mashruuc oo wax ku ool ah.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-red-600" />,
                  title: "Efficient Execution",
                  soTitle: "Fulinta Hufan",
                  description: "Master techniques for on-time and within-budget project delivery.",
                  soDescription: "La soco farsamooyinka loogu talagalay in mashruuca lagu gaarsiiyo waqtiga iyo miisaaniyadda la qorsheeyay.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Leadership Skills",
                  soTitle: "Xirfadaha Hoggaaminta",
                  description: "Develop the ability to lead diverse project teams effectively.",
                  soDescription: "Horumarso awooda aad si wax ku ool ah ugu hoggaamin karto kooxaha mashruuca ee kala duwan.",
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
              Lead Projects to Success
              <span className="block text-xl text-red-200 mt-1">
                Hoggaami Mashruucyada ilaa Guusha
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Project Planning & Management program and become a skilled project leader capable of driving initiatives to successful completion.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Qorsheynta & Maaraynta Mashruuca oo noqo hoggaamiye mashruuc oo xirfad leh oo awood u leh inuu hoggaamiyo hindiseyaal ilaa dhammaad guul leh.
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