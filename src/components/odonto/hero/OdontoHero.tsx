'use client'

import { motion } from 'framer-motion'
import type { ProfileContent } from '@/data/profile'
import { fadeUp, stagger } from '@/components/commons/animations'
import { ArrowRightIcon } from '@/components/commons/icons/ArrowRightIcon'
import { Button } from '@/components/commons/ui/Button'
import { Eyebrow } from '@/components/commons/ui/Design'
import type { OdontoCopy } from '@/content/odonto'
import { profileContactLinks } from '@/lib/contact'
import { BotanicalLine } from '../icons/BotanicalLine'

export function OdontoHero({ content, copy }: { content: ProfileContent; copy: OdontoCopy }) {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-mode-surface pt-28 transition-colors duration-500">
      <div className="absolute bottom-0 right-0 h-[68%] w-[56%] rounded-tl-[22rem] bg-mode-accent-soft transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 h-[58%] w-[42%] rounded-t-[16rem] bg-mode-ring/70 transition-colors duration-500 sm:right-[16%]" />
      <div className="absolute left-[42%] top-[38%] h-80 w-56 rounded-full bg-mode-accent-soft/80 blur-3xl transition-colors duration-500" />
      <BotanicalLine className="absolute bottom-10 right-8 hidden w-48 text-mode-accent/30 lg:block" />
      <div className="relative z-10 grid min-h-[492px] items-end gap-10 px-8 sm:px-12 lg:grid-cols-[0.88fr_1.12fr] lg:px-20">
        <motion.div variants={stagger} initial="hidden" animate="show" className="self-center pb-10 lg:pb-24">
          <motion.div variants={fadeUp}><Eyebrow>{copy.heroEyebrow}</Eyebrow></motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 max-w-lg text-5xl font-light leading-[1.08] tracking-[-0.045em] text-text-primary md:text-6xl">
            {copy.heroTitleStart} <span className="block text-7xl font-normal leading-none tracking-normal text-mode-accent md:text-8xl">{copy.heroTitleAccent}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-md text-base leading-7 text-text-secondary">{copy.heroDescription}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5">
            <Button href={profileContactLinks.odonto} target="_blank" rel="noreferrer" size="md" className="px-6">{copy.heroCta} <ArrowRightIcon /></Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="relative flex min-h-[430px] items-end justify-center lg:justify-end">
          <div className="absolute bottom-8 left-4 z-20 rounded-2xl border border-mode-ring bg-mode-surface/88 px-5 py-4 text-left shadow-[0_18px_48px_rgba(36,49,40,0.12)] backdrop-blur md:left-10 lg:left-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mode-accent">{copy.registrationLabel}</p>
            <p className="mt-2 text-sm font-semibold text-text-primary">{copy.registrationValue}</p>
          </div>
          <img src={content.hero.image} alt={copy.imageAlt} className="relative z-10 max-h-[560px] w-full max-w-[520px] object-contain object-bottom" />
        </motion.div>
      </div>
    </section>
  )
}
