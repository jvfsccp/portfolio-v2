import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/joao-victor-fernandes-castro/',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  {
    href: 'https://github.com/jvfsccp',
    label: 'GitHub',
    icon: FaGithub,
  },
] as const

export function BottomFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 px-4 py-6 sm:px-6 sm:py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-heading text-lg font-semibold tracking-[0.02em] text-foreground">
          JV
        </span>

        <p className="text-sm font-heading font-bold text-foreground-subtle">
          &copy; {currentYear} João Victor.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon

            return (
              <a
                key={social.label}
                aria-label={`Abrir ${social.label} de João Victor`}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-surface-raised text-foreground-subtle transition-colors duration-200 hover:border-primary/20 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" className="size-4.5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
