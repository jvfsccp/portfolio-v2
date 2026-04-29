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
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Pontifícia Universidade Católica de Goiás',
    level: 'Graduação',
    summary:
      'Formação com foco em desenvolvimento de software, algoritmos, banco de dados, análise de sistemas, desenvolvimento web, mobile e Inteligência Artificial.',
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
    logoAlt: 'Logo da Pontifícia Universidade Católica de Goiás',
  },
  {
    id: 'colegio-expressao',
    degree: 'Base acadêmica para programação e comunicação',
    institution: 'Colégio Expressão',
    level: 'Ensino Médio',
    summary:
      'Concluído aos 17 anos, sendo a minha base inicial principalmente em matemática e inglês para a programação.',
    topics: ['Inglês', 'Matemática', 'Fundamentos', 'Oratória'],
    status: 'Concluído',
    period: '2020 - 2022',
    logoSrc: expressaoLogo,
    logoAlt: 'Logo do Colégio Expressão',
  },
] as const
