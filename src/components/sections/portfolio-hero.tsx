'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import {
  heroContent,
  heroPrimaryAction,
  heroSecondaryAction,
  heroSocialLinks,
} from '@/data/hero'
import { cn } from '@/lib/utils'

import { HeroHighlightCard } from './hero-highlight-card'

const HERO_SECTION_ID = 'inicio'

function renderHeroName(name: string) {
  return name.split('\n').map((part) => (
    <span key={part} className="block">
      {part}
    </span>
  ))
}

export function PortfolioHero() {
  return (
    <section
      id={HERO_SECTION_ID}
      className="scroll-mt-32 overflow-hidden px-4 pb-12 pt-12 sm:px-6 sm:pt-14"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[24px_24px] opacity-35" />
        <div className="pointer-events-none absolute inset-y-auto left-1/2 top-1/2 size-112 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_38%,transparent_74%)] blur-3xl" />

        <div className="relative grid items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_24.5rem] lg:gap-16">
          <div className="max-w-4xl">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="pl-1 text-sm font-semibold tracking-[0.28em] text-foreground-subtle sm:pl-1.5 sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroContent.greeting}
            </motion.p>

            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 font-heading text-[3rem] font-semibold leading-[0.9] tracking-[-0.04em] text-foreground sm:text-7xl lg:text-[7.15rem]"
              initial={{ opacity: 0, y: 28 }}
              transition={{
                delay: 0.12,
                duration: 0.92,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {renderHeroName(heroContent.name)}
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 max-w-2xl text-[1.6rem] font-heading font-semibold leading-[1.08] text-foreground sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: 0.24,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {heroContent.role}
            </motion.p>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-3xl text-base leading-8 text-foreground-subtle sm:mt-10 sm:text-[1.38rem] sm:leading-9"
              initial={{ opacity: 0, y: 22 }}
              transition={{
                delay: 0.34,
                duration: 0.86,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 22 }}
              transition={{
                delay: 0.46,
                duration: 0.84,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {heroSocialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    aria-label={social.ariaLabel}
                    className="flex size-14 items-center justify-center rounded-full border border-border bg-surface/75 text-foreground-subtle shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-200 hover:border-primary/20 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </a>
                )
              })}
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-14 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              transition={{
                delay: 0.58,
                duration: 0.88,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-13 rounded-2xl px-7 text-base font-semibold shadow-[0_18px_36px_rgba(0,0,0,0.28)]',
                )}
                href={heroPrimaryAction.href}
              >
                {heroPrimaryAction.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>

              <a
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'h-13 rounded-2xl border-border bg-transparent px-7 text-base font-semibold text-foreground-subtle hover:bg-secondary hover:text-foreground',
                )}
                href={heroSecondaryAction.href}
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden="true" className="size-4" />
                {heroSecondaryAction.label}
              </a>
            </motion.div>
          </div>

          <div className="lg:pt-10">
            <HeroHighlightCard />
          </div>
        </div>
      </div>
    </section>
  )
}
