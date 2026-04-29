'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, SunMoon, X } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useId, useState } from 'react'

import { Button } from '@/components/ui/button'
import { navigationItems } from '@/data/navigation'

const activeNavigationHref = '#inicio'

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()
  const { resolvedTheme, setTheme } = useTheme()

  function handleMobileMenuToggle() {
    setIsMobileMenuOpen((currentValue) => !currentValue)
  }

  function handleMobileLinkClick() {
    setIsMobileMenuOpen(false)
  }

  function handleThemeToggle() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-4 z-50 overflow-x-clip px-3 sm:px-6">
      <div className="mx-auto max-w-[54.5rem]">
        <div className="rounded-[1.75rem] border border-border/80 bg-surface-raised/90 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur">
          <div className="flex h-14 items-center gap-2 px-3 sm:px-4">
            <Link
              aria-label="Voltar para o início"
              className="flex h-9 shrink-0 items-center rounded-full px-2 font-heading text-[1.05rem] font-semibold tracking-[0.02em] text-foreground sm:px-4"
              href="/"
            >
              JV
            </Link>

            <nav
              aria-label="Navegação principal"
              className="hidden min-w-0 flex-1 overflow-x-auto px-2 sm:px-3 md:block [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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

            <div className="ml-auto flex shrink-0 items-center gap-2">
              <Button
                aria-label="Alternar tema"
                className="rounded-xl border border-border bg-surface text-foreground-subtle hover:bg-secondary hover:text-foreground"
                onClick={handleThemeToggle}
                size="icon"
                title="Alternar tema"
                type="button"
                variant="ghost"
              >
                <SunMoon aria-hidden="true" className="size-4.5" />
              </Button>

              <Button
                aria-controls={mobileMenuId}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                className="rounded-xl border border-border bg-surface text-foreground-subtle hover:bg-secondary hover:text-foreground md:hidden"
                onClick={handleMobileMenuToggle}
                size="icon"
                type="button"
                variant="ghost"
              >
                {isMobileMenuOpen ? (
                  <X aria-hidden="true" className="size-4.5" />
                ) : (
                  <Menu aria-hidden="true" className="size-4.5" />
                )}
              </Button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isMobileMenuOpen ? (
              <motion.div
                animate={{ height: 'auto', opacity: 1 }}
                className="border-t border-border/70 px-2 pb-2 pt-2 md:hidden"
                id={mobileMenuId}
                initial={{ height: 0, opacity: 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="overflow-hidden rounded-[1.35rem] border border-border/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(245,244,239,0.98)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(8,8,8,0.92)_100%)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="border-b border-border/60 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_42%,transparent_100%)] px-4 py-3">
                    <span className="text-sm font-semibold tracking-[0.18em] text-foreground-subtle uppercase">
                      Menu
                    </span>
                  </div>

                  <nav aria-label="Navegação mobile" className="px-2 py-2">
                    <ul className="space-y-1">
                      {navigationItems.map((item, index) => {
                        const isActive = item.href === activeNavigationHref

                        return (
                          <motion.li
                            key={item.href}
                            animate={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -14 }}
                            transition={{ delay: index * 0.07, duration: 0.32 }}
                          >
                            <a
                              className={[
                                'flex min-h-11 items-center rounded-xl px-3.5 text-[0.98rem] font-medium transition-colors',
                                isActive
                                  ? 'border border-border/70 bg-secondary text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'
                                  : 'text-foreground-subtle hover:bg-secondary/70 hover:text-foreground',
                              ].join(' ')}
                              href={item.href}
                              onClick={handleMobileLinkClick}
                            >
                              {item.label}
                            </a>
                          </motion.li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
