'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { publicPath } from '@/lib/paths'

const faviconByMode = {
  odonto: {
    light: '/favicon.ico',
    dark: '/favicon-dark.ico',
  },
  tech: {
    light: '/favicon-tech.ico',
    dark: '/favicon-tech-dark.ico',
  },
} as const

export function AdaptiveFavicon() {
  const pathname = usePathname()

  useEffect(() => {
    function updateFavicon() {
      const mode = pathname.startsWith('/tech') ? 'tech' : 'odonto'
      const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')

      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }

      link.type = 'image/x-icon'
      link.href = publicPath(faviconByMode[mode][theme])
    }

    updateFavicon()

    const observer = new MutationObserver(updateFavicon)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-profile-mode'] })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
