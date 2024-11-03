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
import { ChevronRight, BookOpen, GraduationCap, Users } from "lucide-react"
import Image from 'next/image'


export default function BankingAndFinance() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/banking-finance-hero.jpg"
              alt="Banking and Finance"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Banking & Finance
              <span className="block text-xl text-red-200 mt-2">
                Bangiyada & Maaliyadda
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Prepare for a dynamic career in the financial sector
              <span className="block text-red-200">
                U diyaargarow xirfad firfircoon oo ku aadan waaxda maaliyadda
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
                  Our Banking & Finance program equips students with the knowledge and skills needed to excel in the dynamic world of finance. You&apos;ll gain a deep understanding of financial markets, banking operations, investment strategies, and risk management.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Bangiyada & Maaliyadda wuxuu ardayda siiyaa aqoonta iyo xirfadaha loo baahan yahay si ay ugu guuleystaan adduunka isbeddelka badan ee maaliyadda. Waxaad heli doontaa faham qoto dheer oo ku saabsan suuqyada maaliyadda, hawlgallada bangiyada, xeeladaha maalgashiga, iyo maaraynta halista.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Financial Analysis", "Banking Systems", "Investment Management", "Risk Assessment", "Corporate Finance"].map((item, index) => (
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
                  src="/banking-finance-overview.jpg"
                  alt="Banking and Finance Students"
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
                  icon: <BookOpen className="h-10 w-10 text-red-600" />,
                  title: "Comprehensive Curriculum",
                  soTitle: "Manhaj Dhammaystiran",
                  description: "Our program covers all aspects of modern banking and finance.",
                  soDescription: "Barnaamijkeenu wuxuu daboolayaa dhammaan dhinacyada bangiyada iyo maaliyadda casriga ah.",
                },
                {
                  icon: <GraduationCap className="h-10 w-10 text-red-600" />,
                  title: "Industry-Experienced Faculty",
                  soTitle: "Macalimiin Khibrad u leh Warshadaha",
                  description: "Learn from professionals with real-world financial sector experience.",
                  soDescription: "Ka baro xirfadlayaal leh waayo-aragnimo dhabta ah oo waaxda maaliyadda ah.",
                },
                {
                  icon: <Users className="h-10 w-10 text-red-600" />,
                  title: "Networking Opportunities",
                  soTitle: "Fursado Isku-xirka",
                  description: "Connect with industry leaders and fellow finance enthusiasts.",
                  soDescription: "La xiriir hogaamiyeyaasha warshadaha iyo kuwa kale ee xiiseeya maaliyadda.",
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
              Ready to Start Your Journey?
              <span className="block text-xl text-red-200 mt-1">
                Ma Diyaar u Tahay Inaad Bilowdo Safarkaaga?
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Banking & Finance program and pave the way for a successful career in the financial sector.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Bangiyada & Maaliyadda oo u gogol xaar mustaqbal guul leh oo waaxda maaliyadda ah.
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