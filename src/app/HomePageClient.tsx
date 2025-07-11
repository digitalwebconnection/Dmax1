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
function usePowerPointAnimations() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Typewriter effect for title
      // if (titleRef.current) {
      //   tl.from(titleRef.current, {
      //     duration: 0.1,
      //     opacity: 0,
      //   }).to(titleRef.current, {
      //     duration: 2,
      //     text: "Power Your Home, Sustain Our Planet: Go Solar Today",
      //     ease: "none",
      //   })
      // }

      // Slide in subtitle from right
      if (subtitleRef.current) {
        tl.from(
          subtitleRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=1.5",
        )
      }

      // Staggered card animations (slide from different directions)
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".ppt-card")
        tl.from(
          cards,
          {
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 0.6,
            stagger: {
              amount: 1.2,
              from: "center",
            },
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )
      }

      // Counter animation for stats
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll(".stat-number")
        tl.from(
          statNumbers,
          {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            stagger: 0.2,
          },
          "-=1",
        )

        // Bounce effect for stat containers
        tl.from(
          statsRef.current.querySelectorAll(".stat-container"),
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "bounce.out",
          },
          "-=2",
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return { sectionRef, titleRef, subtitleRef, cardsRef, statsRef }
}

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
      title: "Web Development",
      icon: "https://www.investopedia.com/thmb/HNgIWqoqYesoBAo6zqWc9LiiWlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1278948452-e1fdce3baef44af28f449ab36d6717f3.jpg",
      desc: "Modern, performant websites & apps built with React / Next.js.",
    },
    {
      title: "Digital Marketing",
      icon: "https://img.freepik.com/free-photo/solar-panels-meadow_1286-146.jpg?semt=ais_hybrid&w=740",
      desc: "SEO, PPC & social campaigns that turn clicks into customers.",
    },
    {
      title: "Brand Strategy",
      icon: "https://dn5z2jafg7hv0.cloudfront.net/blog/wp-content/uploads/2024/07/14160655/latest-solar-panel-technology-2024.jpg",
      desc: "Positioning, messaging & visual identity for standout brands.",
    },
    {
      title: "E-commerce",
      icon: "https://images.unsplash.com/photo-1509391366360-2e959784a276?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Shopify & headless commerce that converts at scale."
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
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Image */}
        <div ref={bgRef} className="absolute inset-0 z-10 will-change-transform">
          <Image src="/solar-panels-roof-solar-cell.jpg" alt="Solar roof" fill priority className="object-cover" />
        </div>
        {/* Text behind image */}
        <div
          ref={textRef}
          className="relative -z-10 flex h-full flex-col items-center justify-center px-4 text-center text-black"
        >
          <h1 className="reveal text-5xl font-extrabold md:text-7xl">Building&nbsp;Digital&nbsp;Experiences</h1>
          <p className="reveal mt-4 max-w-2xl text-lg md:text-2xl">
            We craft performant websites, apps & campaigns that drive growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="reveal bg-gray-900 py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 md:px-8">
          {["120+|Projects", "50+|Clients", "5x|Avg. ROI", "100%|On-time"].map((item) => {
            const [v, l] = item.split("|")
            return (
              <div key={l} className="flex flex-col">
                <span className="text-4xl font-extrabold">{v}</span>
                <span className="mt-2 text-sm uppercase tracking-wide text-gray-400">{l}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* PowerPoint-Style Animated Section */}
      {/* <section ref={sectionRef} className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> */}
        {/* <div className="mx-auto max-w-7xl px-4 md:px-8"> */}
          {/* Animated Title with Typewriter Effect */}
          {/* <h2 ref={titleRef} className="mb-4 text-center text-4xl font-bold text-gray-800 md:text-5xl"> */}
            {/* Text will be animated via GSAP TextPlugin */}
          {/* </h2> */}

          {/* Animated Subtitle */}
          {/* <p ref={subtitleRef} className="mb-16 text-center text-xl text-gray-600">
            Experience presentation-quality animations on the web
          </p> */}

          {/* Animated Feature Cards */}
          {/* <div ref={cardsRef} className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pptFeatures.map((feature) => (
              <div
                key={feature.title}
                className="ppt-card group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
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
              <div key={stat.label} className="stat-container text-center">
                <div className="mb-2 text-3xl font-bold text-indigo-600 md:text-4xl">
                  <span className="stat-number">{stat.number}</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm uppercase tracking-wide text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* Interactive Demo Button */}
          {/* <div className="mt-16 text-center">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="relative z-10">See More Effects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <h2 className="reveal mb-12 text-center text-3xl font-bold md:text-4xl">Services</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image src={s.icon || "/placeholder.svg"} alt={s.title} width={48} height={48} />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-center text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="reveal mb-10 text-center text-3xl font-bold md:text-4xl">Recent Projects</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{ 640: { slidesPerView: 1.2 }, 1024: { slidesPerView: 2.2 } }}
            className="reveal"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title} className="group">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{p.title}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-900 py-12">
        <div className="relative mx-auto flex max-w-7xl overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-16">
            {partners.concat(partners).map((logo, i) => (
              <Image
                key={i}
                src={logo || "/placeholder.svg"}
                alt="Partner"
                width={120}
                height={60}
                className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="reveal mx-auto max-w-3xl px-4 py-24 text-center md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Have a project in mind?</h2>
        <p className="mt-4 text-lg text-gray-600">Let&apos;s turn your idea into a high‑impact digital experience.</p>
        <Link
          href="mailto:hello@jjjjjj.com"
          className="mt-8 inline-block rounded-full bg-red-600 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-red-700"
        >
          Get in touch
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-center text-sm text-gray-400">
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
