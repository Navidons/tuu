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
import { ScrollArea } from "@/components/ui/scroll-area"
import { GraduationCap, Book, Users, Award } from "lucide-react"

const historyEvents = [
  { year: 2005, title: "Foundation", description: "Unity University was established with a vision to provide quality higher education in Somaliland.", icon: GraduationCap },
  { year: 2008, title: "First Graduation", description: "The university celebrated its first cohort of graduates, marking a significant milestone.", icon: Award },
  { year: 2010, title: "Expansion", description: "New faculties were added, including the School of Engineering and the Faculty of Health Sciences.", icon: Book },
  { year: 2013, title: "Research Center", description: "The Unity Research Center was established, focusing on local and regional development issues.", icon: Users },
  { year: 2015, title: "10th Anniversary", description: "Unity University marked a decade of academic excellence and community impact.", icon: Award },
  { year: 2018, title: "International Partnerships", description: "Collaborations were formed with universities in East Africa and the Middle East.", icon: Users },
  { year: 2020, title: "Digital Transformation", description: "In response to global challenges, Unity University successfully transitioned to online learning.", icon: Book },
  { year: 2023, title: "New Campus", description: "A state-of-the-art campus was inaugurated, featuring modern facilities and green spaces.", icon: GraduationCap },
]

export function OurHistoryButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Our History</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>The History of Unity University</DialogTitle>
          <DialogDescription>
            Explore our journey from humble beginnings to becoming a leading institution in Somaliland.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="space-y-8">
            {historyEvents.map((event, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                    {event.icon && <event.icon className="h-4 w-4 text-green-600" />}
                  </div>
                  {index < historyEvents.length - 1 && <div className="w-px h-full bg-green-200 mt-2"></div>}
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-gray-900">{event.year}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-base font-normal text-gray-500">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}