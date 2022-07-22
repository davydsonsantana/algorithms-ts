/*
    O(n)
*/
export function linearSearch(A: string[], term: string): number {
  for (let i = 0; i < A.length; i++) {
    if (A[i] == term) return i
  }
  return -1
}
