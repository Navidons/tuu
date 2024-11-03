"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Users, Building, Globe, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center relative" style={{ backgroundImage: "url('/university-banner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-down text-white">
                  About The Unity University
                  <span className="block text-lg text-red-300 hover:underline transition-all duration-300">Ku saabsan Jaamacadda Midnimada</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up">
                  Empowering minds and shaping futures in Somaliland since 2021
                  <span className="block text-sm text-red-200 hover:underline transition-all duration-300">Xoojinta maskaxda iyo qaabeynta mustaqbalka Somaliland laga soo bilaabo 2021</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4 animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our History
                  <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Taariikhdeena</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2021, The Unity University has grown from a small institution to one of Somaliland&apos;s leading
                  centers of higher education. Our journey reflects the resilience and aspirations of our nation,
                  as we&apos;ve continuously evolved to meet the changing needs of our students and society.
                  <span className="block text-sm text-red-500 hover:underline transition-all duration-300">
                    La aasaasay 2021, Jaamacadda Midnimada waxay ka soo kortay hay&apos;ad yar ilaa mid ka mid ah xarumaha
                    ugu horreeya ee waxbarashada sare ee Somaliland. Safarkeenu wuxuu muujinayaa adkaysiga iyo himilooyinka
                    qarankayaga, maadaama aan si joogto ah ugu horumarinay inaan buuxinno baahiyaha isbeddelaya ee ardaydeena iyo bulshada.
                  </span>
                </p>
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Mission
                  <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Hadafkeena</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Unity University is committed to providing high-quality education that empowers our students to become
                  leaders, innovators, and responsible citizens. We strive to contribute to the development of Somaliland
                  through excellence in teaching, research, and community engagement.
                  <span className="block text-sm text-red-500 hover:underline transition-all duration-300">
                    Jaamacadda Midnimada waxay u heellan tahay bixinta waxbarasho tayo sare leh oo awood u siinaysa ardaydeena
                    inay noqdaan hogaamiyeyaal, hal-abuurayaal, iyo muwaadiniinta mas&apos;uulka ah. Waxaan u dadaalnaa inaan
                    gacan ka geysanno horumarinta Somaliland iyada oo loo marayo waxbarid heer sare ah, cilmi-baaris, iyo ka qaybgalka bulshada.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20 bg-red-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-down">
              Our Values
              <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Qiyamkeena</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <Book className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>
                    Academic Excellence
                    <span className="block text-sm text-red-500 hover:underline transition-all duration-300">Waxbarashada Heerka Sare</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We are dedicated to maintaining the highest standards of academic rigor and intellectual inquiry.
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">
                      Waxaan u heellan nahay in aan ilaalinno heerarka ugu sarreeya ee adag ee waxbarashada iyo baaritaanka aqooneed.
                    </span>
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up delay-150">
                <CardHeader>
                  <Users className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>
                    Inclusivity
                    <span className="block text-sm text-red-500 hover:underline transition-all duration-300">Ku Darsashada</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We embrace diversity and promote an inclusive environment where all voices are heard and valued.
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">
                      Waxaan aqbalnaa kala duwanaanshaha oo aan horumarinaa jawi loo dhan yahay oo dhammaan codadka laga maqlo lagana qiimeeyo.
                    </span>
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up delay-300">
                <CardHeader>
                  <Globe className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle>
                    Global Perspective
                    <span className="block text-sm text-red-500 hover:underline transition-all duration-300">Aragtida Caalamiga ah</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We prepare our students to thrive in an interconnected world, fostering international understanding.
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">
                      Waxaan u diyaarinaa ardaydeena inay ku guuleystaan adduun isku xiran, iyada oo la kobcinayo fahamka caalamiga ah.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-down">
              The Unity University by the Numbers
              <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Jaamacadda Midnimada Tirada</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">5,000+</CardTitle>
                  <CardDescription>
                    Students Enrolled
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">Ardayda Diiwaan-gashan</span>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in-up delay-150">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">200+</CardTitle>
                  <CardDescription>
                    Expert Faculty Members
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">Xubnaha Kulliyadda Khibradda leh</span>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in-up delay-300">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">30+</CardTitle>
                  <CardDescription>
                    Academic Programs
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">Barnaamijyada Waxbarashada</span>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="animate-fade-in-up delay-450">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-red-600">95%</CardTitle>
                  <CardDescription>
                    Graduate Employment Rate
                    <span className="block text-xs text-red-400 hover:underline transition-all duration-300">Heerka Shaqaalaynta Qalin-jabiyeyaasha</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4 animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Campus
                  <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Xarunteena</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Unity University&apos;s modern campus in Hargeisa provides state-of-the-art facilities for learning,
                  research, and student life. Our campus features advanced laboratories, a comprehensive library,
                  comfortable dormitories, and spaces for sports and recreation.
                  <span className="block text-sm text-red-500 hover:underline transition-all duration-300">
                    Xarunta casriga ah ee Jaamacadda Midnimada ee Hargeysa waxay bixisaa xarumo casri ah oo loogu talagalay
                    waxbarashada, cilmi-baarista, iyo nolosha ardayga. Xarunteena waxaa ku yaal sheybaarro horumarsan,
                    maktabad dhammaystiran, hoyga raaxada leh, iyo meelo loogu talagalay ciyaaraha iyo madadaalada.
                  </span>
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-red-600" /> Modern Lecture Halls
                    <span className="text-xs text-red-400 hover:underline transition-all duration-300">Qolalka Casriga ah ee Casharka</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book className="w-4 h-4 text-red-600" /> Extensive Digital Library
                    <span className="text-xs text-red-400 hover:underline transition-all duration-300">Maktabadda Dhijitaalka ah ee Ballaaran</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-600" /> Student Activity Center
                    <span className="text-xs text-red-400 hover:underline transition-all duration-300">Xarunta Hawlaha Ardayda</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Community Engagement
                  <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Ka Qaybgalka Bulshada</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At The Unity University, we believe in the power of education to transform communities. Our students
                  and faculty are actively involved in various outreach programs, research projects, and partnerships
                  that address local and national challenges.
                  <span className="block text-sm text-red-500 hover:underline transition-all duration-300">
                    Jaamacadda Midnimada, waxaan aaminsanahay awoodda waxbarashadu u leedahay inay beddesho bulshada. Ardaydeena
                    iyo macallimiintu si firfircoon ayey uga qaybqaataan barnaamijyo kala duwan oo gaarsiis ah, mashruucyo cilmi-baaris,
                    iyo iskaashiyo wax ka qabta caqabadaha maxalliga ah iyo kuwa qaranka.
                  </span>
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-red-600" /> Local Business Partnerships
                    <span className="text-xs text-red-400 hover:underline transition-all duration-300">Iskaashiyada Ganacsiga Maxalliga ah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-600" /> Community Health Initiatives
                    <span className="text-xs text-red-400 hover:underline transition-all duration-300">Hindiseyaasha Caafimaadka Bulshada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-red-600" /> Youth Mentorship Programs
                    <span className="text-xs text-red-400 hover:underline transition-all duration-300">Barnaamijyada Hagista Dhalinyarada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-16 lg:py-20 bg-red-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter animate-fade-in-down">
                  Join Our Community
                  <span className="block text-base md:text-lg text-red-200 hover:underline transition-all duration-300">Ku soo biir Bulshadeena</span>
                </h2>
                <p className="mx-auto max-w-[600px] text-sm md:text-base lg:text-xl text-red-100 leading-relaxed animate-fade-in-up">
                  Whether you&apos;re a prospective student, a potential partner, or simply interested in learning more
                  about The Unity University, we&apos;d love to hear from you. Take the next step in your journey with us.
                  <span className="block text-xs md:text-sm text-red-200 mt-2 hover:underline transition-all duration-300">
                    Haddii aad tahay arday mustaqbalka, lammaane suurtagal ah, ama aad xiisaynayso inaad wax badan ka ogaato
                    Jaamacadda Midnimada, waan jeclaan lahayn inaan wax kaa maqalno. Qaado tallaabada xigta ee safarkaaga nala socda.
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 animate-bounce">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Apply Now
                  <span className="block text-xs text-yellow-100">Hadda Codso</span>
                </Button>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white hover:from-blue-500 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Us
                  <span className="block text-xs text-blue-100">Nala soo xiriir</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>      
      <Footer />
    </div>
  )
}
