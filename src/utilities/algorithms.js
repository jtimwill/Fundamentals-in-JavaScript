export default { name: "Algorithms", data: [
  {
    id: 0,
    name: "MergeSort",
    language: "js",
    tabs: [
      {
        name: "Pseudocode",
        data:
`// Code Source: https://www.geeksforgeeks.org/merge-sort/
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
      },
      {
        name: "JavaScript",
        data: `// Code Source: https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
// Split the array into halves and merge them recursively
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
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]`
        }
      ]
    },
    {
      id: 1,
      name: "QuickSort",
      language: "js",
      tabs: [{
        name: "Pseudocode",
        data:
`// Source: https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm

// Quick Sort Pivot
Step 1 − Choose the highest index value has pivot
Step 2 − Take two variables to point left and right of the list excluding pivot
Step 3 − left points to the low index
Step 4 − right points to the high
Step 5 − while value at left is less than pivot move right
Step 6 − while value at right is greater than pivot move left
Step 7 − if both step 5 and step 6 does not match swap left and right
Step 8 − if left ≥ right, the point where they met is new pivot

// Quick Sort
Step 1 − Make the right-most index value pivot
Step 2 − partition the array using pivot value
Step 3 − quicksort left partition recursively
Step 4 − quicksort right partition recursively
`
    },
    {
      name: "JavaScript",
      data:
`// Code Source: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

console.log(quicksortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  // var pivot = partitionLomuto(array, left, right); // you can play with both partition
  var pivot = partitionHoare(array, left, right); // you can play with both partition

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if(right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}
// Lomuto partition scheme, it is less efficient than the Hoare partition scheme
function partitionLomuto(array, left, right) {
  var pivot = right;
  var i = left;

  for(var j = left; j < right; j++) {
    if(array[j] <= array[pivot]) {
      swap(array, i , j);
      i = i + 1;
    }
  }
  swap(array, i, j);
  return i;
}
// Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
function partitionHoare(array, left, right) {
  var pivot = Math.floor((left + right) / 2 );

  while(left <= right) {
    while(array[left] < array[pivot]) {
      left++;
    }
    while(array[right] > array[pivot]) {
      right--;
    }
    if(left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
`
    }]
    },
    {
      id: 2,
      name: "Binary Search",
      language: "js",
      tabs: [
        {
          name: "Pseudocode",
          data:
`// Source: https://en.wikipedia.org/wiki/Binary_search_algorithm
function binary_search(A, n, T):
    L := 0
    R := n − 1
    while L <= R:
        m := floor((L + R) / 2)
        if A[m] < T:
            L := m + 1
        else if A[m] > T:
            R := m - 1
        else:
            return m
    return unsuccessful
`
        },
        {
          name: "JavaScript",
          data:
`// Code Source: https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3
function binarySearch (list, value) {
  // initial values for start, middle and end
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}

const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 99)) // 7 -> returns the index of the item
`
        }
      ]
    },
    {
      id: 3,
      name: "Depth-first Search",
      language: "js",
      tabs: [
        {
          name: "Pseudocode",
          data:
`// Source: https://en.wikipedia.org/wiki/Depth-first_search

// Recursive:
1  procedure DFS(G,v):
2      label v as discovered
3      for all edges from v to w in G.adjacentEdges(v) do
4          if vertex w is not labeled as discovered then
5              recursively call DFS(G,w)

// Iterative:
1  procedure DFS-iterative(G,v):
2      let S be a stack
3      S.push(v)
4      while S is not empty
5          v = S.pop()
6          if v is not labeled as discovered:
7              label v as discovered
8              for all edges from v to w in G.adjacentEdges(v) do
9                  S.push(w)
`
        },
        {
          name: "JavaScript",
          data: ``
        }
      ]
    },
    {
      id: 4,
      name: "Breadth-first Search",
      language: "js",
      tabs: [
        {
          name: "Pseudocode",
          data:
`// Source: https://en.wikipedia.org/wiki/Breadth-first_search
def breadth_first_search(problem):
  // a FIFO open_set
  open_set = Queue()

  // an empty set to maintain visited nodes
  closed_set = set()

  // a dictionary to maintain meta information (used for path formation)
  // key -> (parent state, action to reach child)
  meta = dict()

  // initialize
  root = problem.get_root()
  meta[root] = (None, None)
  open_set.enqueue(root)

  // For each node on the current level expand and process, if no children
  // (leaf) then unwind
  while not open_set.is_empty():

    subtree_root = open_set.dequeue()

    // We found the node we wanted so stop and emit a path.
    if problem.is_goal(subtree_root):
      return construct_path(subtree_root, meta)

    // For each child of the current tree process
    for (child, action) in problem.get_successors(subtree_root):

      // The node has already been processed, so skip over it
      if child in closed_set:
        continue

      // The child is not enqueued to be processed, so enqueue this level of
      // children to be expanded
      if child not in open_set:
        meta[child] = (subtree_root, action) # create metadata for these nodes
        open_set.enqueue(child)              # enqueue these nodes

    // We finished processing the root of this subtree, so add it to the closed
    // set
    closed_set.add(subtree_root)

// Produce a backtrace of the actions taken to find the goal node, using the
// recorded meta dictionary
def construct_path(state, meta):
  action_list = list()

  // Continue until you reach root meta data (i.e. (None, None))
  while meta[state][0] is not None:
    state, action = meta[state]
    action_list.append(action)

  action_list.reverse()
  return action_list
`
        },
        {
          name: "JavaScript",
          data: ``
        }
      ]
    }
  ]
};
