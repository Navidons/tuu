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
import { ChevronRight, Building2, Scale, TrendingUp } from "lucide-react"
import Image from 'next/image'

export default function PublicAdministrationAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Public Administration and Management"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Public Administration &amp; Management
              <span className="block text-xl text-red-200 mt-2">
                Maamulka Dadweynaha &amp; Maaraynta
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Shape public policy and lead effective governance
              <span className="block text-red-200">
                Qaabeynta siyaasadda dadweynaha iyo hoggaaminta maamul wax ku ool ah
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
                  Our Public Administration &amp; Management program prepares you for leadership roles in government, non-profit organizations, and public sector institutions. You&apos;ll gain a deep understanding of public policy, governance structures, and management principles to drive positive change in society.
                  <span className="block text-sm text-red-600 mt-2">
                    Barnaamijkeena Maamulka Dadweynaha &amp; Maaraynta wuxuu kuu diyaarinayaa doorarka hoggaaminta ee dawladda, hay&apos;adaha aan faa&apos;iido doonka ahayn, iyo hay&apos;adaha qaybta dadweynaha. Waxaad heli doontaa faham qoto dheer oo ku saabsan siyaasadda dadweynaha, qaab-dhismeedyada maamulka, iyo mabaadi&apos;da maaraynta si loo hoggaamiyo isbedel wanaagsan oo bulshada ah.
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {["Public Policy Analysis", "Governance and Ethics", "Public Finance", "Strategic Management", "Leadership in Public Sector"].map((item, index) => (
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
                  alt="Public Administration and Management Students"
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
                  icon: <Building2 className="h-10 w-10 text-red-600" />,
                  title: "Comprehensive Curriculum",
                  soTitle: "Manhaj Dhammaystiran",
                  description: "Gain expertise in all aspects of public administration and management.",
                  soDescription: "Hel aqoon ku saabsan dhammaan dhinacyada maamulka dadweynaha iyo maaraynta.",
                },
                {
                  icon: <Scale className="h-10 w-10 text-red-600" />,
                  title: "Ethical Leadership",
                  soTitle: "Hoggaaminta Anshaxa leh",
                  description: "Develop skills to lead with integrity and ethical decision-making.",
                  soDescription: "Horumarso xirfadaha aad ku hoggaamin karto daacadnimo iyo go'aan qaadashada anshax leh.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-red-600" />,
                  title: "Career Advancement",
                  soTitle: "Horumarinta Xirfadda",
                  description: "Prepare for leadership roles in government and non-profit sectors.",
                  soDescription: "U diyaargarow doorarka hoggaaminta ee dawladda iyo qaybaha aan faa'iido doonka ahayn.",
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
              Lead the Future of Public Service
              <span className="block text-xl text-red-200 mt-1">
                Hoggaami Mustaqbalka Adeegga Dadweynaha
              </span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join our Public Administration &amp; Management program and become a catalyst for positive change in government and society.
              <span className="block text-sm text-red-200 mt-2">
                Ku soo biir barnaamijkeena Maamulka Dadweynaha &amp; Maaraynta oo noqo horseed isbedel wanaagsan oo dawladda iyo bulshada ah.
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