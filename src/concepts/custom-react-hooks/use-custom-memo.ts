let currentMemos: { value: any; deps: unknown[] }[] = [];
let originalMemoIndex = 0;

export const useMemo = <T>(factory: () => T, deps: unknown[] = []): T => {
  const index = originalMemoIndex;
  const prev = currentMemos[index];

  let changed =
    !prev ||
    prev.deps.length !== deps.length ||
    deps.some((d, i) => !Object.is(d, prev.deps[i]));

  if (changed) {
    const value = factory();
    currentMemos[index] = { value, deps };
  }

  originalMemoIndex++;
  return currentMemos[index].value;
};
