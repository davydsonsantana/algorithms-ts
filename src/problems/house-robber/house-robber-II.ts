export function houseRobberII(nums: number[]): number {
  if (nums.length == 0) return 0

  if (nums.length == 1) return nums[0]

  let max1 = rob_simple(nums, 0, nums.length - 2)
  let max2 = rob_simple(nums, 1, nums.length - 1)

  return Math.max(max1, max2)
}

export function rob_simple(nums: number[], start: number, end: number) {
  let t1 = 0
  let t2 = 0

  for (let i = start; i <= end; i++) {
    let temp = t1
    let current = nums[i]
    t1 = Math.max(current + t2, t1)
    t2 = temp
  }

  return t1
}
