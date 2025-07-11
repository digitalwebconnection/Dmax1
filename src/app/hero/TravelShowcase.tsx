"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Literata } from "next/font/google"

const literata = Literata({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-literata",
})

const destinations = [
  {
    name: "Saves Electricity Bills",
    location: "Generate your own electricity and lower monthly power bills significantly.",
    img: "https://media.istockphoto.com/id/1276439034/photo/solar-panel-on-a-factory-roof.jpg?s=612x612&w=0&k=20&c=e6VF0y_f3-xcFq-jlo3doWv4aLX0YXjcm88_BowuEU8=",
  },
  {
    name: " Net Metering Benefit",
    location: "Sell the extra electricity to the grid and earn credits on your bill.",
    img: "https://media.istockphoto.com/id/1129106194/photo/solar-panels-photovoltaics-with-sun-tracking-systems-alternative-electricity-source-concept.jpg?s=2048x2048&w=is&k=20&c=XAwytClSvUz5N8EGPqnBFWWXtO2xmQqjD3oCYC8nGvk=",
  },
  {
    name: "No Battery Required",
    location: "Works without batteries, saving maintenance cost and space at home or business.",
    img: "https://media.istockphoto.com/id/1220588683/photo/aerial-view-of-many-photo-voltaic-solar-panels-mounted-of-industrial-building-roof.jpg?s=612x612&w=0&k=20&c=lK0CKRV8K21IxEENDcoziXZUlH-rdQ5OMVgrNONhEAw=",
  },
  {
    name: "24*7 Support",
    location: "Get support anytime to keep your solar system working well.",
    img: "https://media.istockphoto.com/id/2153608295/photo/solar-panels-are-installed-on-a-mountainside-next-to-the-road-renewable-energy-environment.jpg?s=612x612&w=0&k=20&c=kpn8DPKAdbW7Mdh7f5vjmkhkxTDTnLq3bNwBDmetTa0=",
  },
  // {
  //   name: "Customised Solar solution",
  //   location: "Solar panels that work well on your roof and fulfill power needs.",
  //   img: "https://media.istockphoto.com/id/1154681764/photo/solar-panel-alternative-electricity-source-concept-of-sustainable-resources-and-this-is-a-new.jpg?s=2048x2048&w=is&k=20&c=qu1GRq5wbZDpyfvgKCad_sLiWO0j4q4FZ1yYWXY2UFc=",
  // },
  // {
  //   name: "Taj Mahal",
  //   location: "India",
  //   img: "https://media.istockphoto.com/id/451580157/photo/sun_energy.jpg?s=612x612&w=0&k=20&c=Mw6VnOTldfA8w7zQH6Pc2Dm0Z2EOQ89rn_Uh9lHIbsU=",
  // },
//   {
//     name: "Colorado",
//     location: "Arizona",
//     img: "https://cdn.pixabay.com/photo/2016/11/29/03/13/desert-1867005_1280.jpg",
//   },
  // {
  //   name: "Santorin",
  //   location: "Greece",
  //   img: "https://media.istockphoto.com/id/1153975688/photo/solar-panel-alternative-electricity-source-concept-of-sustainable-resources-and-this-is-a-new.jpg?s=612x612&w=0&k=20&c=_0SjtWNlaLqO-HynrXGCe6Zz3UQmhJpRduEw7oanHzI=",
  // },
  // {
  //   name: "Petra",
  //   location: "Jordan",
  //   img: "https://media.istockphoto.com/id/1153975688/photo/solar-panel-alternative-electricity-source-concept-of-sustainable-resources-and-this-is-a-new.jpg?s=612x612&w=0&k=20&c=_0SjtWNlaLqO-HynrXGCe6Zz3UQmhJpRduEw7oanHzI=",
  // },
//   {
//     name: "Fundy",
//     location: "Canada",
//     img: "https://cdn.pixabay.com/photo/2020/11/22/07/11/river-5765785_1280.jpg",
//   },
//   {
//     name: "Fuji",
//     location: "Japan",
//     img: "https://cdn.pixabay.com/photo/2016/12/12/22/31/japan-1902834_1280.jpg",
//   },
//   {
//     name: "Ha Long Bay",
//     location: "Vietnam",
//     img: "https://cdn.pixabay.com/photo/2022/10/21/10/00/marvel-7536676_1280.jpg",
//   },
]

