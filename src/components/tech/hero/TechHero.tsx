'use client'

import { motion } from 'framer-motion'
import type { ProfileContent } from '@/data/profile'
import { fadeUp, stagger } from '@/components/commons/animations'
import { ArrowRightIcon } from '@/components/commons/icons/ArrowRightIcon'
import { Button } from '@/components/commons/ui/Button'
import { Eyebrow } from '@/components/commons/ui/Design'
import type { TechCopy } from '@/content/tech'
import { MiniVisual } from './MiniVisual'

export function TechHero({ content, copy }: { content: ProfileContent; copy: TechCopy }) {
  return (
    <section className="relative min-h-[620px] overflow-hidden pt-28">
      <div className="absolute right-8 top-28 hidden h-56 w-56 bg-[radial-gradient(circle,var(--app-mode-ring)_1.5px,transparent_1.5px)] [background-size:15px_15px] opacity-75 dark:opacity-30 lg:block" />
      <div className="absolute bottom-0 right-[18%] h-[52%] w-[44%] rounded-tl-[18rem] bg-mode-accent-soft" />
      <div className="absolute left-[42%] top-[38%] h-80 w-56 rounded-full bg-mode-accent-soft/80 blur-3xl" />
      <div className="absolute right-[13%] top-[35%] hidden lg:block"><MiniVisual /></div>
      <div className="relative z-10 grid min-h-[492px] items-end gap-10 px-8 sm:px-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-20">
        <motion.div variants={stagger} initial="hidden" animate="show" className="self-center pb-10 lg:pb-20">
          <motion.div variants={fadeUp}><Eyebrow>{copy.heroEyebrow}</Eyebrow></motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-xl text-5xl font-light leading-[1.08] tracking-[-0.045em] text-text-primary md:text-6xl">
            {copy.heroTitleStart} <span className="text-5xl font-normal leading-none text-mode-accent md:text-6xl">{copy.heroTitleAccent}</span> {copy.heroTitleEnd}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-md text-base leading-7 text-text-secondary">{copy.heroDescription}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5">
            <Button href="#work" size="md" className="px-6">{copy.heroCta} <ArrowRightIcon /></Button>
            <Button href="#about" variant="link">{copy.heroLink} <ArrowRightIcon /></Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="relative flex min-h-[430px] items-end justify-center lg:justify-end">
          <img src={content.hero.image} alt={copy.imageAlt} className="relative z-10 max-h-[555px] w-full max-w-[500px] object-contain object-bottom" />
        </motion.div>
      </div>
    </section>
  )
}
