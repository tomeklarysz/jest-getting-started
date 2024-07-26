export const analyzeArray = (arr) => {
  const average = arr.reduce((prev, cur) => prev + cur) / arr.length
  const min = arr.reduce((min, cur) => min > cur ? cur : min)
  const max = arr.reduce((max, cur) => max < cur ? cur : max)
  const length = arr.reduce(count => count + 1, 0)
  return { average, min, max, length }
}