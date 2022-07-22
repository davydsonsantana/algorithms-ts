import { isValidParentheses } from "@problems/valid-parentheses/valid-parentheses"

describe("Problem - valid-parentheses", () => {
  const cases = [
    ["()", true],
    ["((()(())))", true],
    ["{[()]}", true],
    ["(]", false],
    ["[{]", false],
    ["}[]", false],
  ]

  test.each(cases)(
    "given string '%p' as argument, return %p",
    (firstArg, secondArg) => {
      var result = isValidParentheses(firstArg.toString())
      expect(result).toBe(secondArg)
    }
  )
})
