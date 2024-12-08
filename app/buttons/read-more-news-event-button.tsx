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

interface ReadMoreNewsEventButtonProps {
  item: {
    id: number;
    title: string;
    type: string;
    date: string;
    description: string;
    fullContent: string;
  };
}

export const ReadMoreNewsEventButton: React.FC<ReadMoreNewsEventButtonProps> = ({ item }) => {
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
          </DialogTitle>
          <DialogDescription>
            {new Date(item.date).toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          <div className="space-y-4">
            <p>{item.fullContent}</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}