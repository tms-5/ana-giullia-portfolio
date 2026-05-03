'use client'

import { motion } from 'framer-motion'

export function ProjectPreview({ index }: { index: number }) {
  return (
    <div className="h-40 rounded-xl border border-mode-ring bg-mode-accent-soft p-3">
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-3">
        <div className="space-y-2">
          <div className="h-3 rounded-full bg-mode-ring" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-11 rounded-md bg-mode-accent/45" />
            <div className="h-11 rounded-md bg-mode-accent/25" />
          </div>
          <div className="h-12 rounded-md bg-mode-surface">
            <motion.div animate={{ scaleX: [0.35, 0.95, 0.35] }} transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }} className="h-full origin-left rounded-md bg-mode-ring" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-mode-surface">
          <motion.div animate={{ y: index === 1 ? [-12, 10, -12] : [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-3 bottom-3 h-24 rounded-t-[50%] bg-mode-accent/25" />
        </div>
      </div>
    </div>
  )
}
