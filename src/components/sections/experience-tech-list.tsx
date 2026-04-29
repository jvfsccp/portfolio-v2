'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'

type ExperienceTechListProps = {
  technologies: readonly string[]
}

const MOBILE_VISIBLE_TECHS = 9

export function ExperienceTechList({ technologies }: ExperienceTechListProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleTechnologies = useMemo(() => {
    if (isExpanded) {
      return technologies
    }

    return technologies.slice(0, MOBILE_VISIBLE_TECHS)
  }, [isExpanded, technologies])

  const hiddenTechnologiesCount = Math.max(
    technologies.length - MOBILE_VISIBLE_TECHS,
    0,
  )

  return (
    <div className="mt-5">
      <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
        {visibleTechnologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-border/80 bg-secondary/55 px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-foreground-subtle"
          >
            {technology}
          </li>
        ))}

        {!isExpanded
          ? technologies.slice(MOBILE_VISIBLE_TECHS).map((technology) => (
              <li
                key={`${technology}-desktop`}
                className="hidden rounded-full border border-border/80 bg-secondary/55 px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-foreground-subtle md:list-item"
              >
                {technology}
              </li>
            ))
          : null}
      </ul>

      {hiddenTechnologiesCount > 0 ? (
        <button
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/45 px-3.5 py-2 text-sm font-medium text-foreground-subtle transition-colors duration-200 hover:border-primary/20 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 md:hidden"
          onClick={() => setIsExpanded((currentValue) => !currentValue)}
          type="button"
        >
          {isExpanded ? (
            <ChevronUp aria-hidden="true" className="size-4" />
          ) : (
            <ChevronDown aria-hidden="true" className="size-4" />
          )}
          {isExpanded
            ? 'Ver menos techs'
            : `Ver todas as techs (+${hiddenTechnologiesCount})`}
        </button>
      ) : null}
    </div>
  )
}
