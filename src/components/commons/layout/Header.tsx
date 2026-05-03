'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { ModeSwitcher } from './ModeSwitcher'
import { Container } from '@/components/commons/ui/Container'
import { cn } from '@/lib/utils'
import { useLocale } from '@/lib/i18n'
import { publicPath } from '@/lib/paths'

const navLinks = [
  { href: '#about', label: { pt: 'Sobre mim', en: 'About' } },
  { href: '#experience', label: { pt: 'Experiencia', en: 'Experience' } },
  { href: '#courses', label: { pt: 'Cursos', en: 'Courses' } },
  { href: '#contact', label: { pt: 'Contato', en: 'Contact' } },
]

type Theme = 'light' | 'dark'
type ProfileMode = 'odonto' | 'tech'

const THEME_STORAGE_KEY = 'theme'

function getThemeSnapshot(): Theme {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light'
}

function getServerThemeSnapshot(): Theme {
  return 'light'
}

function subscribeTheme(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener('themechange', callback)

  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener('themechange', callback)
  }
}

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(navLinks[0].href)
  const { locale, toggleLocale } = useLocale()
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot)
  const isTech = pathname.includes('/tech')
  const profileMode: ProfileMode = isTech ? 'tech' : 'odonto'
  const logoSrc = isTech
    ? theme === 'dark'
      ? publicPath('/images/giu-logo-tech-horizontal-branca.png')
      : publicPath('/images/giu-logo-tech-horizontal.png')
    : theme === 'dark'
      ? publicPath('/images/giu-logo-odonto-horizontal-branca.png')
      : publicPath('/images/giu-logo-odonto-horizontal.png')

  useEffect(() => {
    const getCurrentSection = () => {
      const scrollPosition = window.scrollY + Math.min(window.innerHeight * 0.36, 260)
      const sections = navLinks
        .map((link) => ({
          href: link.href,
          element: document.getElementById(link.href.slice(1)),
        }))
        .filter((section): section is { href: string; element: HTMLElement } => Boolean(section.element))

      if (sections.length === 0) {
        return navLinks[0].href
      }

      const lastSection = sections.at(-1)

      if (lastSection && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        return lastSection.href
      }

      return sections.reduce((currentSection, section) => {
        return section.element.offsetTop <= scrollPosition ? section.href : currentSection
      }, sections[0].href)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      setActiveSection(getCurrentSection())
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.classList.toggle('odonto', profileMode === 'odonto')
    document.documentElement.classList.toggle('tech', profileMode === 'tech')
    document.documentElement.dataset.profileMode = profileMode
  }, [profileMode])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    window.dispatchEvent(new Event('themechange'))
  }

  function handleNavClick(href: string) {
    setActiveSection(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-5 z-30 transition-all duration-500',
        isScrolled && 'top-3',
      )}
    >
      <Container
        className={cn(
          'flex min-h-14 items-center justify-between gap-4 rounded-full transition-all duration-500',
          isScrolled &&
            'max-w-6xl border border-mode-ring bg-mode-surface/82 px-5 shadow-[0_18px_55px_rgba(36,49,40,0.11)] backdrop-blur-xl dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] lg:px-7',
        )}
      >
        <Link href="/odonto" className="flex items-center gap-3" aria-label="Ana Giullia Calado home">
          <img
            src={logoSrc}
            alt=""
            suppressHydrationWarning
            className={cn('h-9 w-auto object-contain transition-all duration-500', isScrolled && 'h-9')}
          />
          <span className="sr-only">Ana Giullia Calado</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-text-primary lg:flex" aria-label="Page sections">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                'transition hover:text-mode-accent dark:hover:text-white',
                activeSection === link.href && 'text-mode-accent dark:text-mode-accent',
              )}
            >
              {link.label[locale]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <ModeSwitcher />
          <button
            type="button"
            onClick={toggleLocale}
            className="grid size-8 place-items-center rounded-full text-[11px] font-bold uppercase text-text-primary transition hover:bg-mode-accent-soft dark:text-white dark:hover:bg-white/10"
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para portugues'}
            suppressHydrationWarning
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-8 place-items-center rounded-full text-text-primary transition hover:bg-mode-accent-soft dark:text-white dark:hover:bg-white/10"
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            aria-pressed={theme === 'dark'}
            suppressHydrationWarning
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 2.8v2M12 19.2v2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M2.8 12h2M19.2 12h2M4.8 19.2l1.4-1.4M17.8 6.2l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                <path d="M20 15.8A8.3 8.3 0 0 1 8.2 4 8.3 8.3 0 1 0 20 15.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-full border border-mode-ring text-text-primary transition hover:bg-mode-accent-soft dark:text-white dark:hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span className="relative block h-3.5 w-4" aria-hidden="true">
            <span className={cn('absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition', menuOpen && 'top-1.5 rotate-45')} />
            <span className={cn('absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-current transition', menuOpen && 'opacity-0')} />
            <span className={cn('absolute bottom-0 left-0 h-0.5 w-4 rounded-full bg-current transition', menuOpen && 'bottom-1.5 -rotate-45')} />
          </span>
        </button>
      </Container>

      {menuOpen && (
        <Container className="mt-3 lg:hidden">
          <div className="rounded-3xl border border-mode-ring bg-mode-surface/92 p-3 shadow-[0_18px_55px_rgba(36,49,40,0.13)] backdrop-blur-xl">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-semibold text-text-primary/60 transition hover:bg-mode-accent-soft dark:hover:bg-white/10',
                    activeSection === link.href && 'bg-mode-accent-soft text-mode-accent dark:bg-mode-accent dark:text-mode-accent-contrast',
                  )}
                >
                  {link.label[locale]}
                </a>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-mode-ring pt-3">
              <ModeSwitcher onNavigate={() => setMenuOpen(false)} />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="grid size-10 place-items-center rounded-full text-xs font-bold uppercase text-text-primary transition hover:bg-mode-accent-soft dark:text-white dark:hover:bg-white/10"
                  aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para portugues'}
                  suppressHydrationWarning
                >
                  {locale === 'pt' ? 'EN' : 'PT'}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="grid size-10 place-items-center rounded-full text-text-primary transition hover:bg-mode-accent-soft dark:text-white dark:hover:bg-white/10"
                  aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
                  aria-pressed={theme === 'dark'}
                  suppressHydrationWarning
                >
                  {theme === 'dark' ? (
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 2.8v2M12 19.2v2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M2.8 12h2M19.2 12h2M4.8 19.2l1.4-1.4M17.8 6.2l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                      <path d="M20 15.8A8.3 8.3 0 0 1 8.2 4 8.3 8.3 0 1 0 20 15.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </header>
  )
}
