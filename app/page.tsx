"use client";
import { Header } from "./static-components/header/Header"
import { Footer } from "./static-components/footer/Footer"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ApplyNowButton } from "./buttons/apply-now-button";
import { LearnMoreButton } from "./buttons/learn-more-button";
import { OurHistoryButton } from "./buttons/our-history-button";
import { MeetOurFacultyButton } from "./buttons/meet-our-faculty-button";
import { ApplyForAdmissionButton } from "./buttons/apply-for-admission-button";
import { RequestInformationButton } from "./buttons/request-information-button";
import Image from 'next/image';

const programs = [
  {
    faculty: "Business & Management",
    programs: [
      { name: "Business Administration" },
      { name: "Accounting & Finance" },
      { name: "Banking & Finance" },
      {
        name: "Procurement, Logistics & Supply Chain Management",
      },
      { name: "Human Resource Management" },
      { name: "Marketing" },
    ],
  },
  {
    faculty: "Computing & IT",
    programs: [
      { name: "Computer Science" },
      { name: "Information Technology" },
      { name: "Software Engineering" },
    ],
  },
  {
    faculty: "Social Sciences",
    programs: [
      {
        name: "Public Administration & Management",
      },
      {
        name: "International Relations & Diplomatic Studies",
      },
      { name: "Development Studies" },
      {
        name: "Social Work & Social Administration",
      },
      {
        name: "Public Relations & Media Management",
      },
      {
        name: "Project Planning & Management",
      },
    ],
  },
  {
    faculty: "Health Sciences",
    programs: [
      { name: "Public Health" },
      {
        name: "Nutrition & Food Science",
      },
      {
        name: "Health Service & Management",
      },
    ],
  },
  {
    faculty: "Education",
    programs: [
      {
        name: "Education Policy, Planning & Management",
      },
      {
        name: "Education Leadership & Management",
      },
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/university-campus.jpg"
              alt="Campus"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to The Unity University
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              What Begins Here Transforms Africa
            </p>
            <div className="flex gap-4 justify-center">
              <ApplyNowButton />
              <LearnMoreButton />
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Faculties
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.slice(0, 3).map((faculty) => (
                <Card
                  key={faculty.faculty}
                  className="hover:shadow-xl transition-all duration-300 border-t-4 border-red-700"
                >
                  <CardHeader className="bg-gradient-to-r from-red-50 to-white">
                    <CardTitle className="text-red-800">
                      {faculty.faculty}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {faculty.programs.map((program) => (
                        <li
                          key={program.name}
                          className="text-sm hover:text-red-700 transition-colors duration-200"
                        >
                          {program.name}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  About The Unity University
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Unity University is committed to providing quality education and fostering academic excellence. Our diverse programs and dedicated faculty prepare students for successful careers and meaningful contributions to society.
                </p>
                <div className="flex gap-4">
                  <OurHistoryButton />
                  <MeetOurFacultyButton />
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/university-campus.jpg"
                  alt="Campus"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-8 sm:py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Start Your Journey Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <ApplyForAdmissionButton />
              <RequestInformationButton />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
