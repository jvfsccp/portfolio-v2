'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { type CSSProperties, type ReactNode, useEffect, useState } from 'react'

import { getRevealRenderMode } from '@/components/motion/reveal-state'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  once?: boolean
  style?: CSSProperties
  y?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  id,
  once = true,
  style,
  y = 24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (
    getRevealRenderMode({
      isMounted,
      prefersReducedMotion: prefersReducedMotion ?? false,
    }) === 'static'
  ) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={cn(className)}
      id={id}
      initial={{ opacity: 0, y }}
      style={style}
      transition={{ delay, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.2, once }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
