import { Button } from '@/components/commons/ui/Button'
import { ArrowRightIcon } from '@/components/commons/icons/ArrowRightIcon'
import { SectionBand } from '@/components/commons/ui/Design'
import type { OdontoCopy } from '@/content/odonto'
import { profileContactLinks } from '@/lib/contact'
import { BotanicalLine } from '../icons/BotanicalLine'

export function OdontoContact({ copy }: { copy: OdontoCopy }) {
  return (
    <SectionBand id="contact" tone="soft" className="relative overflow-hidden py-11 text-center">
      <BotanicalLine className="absolute -bottom-8 left-9 hidden w-40 text-mode-accent/25 sm:block" />
      <h2 className="text-3xl font-light tracking-[-0.04em] text-text-primary">{copy.ctaTitle}</h2>
      <p className="mt-3 text-sm text-text-secondary">{copy.ctaDescription}</p>
      <Button href={profileContactLinks.odonto} target="_blank" rel="noreferrer" size="sm" className="mt-5 px-7">{copy.heroCta} <ArrowRightIcon /></Button>
    </SectionBand>
  )
}
