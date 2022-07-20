import { longestCommonPrefixDC } from "@problems/longest-common-prefix/longest-common-prefix-DC"
import { longestCommonPrefixBS } from "@problems/longest-common-prefix/longest-common-prefix-BS"

describe("Problem - longest-common-prefix", () => {
  var cases = [
    [[], ""],
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
  ]

  test.each(cases)(
    "given a list of words as argument, return longest common prefix by divide and conquer",
    (firstArg, secondArg) => {
      let result = longestCommonPrefixDC(firstArg as string[])
      expect(result).toBe(secondArg as string)
    }
  )

  test.each(cases)(
    "given a list of words as argument, return longest common prefix by binary search",
    (firstArg, secondArg) => {
      let result = longestCommonPrefixBS(firstArg as string[])
      expect(result).toBe(secondArg as string)
    }
  )
})
