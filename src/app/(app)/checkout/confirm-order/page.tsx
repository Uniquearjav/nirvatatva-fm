import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { notFound } from 'next/navigation'

export default async function ConfirmOrderPage() {
  notFound()
}

export const metadata: Metadata = {
  description: 'Confirm order.',
  openGraph: mergeOpenGraph({
    title: 'Confirming order',
    url: '/checkout/confirm-order',
  }),
  title: 'Confirming order',
}
