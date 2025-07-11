// components/ProjectScroller.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Swiper v9+ */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode }  from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA – extend with anything you like                              */
/* ------------------------------------------------------------------ */
type Project = {
  id: string;
  image: string;
  category: string;
  title: string;
  author: string;
};

const projects: Project[] = [
  {
    id: "p1",
    image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    category: "Recipe",
    title: "Crisp Spanish tortilla Matzo brei",
    author: "Celeste Mills",
  },
  {
    id: "p2",
    image: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    category: "Travel",
    title: "Discover the sea",
    author: "John Doe",
  },
  {
    id: "p3",
    image:
      "/images/projects/astro.jpg", // local image example
    category: "Streaming",
    title: "Astrology Live-Stream Platform",
    author: "Vahlay Astro",
  },
    {
    id: "p4",
    image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    category: "Recipe",
    title: "Crisp Spanish tortilla Matzo brei",
    author: "Celeste Mills",
  },
  {
    id: "p5",
    image: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    category: "Travel",
    title: "Discover the sea",
    author: "John Doe",
  },
  {
    id: "p6",
    image:
      "/images/projects/astro.jpg", // local image example
    category: "Streaming",
    title: "Astrology Live-Stream Platform",
    author: "Vahlay Astro",
  },
  // …add more
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export default function ProjectScroller() {
  /* one-time reveal animation as each card first slides into view */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 10,
          rotateY: 10,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "left 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">Latest Projects</h2>

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={24}
        loop
        speed={8000}
        freeMode={{ enabled: true, momentum: false }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="px-6 lg:px-16"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id} className="!w-[min(75vw,340px)]">
            {/* ---- CARD ---- */}
            <article className="project-card group relative h-full overflow-hidden rounded-2xl bg-white shadow-[0_13px_10px_-7px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_30px_18px_-8px_rgba(0,0,0,0.1)]">
              {/* image */}
              <div className="relative h-60 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 75vw, 340px"
                  priority
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-110"
                />
                {/* dark overlay on hover */}
                <div className="pointer-events-none absolute inset-0  opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
              </div>

              {/* ↖ read-time badge */}
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              
              </div>

              {/* info block */}
              <div className="space-y-2 bg-white px-6 py-6 transition-colors duration-300 group-hover:bg-transparent">
                <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                  {p.category}
                </span>
                <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                <span className="text-xs">
                  by{" "}
                  <span className="font-semibold text-amber-700 hover:underline">
                    {p.author}
                  </span>
                </span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* optional: hide native scrollbar on the Swiper track */}
      <style jsx global>{`
        .swiper {
          --swiper-scrollbar-display: none;
        }
      `}</style>
    </section>
  );
}
