'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, Wrench, Heart,  Zap, Shield, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* simple fade / slide-in helper */
function useReveal() {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });
  }, []);
}

export default function AboutPageClient() {
  useReveal();

  /* team cards stagger */
  useEffect(() => {
    gsap.from('.team-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: { trigger: '#team', start: 'top 85%' },
    });
  }, []);

  return (
    <>
      <NavBar />
      
      {/* HERO */}
      <header className="relative h-[65vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573497019563-5ec90aec6e4f?auto=format&fit=crop&w=1600&q=80"
          alt="Engineers walking through a solar farm"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl">About DMAX Solar</h1>
          <p className="mt-4 max-w-xl text-lg sm:text-xl text-white/90">
            Leading India&apos;s clean energy revolution since 2013
          </p>
        </div>
      </header>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Who we are</h2>
          <p className="text-gray-600 leading-relaxed">
            We&apos;re a multidisciplinary team of engineers, designers and data
            scientists united by one ambition: <strong>make clean energy the default choice</strong>.
            From rooftop systems for SMEs to utility-scale plants, we deliver assets that
            outperform on reliability and ROI.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Headquartered in Pune with project hubs across nine states, DMAX Solar has commissioned
            <span className="font-semibold text-yellow-600"> 400 MWp</span> since 2013, saving our clients
            <span className="font-semibold text-yellow-600"> ₹1.9 B+</span> in energy costs.
          </p>
        </div>
        <div className="reveal relative h-72 lg:h-full rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1609153703158-b68a6aa35533?auto=format&fit=crop&w=1200&q=80"
            alt="Field engineers inspecting panels"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-yellow-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal text-center text-3xl font-bold mb-12 text-gray-900">Our Journey</h2>
          <div className="flex gap-6 overflow-x-auto snap-x pb-4">
            {[
              ['2013', 'Company founded, first 50 kWp rooftop in Satara'],
              ['2016', 'Crossed 50 MWp cumulative installs'],
              ['2019', 'Launched O&M & analytics division'],
              ['2023', 'Commissioned first 100 MWp solar farm (Gujarat)'],
            ].map(([yr, note]) => (
              <article
                key={yr}
                className="reveal snap-start shrink-0 basis-[260px] bg-white p-6 rounded-2xl shadow-md border border-yellow-100"
              >
                <p className="text-4xl font-bold text-yellow-600">{yr}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="reveal text-center text-3xl font-bold mb-12 text-gray-900">Our Values</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Customer First', icon: Users, desc: 'We prioritize our customers\' needs and satisfaction above all else.' },
            { title: 'Excellence', icon: Award, desc: 'We strive for excellence in every project, from design to installation.' },
            { title: 'Innovation', icon: Wrench, desc: 'We embrace new technologies to provide the best solar solutions.' },
            { title: 'Sustainability', icon: Heart, desc: 'We\'re committed to creating a cleaner, more sustainable future.' },
          ].map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="reveal group relative p-8 border border-yellow-200 rounded-2xl hover:shadow-lg transition bg-white"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
              <span className="absolute inset-0 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-5 transition bg-yellow-500 rounded-2xl" />
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-yellow-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="reveal text-center text-3xl font-bold mb-12 text-gray-900">Leadership Team</h2>
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              ['Anaya Kulkarni', 'CEO & Co-Founder', '/placeholder.svg?height=220&width=220'],
              ['Ravi Deshmukh', 'CTO & Co-Founder', '/placeholder.svg?height=220&width=220'],
              ['Meera Shah', 'Head – EPC', '/placeholder.svg?height=220&width=220'],
              ['Aditya Rao', 'Head – O&M', '/placeholder.svg?height=220&width=220'],
            ].map(([name, role, img]) => (
              <figure key={name} className="team-card text-center bg-white p-6 rounded-2xl shadow-sm">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={name}
                  width={220}
                  height={220}
                  className="mx-auto mb-4 h-44 w-44 rounded-full object-cover shadow border-4 border-yellow-200"
                />
                <figcaption>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-yellow-600">{role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DMAX Solar?</h2>
            <p className="reveal text-xl text-gray-600">We provide comprehensive solar solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
              <p className="text-gray-600">
                Our premium solar panels deliver maximum energy output with industry-leading efficiency ratings.
              </p>
            </div>

            <div className="reveal text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25-Year Warranty</h3>
              <p className="text-gray-600">
                Comprehensive warranty coverage and professional installation backed by years of experience.
              </p>
            </div>

            <div className="reveal text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint while saving money on electricity bills with clean solar energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 py-20 text-center text-white">
        <h2 className="reveal text-3xl font-bold mb-4">
          Work with a team that lives its values
        </h2>
        <p className="reveal mx-auto max-w-xl text-lg mb-8">
          Let&apos;s co-create a solar roadmap that delivers returns right from day one.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-white px-12 py-4 text-lg font-semibold text-yellow-700 shadow hover:scale-105 transition"
        >
          Start the conversation
        </a>
      </section>

      <Footer />
    </>
  );
}
