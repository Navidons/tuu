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
import { ChevronRight, Apple, FlaskConical, Utensils } from "lucide-react"
import Link from "next/link"

export default function NutritionAndFoodScience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Nutrition and Food Science"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nutrition & Food Science
              <span className="block text-xl text-red-200 mt-2">
                Nafaqada & Sayniska Cuntada
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore the science of food and its impact on human health
              <span className="block text-red-200">
                Baadh sayniska cuntada iyo saamaynteeda caafimaadka aadanaha
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
                  Our Nutrition & Food Science program combines the study of nutrition with food technology and safety. You'll gain a deep understanding of how food affects human health, learn about food production processes, and develop skills in creating nutritious and safe food products.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Nafaqada & Sayniska Cuntada wuxuu isku daraa barashada nafaqada iyo teknolojiyada cuntada iyo badbaadada. Waxaad heli doontaa faham qoto dheer oo ku saabsan sida cuntadu u saameynayso caafimaadka aadanaha, waxaad baran doontaa habka wax soo saarka cuntada, oo aad horumarinaysaa xirfadaha aad ku abuurayso alaabooyin cunto oo nafaqo leh oo ammaan ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Human Nutrition", "Food Chemistry", "Food Microbiology", "Product Development", "Food Safety and Quality Control"].map((item, index) => (
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
                  alt="Nutrition and Food Science Students"
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
                  icon: <Apple className="h-10 w-10 text-red-600" />,
                  title: "Nutrition Expertise",
                  soTitle: "Khibradda Nafaqada",
                  description: "Gain in-depth knowledge of human nutrition and dietary needs.",
                  soDescription: "Hel aqoon qoto dheer oo ku saabsan nafaqada aadanaha iyo baahiyaha cuntada.",
                },
                {
                  icon: <FlaskConical className="h-10 w-10 text-red-600" />,
                  title: "Food Science Innovation",
                  soTitle: "Hal-abuurka Sayniska Cuntada",
                  
                  description: "Learn cutting-edge techniques in food product development.",
                  soDescription: "Baro farsamooyinka ugu dambeeyay ee horumarinta alaabta cuntada.",
                },
                {
                  icon: <Utensils className="h-10 w-10 text-red-600" />,
                  title: "Industry-Ready Skills",
                  soTitle: "Xirfadaha Diyaarka u ah Warshadaha",
                  description: "Develop practical skills valued in the food industry.",
                  soDescription: "Horumarso xirfado wax ku ool ah oo lagu qiimeeyo warshadaha cuntada.",
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
              Nourish the Future
              <span className="block text-xl text-red-200 mt-1">
                Quudi Mustaqbalka
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Nutrition & Food Science program and become a leader in creating healthier, safer, and more sustainable food solutions for the world.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Nafaqada & Sayniska Cuntada oo noqo hoggaamiye ku aadan abuurista xalal cunto oo caafimaad leh, ammaan ah, oo joogto ah oo adduunka.
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