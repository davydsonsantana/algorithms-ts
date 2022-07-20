// Solution with Binary Search

export function longestCommonPrefix(strs: string[]): string {
  if (strs == null || strs.length == 0) {
    return ''
  }
  let minLen = Number.MAX_VALUE
  strs.forEach((e) => {
    minLen = Math.min(minLen, e.length)
  })

  let low: number = 1
  let high: number = minLen

  while (low <= high) {
    let middle: number = (low + high) / 2
    if (isCommonPrefix(strs, middle)) low = middle + 1
    else high = middle - 1
  }
  return strs[0].substring(0, (low + high) / 2)
}

function isCommonPrefix(strs: string[], len: number): boolean {
  let str1 = strs[0].substring(0, len)
  for (let i = 1; i < strs.length; i++) if (!strs[i].startsWith(str1)) return false
  return true
}
