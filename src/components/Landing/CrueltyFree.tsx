"use client"

import { Leaf, HeartHandshake, ShieldCheck } from "lucide-react"

const points = [
  {
    title: "No animal testing",
    desc: "Lorem ipsum dolor sit amet — nulla animalia in testimonio implicantur in nostris processibus.",
    icon: HeartHandshake,
  },
  {
    title: "Ethical sourcing",
    desc: "Sed do eiusmod tempor — vendor audits, supplier declarations, and traceable inputs.",
    icon: ShieldCheck,
  },
  {
    title: "Vegan-friendly finishes",
    desc: "Ut enim ad minim veniam — coatings and adhesives selected to avoid animal-derived content where applicable.",
    icon: Leaf,
  },
]

export default function CrueltyFree() {
  return (
    <section id="cruelty-free" className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Cruelty‑free commitment</h2>
        <p className="mt-3 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Declarationes praebemus de processibus sine testimonio animalium.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
