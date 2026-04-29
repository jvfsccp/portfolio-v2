import type { StaticImageData } from 'next/image'

import expressaoLogo from '@/assets/education/expressao.png'
import pucGoLogo from '@/assets/education/puc-go.png'

export type EducationEntry = {
  degree: string
  id: string
  institution: string
  level: string
  summary: string
  topics: string[]
  status: string
  period: string
  logoSrc: StaticImageData
  logoAlt: string
}

export const educationEntries: readonly EducationEntry[] = [
  {
    id: 'puc-go-ads',
    degree: 'Analise e Desenvolvimento de Sistemas',
    institution: 'Pontificia Universidade Catolica de Goias',
    level: 'Graduacao',
    summary:
      'Formacao com foco em desenvolvimento de software, algoritmos, banco de dados, analise de sistemas, desenvolvimento web, mobile e Inteligencia Artificial.',
    topics: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Spring Boot',
      'Python',
      'Banco de Dados',
      'Estrutura de Dados',
      'Kotlin',
      'Flutter',
    ],
    status: 'Cursando',
    period: '2025 - Presente',
    logoSrc: pucGoLogo,
    logoAlt: 'Logo da Pontificia Universidade Catolica de Goias',
  },
  {
    id: 'colegio-expressao',
    degree: 'Base academica para programacao e comunicacao',
    institution: 'Colegio Expressao',
    level: 'Ensino Medio',
    summary:
      'Concluido aos 17 anos, sendo a minha base inicial principalmente em matematica e ingles para a programacao.',
    topics: ['Ingles', 'Matematica', 'Fundamentos', 'Oratoria'],
    status: 'Concluido',
    period: '2020 - 2022',
    logoSrc: expressaoLogo,
    logoAlt: 'Logo do Colegio Expressao',
  },
] as const
