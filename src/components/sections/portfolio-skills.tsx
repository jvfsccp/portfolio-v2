import { Reveal } from '@/components/motion/reveal'
import { skillCategories } from '@/data/skills'
import { SkillGroupCard } from './skill-group-card'

const SKILLS_SECTION_ID = 'habilidades'

export function PortfolioSkills() {
  return (
    <section
      id={SKILLS_SECTION_ID}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 text-center sm:mb-14" y={20}>
          <h1 className="font-heading text-[2rem] font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            Habilidades
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-14 bg-border-primary/80"
          />

          <p className="mx-auto mt-6 max-w-3xl text-[0.96rem] leading-7 text-foreground-subtle sm:text-lg sm:leading-8">
            Stack organizada por frentes de trabalho para mostrar, de forma
            direta, as tecnologias que utilizo para construir produtos
            completos.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={
                index === skillCategories.length - 1
                  ? 'lg:col-span-2'
                  : undefined
              }
            >
              <SkillGroupCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
