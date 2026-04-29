import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { SiFastify, SiNextdotjs, SiNodedotjs, SiReact } from 'react-icons/si'

export type HeroAction = {
  href: string
  label: string
}

export type HeroSocialLink = {
  ariaLabel: string
  href: string
  icon: IconType
  label: string
}

export type HeroStackItem = {
  icon: IconType
  label: string
}

export type HeroStat = {
  label: string
  value: string
}

export type HeroContent = {
  age: string
  description: string
  greeting: string
  location: string
  name: string
  role: string
}

export const heroContent: HeroContent = {
  greeting: 'Ola, me chamo',
  name: 'João\nVictor',
  role: 'Desenvolvedor Full Stack',
  description:
    'Transformando ideias em soluções criativas e escaláveis. Especialista em criar sistemas e aplicações com React, Next.js, Node.js e Fastify. Focado em performance, interfaces modernas e integração com Inteligência Artificial.',
  age: '21',
  location: 'Goiania - GO, Brasil',
}

export const heroPrimaryAction: HeroAction = {
  href: '#projetos',
  label: 'Ver Projetos',
}

export const heroSecondaryAction: HeroAction = {
  href: '/CV_João_Victor_Developer-4.pdf',
  label: 'Baixar CV',
}

export const heroSocialLinks: readonly HeroSocialLink[] = [
  {
    ariaLabel: 'Abrir GitHub de Joao Victor',
    href: 'https://github.com/jvfsccp',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    ariaLabel: 'Abrir LinkedIn de Joao Victor',
    href: 'https://www.linkedin.com/in/joao-victor-fernandes-castro/',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
  },
  {
    ariaLabel: 'Abrir WhatsApp de Joao Victor',
    href: 'https://w.app/emrhso',
    icon: FaWhatsapp,
    label: 'WhatsApp',
  },
]

export const heroStackItems: readonly HeroStackItem[] = [
  {
    icon: SiReact,
    label: 'React',
  },
  {
    icon: SiNextdotjs,
    label: 'Next',
  },
  {
    icon: SiNodedotjs,
    label: 'Node.js',
  },
  {
    icon: SiFastify,
    label: 'Fastify',
  },
]

export const heroStats: readonly HeroStat[] = [
  {
    label: 'Projetos',
    value: '12+',
  },
  {
    label: 'Anos XP',
    value: '2+',
  },
]

export const heroTraits: readonly string[] = [
  'Fullstack',
  'Criativo',
  'Freelancer',
  'Backend',
]
