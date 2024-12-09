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
import { ChevronRight } from "lucide-react"
import Image from 'next/image'

export default function SocialWorkAndSocialAdministration() {
  const programHighlights = [
    {
      title: "Comprehensive Curriculum",
      description: "Our program offers a holistic approach to social work, covering theoretical foundations and practical applications."
    },
    {
      title: "Hands-on Experience",
      description: "Gain real-world experience through internships and community engagement projects."
    },
    {
      title: "Expert Faculty",
      description: "Learn from experienced professionals with deep insights into social work and administration."
    }
  ];

  const whyChooseProgramItems = [
    {
      title: "Comprehensive Curriculum",
      description: "Our program offers a holistic approach to social work, covering theoretical foundations and practical skills."
    },
    {
      title: "Experienced Faculty",
      description: "Learn from professionals with extensive experience in social work and community development."
    },
    {
      title: "Practical Internships",
      description: "Gain real-world experience through carefully curated internship opportunities with local organizations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/international-relations.jpg"
              alt="Social Work & Social Administration"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Social Work & Social Administration
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Make a difference in communities through effective social work
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-800">
                  Program Overview
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Social Work & Social Administration program prepares you to make a meaningful impact in people's lives. You'll develop the skills to address social issues, advocate for vulnerable populations, and manage social service organizations effectively.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Social Policy", "Community Development", "Case Management", "Social Research Methods", "Nonprofit Management"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Apply Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/courses/international-relations.jpg"
                  alt="Social Work & Social Administration Students"
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
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Why Choose Our Program?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseProgramItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <ChevronRight className="h-10 w-10 text-blue-600" />
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

        <section className="py-8 md:py-12 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Make a Difference in Society
            </h2>
            <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Social Work & Social Administration program and become a catalyst for positive change in communities and individuals' lives.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now
              </Button>
              <Button variant="outline" className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
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