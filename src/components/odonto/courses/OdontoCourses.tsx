'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Card } from '@/components/commons/ui/Card'
import { Eyebrow, IconBubble, SectionBand } from '@/components/commons/ui/Design'
import type { OdontoCopy } from '@/content/odonto'
import { LineIcon } from '../icons/LineIcon'

export function OdontoCourses({ copy }: { copy: OdontoCopy }) {
  return (
    <SectionBand id="courses">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <motion.div variants={fadeUp}><Eyebrow>{copy.coursesEyebrow}</Eyebrow></motion.div>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {copy.courses.map((course) => (
            <motion.div key={course.title} variants={fadeUp} whileHover={{ y: -5 }}>
              <Card variant="glass" padding="sm" className="h-full rounded-xl">
                <IconBubble className="mb-4"><LineIcon /></IconBubble>
                <h3 className="text-sm font-semibold leading-5 text-text-primary">{course.title}</h3>
                <p className="mt-2 text-xs text-text-secondary">{course.provider}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionBand>
  )
}
