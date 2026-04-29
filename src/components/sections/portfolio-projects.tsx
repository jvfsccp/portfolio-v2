import { ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

import { Reveal } from '@/components/motion/reveal'
import { ProjectCard } from '@/components/sections/project-card'
import { projects } from '@/data/projects'

const PROJECTS_SECTION_ID = 'projetos'
const ALL_PROJECTS_URL = 'https://github.com/jvfsccp?tab=repositories'

export function PortfolioProjects() {
  return (
    <section
      id={PROJECTS_SECTION_ID}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 text-center sm:mb-14" y={20}>
          <h1 className="font-heading text-[2rem] font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Projetos
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-14 bg-border-primary/80"
          />
        </Reveal>

        <Reveal
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          delay={0.06}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-border bg-secondary/75 px-6 text-[0.95rem] font-semibold text-foreground transition-colors duration-200 hover:border-border-primary/40 hover:bg-secondary"
            href={ALL_PROJECTS_URL}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub aria-hidden="true" className="size-4.5" />
            Ver todos os projetos
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
