'use client'

import { motion } from 'framer-motion'
import type { ProfileContent } from '@/data/profile'
import { PageFrame, PageShell } from '@/components/commons/ui/Design'
import { odontoCopy } from '@/content/odonto'
import { useLocale } from '@/lib/i18n'
import { OdontoAbout } from './about/OdontoAbout'
import { OdontoContact } from './contact/OdontoContact'
import { OdontoCourses } from './courses/OdontoCourses'
import { OdontoExperience } from './experience/OdontoExperience'
import { OdontoHero } from './hero/OdontoHero'
import { OdontoProjects } from './projects/OdontoProjects'

export function OdontoPageTemplate({ content }: { content: ProfileContent }) {
  const { locale } = useLocale()
  const copy = odontoCopy[locale]

  return (
    <PageShell>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <PageFrame>
          <OdontoHero content={content} copy={copy} />
          <OdontoAbout copy={copy} />
          <OdontoExperience copy={copy} />
          <OdontoProjects copy={copy} />
          <OdontoCourses copy={copy} />
          <OdontoContact copy={copy} />
        </PageFrame>
      </motion.div>
    </PageShell>
  )
}
