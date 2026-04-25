import { CalendarDays, MapPin } from 'lucide-react'
import Image from 'next/image'

import type { ExperienceTimelineCompany } from '@/data/experiences'

import { ExperienceTechList } from './experience-tech-list'

type ExperienceItemProps = {
  company: ExperienceTimelineCompany
}

export function ExperienceItem({ company }: ExperienceItemProps) {
  const role = company.roles[0]

  return (
    <article className="rounded-3xl border border-border/80 bg-surface-raised/70 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:p-7">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-secondary/70 p-2.5 sm:size-16">
          <Image
            alt={company.logoAlt}
            className="h-full w-full rounded-xl object-contain"
            src={company.logoSrc}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold tracking-[0.02em] text-foreground-subtle">
            {company.company}
          </p>

          <h3 className="mt-1 text-xl font-heading font-semibold leading-tight text-foreground sm:text-[1.35rem]">
            {role.title}
            {role.contractLabel ? (
              <span className="ml-2 rounded-full border border-border/80 bg-secondary/55 px-2 py-0.5 text-[0.63rem] font-semibold tracking-[0.09em] text-foreground-subtle uppercase">
                {role.contractLabel}
              </span>
            ) : null}
          </h3>

          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground sm:text-[0.95rem]">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" className="size-3.5" />
              {role.period.display}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="size-3.5" />
              {role.location}
            </span>
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7.5 text-foreground-subtle sm:text-[0.97rem]">
        {role.summary}
      </p>

      <ExperienceTechList technologies={role.technologies} />
    </article>
  )
}
