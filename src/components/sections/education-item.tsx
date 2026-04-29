import { Circle } from 'lucide-react'
import Image from 'next/image'

import { ExperienceTechList } from '@/components/sections/experience-tech-list'
import type { EducationEntry } from '@/data/education'

type EducationItemProps = {
  education: EducationEntry
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="relative grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-8">
      <div className="lg:pt-8">
        <p className="font-heading text-4xl font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem]">
          {education.period}
        </p>
      </div>

      <article className="rounded-[2rem] border border-border/80 bg-surface-raised/70 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:p-7">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-secondary/70 p-2.5 sm:size-20">
            <Image
              alt={education.logoAlt}
              className="h-full w-full rounded-xl object-contain"
              src={education.logoSrc}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-heading font-semibold leading-tight text-foreground sm:text-[1.35rem]">
                  {education.institution}
                </h3>

                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground sm:text-[0.95rem]">
                  <span>{education.level}</span>
                  <Circle aria-hidden="true" className="size-1 fill-current" />
                  <span>{education.degree}</span>
                </p>
              </div>

              <span className="inline-flex shrink-0 rounded-full border border-border-primary/20 bg-secondary/70 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.09em] text-foreground-subtle uppercase">
                {education.status}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7.5 text-foreground-subtle sm:text-[0.97rem]">
          {education.summary}
        </p>

        <ExperienceTechList technologies={education.topics} />
      </article>
    </div>
  )
}
