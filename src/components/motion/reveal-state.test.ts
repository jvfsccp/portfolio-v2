import assert from 'node:assert/strict'
import test from 'node:test'

// Node's test runner resolves the source file directly with type stripping.
// @ts-expect-error importing .ts is intentional in this test.
import { getRevealRenderMode } from './reveal-state.ts'

test('renders static content until client mount completes', () => {
  assert.equal(
    getRevealRenderMode({ isMounted: false, prefersReducedMotion: false }),
    'static',
  )
})

test('renders static content when reduced motion is preferred', () => {
  assert.equal(
    getRevealRenderMode({ isMounted: true, prefersReducedMotion: true }),
    'static',
  )
})

test('enables animation only after mount without reduced motion', () => {
  assert.equal(
    getRevealRenderMode({ isMounted: true, prefersReducedMotion: false }),
    'animated',
  )
})
