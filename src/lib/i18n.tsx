'use client'

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react'

export type Locale = 'pt' | 'en'

const LOCALE_STORAGE_KEY = 'locale'

type LocaleContextValue = {
  locale: Locale
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getLocaleSnapshot(): Locale {
  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)

  if (storedLocale === 'en' || storedLocale === 'pt') {
    return storedLocale
  }

  return window.location.pathname.includes('/tech') ? 'en' : 'pt'
}

function getServerLocaleSnapshot(): Locale {
  return 'pt'
}

function subscribeLocale(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener('localechange', callback)

  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener('localechange', callback)
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getServerLocaleSnapshot)

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
    document.documentElement.dataset.locale = locale
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => {
        const nextLocale = locale === 'pt' ? 'en' : 'pt'

        window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
        window.dispatchEvent(new Event('localechange'))
      },
    }),
    [locale],
  )

  return <LocaleContext value={value}>{children}</LocaleContext>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider')
  }

  return context
}
