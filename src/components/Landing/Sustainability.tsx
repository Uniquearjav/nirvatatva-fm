"use client"

import { Recycle, Globe, Leaf } from "lucide-react"

const metrics = [
  {
    icon: Globe,
    title: "Responsible logistics",
    desc: "Lorem ipsum — route optimization and consolidated loads to reduce emissions where possible.",
  },
  {
    icon: Recycle,
    title: "Recycled & recyclable",
    desc: "Sed do eiusmod — steel scrap streams; furniture packaging selected for recyclability.",
  },
  {
    icon: Leaf,
    title: "Sustainable sourcing",
    desc: "Ut enim ad minim — supplier declarations, optional certifications, and material traceability.",
  },
]

export default function Sustainability() {
  return (
    <section id="sustainability" className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Sustainability in practice</h2>
        <p className="mt-3 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Processus nostros ad meliorem consistentiam componimus.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m, i) => (
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <m.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-medium">{m.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
