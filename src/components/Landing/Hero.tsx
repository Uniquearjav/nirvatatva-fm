"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1476231790875-016a80c274f3?q=80&w=1920&auto=format&fit=crop"
          alt="Global trade logistics with containers at port"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container py-28 sm:py-36 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          End-to-end export solutions
        </span>
        <h1 className="mt-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl">
          Furniture & steel scrap exporter and trader
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We operate under all Incoterms and prefer FOB for efficient, cost-optimized shipments. Global sourcing, strict QA, and reliable documentation.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/shop">
            <Button size="lg" className="shadow-lg">View Product Lines</Button>
          </Link>
          <Link href="#trade-terms">
            <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              Incoterms & Logistics
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
