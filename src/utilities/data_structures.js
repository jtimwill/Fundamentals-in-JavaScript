export default {
  name: "Data Structures",
  data: [
    {
      id: 0,
      name: "Arrays and Strings",
      language: "js",
      tabs: [
              {
                name: "Question",
                data:
`// Source:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object

// Array JS
let colors = ['red', 'blue']; // Instantiation
colors[0]; //=> First item
colors[colors.length - 1]; //=> Last item
colors.forEach((item, index, array) => { // Loop over array
  console.log(item, index);
});
colors.push('green'); // Add item to end
colors.pop(); // Remove last item
colors.unshift('white'); // Add item to front
colors.shift(); // Remove item from front
color.indexOf('red'); // Find index of item
color.splice(pos, n); // Remove item(s) from index position(s)
colors.slice(); // Shallow copy

// Array Methods (they all appear to mutate the caller)
concat() // joins two arrays and returns a new array.
join(deliminator = ',') // joins all elements of an array into a string.
reverse() // transposes the elements of an array: the first array element
          // becomes the last and the last becomes the first. *Mutates Caller*
sort([compareFunction]) // sorts the elements of an array.
find(callback[, thisArg]) // returns a value in the array, if an element in the
                          // array satisfies the provided testing function.
                          // Otherwise undefined is returned.

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting#String_objects
// String JS
charAt, charCodeAt, codePointAt // Return the character or character code at the
                                // specified position in string.
indexOf, lastIndexOf // Return the position of specified substring in the string
                     // or last position of specified substring, respectively.
startsWith, endsWith, includes // Returns whether or not the string starts, ends
                               // or contains a specified string.
concat // Combines the text of two strings and returns a new string.
fromCharCode, fromCodePoint // Constructs a string from the specified sequence
                            // of Unicode values. This is a method of the String
                            // class, not a String instance.
split // Splits a String object into an array of strings by separating the
      // string into substrings.
slice // Extracts a section of a string and returns a new string.
substring, substr // Return the specified subset of the string, either by
                  // specifying the start and end indexes or the start index and
                  // a length.
match, replace, search //Work with regular expressions.
toLowerCase, toUpperCase // Return the string in all lowercase or all uppercase,
                         // respectively.
normalize // Returns the Unicode Normalization Form of the calling string value.
repeat // Returns a string consisting of the elements of the object repeated the
       // given times.
trim	// Trims whitespace from the beginning and end of the string.
`
              }
            ]
    },
    {
      id: 1,
      name: "Linked List",
      language: "js",
      tabs: [
              {
                name: "Linked List",
                data:
`Source: https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

class Node {
	constructor(value, next, prev) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(value) {
		const node = new Node(value, null, this.head);
		if (this.head) this.head.next = node;
		else this.tail = node;
		this.head = node;
	}

	addToTail(value) {
		const node = new Node(value, this.tail, null);
		if (this.tail) this.tail.prev = node;
		else this.head = node;
		this.tail = node;
	}

	removeHead() {
		if (!this.head) return null;
		const value = this.head.value;
		this.head = this.head.prev;
		if (this.head) this.head.next = null;
		else this.tail = null;
		return value;
	}

	removeTail() {
		if (!this.tail) return null;
		const value = this.tail.value;
		this.tail = this.tail.next;
		if (this.tail) this.tail.prev = null;
		else this.head = null;
		return value;
	}

	search(value) {
		let current = this.head;
		while (current) {
			if (current.value === value) return value;
			current = current.prev;
		}
		return null;
	}

	indexOf(value) {
		const indexes = [];
		let current = this.tail;
		let index = 0;
		while (current) {
			if (current.value === value) indexes.push(index);
			current = current.next;
			index++;
		}
		return indexes;
	}
}

mocha.setup("bdd");
const { assert } = chai;

describe("Linked List", () => {
	it("Should add to head", () => {
		const list = new LinkedList();
		list.addToHead(1);
		list.addToHead(2);
		list.addToHead(3);
		assert.equal(list.tail.prev, null);
		assert.equal(list.tail.value, 1);
		assert.equal(list.tail.next.value, 2);
		assert.equal(list.head.prev.value, 2);
		assert.equal(list.head.value, 3);
		assert.equal(list.head.next, null);
		assert.equal(list.head.prev.prev.value, 1);
		assert.equal(list.tail.next.next.value, 3);
	});

	it("Should add to tail", () => {
		const list = new LinkedList();
		list.addToTail(1);
		list.addToTail(2);
		list.addToTail(3);
		assert.equal(list.tail.prev, null);
		assert.equal(list.tail.value, 3);
		assert.equal(list.tail.next.value, 2);
		assert.equal(list.head.prev.value, 2);
		assert.equal(list.head.value, 1);
		assert.equal(list.head.next, null);
		assert.equal(list.head.prev.prev.value, 3);
		assert.equal(list.tail.next.next.value, 1);
	});

	it("Should remove head", () => {
		const list = new LinkedList();
		list.addToHead(1);
		list.addToHead(2);
		list.addToHead(3);
		assert.equal(list.removeHead(), 3);
		assert.equal(list.head.value, 2);
		assert.equal(list.tail.value, 1);
		assert.equal(list.tail.next.value, 2);
		assert.equal(list.head.prev.value, 1);
		assert.equal(list.head.next, null);
		assert.equal(list.removeHead(), 2);
		assert.equal(list.head.value, 1);
		assert.equal(list.tail.value, 1);
		assert.equal(list.tail.next, null);
		assert.equal(list.head.prev, null);
		assert.equal(list.head.next, null);
		assert.equal(list.removeHead(), 1);
		assert.equal(list.head, null);
		assert.equal(list.tail, null);
	});

	it("Should remove tail", () => {
		const list = new LinkedList();
		list.addToTail(1);
		list.addToTail(2);
		list.addToTail(3);
		assert.equal(list.removeTail(), 3);
		assert.equal(list.head.value, 1);
		assert.equal(list.tail.value, 2);
		assert.equal(list.tail.next.value, 1);
		assert.equal(list.head.prev.value, 2);
		assert.equal(list.tail.prev, null);
		assert.equal(list.removeTail(), 2);
		assert.equal(list.head.value, 1);
		assert.equal(list.tail.value, 1);
		assert.equal(list.tail.next, null);
		assert.equal(list.head.prev, null);
		assert.equal(list.tail.prev, null);
		assert.equal(list.removeTail(), 1);
		assert.equal(list.head, null);
		assert.equal(list.tail, null);
	});

	it("Should search for value", () => {
		const list = new LinkedList();
		list.addToHead(1);
		list.addToHead(2);
		list.addToHead(3);
		assert.equal(list.search(1), 1);
		assert.equal(list.search(2), 2);
		assert.equal(list.search(3), 3);
		assert.equal(list.search(4), null);
	});

	it("Should search for indexes of value", () => {
		const list = new LinkedList();
		list.addToTail(1);
		list.addToTail(2);
		list.addToTail(3);
		list.addToTail(3);
		list.addToTail(1);
		assert.deepEqual(list.indexOf(1), [0, 4]);
		assert.deepEqual(list.indexOf(2), [3]);
		assert.deepEqual(list.indexOf(3), [1, 2]);
		assert.deepEqual(list.indexOf(4), []);
	});
});

mocha.run();
`
              }
            ]
    },
    {
      id: 2,
      name: "Stack",
      language: "js",
      tabs: [
              {
                name: "Stack",
                data:
`Source: https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

class Stack {
	constructor(...items) {
		this.reverse = false;
		this.stack = [...items];
	}

	push(...items) {
		return this.reverse
			? this.stack.unshift(...items)
			: this.stack.push(...items);
	}

	pop() {
		return this.reverse ? this.stack.shift() : this.stack.pop();
	}
}

mocha.setup("bdd");
const { assert } = chai;

describe("Stacks", () => {
	it("Should push items to top of stack", () => {
		const stack = new Stack(4, 5);
		assert.equal(stack.push(1, 2, 3), 5);
		assert.deepEqual(stack.stack, [4, 5, 1, 2, 3]);
	});

	it("Should push items to bottom of stack", () => {
		const stack = new Stack(4, 5);
		stack.reverse = true;
		assert.equal(stack.push(1, 2, 3), 5);
		assert.deepEqual(stack.stack, [1, 2, 3, 4, 5]);
	});

	it("Should pop item from top of stack", () => {
		const stack = new Stack(1, 2, 3);
		assert.equal(stack.pop(), 3);
	});

	it("Should pop item from bottom of stack", () => {
		const stack = new Stack(1, 2, 3);
		stack.reverse = true;
		assert.equal(stack.pop(), 1);
	});
});

mocha.run();
`
              }
            ]
    },
    {
      id: 3,
      name: "Queue",
      language: "js",
      tabs: [
              {
                name: "Queue",
                data:
`Source: https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

class Queue {
	constructor(...items) {
		this.reverse = false;
		this.queue = [...items];
	}

	enqueue(...items) {
		return this.reverse
			? this.queue.push(...items)
			: this.queue.unshift(...items);
	}

	dequeue() {
		return this.reverse ? this.queue.shift() : this.queue.pop();
	}
}

mocha.setup("bdd");
const { assert } = chai;

describe("Queues", () => {
	it("Should enqueue items to the left", () => {
		const queue = new Queue(4, 5);
		assert.equal(queue.enqueue(1, 2, 3), 5);
		assert.deepEqual(queue.queue, [1, 2, 3, 4, 5]);
	});

	it("Should enqueue items to the right", () => {
		const queue = new Queue(4, 5);
		queue.reverse = true;
		assert.equal(queue.enqueue(1, 2, 3), 5);
		assert.deepEqual(queue.queue, [4, 5, 1, 2, 3]);
	});

	it("Should dequeue item from the right", () => {
		const queue = new Queue(1, 2, 3);
		assert.equal(queue.dequeue(), 3);
	});

	it("Should dequeue item from the left", () => {
		const queue = new Queue(1, 2, 3);
		queue.reverse = true;
		assert.equal(queue.dequeue(), 1);
	});
});

mocha.run();
`
              }
            ]
    },
    {
      id: 4,
      name: "Hash Table",
      language: "js",
      tabs: [
              {
                name: "Hash Table",
                data:
`Source: https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}

class Table {
	constructor(size) {
		this.cells = new Array(size);
	}

	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
		return total % this.cells.length;
	}

	insert(key, value) {
		const hash = this.hash(key);
		if (!this.cells[hash]) {
			this.cells[hash] = new Node(key, value);
		} else if (this.cells[hash].key === key) {
			this.cells[hash].value = value;
		} else {
			let node = this.cells[hash];
			while (node.next) {
				if (node.next.key === key) {
					node.next.value = value;
					return;
				}
				node = node.next;
			}
			node.next = new Node(key, value);
		}
	}

	get(key) {
		const hash = this.hash(key);
		if (!this.cells[hash]) return null;
		else {
			let node = this.cells[hash];
			while (node) {
				if (node.key === key) return node.value;
				node = node.next;
			}
			return null;
		}
	}

	getAll() {
		const table = [];
		for (let i = 0; i < this.cells.length; i++) {
			const cell = [];
			let node = this.cells[i];
			while (node) {
				cell.push(node.value);
				node = node.next;
			}
			table.push(cell);
		}
		return table;
	}
}

mocha.setup("bdd");
const { assert } = chai;

const table = new Table(5);
table.insert("baa", 1);
table.insert("aba", 2);
table.insert("aba", 3);
table.insert("aac", 4);
table.insert("aac", 5);

describe("Hash Table", () => {
	it("Should implement hash", () => {
		assert.equal(table.hash("abc"), 4);
	});

	it("Should implement insert", () => {
		assert.equal(table.cells[table.hash("baa")].value, 1);
		assert.equal(table.cells[table.hash("aba")].next.value, 3);
		assert.equal(table.cells[table.hash("aac")].value, 5);
	});

	it("Should implement get", () => {
		assert.equal(table.get("baa"), 1);
		assert.equal(table.get("aba"), 3);
		assert.equal(table.get("aac"), 5);
		assert.equal(table.get("abc"), null);
	});

	it("Should implement getAll", () => {
		assert.deepEqual(table.getAll(), [[], [], [1, 3], [5], []]);
	});
});

mocha.run();
`
              }
            ]
    },
    {
      id: 5,
      name: "Binary Search Tree (Balanced Binary Tree)",
      language: "js",
      tabs: [
              {
                name: "Binary Search Tree",
                data:
`Source: https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

class Tree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value <= this.value) {
			if (!this.left) this.left = new Tree(value);
			else this.left.insert(value);
		} else {
			if (!this.right) this.right = new Tree(value);
			else this.right.insert(value);
		}
	}

	contains(value) {
		if (value === this.value) return true;
		if (value < this.value) {
			if (!this.left) return false;
			else return this.left.contains(value);
		} else {
			if (!this.right) return false;
			else return this.right.contains(value);
		}
	}

	depthFirstTraverse(order, callback) {
		order === "pre" && callback(this.value);
		this.left && this.left.depthFirstTraverse(order, callback);
		order === "in" && callback(this.value);
		this.right && this.right.depthFirstTraverse(order, callback);
		order === "post" && callback(this.value);
	}

	breadthFirstTraverse(callback) {
		const queue = [this];
		while (queue.length) {
			const root = queue.shift();
			callback(root.value);
			root.left && queue.push(root.left);
			root.right && queue.push(root.right);
		}
	}

	getMinValue() {
		if (this.left) return this.left.getMinValue();
		return this.value;
	}

	getMaxValue() {
		if (this.right) return this.right.getMaxValue();
		return this.value;
	}
}

mocha.setup("bdd");
const { assert } = chai;

const tree = new Tree(5);
for (const value of [3, 6, 1, 7, 8, 4, 10, 2, 9]) tree.insert(value);

/*
  5
 3 6
1 4 7
 2   8
		  10
		 9
*/

describe("Binary Search Tree", () => {
	it("Should implement insert", () => {
		assert.equal(tree.value, 5);
		assert.equal(tree.left.value, 3);
		assert.equal(tree.right.value, 6);
		assert.equal(tree.left.left.value, 1);
		assert.equal(tree.right.right.value, 7);
		assert.equal(tree.right.right.right.value, 8);
		assert.equal(tree.left.right.value, 4);
		assert.equal(tree.right.right.right.right.value, 10);
		assert.equal(tree.left.left.right.value, 2);
		assert.equal(tree.right.right.right.right.left.value, 9);
	});

	it("Should implement contains", () => {
		assert.equal(tree.contains(2), true);
		assert.equal(tree.contains(9), true);
		assert.equal(tree.contains(0), false);
		assert.equal(tree.contains(11), false);
	});

	it("Should implement depthFirstTraverse", () => {
		const _pre = [];
		const _in = [];
		const _post = [];
		tree.depthFirstTraverse("pre", value => _pre.push(value));
		tree.depthFirstTraverse("in", value => _in.push(value));
		tree.depthFirstTraverse("post", value => _post.push(value));
		assert.deepEqual(_pre, [5, 3, 1, 2, 4, 6, 7, 8, 10, 9]);
		assert.deepEqual(_in, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		assert.deepEqual(_post, [2, 1, 4, 3, 9, 10, 8, 7, 6, 5]);
	});

	it("Should implement breadthDepthTraverse", () => {
		const result = [];
		tree.breadthFirstTraverse(value => result.push(value));
		assert.deepEqual(result, [5, 3, 6, 1, 4, 7, 2, 8, 10, 9]);
	});

	it("Should implement getMinValue", () => {
		assert.equal(tree.getMinValue(), 1);
	});

	it("Should implement getMaxValue", () => {
		assert.equal(tree.getMaxValue(), 10);
	});
});

mocha.run();
`
              }
            ]
    },
    {
      id: 6,
      name: "Heap",
      language: "js",
      tabs: [
              {
                name: "Heap",
                data:
`Source: http://eloquentjavascript.net/1st_edition/appendix2.html

function BinaryHeap(scoreFunction){
  this.content = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
  push: function(element) {
    // Add the new element to the end of the array.
    this.content.push(element);
    // Allow it to bubble up.
    this.bubbleUp(this.content.length - 1);
  },

  pop: function() {
    // Store the first element so we can return it later.
    var result = this.content[0];
    // Get the element at the end of the array.
    var end = this.content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  },

  remove: function(node) {
    var length = this.content.length;
    // To remove a value, we must search through the array to find
    // it.
    for (var i = 0; i < length; i++) {
      if (this.content[i] != node) continue;
      // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.
      var end = this.content.pop();
      // If the element we popped was the one we needed to remove,
      // we're done.
      if (i == length - 1) break;
      // Otherwise, we replace the removed element with the popped
      // one, and allow it to float up or sink down as appropriate.
      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  },

  size: function() {
    return this.content.length;
  },

  bubbleUp: function(n) {
    // Fetch the element that has to be moved.
    var element = this.content[n], score = this.scoreFunction(element);
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1,
      parent = this.content[parentN];
      // If the parent has a lesser score, things are in order and we
      // are done.
      if (score >= this.scoreFunction(parent))
        break;

      // Otherwise, swap the parent with the current element and
      // continue.
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },

  sinkDown: function(n) {
    // Look up the target element and its score.
    var length = this.content.length,
    element = this.content[n],
    elemScore = this.scoreFunction(element);

    while(true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      // This is used to store the new position of the element,
      // if any.
      var swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.content[child1N],
        child1Score = this.scoreFunction(child1);
        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore)
          swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = this.content[child2N],
        child2Score = this.scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score))
          swap = child2N;
      }

      // No need to swap further, we are done.
      if (swap == null) break;

      // Otherwise, swap and continue.
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};
`
              },
            ]
    },
    {
      id: 7,
      name: "Graphs",
      language: "js",
      tabs: [
              {
                name: "Graphs",
                data:
`Source: https://www.geeksforgeeks.org/implementation-graph-javascript/

/*
In this article, we would be using Adjacency List to represent a graph because
in most cases it has certain advantage over the Adjacency Matrix representation.
*/

// create a graph class
class Graph {
	// defining vertex array and
	// adjacent list
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}

	// functions to be implemented

  // add vertex to the graph
  addVertex(v)
  {
  	// initialize the adjacent list with a
  	// null array
  	this.AdjList.set(v, []);
  }

  // add edge to the graph
  addEdge(v, w)
  {
  	// get the list for vertex v and put the
  	// vertex w denoting edge betweeen v and w
  	this.AdjList.get(v).push(w);

  	// Since graph is undirected,
  	// add an edge from w to v also
  	this.AdjList.get(w).push(v);
  }

  // Prints the vertex and adjacency list
  printGraph()
  {
  	// get all the vertices
  	var get_keys = this.AdjList.keys();

  	// iterate over the vertices
  	for (var i of get_keys)
  {
  		// great the corresponding adjacency list
  		// for the vertex
  		var get_values = this.AdjList.get(i);
  		var conc = "";

  		// iterate over the adjacency list
  		// concatenate the values into a string
  		for (var j of get_values)
  			conc += j + " ";

  		// print the vertex and its adjacency list
  		console.log(i + " -> " + conc);
  	}
  }


  // function to performs BFS
  bfs(startingNode)
  {

  	// create a visited array
  	var visited = [];
  	for (var i = 0; i < this.noOfVertices; i++)
  		visited[i] = false;

  	// Create an object for queue
  	var q = new Queue();

  	// add the starting node to the queue
  	visited[startingNode] = true;
  	q.enqueue(startingNode);

  	// loop until queue is element
  	while (!q.isEmpty()) {
  		// get the element from the queue
  		var getQueueElement = q.dequeue();

  		// passing the current vertex to callback funtion
  		console.log(getQueueElement);

  		// get the adjacent list for current vertex
  		var get_List = this.AdjList.get(getQueueElement);

  		// loop through the list and add the elemnet to the
  		// queue if it is not processed yet
  		for (var i in get_List) {
  			var neigh = get_List[i];

  			if (!visited[neigh]) {
  				visited[neigh] = true;
  				q.enqueue(neigh);
  			}
  		}
  	}
  }

  // Main DFS method
  dfs(startingNode)
  {

  	var visited = [];
  	for (var i = 0; i < this.noOfVertices; i++)
  		visited[i] = false;

  	this.DFSUtil(startingNode, visited);
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited)
  {
  	visited[vert] = true;
  	console.log(vert);

  	var get_neighbours = this.AdjList.get(vert);

  	for (var i in get_neighbours) {
  		var get_elem = get_neighbours[i];
  		if (!visited[get_elem])
  			this.DFSUtil(get_elem, visited);
  	}
  }

}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();

// prints
// BFS
// A B D E C F
console.log("BFS");
g.bfs('A');

// prints
// DFS
// A B C E D F
console.log("DFS");
g.dfs('A'); 
`
              }
            ]
    }
  ]
};
