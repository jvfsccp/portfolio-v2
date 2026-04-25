import type { StaticImageData } from 'next/image'

import agenteTriagemImage from '@/assets/projects/agente-triagem.png'
import awtWebsiteImage from '@/assets/projects/awt-website.png'
import devroastImage from '@/assets/projects/devroast.png'
import devstageImage from '@/assets/projects/devstage.svg'
import hub44Image from '@/assets/projects/hub44.png'
import luccaWebsiteImage from '@/assets/projects/lucca-website.png'

export type ProjectLink = {
  href: string
  label: 'Ver Código' | 'Ver Projeto'
  type: 'code' | 'project'
}

export type ProjectItem = {
  description: string
  id: string
  imageAlt: string
  imageSrc: StaticImageData | string
  links: readonly ProjectLink[]
  stack: readonly string[]
  title: string
}

export const projects: readonly ProjectItem[] = [
  {
    id: 'devroast',
    title: 'DevRoast',
    description:
      'O DevRoast analisa trechos de código com IA e devolve um resultado estruturado com nota, veredito, pontos críticos e sugestão de melhoria. Além da análise individual, a aplicação mantém um leaderboard com os códigos mais "vergonhosos" já enviados.',
    imageAlt: 'Preview do projeto DevRoast',
    imageSrc: devroastImage,
    stack: [
      'Next.js',
      'Tailwind',
      'BaseUI',
      'Shiki',
      'NumberFlow',
      'tRPC',
      'TanStack Query',
      'Drizzle ORM',
      'PostgreSQL',
      'Vercel AI SDK',
      'Gemini',
    ],
    links: [
      {
        type: 'code',
        label: 'Ver Código',
        href: 'https://github.com/jvfsccp/devroast',
      },
    ],
  },
  {
    id: 'devstage-api',
    title: 'Devstage API',
    description:
      'API backend para gerenciamento de inscrições e ranking por indicações em um evento. Este projeto implementa um sistema de referrals para campanhas e eventos.',
    imageAlt: 'Preview do projeto Devstage API',
    imageSrc: devstageImage,
    stack: [
      'Node.js',
      'TypeScript',
      'Fastify',
      'Zod',
      'Swagger',
      'PostgreSQL',
      'Drizzle ORM',
      'Redis',
      'Docker',
    ],
    links: [
      {
        type: 'code',
        label: 'Ver Código',
        href: 'https://github.com/jvfsccp/devstage-api',
      },
    ],
  },
  {
    id: 'agente-triagem-ia',
    title: 'Agente de Triagem com IA',
    description:
      'Sistema de triagem automatizada de atendimento ao cliente utilizando IA para classificar solicitações em Vendas, Suporte ou Financeiro.',
    imageAlt: 'Preview do projeto Agente de Triagem com IA',
    imageSrc: agenteTriagemImage,
    stack: [
      'Node.js',
      'TypeScript',
      'Fastify',
      'Prisma',
      'SQLite',
      'Zod',
      'Swagger',
      'Groq SDK',
      'React',
      'Vite',
    ],
    links: [
      {
        type: 'code',
        label: 'Ver Código',
        href: 'https://github.com/jvfsccp/agente-triagem',
      },
    ],
  },
  {
    id: 'awt-development-website',
    title: 'AWT Development Website',
    description:
      'Site para a AWT Development, ajudando a captar clientes e com SEO otimizado com Next.js.',
    imageAlt: 'Preview do projeto AWT Development Website',
    imageSrc: awtWebsiteImage,
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'next-themes', 'React'],
    links: [
      {
        type: 'project',
        label: 'Ver Projeto',
        href: 'https://www.awtdevelopment.com/',
      },
    ],
  },
  {
    id: 'hub44',
    title: 'Hub44',
    description:
      'Hub44 é uma plataforma de e-commerce criada para centralizar lojas e comércios da Rua 44 em um ambiente digital moderno, conectando lojistas e clientes para divulgação, descoberta e compra online.',
    imageAlt: 'Preview do projeto Hub44',
    imageSrc: hub44Image,
    stack: [
      'React',
      'Vite',
      'Tailwind',
      'Node.js',
      'Fastify',
      'Kafka',
      'RabbitMQ',
      'PostgreSQL',
      'Drizzle ORM',
      'Docker',
    ],
    links: [
      {
        type: 'code',
        label: 'Ver Código',
        href: 'https://github.com/jvfsccp/hub44',
      },
    ],
  },
  {
    id: 'lucca-website',
    title: 'Lucca Website',
    description:
      'Lucca chegou até a AWT Development com o desejo de ter um site com a cara dele, e assim fizemos: um site completo com os trabalhos artísticos e músicas do cliente.',
    imageAlt: 'Preview do projeto Lucca Website',
    imageSrc: luccaWebsiteImage,
    stack: ['Next.js', 'React', 'Tailwind'],
    links: [
      {
        type: 'project',
        label: 'Ver Projeto',
        href: 'https://iamlucca.com',
      },
    ],
  },
]
