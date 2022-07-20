import { romanToInt } from "@problems/roman-to-int/roman-to-int"

describe("Problem - roman_number_to_int", () => {
  const cases = [
    ["III", 3],
    ["LVIII", 58],
    ["MCMXCIV", 1994],
  ]

  test.each(cases)(
    "given roman number %p as argument, return int %p",
    (firstArg, secondArg) => {
      var result = romanToInt(firstArg.toString())
      expect(result).toBe(secondArg)
    }
  )
})
