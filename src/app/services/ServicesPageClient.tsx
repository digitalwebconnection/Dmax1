"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "../../../components/NavBar"
import Footer from "../../../components/Footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Sun,
  Home,
  Building2,
  Factory,
  Battery,
  Zap,
  Shield,
  Wrench,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Calculator,
  Leaf,
  Award,
  Settings,
  BarChart3,
  Car,
  Lightbulb,
  Target,
  Globe,
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

function useServiceCardAnimation() {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#services-grid",
          start: "top 85%",
          once: true,
        },
      })
    }, 200)

    return () => clearTimeout(timer)
  }, [])
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("residential")
  const [] = useState(null)

  useReveal()
  useServiceCardAnimation()

  // Main service categories
  const serviceCategories = [
    {
      id: "residential",
      title: "Residential Solar",
      icon: Home,
      description: "Perfect solar solutions for your home",
      color: "bg-blue-900",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "commercial",
      title: "Commercial Solar",
      icon: Building2,
      description: "Scalable solutions for businesses",
      color: "bg-blue-900",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "industrial",
      title: "Industrial Solar",
      icon: Factory,
      description: "Large-scale industrial installations",
      color: "bg-blue-900",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "utility",
      title: "Utility Scale",
      icon: Sun,
      description: "Mega solar farms and grid solutions",
      color: "bg-blue-900",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Detailed services for each category
  const detailedServices = {
    residential: [
      {
        title: "Rooftop Solar Systems",
        description: "Complete rooftop solar installations with net metering for maximum savings.",
        features: ["3-10 kWp capacity", "25-year warranty", "Net metering setup", "Mobile app monitoring"],
        price: "Starting ₹3.5L",
        savings: "Save up to 90% on electricity bills",
        icon: Home,
      },
      {
        title: "Solar + Battery Storage",
        description: "Hybrid systems with battery backup for uninterrupted power supply.",
        features: ["Lithium-ion batteries", "4-8 hour backup", "Smart inverters", "Grid-tie capability"],
        price: "Starting ₹5.2L",
        savings: "24/7 clean energy independence",
        icon: Battery,
      },
      {
        title: "Solar Water Heating",
        description: "Efficient solar water heating systems for residential use.",
        features: ["100-300 liter capacity", "Evacuated tube collectors", "15-year warranty", "Quick installation"],
        price: "Starting ₹45K",
        savings: "Reduce water heating costs by 80%",
        icon: Zap,
      },
    ],
    commercial: [
      {
        title: "Commercial Rooftop Solar",
        description: "Large-scale rooftop installations for offices, malls, and commercial buildings.",
        features: ["50 kWp - 1 MWp", "SCADA monitoring", "Performance guarantees", "Tax benefits"],
        price: "₹35-40/Wp",
        savings: "ROI within 3-4 years",
        icon: Building2,
      },
      {
        title: "Solar Carports",
        description: "Dual-purpose solar installations providing shade and clean energy.",
        features: ["Covered parking", "EV charging ready", "Weather protection", "Space optimization"],
        price: "₹45-55/Wp",
        savings: "Maximize land utilization",
        icon: Car,
      },
      {
        title: "Energy Management Systems",
        description: "Smart energy management and monitoring solutions for commercial facilities.",
        features: ["Real-time monitoring", "Energy analytics", "Demand forecasting", "Cost optimization"],
        price: "₹2-5L per system",
        savings: "Optimize energy consumption by 20%",
        icon: BarChart3,
      },
    ],
    industrial: [
      {
        title: "Megawatt Solar Plants",
        description: "Large-scale ground-mounted and rooftop installations for industrial facilities.",
        features: ["1-50 MWp capacity", "Single-axis trackers", "Weather monitoring", "Grid synchronization"],
        price: "₹30-35/Wp",
        savings: "Reduce operational costs by 40%",
        icon: Factory,
      },
      {
        title: "Captive Power Plants",
        description: "Dedicated solar power plants for industrial captive consumption.",
        features: ["Open access setup", "Wheeling arrangements", "Power purchase agreements", "Grid stability"],
        price: "Custom pricing",
        savings: "Long-term energy security",
        icon: Zap,
      },
      {
        title: "Industrial Energy Storage",
        description: "Large-scale battery storage systems for industrial applications.",
        features: ["MW-scale storage", "Peak shaving", "Load balancing", "Grid services"],
        price: "₹8-12 Cr/MWh",
        savings: "Optimize demand charges",
        icon: Battery,
      },
    ],
    utility: [
      {
        title: "Solar Power Plants",
        description: "Utility-scale solar power plants for grid-connected electricity generation.",
        features: ["50-500 MWp", "Bifacial modules", "String inverters", "SCADA systems"],
        price: "₹25-30/Wp",
        savings: "Lowest cost renewable energy",
        icon: Sun,
      },
      {
        title: "Floating Solar",
        description: "Innovative floating solar installations on water bodies.",
        features: ["Water conservation", "Higher efficiency", "Land optimization", "Algae reduction"],
        price: "₹35-40/Wp",
        savings: "Dual environmental benefits",
        icon: Globe,
      },
      {
        title: "Agri-Voltaics",
        description: "Dual land use combining agriculture with solar power generation.",
        features: ["Crop protection", "Water conservation", "Farmer income", "Sustainable farming"],
        price: "₹40-50/Wp",
        savings: "Increase farm productivity by 30%",
        icon: Leaf,
      },
    ],
  }

  // Additional services
  const additionalServices = [
    {
      title: "Solar Consultation & Design",
      description: "Expert consultation and custom system design services",
      icon: Lightbulb,
      features: ["Site assessment", "Energy audit", "Custom design", "Financial analysis"],
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation by certified technicians",
      icon: Wrench,
      features: ["Certified installers", "Quality materials", "Safety protocols", "Testing & commissioning"],
    },
    {
      title: "Operations & Maintenance",
      description: "Comprehensive O&M services for optimal performance",
      icon: Settings,
      features: ["24/7 monitoring", "Preventive maintenance", "Performance optimization", "Warranty support"],
    },
    {
      title: "Financing Solutions",
      description: "Flexible financing options to make solar affordable",
      icon: Calculator,
      features: ["Zero down payment", "EMI options", "Subsidy assistance", "Insurance coverage"],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Guaranteed Savings",
      description: "Reduce electricity bills by up to 90% with our high-efficiency solar systems",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Comprehensive warranty on panels, inverters, and installation workmanship",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified engineers and technicians with 10+ years of experience",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Fast installation process with minimal disruption to your operations",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium Tier-1 components and ISO certified installation processes",
    },
    {
      icon: Target,
      title: "Performance Guarantee",
      description: "Guaranteed energy generation with performance monitoring and optimization",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Free site assessment and energy audit to understand your requirements",
      icon: Phone,
    },
    {
      step: "02",
      title: "Design",
      description: "Custom system design with 3D modeling and financial projections",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Approval",
      description: "Handle all permits, approvals, and grid connection procedures",
      icon: CheckCircle,
    },
    // {
    //   step: "04",
    //   title: "Installation",
    //   description: "Professional installation by certified technicians with safety protocols",
    //   icon: Wrench,
    // },
    // {
    //   step: "05",
    //   title: "Commissioning",
    //   description: "System testing, grid synchronization, and performance verification",
    //   icon: Settings,
    // },
    // {
    //   step: "06",
    //   title: "Monitoring",
    //   description: "Ongoing monitoring, maintenance, and performance optimization",
    //   icon: BarChart3,
    // },
  ]

  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Solar services hero"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Complete Solar
            <span className="block text-blue-800">Energy Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From residential rooftops to utility-scale solar farms, we provide end-to-end solar solutions tailored to
            your energy needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-800 hover:bg-blue-800 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold rounded-full transition-all">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Savings
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES TABS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solar Solutions</h2>
            <p className="reveal text-xl text-gray-600">
              Comprehensive solar solutions for every application and scale
            </p>
          </div>

          {/* Category Tabs */}
          <div className="reveal flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all ${
                  activeTab === category.id
                    ? "bg-blue-900 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                }`}
              >
                <category.icon size={24} />
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="reveal">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`${activeTab === category.id ? "block" : "hidden"} transition-all duration-500`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`inline-flex p-3 rounded-2xl ${category.color} text-white mb-4`}>
                      <category.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{category.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">1200+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">25 Years</div>
                        <div className="text-sm text-gray-600">Warranty</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {detailedServices[activeTab as keyof typeof detailedServices]?.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-xl mr-4">
                          <service.icon className="h-6 w-6 text-blue-800" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">Starting Price</span>
                          <span className="font-semibold text-gray-900">{service.price}</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium">{service.savings}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="reveal text-xl text-gray-600">Complete support throughout your solar journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="reveal bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DMAX Solar?</h2>
            <p className="reveal text-xl text-gray-600">Unmatched expertise and commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="reveal text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="reveal text-xl text-gray-600">
              Simple, transparent, and efficient solar installation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="reveal relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
                  <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
   
      {/* CTA SECTION */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="reveal text-xl mb-8">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+912212345678"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}




// "use client";

// import React from 'react';
// import Image from 'next/image';
// import NavBar from '../../../components/NavBar';
// import Footer from '../../../components/Footer';

// const services = [
//   "Complete Renewable Energy Solutions",
//   "Engineering, Procurement & Construction (EPC)",
//   "Site Evaluation & Feasibility Analysis",
//   "Smart Energy System Design",
//   "High‑Quality Procurement",
//   "Expert Construction Management",
//   "Ongoing Maintenance & Support",
//   "Advanced Performance Monitoring",
// ];

// const rows = [
//   {
//     img: "https://media.istockphoto.com/id/1473638950/photo/technicians-carrying-photovoltaic-solar-module-while-installing-solar-panel-system-on-roof-of.jpg?s=612x612&w=0&k=20&c=BHP3woa9yO0Em-dbAOkDSAy1x78D2wpXaKV9pOH18CU=",
//     title: "Preventive Maintenance & 24/7 Monitoring",
//   },
//   {
//     img: "https://www.shutterstock.com/image-photo/solar-energy-factory-warehouse-building-600nw-2517264391.jpg",
//     title: "Energy Yield Optimization",
//   },
//   {
//     img: "https://media.istockphoto.com/id/2137937205/photo/indian-worker-installing-solar-panels-on-roof-of-house-maintenance-of-photovoltaic-panel.jpg?s=612x612&w=0&k=20&c=EqdLVCyE0Jqa0kfTvdAK0nxFyurBLmRcpuliphRosdw=",
//     title: "Guaranteed System Performance",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9glqqIkNBdlhazCsZQCMKbtxUYIHRDeaLEg&s",
//     title: "Rapid Response for Repairs",
//   },
//   {
//     img: "https://claroenergy.in/wp-content/uploads/2017/11/rooftop-benefit-1.jpg",
//     title: "Spare Parts Replacement (First 5 Years)",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vZnRvcCUyMHNvbGFyfGVufDB8fDB8fHww",
//     title: "Custom Data Services",
//   },
// ];

// export default function Service() {
//   return (
//     <>
//     <NavBar />
//       <div className="bg-white text-gray-900">
//         {/* Hero */}
//         <div className="relative flex items-center justify-center h-48 md:h-64">
//           <div className="absolute inset-0">
//             <Image
//               src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740"
//               alt="Solar Panels"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
//           </div>
//           <div className="relative z-10 px-4 text-center text-white">
//             <h2 className="text-3xl font-semibold md:text-4xl">
//               Our Services
//             </h2>
//             <p className="mt-2 max-w-2xl text-sm md:text-base">
//               At DMAX Reinfra LLP, we provide complete renewable energy solutions,
//               including solar, wind, and hybrid systems, ensuring efficient and
//               sustainable execution from start to finish.
//             </p>
//           </div>
//         </div>

//         {/* Services List */}
//         <div className="container mx-auto max-w-7xl px-4 py-8">
//           <h3 className="mb-6 text-center text-3xl font-bold">
//             What We Offer
//           </h3>
//           <div className="flex flex-wrap -mx-2">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="w-full px-2 mb-4 sm:w-1/2 lg:w-1/2"
//               >
//                 <button className="flex w-full items-center justify-between rounded bg-blue-800 px-4 py-3 text-white transition hover:bg-blue-900">
//                   <span className="font-medium">
//                     {idx + 1}. {service}
//                   </span>
//                   <span className="text-xl font-bold">&gt;</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto max-w-7xl px-4 py-8">
//         <h1 className="mb-5 text-center text-3xl font-bold">
//           Operations & Maintenance (O&M) contracts
//         </h1>
//         <p className="mx-auto mb-10 max-w-7xl text-center text-lg font-semibold text-gray-700">
//           To ensure your renewable energy system runs efficiently, we offer
//           Operations & Maintenance (O&M) contracts tailored to your requirements.
//           Our goal is to maximize uptime and optimize energy production.
//         </p>
//         <div className="w-full table-auto border border-gray-300">
//           {rows.map((row, i) => (
//             <div
//               key={i}
//               className="flex items-center border-b last:border-b-0"
//             >
//               <div className="w-1/3">
//                 <div className="relative h-24 w-full">
//                   <Image
//                     src={row.img}
//                     alt={row.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="w-2/3 p-4">
//                 <span className="text-2xl">{row.title}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
