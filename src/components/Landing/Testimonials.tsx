"use client"

const quotes = [
  {
    quote:
      "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"",
    author: "Alex Johnson",
    role: "Creative Director",
  },
  {
    quote:
      "\"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"",
    author: "Maria Garcia",
    role: "Entrepreneur",
  },
  {
    quote:
      "\"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\"",
    author: "Liam Wong",
    role: "Photographer",
  },
]

export default function Testimonials() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Trusted by creators</h2>
        <p className="mt-3 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q, i) => (
          <figure key={i} className="rounded-xl border bg-card p-6">
            <blockquote className="text-sm text-muted-foreground">{q.quote}</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium">{q.author}</span> · {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
