/**
 * Minimal class-name joiner. Filters out falsy values so conditional classes
 * can be written inline. No conflict-resolution (tailwind-merge) is needed
 * here because every call site authors its own non-overlapping classes.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
