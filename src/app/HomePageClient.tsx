// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import NavBar from "../../components/NavBar"
// import Footer from "../../components/Footer"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import {
//   ArrowRight,
//   Play,
//   Zap,
//   Shield,
//   Leaf,
//   TrendingUp,
//   Users,
//   Award,
//   CheckCircle,
//   Phone,
//   MapPin,
//   Star,
//   Calendar,
//   Sun,
//   Home,
//   Building2,
//   Factory,
//   Calculator,
// } from "lucide-react"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// // Animation hooks
// function useReveal() {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
//         gsap.from(el, {
//           y: 50,
//           opacity: 0,
//           duration: 0.6,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             once: true,
//           },
//         })
//       })
//     }, 100)

//     return () => clearTimeout(timer)
//   }, [])
// }

// function useHeroAnimation() {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const tl = gsap.timeline()
//       tl.from(".hero-content", { y: 60, opacity: 0, duration: 0.8, ease: "power2.out" })
//         .from(".hero-stats", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
//         .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
//     }, 200)

//     return () => clearTimeout(timer)
//   }, [])
// }

// function useCounterAnimation() {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       gsap.utils.toArray<HTMLElement>(".counter-number").forEach((el) => {
//         gsap.from(el, {
//           textContent: 0,
//           duration: 2,
//           ease: "power2.out",
//           snap: { textContent: 1 },
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             once: true,
//           },
//         })
//       })
//     }, 300)

//     return () => clearTimeout(timer)
//   }, [])
// }

// export default function HomePage() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const [, setIsVideoPlaying] = useState(false)

//   useReveal()
//   useHeroAnimation()
//   useCounterAnimation()

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, )

//   const heroStats = [
//     { number: "500", suffix: "+", label: "MWp Installed", icon: Zap },
//     { number: "2000", suffix: "+", label: "Happy Clients", icon: Users },
//     { number: "250", suffix: "Cr+", label: "Client Savings", prefix: "₹", icon: TrendingUp },
//     { number: "120", suffix: "K+", label: "Tons CO₂ Saved", icon: Leaf },
//   ]

//   const services = [
//     {
//       icon: Home,
//       title: "Residential Solar",
//       description: "Complete home solar solutions with net metering and battery backup options.",
//       features: ["3-10 kWp systems", "25-year warranty", "90% bill reduction"],
//       price: "Starting ₹3.5L",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "bg-blue-500",
//     },
//     {
//       icon: Building2,
//       title: "Commercial Solar",
//       description: "Scalable solar solutions for businesses with guaranteed ROI and tax benefits.",
//       features: ["50 kWp - 1 MWp", "3-4 year payback", "Performance monitoring"],
//       price: "₹35-40/Wp",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "bg-green-500",
//     },
//     {
//       icon: Factory,
//       title: "Industrial Solar",
//       description: "Large-scale installations for manufacturing and industrial facilities.",
//       features: ["1-50 MWp capacity", "Grid synchronization", "40% cost reduction"],
//       price: "₹30-35/Wp",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "bg-purple-500",
//     },
//     {
//       icon: Sun,
//       title: "Utility Scale",
//       description: "Mega solar farms and grid-connected power plants up to 500 MWp.",
//       features: ["50-500 MWp", "Lowest LCOE", "Grid stability"],
//       price: "₹25-30/Wp",
//       image: "/placeholder.svg?height=300&width=400",
//       color: "bg-orange-500",
//     },
//   ]

//   const whyChooseUs = [
//     {
//       icon: Award,
//       title: "Industry Leader",
//       description: "10+ years of experience with 500+ MWp installed capacity across India.",
//       stats: "500+ MWp",
//     },
//     {
//       icon: Shield,
//       title: "Quality Assured",
//       description: "Premium Tier-1 components with comprehensive 25-year warranty coverage.",
//       stats: "25 Years",
//     },
//     {
//       icon: Users,
//       title: "Expert Team",
//       description: "Certified engineers and technicians with proven track record of excellence.",
//       stats: "100+ Experts",
//     },
//     {
//       icon: TrendingUp,
//       title: "Guaranteed ROI",
//       description: "Proven financial returns with performance guarantees and monitoring.",
//       stats: "3-4 Years",
//     },
//   ]

