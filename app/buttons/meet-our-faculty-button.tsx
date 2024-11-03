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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const facultyMembers = [
  { id: 1, name: "Dr. Amina Hassan", position: "Professor of Business Administration", department: "Business", bio: "Dr. Hassan specializes in entrepreneurship and has over 15 years of experience in business consulting.", image: "/placeholder.svg" },
  { id: 2, name: "Prof. Ahmed Omar", position: "Head of Computer Science Department", department: "Science & Technology", bio: "Prof. Omar's research focuses on artificial intelligence and machine learning applications.", image: "/placeholder.svg" },
  { id: 3, name: "Dr. Fawzia Yusuf", position: "Associate Professor of Environmental Science", department: "Science & Technology", bio: "Dr. Yusuf is a leading researcher in climate change impacts on arid regions.", image: "/placeholder.svg" },
  { id: 4, name: "Prof. Abdirahman Ismail", position: "Dean of Social Sciences", department: "Social Sciences", bio: "Prof. Ismail has published extensively on Somaliland's political development and international relations.", image: "/placeholder.svg" },
  { id: 5, name: "Dr. Hodan Osman", position: "Assistant Professor of Public Health", department: "Health Sciences", bio: "Dr. Osman's work focuses on improving healthcare access in rural communities.", image: "/placeholder.svg" },
  { id: 6, name: "Prof. Bashir Ali", position: "Professor of Engineering", department: "Engineering", bio: "Prof. Ali is renowned for his contributions to sustainable infrastructure development.", image: "/placeholder.svg" },
]

const departments = ["All", ...new Set(facultyMembers.map(member => member.department))]

export function MeetOurFacultyButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const filteredFaculty = selectedDepartment === "All" 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === selectedDepartment)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Meet Our Faculty</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Meet Our Faculty</DialogTitle>
          <DialogDescription>
            Get to know the dedicated professors and researchers shaping the future at Unity University.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mb-4">
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="h-[500px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFaculty.map((faculty) => (
              <Card key={faculty.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={faculty.image} alt={faculty.name} />
                    <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{faculty.name}</CardTitle>
                    <CardDescription>{faculty.position}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{faculty.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}