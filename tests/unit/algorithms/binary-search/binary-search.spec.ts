import { binarySearch } from "@algorithms/binary-search/binary-search"

describe("Algorithm - valid-parentheses", () => {
  const cases = [
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 9],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 10], 9, -1],
    [[0, 9, 15, 35, 95, 125, 191], 191, 6],
  ]

  test.each(cases)(
    "given an array os numbers as argument, return matched index or -1 if not found",
    (A, search, expectedResult) => {
      let result = binarySearch(A as number[], search as number)
      expect(result).toBe(expectedResult)
    }
  )
})