//   const testimonials = [
//     {
//       name: "Rajesh Sharma",
//       company: "Pune Manufacturing Hub",
//       role: "Plant Manager",
//       rating: 5,
//       quote:
//         "DMAX Solar delivered our 2.5 MWp installation ahead of schedule and within budget. Our energy costs have dropped by 60%, and the system performance exceeds expectations.",
//       image: "/placeholder.svg?height=80&width=80",
//       savings: "₹45L annually",
//       capacity: "2.5 MWp",
//     },
//     {
//       name: "Priya Patel",
//       company: "Green Valley Residences",
//       role: "Community President",
//       rating: 5,
//       quote:
//         "The community solar project has transformed our energy costs. Professional installation, excellent support, and the monitoring app keeps us informed about our savings.",
//       image: "/placeholder.svg?height=80&width=80",
//       savings: "₹8L annually",
//       capacity: "150 kWp",
//     },
//     {
//       name: "Dr. Amit Kumar",
//       company: "Tech Park Bangalore",
//       role: "Facility Director",
//       rating: 5,
//       quote:
//         "The integrated solar and battery solution provides reliable power for our critical IT operations. DMAX Solar's expertise in commercial installations is unmatched.",
//       image: "/placeholder.svg?height=80&width=80",
//       savings: "₹32L annually",
//       capacity: "1.8 MWp",
//     },
//   ]

//   const recentProjects = [
//     {
//       title: "Gujarat Solar Farm",
//       location: "Gandhinagar, Gujarat",
//       capacity: "100 MWp",
//       type: "Utility Scale",
//       image: "/placeholder.svg?height=300&width=400",
//       completion: "2024",
//       savings: "₹180Cr over 25 years",
//     },
//     {
//       title: "Mumbai Tech Campus",
//       location: "Mumbai, Maharashtra",
//       capacity: "3.2 MWp",
//       type: "Commercial",
//       image: "/placeholder.svg?height=300&width=400",
//       completion: "2024",
//       savings: "₹58L annually",
//     },
//     {
//       title: "Bangalore Residential Complex",
//       location: "Bangalore, Karnataka",
//       capacity: "500 kWp",
//       type: "Residential",
//       image: "/placeholder.svg?height=300&width=400",
//       completion: "2024",
//       savings: "₹15L annually",
//     },
//   ]

//   const newsUpdates = [
//     {
//       title: "DMAX Solar Completes India's Largest Floating Solar Project",
//       date: "March 15, 2024",
//       category: "Project Update",
//       excerpt:
//         "Successfully commissioned 50 MWp floating solar installation in Kerala, setting new industry standards.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "New Government Subsidies for Residential Solar",
//       date: "March 10, 2024",
//       category: "Policy Update",
//       excerpt: "Enhanced subsidies up to 40% for residential solar installations under PM Surya Ghar scheme.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//     {
//       title: "DMAX Solar Wins 'Best Solar EPC Company' Award",
//       date: "March 5, 2024",
//       category: "Company News",
//       excerpt: "Recognized for excellence in solar installations and customer satisfaction at Solar Power India 2024.",
//       image: "/placeholder.svg?height=200&width=300",
//     },
//   ]

//   return (
//     <>
//       <NavBar />

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Video/Image */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800" />
//           <Image
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="Solar panels with modern city skyline"
//             fill
//             priority
//             className="object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="hero-content text-white">
//               <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
//                 <Zap className="h-4 w-4 text-yellow-400 mr-2" />
//                 <span className="text-sm font-medium text-yellow-100">India&apos;s Leading Solar Company</span>
//               </div>

