import { analyzeArray } from "./analyzeArray"

const nums = [1,8,3,4,2,6]

test('average', () => {
  expect(analyzeArray(nums).average).toEqual(4)
  expect(analyzeArray(nums).average).toBeGreaterThan(3)
})

test('minimum', () => {
  expect(analyzeArray(nums).min).toEqual(1)
  expect(analyzeArray(nums).min).toBeLessThan(3)
})

test('max', () => {
  expect(analyzeArray(nums).max).toEqual(8)
  expect(analyzeArray(nums).max).toBeGreaterThan(3)
})

test('length', () => {
  expect(analyzeArray(nums).length).toEqual(6)
  expect(analyzeArray(nums).length).toEqual(nums.length)
  expect(analyzeArray(nums).length).toBeGreaterThan(3)
})