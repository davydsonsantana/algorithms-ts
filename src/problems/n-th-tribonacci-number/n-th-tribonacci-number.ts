let tribArr: number[] = [0, 1, 1]

export function tribonacci(n: number): number {
  if (tribArr[n + 2] === undefined) tribonacci(n - 1)
  tribArr[n + 3] = tribArr[n] + tribArr[n + 1] + tribArr[n + 2]

  if (n === 1) return 0
  if (n === 2) return 1
  if (n === 3) return 1

  return tribArr[n - 1]
}
