import type { StaticImageData } from 'next/image'

import alfaLogo from '@/assets/experiences/alfa.png'
import awtLogo from '@/assets/experiences/awt.jpg'
import ckLabsLogo from '@/assets/experiences/cklabs.jpg'
import ctrlPlayLogo from '@/assets/experiences/ctrlplay.jpg'
import tronLogo from '@/assets/experiences/tron.jpg'

type YearMonth = `${number}-${number}`

export type ExperiencePeriod = {
  start: YearMonth
  end: YearMonth | 'present'
  display: string
}

export type ExperienceRole = {
  id: string
  title: string
  location: string
  contractLabel?: string
  period: ExperiencePeriod
  summary: string
  technologies: string[]
}

export type ExperienceCompany = {
  id: string
  company: string
  logoSrc: StaticImageData
  logoAlt: string
  roles: ExperienceRole[]
}

export type ExperienceTimelineCompany = ExperienceCompany & {
  derivedPeriodDisplay: string
  hasVisibleGap: boolean
}

const PRESENT_PERIOD_TEXT = 'Presente'

const rawExperiences: ExperienceCompany[] = [
  {
    id: 'alfa-termomecanica',
    company: 'Alfa Termomecanica',
    logoSrc: alfaLogo,
    logoAlt: 'Logo da Alfa Termomecanica',
    roles: [
      {
        id: 'estagiario-ti',
        title: 'Estagiario T.I',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2024-02',
          end: '2024-08',
          display: '02/2024 - 08/2024',
        },
        summary:
          'Implementei a parametrizacao de sistemas internos para melhorar confiabilidade e fluxo operacional. Tambem desenvolvi automacoes em Python com integracoes via API e Power Query, reduzindo tarefas manuais e aumentando a eficiencia do time.',
        technologies: [
          'Python',
          'API',
          'Make',
          'ERP',
          'CRM',
          'Excel',
          'Integracoes',
        ],
      },
    ],
  },
  {
    id: 'ctrl-play',
    company: 'Ctrl + Play',
    logoSrc: ctrlPlayLogo,
    logoAlt: 'Logo da Ctrl + Play',
    roles: [
      {
        id: 'instrutor-programacao-estagio',
        title: 'Instrutor de Programacao - Estagio',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2024-08',
          end: '2025-01',
          display: '08/2024 - 01/2025',
        },
        summary:
          'Ministrei aulas de programacao e robotica para criancas e adolescentes com foco em pratica e criacao. Ensinei desenvolvimento web, Python, Arduino e Microbit adaptando o conteudo ao nivel de cada turma para fortalecer pensamento computacional e resolucao de problemas.',
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Python',
          'Arduino',
          'Microbit',
          'Figma',
        ],
      },
    ],
  },
  {
    id: 'ck-labs-development',
    company: 'CK Labs Development',
    logoSrc: ckLabsLogo,
    logoAlt: 'Logo da CK Labs Development',
    roles: [
      {
        id: 'desenvolvedor-jr',
        title: 'Desenvolvedor Jr',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2025-02',
          end: '2025-05',
          display: '02/2025 - 05/2025',
        },
        summary:
          'Desenvolvi interfaces dinamicas com Next.js e Tailwind CSS para entregas modernas e responsivas. Tambem contribui no backend .NET em projetos ASP.NET MVC e assumi a frente do frontend com agilidade, proatividade e autonomia.',
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Next.js',
          'Tailwind CSS',
          'C#',
          '.NET',
          'ASP.NET',
          'ASP.NET MVC',
          'SQL Server',
          'Full Stack',
        ],
      },
      {
        id: 'desenvolvedor-frontend-pj',
        title: 'Desenvolvedor Frontend',
        contractLabel: 'PJ',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2025-11',
          end: '2026-03',
          display: '11/2025 - 03/2026',
        },
        summary:
          'Atuei diretamente no frontend de dois projetos da empresa, sendo responsavel por implementar, analisar e evoluir as entregas. Trabalhei no produto de resolucao escolar e no site institucional, garantindo consistencia visual e manutencao continua.',
        technologies: ['Next.js', 'Tailwind CSS', 'Zustand'],
      },
    ],
  },
  {
    id: 'tron-sistemas',
    company: 'Tron Sistemas',
    logoSrc: tronLogo,
    logoAlt: 'Logo da Tron Sistemas',
    roles: [
      {
        id: 'estagiario-desenvolvimento',
        title: 'Estagiario de Desenvolvimento',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2025-06',
          end: '2026-02',
          display: '06/2025 - 02/2026',
        },
        summary:
          'Contribui em iniciativas de IA e automacao com Python, OpenAI e Node.js, conectando fluxos internos e atendimento em diferentes frentes. Tambem participei da refatoracao de UX do sistema principal, colaborando com times tecnicos e nao tecnicos e liderando entregas de frontend.',
        technologies: [
          'React',
          'TypeScript',
          'JavaScript',
          'Python',
          'FastAPI',
          'Node.js',
          'C#',
          '.NET',
          'PostgreSQL',
          'Prisma',
          'MongoDB',
          'Docker',
          'CI/CD',
          'GitHub Actions',
          'Keycloak',
          'Scrum',
          'Full Stack',
          'AI-powered Systems',
        ],
      },
      {
        id: 'desenvolvedor-jr-i',
        title: 'Desenvolvedor Jr I',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2026-03',
          end: 'present',
          display: '03/2026 - Presente',
        },
        summary:
          'Passei a atuar de forma mais estrategica no desenvolvimento de sistemas web e solucoes com IA, contribuindo de ponta a ponta nas iniciativas. Evoluo produtos internos e APIs para ampliar integracao, eficiencia operacional e geracao de valor para usuarios e clientes.',
        technologies: [
          'React',
          'TypeScript',
          'JavaScript',
          'Python',
          'FastAPI',
          'Node.js',
          'C#',
          '.NET',
          'PostgreSQL',
          'Prisma',
          'MongoDB',
          'Docker',
          'CI/CD',
          'GitHub Actions',
          'Keycloak',
          'Scrum',
          'Full Stack',
          'AI-powered Systems',
          'Vue',
          'PHP',
          'Laravel',
        ],
      },
    ],
  },
  {
    id: 'awt-development',
    company: 'AWT Development',
    logoSrc: awtLogo,
    logoAlt: 'Logo da AWT Development',
    roles: [
      {
        id: 'desenvolvedor-full-stack-cto',
        title: 'Desenvolvedor Full Stack / CTO',
        location: 'Goiania, Goias, Brasil',
        period: {
          start: '2024-12',
          end: 'present',
          display: '12/2024 - Presente',
        },
        summary:
          'Co-fundei a AWT para oferecer consultoria de software com foco em solucoes modernas e escalaveis. Atuo na lideranca tecnica e no desenvolvimento full stack, conduzindo desde estrategia e tomada de decisao ate implementacao e evolucao dos sistemas.',
        technologies: [
          'Next.js',
          'React',
          'Node.js',
          'PostgreSQL',
          'Firebase',
          'Express',
          'C#',
          '.NET',
          'Docker',
          'CI/CD',
          'Estrategia Tecnologica',
          'Tomada de Decisao',
        ],
      },
    ],
  },
]

