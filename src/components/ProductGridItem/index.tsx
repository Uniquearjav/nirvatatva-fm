import type { Product, Variant, Media as MediaType } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import { Price } from '@/components/Price'

type Props = {
  product: Partial<Product>
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  // Destructure known fields safely
  const { gallery, title, slug } = product

  // Handle price fields (some might be missing)
  const priceInUSD = typeof product.priceInUSD === 'number' ? product.priceInUSD : undefined
  const priceMin =
    typeof (product as Record<string, unknown>)?.priceInUSDMin === 'number'
      ? ((product as Record<string, unknown>)?.priceInUSDMin as number)
      : undefined
  const priceMax =
    typeof (product as Record<string, unknown>)?.priceInUSDMax === 'number'
      ? ((product as Record<string, unknown>)?.priceInUSDMax as number)
      : undefined

  // Fallback to base price
  let price: number | undefined = priceInUSD

  // Handle variants safely
  const variants = product.variants?.docs as Variant[] | undefined
  if (variants?.length) {
    const variantPrice = variants[0]?.priceInUSD
    if (typeof variantPrice === 'number') price = variantPrice
  }

  // Resolve image
  const image =
    gallery?.[0]?.image && typeof gallery[0].image !== 'string'
      ? (gallery[0].image as MediaType)
      : undefined

  // Avoid crash if slug missing
  const href = slug ? `/products/${slug}` : '#'

  return (
    <Link className="relative inline-block h-full w-full group" href={href}>
      {image && (
        <Media
          className={clsx(
            'relative aspect-[4/5] bg-[whitesmoke] border rounded-2xl p-8',
          )}
          height={80}
          width={80}
          imgClassName={clsx(
            'h-full w-full bg-[whitesmoke] rounded-2xl transition duration-300 ease-in-out group-hover:scale-110',
          )}
          resource={image}
        />
      )}

      <div className="font-mono text-primary/50 group-hover:text-primary/100 flex justify-between items-center mt-4">
        <div>{title ?? 'Untitled Product'}</div>

        {typeof priceMin === 'number' && typeof priceMax === 'number' ? (
          <Price lowestAmount={priceMin} highestAmount={priceMax} />
        ) : typeof price === 'number' ? (
          <Price amount={price} />
        ) : null}
      </div>
    </Link>
  )
}
