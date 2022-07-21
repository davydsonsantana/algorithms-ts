import { climbStairs } from "@problems/climbing-stairs/climbing-stairs"

describe("Problem - climbing-stairs", () => {
  const cases = [
    [1, 1],
    [2, 2],
    [5, 8],
    [11, 144],
  ]

  test.each(cases)(
    "given stair steps %p as argument, return value %p as how distinct ways can you climb to the top",
    (firstArg, secondArg) => {
      var result = climbStairs(firstArg)
      expect(result).toBe(secondArg)
    }
  )
})
