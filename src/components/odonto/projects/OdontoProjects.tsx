'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Card } from '@/components/commons/ui/Card'
import { Eyebrow, SectionBand } from '@/components/commons/ui/Design'
import type { OdontoCopy } from '@/content/odonto'

export function OdontoProjects({ copy }: { copy: OdontoCopy }) {
  return (
    <SectionBand id="projects">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <motion.div variants={fadeUp}><Eyebrow>{copy.projectsEyebrow}</Eyebrow></motion.div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {copy.projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <Card variant="glass" padding="sm" className="h-full rounded-xl">
                <h3 className="text-base font-semibold leading-6 text-text-primary">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => <span key={skill} className="rounded-full bg-mode-accent-soft px-3 py-1 text-xs text-text-primary">{skill}</span>)}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionBand>
  )
}
