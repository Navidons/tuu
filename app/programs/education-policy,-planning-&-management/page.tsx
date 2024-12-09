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
import { ChevronRight, BookOpen } from "lucide-react"
import Image from 'next/image'

// Define the interface for the item
interface ProgramCardItem {
  icon: JSX.Element; // or the specific type of your icon
  title: string;
  description: string;
}

// Ensure the array is explicitly typed
const programItems: ProgramCardItem[] = [
  { icon: <BookOpen />, title: "Education Policy Analysis", description: "Analyze educational policies." },
  { icon: <BookOpen />, title: "Curriculum Development", description: "Design effective curricula." },
  { icon: <BookOpen />, title: "Educational Leadership", description: "Lead educational institutions." }
];

export default function EducationPolicyPlanningAndManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/courses/education.jpg"
              alt="Education Policy, Planning & Management"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education Policy, Planning & Management
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Shape the future of education through effective policy and management
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-900">
                  Program Overview
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Education Policy, Planning & Management program prepares you to become a leader in shaping educational systems. You&apos;ll gain expertise in policy analysis, strategic planning, and effective management of educational institutions at local, national, and international levels.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Education Policy Analysis", "Strategic Planning in Education", "Educational Leadership", "Economics of Education", "Comparative Education Systems"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 hover:translate-x-2 transition-transform duration-300 ease-in-out">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                  Apply Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/courses/education.jpg"
                  alt="Education Policy, Planning & Management Students"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              Why Choose Our Program?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <BookOpen className="h-10 w-10 text-blue-600" />
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

        <section className="py-8 md:py-12 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Transform Education Systems
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Join our Education Policy, Planning & Management program and become a leader in shaping the future of education systems and policies.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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