export function binarySearch(A: number[], search: number): number {
  let low = 0
  let high = A.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = A[mid]
    if (guess == search) return mid
    if (guess > search) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
