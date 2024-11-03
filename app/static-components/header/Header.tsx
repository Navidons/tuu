import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import Image from 'next/image'

const programs = [
  {
    faculty: "Business & Management",
    soFaculty: "Ganacsiga & Maamulka",
    programs: [
      { name: "Business Administration", soName: "Maamulka Ganacsiga" },
      { name: "Accounting & Finance", soName: "Xisaabaadka & Maaliyadda" },
      { name: "Banking & Finance", soName: "Bangiyada & Maaliyadda" },
      { name: "Procurement, Logistics & Supply Chain Management", soName: "Iibsiga, Gaadiidka & Maaraynta Sahayda" },
      { name: "Human Resource Management", soName: "Maamulka Shaqaalaha" },
      { name: "Marketing", soName: "Suuq-geynta" }
    ]
  },
  {
    faculty: "Computing & IT",
    soFaculty: "Kombuyuutarka & IT",
    programs: [
      { name: "Computer Science", soName: "Sayniska Kombuyuutarka" },
      { name: "Information Technology", soName: "Teknoolojiyada Macluumaadka" },
      { name: "Software Engineering", soName: "Injineerinka Software-ka" }
    ]
  },
  {
    faculty: "Social Sciences",
    soFaculty: "Sayniska Bulshada",
    programs: [
      { name: "Public Administration & Management", soName: "Maamulka Dadweynaha & Maaraynta" },
      { name: "International Relations & Diplomatic Studies", soName: "Xiriirrada Caalamiga & Daraasaadka Diblomaasiyada" },
      { name: "Development Studies", soName: "Daraasaadka Horumarinta" },
      { name: "Social Work & Social Administration", soName: "Shaqada Bulshada & Maamulka Bulshada" },
      { name: "Public Relations & Media Management", soName: "Xiriirka Dadweynaha & Maamulka Warbaahinta" },
      { name: "Project Planning & Management", soName: "Qorshaynta & Maaraynta Mashruucyada" }
    ]
  },
  {
    faculty: "Health Sciences",
    soFaculty: "Sayniska Caafimaadka",
    programs: [
      { name: "Public Health", soName: "Caafimaadka Dadweynaha" },
      { name: "Nutrition & Food Science", soName: "Nafaqada & Sayniska Cuntada" },
      { name: "Health Service & Management", soName: "Adeegga Caafimaadka & Maaraynta" }
    ]
  },
  {
    faculty: "Education",
    soFaculty: "Waxbarashada",
    programs: [
      { name: "Education Policy, Planning & Management", soName: "Siyaasadda Waxbarashada, Qorsheynta & Maaraynta" },
      { name: "Education Leadership & Management", soName: "Hoggaaminta Waxbarashada & Maaraynta" }
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
              <span className="block text-xs text-red-500 hover:underline transition-all duration-300">
                Jaamacadda Midnimada
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Left Section */}
      <div className="hidden lg:flex items-center lg:order-1">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-lg font-bold text-red-700">
            The Unity University
            <span className="block text-xs text-red-500 hover:underline transition-all duration-300">
              Jaamacadda Midnimada
            </span>
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-6 pb-4 lg:pb-0 lg:order-3`}>
        {[
          { en: "Home", so: "Guriga", href: "/" },
          { en: "Programs", so: "Barnaamijyada", href: "#", dropdown: true },
          { en: "About", so: "Ku saabsan", href: "/about" },
          { en: "Contact", so: "La xiriir", href: "/contact" },
          { en: "Downloads & Publications", so: "Soo-saaridda & Qoraallada", href: "/downloads_publications" },
          { en: "News & Events", so: "Warbixin & Dhibcaha", href: "/news_events" }
        ].map((item) => (
          <div
            key={item.en}
            className="group relative"
            onMouseEnter={() => handleItemHover(item.en)}
            onMouseLeave={() => !isMobile && setHoveredItem(null)}
          >
            <Link
              href={item.href}
              className="text-sm font-medium hover:text-red-600 transition-colors duration-300 block lg:inline-block"
              onClick={() => {
                handleItemClick(item.en)
                if (!item.dropdown) {
                  setIsMenuOpen(false)
                }
              }}
            >
              {item.en}
              {item.dropdown && <ChevronDown className="inline-block ml-1 h-4 w-4" />}
              <span className="block text-xs text-red-400 group-hover:underline transition-all duration-300">
                {item.so}
              </span>
            </Link>
            {item.dropdown && (hoveredItem === item.en || (isMobile && hoveredItem === item.en)) && (
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
                            <h4 className="text-xs text-red-500">{faculty.soFaculty}</h4>
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
                                  <span className="block text-xs text-red-400">{program.soName}</span>
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
  )
}