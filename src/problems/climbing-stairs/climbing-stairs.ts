/*
    F(N) = 1,              if n=1
           F(N-1) + F(N-2)
*/

var arrStairs = [1, 1]

export function climbStairs(n: number): number {
  if (n === 1) return 1

  if (arrStairs[n - 1] === undefined) climbStairs(n - 1)
  arrStairs[n] = arrStairs[n - 1] + arrStairs[n - 2]

  return arrStairs[n]
}
