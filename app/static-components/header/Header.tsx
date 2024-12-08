import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight, Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from 'next/image'
import Script from 'next/script'

const programs = [
  {
    faculty: "Business & Management",
    programs: [
      { name: "Bachelor of Business Administration" },
      { name: "Bachelor of Accounting and Finance" },
      { name: "Bachelor of Banking and Finance" },
      { name: "Bachelor of Procurement, Logistics and Supplies Chain Management" },
      { name: "Bachelor of Human Resource Management" },
      { name: "Bachelor of Marketing" },
      { name: "Master of Business Administration" },
      { name: "Master of Accounting & Finance" },
      { name: "Master of Human Resources Management" },
      { name: "Master of Marketing Management" },
      { name: "Master of Procurement, Logistics and Supplies Chain Management" }
    ]
  },
  {
    faculty: "Computing & IT",
    programs: [
      { name: "Bachelor of Science in Software Engineering" },
      { name: "Bachelor of Science in Computer Science" },
      { name: "Bachelor of Science in Information Technology" },
      { name: "Master of Science in Information Technology" }
    ]
  },
  {
    faculty: "Social Sciences",
    programs: [
      { name: "Bachelor of International Relations and Diplomatic Studies" },
      { name: "Bachelor of Arts in Public Administration and Management" },
      { name: "Bachelor of Arts in Social Works and Social Administration" },
      { name: "Bachelor of Project Planning and Management" },
      { name: "Bachelor of Arts in Public Relations and Media Management" },
      { name: "Master of Arts in International Relations and Diplomatic Studies" },
      { name: "Master of Arts in Public Administration and Management" },
      { name: "Master of Arts in Development Studies" },
      { name: "Master of Project Planning and Management" }
    ]
  },
  {
    faculty: "Health Sciences",
    programs: [
      { name: "Bachelor of Public Health" },
      { name: "Bachelor of Nutrition and Food Science" },
      { name: "Bachelor of Science in Health Service & Management" },
      { name: "Master of Public Health" },
      { name: "Master of Nutrition and Food Science" }
    ]
  },
  {
    faculty: "Education",
    programs: [
      { name: "Master of Education in Policy, Planning & Management" },
      { name: "Master of Education in Leadership and Management" }
    ]
  },
  {
    faculty: "Foundation",
    programs: [
      { name: "Foundation Program for Starters" }
    ]
  }
]

