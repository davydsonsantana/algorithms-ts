import { fibonacciNumber } from "@problems/fibonacci-number/fibonacci-number"

describe("Problem - fibonacci-number", () => {
  const cases = [
    [1, 0],
    [2, 1],
    [3, 1],
    [4, 2],
    [9, 21],
    [12, 89],
  ]

  test.each(cases)(
    "given Fibonacci index %p as argument, return Fibonacci value %p",
    (firstArg, secondArg) => {
      var result = fibonacciNumber(firstArg)
      expect(result).toBe(secondArg)
    }
  )
})
