'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GraduationCap, Book, Users, Globe } from "lucide-react"

export function LearnMoreButton() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Discover Unity University</DialogTitle>
          <DialogDescription>
            Learn more about our institution, programs, and what makes us unique.
          </DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
          </TabsList>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            <TabsContent value="overview">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About Unity University</h3>
                <p>
                  Unity University, established in 2005, is a leading institution of higher education in Somaliland. 
                  Our mission is to provide quality education that empowers students to become leaders and innovators 
                  in their fields, contributing to the development of Somaliland and beyond.
                </p>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  <span>Over 5,000 graduates since inception</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>200+ expert faculty members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span>International partnerships with universities worldwide</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="programs">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Our Academic Programs</h3>
                <p>
                  Unity University offers a wide range of undergraduate and graduate programs 
                  designed to meet the needs of our students and the demands of the global job market.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Business Administration</li>
                  <li>Computer Science</li>
                  <li>Environmental Science</li>
                  <li>Engineering</li>
                  <li>Health Sciences</li>
                  <li>Social Sciences</li>
                </ul>
                <p>
                  Our programs combine theoretical knowledge with practical skills, 
                  preparing students for successful careers in their chosen fields.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="campus">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Campus Life</h3>
                <p>
                  Our modern campus in Hargeisa provides a vibrant and supportive environment for learning and personal growth.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>State-of-the-art laboratories and research facilities</li>
                  <li>Comprehensive library with extensive digital resources</li>
                  <li>Student centers for extracurricular activities</li>
                  <li>Sports facilities including a gym and playing fields</li>
                  <li>On-campus housing options</li>
                  <li>Cafeterias offering a variety of dining options</li>
                </ul>
                <p>
                  At Unity University, we believe in fostering a holistic educational experience 
                  that extends beyond the classroom.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="admissions">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Admissions Process</h3>
                <p>
                  We welcome applications from motivated students who are ready to embark on an 
                  exciting educational journey with us.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Submit your online application</li>
                  <li>Provide necessary documents (transcripts, test scores)</li>
                  <li>Pay the application fee</li>
                  <li>Attend an interview (if required for your program)</li>
                  <li>Receive admission decision</li>
                </ol>
                <p>
                  Our admissions team is here to guide you through every step of the process. 
                  Don&apos;t hesitate to reach out if you have any questions!
                </p>
                <div className="flex items-center space-x-2">
                  <Book className="h-5 w-5 text-green-600" />
                  <span>Applications open for Fall 2024 semester</span>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}