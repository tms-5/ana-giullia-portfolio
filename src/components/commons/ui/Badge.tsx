import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'soft' | 'accent' | 'outline'

const variants: Record<BadgeVariant, string> = {
  soft: 'bg-mode-accent-soft text-text-primary',
  accent: 'bg-mode-accent text-mode-accent-contrast',
  outline: 'border border-mode-ring bg-mode-surface text-text-primary',
}

export function Badge({
  children,
  className,
  variant = 'soft',
}: {
  children: ReactNode
  className?: string
  variant?: BadgeVariant
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
