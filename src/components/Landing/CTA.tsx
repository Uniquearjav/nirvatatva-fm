"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative isolate">
      <div className="container py-20">
        <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
          <div className="p-10 text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to elevate your space?</h3>
            <p className="mt-2 text-primary-foreground/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/shop">
                <Button size="lg" variant="secondary" className="text-primary">
                  Explore the collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
