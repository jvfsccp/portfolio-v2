import { type LucideIcon, Mail, MapPin, Phone } from 'lucide-react'
import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

export type ContactCard = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export type ContactSectionCopy = {
  title: string
  intro: string
}

export type SocialLink = {
  icon: IconType
  platform: string
  ariaLabel: string
  href: string
}

export type ContactCta = {
  ariaLabel: string
  label: string
  href: string
}

export const contactSectionCopy: ContactSectionCopy = {
  title: 'Vamos conversar',
  intro:
    'Estou disponivel para conversar sobre projetos, oportunidades e colaboracoes em desenvolvimento de software.',
}

export const contactCards: readonly ContactCard[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'joaovictorfernandescastro@gmail.com',
    href: 'mailto:joaovictorfernandescastro@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 62 98181-4320',
    href: 'tel:+5562981814320',
  },
  {
    icon: MapPin,
    label: 'Localizacao',
    value: 'Goiania - GO, Brasil',
  },
]

export const socialLinks: readonly SocialLink[] = [
  {
    icon: FaGithub,
    platform: 'GitHub',
    ariaLabel: 'Abrir perfil do GitHub',
    href: 'https://github.com/jvfsccp',
  },
  {
    icon: FaLinkedin,
    platform: 'LinkedIn',
    ariaLabel: 'Abrir perfil do LinkedIn',
    href: 'https://www.linkedin.com/in/joao-victor-fernandes-castro/',
  },
  {
    icon: FaWhatsapp,
    platform: 'WhatsApp',
    ariaLabel: 'Abrir conversa no WhatsApp',
    href: 'https://w.app/emrhso',
  },
]

export const contactCta: ContactCta = {
  ariaLabel: 'Abrir conversa no WhatsApp',
  label: 'Entrar em contato no WhatsApp',
  href: 'https://w.app/emrhso',
}
