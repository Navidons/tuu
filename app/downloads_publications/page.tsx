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
} from "lucide-react";
import Image from 'next/image';

const publications = [
  {
    id: 1,
    title: "Annual Research Report 2023",
    soTitle: "Warbixinta Cilmi-baarista Sanadlaha ah 2023",
    type: "report",
    file: "annual-report-2023.pdf",
  },
  {
    id: 2,
    title: "Student Handbook",
    soTitle: "Buug-gacmeedka Ardayga",
    type: "handbook",
    file: "student-handbook.pdf",
  },
  {
    id: 3,
    title: "Faculty Research: Climate Change in Somaliland",
    soTitle: "Cilmi-baarista Kulliyadda: Isbeddelka Cimilada ee Somaliland",
    type: "research",
    file: "climate-change-research.pdf",
  },
  {
    id: 4,
    title: "Admission Guidelines 2024",
    soTitle: "Hagaha Ogolaanshaha 2024",
    type: "guidelines",
    file: "admission-guidelines-2024.pdf",
  },
  {
    id: 5,
    title: "Unity University Journal Vol. 5",
    soTitle: "Joornaalka Jaamacadda Midnimada Vol. 5",
    type: "journal",
    file: "unity-journal-vol5.pdf",
  },
  {
    id: 6,
    title: "Campus Map",
    soTitle: "Khariidadda Xarunta",
    type: "map",
    file: "campus-map.pdf",
  },
];

export default function DownloadsAndPublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [...new Set(publications.map((pub) => pub.type))];

  const filteredPublications = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.soTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center relative"
        >
          <Image
            src="/university-banner.jpg"
            alt="University Banner"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-down text-white">
                  Downloads and Publications
                  <span className="block text-lg text-red-300 hover:underline transition-all duration-300">
                    Soo dejinta iyo Daabacaadyada
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up">
                  Access our latest research, reports, and resources
                  <span className="block text-sm text-red-200 hover:underline transition-all duration-300">
                    Hel cilmi-baarisyadayada, warbixinaha, iyo ilaha ugu
                    dambeeyay
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl animate-fade-in-left">
                Find Publications
                <span className="block text-lg text-red-600 hover:underline transition-all duration-300">
                  Hel Daabacaadyada
                </span>
              </h2>
              <div className="flex items-center space-x-2">
                <Search className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search publications... / Raadi daabacaadyada..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </div>
            <Tabs defaultValue={categories[0]} className="space-y-4">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="capitalize text-red-600"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPublications
                      .filter((pub) => pub.type === category)
                      .map((pub) => (
                        <Card
                          key={pub.id}
                          className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                        >
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              <FileText className="h-5 w-5 text-red-600" />
                              <span>
                                {pub.title}
                                <span className="block text-sm text-red-500 group-hover:underline transition-all duration-300">
                                  {pub.soTitle}
                                </span>
                              </span>
                            </CardTitle>
                            <CardDescription className="capitalize text-red-600">
                              {pub.type}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button className="w-full group" variant="outline">
                              <Download className="mr-2 h-4 w-4 text-red-600" />
                              Download
                              <span className="block text-xs text-red-400 group-hover:underline transition-all duration-300">
                                Soo deji
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
