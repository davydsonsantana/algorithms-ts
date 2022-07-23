import { landDivisionOnSquares } from "@problems/land-division-on-squares/land-division-on-squares"

describe("Problem - land-division-on-squares", () => {
  const cases = [
    [1680, 640, 80],
    [3, 1, 1],
    [10, 2, 2],
  ]

  test.each(cases)(
    "given width %p and height %p as argument, return %p as lot square size",
    (firstArg, secondArg, thirdArg) => {
      var result = landDivisionOnSquares(firstArg, secondArg)
      expect(thirdArg).toBe(result)
    }
  )
})
