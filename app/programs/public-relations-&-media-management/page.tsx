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
import { ChevronRight, MessageSquare, Globe, TrendingUp } from "lucide-react"
import Image from 'next/image'

export default function PublicRelationsAndMediaManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Public Relations and Media Management"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Public Relations & Media Management
              <span className="block text-xl text-red-200 mt-2">
                Xiriirka Dadweynaha & Maamulka Warbaahinta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Shape narratives and manage communications in the digital age
              <span className="block text-red-200">
                Qaabeynta sheekada iyo maaraynta isgaarsiinta ee casriga dhijitaalka ah
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
                  Our Public Relations & Media Management program equips you with the skills to navigate the complex world of modern communications. You&apos;ll learn to craft compelling messages, manage brand reputations, and leverage digital platforms for effective public relations strategies.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Xiriirka Dadweynaha & Maamulka Warbaahinta wuxuu ku siinayaa xirfadaha aad kula tacaali karto adduunka adag ee isgaarsiinta casriga ah. Waxaad baran doontaa inaad abuurto farriimo soo jiidanaya, maarayso sumcadda calaamadda, oo u isticmaasho madallada dhijitaalka ah xeeladaha wax ku oolka ah ee xiriirka dadweynaha.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Strategic Communication", "Digital Media Management", "Crisis Communication", "Brand Management", "Media Relations"].map((item, index) => (
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
                  alt="Public Relations and Media Management Students"
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
                  icon: <MessageSquare className="h-10 w-10 text-red-600" />,
                  title: "Strategic Communication",
                  soTitle: "Isgaarsiinta Istaraatiijiga ah",
                  description: "Learn to craft and deliver impactful messages across various media.",
                  soDescription: "Baro inaad abuurto oo gaarsiiso farriimo saamayn leh oo warbaahinta kala duwan ah.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-red-600" />,
                  title: "Digital Expertise",
                  soTitle: "Khibradda Dhijitaalka ah",
                  description: "Gain proficiency in managing digital platforms and social media.",
                  soDescription:  "Hel aqoon ku saabsan maaraynta madallada dhijitaalka ah iyo warbaahinta bulshada.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Industry-Aligned Skills",
                  soTitle: "Xirfadaha Ku Habboon Warshadaha",
                  description: "Develop skills that meet the evolving needs of the PR and media industry.",
                  soDescription: "Horumarso xirfadaha buuxinaya baahiyaha sii kordhaya ee warshadaha PR iyo warbaahinta.",
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
              Become a Communication Expert
              <span className="block text-xl text-red-200 mt-1">
                Noqo Khabiir Isgaarsiineed
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Public Relations & Media Management program and master the art of strategic communication in the digital era.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Xiriirka Dadweynaha & Maamulka Warbaahinta oo la soco fanka isgaarsiinta istaraatiijiga ah ee casriga dhijitaalka ah.
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