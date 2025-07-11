"use client"
import { useEffect, useState } from "react"
import type React from "react"
import NavBar from "../../../components/NavBar"
import Footer from "../../../components/Footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, ChevronDown, ChevronUp } from "lucide-react"

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

export default function ContactPage() {
  useReveal()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      location: "",
      message: "",
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our solar experts",
      contact: "+91 98765 43210",
      action: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      contact: "info@dmaxsolar.com",
      action: "mailto:info@dmaxsolar.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support available",
      contact: "Chat Now",
      action: "#",
    },
  ]

  const offices = [
    {
      city: "Mumbai",
      address: "123 Solar Street, Andheri East, Mumbai - 400069",
      phone: "+91 98765 43210",
      email: "mumbai@dmaxsolar.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      city: "Pune",
      address: "456 Green Avenue, Baner, Pune - 411045",
      phone: "+91 98765 43211",
      email: "pune@dmaxsolar.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      city: "Bangalore",
      address: "789 Tech Park Road, Whitefield, Bangalore - 560066",
      phone: "+91 98765 43212",
      email: "bangalore@dmaxsolar.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
  ]

  const faqs = [
    {
      question: "How long does a solar installation take?",
      answer:
        "Typically, residential installations take 1-3 days, while commercial projects can take 1-4 weeks depending on the size and complexity. We provide a detailed timeline during the consultation.",
    },
    {
      question: "What is the warranty on solar panels?",
      answer:
        "We offer 25-year performance warranty on solar panels and 10-year product warranty. Inverters come with 5-10 year warranty depending on the brand and model.",
    },
    {
      question: "How much can I save on electricity bills?",
      answer:
        "Savings depend on your current consumption, system size, and local electricity rates. Most customers see 50-90% reduction in their electricity bills. We provide detailed savings projections during consultation.",
    },
    {
      question: "Do you provide financing options?",
      answer:
        "Yes, we offer various financing options including solar loans, EMI plans, and lease options. We work with leading banks and financial institutions to provide competitive rates.",
    },
    {
      question: "What maintenance is required for solar panels?",
      answer:
        "Solar panels require minimal maintenance. Regular cleaning and annual inspections are recommended. We offer comprehensive maintenance packages to ensure optimal performance.",
    },
    {
      question: "Can I install solar panels on any type of roof?",
      answer:
        "Solar panels can be installed on most roof types including concrete, tile, and metal roofs. Our engineers assess roof suitability during the site survey and recommend the best mounting solution.",
    },
  ]

  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to start your solar journey? Our experts are here to help you every step of the way. Get a free
              consultation and personalized solar solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="reveal text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <method.icon size={48} className="mx-auto mb-4 text-blue-900" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section id="contact-form" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CONTACT FORM */}
            <div className="reveal">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our solar experts will get back to you within 24 hours with a personalized
                solution.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for your interest in DMAX Solar. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="utility">Utility Scale</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your city/location"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your solar requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="reveal">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions? We&apos;re here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@dmaxsolar.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Head Office</h3>
                    <p className="text-gray-600">
                      123 Solar Street, Andheri East
                      <br />
                      Mumbai - 400069, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* QUICK STATS */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-blue-900 mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">1200+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">400+</div>
                    <div className="text-sm text-gray-600">MWp Installed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">24hrs</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">25yr</div>
                    <div className="text-sm text-gray-600">Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-blue-900 mb-4">Our Office Locations</h2>
            <p className="reveal text-xl text-gray-600">Visit us at any of our offices across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="reveal bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-blue-900 mt-1" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-blue-900" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-blue-900" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={16} className="text-blue-900" />
                    <p className="text-gray-600 text-sm">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="reveal text-xl text-gray-600">Get answers to common questions about solar installations</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="reveal bg-white rounded-xl shadow-sm">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <h3 className="font-semibold text-blue-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} className="text-blue-900" />
                  ) : (
                    <ChevronDown size={20} className="text-blue-900" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="reveal text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="/projects"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
