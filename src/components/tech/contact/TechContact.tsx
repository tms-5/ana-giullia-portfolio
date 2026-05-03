import { Button } from '@/components/commons/ui/Button'
import { ArrowRightIcon } from '@/components/commons/icons/ArrowRightIcon'
import { SectionBand } from '@/components/commons/ui/Design'
import type { TechCopy } from '@/content/tech'
import { profileContactLinks } from '@/lib/contact'

export function TechContact({ copy }: { copy: TechCopy }) {
  return (
    <SectionBand id="contact" tone="soft" className="relative overflow-hidden py-11 text-center">
      <h2 className="text-3xl font-light tracking-[-0.04em] text-text-primary">{copy.ctaTitle}</h2>
      <p className="mt-3 text-sm text-text-secondary">{copy.ctaDescription}</p>
      <Button href={profileContactLinks.tech} target="_blank" rel="noreferrer" size="sm" className="mt-5 px-7">{copy.ctaAction} <ArrowRightIcon /></Button>
    </SectionBand>
  )
}
