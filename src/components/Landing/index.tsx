"use client"

import Hero from "./Hero"
import Features from "./Features"
import Gallery from "./Gallery"
import Testimonials from "./Testimonials"
import CTA from "./CTA"
import TradeTerms from "./TradeTerms"
import CrueltyFree from "./CrueltyFree"
import Sustainability from "./Sustainability"

export default function LandingPage() {
  return (
    <div className="[&_*]:scroll-mt-24">
      <Hero />
      <Features />
      <TradeTerms />
      <CrueltyFree />
      <Sustainability />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  )
}
