/*
    F(N) = 0,              if n=0
           1,              if n=1
           F(N-1) + F(N-2)
*/

let fibArr: number[] = []

export function fibonacciNumber(index: number): number {
  if (index === 1) return 0
  if (index === 2) return 1

  if (fibArr[index] != undefined) {
    return fibArr[index]
  } else {
    fibArr[index] = fibonacciNumber(index - 1) + fibonacciNumber(index - 2)
    return fibArr[index]
  }
}
