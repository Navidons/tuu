"use client"
import { Header } from "../static-components/header/Header"
import { Footer } from "../static-components/footer/Footer"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Search, Globe,} from "lucide-react"
import { ReadMoreNewsEventButton } from "../buttons/read-more-news-event-button"

const newsAndEvents = [
  { 
    id: 1, 
    title: "New Research Center Opening", 
    soTitle: "Furitaanka Xarunta Cusub ee Cilmi-baarista", 
    type: "news", 
    date: "2024-03-15", 
    description: "Unity University is proud to announce the opening of our new state-of-the-art research center.", 
    soDescription: "Jaamacadda Midnimada waxay ku faanaysaa inay ku dhawaaqdo furitaanka xarunteena cusub ee cilmi-baarista ee casriga ah.",
    fullContent: "Unity University is thrilled to announce the grand opening of our cutting-edge research center. This state-of-the-art facility will serve as a hub for interdisciplinary research, fostering collaboration between our esteemed faculty and students. The center is equipped with the latest technology and will focus on addressing pressing global challenges in areas such as climate change, public health, and sustainable development. This milestone represents our commitment to advancing knowledge and making meaningful contributions to society through research and innovation.",
    soFullContent: "Jaamacadda Midnimada waxay ku faraxsan tahay inay ku dhawaaqdo furitaanka weyn ee xarunteena cilmi-baarista ee casriga ah. Xaruntaan casriga ah waxay u adeegi doontaa sidii xarun cilmi-baaris oo is-dhexgal ah, iyada oo dhiirigelinaysa iskaashiga u dhexeeya macallimiinteena iyo ardayda sharafta leh. Xaruntu waxay qalabeysan tahay tignoolajiyada ugu dambeysay waxayna diiradda saari doontaa wax ka qabashada caqabadaha caalamiga ah ee degdegga ah ee ka jira meelaha sida isbeddelka cimilada, caafimaadka dadweynaha, iyo horumarinta joogtada ah. Guushaan waxay meteshaa ballanqaadkeena ah in aan horumarino aqoonta oo aan ku sameyno wax-ku-ool muuqda bulshada iyada oo loo marayo cilmi-baaris iyo hal-abuur."
  },
  { 
    id: 2, 
    title: "Annual Graduation Ceremony", 
    soTitle: "Xaflada Sanadlaha ah ee Qalin-jabinta", 
    type: "event", 
    date: "2024-07-01", 
    description: "Join us in celebrating the achievements of our graduating class of 2024.", 
    soDescription: "Nala soo qeyb gal xafladda loogu dabaaldegayo guulaha fasalka qalin-jabinaya ee 2024.",
    fullContent: "We are delighted to invite you to Unity University's Annual Graduation Ceremony for the Class of 2024. This momentous occasion will take place on July 1st, 2024, at our main campus auditorium. The ceremony will feature inspiring speeches from distinguished guests, the conferring of degrees, and a special musical performance by our university choir. We look forward to celebrating the hard work, perseverance, and achievements of our graduates as they embark on the next chapter of their lives. Family, friends, and the entire university community are welcome to join us for this joyous event.",
    soFullContent: "Waxaan ku faraxsanahay inaan kugu casuumno Xafladda Sanadlaha ah ee Qalin-jabinta ee Fasalka 2024 ee Jaamacadda Midnimada. Munaasabaddan muhiimka ah waxay dhici doontaa 1-da Luulyo, 2024, hoolka weyn ee xarunteena. Xafladdu waxay yeelan doontaa khudbado dhiirrigelin leh oo ay jeediyaan marti sharaf, bixinta shahaadooyinka, iyo bandhig muusig gaar ah oo ay soo bandhigayso kooxda heesaha jaamacadda. Waxaan rajeyneynaa inaan u dabaaldegno dadaalka, adkaysiga, iyo guulaha qalin-jabiyayaasheena iyagoo bilaabaya cutubka xiga ee noloshooda. Qoyska, saaxiibbada, iyo bulshada jaamacadda oo dhan waa lagu soo dhaweynayaa inay nala soo qeybgalaan munaasabaddan farxadda leh."
  },
  { 
    id: 3, 
    title: "International Conference on Climate Change", 
    soTitle: "Shirweynaha Caalamiga ah ee Isbeddelka Cimilada", 
    type: "event", 
    date: "2024-09-10", 
    description: "Unity University will host a conference on climate change impacts in East Africa.", 
    soDescription: "Jaamacadda Midnimada waxay martigelinaysaa shirweyne ku saabsan saamaynta isbeddelka cimilada ee Bariga Afrika.",
    fullContent: "Unity University is proud to host the International Conference on Climate Change, focusing on its impacts in East Africa. This three-day event will bring together leading climate scientists, policymakers, and activists from around the world. The conference will feature keynote speeches, panel discussions, and interactive workshops addressing topics such as sustainable agriculture, renewable energy solutions, and climate-resilient urban planning. This event underscores our commitment to addressing global challenges and fostering international collaboration in the fight against climate change.",
    soFullContent: "Jaamacadda Midnimada waxay ku faanaysaa inay martigeliso Shirweynaha Caalamiga ah ee Isbeddelka Cimilada, iyada oo diiradda la saarayo saameynta uu ku leeyahay Bariga Afrika. Dhacdadan saddex maalmood ah waxay isku keeni doontaa saynisyahannada cimilada ee hormuudka ah, siyaasad dejiyeyaasha, iyo firfircoonida ka socda adduunka oo dhan. Shirku wuxuu yeelan doonaa khudbado muhiim ah, dood-wadaagyo, iyo aqoon-isweydaarsiyo wax-ku-ool ah oo looga hadlayo mowduucyo sida beeraha joogtada ah, xalalka tamarta la cusboonaysiin karo, iyo qorsheynta magaalooyinka ee u adkeysta cimilada. Dhacdadan waxay muujinaysaa ballanqaadkeena ah in aan wax ka qabano caqabadaha caalamiga ah oo aan dhiirrigelino iskaashiga caalamiga ah ee dagaalka ka dhanka ah isbeddelka cimilada."
  },
  { 
    id: 4, 
    title: "New Partnership with Tech Giant", 
    soTitle: "Iskaashi Cusub oo lala yeeshay Shirkad Weyn oo Teknooloji ah", 
    type: "news", 
    date: "2024-04-22", 
    description: "We're excited to announce a new partnership that will enhance our computer science program.", 
    soDescription: "Waxaan ku faraxsanahay inaan ku dhawaaqno iskaashi cusub oo kor u qaadi doona barnaamijkeena sayniska kombuyuutarka.",
    fullContent: "Unity University is thrilled to announce a groundbreaking partnership with a leading global technology company. This collaboration will significantly enhance our computer science program, providing students with cutting-edge resources, internship opportunities, and industry-relevant curriculum. The partnership includes the establishment of a new tech lab on campus, guest lectures from industry experts, and collaborative research projects. This initiative aligns with our mission to prepare students for the rapidly evolving tech landscape and reinforces our position as a leader in technology education in East Africa.",
    soFullContent: "Jaamacadda Midnimada waxay ku faraxsan tahay inay ku dhawaaqdo iskaashi cusub oo lala yeeshay shirkad hormuud ka ah teknoolajiyada caalamiga ah. Iskaashigani wuxuu si weyn u xoojin doonaa barnaamijkeena sayniska kombuyuutarka, wuxuuna ardayda siin doonaa ilaha ugu casrisan, fursado tababar, iyo manhaj ku habboon warshadaha. Iskaashigu wuxuu ka kooban yahay in la sameeyo sheybaar tignoolaji cusub oo ka mid ah xarunta, muxaadaro ay bixiyaan khubarada warshadaha, iyo mashruucyo cilmi-baaris oo wada-jir ah. Hindisahani waxa uu la jaanqaadayaa hawlgalkeena ah in aan ardayda u diyaarino muuqaalka teknoolajiyada ee si degdeg ah u horumaraya wuxuuna xoojinayaa booska aan ka hayno hoggaaminta waxbarashada teknoolajiyada ee Bariga Afrika."
  },
  { 
    id: 5, 
    title: "Student Art Exhibition", 
    soTitle: "Bandhigga Farshaxanka Ardayda", 
    type: "event", 
    date: "2024-05-15", 
    description: "Explore the creativity of our students at this year's art exhibition.", 
    soDescription: "Sahaminta hal-abuurka ardaydeena bandhigga farshaxanka ee sanadkan.",
    fullContent: "Unity University proudly presents our annual Student Art Exhibition, showcasing the diverse talents and creativity of our student body. This year's exhibition, themed 'Unity in Diversity,' will feature a wide range of artistic mediums including paintings, sculptures, digital art, and multimedia installations. The event will be held in our newly renovated campus gallery from May 15th to June 1st, 2024. Visitors will have the opportunity to meet the artists, participate in interactive workshops, and even purchase selected artworks. Join us in celebrating the artistic achievements of our students and the power of art to unite and inspire.",
    soFullContent: "Jaamacadda Midnimada waxay si sharaf leh u soo bandhigaysaa Bandhigga Farshaxanka Ardayda ee sanadlaha ah, kaas oo muujinaya hibada kala duwan iyo hal-abuurka ardaydeena. Bandhigga sanadkan, oo mowduuciisu yahay 'Midnimada Kala Duwanaanshaha,' wuxuu soo bandhigi doonaa noocyo kala duwan oo farshaxan ah oo ay ka mid yihiin sawirrada, sawirada la qoray, farshaxanka dijitaalka ah, iyo rakibaadyada multimedia-da. Dhacdadu waxay ka dhici doontaa galareega jaamacaddeena ee dhowaan la cusbooneysiiyey laga bilaabo 15-ka Maajo ilaa 1-da Juun, 2024. Booqdayaashu waxay fursad u heli doonaan inay la kulmaan farshaxaniistaha, ka qaybqaataan aqoon-isweydaarsiyo wax-ku-ool ah, oo xitaa iibsadaan farshaxanno la doortay. Nala soo qeybgal dabaaldegga guulaha farshaxanka ee ardaydeena iyo awoodda farshaxanku u leeyahay inuu mideeyo oo uu dhiirrigelin."
  },
  { 
    id: 6, 
    title: "New Scholarship Program Launched", 
    soTitle: "Barnaamij Cusub oo Deeqo-waxbarasho ah oo la Bilaabay", 
    type: "news", 
    date: "2024-02-28", 
    description: "Unity University introduces a new scholarship program to support talented students.", 
    soDescription: "Jaamacadda Midnimada waxay soo bandhigtay barnaamij cusub oo deeqo-waxbarasho ah oo loogu talagalay inuu taageero ardayda hibada leh.",
    fullContent: "Unity University is proud to announce the launch of our new comprehensive scholarship program, 'Empowering Future Leaders.' This initiative aims to provide financial support to talented and deserving students who demonstrate exceptional academic potential and leadership qualities. The program will offer full and partial scholarships across all our academic disciplines, with a special focus on supporting students from underrepresented communities and those pursuing studies in high-demand fields. Recipients will not only receive financial aid but also mentorship opportunities, leadership training, and internship placements. This scholarship program reflects our commitment to making quality higher education accessible to all and nurturing the next generation of leaders in East Africa.",
    soFullContent: "Jaamacadda Midnimada waxay ku faanaysaa inay ku dhawaaqdo bilaabista barnaamijkeena cusub ee deeqaha waxbarasho ee dhammaystiran, 'Awood u siinta Hoggaamiyeyaasha Mustaqbalka.' Hindisahani wuxuu ujeedkiisu yahay in la siiyo taageero dhaqaale arday hibooyinka leh oo mudan kuwaas oo muujiya kartida waxbarasho ee sarraysa iyo sifooyinka hoggaaminta. Barnaamijku wuxuu bixin doonaa deeqo waxbarasho oo buuxa iyo qayb ahba dhammaan qeybaha waxbarashadeena, iyadoo diiradda la saarayo taageeridda ardayda ka socota bulshooyinka aan la matalin iyo kuwa wax ka baranaya dhinacyada baahida sare leh. Kuwa hela ma heli doonaan kaliya kaalmada dhaqaale laakiin sidoo kale fursadaha la-talinta, tababarka hoggaaminta, iyo meeleynta tababbarka. Barnaamijkan deeqda waxbarasho wuxuu muujinayaa ballanqaadkeena ah in aan waxbarashada sare ee tayo leh u fudayno dhammaan oo aan kobcino jiilka xiga ee hoggaamiyeyaasha Bariga Afrika."
  },
]

