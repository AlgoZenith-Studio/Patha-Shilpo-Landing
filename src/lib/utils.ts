/**
 * Minimal class-name joiner. Filters out falsy values so conditional classes
 * can be written inline. No conflict-resolution (tailwind-merge) is needed
 * here because every call site authors its own non-overlapping classes.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** WCAG relative luminance of a `#rrggbb` colour. */
function luminance(hex: string): number {
  const n = parseInt(hex.replace('#', ''), 16);
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return (
    0.2126 * channel((n >> 16) & 255) +
    0.7152 * channel((n >> 8) & 255) +
    0.0722 * channel(n & 255)
  );
}

/**
 * Foreground for text sitting on `hex`. Several official UN goal colours are
 * too light to carry white text at AA, so the choice is measured rather than
 * assumed.
 */
export function readableOn(hex: string): '#FDFBF7' | '#2B1D12' {
  const l = luminance(hex);
  const onLight = (l + 0.05) / (luminance('#2B1D12') + 0.05);
  const onWhite = (luminance('#FDFBF7') + 0.05) / (l + 0.05);
  return onWhite >= onLight ? '#FDFBF7' : '#2B1D12';
}