//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
//                 Power Your Future with
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
//                   Clean Solar Energy
//                 </span>
//               </h1>

//               <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
//                 Transform your energy costs with India&apos;s most trusted solar solutions. Join 2000+ satisfied customers
//                 saving ₹250Cr+ annually with our premium solar installations.
//               </p>

//               <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-12">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
//                 >
//                   Get Free Quote
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//                 <button
//                   onClick={() => setIsVideoPlaying(true)}
//                   className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 font-semibold rounded-full transition-all"
//                 >
//                   <Play className="mr-2 h-5 w-5" />
//                   Watch Our Story
//                 </button>
//               </div>

//               {/* Hero Stats */}
//               <div className="hero-stats grid grid-cols-2 lg:grid-cols-4 gap-6">
//                 {heroStats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
//                       <stat.icon className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
//                       <div className="text-2xl md:text-3xl font-bold text-white">
//                         {stat.prefix}
//                         <span className="counter-number">{stat.number}</span>
//                         {stat.suffix}
//                       </div>
//                     </div>
//                     <div className="text-sm text-gray-300">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Interactive Elements */}
//             <div className="hero-content">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-6">Calculate Your Solar Savings</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-200 mb-2">Monthly Electricity Bill</label>
//                     <input
//                       type="number"
//                       placeholder="₹5,000"
//                       className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-200 mb-2">Property Type</label>
//                     <select className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
//                       <option value="">Select Property Type</option>
//                       <option value="residential">Residential</option>
//                       <option value="commercial">Commercial</option>
//                       <option value="industrial">Industrial</option>
//                     </select>
//                   </div>
//                   <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105">
//                     <Calculator className="inline mr-2 h-5 w-5" />
//                     Calculate Savings
//                   </button>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-white/20">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-yellow-400">₹45,000</div>
//                     <div className="text-sm text-gray-300">Average Annual Savings</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </section>

//       {/* SERVICES OVERVIEW */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">Complete Solar Solutions</h2>
//             <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
//               From residential rooftops to utility-scale solar farms, we provide end-to-end solar solutions tailored to
//               your energy needs and budget.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="reveal group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
//               >
//                 <div className="relative mb-6">
//                   <div
//                     className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//                   >
//                     <service.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
//                     NEW
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">{service.description}</p>

//                 <ul className="space-y-2 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-600">
//                       <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="border-t pt-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="text-sm text-gray-500">Starting from</span>
//                     <span className="font-bold text-lg text-gray-900">{service.price}</span>
//                   </div>
//                   <Link
//                     href="/services"
//                     className="flex items-center justify-center w-full bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all group-hover:bg-yellow-500 group-hover:text-white"
//                   >
//                     Learn More
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               href="/services"
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
//             >
//               View All Services
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left Content */}
//             <div>
//               <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Why Choose
//                 <span className="block text-yellow-600">DMAX Solar?</span>
//               </h2>
//               <p className="reveal text-xl text-gray-600 mb-8">
//                 With over a decade of experience and 500+ MWp installed capacity, we&apos;re India&apos;s most trusted solar
//                 energy partner delivering guaranteed results.
//               </p>

