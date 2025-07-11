"use client"

/* --------------------------------------------------------------
   HomePageClient.tsx
   • Scrolling reveal hooks for subsequent sections
   • TravelShowcase component right after the NavBar
----------------------------------------------------------------*/

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import TravelShowcase from "./hero/TravelShowcase"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

/* helper: fade+slide-up reveal for subsequent sections */
function useReveal(selector = ".reveal", y = 60) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
        gsap.from(el, {
          y,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        })
      })
    })
    return () => ctx.revert()
  }, [selector, y])
}

export default function HomePageClient() {
  useReveal()

  /* dummy data (unchanged) */
  const services = [
    {
      title: "Solar Panel Installation",
      icon: "🔧",
      desc: "Complete rooftop and ground-mounted panel installation for homes and businesses.",
    },
    {
      title: "Inverter Solutions",
      icon: "⚡",
      desc: "Reliable solar inverters including on-grid, off-grid, and hybrid systems.",
    },
    {
      title: "Energy Monitoring",
      icon: "📊",
      desc: "Real-time monitoring apps to track energy generation, savings, and usage.",
    },
    {
      title: "Maintenance & Support",
      icon: "🛠️",
      desc: "Scheduled maintenance, cleaning, and 24/7 technical support for all systems.",
    },
  ]

  const blogs = [
    {
      title: "Renewable Energy Solutions",
      desc: "Explore green sources of energy and solutions to achieve a sustainable future.",
      img: "/1.jpg",
    },
    {
      title: "Introduction to Solar Energy",
      desc: "Learn the basics of solar technology, its advantages, and applications worldwide.",
      img: "/12.jpg",
    },
    {
      title: "Benefits of Solar Energy",
      desc: "Understand why solar energy is one of the best long-term energy investments.",
      img: "/13.jpg",
    },
  ]

  const projects = [
    { title: "Solar Startup Landing", img: "/14.jpg" },
    { title: "AI SaaS Dashboard", img: "/15.jpg" },
    { title: "Luxury Jewellery Store", img: "/16.jpg" },
    { title: "Ed-tech LMS Platform", img: "/17.jpg" },
  ]

  const partners = [
    "/18.jpg",
    "/19.jpg",
    "/20.jpg",
    "/21.jpg",
    "/22.jpg",
  ]

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Travel showcase now appears first */}
      <TravelShowcase />

      {/* Stats */}
      <section className="py-12 text-white bg-gray-900 reveal">
        <div className="grid grid-cols-2 gap-8 px-4 mx-auto text-center max-w-7xl md:grid-cols-4 md:px-8">
          {["120+|Projects", "50+|Clients", "5x|Avg. ROI", "100%|On-time"].map((item) => {
            const [v, l] = item.split("|")
            return (
              <div key={l} className="flex flex-col">
                <span className="text-4xl font-extrabold">{v}</span>
                <span className="mt-2 text-sm tracking-wide text-gray-400 uppercase">{l}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Centre stats cards */}
      <section className="flex justify-center py-12 bg-white">
        <div className="flex flex-col gap-8 px-4 sm:flex-row sm:gap-0">
          {/* Left Card */}
          <div className="flex flex-col items-center justify-center p-6 border rounded-md w-64 sm:rounded-l-lg border-[#0A4D68]">
            <div className="w-12 h-12 mb-4 bg-[#0A4D68] text-white rounded-full flex items-center justify-center text-xl">
              <span>🗂️</span>
            </div>
            <p className="text-2xl font-semibold text-gray-800">20+</p>
            <p className="text-sm text-gray-600">Projects</p>
          </div>

          {/* Center Card */}
          <div className="flex flex-col items-center justify-center p-6 w-64 bg-[#0A4D68] text-white shadow-xl z-10 sm:rounded-none sm:border-y sm:border-t-0 sm:border-b-0">
            <div className="w-12 h-12 mb-4 bg-white text-[#0A4D68] rounded-full flex items-center justify-center text-xl">
              <span>📦</span>
            </div>
            <p className="text-2xl font-semibold">78 MW+</p>
            <p className="text-sm">Total Capacity</p>
          </div>

          {/* Right Card */}
          <div className="flex flex-col items-center justify-center p-6 border rounded-md w-64 sm:rounded-r-lg border-[#0A4D68]">
            <div className="w-12 h-12 mb-4 bg-[#0A4D68] text-white rounded-full flex items-center justify-center text-xl">
              <span>👥</span>
            </div>
            <p className="text-2xl font-semibold text-gray-800">70+</p>
            <p className="text-sm text-gray-600">Employees</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 py-20 mx-auto max-w-7xl md:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center reveal md:text-4xl">Solar Services</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center p-8 transition bg-white shadow-lg reveal rounded-2xl hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-5xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-center">{s.title}</h3>
              <p className="mt-2 text-sm text-center text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl md:px-8">
          <h2 className="mb-10 text-3xl font-bold text-center reveal md:text-4xl">Recent Projects</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{ 640: { slidesPerView: 1.2 }, 1024: { slidesPerView: 2.2 } }}
            className="reveal"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title} className="group">
                <div className="overflow-hidden shadow-lg rounded-2xl">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-64 transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{p.title}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-900">
        <div className="relative flex mx-auto overflow-hidden max-w-7xl">
          <div className="flex gap-16 animate-marquee shrink-0">
            {partners.concat(partners).map((logo, i) => (
              <Image
                key={i}
                src={logo || "/placeholder.svg"}
                alt="Partner"
                width={120}
                height={60}
                className="transition opacity-70 grayscale hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <main className="bg-[#003554] text-white">
        <section className="pt-24 pb-16 bg-[#003554] text-center">
          <h2 className="text-4xl font-bold mb-2">Blogs</h2>
          <p className="mb-8 text-sm uppercase tracking-wide">Recent Blogs</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
            {blogs.map((blog, i) => (
              <div key={i} className="bg-white text-black rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image src={blog.img} alt={blog.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm mt-2">{blog.desc}</p>
                  <a href="#" className="mt-3 inline-block text-blue-600 font-medium hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="pt-16 pb-24 bg-[#004466] text-center">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="max-w-2xl mx-auto mb-10 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-300 rounded-lg animate-pulse" />
            ))}
          </div>
        </section>
      </main>

      {/* Contact CTA */}
      <section id="contact" className="max-w-3xl px-4 py-24 mx-auto text-center reveal md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Have a project in mind?</h2>
        <p className="mt-4 text-lg text-gray-600">Let&apos;s turn your idea into a high-impact digital experience.</p>
        <Link
          href="mailto:hello@jjjjjj.com"
          className="inline-block px-10 py-4 mt-8 text-sm font-semibold tracking-wide text-white uppercase bg-red-600 rounded-full shadow-lg hover:bg-red-700"
        >
          Get in touch
        </Link>
      </section>
         <section className="py-20 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4">Calculate Your Solar Savings</h2>
          <p className="reveal text-xl mb-8">
            See how much you can save with solar energy. Get instant estimates for your property.
          </p>
          <div className="reveal bg-white rounded-2xl p-8 text-gray-900 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Electricity Bill</label>
                <input
                  type="number"
                  placeholder="₹5,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Calculate Savings
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
      {/* <footer className="py-0 text-sm text-center text-gray-400 bg-gray-900">
        <p>© {new Date().getFullYear()} Dmax. All rights reserved.</p>
      </footer> */}

      {/* marquee animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}
