'use client'

import { useEffect, useState } from 'react'

import type { HeroStat } from '@/data/hero'

type HeroAnimatedStatsProps = {
  stats: readonly HeroStat[]
}

export function HeroAnimatedStats({ stats }: HeroAnimatedStatsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (stats.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % stats.length)
    }, 2800)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [stats])

  return (
    <div
      className={`grid gap-5 text-center ${stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}
    >
      {stats.map((item, index) => {
        const isActive = index === activeIndex

        return (
          <div
            key={item.label}
            className={[
              'rounded-2xl border border-transparent px-2 py-3 transition-all duration-800',
              isActive
                ? 'border-border/80 bg-secondary/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                : 'opacity-75',
            ].join(' ')}
          >
            <p className="font-heading text-4xl leading-none text-foreground sm:text-[2.9rem]">
              {item.value}
            </p>
            <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.24em] text-foreground-subtle uppercase">
              {item.label}
            </p>
          </div>
        )
      })}
    </div>
  )
}
