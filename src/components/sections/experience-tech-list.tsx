type ExperienceTechListProps = {
  technologies: readonly string[]
}

export function ExperienceTechList({ technologies }: ExperienceTechListProps) {
  return (
    <ul
      className="mt-5 flex flex-wrap gap-2"
      aria-label="Tecnologias utilizadas"
    >
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full border border-border/80 bg-secondary/55 px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-foreground-subtle"
        >
          {technology}
        </li>
      ))}
    </ul>
  )
}
