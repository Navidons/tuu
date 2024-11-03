"use client";
import { Header } from "./static-components/header/Header"
import { Footer } from "./static-components/footer/Footer"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { ApplyNowButton } from "./buttons/apply-now-button";
import { LearnMoreButton } from "./buttons/learn-more-button";
import { OurHistoryButton } from "./buttons/our-history-button";
import { MeetOurFacultyButton } from "./buttons/meet-our-faculty-button";
import { ApplyForAdmissionButton } from "./buttons/apply-for-admission-button";
import { RequestInformationButton } from "./buttons/request-information-button";
import { useState } from "react";

const programs = [
  {
    faculty: "Business & Management",
    soFaculty: "Ganacsiga & Maamulka",
    programs: [
      { name: "Business Administration", soName: "Maamulka Ganacsiga" },
      { name: "Accounting & Finance", soName: "Xisaabaadka & Maaliyadda" },
      { name: "Banking & Finance", soName: "Bangiyada & Maaliyadda" },
      {
        name: "Procurement, Logistics & Supply Chain Management",
        soName: "Iibsiga, Gaadiidka & Maaraynta Sahayda",
      },
      { name: "Human Resource Management", soName: "Maamulka Shaqaalaha" },
      { name: "Marketing", soName: "Suuq-geynta" },
    ],
  },
  {
    faculty: "Computing & IT",
    soFaculty: "Kombuyuutarka & IT",
    programs: [
      { name: "Computer Science", soName: "Sayniska Kombuyuutarka" },
      { name: "Information Technology", soName: "Teknoolojiyada Macluumaadka" },
      { name: "Software Engineering", soName: "Injineerinka Software-ka" },
    ],
  },
  {
    faculty: "Social Sciences",
    soFaculty: "Sayniska Bulshada",
    programs: [
      {
        name: "Public Administration & Management",
        soName: "Maamulka Dadweynaha & Maaraynta",
      },
      {
        name: "International Relations & Diplomatic Studies",
        soName: "Xiriirrada Caalamiga & Daraasaadka Diblomaasiyada",
      },
      { name: "Development Studies", soName: "Daraasaadka Horumarinta" },
      {
        name: "Social Work & Social Administration",
        soName: "Shaqada Bulshada & Maamulka Bulshada",
      },
      {
        name: "Public Relations & Media Management",
        soName: "Xiriirka Dadweynaha & Maamulka Warbaahinta",
      },
      {
        name: "Project Planning & Management",
        soName: "Qorshaynta & Maaraynta Mashruucyada",
      },
    ],
  },
  {
    faculty: "Health Sciences",
    soFaculty: "Sayniska Caafimaadka",
    programs: [
      { name: "Public Health", soName: "Caafimaadka Dadweynaha" },
      {
        name: "Nutrition & Food Science",
        soName: "Nafaqada & Sayniska Cuntada",
      },
      {
        name: "Health Service & Management",
        soName: "Adeegga Caafimaadka & Maaraynta",
      },
    ],
  },
  {
    faculty: "Education",
    soFaculty: "Waxbarashada",
    programs: [
      {
        name: "Education Policy, Planning & Management",
        soName: "Siyaasadda Waxbarashada, Qorshaynta & Maaraynta",
      },
      {
        name: "Education Leadership & Management",
        soName: "Hoggaaminta Waxbarashada & Maaraynta",
      },
    ],
  },
];

export default function LandingPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredFaculty, setHoveredFaculty] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/university-campus.jpg"
              alt="Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to The Unity University
              <span className="block text-xl text-red-200 mt-2">
                Ku soo dhowow Jaamacadda Midnimada
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              What Begins Here Transforms Africa
              <span className="block text-red-200">
                Waxa Halkan Ka Bilaabma Ayaa Afrika Bedela
              </span>
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
              <span className="block text-lg text-red-700 mt-1">
                Kulliyadaheena
              </span>
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
                      <span className="block text-sm text-red-600 mt-1">
                        {faculty.soFaculty}
                      </span>
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
                          <span className="block text-xs text-red-600">
                            {program.soName}
                          </span>
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
                  <span className="block text-lg text-red-700 mt-1">
                    Ku saabsan Jaamacadda Midnimada
                  </span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Unity University is committed to providing quality
                  education and fostering academic excellence in Somaliland. Our
                  diverse programs and dedicated faculty prepare students for
                  successful careers and meaningful contributions to society.
                  <span className="block text-sm text-red-600 mt-2">
                    Jaamacadda Midnimada waxay u heellan tahay bixinta
                    waxbarasho tayo leh iyo horumarinta waxbarashada sare ee
                    Somaliland.
                  </span>
                </p>
                <div className="flex gap-4">
                  <OurHistoryButton />
                  <MeetOurFacultyButton />
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/university-campus.jpg"
                  alt="Campus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Journey Today
              <span className="block text-xl text-red-200 mt-1">
                Bilow Safarkaaga Maanta
              </span>
            </h2>
            <div className="flex gap-4 justify-center">
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
