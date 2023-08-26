import { clamp } from './clamp'

test('clamps a value between a minimum and maximum value', () => {
  expect(clamp(1, 2, 3)).toBe(2)
  expect(clamp(2, 2, 3)).toBe(2)
  expect(clamp(3, 2, 3)).toBe(3)
  expect(clamp(4, 2, 3)).toBe(3)
})
