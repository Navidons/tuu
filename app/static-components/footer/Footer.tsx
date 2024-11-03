import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-red-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                <Mail className="h-4 w-4"/>
                <span>info@unityuniversity.edu</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                <Phone className="h-4 w-4"/>
                <span>+252 63 4218942</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                <MapPin className="h-4 w-4"/>
                <span>Hargeisa, Somaliland</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-red-400">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="#" className="block hover:text-red-400 transition-colors duration-200">Terms of Service</Link>
              <Link href="#" className="block hover:text-red-400 transition-colors duration-200">Privacy Policy</Link>
              <Link href="#" className="block hover:text-red-400 transition-colors duration-200">Academic Calendar</Link>
            </nav>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              © 2024 The Unity University. All rights reserved.
              <span className="block mt-1">Dhammaan xuquuqda way dhowran yihiin.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}