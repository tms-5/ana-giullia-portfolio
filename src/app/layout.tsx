import type { Metadata } from 'next'
import Script from 'next/script'
import { AdaptiveFavicon } from '@/components/commons/layout/AdaptiveFavicon'
import { Footer } from '@/components/commons/layout/Footer'
import { Header } from '@/components/commons/layout/Header'
import { LocaleProvider } from '@/lib/i18n'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ana Giullia Calado',
  description:
    'Portfolio for Ana Giullia Calado across dentistry and data analytics.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('theme');
                var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
                var profileMode = location.pathname.indexOf('/tech') >= 0 ? 'tech' : 'odonto';
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.classList.toggle('odonto', profileMode === 'odonto');
                document.documentElement.classList.toggle('tech', profileMode === 'tech');
                document.documentElement.dataset.profileMode = profileMode;
                document.documentElement.dataset.locale = 'pt';
                document.documentElement.lang = 'pt-BR';
                document.documentElement.style.colorScheme = theme;
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="transition-colors duration-500" suppressHydrationWarning>
        <LocaleProvider>
          <AdaptiveFavicon />
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
