"use client";
import { Header } from "../static-components/header/Header";
import { Footer } from "../static-components/footer/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  FileText,
  Download,
  Filter,
} from "lucide-react";
import Image from 'next/image';

const publications = [
  {
    id: 1,
    title: "Annual Research Report 2023",
    soTitle: "Warbixinta Cilmi-baarista Sanadlaha ah 2023",
    type: "report",
    file: "annual-report-2023.pdf",
    description: "Comprehensive overview of university research activities",
    soDescription: "Dulmar buuxa oo ku saabsan hawlaha cilmi-baarista jaamacadda",
  },
  {
    id: 2,
    title: "Student Handbook",
    soTitle: "Buug-gacmeedka Ardayga",
    type: "handbook",
    file: "student-handbook.pdf",
    description: "Essential guide for all Unity University students",
    soDescription: "Hagaha muhiimka ah ee dhammaan ardayda Jaamacadda Midnimada",
  },
  {
    id: 3,
    title: "Faculty Research: Climate Change in Somaliland",
    soTitle: "Cilmi-baarista Kulliyadda: Isbeddelka Cimilada ee Somaliland",
    type: "research",
    file: "climate-change-research.pdf",
    description: "Latest findings on climate patterns and environmental impact",
    soDescription: "Natiijooyinka ugu dambeeyay ee qaababka cimilada iyo saamaynta deegaanka",
  },
  {
    id: 4,
    title: "Admission Guidelines 2024",
    soTitle: "Hagaha Ogolaanshaha 2024",
    type: "guidelines",
    file: "admission-guidelines-2024.pdf",
    description: "Complete admission requirements and procedures",
    soDescription: "Shuruudaha iyo nidaamyada ogolaanshaha oo dhammeystiran",
  },
  {
    id: 5,
    title: "Unity University Journal Vol. 5",
    soTitle: "Joornaalka Jaamacadda Midnimada Vol. 5",
    type: "journal",
    file: "unity-journal-vol5.pdf",
    description: "Academic journal featuring faculty and student research",
    soDescription: "Joornaalka tacliinta ee ku saabsan cilmi-baarista macallimiinta iyo ardayda",
  },
  {
    id: 6,
    title: "Campus Map",
    soTitle: "Khariidadda Xarunta",
    type: "map",
    file: "campus-map.pdf",
    description: "Interactive map of university facilities",
    soDescription: "Khariidadda is-dhexgalka leh ee xarumaha jaamacadda",
  },
];

export default function DownloadsAndPublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", ...new Set(publications.map((pub) => pub.type))];

  const filteredPublications = publications.filter(
    (pub) => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.soTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.soDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      return selectedCategory === "all" ? matchesSearch : matchesSearch && pub.type === selectedCategory;
    }
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-cover bg-center relative">
          <Image
            src="/university-banner.jpg"
            alt="University Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter animate-fade-in-down text-white">
                  Downloads and Publications
                  <span className="block text-base sm:text-lg text-red-300 hover:underline transition-all duration-300">
                    Soo dejinta iyo Daabacaadyada
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-200 animate-fade-in-up">
                  Access our latest research, reports, and resources
                  <span className="block text-xs sm:text-sm text-red-200 hover:underline transition-all duration-300">
                    Hel cilmi-baarisyadayada, warbixinaha, iyo ilaha ugu dambeeyay
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tighter animate-fade-in-left">
                  Find Publications
                  <span className="block text-base sm:text-lg text-red-600 hover:underline transition-all duration-300">
                    Hel Daabacaadyada
                  </span>
                </h2>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-initial">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search publications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-[300px] bg-white border-red-100 focus:border-red-300 focus:ring-red-200"
                    />
                  </div>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-white border border-red-100 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-200 capitalize"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="capitalize">
                          {category}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPublications.map((pub) => (
                <Card
                  key={pub.id}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in transform hover:-translate-y-1 bg-white border-red-100"
                >
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-base sm:text-lg">
                      <FileText className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        {pub.title}
                        <span className="block text-xs sm:text-sm text-red-500 group-hover:underline transition-all duration-300">
                          {pub.soTitle}
                        </span>
                      </div>
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-gray-600">
                      {pub.description}
                      <span className="block text-xs text-red-400 mt-1">
                        {pub.soDescription}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                      <span className="block text-xs text-red-100 group-hover:underline transition-all duration-300">
                        Soo deji
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPublications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No publications found</p>
                <p className="text-sm text-red-400">Ma jiraan daabacaadyo la helay</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
