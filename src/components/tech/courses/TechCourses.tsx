'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Card } from '@/components/commons/ui/Card'
import { Eyebrow, IconBubble, SectionBand } from '@/components/commons/ui/Design'
import type { TechCopy } from '@/content/tech'
import { ToolIcon } from '../icons/ToolIcon'

export function TechCourses({ copy }: { copy: TechCopy }) {
  return (
    <SectionBand id="courses">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <motion.div variants={fadeUp}><Eyebrow>{copy.coursesEyebrow}</Eyebrow></motion.div>
        <div className="mt-7 grid gap-4 md:grid-cols-5">
          {copy.courses.map((course, index) => (
            <motion.div key={course} variants={fadeUp} whileHover={{ y: -5 }}>
              <Card variant="glass" padding="sm" className="h-full rounded-xl">
                <IconBubble className="mb-4"><ToolIcon index={index} /></IconBubble>
                <h3 className="text-sm font-semibold leading-5 text-text-primary">{course}</h3>
                <p className="mt-2 text-xs text-text-secondary">{copy.completed}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionBand>
  )
}
