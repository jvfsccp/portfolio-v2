export type NavigationItem = {
  href: `#${string}`
  label: string
}

export const navigationItems: readonly NavigationItem[] = [
  {
    href: '#inicio',
    label: 'Inicio',
  },
  {
    href: '#experiencia',
    label: 'Experiência',
  },
  {
    href: '#projetos',
    label: 'Projetos',
  },
  {
    href: '#habilidades',
    label: 'Habilidades',
  },
  {
    href: '#educacao',
    label: 'Educação',
  },
  {
    href: '#contato',
    label: 'Contato',
  },
]
