'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Card } from '@/components/commons/ui/Card'
import { Eyebrow, SectionBand } from '@/components/commons/ui/Design'
import type { TechCopy } from '@/content/tech'
import { ProjectPreview } from './ProjectPreview'

export function TechProjects({ copy }: { copy: TechCopy }) {
  return (
    <SectionBand id="work">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <motion.div variants={fadeUp}><Eyebrow>{copy.projectsEyebrow}</Eyebrow></motion.div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {copy.projects.map(([title, body, tags], index) => (
            <motion.div key={title} variants={fadeUp}>
              <Card variant="glass" padding="sm" className="h-full rounded-xl">
                <ProjectPreview index={index} />
                <h3 className="mt-5 text-base font-semibold leading-6 text-text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => <span key={tag} className="rounded-full bg-mode-accent-soft px-3 py-1 text-xs text-text-primary">{tag}</span>)}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionBand>
  )
}
