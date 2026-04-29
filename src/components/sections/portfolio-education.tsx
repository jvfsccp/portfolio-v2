import { GraduationCap } from 'lucide-react'

import { EducationItem } from '@/components/sections/education-item'
import { educationEntries } from '@/data/education'

const EDUCATION_SECTION_ID = 'educacao'

export function PortfolioEducation() {
  return (
    <section
      id={EDUCATION_SECTION_ID}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center sm:mb-14">
          <h1 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Educação
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-14 bg-border-primary/80"
          />
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-border via-border/80 to-border/20 lg:block"
          />

          <div className="space-y-8 sm:space-y-10">
            {educationEntries.map((education) => (
              <div key={education.id} className="relative lg:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-[0.63rem] top-8 hidden size-2.5 rounded-full border border-border bg-surface shadow-[0_0_0_4px_rgba(8,8,8,0.96)] lg:block"
                />

                <EducationItem education={education} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
