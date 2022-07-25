export function quicksort(
  arr: number[],
  startIndex: number,
  endIndex: number
): number[] {
  if (startIndex < endIndex) {
    let q = partition(arr, startIndex, endIndex)
    quicksort(arr, startIndex, q - 1)
    quicksort(arr, q + 1, endIndex)
  }
  return arr
}

function partition(
  arr: number[],
  startIndex: number,
  endIndex: number
): number {
  let pivot = arr[endIndex]
  let highestIndexLowSide = startIndex - 1 // Highest index into the low side
  for (let j = startIndex; j <= endIndex - 1; j++) {
    if (arr[j] <= pivot) {
      highestIndexLowSide += 1
      let tmp = arr[highestIndexLowSide]
      arr[highestIndexLowSide] = arr[j]
      arr[j] = tmp
    }
  }

  let tmp = arr[highestIndexLowSide + 1]
  arr[highestIndexLowSide + 1] = arr[endIndex]
  arr[endIndex] = tmp

  return highestIndexLowSide + 1
}
