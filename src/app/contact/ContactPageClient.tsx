"use client"

import type React from "react"
import { useEffect, useState, type FormEvent } from "react"
import NavBar from "../../../components/NavBar"
import Footer from "../../../components/Footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/** Reveal-on-scroll hook */
function useReveal() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      })
    })
  }, [])
}

export default function ContactPage() {
  useReveal()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // Handle form submission here
    console.log("Form submitted:", formData)
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 1000))
    setStatus("sent")
    alert("Thank you for your message! We will get back to you soon.")
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setStatus("idle")
    }, 2000)
  }

  return (
    <>
      <NavBar />

      {/* HERO */}
      <header className="relative h-64 overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561154464-1f54c0e1d6f1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact DMAX Solar</h1>
          <p className="mt-2 text-lg text-gray-600">
            Ready to start your solar journey? Get in touch with our experts today
          </p>
        </div>
      </header>

      {/* INFO CARDS */}
      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <MapPin size={32} className="text-yellow-600" />,
            label: "Office Address",
            detail: "123 Solar Street, Pune, India",
          },
          {
            icon: <Phone size={32} className="text-yellow-600" />,
            label: "Phone",
            detail: "+91 22 1234 5678",
          },
          {
            icon: <Mail size={32} className="text-yellow-600" />,
            label: "Email",
            detail: "contact@dmaxsolar.com",
          },
          {
            icon: <Clock size={32} className="text-yellow-600" />,
            label: "Business Hours",
            detail: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
          },
        ].map(({ icon, label, detail }) => (
          <div
            key={label}
            className="reveal flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white border border-yellow-100"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-50">{icon}</div>
            <h3 className="font-semibold text-lg text-gray-900">{label}</h3>
            <p className="mt-1 text-gray-600 text-sm">{detail}</p>
          </div>
        ))}
      </section>

      {/* CONTACT FORM AND INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="reveal text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="reveal grid gap-4 sm:grid-cols-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-yellow-200 px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-yellow-200 px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="reveal grid gap-4 sm:grid-cols-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-yellow-200 px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-yellow-200 px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="reveal">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your solar energy needs..."
                    rows={5}
                    className="w-full rounded-lg border border-yellow-200 px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="reveal text-center">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-yellow-500 px-8 py-3 text-white font-semibold shadow hover:bg-yellow-600 transition disabled:opacity-50"
                  >
                    {status === "sent" ? "Message Sent!" : status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="reveal">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our team of solar experts is ready to help you make the switch to clean, renewable energy. Contact us
                  today to schedule your free consultation.
                </p>
              </div>

              <div className="reveal space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 22 1234 5678</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@dmaxsolar.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      123 Solar Street
                      <br />
                      Pune, Maharashtra 411001
                    </p>
                    <p className="text-sm text-gray-500">Visit our showroom</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="reveal bg-yellow-100 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Service</h3>
                <p className="text-gray-600 mb-2">For urgent solar system issues, call our 24/7 emergency line:</p>
                <p className="font-semibold text-yellow-600">+91 99999 SOLAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="reveal text-3xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
            <p className="reveal text-xl text-gray-600">See our solar solutions in person and speak with our experts</p>
          </div>

          <div className="reveal bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive Map Placeholder</p>
              <p className="text-sm text-gray-400">123 Solar Street, Pune, Maharashtra 411001</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
