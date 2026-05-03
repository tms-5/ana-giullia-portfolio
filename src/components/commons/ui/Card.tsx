'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CardVariant = 'default' | 'soft' | 'outlined' | 'glass'
type CardPadding = 'sm' | 'md' | 'lg'

const variants: Record<CardVariant, string> = {
  default: 'border-mode-ring bg-mode-surface shadow-[0_20px_60px_rgba(36,49,40,0.06)]',
  soft: 'border-transparent bg-mode-accent-soft shadow-[0_18px_50px_rgba(63,95,75,0.07)]',
  outlined: 'border-mode-ring bg-mode-surface/70 shadow-none',
  glass: 'border-mode-ring bg-mode-surface/58 shadow-none backdrop-blur',
}

const padding: Record<CardPadding, string> = {
  sm: 'p-5',
  md: 'p-6',
  lg: 'p-7',
}

export function Card({
  children,
  className,
  padding: cardPadding = 'md',
  variant = 'default',
}: {
  children: ReactNode
  className?: string
  padding?: CardPadding
  variant?: CardVariant
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn('rounded-3xl border transition-colors duration-300', variants[variant], padding[cardPadding], className)}
    >
      {children}
    </motion.div>
  )
}
