"use client";
import { Header } from "./static-components/header/Header"
import { Footer } from "./static-components/footer/Footer"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TVSlideshow } from './components/TVSlideshow';
import { CallToAction } from "./components/program/CallToAction";

const carouselData = [
  {
    image: "/hero-section/hero.png",
    title: "Welcome to The Unity University",
    subtitle: "What Begins Here Transforms Africa",
    highlight: "Excellence in Education"
  },
  {
    image: "/hero-section/university-campus-1.jpg",
    title: "Experience Campus Life",
    subtitle: "Join a Vibrant Community of Scholars",
    highlight: "Student Life"
  },
  {
    image: "/hero-section/research-innovation.jpg",
    title: "Leading Through Innovation",
    subtitle: "Pioneering Research and Development",
    highlight: "Research Excellence"
  },
  {
    image: "/hero-section/global-perspective.jpg",
    title: "Global Perspectives",
    subtitle: "Connect with Students Worldwide",
    highlight: "International Community"
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 relative z-10 text-center">
                  <div className="space-y-6 max-w-4xl mx-auto">
                    <span className="inline-block text-red-500 font-semibold text-lg tracking-wider uppercase animate-pulse">
                      {slide.highlight}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg transform transition-transform duration-700 translate-y-0">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto transform transition-transform duration-700 translate-y-0">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">Academic Excellence</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Our Faculties
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover our diverse range of academic programs designed to empower the next generation of leaders
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-10 left-10 w-32 h-32 bg-red-50 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute -bottom-10 right-10 w-32 h-32 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {programs.slice(0, 3).map((faculty) => (
                  <Card
                    key={faculty.faculty}
                    className="hover:shadow-xl transition-all duration-300 border-none bg-white/90 backdrop-blur-sm h-full"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">{faculty.faculty.charAt(0)}</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {faculty.faculty}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <ul className="space-y-3 flex-grow">
                        {faculty.programs.map((program) => (
                          <li
                            key={program.name}
                            className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                            {program.name}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Improved content and layout for sections starting from 'About' */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  About The Unity University
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  The Unity University is committed to providing quality education and fostering academic excellence. Our diverse programs and dedicated faculty prepare students for successful careers and meaningful contributions to society.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  With a strong focus on research and innovation, we strive to create a vibrant community of scholars who are passionate about making a positive impact in the world.
                </p>
              </div>
              <TVSlideshow />
            </div>
          </div>
        </section>

        <CallToAction 
          title="Shape Your Future at The Unity University"
          description="Join our vibrant academic community and embark on a journey of excellence, innovation, and personal growth."
        />
      </main>
      <Footer />
    </div>
  );
}
