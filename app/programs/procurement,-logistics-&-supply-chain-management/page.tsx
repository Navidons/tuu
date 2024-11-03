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
import { ChevronRight, Truck, BarChart2, Globe } from "lucide-react"

export default function ProcurementLogisticsSupplyChainManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Procurement, Logistics & Supply Chain Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Procurement, Logistics & Supply Chain Management
              <span className="block text-xl text-red-200 mt-2">
                Iibsiga, Gaadiidka & Maaraynta Sahayda
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Master the art of managing global supply chains and logistics operations
              <span className="block text-red-200">
                La soco fanka maaraynta silsiladaha sahayda caalamiga ah iyo hawlgallada gaadiidka
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
                  Our Procurement, Logistics & Supply Chain Management program equips you with the skills to optimize supply chains, manage logistics operations, and drive efficiency in global business operations.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Iibsiga, Gaadiidka & Maaraynta Sahayda wuxuu ku siinayaa xirfadaha aad ku hagaajin karto silsiladaha sahayda, maaraynta hawlgallada gaadiidka, iyo horumarinta wax-ku-oolnimada hawlgallada ganacsiga caalamiga ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Supply Chain Strategy", "Procurement Management", "Logistics Operations", "Inventory Management", "Global Trade Logistics"].map((item, index) => (
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
                  alt="Procurement, Logistics & Supply Chain Management Students"
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
                  icon: <Truck className="h-10 w-10 text-red-600" />,
                  title: "Industry-Relevant Skills",
                  soTitle: "Xirfado Ku Habboon Warshadaha",
                  description: "Gain practical skills in modern supply chain management and logistics.",
                  soDescription: "Hel xirfado wax ku ool ah oo ku saabsan maaraynta silsiladda sahayda casriga ah iyo gaadiidka.",
                },
                {
                  icon: <BarChart2 className="h-10 w-10 text-red-600" />,
                  title: "Data-Driven Decision Making",
                  soTitle: "Go'aan qaadashada Ku saleysan Xogta",
                  description: "Learn to analyze data for optimizing supply chain operations.",
                  soDescription: "Baro sida loo falanqeeyo xogta si loo hagaajiyo hawlgallada silsiladda sahayda.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Global Perspective",
                  soTitle: "Aragtida Caalamiga ah",
                  description: "Understand international trade and global supply chain dynamics.",
                  soDescription: "Faham ganacsiga caalamiga ah iyo dhaqdhaqaaqa silsiladda sahayda caalamiga ah.",
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
              Launch Your Career in Supply Chain Management
              <span className="block text-xl text-red-200 mt-1">
                Bilow Xirfaddaada Maaraynta Silsiladda Sahayda
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Procurement, Logistics & Supply Chain Management program and become a key player in shaping the future of global trade and logistics.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Iibsiga, Gaadiidka & Maaraynta Sahayda oo noqo ciyaaryahan muhiim ah oo qaabeynaya mustaqbalka ganacsiga caalamiga ah iyo gaadiidka.
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