export default function NewsAndEventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const categories = [...new Set(newsAndEvents.map(item => item.type))]

  const filteredItems = newsAndEvents.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    
    item.soTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.soDescription.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
                  News and Events
                  <span className="block text-lg text-red-300 hover:underline transition-all duration-300">Wararka iyo Dhacdooyinka</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up">
                  Stay updated with the latest happenings at Unity University
                  <span className="block text-sm text-red-200 hover:underline transition-all duration-300">La soco dhacdooyinka ugu dambeeyay ee Jaamacadda Midnimada</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl animate-fade-in-left">
                Latest Updates
                <span className="block text-lg text-red-600 hover:underline transition-all duration-300">Wararkii ugu dambeeyay</span>
              </h2>
              <div className="flex items-center space-x-2">
                <Search className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search news and events... / Raadi wararka iyo dhacdooyinka..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </div>
            <Tabs defaultValue={categories[0]} className="space-y-4">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems
                      .filter((item) => item.type === category)
                      .map((item) => (
                        <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                              {item.type === 'event' ? <Calendar className="h-5 w-5 text-red-600" /> : <Globe className="h-5 w-5 text-red-600" />}
                              <span>{item.title}
                                <span className="block text-sm text-red-500 group-hover:underline transition-all duration-300">{item.soTitle}</span>
                              </span>
                            </CardTitle>
                            <CardDescription>{new Date(item.date).toLocaleDateString()}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-500">{item.description}
                              <span className="block text-xs text-red-400 group-hover:underline transition-all duration-300">{item.soDescription}</span>
                            </p>
                            <ReadMoreNewsEventButton item={item} />
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}