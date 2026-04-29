'use client'

import { motion } from 'framer-motion'

import { Reveal } from '@/components/motion/reveal'
import { EducationItem } from '@/components/sections/education-item'
import { educationEntries } from '@/data/education'

const EDUCATION_SECTION_ID = 'educacao'

export function PortfolioEducation() {
  return (
    <section
      id={EDUCATION_SECTION_ID}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center sm:mb-14" y={20}>
          <h1 className="font-heading text-[2rem] font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Educação
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-14 bg-border-primary/80"
          />
        </Reveal>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-border via-border/80 to-border/20 lg:block"
            initial={{ opacity: 0, scaleY: 0 }}
            style={{ originY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 0.2, once: true }}
            whileInView={{ opacity: 1, scaleY: 1 }}
          />

          <div className="space-y-8 sm:space-y-10">
            {educationEntries.map((education, index) => (
              <motion.div
                key={education.id}
                className="relative lg:pl-12"
                initial={{ opacity: 0, x: 22, y: 20 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.74,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ amount: 0.18, once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[0.63rem] top-8 hidden size-2.5 rounded-full border border-border bg-surface shadow-[0_0_0_4px_var(--bg-surface)] lg:block"
                  initial={{ opacity: 0, scale: 0.6 }}
                  transition={{ delay: index * 0.12 + 0.14, duration: 0.44 }}
                  viewport={{ amount: 0.18, once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                />

                <EducationItem education={education} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
