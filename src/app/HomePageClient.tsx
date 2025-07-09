"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Play,
  Zap,
  Shield,
  Leaf,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Calendar,
  Sun,
  Home,
  Building2,
  Factory,
  Calculator,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animation hooks
function useReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        })
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])
}

function useHeroAnimation() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline()
      tl.from(".hero-content", { y: 60, opacity: 0, duration: 0.8, ease: "power2.out" })
        .from(".hero-stats", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
    }, 200)

    return () => clearTimeout(timer)
  }, [])
}

function useCounterAnimation() {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.utils.toArray<HTMLElement>(".counter-number").forEach((el) => {
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        })
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [])
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [, setIsVideoPlaying] = useState(false)

  useReveal()
  useHeroAnimation()
  useCounterAnimation()

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, )

  const heroStats = [
    { number: "500", suffix: "+", label: "MWp Installed", icon: Zap },
    { number: "2000", suffix: "+", label: "Happy Clients", icon: Users },
    { number: "250", suffix: "Cr+", label: "Client Savings", prefix: "₹", icon: TrendingUp },
    { number: "120", suffix: "K+", label: "Tons CO₂ Saved", icon: Leaf },
  ]

  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete home solar solutions with net metering and battery backup options.",
      features: ["3-10 kWp systems", "25-year warranty", "90% bill reduction"],
      price: "Starting ₹3.5L",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-blue-500",
    },
    {
      icon: Building2,
      title: "Commercial Solar",
      description: "Scalable solar solutions for businesses with guaranteed ROI and tax benefits.",
      features: ["50 kWp - 1 MWp", "3-4 year payback", "Performance monitoring"],
      price: "₹35-40/Wp",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-green-500",
    },
    {
      icon: Factory,
      title: "Industrial Solar",
      description: "Large-scale installations for manufacturing and industrial facilities.",
      features: ["1-50 MWp capacity", "Grid synchronization", "40% cost reduction"],
      price: "₹30-35/Wp",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-purple-500",
    },
    {
      icon: Sun,
      title: "Utility Scale",
      description: "Mega solar farms and grid-connected power plants up to 500 MWp.",
      features: ["50-500 MWp", "Lowest LCOE", "Grid stability"],
      price: "₹25-30/Wp",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-orange-500",
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Leader",
      description: "10+ years of experience with 500+ MWp installed capacity across India.",
      stats: "500+ MWp",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Premium Tier-1 components with comprehensive 25-year warranty coverage.",
      stats: "25 Years",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified engineers and technicians with proven track record of excellence.",
      stats: "100+ Experts",
    },
    {
      icon: TrendingUp,
      title: "Guaranteed ROI",
      description: "Proven financial returns with performance guarantees and monitoring.",
      stats: "3-4 Years",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Pune Manufacturing Hub",
      role: "Plant Manager",
      rating: 5,
      quote:
        "DMAX Solar delivered our 2.5 MWp installation ahead of schedule and within budget. Our energy costs have dropped by 60%, and the system performance exceeds expectations.",
      image: "/placeholder.svg?height=80&width=80",
      savings: "₹45L annually",
      capacity: "2.5 MWp",
    },
    {
      name: "Priya Patel",
      company: "Green Valley Residences",
      role: "Community President",
      rating: 5,
      quote:
        "The community solar project has transformed our energy costs. Professional installation, excellent support, and the monitoring app keeps us informed about our savings.",
      image: "/placeholder.svg?height=80&width=80",
      savings: "₹8L annually",
      capacity: "150 kWp",
    },
    {
      name: "Dr. Amit Kumar",
      company: "Tech Park Bangalore",
      role: "Facility Director",
      rating: 5,
      quote:
        "The integrated solar and battery solution provides reliable power for our critical IT operations. DMAX Solar's expertise in commercial installations is unmatched.",
      image: "/placeholder.svg?height=80&width=80",
      savings: "₹32L annually",
      capacity: "1.8 MWp",
    },
  ]

  const recentProjects = [
    {
      title: "Gujarat Solar Farm",
      location: "Gandhinagar, Gujarat",
      capacity: "100 MWp",
      type: "Utility Scale",
      image: "/placeholder.svg?height=300&width=400",
      completion: "2024",
      savings: "₹180Cr over 25 years",
    },
    {
      title: "Mumbai Tech Campus",
      location: "Mumbai, Maharashtra",
      capacity: "3.2 MWp",
      type: "Commercial",
      image: "/placeholder.svg?height=300&width=400",
      completion: "2024",
      savings: "₹58L annually",
    },
    {
      title: "Bangalore Residential Complex",
      location: "Bangalore, Karnataka",
      capacity: "500 kWp",
      type: "Residential",
      image: "/placeholder.svg?height=300&width=400",
      completion: "2024",
      savings: "₹15L annually",
    },
  ]

  const newsUpdates = [
    {
      title: "DMAX Solar Completes India's Largest Floating Solar Project",
      date: "March 15, 2024",
      category: "Project Update",
      excerpt:
        "Successfully commissioned 50 MWp floating solar installation in Kerala, setting new industry standards.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "New Government Subsidies for Residential Solar",
      date: "March 10, 2024",
      category: "Policy Update",
      excerpt: "Enhanced subsidies up to 40% for residential solar installations under PM Surya Ghar scheme.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "DMAX Solar Wins 'Best Solar EPC Company' Award",
      date: "March 5, 2024",
      category: "Company News",
      excerpt: "Recognized for excellence in solar installations and customer satisfaction at Solar Power India 2024.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Solar panels with modern city skyline"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="hero-content text-white">
              <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-yellow-100">India&apos;s Leading Solar Company</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Power Your Future with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Clean Solar Energy
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Transform your energy costs with India&apos;s most trusted solar solutions. Join 2000+ satisfied customers
                saving ₹250Cr+ annually with our premium solar installations.
              </p>

              <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 font-semibold rounded-full transition-all"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </button>
              </div>

              {/* Hero Stats */}
              <div className="hero-stats grid grid-cols-2 lg:grid-cols-4 gap-6">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
                      <stat.icon className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        {stat.prefix}
                        <span className="counter-number">{stat.number}</span>
                        {stat.suffix}
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Elements */}
            <div className="hero-content">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Calculate Your Solar Savings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Monthly Electricity Bill</label>
                    <input
                      type="number"
                      placeholder="₹5,000"
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Property Type</label>
                    <select className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                      <option value="">Select Property Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105">
                    <Calculator className="inline mr-2 h-5 w-5" />
                    Calculate Savings
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">₹45,000</div>
                    <div className="text-sm text-gray-300">Average Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">Complete Solar Solutions</h2>
            <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
              From residential rooftops to utility-scale solar farms, we provide end-to-end solar solutions tailored to
              your energy needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="reveal group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div
                    className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <span className="font-bold text-lg text-gray-900">{service.price}</span>
                  </div>
                  <Link
                    href="/services"
                    className="flex items-center justify-center w-full bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all group-hover:bg-yellow-500 group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="block text-yellow-600">DMAX Solar?</span>
              </h2>
              <p className="reveal text-xl text-gray-600 mb-8">
                With over a decade of experience and 500+ MWp installed capacity, we&apos;re India&apos;s most trusted solar
                energy partner delivering guaranteed results.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="reveal flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-xl flex-shrink-0">
                      <item.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                          {item.stats}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="reveal grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image src="/placeholder.svg?height=150&width=300" alt="Solar panels" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image src="/placeholder.svg?height=150&width=300" alt="Solar farm" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Solar technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="reveal text-xl text-gray-600">Showcasing our latest solar installations across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="reveal group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.completion}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <div className="text-lg font-bold text-yellow-600">{project.capacity}</div>
                      <div className="text-xs text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-sm font-bold text-green-600">{project.savings}</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  </div>

                  <Link
                    href="/projects"
                    className="flex items-center justify-center w-full bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="reveal text-xl text-gray-600">Success stories from satisfied customers across India</p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div className="reveal">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-6 leading-relaxed">
                    {testimonials[activeTestimonial].quote}
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                      <div className="text-sm text-yellow-600 font-medium">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="reveal">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {testimonials[activeTestimonial].savings}
                      </div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">
                        {testimonials[activeTestimonial].capacity}
                      </div>
                      <div className="text-sm text-gray-600">System Capacity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? "bg-yellow-500 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="reveal text-xl text-gray-600">
              Stay updated with the latest in solar technology and industry news
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsUpdates.map((news, index) => (
              <article
                key={index}
                className="reveal bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                  <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Solar installation"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="reveal text-3xl md:text-5xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="reveal text-xl mb-8 max-w-2xl mx-auto">
            Join 2000+ satisfied customers who have transformed their energy future with DMAX Solar. Get your free
            consultation today and start saving immediately.
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+912212345678"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 font-semibold rounded-full transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 22 1234 5678
            </a>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              Free Site Assessment
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              25-Year Warranty
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              Expert Installation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              Performance Guarantee
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
