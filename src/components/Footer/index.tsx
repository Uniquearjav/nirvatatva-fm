import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { LogoIcon } from '@/components/icons/logo'
import { Image } from '@/components/Media/Image'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || ''
  const tagline = (footer as any)?.tagline as string | undefined
  const contact = (footer as any)?.contact as { location?: string; email?: string; phone?: string } | undefined
  const socialLinks = ((footer as any)?.socialLinks || []) as Array<{ id?: string; platform: string; url: string }>
  const logo = (footer as any)?.logo

  return (
    <footer className="text-sm border-t border-neutral-200 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-10 py-12 text-sm md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-2 text-black dark:text-white" href="/">
              {logo ? (
                <div className="relative h-8 w-8">
                  <Image resource={logo as any} fill imgClassName="object-contain" />
                </div>
              ) : (
                <LogoIcon />
              )}
              <span className="">{SITE_NAME}</span>
            </Link>
            {tagline ? <p className="text-neutral-600 dark:text-neutral-300">{tagline}</p> : null}
          </div>

          <div>
            <h3 className="mb-3 font-medium text-black dark:text-white">Important links</h3>
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
          </div>

          <div>
            <h3 className="mb-3 font-medium text-black dark:text-white">Contact Us</h3>
            <ul className="space-y-2">
              {contact?.location ? (
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> <span>{contact.location}</span></li>
              ) : null}
              {contact?.email ? (
                <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></li>
              ) : null}
              {contact?.phone ? (
                <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a></li>
              ) : null}
            </ul>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-medium text-black dark:text-white">Social Media</h3>
              <ThemeSelector />
            </div>
            <ul className="flex flex-wrap items-center gap-4">
              {socialLinks?.map((s) => {
                const key = s.id || `${s.platform}-${s.url}`
                const Icon =
                  s.platform === 'facebook' ? Facebook :
                  s.platform === 'instagram' ? Instagram :
                  s.platform === 'twitter' ? Twitter :
                  s.platform === 'linkedin' ? Linkedin :
                  s.platform === 'youtube' ? Youtube : null
                if (!Icon) return null
                return (
                  <li key={key}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.platform} className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
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
