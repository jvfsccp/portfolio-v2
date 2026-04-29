import type { SkillItem } from '@/data/skills'

type SkillBadgeProps = {
  skill: SkillItem
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const Icon = skill.icon

  return (
    <li>
      <div
        className={`group flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:-translate-y-0.5 ${skill.badgeClassName}`}
      >
        <span className="flex size-9 shrink-0 items-center justify-center">
          <Icon
            aria-hidden
            className={`size-4.5 object-contain ${skill.iconClassName ?? 'text-foreground'}`}
          />
        </span>

        <span
          className={`text-sm font-semibold tracking-[0.01em] ${skill.labelClassName ?? 'text-foreground'}`}
        >
          {skill.label}
        </span>
      </div>
    </li>
  )
}
