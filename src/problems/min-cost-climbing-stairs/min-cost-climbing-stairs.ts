let calculatedCost: number[] = []

export function minCostClimbingStairs(cost: number[]): number {
  if (cost.length == 1) return cost[0]

  calculatedCost[0] = cost[0]
  calculatedCost[1] = cost[1]
  calculatedCost[cost.length] = 0

  for (let i = 2; i < cost.length; i++) {
    if (calculatedCost[i - 2] < calculatedCost[i - 1]) {
      calculatedCost[i] = calculatedCost[i - 2] + cost[i]
    } else {
      calculatedCost[i] = calculatedCost[i - 1] + cost[i]
    }
  }

  return Math.min(
    calculatedCost[cost.length - 1],
    calculatedCost[cost.length - 2]
  )
}
