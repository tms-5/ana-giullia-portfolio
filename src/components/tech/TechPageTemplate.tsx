'use client'

import { motion } from 'framer-motion'
import type { ProfileContent } from '@/data/profile'
import { PageFrame, PageShell } from '@/components/commons/ui/Design'
import { techCopy } from '@/content/tech'
import { useLocale } from '@/lib/i18n'
import { TechAbout } from './about/TechAbout'
import { TechContact } from './contact/TechContact'
import { TechCourses } from './courses/TechCourses'
import { TechExperience } from './experience/TechExperience'
import { TechHero } from './hero/TechHero'
import { TechProjects } from './projects/TechProjects'

export function TechPageTemplate({ content }: { content: ProfileContent }) {
  const { locale } = useLocale()
  const copy = techCopy[locale]

  return (
    <PageShell>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <PageFrame>
          <TechHero content={content} copy={copy} />
          <TechAbout copy={copy} />
          <TechProjects copy={copy} />
          <TechExperience copy={copy} />
          <TechCourses copy={copy} />
          <TechContact copy={copy} />
        </PageFrame>
      </motion.div>
    </PageShell>
  )
}
