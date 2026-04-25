import type { ExperienceTimelineCompany } from '@/data/experiences'

import { ExperienceItem } from './experience-item'
import { ExperienceRoleGroup } from './experience-role-group'

type ExperienceTimelineProps = {
  companies: readonly ExperienceTimelineCompany[]
}

export function ExperienceTimeline({ companies }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-border via-border/80 to-border/20 sm:left-4"
      />

      <div className="space-y-8 sm:space-y-10">
        {companies.map((company) => (
          <div key={company.id} className="relative pl-10 sm:pl-12">
            <span
              aria-hidden="true"
              className="absolute left-[0.42rem] top-8 block size-2.5 rounded-full border border-border bg-surface shadow-[0_0_0_4px_rgba(8,8,8,0.96)] sm:left-[0.62rem]"
            />

            {company.roles.length > 1 ? (
              <ExperienceRoleGroup company={company} />
            ) : (
              <ExperienceItem company={company} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
