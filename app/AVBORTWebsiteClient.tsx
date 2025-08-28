"use client"

import { useState, useEffect } from "react"

export default function AVBORTWebsiteClient() {
  const [activePage, setActivePage] = useState("home")

  useEffect(() => {
    // ScrollReveal-like animation using Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activePage])

  const showPage = (pageId: string) => {
    setActivePage(pageId)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-gray-800">
        <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => showPage("home")}
            className="text-xl font-semibold text-white tracking-widest uppercase"
          >
            AVBORT
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "solution", "team"].map((page) => (
              <button
                key={page}
                onClick={() => showPage(page)}
                className={`capitalize transition-colors duration-300 ${
                  activePage === page ? "text-white font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => showPage("contact")}
            className="hidden md:block bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Join Pilot
          </button>
        </nav>
      </header>

      <main className="pt-16">
        {/* Home Page */}
        {activePage === "home" && (
          <section className="animate-fade-in">
            <div className="container mx-auto px-6 py-20 md:py-32 text-center">
              <p className="text-lg text-gray-400 mb-4 reveal">AVBORT Capture System</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 reveal">
                Never Lose a Shot Again.
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 reveal">
                Real-time, automated backup system for professional photographers. From capture to cloud in seconds.
              </p>

              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 max-w-lg mx-auto mb-12 reveal">
                <p className="text-sm text-gray-300">
                  <span className="text-white font-semibold">Early Access Available:</span> Join our pilot program and
                  get 20% off your first system
                </p>
              </div>

              <div className="w-full max-w-6xl mx-auto h-[300px] md:h-[600px] rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center reveal">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500">Hero Product Demo Video</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
                <div className="text-center reveal">
                  <h3 className="text-xl font-semibold mb-2">Instant Backup</h3>
                  <p className="text-gray-400">Every shot backed up in real-time as you shoot</p>
                </div>
                <div className="text-center reveal">
                  <h3 className="text-xl font-semibold mb-2">Remote Access</h3>
                  <p className="text-gray-400">Your team can edit photos while you're still shooting</p>
                </div>
                <div className="text-center reveal">
                  <h3 className="text-xl font-semibold mb-2">Zero Failure</h3>
                  <p className="text-gray-400">Triple redundancy eliminates single points of failure</p>
                </div>
              </div>

              <div className="mt-16 reveal">
                <button
                  onClick={() => showPage("contact")}
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300 mr-4"
                >
                  Join Pilot Program
                </button>
                <button
                  onClick={() => showPage("solution")}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </section>
        )}

        {/* About Page */}
        {activePage === "about" && (
          <section className="animate-fade-in">
            <div className="container mx-auto px-6 py-20 md:py-40">
              <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 reveal">
                  The Problem Every Photographer Knows
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed reveal">
                  Every photographer has a story: a corrupted memory card, a failed hard drive, or equipment lost in an
                  accident. You spend days in the field accumulating terabytes of irreplaceable work on fragile storage
                  devices. The real work of backing up and editing only begins hours later, creating massive bottlenecks
                  and unacceptable risk.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="w-24 h-24 mx-auto md:mx-0 bg-gray-700 rounded-full flex items-center justify-center reveal">
                      <span className="text-2xl font-bold">AK</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-center md:text-left">
                    <blockquote className="text-lg text-gray-300 mb-4 reveal">
                      "This will be the best product for me. As I shoot photos in the wild, my editor in the studio can
                      edit those photos and publish them. Currently, I spend an extensive amount of time in the wild and
                      only when I return to my studio in Delhi can I offload my data and make multiple backups."
                    </blockquote>
                    <cite className="text-gray-400 reveal">
                      <strong>Aarzoo Khurana</strong>
                      <br />
                      Wildlife Photographer
                    </cite>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
                <div className="text-center reveal">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Wedding Photographers</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    High-pressure, unrepeatable moments where data loss is not an option
                  </p>
                  <p className="text-xs text-gray-500">"Never worry about losing once-in-a-lifetime moments again"</p>
                </div>
                <div className="text-center reveal">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2h1.064M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Wildlife Photographers</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Working in extreme, disconnected environments where gear failure is constant threat
                  </p>
                  <p className="text-xs text-gray-500">
                    "Shoot fearlessly in any environment, your work is always safe"
                  </p>
                </div>
                <div className="text-center reveal">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Commercial Studios</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Profitability tied to efficient, streamlined, and secure workflows
                  </p>
                  <p className="text-xs text-gray-500">"Maximize productivity with instant team collaboration"</p>
                </div>
                <div className="text-center reveal">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Photojournalists</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Need to protect their story and get it to editors securely and fast
                  </p>
                  <p className="text-xs text-gray-500">"Break news faster with instant story transmission"</p>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto reveal">
                <h3 className="text-2xl font-bold text-center mb-8">Why Now?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                    <p className="text-gray-400">Professional photographers in India alone</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">₹56,000 Cr</div>
                    <p className="text-gray-400">Indian photography market size</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">0</div>
                    <p className="text-gray-400">Integrated solutions like AVBORT exist today</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Solution Page */}
        {activePage === "solution" && (
          <section className="animate-fade-in">
            <div className="container mx-auto px-6 py-20 md:py-32">
              <div className="text-center max-w-3xl mx-auto mb-24">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 reveal">
                  From Lens to Cloud. Instantly.
                </h2>
                <p className="text-lg text-gray-400 reveal">
                  Our two-part system integrates seamlessly with your existing gear to create an automated, redundant
                  backup workflow from the moment you shoot.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                <div className="w-full h-96 md:h-[600px] rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center reveal">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Capture Module Render</p>
                  </div>
                </div>
                <div className="text-left reveal">
                  <p className="font-semibold text-gray-400 text-sm uppercase tracking-wide">01</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Capture Module</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    The lightweight module mounts to your camera's hot shoe and connects via USB-C. It captures a
                    full-resolution copy of every image, instantly creating your first backup and eliminating the memory
                    card as a single point of failure.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Hot shoe mount compatible with all major cameras
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      USB-C connection for high-speed data transfer
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Full-resolution image capture in real-time
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Lightweight and weather-resistant design
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                <div className="text-left reveal md:order-2">
                  <p className="font-semibold text-gray-400 text-sm uppercase tracking-wide">02</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Network Relay Station</h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    The portable relay is the core of the system. It receives images from the Capture Module and
                    automatically creates two more backups: one to an internal SSD and another to the cloud, making your
                    work instantly accessible to your team, anywhere in the world.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Triple redundancy: SSD + HDD + Cloud storage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Wi-Fi and 5G connectivity options
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Hot-swappable SSD for quick field review
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Rugged, portable design for field use
                    </li>
                  </ul>
                </div>
                <div className="w-full h-96 md:h-[600px] rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center reveal md:order-1">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Network Relay Render</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 reveal">
                <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
                <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Workflow Diagram</p>
                    <p className="text-sm text-gray-600 mt-2">Camera → Capture Module → Network Relay → Cloud</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center reveal">
                  <div className="bg-gray-800 text-xs px-3 py-1 rounded-full inline-block mb-4">PILOT SPECIAL</div>
                  <h3 className="text-xl font-bold mb-4">Wi-Fi Model</h3>
                  <div className="mb-2">
                    <span className="text-2xl text-gray-500 line-through">₹30,000</span>
                    <span className="text-3xl font-bold ml-2">₹24,000</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">20% off for pilot participants</p>
                  <p className="text-gray-400 mb-6">Perfect for studio and controlled environments</p>
                  <ul className="text-left space-y-2 text-gray-400 mb-6">
                    <li>• Capture Module + Network Relay</li>
                    <li>• Wi-Fi connectivity</li>
                    <li>• Cloud backup integration</li>
                    <li>• 1-year warranty + pilot support</li>
                  </ul>
                  <button
                    onClick={() => showPage("contact")}
                    className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
                  >
                    Reserve Your Spot
                  </button>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center reveal">
                  <div className="bg-gray-800 text-xs px-3 py-1 rounded-full inline-block mb-4">PILOT SPECIAL</div>
                  <h3 className="text-xl font-bold mb-4">5G Model</h3>
                  <div className="mb-2">
                    <span className="text-2xl text-gray-500 line-through">₹60,000</span>
                    <span className="text-3xl font-bold ml-2">₹48,000</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">20% off for pilot participants</p>
                  <p className="text-gray-400 mb-6">For remote locations and field photography</p>
                  <ul className="text-left space-y-2 text-gray-400 mb-6">
                    <li>• Capture Module + Network Relay</li>
                    <li>• 5G + Wi-Fi connectivity</li>
                    <li>• Extended battery life</li>
                    <li>• Rugged field-ready design</li>
                  </ul>
                  <button
                    onClick={() => showPage("contact")}
                    className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
                  >
                    Reserve Your Spot
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Team Page */}
        {activePage === "team" && (
          <section className="animate-fade-in">
            <div className="container mx-auto px-6 py-20 md:py-32 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 reveal">The Team</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16 reveal">
                A well-rounded team of four with combined expertise in hardware, software, and business, united by a
                passion for solving complex problems with elegant solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center reveal">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-400">AD</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Aditya Ravindra Dikonda</h3>
                  <p className="text-gray-400 mb-2">Founder & CEO</p>
                  <p className="text-sm text-gray-500">Hardware, software, mechatronics, and robotics expertise</p>
                </div>
                <div className="text-center reveal">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-400">KY</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Krishna Yadav</h3>
                  <p className="text-gray-400 mb-2">Co-founder & COO</p>
                  <p className="text-sm text-gray-500">
                    Blockchain, crypto, and creative perspective from arts background
                  </p>
                </div>
                <div className="text-center reveal">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-400">AT</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Aniket Teredesai</h3>
                  <p className="text-gray-400 mb-2">CTO</p>
                  <p className="text-sm text-gray-500">
                    Low-level system design, kernel development, blockchain architecture
                  </p>
                </div>
                <div className="text-center reveal">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-400">BM</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Bobby Mehta</h3>
                  <p className="text-gray-400 mb-2">Hardware Head</p>
                  <p className="text-sm text-gray-500">
                    VLSI, electronics, hardware design, and communication protocols
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Page */}
        {activePage === "contact" && (
          <section className="animate-fade-in">
            <div className="container mx-auto px-6 py-20 md:py-32">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 reveal">
                    Shape the Future of Photography
                  </h2>
                  <p className="text-xl text-gray-400 reveal">
                    Join our exclusive pilot program and help us build the perfect solution for professional
                    photographers
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 reveal">
                    <h3 className="text-2xl font-bold mb-6">Join Our Pilot Program</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-black text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Early Access</h4>
                          <p className="text-gray-400 text-sm">Be among the first 50 photographers to test AVBORT</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-black text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">20% Discount</h4>
                          <p className="text-gray-400 text-sm">Exclusive pricing for pilot participants</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-black text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Direct Input</h4>
                          <p className="text-gray-400 text-sm">Your feedback shapes the final product</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-black text-xs font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Priority Support</h4>
                          <p className="text-gray-400 text-sm">Direct line to our engineering team</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="mailto:business@avbort.com?subject=Pilot Program Application&body=Hi AVBORT Team,%0D%0A%0D%0AI'm interested in joining your pilot program. Here are my details:%0D%0A%0D%0AName:%0D%0APhotography Type (Wedding/Wildlife/Commercial/Journalism):%0D%0AYears of Experience:%0D%0ACurrent Backup Workflow:%0D%0ABiggest Pain Point:%0D%0APreferred Model (Wi-Fi/5G):%0D%0A%0D%0AWhat I'd like to see in the product:%0D%0A%0D%0AThanks!"
                      className="w-full bg-white text-black py-4 rounded-full font-semibold text-center block hover:bg-gray-200 transition-colors duration-300"
                    >
                      Apply for Pilot Program
                    </a>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 reveal">
                      <h3 className="text-xl font-bold mb-4">Help Us Build Better</h3>
                      <p className="text-gray-400 mb-4">
                        We're building AVBORT for photographers, by photographers. Your insights are invaluable.
                      </p>
                      <div className="space-y-3 text-sm">
                        <p className="text-gray-300">
                          <strong>What features matter most to you?</strong>
                        </p>
                        <p className="text-gray-300">
                          <strong>What's your biggest workflow pain point?</strong>
                        </p>
                        <p className="text-gray-300">
                          <strong>How do you currently backup your work?</strong>
                        </p>
                      </div>
                      <a
                        href="mailto:business@avbort.com?subject=Product Feedback&body=Hi AVBORT Team,%0D%0A%0D%0AHere's my feedback on what I'd like to see in your product:%0D%0A%0D%0AMost important features:%0D%0A%0D%0ABiggest workflow pain points:%0D%0A%0D%0ACurrent backup method:%0D%0A%0D%0AWhat would make me switch to AVBORT:%0D%0A%0D%0AThanks!"
                        className="inline-block mt-4 text-white hover:text-gray-300 transition-colors duration-300 underline"
                      >
                        Share Your Thoughts →
                      </a>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 reveal">
                      <h3 className="text-xl font-bold mb-4">Early Bird Pricing</h3>
                      <p className="text-gray-400 mb-4">
                        Secure your AVBORT system at pilot pricing. Limited to first 50 customers.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Wi-Fi Model:</span>
                          <span>
                            <span className="line-through text-gray-500">₹30,000</span> <strong>₹24,000</strong>
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>5G Model:</span>
                          <span>
                            <span className="line-through text-gray-500">₹60,000</span> <strong>₹48,000</strong>
                          </span>
                        </div>
                      </div>
                      <a
                        href="mailto:business@avbort.com?subject=Early Bird Reservation&body=Hi AVBORT Team,%0D%0A%0D%0AI'd like to reserve my AVBORT system at early bird pricing:%0D%0A%0D%0APreferred Model (Wi-Fi ₹24,000 / 5G ₹48,000):%0D%0A%0D%0AName:%0D%0APhone:%0D%0APhotography Type:%0D%0A%0D%0APlease let me know the next steps.%0D%0A%0D%0AThanks!"
                        className="inline-block mt-4 text-white hover:text-gray-300 transition-colors duration-300 underline"
                      >
                        Reserve Now →
                      </a>
                    </div>

                    <div className="text-center reveal">
                      <p className="text-gray-400 mb-4">Questions? Let's talk.</p>
                      <a
                        href="mailto:business@avbort.com"
                        className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-300"
                      >
                        business@avbort.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AVBORT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
