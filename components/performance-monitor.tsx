"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor performance
    if (typeof window !== "undefined" && "performance" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            console.log("Page load time:", entry.duration)
          }
        }
      })

      observer.observe({ entryTypes: ["navigation"] })

      return () => observer.disconnect()
    }
  }, [])

  return null
}
