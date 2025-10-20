import type { Metadata } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'

const LandingPage = dynamic(() => import('@/components/Landing'))

export const metadata: Metadata = {
  title: 'Global Exporter | Furniture & Steel Scrap',
  description:
    'Exporter and trader of furniture and steel scrap. We operate with all Incoterms and prefer FOB. Quality assurance, documentation, and reliable logistics.',
}

export default function Page() {
  return <LandingPage />
}
