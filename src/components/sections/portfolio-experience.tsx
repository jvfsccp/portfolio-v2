import { BriefcaseBusiness } from 'lucide-react'

import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { experiences } from '@/data/experiences'

const EXPERIENCE_SECTION_ID = 'experiencia'

export function PortfolioExperience() {
  return (
    <section
      id={EXPERIENCE_SECTION_ID}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center sm:mb-14">
          <h1 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Experiência
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-14 bg-border-primary/80"
          />
        </div>

        <div className="mb-10 flex items-center gap-3 sm:mb-12">
          <span className="inline-flex size-8 items-center justify-center rounded-full border border-border/80 bg-secondary/65 text-foreground-subtle">
            <BriefcaseBusiness aria-hidden="true" className="size-4" />
          </span>
          <h2 className="text-sm font-semibold tracking-[0.22em] text-foreground-subtle uppercase sm:text-[0.92rem]">
            Experiencia Profissional
          </h2>
        </div>

        <ExperienceTimeline companies={experiences} />
      </div>
    </section>
  )
}
