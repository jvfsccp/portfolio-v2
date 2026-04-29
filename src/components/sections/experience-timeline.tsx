'use client'

import { motion } from 'framer-motion'

import type { ExperienceTimelineCompany } from '@/data/experiences'

import { ExperienceItem } from './experience-item'
import { ExperienceRoleGroup } from './experience-role-group'

type ExperienceTimelineProps = {
  companies: readonly ExperienceTimelineCompany[]
}

export function ExperienceTimeline({ companies }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-border via-border/80 to-border/20 sm:left-4"
        initial={{ opacity: 0, scaleY: 0 }}
        style={{ originY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ amount: 0.2, once: true }}
      />

      <div className="space-y-8 sm:space-y-10">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            className="relative pl-10 sm:pl-12"
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
              className="absolute left-[0.42rem] top-8 block size-2.5 rounded-full border border-border bg-surface shadow-[0_0_0_4px_var(--bg-surface)] sm:left-[0.62rem]"
              initial={{ opacity: 0, scale: 0.6 }}
              transition={{ delay: index * 0.12 + 0.14, duration: 0.44 }}
              viewport={{ amount: 0.18, once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            />

            {company.roles.length > 1 ? (
              <ExperienceRoleGroup company={company} />
            ) : (
              <ExperienceItem company={company} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
