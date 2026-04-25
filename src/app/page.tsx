import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { PortfolioExperience } from '@/components/sections/portfolio-experience'
import { PortfolioHero } from '@/components/sections/portfolio-hero'

const placeholderSections = [
  { id: 'experiencia', title: 'Experiencia' },
  { id: 'projetos', title: 'Projetos' },
  { id: 'habilidades', title: 'Habilidades' },
  { id: 'educacao', title: 'Educacao' },
] as const

type PlaceholderSectionProps = {
  id: (typeof placeholderSections)[number]['id']
  title: (typeof placeholderSections)[number]['title']
}

function PlaceholderSection({ id, title }: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl text-foreground sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-foreground-subtle">
          Secao em preparacao. Em seguida vamos construir o conteudo real.
        </p>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-8 pt-12">
        <PortfolioHero />

        <PortfolioExperience />

        {placeholderSections
          .filter((section) => section.id !== 'experiencia')
          .map((section) => (
            <PlaceholderSection
              key={section.id}
              id={section.id}
              title={section.title}
            />
          ))}
      </main>
      <SiteFooter />
    </>
  )
}
