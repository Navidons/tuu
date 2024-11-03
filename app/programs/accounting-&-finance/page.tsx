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
import { ChevronRight, Calculator, TrendingUp, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function AccountingAndFinance() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Accounting and Finance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Accounting & Finance
              <span className="block text-xl text-red-200 mt-2">
                Xisaabaadka & Maaliyadda
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Master the language of business and drive financial success
              <span className="block text-red-200">
                La soco luuqadda ganacsiga oo hoggaami guusha maaliyadeed
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
                  Our Accounting & Finance program provides a solid foundation in financial reporting, analysis, and management. You'll develop the skills to navigate complex financial landscapes and make informed business decisions.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Xisaabaadka & Maaliyadda wuxuu bixiyaa aasaas adag oo ku saabsan warbixinta maaliyadeed, falanqaynta, iyo maamulka. Waxaad horumarinaysaa xirfadaha aad kula socon karto muuqaallada maaliyadeed ee kakan oo aad ku gaari karto go'aannada ganacsi ee la ogaadey.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Financial Accounting", "Managerial Accounting", "Corporate Finance", "Taxation", "Auditing"].map((item, index) => (
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
                  alt="Accounting and Finance Students"
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
                  icon: <Calculator className="h-10 w-10 text-red-600" />,
                  title: "Comprehensive Skill Set",
                  soTitle: "Xirfado Dhammaystiran",
                  description: "Develop a wide range of accounting and financial skills.",
                  soDescription: "Horumar xirfado badan oo xisaabaad iyo maaliyadeed.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Career Advancement",
                  soTitle: "Horumarinta Xirfadda",
                  description: "Prepare for leadership roles in finance and accounting.",
                  soDescription: "U diyaargarow doorarka hoggaaminta maaliyadda iyo xisaabaadka.",
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-red-600" />,
                  title: "Ethical Practice",
                  soTitle: "Dhaqan Anshaxa leh",
                  description: "Learn to uphold the highest standards of financial integrity.",
                  soDescription: "Baro inaad ilaaliso heerarka ugu sarreeya ee daacadnimada maaliyadeed.",
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
              Start Your Journey in Accounting & Finance
              <span className="block text-xl text-red-200 mt-1">
                Bilow Safarkaaga Xisaabaadka & Maaliyadda
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Accounting & Finance program and gain the skills to become a financial leader in today's dynamic business world.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Xisaabaadka & Maaliyadda oo hel xirfadaha aad ku noqon karto hoggaamiye maaliyadeed adduunka ganacsiga ee isbeddelka badan ee maanta.
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