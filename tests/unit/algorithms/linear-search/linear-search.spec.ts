import { linearSearch } from "@algorithms/linear-search/linear-search"

describe("Algorithm - valid-parentheses", () => {
  const cases = [
    [["A", "B", "C", "D", "E"], "E", 4],
    [["A", "B", "C", "D", "E"], "F", -1],
  ]

  test.each(cases)(
    "given string '%p' as argument, return %p",
    (A, term, expectedResult) => {
      let result = linearSearch(A as string[], term as string)
      expect(result).toBe(expectedResult)
    }
  )
})
