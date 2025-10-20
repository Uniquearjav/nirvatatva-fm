"use client"

import Image from "next/image"

const photos = [
  // Furniture manufacturing & finishes
  "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
  // Steel scrap and yard
  "https://images.unsplash.com/photo-1590496793324-3b868f3b12a7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590496793654-6be7f2a7bc01?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1624981868185-0df917f6515d?q=80&w=1200&auto=format&fit=crop",
]

export default function Gallery() {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Furniture lines & steel scrap grades</h2>
        <p className="mt-3 text-muted-foreground">Lorem ipsum — manufacturing, finishing, packing; HMS 1/2, shredded, rail with inspection.</p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
