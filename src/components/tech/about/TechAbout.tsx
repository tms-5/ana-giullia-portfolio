'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Eyebrow, SectionBand } from '@/components/commons/ui/Design'
import { tools, type TechCopy } from '@/content/tech'
import { ToolIcon } from '../icons/ToolIcon'

export function TechAbout({ copy }: { copy: TechCopy }) {
  return (
    <SectionBand id="about">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.7fr] lg:items-start">
          <motion.div variants={fadeUp}>
            <Eyebrow>{copy.aboutEyebrow}</Eyebrow>
            <p className="mt-5 max-w-lg text-sm leading-7 text-text-secondary">{copy.aboutDescription}</p>
          </motion.div>
          <motion.div variants={stagger} className="border-mode-ring lg:border-l lg:pl-14">
            <motion.div variants={fadeUp}><Eyebrow className="tracking-[0.22em]">{copy.stackEyebrow}</Eyebrow></motion.div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {tools.map((tool, index) => (
                <motion.div key={tool} variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }} className="flex items-center gap-3 rounded-xl border border-mode-ring bg-mode-surface/70 px-4 py-3 text-sm font-medium text-text-primary">
                  <ToolIcon index={index} />{tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionBand>
  )
}
