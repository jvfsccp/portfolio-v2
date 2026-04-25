import { SunMoon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { navigationItems } from '@/data/navigation'

const activeNavigationHref = '#inicio'

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 overflow-x-clip px-3 sm:px-6">
      <div className="mx-auto max-w-[54.5rem] rounded-full border border-border/80 bg-surface-raised/90 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur">
        <div className="flex h-14 items-center px-3">
          <div className="shrink-0 border-r border-border/70 pr-3 sm:pr-4">
            <Link
              aria-label="Voltar para o início"
              className="flex h-9 items-center rounded-full px-4 font-heading text-[1.05rem] font-semibold tracking-[0.02em] text-foreground"
              href="/"
            >
              JV
            </Link>
          </div>

          <nav
            aria-label="Navegação principal"
            className="min-w-0 flex-1 overflow-x-auto px-2 sm:px-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex w-max min-w-full items-center gap-1 md:w-full md:justify-between">
              {navigationItems.map((item) => {
                const isActive = item.href === activeNavigationHref

                return (
                  <li key={item.href}>
                    <a
                      className={[
                        'flex h-9 items-center rounded-xl px-4 text-[0.95rem] font-medium whitespace-nowrap transition-colors',
                        isActive
                          ? 'bg-secondary text-foreground'
                          : 'text-foreground-subtle hover:bg-secondary/70 hover:text-foreground',
                      ].join(' ')}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="shrink-0 border-l border-border/70 pl-3 sm:pl-4">
            <Button
              aria-label="Alternar tema em breve"
              className="rounded-full border border-border bg-surface text-foreground-subtle hover:bg-secondary hover:text-foreground"
              disabled
              size="icon"
              title="Alternancia de tema em breve"
              type="button"
              variant="ghost"
            >
              <SunMoon aria-hidden="true" className="size-4.5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
