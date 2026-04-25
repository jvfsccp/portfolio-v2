import { MapPin } from 'lucide-react'

import { heroContent, heroStackItems, heroStats, heroTraits } from '@/data/hero'

import { HeroAnimatedStats } from './hero-animated-stats'

import { HeroRotatingTraits } from './hero-rotating-traits'

export function HeroHighlightCard() {
  return (
    <aside className="w-full max-w-[24.5rem] rounded-[2rem] border border-border/80 bg-[linear-gradient(180deg,rgba(12,12,12,0.96),rgba(8,8,8,0.98))] px-8 py-10 shadow-[0_28px_60px_rgba(0,0,0,0.36)] backdrop-blur">
      <div className="flex items-center justify-center gap-5 text-[1.8rem] text-foreground-subtle">
        {heroStackItems.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.label}
              className="flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-secondary/55"
              title={item.label}
            >
              <Icon aria-hidden="true" />
              <span className="sr-only">{item.label}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="font-heading text-7xl leading-none text-foreground sm:text-[5.5rem]">
          {heroContent.age}
        </p>
        <p className="mt-4 text-sm font-semibold tracking-[0.28em] text-foreground-subtle uppercase">
          anos
        </p>
      </div>

      <div className="mt-7 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-subtle shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <MapPin aria-hidden="true" className="size-4" />
          <span>{heroContent.location}</span>
        </div>
      </div>

      <div className="mt-8 border-t border-border/70 pt-8">
        <HeroAnimatedStats stats={heroStats} />
      </div>

      <div className="mt-10 border-t border-border/70 pt-10">
        <HeroRotatingTraits traits={heroTraits} />
      </div>
    </aside>
  )
}
