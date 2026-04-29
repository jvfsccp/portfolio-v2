'use client'

import { BriefcaseBusiness } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Reveal } from '@/components/motion/reveal'
import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { Button } from '@/components/ui/button'
import { experiences } from '@/data/experiences'

const EXPERIENCE_SECTION_ID = 'experiencia'
const INITIAL_VISIBLE_EXPERIENCES = 3

export function PortfolioExperience() {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleExperiences = useMemo(() => {
    if (isExpanded) {
      return experiences
    }

    return experiences.slice(0, INITIAL_VISIBLE_EXPERIENCES)
  }, [isExpanded])

  const hiddenExperiencesCount = Math.max(
    experiences.length - INITIAL_VISIBLE_EXPERIENCES,
    0,
  )

  return (
    <section
      id={EXPERIENCE_SECTION_ID}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center sm:mb-14" y={20}>
          <h1 className="font-heading text-[2rem] font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Experiência
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-14 bg-border-primary/80"
          />
        </Reveal>

        <Reveal className="mb-10 flex items-center gap-3 sm:mb-12" delay={0.06}>
          <span className="inline-flex size-8 items-center justify-center rounded-full border border-border/80 bg-secondary/65 text-foreground-subtle">
            <BriefcaseBusiness aria-hidden="true" className="size-4" />
          </span>
          <h2 className="text-sm font-semibold tracking-[0.22em] text-foreground-subtle uppercase sm:text-[0.92rem]">
            Experiencia Profissional
          </h2>
        </Reveal>

        <ExperienceTimeline companies={visibleExperiences} />

        {hiddenExperiencesCount > 0 ? (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Button
              aria-expanded={isExpanded}
              className="h-12 rounded-xl border border-border bg-secondary/75 px-6 text-[0.95rem] font-semibold text-foreground transition-colors duration-200 hover:border-border-primary/40 hover:bg-secondary"
              onClick={() => setIsExpanded((currentValue) => !currentValue)}
              type="button"
              variant="outline"
            >
              {isExpanded
                ? 'Mostrar menos experiências'
                : `Ver todas as experiências (${hiddenExperiencesCount})`}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