//               <div className="space-y-6">
//                 {whyChooseUs.map((item, index) => (
//                   <div key={index} className="reveal flex items-start space-x-4">
//                     <div className="bg-yellow-100 p-3 rounded-xl flex-shrink-0">
//                       <item.icon className="h-6 w-6 text-yellow-600" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between mb-2">
//                         <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
//                         <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
//                           {item.stats}
//                         </span>
//                       </div>
//                       <p className="text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Image Grid */}
//             <div className="reveal grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <div className="relative h-48 rounded-2xl overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=200&width=300"
//                     alt="Solar installation"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="relative h-32 rounded-2xl overflow-hidden">
//                   <Image src="/placeholder.svg?height=150&width=300" alt="Solar panels" fill className="object-cover" />
//                 </div>
//               </div>
//               <div className="space-y-4 mt-8">
//                 <div className="relative h-32 rounded-2xl overflow-hidden">
//                   <Image src="/placeholder.svg?height=150&width=300" alt="Solar farm" fill className="object-cover" />
//                 </div>
//                 <div className="relative h-48 rounded-2xl overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=200&width=300"
//                     alt="Solar technology"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* RECENT PROJECTS */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">Recent Projects</h2>
//             <p className="reveal text-xl text-gray-600">Showcasing our latest solar installations across India</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {recentProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className="reveal group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {project.type}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
//                       {project.completion}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <div className="flex items-center text-gray-600 mb-3">
//                     <MapPin size={16} className="mr-2" />
//                     <span className="text-sm">{project.location}</span>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="text-center p-3 bg-yellow-50 rounded-lg">
//                       <div className="text-lg font-bold text-yellow-600">{project.capacity}</div>
//                       <div className="text-xs text-gray-600">Capacity</div>
//                     </div>
//                     <div className="text-center p-3 bg-green-50 rounded-lg">
//                       <div className="text-sm font-bold text-green-600">{project.savings}</div>
//                       <div className="text-xs text-gray-600">Savings</div>
//                     </div>
//                   </div>

//                   <Link
//                     href="/projects"
//                     className="flex items-center justify-center w-full bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
//                   >
//                     View Details
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               href="/projects"
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
//             >
//               View All Projects
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//             <p className="reveal text-xl text-gray-600">Success stories from satisfied customers across India</p>
//           </div>

//           <div className="relative">
//             <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                 {/* Testimonial Content */}
//                 <div className="reveal">
//                   <div className="flex items-center mb-6">
//                     {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
//                       <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
//                     ))}
//                   </div>

//                   <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-6 leading-relaxed">
//                     {testimonials[activeTestimonial].quote}
//                   </blockquote>

