"use client"

import { cn } from "@/utilities/cn"

const terms = [
  { code: "EXW", label: "Ex Works" },
  { code: "FCA", label: "Free Carrier" },
  { code: "FOB", label: "Free on Board", highlight: true },
  { code: "CFR", label: "Cost & Freight" },
  { code: "CIF", label: "Cost, Insurance & Freight" },
  { code: "DAP", label: "Delivered At Place" },
  { code: "DDP", label: "Delivered Duty Paid" },
]

export default function TradeTerms() {
  return (
    <section id="trade-terms" className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Global trade on your terms</h2>
        <p className="mt-3 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Operamur cum omnibus Incoterms — cum praeferentia ad FOB pro fluxu mercium efficaciore.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {terms.map((t) => (
          <div
            key={t.code}
            className={cn(
              "rounded-xl border p-4 text-center",
              t.highlight ? "border-primary bg-primary/5" : "bg-card"
            )}
          >
            <div className={cn("text-sm font-semibold", t.highlight && "text-primary")}>{t.code}</div>
            <div className="text-xs text-muted-foreground">{t.label}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Documentationem curamus: commercial invoice, packing list, BL/ AWB,
          certificate of origin, inspection reports — secundum requisita destinationis.
        </p>
      </div>
    </section>
  )
}
