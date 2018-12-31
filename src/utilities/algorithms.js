export default {
js_code: `// Split the array into halves and merge them recursively
function mergeSort (arr) {
if (arr.length === 1) {
// return once we hit an array with a single item
return arr
}

const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
const left = arr.slice(0, middle) // items on the left side
const right = arr.slice(middle) // items on the right side

return merge(
mergeSort(left),
mergeSort(right)
)
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
let result = []
let indexLeft = 0
let indexRight = 0

while (indexLeft < left.length && indexRight < right.length) {
if (left[indexLeft] < right[indexRight]) {
  result.push(left[indexLeft])
  indexLeft++
} else {
  result.push(right[indexRight])
  indexRight++
}
}

return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]`,

pseudocode: `//Code Source: https://www.geeksforgeeks.org/merge-sort/
MergeSort(arr[], l,  r)
If r > l
1. Find the middle point to divide the array into two halves:
middle m = (l+r)/2
2. Call mergeSort for first half:
Call mergeSort(arr, l, m)
3. Call mergeSort for second half:
Call mergeSort(arr, m+1, r)
4. Merge the two halves sorted in step 2 and 3:
Call merge(arr, l, m, r)`
};