export default function TravelShowcase() {
  const [currentDestination, setCurrentDestination] = useState(destinations[0])
  const [nextDestination, setNextDestination] = useState(destinations[1])
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomDestination = useCallback(() => {
    const randomId = Math.floor(Math.random() * destinations.length)
    return destinations[randomId]
  }, [])

  const displayNextContent = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)

    setTimeout(() => {
      setCurrentDestination(nextDestination)

      setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => {
          setNextDestination(getRandomDestination())
        }, 3000)
      }, 3000)
    }, 3000)
  }, [isAnimating, nextDestination, getRandomDestination])

  // Auto-start animation on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      displayNextContent()
    }, 2000)
    return () => clearTimeout(timer)
  }, [displayNextContent])

  const cssVariables = {
    "--img-current": `url(${currentDestination.img})`,
    "--img-next": `url(${nextDestination.img})`,
    "--text-current-title": `"${currentDestination.name}"`,
    "--text-next-title": `"${nextDestination.name}"`,
    "--text-current-subtitle": `"${currentDestination.location}"`,
    "--text-next-subtitle": `"${nextDestination.location}"`,
  } as React.CSSProperties

  return (
    <div className={`travel-showcase ${literata.variable} ${isAnimating ? "body--animated" : ""}`} style={cssVariables}>
      {/* <header className="travel-header">
        <a href="https://bit.ly/m/JordanDey" target="_blank" rel="noopener noreferrer">
          <img
            className="logo"
            src="https://pbs.twimg.com/profile_images/1640983562877915137/uWv4xy5V_400x400.jpg"
            alt="Profile"
          />
        </a>
        <a href="https://bit.ly/m/JordanDey" target="_blank" rel="noopener noreferrer">
          Follow & Like for more ♡
        </a>
        <a
          href="https://dribbble.com/shots/8867020--Roto-transitions-Concept"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspired by Giulio Cuscito
        </a>
      </header> */}

      <main className="travel-main">
        <div className="background"></div>
        <div className="background background--2"></div>
        <div className="background background--3"></div>
        <div className="content">
          <h1></h1>
          <hr />
          <h2></h2>
        </div>
      </main>
{/* 
      <footer className="travel-footer">
        <div className="social-placeholder">
          <span>Share this</span>
        </div>
        <a href="https://bit.ly/m/JordanDey" target="_blank" rel="noopener noreferrer">
          Travel Showcase by Jordan Dey
        </a>
        <div className="randomize" onClick={displayNextContent}>
          <span>Randomize</span>
          <hr />
          <button type="button" aria-label="Randomize destination">
            ↻
          </button>
        </div>
      </footer> */}

      <style jsx>{`
        .travel-showcase {
          position: relative;
          width: auto;
          height: auto;
          overflow: hidden;
          --font-literata: ${literata.style.fontFamily};
        }

      

  
        .travel-main {
          position: relative;
          width: screen-width;
          height: 80vh;
          overflow: hidden;
        }

        .travel-showcase h1,
        .travel-showcase h2 {
          display: block;
          text-wrap: nowrap;
          margin: 0;
          overflow: hidden;
          clip-path: inset(0 0 0 0);
          color: white;
        }

        .travel-showcase h1::before,
        .travel-showcase h2::before {
          transition-delay: 0.5s;
          transform: translate(-50%, 0%);
        }

        .travel-showcase h1 {
          font-family: var(--font-literata);
          font-weight: 200;
          height: clamp(2rem, 8vw, 4rem);
          font-size: clamp(2rem, 8vw, 4rem);
          letter-spacing: clamp(0.5rem, 5vw, 10rem);
          margin-left: clamp(0.5rem, 5vw, 10rem);
        }

        .travel-showcase h1::before,
        .travel-showcase h1::after {
          content: var(--text-current-title);
          position: absolute;
          line-height: 1;
        }

        .travel-showcase h1::after {
          content: var(--text-next-title);
          transition-delay: 0.5s;
          transform: translate(-50%, 100%);
        }

        .travel-showcase h2 {
          height: clamp(0.9rem, 2vw, 1.1rem);
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          letter-spacing: clamp(0.5rem, 3vw, 5rem);
          margin-left: clamp(0.5rem, 3vw, 5rem);
          font-weight: 400;
        }

        .travel-showcase h2::before,
        .travel-showcase h2::after {
          content: var(--text-current-subtitle);
          position: absolute;
          line-height: 1;
        }

        .travel-showcase h2::after {
          content: var(--text-next-subtitle);
          transition-delay: 0.5s;
          transform: translate(-50%, -100%);
        }

        .travel-showcase hr {
          opacity: 0.3;
          border: none;
          height: 2px;
          background: #fff;
        }

        .logo {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .background {
          position: absolute;
          top: 50%;
          left: 50%;
          width: max(180vw, 180vh);
          aspect-ratio: 1 / 1;
          transform: translate(-50%, -50%);
          filter: brightness(1.2);
        }

        .background::before,
        .background::after {
          content: "";
          position: absolute;
          inset: 0;
          background-size: max(110vw, 110vh) max(110vw, 110vh);
          background-position: 50%;
          transition: all 1.5s;
          transition-timing-function: ease-in-out;
        }

        .background::before {
          background-image: var(--img-current);
        }

        .background::after {
          background-image: var(--img-next);
          opacity: 0;
        }

        .background--2::after {
          transition-delay: 0.2s;
        }

        .background--3::after {
          transition-delay: 0.4s;
        }

        .background--2::before,
        .background--2::after {
          clip-path: circle(23%);
          filter: brightness(0.8);
        }

        .background--3::before,
        .background--3::after {
          clip-path: circle(13%);
        }

        .body--animated .background::before,
        .body--animated .background::after {
          animation: rotate ease-in-out 1s forwards;
          animation-delay: 0.4s;
          transition-delay: 0.4s;
        }

        .body--animated .background--2::before,
        .body--animated .background--2::after {
          animation-delay: 0.2s;
          transition-delay: 0.2s;
        }

        .body--animated .background--3::before,
        .body--animated .background--3::after {
          animation-delay: 0s;
          transition-delay: 0s;
        }

        .body--animated .background::after {
          opacity: 1;
        }

        .body--animated h1::before,
        .body--animated h2::before,
        .body--animated h1::after,
        .body--animated h2::after {
          transition-delay: 0.5s;
          transition-duration: 0.5s;
        }

        .body--animated h1::before {
          transform: translate(-50%, -100%);
        }

        .body--animated h1::after {
          transform: translate(-50%, 0%);
        }

        .body--animated h2::before {
          transform: translate(-50%, 100%);
        }

        .body--animated h2::after {
          transform: translate(-50%, 0%);
        }

        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95%;
          text-align: center;
          transform: translate(-50%, clamp(-2rem, -4vw, -1rem));
        }

        .content hr {
          max-width: 400px;
          margin: clamp(1rem, 5vw, 2.5rem) auto;
        }

        .randomize {
          display: flex;
          justify-content: end;
          align-items: center;
          flex-wrap: wrap;
          cursor: pointer;
        }

        .randomize hr {
          display: inline-block;
          width: 25px;
          margin: 0 1vw;
        }

        .randomize button {
          background: #cfd865;
          width: clamp(2rem, 4vw, 3rem);
          aspect-ratio: 1 / 1;
          border: none;
          border-radius: 50%;
          font-size: clamp(1rem, 2vw, 1.5rem);
          cursor: pointer;
          color: #000;
        }

        .randomize button:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }

        .social-placeholder {
          text-align: left;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0) translateZ(0);
            background-size: max(110vw, 110vh) max(110vw, 110vh);
          }
          50% {
            background-size: max(160vw, 160vh) max(160vw, 160vh);
          }
          100% {
            transform: rotate(360deg) translateZ(0);
            background-size: max(110vw, 110vh) max(110vw, 110vh);
          }
        }

        @media (max-width: 768px) {
          .travel-header > *,
          .travel-footer > * {
            padding: 1rem;
          }

          .travel-header > *:nth-child(3),
          .travel-footer > *:nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
