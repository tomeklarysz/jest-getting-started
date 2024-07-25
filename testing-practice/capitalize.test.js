import { capitalize } from "./capitalize"

test('first character capitalized', () => {
  expect(capitalize('string')).toBe('String')
})