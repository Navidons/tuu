import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-red-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                <Mail className="h-4 w-8"/>
                <span>info@tuu.university</span>
                <span>theunityuniversity@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                <Phone className="h-4 w-8"/>
                <span>+252 63 4210013</span> |
                <span>+252 63 7707788</span>
              </div>
              <div className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                <MapPin className="h-4 w-8"/>
                <span>JigJiga Yar Street near Masjid Jabir, Hargeisa, Somaliland</span>
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
            <h3 className="font-bold mb-4 text-red-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="https://www.facebook.com/theunityuniversity/" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/ProfPLOLumumba/status/1605872680317616128?lang=en" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/p/Cmd3K5Oj1D1/?img_index=1" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/the-unity-university/?originalSubdomain=so" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/watch?v=8vBnxHefYZs" className="hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
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