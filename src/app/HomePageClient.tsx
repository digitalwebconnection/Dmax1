"use client"

/* --------------------------------------------------------------
   HomePageClient.tsx — hero pinned until both image *and text* fully shrink
   • Image shrinks to 0 (vanishes) while rotating
   • Hero headline + sub-text shrink to 0 with counter-rotate, synced
   • Section remains pinned until the animation completes
   • Added PowerPoint-style animated section
----------------------------------------------------------------*/

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import NavBar from "../../components/NavBar"


import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useRevealServices() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".solar-service").forEach((el: any, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}





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

/* PowerPoint-style animations hook */

export default function HomePageClient() {
  /* refs */
  const heroRef = useRef<HTMLElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  /* PowerPoint animations */
  // const { sectionRef, titleRef, subtitleRef, cardsRef, statsRef } = usePowerPointAnimations()

  /* pin + synced shrink animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current || !bgRef.current || !textRef.current) return

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            // pin for full viewport
            scrub: true,
            pin: true,
          },
        })
        .fromTo(bgRef.current, { scale: 1, rotate: 0, transformOrigin: "center" }, { scale: 0, rotate: 20 })
        .fromTo(
          textRef.current,
          { scale: 0, rotate: 10 },
          { scale: 1, rotate: 0, transformOrigin: "center" },
          0, // start at same time as image
        )
    })
    return () => ctx.revert()
  }, [])

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

  const projects = [
    { title: "Solar Startup Landing", img: "/projects/solar.jpg" },
    { title: "AI SaaS Dashboard", img: "/projects/ai-saas.jpg" },
    { title: "Luxury Jewellery Store", img: "/projects/jewellery.jpg" },
    { title: "Ed-tech LMS Platform", img: "/projects/edtech.jpg" },
  ]

  const partners = [
    "/partners/aws.svg",
    "/partners/google.svg",
    "/partners/meta.svg",
    "/partners/shopify.svg",
    "/partners/vercel.svg",
  ]

  /* PowerPoint-style section data */
  // const pptFeatures = [
  //   { title: "Slide Transitions", icon: "🎬", desc: "Smooth transitions between content sections" },
  //   { title: "Slide Transitions", icon: "🎬", desc: "Smooth transitions between content sections" },
  //   { title: "Slide Transitions", icon: "🎬", desc: "Smooth transitions between content sections" },
  //   { title: "Bounce & Scale", icon: "🎯", desc: "Dynamic scaling and bouncing effects" },
  // ]

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        {/* Image */}
        <div ref={bgRef} className="absolute inset-0 z-10 will-change-transform">
          <Image src="/solar-panels-roof-solar-cell.jpg" alt="Solar roof" fill priority className="object-cover" />
        </div>
        {/* Text behind image */}
        <div
          ref={textRef}
          className="relative flex flex-col items-center justify-center h-full px-4 text-center text-black -z-10"
        >
          <h1 className="text-5xl font-extrabold reveal md:text-7xl">Building&nbsp;Digital&nbsp;Experiences</h1>
          <p className="max-w-2xl mt-4 text-lg reveal md:text-2xl">
            We craft performant websites, apps & campaigns that drive growth.
          </p>
        </div>
      </section>

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

      {/* PowerPoint-Style Animated Section */}
      {/* <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"> */}
      {/* <div className="px-4 mx-auto max-w-7xl md:px-8"> */}
      {/* Animated Title with Typewriter Effect */}
      {/* <h2 ref={titleRef} className="mb-4 text-4xl font-bold text-center text-gray-800 md:text-5xl"> */}
      {/* Text will be animated via GSAP TextPlugin */}
      {/* </h2> */}

      {/* Animated Subtitle */}
      {/* <p ref={subtitleRef} className="mb-16 text-xl text-center text-gray-600">
            Experience presentation-quality animations on the web
          </p> */}

      {/* Animated Feature Cards */}
      {/* <div ref={cardsRef} className="grid gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-4">
            {pptFeatures.map((feature) => (
              <div
                key={feature.title}
                className="relative p-8 overflow-hidden transition-all duration-300 bg-white shadow-lg ppt-card group rounded-2xl hover:shadow-2xl"
              >
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-10"></div>
                <div className="relative z-10 text-center">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div> */}

      {/* Animated Stats Counter */}
      {/* <div ref={statsRef} className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: 250, label: "Animations", suffix: "+" },
              { number: 98, label: "Satisfaction", suffix: "%" },
              { number: 15, label: "Effects", suffix: "" },
              { number: 60, label: "FPS", suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="text-center stat-container">
                <div className="mb-2 text-3xl font-bold text-indigo-600 md:text-4xl">
                  <span className="stat-number">{stat.number}</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm tracking-wide text-gray-500 uppercase">{stat.label}</div>
              </div>
            ))}
          </div> */}

      {/* Interactive Demo Button */}
      {/* <div className="mt-16 text-center">
            <button className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105">
              <span className="relative z-10">See More Effects</span>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>
      </section> */}

      {/* Services */}
   <section id="services" className="px-4 py-20 mx-auto max-w-7xl md:px-8">
  <h2 className="mb-12 text-3xl font-bold text-center reveal md:text-4xl">
    Solar Services
  </h2>

  <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((s) => (
      <div
        key={s.title}
        className="flex flex-col items-center p-8 transition-all duration-300 transform bg-white shadow-lg solar-service rounded-2xl group hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
      >
        <div className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {s.icon}
        </div>
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

      {/* Contact CTA */}
      <section id="contact" className="max-w-3xl px-4 py-24 mx-auto text-center reveal md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Have a project in mind?</h2>
        <p className="mt-4 text-lg text-gray-600">Let&apos;s turn your idea into a high‑impact digital experience.</p>
        <Link
          href="mailto:hello@jjjjjj.com"
          className="inline-block px-10 py-4 mt-8 text-sm font-semibold tracking-wide text-white uppercase bg-red-600 rounded-full shadow-lg hover:bg-red-700"
        >
          Get in touch
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-10 text-sm text-center text-gray-400 bg-gray-900">
        <p>© {new Date().getFullYear()} Vahlay Consulting. All rights reserved.</p>
      </footer>

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
