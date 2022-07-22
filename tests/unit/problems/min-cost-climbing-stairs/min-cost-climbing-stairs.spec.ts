import { minCostClimbingStairs } from "@problems/min-cost-climbing-stairs/min-cost-climbing-stairs"

describe("Problem - min-cost-climbing-stairs", () => {
  const cases = [
    [[10, 15, 20], 15],
    [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6],
    [[0, 0, 1, 0], 0],
    [[8], 8],
  ]

  test.each(cases)(
    "given stair cost array as argument, return value %p2 as cheaper way",
    (firstArg, secondArg) => {
      var result = minCostClimbingStairs(firstArg as number[])
      expect(result).toBe(secondArg)
    }
  )
})