function toMonthIndex(value: YearMonth): number {
  const [yearText, monthText] = value.split('-')
  const year = Number.parseInt(yearText, 10)
  const month = Number.parseInt(monthText, 10)

  return year * 12 + (month - 1)
}

function toEndMonthIndex(value: YearMonth | 'present'): number {
  if (value === 'present') {
    return Number.MAX_SAFE_INTEGER
  }

  return toMonthIndex(value)
}

function compareRolesByMostRecent(
  a: ExperienceRole,
  b: ExperienceRole,
): number {
  const endDelta = toEndMonthIndex(b.period.end) - toEndMonthIndex(a.period.end)

  if (endDelta !== 0) {
    return endDelta
  }

  return toMonthIndex(b.period.start) - toMonthIndex(a.period.start)
}

function sortRolesByMostRecent(roles: ExperienceRole[]): ExperienceRole[] {
  return [...roles].sort(compareRolesByMostRecent)
}

function hasVisibleGapInRoles(roles: ExperienceRole[]): boolean {
  const oldestToNewest = [...roles].sort(
    (a, b) => toMonthIndex(a.period.start) - toMonthIndex(b.period.start),
  )

  for (let index = 0; index < oldestToNewest.length - 1; index += 1) {
    const currentRole = oldestToNewest[index]
    const nextRole = oldestToNewest[index + 1]

    if (currentRole.period.end === 'present') {
      continue
    }

    const currentEnd = toMonthIndex(currentRole.period.end)
    const nextStart = toMonthIndex(nextRole.period.start)

    if (nextStart - currentEnd > 1) {
      return true
    }
  }

  return false
}

function toDisplayMonth(value: YearMonth): string {
  const [year, month] = value.split('-')

  return `${month}/${year}`
}

function getDerivedPeriodDisplay(roles: ExperienceRole[]): string {
  const oldestToNewest = [...roles].sort(
    (a, b) => toMonthIndex(a.period.start) - toMonthIndex(b.period.start),
  )

  const earliestStart = oldestToNewest[0]?.period.start
  const latestEnd = oldestToNewest.at(-1)?.period.end

  if (!earliestStart || !latestEnd) {
    return ''
  }

  const endText =
    latestEnd === 'present' ? PRESENT_PERIOD_TEXT : toDisplayMonth(latestEnd)

  return `${toDisplayMonth(earliestStart)} - ${endText}`
}

function compareCompaniesByMostRecent(
  a: ExperienceTimelineCompany,
  b: ExperienceTimelineCompany,
): number {
  const aLatestRole = a.roles[0]
  const bLatestRole = b.roles[0]

  const aIsCurrent = aLatestRole.period.end === 'present'
  const bIsCurrent = bLatestRole.period.end === 'present'

  if (aIsCurrent !== bIsCurrent) {
    return aIsCurrent ? -1 : 1
  }

  if (aIsCurrent && bIsCurrent) {
    const currentStartDelta =
      toMonthIndex(bLatestRole.period.start) -
      toMonthIndex(aLatestRole.period.start)

    if (currentStartDelta !== 0) {
      return currentStartDelta
    }
  }

  const latestEndDelta =
    toEndMonthIndex(bLatestRole.period.end) -
    toEndMonthIndex(aLatestRole.period.end)

  if (latestEndDelta !== 0) {
    return latestEndDelta
  }

  return a.company.localeCompare(b.company, 'pt-BR')
}

function toTimelineCompany(
  company: ExperienceCompany,
): ExperienceTimelineCompany {
  const sortedRoles = sortRolesByMostRecent(company.roles)

  return {
    ...company,
    roles: sortedRoles,
    derivedPeriodDisplay: getDerivedPeriodDisplay(sortedRoles),
    hasVisibleGap: hasVisibleGapInRoles(sortedRoles),
  }
}

export const experiences: readonly ExperienceTimelineCompany[] = rawExperiences
  .map(toTimelineCompany)
  .sort(compareCompaniesByMostRecent)
