import { tribonacci } from "@problems/n-th-tribonacci-number/n-th-tribonacci-number"

describe("Problem - fibonacci-number", () => {
  const cases = [
    [1, 0],
    [2, 1],
    [3, 1],
    [4, 2],
    [9, 44],
    [18, 10609],
    [21, 66012],
  ]

  test.each(cases)(
    "given N-th Tribonacci index %p as argument, return Fibonacci value %p",
    (firstArg, secondArg) => {
      var result = tribonacci(firstArg)
      expect(result).toBe(secondArg)
    }
  )
})
