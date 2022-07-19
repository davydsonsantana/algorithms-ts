const romanSymbol: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

export function romanToInt(s: string): number {
  var result = 0
  var romanNumber = s.split('')

  //Read symbols from right to left
  for (let i = 0; i < s.length; i++) {
    let currentSymbolVal = romanSymbol[s[s.length - 1 - i]]

    //Is last symbol
    if (i == s.length - 1) {
      result += currentSymbolVal
      break
    }

    let nextSymbolVal = romanSymbol[s[s.length - 2 - i]]

    if (nextSymbolVal < currentSymbolVal) {
      result += currentSymbolVal - nextSymbolVal
      i++
    } else {
      result += currentSymbolVal
    }
  }

  return result
}