//                   <div className="flex items-center space-x-4">
//                     <Image
//                       src={testimonials[activeTestimonial].image || "/placeholder.svg"}
//                       alt={testimonials[activeTestimonial].name}
//                       width={60}
//                       height={60}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <div className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</div>
//                       <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
//                       <div className="text-sm text-yellow-600 font-medium">
//                         {testimonials[activeTestimonial].company}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="reveal">
//                   <div className="grid grid-cols-2 gap-6">
//                     <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
//                       <div className="text-3xl font-bold text-green-600 mb-2">
//                         {testimonials[activeTestimonial].savings}
//                       </div>
//                       <div className="text-sm text-gray-600">Annual Savings</div>
//                     </div>
//                     <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
//                       <div className="text-3xl font-bold text-yellow-600 mb-2">
//                         {testimonials[activeTestimonial].capacity}
//                       </div>
//                       <div className="text-sm text-gray-600">System Capacity</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Testimonial Navigation */}
//               <div className="flex justify-center mt-8 space-x-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveTestimonial(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       index === activeTestimonial ? "bg-yellow-500 w-8" : "bg-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* NEWS & UPDATES */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="reveal text-3xl md:text-5xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
//             <p className="reveal text-xl text-gray-600">
//               Stay updated with the latest in solar technology and industry news
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {newsUpdates.map((news, index) => (
//               <article
//                 key={index}
//                 className="reveal bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={news.image || "/placeholder.svg"}
//                     alt={news.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {news.category}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center text-gray-500 text-sm mb-3">
//                     <Calendar size={16} className="mr-2" />
//                     {news.date}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
//                     {news.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
//                   <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm">
//                     Read More
//                     <ArrowRight className="ml-1 h-4 w-4" />
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               href="/news"
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
//             >
//               View All News
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800" />
//         <div className="absolute inset-0">
//           <Image
//             src="/placeholder.svg?height=600&width=1200"
//             alt="Solar installation"
//             fill
//             className="object-cover opacity-20"
//           />
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <h2 className="reveal text-3xl md:text-5xl font-bold mb-6">Ready to Go Solar?</h2>
//           <p className="reveal text-xl mb-8 max-w-2xl mx-auto">
//             Join 2000+ satisfied customers who have transformed their energy future with DMAX Solar. Get your free
//             consultation today and start saving immediately.
//           </p>

//           <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-8">
//             <Link
//               href="/contact"
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
//             >
//               Get Free Consultation
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//             <a
//               href="tel:+912212345678"
//               className="inline-flex items-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 font-semibold rounded-full transition-all"
//             >
//               <Phone className="mr-2 h-5 w-5" />
//               Call Now: +91 22 1234 5678
//             </a>
//           </div>

//           <div className="reveal flex flex-wrap justify-center gap-8 text-sm">
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
//               Free Site Assessment
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
//               25-Year Warranty
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
//               Expert Installation
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
//               Performance Guarantee
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }



// components/HomePageClient.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ChevronLeft,
  Network,
  LayoutGrid,
  ChevronRight,
  Users2,
} from "lucide-react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------------------------------------------
   DATA
   --------------------------------------------------------------------------- */
const stats = [
  { icon: <Network size={24} />, value: "20+", label: "Projects" },
  { icon: <LayoutGrid size={24} />, value: "78 MW+", label: "Total Capacity" },
  { icon: <Users2 size={24} />, value: "70+", label: "Employees" },
];

const projectImages = [
  "https://thumbs.dreamstime.com/b/solar-energy-panels-24092598.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZmn7027LcMKSM_VmaDiH1w-XQ6BmdLzjoQ&s",
  "https://thumbs.dreamstime.com/b/solar-energy-panels-24092598.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZmn7027LcMKSM_VmaDiH1w-XQ6BmdLzjoQ&s",
];

const services = [
  {
    title: "Hassle-Free Operation",
    description:
      "You will experience hassle-free operation with proactive, regularly scheduled maintenance to identify, prevent, or promptly resolve potential issues.",
    image: "https://seia.org/wp-content/uploads/2024/08/solar-farm-high-rez.jpg",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize your system’s performance with real-time monitoring, analytics, and expert interventions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYypFlkGn4Low6U9WcUsK0CIRD21n8wo7lKg&s",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide full technical support, ensuring your solar solution is reliable and up-to-date.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg",
  },
];

const blogs = [
  {
    title: "Renewable Energy Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/28/full/1724835314-5004.jpg?im=FitAndFill=(826,465)",
  },
  {
    title: "Introduction to Solar Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3m4ULjD46IrPwN6UiO44Fb7FdqtdwYFQ2A&s",
  },
  {
    title: "Benefits of Solar Energy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/235/998/non_2x/solar-panel-cell-on-dramatic-sunset-sky-background-free-photo.jpg",
  },
];

/* ---------------------------------------------------------------------------
   COMPONENT
   --------------------------------------------------------------------------- */
const HomePageClient: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevSlide = () =>
    setActiveIndex((p) => (p === 0 ? services.length - 1 : p - 1));
  const nextSlide = () =>
    setActiveIndex((p) => (p === services.length - 1 ? 0 : p + 1));

  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const serviceTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero zoom-in
      gsap.from(heroImgRef.current, {
        scale: 1.25,
        duration: 1.6,
        ease: "power3.out",
      });
      // Parallax
      gsap.to(heroImgRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      // Title reveal
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });
      // Stats
      gsap.fromTo(
        statsRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
      // Projects
      gsap.fromTo(
        projectsRef.current?.children ?? [],
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
          },
        }
      );
      // Blogs
      gsap.fromTo(
        blogsRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogsRef.current,
            start: "top 85%",
          },
        }
      );
      // Clients
      gsap.fromTo(
        clientsRef.current?.children ?? [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: clientsRef.current,
            start: "top 90%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const img = document.getElementById("service-slide-img");
    if (!img) return;
    gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1, ease: "power3.out" });
    if (serviceTextRef.current) {
      gsap.fromTo(
        serviceTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <>
    <NavBar />
      {/* HERO */}
      <div ref={heroRef} className="relative overflow-hidden bg-white">
        <div ref={heroImgRef} className="relative w-full h-[400px]">
          <Image
            src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740"
            alt="Solar Panels"
            fill
            className="object-cover will-change-transform"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <h1
          ref={heroTitleRef}
          className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white border-b-2 border-white md:text-4xl w-fit mx-auto mb-12"
        >
          Empower&nbsp;Your&nbsp;Organization
        </h1>
      </div>

      {/* STATS */}
      <div
        ref={statsRef}
        className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto mt-16 md:grid-cols-3"
      >
        {stats.map(({ icon, value, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-6 text-center bg-white border rounded-lg shadow-md transition-transform hover:scale-105 group"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-cyan-800 group-hover:bg-white group-hover:text-cyan-800">
              {icon}
            </div>
            <div className="flex items-center gap-1 text-2xl font-bold text-black group-hover:text-white">
              {value}
              <ArrowUpRight
                size={18}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div className="mt-1 text-sm text-black group-hover:text-white">{label}</div>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <section ref={projectsRef} className="px-4 py-12 bg-white md:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center text-cyan-900">Projects</h2>
        <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto md:grid-cols-4">
          {projectImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded shadow-sm relative h-72">
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end max-w-6xl mx-auto mt-6">
          <Link href="/projects" className="flex items-center text-sm text-black/80 hover:text-cyan-800">
            See All
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-16 text-center bg-white md:px-8">
        <h2 className="mb-4 text-3xl font-semibold text-cyan-900">Services</h2>
        <p className="mx-auto mb-10 text-xl text-gray-600 max-w-7xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative mx-auto max-w-7xl">
          {/* Slide */}
          <div className="relative overflow-hidden shadow-lg rounded-xl">
            <div id="service-slide-img" className="relative w-full h-[400px] brightness-75">
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div ref={serviceTextRef} className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                {services[activeIndex].title}
              </h3>
              <p className="max-w-xl px-4 text-sm md:text-base">
                {services[activeIndex].description}
              </p>
            </div>
            <button
              onClick={prevSlide}
              aria-label="Previous service"
              className="absolute left-4 top-1/2 p-2 bg-white rounded-full shadow -translate-y-1/2 hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next service"
              className="absolute right-4 top-1/2 p-2 bg-white rounded-full shadow -translate-y-1/2 hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute flex justify-center w-full gap-2 bottom-4">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-3 w-3 rounded-full ${
                    idx === activeIndex ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 px-2 mt-6 overflow-x-auto">
            {services.map((s, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  idx === activeIndex ? "border-cyan-600 shadow-lg" : "border-transparent"
                }`}
              >
                <div className="relative w-40 h-24">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS & CLIENTS */}
      <section className="px-4 pt-16 bg-[#003b5c] text-white rounded-lg">
        <div className="text-center pb-10">
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <h3 className="inline-block mt-8 pb-1 border-b-2 border-white">Recent Blogs</h3>
        </div>
        <div
          ref={blogsRef}
          className="grid max-w-6xl gap-6 px-4 mx-auto mt-10 md:grid-cols-3"
        >
          {blogs.map((b, i) => (
            <div key={i} className="overflow-hidden bg-white text-black rounded-lg shadow-md">
              <div className="relative w-full h-48">
                <Image src={b.image} alt={b.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="mb-2 text-lg font-semibold">{b.title}</h4>
                <p className="mb-4 text-sm">{b.description}</p>
                <Link href="#" className="text-sm font-medium underline text-blue-600">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CLIENTS */}
        <section ref={clientsRef} className="py-16 mt-16 text-center bg-[#004e75] px-4">
          <h2 className="mb-4 text-3xl font-semibold">Our Clients</h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto sm:grid-cols-3 md:grid-cols-5">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="w-full h-24 bg-gray-300 rounded-lg" />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default HomePageClient;
