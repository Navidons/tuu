"use client"
import { Button } from "@/components/ui/button"

interface CallToActionProps {
  title: string;
  description: string;
}

export function CallToAction({ title, description }: CallToActionProps) {
  return (
    <section className="py-8 md:py-12 bg-red-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Apply Now
          </Button>
          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Request Information
          </Button>
        </div>
      </div>
    </section>
  )
}
