'use client'

import { motion } from 'framer-motion'

export function MiniVisual() {
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="size-24 rounded-full bg-[conic-gradient(var(--app-mode-accent)_0_22%,var(--app-mode-ring)_22%_42%,var(--app-mode-accent-soft)_42%_100%)] p-5">
      <div className="h-full rounded-full bg-mode-surface" />
    </motion.div>
  )
}
