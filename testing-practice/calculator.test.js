import { Calculator } from "./calculator"

const testCases = [
  [2, 1],
  [2, 2],
  [3, 3],
  [10, 5]
]

test('adding', () => {
  testCases.forEach((t) => {
    expect(Calculator.add(t[0], t[1])).toEqual(t[0] + t[1]);
    expect(Calculator.add(t[0], t[1])).toBeGreaterThan(t[0] + t[1] - 1);
  })
})

test('subtracting', () => {
  testCases.forEach((t) => {
    expect(Calculator.subtract(t[0], t[1])).toEqual(t[0] - t[1]);
    expect(Calculator.subtract(t[0], t[1])).toBeLessThan(t[0] - t[1] + 1);
  })
})

test('dividing', () => {
  testCases.forEach((t) => {
    expect(Calculator.divide(t[0], t[1])).toEqual(t[0] / t[1]);
    expect(Calculator.divide(t[0], t[1])).toBeGreaterThan(t[0] / t[1] - 1);
  })
})