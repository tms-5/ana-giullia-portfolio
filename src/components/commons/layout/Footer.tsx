'use client'

import { usePathname } from 'next/navigation'
import { InstagramIcon } from '@/components/commons/icons/InstagramIcon'
import { LinkedInIcon } from '@/components/commons/icons/LinkedInIcon'
import { MailIcon } from '@/components/commons/icons/MailIcon'
import { Container } from '@/components/commons/ui/Container'
import { profileContactLinks } from '@/lib/contact'
import { useLocale } from '@/lib/i18n'
import { publicPath } from '@/lib/paths'

export function Footer() {
  const pathname = usePathname()
  const { locale } = useLocale()
  const isTech = pathname.includes('/tech')
  const logoSrc = publicPath(isTech ? '/images/giu-logo-tech.png' : '/images/giu-logo-odonto.png')
  const logoDarkSrc = publicPath(isTech ? '/images/giu-logo-tech-horizontal-branca.png' : '/images/giu-logo-odonto-horizontal-branca.png')
  const credit = locale === 'pt' ? 'Site por Thamires Morais S.' : 'Website by Thamires Morais S.'
  const rights = locale === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'

  return (
    <footer className="bg-mode-page px-4 pb-5 transition-colors duration-500 sm:px-6">
      <Container className="flex max-w-7xl flex-col gap-4 rounded-[1.35rem] border border-mode-ring bg-mode-surface px-8 py-7 text-sm text-text-secondary transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between lg:px-20">
        <div>
          <img src={logoSrc} alt="" className="h-10 w-auto object-contain dark:hidden" />
          <img src={logoDarkSrc} alt="" className="hidden h-10 w-auto object-contain dark:block" />
        </div>
        <p className="text-xs">
          © 2025 Ana Giullia Calado. {rights}
          <span className="mt-1 block">{credit}</span>
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-primary">
          <a href={profileContactLinks.email} className="transition hover:text-mode-accent" aria-label="Email">
            <MailIcon />
          </a>
          <a href={profileContactLinks.tech} target="_blank" rel="noreferrer" className="transition hover:text-mode-accent" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profileContactLinks.odonto} target="_blank" rel="noreferrer" className="transition hover:text-mode-accent" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </Container>
    </footer>
  )
}
