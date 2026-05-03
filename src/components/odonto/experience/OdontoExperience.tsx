'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Card } from '@/components/commons/ui/Card'
import { Eyebrow, SectionBand } from '@/components/commons/ui/Design'
import type { OdontoCopy } from '@/content/odonto'

export function OdontoExperience({ copy }: { copy: OdontoCopy }) {
  return (
    <SectionBand id="experience">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <motion.div variants={fadeUp}><Eyebrow>{copy.experienceEyebrow}</Eyebrow></motion.div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {copy.experiences.map((item) => (
            <motion.div key={`${item.title}-${item.meta}-${item.date}`} variants={fadeUp}>
              <Card variant="glass" className="h-full rounded-xl">
                <h3 className="text-base font-semibold leading-6 text-text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.meta}</p>
                <p className="mt-2 text-sm text-text-secondary">{item.date}</p>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6 text-text-primary">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div variants={fadeUp}>
            <Card variant="glass" className="h-full rounded-xl">
              <Eyebrow className="tracking-[0.22em]">{copy.formationEyebrow}</Eyebrow>
              <h3 className="mt-6 font-semibold text-text-primary">Universidade de Pernambuco (UPE)</h3>
              <p className="mt-1 text-sm text-text-secondary">{copy.degree}</p>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card variant="glass" className="h-full rounded-xl">
              <Eyebrow className="tracking-[0.22em]">{copy.skillsEyebrow}</Eyebrow>
              <div className="mt-6 flex flex-wrap gap-3">
                {copy.skills.map((skill) => <span key={skill} className="rounded-full bg-mode-accent-soft px-5 py-2 text-sm text-text-primary">{skill}</span>)}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </SectionBand>
  )
}
