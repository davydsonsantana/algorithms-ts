export function landDivisionOnSquares(width: number, height: number): number {
  let smallerEdge = Math.min(width, height)
  let biggestEdge = Math.max(width, height)

  let rest = biggestEdge % smallerEdge

  if (rest > 0) {
    return landDivisionOnSquares(rest, smallerEdge)
  } else {
    return smallerEdge
  }
}
