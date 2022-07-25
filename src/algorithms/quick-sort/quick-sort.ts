export function quicksort(A: number[], p: number, r: number): number[] {
  if (p < r) {
    let q = partition(A, p, r)
    quicksort(A, p, q - 1)
    quicksort(A, q + 1, r)
  }
  return A
}

function partition(A: number[], p: number, r: number): number {
  let x = A[r] // Pivot
  let i = p - 1 // Highest index into the low side
  for (let j = p; j <= r - 1; j++) {
    if (A[j] <= x) {
      i += 1
      let tmp = A[i]
      A[i] = A[j]
      A[j] = tmp
    }
  }

  let tmp = A[i + 1]
  A[i + 1] = A[r]
  A[r] = tmp

  return i + 1
}
