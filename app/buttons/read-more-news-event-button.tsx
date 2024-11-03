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
import { Calendar, Globe } from "lucide-react"

interface NewsEvent {
  id: number
  title: string
  soTitle: string
  type: string
  date: string
  description: string
  soDescription: string
  fullContent: string
  soFullContent: string
}

interface ReadMoreNewsEventButtonProps {
  item: NewsEvent
}

export function ReadMoreNewsEventButton({ item }: ReadMoreNewsEventButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full group" variant="outline">
          Read More
          <span className="block text-xs text-green-400 group-hover:underline transition-all duration-300">Sii akhri</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {item.type === 'event' ? <Calendar className="h-5 w-5 text-green-600" /> : <Globe className="h-5 w-5 text-green-600" />}
            {item.title}
            <span className="block text-lg text-green-600">{item.soTitle}</span>
          </DialogTitle>
          <DialogDescription>
            {new Date(item.date).toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          <div className="space-y-4">
            <p>{item.fullContent}</p>
            <p className="text-green-600">{item.soFullContent}</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}