// Internal storage for effect tracking
let currentEffects: { deps: unknown[]; cleanup?: () => void; effect: () => void | (() => void) }[] = [];
let originalEffectIndex = 0;

/**
 * Re-implementation of React's useEffect
 *
 * @param effect - The effect callback (can return a cleanup function)
 * @param deps - Dependency array
 */
export function useEffect(effect: () => void | (() => void), deps: unknown[] = []) {
  const index = originalEffectIndex;
  const prev = currentEffects[index];

  const depsChanged =
    !prev ||
    prev.deps.length !== deps.length ||
    deps.some((d, i) => !Object.is(d, prev.deps[i]));

  if (depsChanged) {
    // cleanup previous effect if exists
    if (prev?.cleanup) {
      prev.cleanup();
    }

    const result = effect();

    currentEffects[index] = {
      deps,
      effect,
      cleanup: typeof result === "function" ? result : undefined,
    };
  }

  originalEffectIndex++;
}

/**
 * Call before each render to reset internal effect index.
 */
export function resetEffectIndex() {
  originalEffectIndex = 0;
}

/**
 * Call after rendering to manually run effects if needed (mimics React behavior).
 */
export function runEffects() {
  currentEffects.forEach(({ deps, effect, cleanup }, i) => {
    const result = effect();
    currentEffects[i].cleanup = typeof result === "function" ? result : undefined;
  });
}
