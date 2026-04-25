import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  contactCards,
  contactCta,
  contactSectionCopy,
  socialLinks,
} from '@/data/contact'

type ContactCardItemProps = {
  href?: string
  icon: (typeof contactCards)[number]['icon']
  label: string
  value: string
}

const contactSectionId = 'contato'

function ContactCardItem({
  href,
  icon: Icon,
  label,
  value,
}: ContactCardItemProps) {
  const content = (
    <Card className="h-full border border-border bg-surface-raised/90 py-0 shadow-[0_24px_64px_rgba(0,0,0,0.32)] transition-colors duration-200 group-hover:border-primary/20 group-hover:bg-secondary/80 group-focus-visible:border-primary/30 group-focus-visible:bg-secondary/80">
      <CardContent className="flex h-full flex-col items-center px-6 py-8 text-center">
        <div className="flex size-16 items-center justify-center rounded-full border border-border bg-secondary text-foreground-subtle shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <Icon className="size-6" aria-hidden="true" />
        </div>

        <div className="mt-6 space-y-2">
          <p className="font-heading text-xl text-foreground">{label}</p>
          <address className="text-sm leading-7 text-foreground-subtle not-italic">
            {value}
          </address>
        </div>
      </CardContent>
    </Card>
  )

  if (!href) {
    return content
  }

  return (
    <a
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
      href={href}
    >
      {content}
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer
      id={contactSectionId}
      className="scroll-mt-32 px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20"
    >
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%),linear-gradient(180deg,rgba(15,15,15,0.98),rgba(8,8,8,0.98))] px-6 py-12 shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:px-10 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl text-foreground sm:text-5xl">
            {contactSectionCopy.title}
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-foreground-subtle to-transparent" />

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-foreground-subtle sm:text-lg">
            {contactSectionCopy.intro}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {contactCards.map((card) => (
            <li key={card.label} className="h-full list-none">
              <ContactCardItem
                href={card.href}
                icon={card.icon}
                label={card.label}
                value={card.value}
              />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-8">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <li key={social.platform} className="list-none">
                  <a
                    aria-label={social.ariaLabel}
                    className="flex size-14 items-center justify-center rounded-full border border-border bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-200 hover:border-primary/20 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
                    href={social.href}
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-foreground-subtle"
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <Button
            className="h-12 rounded-full border border-primary/10 bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_36px_rgba(0,0,0,0.32)] hover:bg-primary/90"
            nativeButton={false}
            render={
              <a href={contactCta.href}>
                <span className="sr-only">{contactCta.label}</span>
              </a>
            }
            size="lg"
          >
            {contactCta.label}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
