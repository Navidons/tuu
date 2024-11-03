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

interface Program {
  id: number
  name: string
  soName: string
  faculty: string
  soFaculty: string
  description: string
  soDescription: string
  icon: React.ElementType
}

interface LearnMoreProgramButtonProps {
  program: Program
}

export function LearnMoreProgramButton({ program }: LearnMoreProgramButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="mt-4 group" variant="outline">
          Learn More
          <span className="block text-xs text-green-400 group-hover:underline transition-all duration-300">Wax badan baro</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {program.name}
            <span className="block text-lg text-green-600">{program.soName}</span>
          </DialogTitle>
          <DialogDescription>
            {program.faculty}
            <span className="block text-sm">{program.soFaculty}</span>
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          <div className="space-y-4">
            <p>{program.description}</p>
            <p className="text-green-600">{program.soDescription}</p>
            <h3 className="text-lg font-semibold">Program Overview</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Duration: 4 years</li>
              <li>Credits: 120</li>
              <li>Language of Instruction: English</li>
            </ul>
            <h3 className="text-lg font-semibold">Career Opportunities</h3>
            <p>Graduates of this program can pursue careers in various fields, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Industry-specific roles</li>
              <li>Research and development</li>
              <li>Consulting</li>
              <li>Entrepreneurship</li>
            </ul>
            <h3 className="text-lg font-semibold">Admission Requirements</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>High school diploma or equivalent</li>
              <li>Minimum GPA of 2.5</li>
              <li>English language proficiency</li>
            </ul>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}