/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Literata } from "next/font/google"
import "./globals.css"

const literata = Literata({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-literata",
})

const destinations = [
  {
    name: "Sahara",
    location: "Marrakech",
    img: "https://cdn.pixabay.com/photo/2021/11/26/17/26/dubai-desert-safari-6826298_1280.jpg",
  },
  {
    name: "Maldives",
    location: "Indian Ocean",
    img: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg",
  },
  {
    name: "Dolomites",
    location: "Italy",
    img: "https://cdn.pixabay.com/photo/2020/03/29/09/24/pale-di-san-martino-4979964_1280.jpg",
  },
  {
    name: "Highland",
    location: "Scotland",
    img: "https://cdn.pixabay.com/photo/2014/11/21/03/26/neist-point-540119_1280.jpg",
  },
  {
    name: "Kleifarvatn",
    location: "Iceland",
    img: "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg",
  },
  {
    name: "Taj Mahal",
    location: "India",
    img: "https://cdn.pixabay.com/photo/2023/08/19/13/26/ai-generated-8200484_1280.jpg",
  },
  {
    name: "Colorado",
    location: "Arizona",
    img: "https://cdn.pixabay.com/photo/2016/11/29/03/13/desert-1867005_1280.jpg",
  },
  {
    name: "Santorin",
    location: "Greece",
    img: "https://cdn.pixabay.com/photo/2017/01/30/07/54/church-2020258_1280.jpg",
  },
  {
    name: "Petra",
    location: "Jordan",
    img: "https://cdn.pixabay.com/photo/2019/07/20/19/12/petra-4351361_1280.jpg",
  },
  {
    name: "Fundy",
    location: "Canada",
    img: "https://cdn.pixabay.com/photo/2020/11/22/07/11/river-5765785_1280.jpg",
  },
  {
    name: "Fuji",
    location: "Japan",
    img: "https://cdn.pixabay.com/photo/2016/12/12/22/31/japan-1902834_1280.jpg",
  },
  {
    name: "Ha Long Bay",
    location: "Vietnam",
    img: "https://cdn.pixabay.com/photo/2022/10/21/10/00/marvel-7536676_1280.jpg",
  },
]

export default function TravelShowcase() {
  const [currentDestination, setCurrentDestination] = useState(destinations[0])
  const [nextDestination, setNextDestination] = useState(destinations[1])
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomDestination = () => {
    const randomId = Math.floor(Math.random() * destinations.length)
    return destinations[randomId]
  }

  const displayNextContent = () => {
    if (isAnimating) return

    setIsAnimating(true)

    setTimeout(() => {
      setCurrentDestination(nextDestination)

      setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => {
          setNextDestination(getRandomDestination())
        }, 1000)
      }, 1000)
    }, 1000)
  }

  // Auto-start animation on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      displayNextContent()
    }, 1000)
    return () => clearTimeout(timer)
  }, )

  const cssVariables = {
    "--img-current": `url(${currentDestination.img})`,
    "--img-next": `url(${nextDestination.img})`,
    "--text-current-title": `"${currentDestination.name}"`,
    "--text-next-title": `"${nextDestination.name}"`,
    "--text-current-subtitle": `"${currentDestination.location}"`,
    "--text-next-subtitle": `"${nextDestination.location}"`,
  } as React.CSSProperties

  return (
    <div className={`${literata.variable} ${isAnimating ? "body--animated" : ""}`} style={cssVariables}>
      <header className="header">
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
      </header>

      <main className="main">
        <div className="background"></div>
        <div className="background background--2"></div>
        <div className="background background--3"></div>
        <div className="content">
          <h1></h1>
          <hr />
          <h2></h2>
        </div>
      </main>

      <footer className="footer">
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
      </footer>
    </div>
  )
}
