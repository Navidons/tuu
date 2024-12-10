"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Search, Globe,} from "lucide-react"
import { ReadMoreNewsEventButton } from "../buttons/read-more-news-event-button"
import Image from 'next/image'

const newsAndEvents = [
  { 
    id: 1, 
    title: "New Research Center Opening", 
    type: "news", 
    date: "2024-03-15", 
    description: "Unity University is proud to announce the opening of our new state-of-the-art research center.", 
    fullContent: "Unity University is thrilled to announce the grand opening of our cutting-edge research center. This state-of-the-art facility will serve as a hub for interdisciplinary research, fostering collaboration between our esteemed faculty and students. The center is equipped with the latest technology and will focus on addressing pressing global challenges in areas such as climate change, public health, and sustainable development. This milestone represents our commitment to advancing knowledge and making meaningful contributions to society through research and innovation.",
    soTitle: "New Research Center Opening",
    soDescription: "Unity University is proud to announce the opening of our new state-of-the-art research center.",
    soFullContent: "Unity University is thrilled to announce the grand opening of our cutting-edge research center."
  },
  { 
    id: 2, 
    title: "Annual Graduation Ceremony", 
    type: "event", 
    date: "2024-07-01", 
    description: "Join us in celebrating the achievements of our graduating class of 2024.", 
    fullContent: "We are delighted to invite you to Unity University's Annual Graduation Ceremony for the Class of 2024. This momentous occasion will take place on July 1st, 2024, at our main campus auditorium. The ceremony will feature inspiring speeches from distinguished guests, the conferring of degrees, and a special musical performance by our university choir. We look forward to celebrating the hard work, perseverance, and achievements of our graduates as they embark on the next chapter of their lives. Family, friends, and the entire university community are welcome to join us for this joyous event.",
    soTitle: "Annual Graduation Ceremony",
    soDescription: "Join us in celebrating the achievements of our graduating class of 2024.",
    soFullContent: "We are delighted to invite you to Unity University's Annual Graduation Ceremony for the Class of 2024. This momentous occasion will take place on July 1st, 2024, at our main campus auditorium. The ceremony will feature inspiring speeches from distinguished guests, the conferring of degrees, and a special musical performance by our university choir. We look forward to celebrating the hard work, perseverance, and achievements of our graduates as they embark on the next chapter of their lives. Family, friends, and the entire university community are welcome to join us for this joyous event."
  },
  { 
    id: 3, 
    title: "International Conference on Climate Change", 
    type: "event", 
    date: "2024-09-10", 
    description: "Unity University will host a conference on climate change impacts in East Africa.", 
    fullContent: "Unity University is proud to host the International Conference on Climate Change, focusing on its impacts in East Africa. This three-day event will bring together leading climate scientists, policymakers, and activists from around the world. The conference will feature keynote speeches, panel discussions, and interactive workshops addressing topics such as sustainable agriculture, renewable energy solutions, and climate-resilient urban planning. This event underscores our commitment to addressing global challenges and fostering international collaboration in the fight against climate change.",
    soTitle: "International Conference on Climate Change",
    soDescription: "Unity University will host a conference on climate change impacts in East Africa.",
    soFullContent: "Unity University is proud to host the International Conference on Climate Change, focusing on its impacts in East Africa. This three-day event will bring together leading climate scientists, policymakers, and activists from around the world. The conference will feature keynote speeches, panel discussions, and interactive workshops addressing topics such as sustainable agriculture, renewable energy solutions, and climate-resilient urban planning. This event underscores our commitment to addressing global challenges and fostering international collaboration in the fight against climate change."
  },
  { 
    id: 4, 
    title: "New Partnership with Tech Giant", 
    type: "news", 
    date: "2024-04-22", 
    description: "We're excited to announce a new partnership that will enhance our computer science program.", 
    fullContent: "Unity University is thrilled to announce a groundbreaking partnership with a leading global technology company. This collaboration will significantly enhance our computer science program, providing students with cutting-edge resources, internship opportunities, and industry-relevant curriculum. The partnership includes the establishment of a new tech lab on campus, guest lectures from industry experts, and collaborative research projects. This initiative aligns with our mission to prepare students for the rapidly evolving tech landscape and reinforces our position as a leader in technology education in East Africa.",
    soTitle: "New Partnership with Tech Giant",
    soDescription: "We're excited to announce a new partnership that will enhance our computer science program.",
    soFullContent: "Unity University is thrilled to announce a groundbreaking partnership with a leading global technology company. This collaboration will significantly enhance our computer science program, providing students with cutting-edge resources, internship opportunities, and industry-relevant curriculum. The partnership includes the establishment of a new tech lab on campus, guest lectures from industry experts, and collaborative research projects. This initiative aligns with our mission to prepare students for the rapidly evolving tech landscape and reinforces our position as a leader in technology education in East Africa."
  },
  { 
    id: 5, 
    title: "Student Art Exhibition", 
    type: "event", 
    date: "2024-05-15", 
    description: "Explore the creativity of our students at this year's art exhibition.", 
    fullContent: "Unity University proudly presents our annual Student Art Exhibition, showcasing the diverse talents and creativity of our student body. This year's exhibition, themed &apos;Unity in Diversity,&apos; will feature a wide range of artistic mediums including paintings, sculptures, digital art, and multimedia installations. The event will be held in our newly renovated campus gallery from May 15th to June 1st, 2024. Visitors will have the opportunity to meet the artists, participate in interactive workshops, and even purchase selected artworks. Join us in celebrating the artistic achievements of our students and the power of art to unite and inspire.",
    soTitle: "Student Art Exhibition",
    soDescription: "Explore the creativity of our students at this year's art exhibition.",
    soFullContent: "Unity University proudly presents our annual Student Art Exhibition, showcasing the diverse talents and creativity of our student body. This year's exhibition, themed &apos;Unity in Diversity,&apos; will feature a wide range of artistic mediums including paintings, sculptures, digital art, and multimedia installations. The event will be held in our newly renovated campus gallery from May 15th to June 1st, 2024. Visitors will have the opportunity to meet the artists, participate in interactive workshops, and even purchase selected artworks. Join us in celebrating the artistic achievements of our students and the power of art to unite and inspire."
  },
  { 
    id: 6, 
    title: "New Scholarship Program Launched", 
    type: "news", 
    date: "2024-02-28", 
    description: "Unity University introduces a new scholarship program to support talented students.", 
    fullContent: "Unity University is proud to announce the launch of our new comprehensive scholarship program, &apos;Empowering Future Leaders.&apos; This initiative aims to provide financial support to talented and deserving students who demonstrate exceptional academic potential and leadership qualities. The program will offer full and partial scholarships across all our academic disciplines, with a special focus on supporting students from underrepresented communities and those pursuing studies in high-demand fields. Recipients will not only receive financial aid but also mentorship opportunities, leadership training, and internship placements. This scholarship program reflects our commitment to making quality higher education accessible to all and nurturing the next generation of leaders in East Africa.",
    soTitle: "New Scholarship Program Launched",
    soDescription: "Unity University introduces a new scholarship program to support talented students.",
    soFullContent: "Unity University is proud to announce the launch of our new comprehensive scholarship program, &apos;Empowering Future Leaders.&apos; This initiative aims to provide financial support to talented and deserving students who demonstrate exceptional academic potential and leadership qualities. The program will offer full and partial scholarships across all our academic disciplines, with a special focus on supporting students from underrepresented communities and those pursuing studies in high-demand fields. Recipients will not only receive financial aid but also mentorship opportunities, leadership training, and internship placements. This scholarship program reflects our commitment to making quality higher education accessible to all and nurturing the next generation of leaders in East Africa."
  },
]

export default function NewsAndEventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const categories = [...new Set(newsAndEvents.map(item => item.type))]

  const filteredItems = newsAndEvents.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center relative">
          <Image src="/hero-section/hero.png" alt="University Banner" layout="fill" objectFit="cover" className="absolute inset-0" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-down text-white">
                  News and Events
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up">
                  Stay updated with the latest happenings at Unity University
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl animate-fade-in-left">
                Latest Updates
              </h2>
              <div className="flex items-center space-x-2">
                <Search className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search news and events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </div>
            <Tabs defaultValue={categories[0]} className="space-y-4">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems
                      .filter((item) => item.type === category)
                      .map((item) => (
                        <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              {item.type === 'event' ? <Calendar className="h-5 w-5 text-red-600" /> : <Globe className="h-5 w-5 text-red-600" />}
                              <span>{item.title}</span>
                            </CardTitle>
                            <CardDescription>{new Date(item.date).toLocaleDateString()}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <ReadMoreNewsEventButton item={item} />
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
  )
}