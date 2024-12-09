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
import { ChevronRight, Globe, Users, Briefcase } from "lucide-react"
import Image from 'next/image'

interface ProgramItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function InternationalRelationsAndDiplomaticStudies() {
  const programItems: ProgramItem[] = [
    {
      icon: <Globe className="h-10 w-10 text-red-600" />,
      title: "Global Perspective",
      description: "Gain insights into international politics and global affairs.",
    },
    {
      icon: <Users className="h-10 w-10  text-red-600" />,
      title: "Diplomatic Skills",
      description: "Develop negotiation and cross-cultural communication skills.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-red-600" />,
      title: "Career Opportunities",
      description: "Prepare for roles in diplomacy, international organizations, and global NGOs.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/international-relations.jpg"
              alt="International Relations"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              International Relations & Diplomatic Studies
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Navigate global politics and shape international cooperation
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-red-800">
                  Program Overview
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our International Relations & Diplomatic Studies program prepares you for a career in global affairs. You&apos;ll gain a deep understanding of international politics, diplomacy, and global economic systems, equipping you to address complex global challenges.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Global Politics", "Diplomatic Theory and Practice", "International Law", "Global Economic Systems", "Conflict Resolution"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-700 hover:bg-red-800 text-white">
                  Apply Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/courses/international-relations.jpg"
                  alt="International Relations Students"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-800">
              Why Choose Our Program?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      {item.icon}
                      <div>
                        {item.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Shape Global Affairs
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our International Relations & Diplomatic Studies program and become a key player in shaping international cooperation and global policy.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 font-semibold tracking-wide transform hover:scale-105">
                Apply Now
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 font-semibold tracking-wide transform hover:scale-105">
                Request Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}