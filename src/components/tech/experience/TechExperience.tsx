'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Eyebrow, SectionBand } from '@/components/commons/ui/Design'
import type { TechCopy } from '@/content/tech'

export function TechExperience({ copy }: { copy: TechCopy }) {
  return (
    <SectionBand id="experience">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <motion.div variants={fadeUp}><Eyebrow>{copy.experienceEyebrow}</Eyebrow></motion.div>
            <div className="mt-7 space-y-8">
              {copy.experiences.map((item) => (
                <motion.div key={`${item.role}-${item.date}`} variants={fadeUp}>
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                    <div>
                      <h3 className="text-base font-semibold text-text-primary">{item.role}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{item.organization}</p>
                    </div>
                    <p className="text-sm text-text-secondary">{item.date}</p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6 text-text-primary">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div variants={fadeUp} className="border-mode-ring lg:border-l lg:pl-10">
            <Eyebrow>{copy.formationEyebrow}</Eyebrow>
            <div className="mt-7 space-y-6">
              {copy.education.map((item) => (
                <div key={`${item.institution}-${item.date}`}>
                  <h3 className="font-semibold text-text-primary">{item.institution}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.degree}</p>
                  <p className="mt-1 text-xs font-medium text-text-secondary">{item.date}</p>
                  <p className="mt-3 text-sm leading-6 text-text-primary">{item.description}</p>
                </div>
              ))}
            </div>
            <Eyebrow className="mt-10">{copy.languagesEyebrow}</Eyebrow>
            <div className="mt-5 flex flex-wrap gap-3">
              {copy.languages.map((language) => <span key={language} className="rounded-full bg-mode-accent-soft px-4 py-2 text-xs text-text-primary">{language}</span>)}
            </div>
            <Eyebrow className="mt-10">{copy.competenciesEyebrow}</Eyebrow>
            <div className="mt-5 flex flex-wrap gap-3">
              {copy.competencies.map((skill) => <span key={skill} className="rounded-full bg-mode-accent-soft px-4 py-2 text-xs text-text-primary">{skill}</span>)}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionBand>
  )
}
