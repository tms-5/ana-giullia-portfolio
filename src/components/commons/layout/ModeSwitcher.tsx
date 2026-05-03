'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ProfileMode } from '@/data/profile'
import { cn } from '@/lib/utils'

const modes: Array<{ href: `/${ProfileMode}`; label: string; value: ProfileMode }> = [
  { href: '/odonto', label: 'Odonto', value: 'odonto' },
  { href: '/tech', label: 'Tech', value: 'tech' },
]

export function ModeSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const normalizedPathname = pathname.replace(/\/$/, '')

  return (
    <nav
      aria-label="Portfolio mode"
      className="rounded-full border border-mode-ring bg-mode-accent-soft/90 p-1 backdrop-blur dark:bg-white/8"
    >
      <div className="grid grid-cols-2 gap-1">
        {modes.map((mode) => {
          const isActive = normalizedPathname === mode.href

          return (
            <Link
              key={mode.value}
              href={mode.href}
              onClick={onNavigate}
              className={cn(
                'rounded-full px-5 py-2 text-center text-xs font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep',
                isActive
                  ? 'bg-mode-accent text-mode-accent-contrast shadow-sm'
                  : 'border border-mode-ring bg-white/0 text-text-primary hover:bg-mode-accent-soft',
              )}
            >
              {mode.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
