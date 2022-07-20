function getCommonPrefix(str1: string, str2: string): string {
  let result = ''
  let n1 = str1.length,
    n2 = str2.length

  for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
    if (str1[i] != str2[j]) {
      break
    }
    result += str1[i]
  }
  return result
}

function divideAndConquer(A: string[], startIndex: number, endIndex: number): string {
  if (startIndex == endIndex) {
    return A[startIndex]
  }
  let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

  let leftResult = divideAndConquer(A, startIndex, midIndex)
  let rightResult = divideAndConquer(A, midIndex + 1, endIndex)

  return getCommonPrefix(leftResult, rightResult)
}

export function longestCommonPrefix(strs: string[]): string {
  return divideAndConquer(strs, 0, strs.length - 1)
}
