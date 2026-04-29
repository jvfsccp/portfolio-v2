import type { SkillCategory } from '@/data/skills'

import { SkillBadge } from './skill-badge'

type SkillGroupCardProps = {
  category: SkillCategory
}

export function SkillGroupCard({ category }: SkillGroupCardProps) {
  const Icon = category.icon

  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.015)_100%)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-7">
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_42%,transparent_72%)] blur-2xl" />

      <div className="relative flex items-center gap-4 border-b border-border/60 pb-5">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-secondary/70 text-foreground-subtle">
          <Icon aria-hidden className="size-5" />
        </span>

        <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
          {category.title}
        </h3>
      </div>

      <ul className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {category.items.map((skill) => (
          <SkillBadge key={skill.label} skill={skill} />
        ))}
      </ul>
    </article>
  )
}
