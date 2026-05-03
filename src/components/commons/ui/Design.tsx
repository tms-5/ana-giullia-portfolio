import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionTone = 'surface' | 'soft'
type BubbleSize = 'sm' | 'md' | 'lg'

const sectionTones: Record<SectionTone, string> = {
  surface: 'border-t border-mode-ring bg-mode-surface',
  soft: 'border-t border-mode-ring bg-mode-accent-soft',
}

const bubbleSizes: Record<BubbleSize, string> = {
  sm: 'size-10',
  md: 'size-12',
  lg: 'size-16',
}

export function PageShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <main className={cn('min-h-svh bg-mode-page px-4 py-5 text-text-primary transition-colors duration-500 sm:px-6', className)}>
      {children}
    </main>
  )
}

export function PageFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto max-w-7xl overflow-hidden rounded-[1.35rem] border border-mode-ring bg-mode-surface shadow-[0_26px_90px_rgba(55,48,38,0.08)] transition-colors duration-500 dark:shadow-[0_26px_90px_rgba(0,0,0,0.24)]', className)}>
      {children}
    </div>
  )
}

export function SectionBand({
  children,
  className,
  tone = 'surface',
  ...props
}: {
  children: ReactNode
  className?: string
  id?: string
  tone?: SectionTone
}) {
  return (
    <section className={cn('px-8 py-10 transition-colors duration-500 sm:px-12 lg:px-16', sectionTones[tone], className)} {...props}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-xs font-bold uppercase tracking-[0.28em] text-mode-accent', className)}>
      {children}
    </p>
  )
}

export function IconBubble({
  children,
  className,
  size = 'md',
}: {
  children: ReactNode
  className?: string
  size?: BubbleSize
}) {
  return (
    <div className={cn('grid place-items-center rounded-full border border-mode-ring bg-mode-accent-soft text-mode-accent', bubbleSizes[size], className)}>
      {children}
    </div>
  )
}
