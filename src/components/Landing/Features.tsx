"use client"

import { Check } from "lucide-react"

const items = [
  {
    title: "FOB-first logistics",
    desc: "Lorem ipsum dolor sit amet — optimized port handling and vessel bookings on FOB, all lanes supported.",
  },
  {
    title: "Furniture QA + compliance",
    desc: "Sed do eiusmod tempor — dimensions, finishes, moisture, and packaging checks per destination standards.",
  },
  {
    title: "Steel scrap sourcing",
    desc: "Ut enim ad minim veniam — HMS 1/2, shredded, rail, with inspection and grading reports.",
  },
  {
    title: "Complete documentation",
    desc: "Duis aute irure — CI, PL, BL/AWB, COO, inspection, fumigation as required.",
  },
]

export default function Features() {
  return (
    <section id="features" className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Features you will love</h2>
        <p className="mt-3 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
