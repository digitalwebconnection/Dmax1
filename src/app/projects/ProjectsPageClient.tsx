"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import NavBar from "../../../components/NavBar"
import Footer from "../../../components/Footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Calendar, Zap, TrendingUp, Award, Building, Home, Factory, ChevronRight } from "lucide-react"

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

export default function ProjectsPageClient() {
  useReveal()
  const [activeFilter, setActiveFilter] = useState("all")

  /* Project stagger animation */
  useEffect(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: { trigger: "#projects-grid", start: "top 85%" },
    })
  }, [])

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

  const projects = [
    {
      id: 1,
      title: "Pune Manufacturing Hub",
      category: "commercial",
      location: "Pune, Maharashtra",
      capacity: "2.5 MWp",
      year: "2023",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      description: "Large-scale rooftop installation for automotive manufacturing facility",
      savings: "₹45L annually",
      co2Reduction: "2,100 tons/year",
      featured: true,
    },
    {
      id: 2,
      title: "Green Valley Residences",
      category: "residential",
      location: "Mumbai, Maharashtra",
      capacity: "150 kWp",
      year: "2023",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      description: "Community solar project serving 50 residential units",
      savings: "₹8L annually",
      co2Reduction: "120 tons/year",
      featured: false,
    },
    {
      id: 3,
      title: "Gujarat Solar Farm",
      category: "utility",
      location: "Gandhinagar, Gujarat",
      capacity: "100 MWp",
      year: "2023",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      description: "Utility-scale ground-mounted solar power plant",
      savings: "₹180Cr over 25 years",
      co2Reduction: "85,000 tons/year",
      featured: true,
    },
    {
      id: 4,
      title: "Tech Park Bangalore",
      category: "commercial",
      location: "Bangalore, Karnataka",
      capacity: "1.8 MWp",
      year: "2022",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      description: "IT campus with integrated solar and battery storage",
      savings: "₹32L annually",
      co2Reduction: "1,500 tons/year",
      featured: false,
    },
    {
      id: 5,
      title: "Nashik Winery",
      category: "commercial",
      location: "Nashik, Maharashtra",
      capacity: "500 kWp",
      year: "2022",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      description: "Agri-voltaic installation for sustainable wine production",
      savings: "₹12L annually",
      co2Reduction: "420 tons/year",
      featured: false,
    },
    {
      id: 6,
      title: "Smart City Initiative",
      category: "utility",
      location: "Surat, Gujarat",
      capacity: "5 MWp",
      year: "2022",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
      description: "Municipal solar project powering public infrastructure",
      savings: "₹90L annually",
      co2Reduction: "4,200 tons/year",
      featured: true,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const categories = [
    { id: "all", label: "All Projects", icon: Award },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building },
    { id: "utility", label: "Utility Scale", icon: Factory },
  ]

  return (
    <>
      <NavBar />
      {/* HERO */}
      <header className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
          alt="Solar installation project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl">Our Projects</h1>
          <p className="mt-4 max-w-xl text-lg sm:text-xl text-white/90">
            Powering India&apos;s future with 400+ MWp of clean energy installations
          </p>
        </div>
      </header>

      {/* STATS SECTION */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="reveal text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  <span className="stat-number">400</span>+
                </div>
                <p className="text-gray-800 font-medium">MWp Installed</p>
              </div>
            </div>
            <div className="reveal text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  <span className="stat-number">1200</span>+
                </div>
                <p className="text-gray-800 font-medium">Projects Completed</p>
              </div>
            </div>
            <div className="reveal text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  ₹<span className="stat-number">190</span>Cr+
                </div>
                <p className="text-gray-800 font-medium">Client Savings</p>
              </div>
            </div>
            <div className="reveal text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  <span className="stat-number">95000</span>+
                </div>
                <p className="text-gray-800 font-medium">Tons CO₂ Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-800"
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`project-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className={`relative ${project.featured ? "h-80" : "h-64"} overflow-hidden`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Project Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Award size={14} className="mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-800 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-800 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Zap size={16} className="text-blue-800" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{project.capacity}</div>
                      <div className="text-xs text-gray-800">Capacity</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp size={16} className="text-green-800" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{project.savings}</div>
                      <div className="text-xs text-gray-800">Savings</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                    <button className="flex items-center text-blue-800 hover:text-blue-800 font-medium text-sm">
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
            <p className="reveal text-xl text-gray-800">Deep dive into our most impactful project</p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80"
                  alt="Gujarat Solar Farm Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="reveal">
                  <span className="bg-blue-800 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Case Study
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">
                    Gujarat Solar Farm: 100 MWp Utility Project
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Our largest utility-scale project demonstrates the potential of solar energy at scale. This
                    ground-mounted installation powers over 50,000 homes while creating local employment and
                    contributing to India&lsquo;s renewable energy goals.
                  </p>
                </div>
                <div className="reveal grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-800">100 MWp</div>
                    <div className="text-sm text-gray-800">Total Capacity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-800">85,000</div>
                    <div className="text-sm text-gray-800">Tons CO₂/year</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">50,000+</div>
                    <div className="text-sm text-gray-800">Homes Powered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">₹180Cr</div>
                    <div className="text-sm text-gray-800">25-year Savings</div>
                  </div>
                </div>
                <div className="reveal">
                  <button className="bg-blue-800 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="reveal text-xl text-gray-800">Success stories from our project partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                company: "Pune Manufacturing Hub",
                quote:
                  "DMAX Solar delivered our 2.5 MWp installation on time and within budget. Our energy costs have dropped by 60%.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Priya Patel",
                company: "Green Valley Residences",
                quote:
                  "The community solar project has been a game-changer. Professional service and excellent ongoing support.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Dr. Amit Kumar",
                company: "Tech Park Bangalore",
                quote:
                  "The integrated solar and battery solution provides reliable power for our critical IT operations. Highly recommended.",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <div key={index} className="reveal bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-800">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-800 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-blue-500 via-blue-800 to-blue-800 py-20 text-center text-white">
        <h2 className="reveal text-3xl font-bold mb-4">Ready to Start Your Solar Project?</h2>
        <p className="reveal mx-auto max-w-xl text-lg mb-8">
          Join 1200+ satisfied clients who have transformed their energy future with DMAX Solar.
        </p>
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow hover:scale-105 transition"
          >
            Get Free Quote
          </a>
          <a
            href="/services"
            className="inline-block rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-blue-700 transition"
          >
            View Services
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}
