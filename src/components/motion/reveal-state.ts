type RevealRenderModeInput = {
  isMounted: boolean
  prefersReducedMotion: boolean
}

export function getRevealRenderMode({
  isMounted,
  prefersReducedMotion,
}: RevealRenderModeInput): 'animated' | 'static' {
  if (prefersReducedMotion || !isMounted) {
    return 'static'
  }

  return 'animated'
}
