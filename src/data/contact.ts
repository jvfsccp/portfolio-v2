import { type LucideIcon, Mail, MapPin, Phone } from 'lucide-react'
import type { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

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
  label: string
  href: string
}

export const contactSectionCopy: ContactSectionCopy = {
  title: 'Vamos conversar',
  intro:
    'Substitua estes dados pelos seus canais reais quando a secao de contato for finalizada.',
}

export const contactCards: readonly ContactCard[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'seuemail@exemplo.com',
    href: 'mailto:seuemail@exemplo.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (00) 00000-0000',
    href: 'tel:+5500000000000',
  },
  {
    icon: MapPin,
    label: 'Localizacao',
    value: 'Sua cidade - UF, Brasil',
  },
]

export const socialLinks: readonly SocialLink[] = [
  {
    icon: FaGithub,
    platform: 'GitHub',
    ariaLabel: 'Abrir perfil placeholder do GitHub',
    href: 'https://github.com/seu-usuario',
  },
  {
    icon: FaLinkedin,
    platform: 'LinkedIn',
    ariaLabel: 'Abrir perfil placeholder do LinkedIn',
    href: 'https://www.linkedin.com/in/seu-usuario',
  },
  {
    icon: FaInstagram,
    platform: 'Instagram',
    ariaLabel: 'Abrir perfil placeholder do Instagram',
    href: 'https://www.instagram.com/seu-usuario',
  },
]

export const contactCta: ContactCta = {
  label: 'Enviar mensagem',
  href: 'mailto:seuemail@exemplo.com',
}
