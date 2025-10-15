import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { notFound } from 'next/navigation'

export default function Checkout() {
  notFound()
}

export const metadata: Metadata = {
  description: 'Checkout.',
  openGraph: mergeOpenGraph({
    title: 'Checkout',
    url: '/checkout',
  }),
  title: 'Checkout',
}
