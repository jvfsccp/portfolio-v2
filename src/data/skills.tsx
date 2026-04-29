import {
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Waypoints,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import type { ComponentType } from 'react'
import { FaJava } from 'react-icons/fa6'
import {
  SiBruno,
  SiBun,
  SiCss,
  SiDocker,
  SiDotnet,
  SiDrizzle,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZedindustries,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

import csharpLogo from '@/assets/icons/csharp.png'
import tanstackLogo from '@/assets/icons/tanstack.png'

type SkillIconProps = {
  'aria-hidden'?: boolean
  className?: string
}

type SkillTone = {
  badgeClassName: string
  iconClassName: string
  labelClassName: string
}

function TanStackIcon({ className, ...props }: SkillIconProps) {
  return (
    <Image
      {...props}
      alt="TanStack"
      className={className}
      height={18}
      src={tanstackLogo}
      width={18}
    />
  )
}

function CSharpIcon({ className, ...props }: SkillIconProps) {
  return (
    <Image
      {...props}
      alt="C#"
      className={className}
      height={18}
      src={csharpLogo}
      width={18}
    />
  )
}

export type SkillItem = {
  badgeClassName: string
  icon: ComponentType<SkillIconProps>
  iconClassName?: string
  label: string
  labelClassName?: string
}

export type SkillCategory = {
  icon: ComponentType<SkillIconProps>
  id: string
  items: readonly SkillItem[]
  title: string
}

function withTone(
  label: string,
  icon: ComponentType<SkillIconProps>,
  tone: SkillTone,
  iconClassName?: string,
): SkillItem {
  return {
    label,
    icon,
    badgeClassName: tone.badgeClassName,
    labelClassName: tone.labelClassName,
    iconClassName: iconClassName ?? tone.iconClassName,
  }
}

const tones = {
  blue: {
    badgeClassName:
      'border-[#2b5f9e]/70 bg-[#0f2236] hover:border-[#3d7bd1]/80',
    iconClassName: 'text-[#3b82f6]',
    labelClassName: 'text-[#60a5fa]',
  },
  yellow: {
    badgeClassName:
      'border-[#8d7a1d]/70 bg-[#2b280e] hover:border-[#c7a91f]/80',
    iconClassName: 'text-[#facc15]',
    labelClassName: 'text-[#facc15]',
  },
  violet: {
    badgeClassName:
      'border-[#4b4c88]/70 bg-[#1d1d34] hover:border-[#6d71d8]/80',
    iconClassName: 'text-[#a5b4fc]',
    labelClassName: 'text-[#a5b4fc]',
  },
  cyan: {
    badgeClassName:
      'border-[#1f6b85]/70 bg-[#0d2430] hover:border-[#2aa8d4]/80',
    iconClassName: 'text-[#22d3ee]',
    labelClassName: 'text-[#67e8f9]',
  },
  slate: {
    badgeClassName:
      'border-[#2d3242]/70 bg-[#11141d] hover:border-[#474f68]/80',
    iconClassName: 'text-[#e5e7eb]',
    labelClassName: 'text-[#e5e7eb]',
  },
  indigo: {
    badgeClassName:
      'border-[#3e4499]/70 bg-[#171a39] hover:border-[#6671ff]/80',
    iconClassName: 'text-[#818cf8]',
    labelClassName: 'text-[#818cf8]',
  },
  red: {
    badgeClassName:
      'border-[#7f2631]/70 bg-[#2d1318] hover:border-[#dc3545]/80',
    iconClassName: 'text-[#ef4444]',
    labelClassName: 'text-[#f87171]',
  },
  orange: {
    badgeClassName:
      'border-[#87431f]/70 bg-[#2f1b12] hover:border-[#f97316]/80',
    iconClassName: 'text-[#f97316]',
    labelClassName: 'text-[#fb923c]',
  },
  emerald: {
    badgeClassName:
      'border-[#2d6c46]/70 bg-[#13271c] hover:border-[#22c55e]/80',
    iconClassName: 'text-[#22c55e]',
    labelClassName: 'text-[#4ade80]',
  },
  lime: {
    badgeClassName:
      'border-[#718f2d]/70 bg-[#242c14] hover:border-[#a3e635]/80',
    iconClassName: 'text-[#a3e635]',
    labelClassName: 'text-[#bef264]',
  },
  green: {
    badgeClassName:
      'border-[#2d7f57]/70 bg-[#13261f] hover:border-[#34d399]/80',
    iconClassName: 'text-[#34d399]',
    labelClassName: 'text-[#6ee7b7]',
  },
  rose: {
    badgeClassName:
      'border-[#8a3147]/70 bg-[#2d141d] hover:border-[#f43f5e]/80',
    iconClassName: 'text-[#f43f5e]',
    labelClassName: 'text-[#fb7185]',
  },
  teal: {
    badgeClassName:
      'border-[#2a7b76]/70 bg-[#102625] hover:border-[#14b8a6]/80',
    iconClassName: 'text-[#2dd4bf]',
    labelClassName: 'text-[#5eead4]',
  },
  neutral: {
    badgeClassName:
      'border-border/70 bg-[#141723] hover:border-border-primary/30',
    iconClassName: 'text-[#e5e7eb]',
    labelClassName: 'text-[#e5e7eb]',
  },
} satisfies Record<string, SkillTone>

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'linguagens-core',
    icon: Code2,
    title: 'Linguagens Core',
    items: [
      withTone('TypeScript', SiTypescript, tones.blue),
      withTone('JavaScript', SiJavascript, tones.yellow),
      withTone('Java', FaJava, tones.orange),
      withTone('Python', SiPython, tones.indigo),
      withTone('PHP', SiPhp, tones.violet),
      withTone('C#', CSharpIcon, tones.violet),
    ],
  },
  {
    id: 'frontend',
    icon: MonitorSmartphone,
    title: 'Frontend',
    items: [
      withTone('React', SiReact, tones.cyan),
      withTone('Next.js', SiNextdotjs, tones.neutral),
      withTone('Vite', SiVite, tones.indigo),
      withTone('TailwindCSS', SiTailwindcss, tones.cyan),
      withTone('HTML', SiHtml5, tones.orange),
      withTone('CSS', SiCss, tones.blue),
      withTone('TanStack', TanStackIcon, tones.orange, undefined),
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend',
    items: [
      withTone('Node.js', SiNodedotjs, tones.emerald),
      withTone('Express', SiExpress, tones.neutral),
      withTone('Fastify', SiFastify, tones.slate),
      withTone('NestJS', SiNestjs, tones.rose),
      withTone('Laravel', SiLaravel, tones.red),
      withTone('FastAPI', SiFastapi, tones.teal),
      withTone('.NET', SiDotnet, tones.indigo),
    ],
  },
  {
    id: 'banco-de-dados',
    icon: Database,
    title: 'Banco de Dados',
    items: [
      withTone('PostgreSQL', SiPostgresql, tones.blue),
      withTone('MongoDB', SiMongodb, tones.emerald),
      withTone('MySQL', SiMysql, tones.cyan),
      withTone('Redis', SiRedis, tones.red),
      withTone('Drizzle', SiDrizzle, tones.lime),
      withTone('Prisma', SiPrisma, tones.neutral),
      withTone('Supabase', SiSupabase, tones.green),
      withTone('Firebase', SiFirebase, tones.yellow),
    ],
  },
  {
    id: 'ferramentas',
    icon: Wrench,
    title: 'Ferramentas',
    items: [
      withTone('Git', SiGit, tones.orange),
      withTone('GitHub', SiGithub, tones.neutral),
      withTone('Docker', SiDocker, tones.blue),
      withTone('Figma', SiFigma, tones.rose),
      withTone('Bruno', SiBruno, tones.orange),
      withTone('GraphQL', SiGraphql, tones.violet),
      withTone('Postman', SiPostman, tones.orange),
      withTone('Bun', SiBun, tones.slate),
      withTone('VSCode', VscVscode, tones.blue),
      withTone('Zed', SiZedindustries, tones.neutral),
      withTone('Jest', SiJest, tones.red),
      withTone('REST', Waypoints, tones.teal),
    ],
  },
] as const
