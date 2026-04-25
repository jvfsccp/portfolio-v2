import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa6'

import type { ProjectItem } from '@/data/projects'

type ProjectCardProps = {
  project: ProjectItem
}

function getVisibleStack(stack: readonly string[]): {
  hiddenCount: number
  visible: readonly string[]
} {
  const maxVisible = 4
  const visible = stack.slice(0, maxVisible)

  return {
    visible,
    hiddenCount: Math.max(0, stack.length - maxVisible),
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { hiddenCount, visible } = getVisibleStack(project.stack)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface-raised shadow-[0_12px_34px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:border-border-primary/35">
      <div className="relative h-48 overflow-hidden border-b border-border/70 bg-secondary/65">
        <Image
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          src={project.imageSrc}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-[1.45rem] font-semibold leading-tight text-foreground sm:text-[1.5rem]">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-[0.95rem] leading-7 text-foreground-subtle">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {visible.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-md border border-border/70 bg-secondary/70 px-2 py-1 text-[0.73rem] font-semibold tracking-[0.01em] text-foreground-subtle"
            >
              {tech}
            </span>
          ))}

          {hiddenCount > 0 ? (
            <span className="rounded-md border border-border/70 bg-secondary/70 px-2 py-1 text-[0.73rem] font-semibold tracking-[0.01em] text-foreground-subtle">
              +{hiddenCount}
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.links.map((link) => {
            const Icon = link.type === 'code' ? FaGithub : ArrowUpRight

            return (
              <a
                key={`${project.id}-${link.type}`}
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border/70 bg-surface px-3 text-[0.93rem] font-semibold text-foreground transition-colors duration-200 hover:border-border-primary/45 hover:bg-secondary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" className="size-4" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </article>
  )
}
