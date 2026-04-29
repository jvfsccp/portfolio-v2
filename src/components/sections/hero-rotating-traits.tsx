'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

type HeroRotatingTraitsProps = {
  traits: readonly string[]
}

export function HeroRotatingTraits({ traits }: HeroRotatingTraitsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (traits.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % traits.length)
    }, 3200)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [traits])

  const activeTrait = traits[activeIndex] ?? traits[0] ?? ''

  return (
    <div className="flex min-h-16 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={activeTrait}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          aria-live="off"
          className="font-heading text-4xl text-foreground sm:text-5xl"
          initial={
            prefersReducedMotion
              ? false
              : { filter: 'blur(12px)', opacity: 0, y: 18 }
          }
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeTrait}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
