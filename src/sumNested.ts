/**
 * caluclates sum of nested arrays
 * @param nestedArrays array of possibly infinitely nested arrays of numbers or numbers
 * @returns the sum of nested arrays
 */

type NumberOrNested = number | NumberOrNested[]

function sumNested(nestedArrays: NumberOrNested[]): number {
  const workStack: NumberOrNested[] = [...nestedArrays];
  let total = 0

  while (workStack[0] !== undefined) {
      let currentNumOrNest = workStack.pop()      

      if (Array.isArray(currentNumOrNest)) {
        workStack.push(...currentNumOrNest)
      } else {
        if (currentNumOrNest) {total += currentNumOrNest}
      }
  }
  
  return total
}

function sumNestedEasy(nestedArrays: NumberOrNested): number {
  const numArray = nestedArrays.toString().split(',').map( str => parseInt(str) )
  return numArray.reduce((a,b) => a + b)
}

// console.log( sumNestedEasy([10, [2, 3, 6], [1, [100, [3, 4], 5]]] ) );

// console.log( sumNested([10, [2, 3, 6], [1, [100, [3, 4], 5]]] ) );

export default sumNested;
