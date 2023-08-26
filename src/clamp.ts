/**
 * Clamps a value between a minimum and maximum value.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
