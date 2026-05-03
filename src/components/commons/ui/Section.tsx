import type { ReactNode } from 'react'
import { Container } from './Container'
import { cn } from '@/lib/utils'

type SectionSpacing = 'sm' | 'md' | 'lg'

const spacing: Record<SectionSpacing, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
}

export function Section({
  children,
  className,
  contentClassName,
  description,
  eyebrow,
  spacing: sectionSpacing = 'md',
  title,
}: {
  children: ReactNode
  className?: string
  contentClassName?: string
  description?: string
  eyebrow?: string
  spacing?: SectionSpacing
  title?: string
}) {
  return (
    <section className={cn('border-t border-border/70', spacing[sectionSpacing], className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl md:mb-14">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-text-primary md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  )
}
