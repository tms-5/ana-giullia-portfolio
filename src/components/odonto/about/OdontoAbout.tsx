'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Eyebrow, IconBubble, SectionBand } from '@/components/commons/ui/Design'
import type { OdontoCopy } from '@/content/odonto'
import { LineIcon } from '../icons/LineIcon'

export function OdontoAbout({ copy }: { copy: OdontoCopy }) {
  return (
    <SectionBand id="about">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }} className="grid gap-10 lg:grid-cols-[0.9fr_1.7fr] lg:items-center">
        <motion.div variants={fadeUp}>
          <Eyebrow>{copy.aboutEyebrow}</Eyebrow>
          <p className="mt-5 max-w-lg text-sm leading-7 text-text-secondary">{copy.aboutDescription}</p>
        </motion.div>
        <motion.div variants={stagger} className="grid gap-6 border-mode-ring lg:grid-cols-4 lg:border-l lg:pl-14">
          {copy.careValues.map(([title, label]) => (
            <motion.div variants={fadeUp} key={`${title}-${label}`} whileHover={{ y: -5 }} className="text-center">
              <IconBubble size="lg" className="mx-auto"><LineIcon /></IconBubble>
              <p className="mx-auto mt-4 max-w-32 text-sm font-medium leading-5 text-text-primary">{title}<br />{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionBand>
  )
}