export function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredFaculty, setHoveredFaculty] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setHoveredItem(null)
        setHoveredFaculty(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemHover = (item: string) => {
    if (!isMobile) {
      setHoveredItem(item)
      if (item !== 'Programs') {
        setHoveredFaculty(null)
      }
    }
  }

  const handleItemClick = (item: string) => {
    if (isMobile) {
      if (hoveredItem === item) {
        setHoveredItem(null)
        setHoveredFaculty(null)
      } else {
        setHoveredItem(item)
      }
    }
  }

  const handleFacultyHover = (faculty: string) => {
    if (!isMobile) {
      setHoveredFaculty(faculty)
    }
  }

  const handleFacultyClick = (faculty: string) => {
    if (isMobile) {
      setHoveredFaculty(hoveredFaculty === faculty ? null : faculty)
    }
  }

  return (
    <>
      <Script id="neexa-chat-widget" strategy="afterInteractive">
        {`var neexa_xgmx_cc_wpq_ms = "9d66d905-7180-4db4-bff8-f2b7b2a306c0";`}
      </Script>
      <Script 
        src="https://chat-widget.neexa.ai/main.js?nonce=1730651361300.7075"
        strategy="afterInteractive"
      />
      
      <div className="hidden lg:block bg-gray-100 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4"/>
              <span>info@tuu.university</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4"/>
              <span>+252 63 4210013</span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Welcome to The Unity University</span>
              <span className="mx-2">|</span>
              <span className="text-red-500">What Begins Here, Transforms Africa</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/theunityuniversity/" className="animate-pulse hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4 animate-[colorChange_4s_ease-in-out_infinite]" style={{animation: 'colorChange 4s ease-in-out infinite'}} />
            </Link>
            <Link href="https://x.com/ProfPLOLumumba/status/1605872680317616128?lang=en" className="animate-pulse hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 animate-[colorChange_4s_ease-in-out_infinite]" style={{animation: 'colorChange 4s ease-in-out infinite', animationDelay: '0.8s'}} />
            </Link>
            <Link href="https://www.instagram.com/p/Cmd3K5Oj1D1/?img_index=1" className="animate-pulse hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4 animate-[colorChange_4s_ease-in-out_infinite]" style={{animation: 'colorChange 4s ease-in-out infinite', animationDelay: '1.6s'}} />
            </Link>
            <Link href="https://www.linkedin.com/company/the-unity-university/?originalSubdomain=so" className="animate-pulse hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 animate-[colorChange_4s_ease-in-out_infinite]" style={{animation: 'colorChange 4s ease-in-out infinite', animationDelay: '2.4s'}} />
            </Link>
            <Link href="https://www.youtube.com/watch?v=8vBnxHefYZs" className="animate-pulse hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-4 w-4 animate-[colorChange_4s_ease-in-out_infinite]" style={{animation: 'colorChange 4s ease-in-out infinite', animationDelay: '3.2s'}} />
            </Link>
          </div>
        </div>
      </div>

      <header className="px-4 lg:px-6 py-4 flex flex-col lg:flex-row items-center relative">
        {/* Logo Section */}
        <div className="relative flex-1 flex justify-center items-center h-20 w-full mb-8 lg:mb-0 lg:w-auto lg:order-2 mt-8 lg:mt-0">
          <div className="absolute left-0 flex flex-col justify-center items-end w-1/2 h-full pr-4">
            <div className="h-[2px] w-3/4 bg-red-600"></div>
            <div className="h-[2px] w-3/4 bg-red-500 mt-1"></div>
            <div className="h-[2px] w-3/4 bg-green-600 mt-1"></div>
          </div>

          <Image
            src="/logo.jpeg"
            alt="The Unity University Logo"
            className="absolute h-20 w-20 transition-transform duration-300 hover:scale-110"
            width={80}
            height={80}
          />

          <div className="absolute right-0 flex flex-col justify-center items-start w-1/2 h-full pl-10">
            <div className="h-[2px] w-3/4 bg-red-600"></div>
            <div className="h-[2px] w-3/4 bg-red-500 mt-1"></div>
            <div className="h-[2px] w-3/4 bg-green-600 mt-1"></div>
          </div>
        </div>

        {/* Mobile Menu Bar with Horizontal Line */}
        <div className="lg:hidden w-full flex flex-col gap-4">
          <div className="h-[2px] w-full bg-green-600"></div>
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-red-700" />
              ) : (
                <Menu className="h-6 w-6 text-red-700" />
              )}
            </button>
            
            <Link href="/" className="flex items-center justify-center">
              <span className="text-lg font-bold text-red-700">
                The Unity University
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Left Section */}
        <div className="hidden lg:flex items-center lg:order-1">
          <Link href="/" className="flex items-center justify-center">
            <span className="text-lg font-bold text-red-700">
              The Unity University
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-6 pb-4 lg:pb-0 lg:order-3`}>
          {[
            { name: "Home", href: "/" },
            { name: "Programs", href: "#", dropdown: true },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Downloads & Publications", href: "/downloads_publications" },
            { name: "News & Events", href: "/news_events" }
          ].map((item) => (
            <div
              key={item.name}
              className="group relative"
              onMouseEnter={() => handleItemHover(item.name)}
              onMouseLeave={() => !isMobile && setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-red-600 transition-colors duration-300 block lg:inline-block"
                onClick={() => {
                  handleItemClick(item.name)
                  if (!item.dropdown) {
                    setIsMenuOpen(false)
                  }
                }}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="inline-block ml-1 h-4 w-4" />}
              </Link>
              {item.dropdown && (hoveredItem === item.name || (isMobile && hoveredItem === item.name)) && (
                <div 
                  ref={menuRef}
                  className="lg:absolute relative right-0 top-full mt-2 w-64 bg-white border border-red-200 rounded-md shadow-lg z-50"
                >
                  <div className="flex">
                    <div className="w-full lg:w-64">
                      {programs.map((faculty) => (
                        <div 
                          key={faculty.faculty} 
                          className="p-2 hover:bg-red-50 cursor-pointer relative"
                          onMouseEnter={() => handleFacultyHover(faculty.faculty)}
                          onClick={() => handleFacultyClick(faculty.faculty)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-red-700 text-sm">{faculty.faculty}</h3>
                            </div>
                            <ChevronRight className="h-4 w-4 text-red-400" />
                          </div>
                          
                          {(hoveredFaculty === faculty.faculty || (isMobile && hoveredFaculty === faculty.faculty)) && (
                            <div className="lg:absolute lg:left-full lg:top-0 lg:-mt-2 mt-2 w-64 bg-white border border-red-200 rounded-md shadow-lg">
                              <div className="py-1">
                                {faculty.programs.map((program) => (
                                  <Link
                                    key={program.name}
                                    href={`/programs/${program.name.toLowerCase().replace(/ /g, '-')}`}
                                    className="block px-4 py-2 hover:bg-red-50"
                                    onClick={() => {
                                      setIsMenuOpen(false)
                                      setHoveredItem(null)
                                      setHoveredFaculty(null)
                                    }}
                                  >
                                    <span className="text-sm text-gray-900">{program.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>
    </>
  )
}