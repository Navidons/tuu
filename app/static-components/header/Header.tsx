import Link from "next/link"
import { useState } from 'react'
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
      { name: "Education Policy, Planning & Management", soName: "Siyaasadda Waxbarashada, Qorshaynta & Maaraynta" },
      { name: "Education Leadership & Management", soName: "Hoggaaminta Waxbarashada & Maaraynta" }
    ]
  }
]

export function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredFaculty, setHoveredFaculty] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-4 lg:px-6 h-auto lg:h-24 flex flex-col lg:flex-row items-center relative">
      <div className="w-full lg:w-auto flex items-center justify-between py-4">
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-red-700" />
          ) : (
            <Menu className="h-6 w-6 text-red-700" />
          )}
        </button>
        
        <Link href="/" className="flex items-center justify-center">
          <span className="ml-2 text-lg font-bold text-red-700">
            The Unity University
            <span className="block text-xs text-red-500 hover:underline transition-all duration-300">
              Jaamacadda Midnimada
            </span>
          </span>
        </Link>
      </div>

      {/* Horizontal Rows with Centered Logo */}
      <div className="relative flex-1 flex justify-center items-center h-10">
        {/* Left-side rows */}
        <div className="absolute left-0 flex flex-col justify-center items-end w-1/2 h-full pr-4">
          <div className="h-[2px] w-3/4 bg-red-600"></div>
          <div className="h-[2px] w-3/4 bg-red-500 mt-1"></div>
          <div className="h-[2px] w-3/4 bg-green-600 mt-1"></div>
        </div>

        {/* Centered Logo */}
        <Image
          src="/logo.jpeg"
          alt="The Unity University Logo"
          className="absolute h-20 w-20 transition-transform duration-300 hover:scale-110"
          style={{ transform: "translateY(-10%) translateX(-25%)" }}
          width={80}
          height={80}
        />

        {/* Right-side rows */}
        <div className="absolute right-0 flex flex-col justify-center items-start w-1/2 h-full pl-4">
          <div className="h-[2px] w-3/4 bg-red-600"></div>
          <div className="h-[2px] w-3/4 bg-red-500 mt-1"></div>
          <div className="h-[2px] w-3/4 bg-green-600 mt-1"></div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-6 pb-4 lg:pb-0`}>
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
            onMouseEnter={() => setHoveredItem(item.en)}
            onMouseLeave={() => {
              if (!hoveredFaculty) {
                setHoveredItem(null)
              }
            }}
          >
            <Link
              href={item.href}
              className="text-sm font-medium hover:text-red-600 transition-colors duration-300 block lg:inline-block"
              onClick={() => {
                setIsMenuOpen(false)
                setHoveredItem(null)
                setHoveredFaculty(null)
              }}
            >
              {item.en}
              {item.dropdown && <ChevronDown className="inline-block ml-1 h-4 w-4" />}
              <span className="block text-xs text-red-400 group-hover:underline transition-all duration-300">
                {item.so}
              </span>
            </Link>
            {item.dropdown && hoveredItem === item.en && (
              <div 
                className="lg:absolute relative right-0 top-full mt-2 w-64 bg-white border border-red-200 rounded-md shadow-lg z-50"
                onMouseLeave={() => {
                  setHoveredItem(null)
                  setHoveredFaculty(null)
                }}
              >
                <div className="flex">
                  <div className="w-full lg:w-64">
                    {programs.map((faculty) => (
                      <div 
                        key={faculty.faculty} 
                        className="p-2 hover:bg-red-50 cursor-pointer relative"
                        onMouseEnter={() => setHoveredFaculty(faculty.faculty)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-red-700 text-sm">{faculty.faculty}</h3>
                            <h4 className="text-xs text-red-500">{faculty.soFaculty}</h4>
                          </div>
                          <ChevronRight className="h-4 w-4 text-red-400" />
                        </div>
                        
                        {/* Mobile Programs Display */}
                        {hoveredFaculty === faculty.faculty && (
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