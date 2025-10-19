import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { LogoIcon } from '@/components/icons/logo'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    <footer className="text-sm border-t border-neutral-200 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
      <div className="container">
        <div className="flex w-full flex-col gap-6 py-12 text-sm md:flex-row md:gap-12">
          <div>
            <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
              <LogoIcon />
              <span className="">{SITE_NAME}</span>
            </Link>
          </div>
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>
          <div className="md:ml-auto flex flex-col gap-4 items-end">
            <ThemeSelector />
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-sm dark:border-neutral-700">
        <div className="text-center md:flex-row md:gap-0">
          <p>
            &copy; {currentYear} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All the rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
