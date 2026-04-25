'use client'

import { useEffect, useState } from 'react'

type HeroRotatingTraitsProps = {
  traits: readonly string[]
}

export function HeroRotatingTraits({ traits }: HeroRotatingTraitsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (traits.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % traits.length)
    }, 2200)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [traits])

  const activeTrait = traits[activeIndex] ?? traits[0] ?? ''

  return (
    <div className="flex min-h-16 items-center justify-center">
      <span
        aria-live="off"
        className="font-heading text-4xl text-foreground sm:text-5xl"
      >
        {activeTrait}
      </span>
    </div>
  )
}
