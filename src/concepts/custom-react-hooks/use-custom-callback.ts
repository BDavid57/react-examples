// Internal cache for useCallback re-implementation
let currentCallbacks: { callback: Function; deps: unknown[] }[] = [];
let originalCallbackIndex = 0;

/**
 * Re-implementation of React's useCallback
 *
 * @template T extends (...args: any[]) => any
 * @param {T} fn - The callback function to memoize.
 * @param {unknown[]} deps - Dependency array.
 * @returns {T} - The memoized callback.
 */
export function useCallback<T extends (...args: any[]) => any>(
  fn: T,
  deps: unknown[] = []
): T {
  const index = originalCallbackIndex;
  const prev = currentCallbacks[index];

  const depsChanged =
    !prev ||
    prev.deps.length !== deps.length ||
    deps.some((d, i) => !Object.is(d, prev.deps[i]));

  if (depsChanged) {
    currentCallbacks[index] = { callback: fn, deps };
  }

  originalCallbackIndex++;
  return currentCallbacks[index].callback as T;
}

/**
 * Reset callback index before rendering (just like React does internally).
 * Call this manually before each render in your system.
 */
export function resetCallbackIndex() {
  originalCallbackIndex = 0;
}
