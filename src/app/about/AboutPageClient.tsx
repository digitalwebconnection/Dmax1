"use client"
import { useEffect } from "react"
import Image from "next/image"
import NavBar from "../../../components/NavBar"
import Footer from "../../../components/Footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Users,
  Award,
  Target,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  CheckCircle,
  Star,
  Mail,
  Linkedin,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

/* Reveal animation hook */
function useReveal() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      })
    })
  }, [])
}

export default function AboutPage() {
  useReveal()

  /* Stats counter animation */
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
      gsap.from(el, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: el, start: "top 85%" },
      })
    })
  }, [])

  /* Team card stagger animation */
  useEffect(() => {
    gsap.from(".team-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: { trigger: "#team-section", start: "top 85%" },
    })
  }, [])

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years in renewable energy sector with expertise in large-scale solar installations.",
      linkedin: "#",
      email: "rajesh@dmaxsolar.com",
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former Tesla engineer specializing in solar technology and energy storage solutions.",
      linkedin: "#",
      email: "priya@dmaxsolar.com",
    },
    {
      name: "Amit Patel",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Project management expert with 200+ successful solar installations across India.",
      linkedin: "#",
      email: "amit@dmaxsolar.com",
    },
    {
      name: "Sneha Gupta",
      position: "Head of Business Development",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Strategic partnerships and business growth specialist in clean energy sector.",
      linkedin: "#",
      email: "sneha@dmaxsolar.com",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality & Reliability",
      description:
        "We use only premium components and follow international standards to ensure long-lasting solar solutions.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We provide personalized service and ongoing support throughout your solar journey.",
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Committed to reducing carbon footprint and creating a sustainable future for generations to come.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Continuously adopting latest technologies and innovative approaches to deliver cutting-edge solar solutions.",
    },
  ]

  const milestones = [
    { year: "2018", event: "DMAX Solar founded with a vision to democratize solar energy" },
    { year: "2019", event: "Completed first 100 residential installations" },
    { year: "2020", event: "Expanded to commercial sector with 50+ business clients" },
    { year: "2021", event: "Launched utility-scale projects, crossed 100 MWp milestone" },
    { year: "2022", event: "Achieved 1000+ installations, won 'Best Solar Company' award" },
    { year: "2023", event: "Reached 400+ MWp capacity, expanded to 5 states" },
  ]

  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powering India&apos;s <span className="text-blue-300">Solar Revolution</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Since 2018, DMAX Solar has been at the forefront of India&apos;s renewable energy transformation, delivering
                innovative solar solutions that power homes, businesses, and communities across the nation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  Our Story
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
                alt="DMAX Solar team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="reveal text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                <span className="stat-number">400</span>+
              </div>
              <p className="text-gray-600 font-medium">MWp Installed</p>
            </div>
            <div className="reveal text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                <span className="stat-number">1200</span>+
              </div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
            <div className="reveal text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                <span className="stat-number">5</span>
              </div>
              <p className="text-gray-600 font-medium">States Covered</p>
            </div>
            <div className="reveal text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                <span className="stat-number">95000</span>+
              </div>
              <p className="text-gray-600 font-medium">Tons CO₂ Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                DMAX Solar was born from a simple yet powerful vision: to make clean, renewable energy accessible to
                every Indian household and business. Founded in 2018 by a team of renewable energy enthusiasts, we
                started with a mission to bridge the gap between cutting-edge solar technology and practical, affordable
                solutions.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What began as a small team of engineers has grown into India&apos;s trusted solar partner, serving over 1200
                customers across residential, commercial, and utility sectors. Our commitment to quality, innovation,
                and customer satisfaction has made us a leader in the renewable energy space.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we&apos;re proud to have installed over 400 MWp of solar capacity, helping our customers save millions
                in energy costs while contributing to a cleaner, more sustainable future for India.
              </p>
            </div>
            <div className="reveal">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                alt="Solar installation team"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-blue-900 mb-4">Our Mission & Vision</h2>
            <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
              Driving India&apos;s transition to clean energy through innovative solar solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="reveal text-center">
              <div className="bg-blue-900 text-white p-8 rounded-2xl">
                <Target size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To democratize solar energy by providing high-quality, affordable, and reliable solar solutions that
                  empower individuals and businesses to achieve energy independence while contributing to environmental
                  sustainability.
                </p>
              </div>
            </div>
            <div className="reveal text-center">
              <div className="bg-white border-2 border-blue-900 p-8 rounded-2xl">
                <Zap size={48} className="mx-auto mb-4 text-blue-900" />
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be India&apos;s most trusted solar energy partner, leading the transformation towards a clean energy
                  future where every rooftop harnesses the power of the sun, creating sustainable communities and a
                  healthier planet.
                </p>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                  <value.icon size={40} className="mx-auto mb-4 text-blue-900" />
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold mb-4">Our Journey</h2>
            <p className="reveal text-xl text-blue-200">Key milestones in our solar revolution</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`reveal flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-300 rounded-full border-4 border-blue-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-blue-900 mb-4">Meet Our Leadership Team</h2>
            <p className="reveal text-xl text-gray-600">Experienced professionals driving innovation in solar energy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card bg-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-blue-900 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-blue-900 hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-blue-900 mb-4">Why Choose DMAX Solar?</h2>
            <p className="reveal text-xl text-gray-600">What sets us apart in the solar energy industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Recognition",
                description:
                  "Winner of 'Best Solar Company 2022' and multiple industry awards for excellence in service and innovation.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Certified engineers and technicians with extensive experience in solar installations and maintenance.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description:
                  "Premium components, rigorous testing, and comprehensive warranties ensure long-lasting performance.",
              },
              {
                icon: Star,
                title: "Customer Satisfaction",
                description:
                  "4.9/5 customer rating with 98% customer retention rate and thousands of positive reviews.",
              },
              {
                icon: Shield,
                title: "Comprehensive Support",
                description:
                  "End-to-end service from consultation to installation, maintenance, and 24/7 customer support.",
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description:
                  "400+ MWp installed capacity with 1200+ successful projects across residential, commercial, and utility sectors.",
              },
            ].map((feature, index) => (
              <div key={index} className="reveal bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <feature.icon size={40} className="text-blue-900 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl font-bold mb-4">Ready to Join the Solar Revolution?</h2>
          <p className="reveal text-xl text-blue-100 mb-8">
            Let&apos;s work together to create a sustainable energy future for your home or business.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/projects"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
