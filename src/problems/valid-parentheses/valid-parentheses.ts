export function isValidParentheses(s: string): boolean {
  let splitedString: string[] = s.split("")
  let arrStack: string[] = []

  if (isCloseSymbol(splitedString[0])) return false
  arrStack.push(splitedString[0])

  for (let i = 1; i < splitedString.length; i++) {
    if (isCloseSymbol(splitedString[i])) {
      if (
        arrStack[arrStack.length - 1] === getOpenSymbol(splitedString[i]) &&
        arrStack.length > 0
      ) {
        arrStack.pop()
      } else {
        return false
      }
    } else {
      arrStack.push(splitedString[i])
    }
  }

  return true
}

function isCloseSymbol(symbol: string): boolean {
  return !isOpenSymbol(symbol)
}

function isOpenSymbol(symbol: string): boolean {
  if (symbol == "(" || symbol == "[" || symbol == "{") {
    return true
  } else {
    return false
  }
}

function getOpenSymbol(symbol: string): string {
  if (symbol === ")") {
    return "("
  } else if (symbol === "]") {
    return "["
  } else {
    return "{"
  }
}
