export default {
  name: "Paradigms",
  data: [
    {
      id: 0,
      name: "Divide and Conquer (Recursion)",
      language: "markdown",
      tabs: [
        {
          image_src: "https://acrocontext.files.wordpress.com/2014/01/master-method.png",
          name: "Question",
          data:
`Source: http://www.timroughgarden.org/videos.html

◦	Divide & conquer (see Part I) 
  ▪	Canonical example: MergeSort 
  ▪	Technique: 
    ▪	Divide problem into smaller subproblems 
    ▪	Solve subproblems recursively 
    ▪	Combine the results into a solution of the original problem 

Algorithms
	•	MergeSort 
	•	Strassen  (matrix multiplication)

Problems:
	•	Sorting 
	•	Number of inversions 
	•	Matrix Multiplication 
	•	Closest Pair 

The Master Method
	•	Mathematical tool for analyzing the runtime of divide and conquer algorithms 
	  ◦	A “black box” for solving recurrences 
	  ◦	Assumption: all subproblems have equal size 
	  ◦	Note: there are more general forms of the master method that can be used to solve more recurrence problem types (we cover most) 
	•	Recurrence: Express T(n) in terms of running time of recursive calls 
	  1. Base Case: the running time when there is no further recursion 
	     1. T(n) ≤ a constant for all sufficiently small n 
	  2. For all Larger n: the running time of work done by recursive calls + work done outside of recursive calls 
	     a. T(n) ≤ aT(n/b) + f(n) 
￼       * See Image *
    	 b. Where: 
    	    1. a = number of recursive calls / rate of subproblem proliferation 
    	    2. b = input size shrinkage factor 
    	    3. d = exponent in running time of “combine step” 
    	    4. bd = rate of shrinkage per subproblem / rate of work shrinkage 
    	    5. [a, b, d, are constants (independent of n)] 
`
        }
      ]
    },
    {
      id: 1,
      name: "Randomized Algorithms",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.timroughgarden.org/videos.html

◦	Randomized algorithms (touched in Part I) 
  ▪	Canonical example: QuickSort 
  ▪	Technique 
    ▪	Have your code make random choices to create simpler, more practical and
      more elegant solutions 

Algorithms:
	•	QuickSort
	•	RSelect
	•	DSelect
	•	BucketSort
	•	CountingSort
	•	RadixSort

Problems:
	•	Linear Time Selection (Randomized Selection)
	•	Linear Time Selection (Deterministic Selection)
`
        }
      ]
    },
    {
      id: 2,
      name: "Greedy Algorithms",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.timroughgarden.org/videos.html

◦	Greedy algorithms 
  ▪	Canonical Example: Dijkstra’s shortest path algorithm 
  ▪	Technique: Algorithms that iteratively make myopic decisions 
    ▪ By myopic, he means that is seems like a good idea at the time 

DANGER: Most greedy algorithms are NOT correct
	•	Especially if you proposed it
	•	Your greedy heuristic is probably nothing more than a heuristic (unreliable)

Algorithms:
  ▪	Dijkstra Shortest Path + heaps
  ▪	Prim's MST + heaps
  ▪	Kruskal's MST + union-find
  ▪	State-of-the-Art MST
  ▪	Huffman's + heaps (or 2 queues)

Problems:
	•	Single Source Shortest Paths
	•	Optimal Caching
	•	Scheduling Shared Resources
	•	Minimum Spanning Trees (Undirected)
	•	Max-Spacing k-Clusterings
	•	Huffman Codes as Trees
`
        }
      ]
    },
    {
      id: 3,
      name: "Dynamic Programming",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.timroughgarden.org/videos.html

◦	Dynamic programming (later in Part II) 
  ▪	Solves: 
    ▪	Sequence alignment 
    ▪	Distributed shortest paths 

Algorithms:
	•	Bellman-Ford (synchronous)
	•	Floyd-Warshall
	•	Johnson's = Reweighting + BF + Dijkstra

Problems:
	•	WIS in Path Graphs
	•	Distributed Shortest-Path Routing
	•	Knapsack Problem
	•	Sequence Alignment
	•	Optimal Binary Search Trees (Sim to Huffman but Greedy can't solve)
	•	Single-source Shortest Paths (Revisited with negative edge lengths)
	•	Detect Negative Cycle
	•	All-Pairs Shortest Paths (APSP): reduces to n invocations of SSSP

Principles of Dynamic Programming
Key ingredients of dynamic programming: (how to identify suitable subproblems)
	1. Identify a small number of subproblems 
	   ◦ The # of subproblems is a lower bound on the running time of your
       algorithm 
	   ◦ [e.g., compute the max-weight IS of Gi for i=0,1,...,n] 
	2. Can quickly and correctly solve “larger” subproblems given the solutions to
    “smaller subproblems” 
	   ◦ Generally in dynamic programming, you systematically solve all of the
       subproblems (from smallest to largest). The solution to the current
       subproblem should be easy to infer, given the solutions to all of the
       smaller subproblems. That is, solutions to previous subproblems are
       sufficient to quickly and correctly compute the solution to the current
       subproblem. 
	   ◦ The relationship between larger and smaller subproblems is usually
       expressed via recurrence. It states what the optimal solution to a given
       subproblem is as a function of the optimal solutions to smaller
       subproblems 
	     1. Note: this naturally leads to a table filling algorithm, where each
          entry in the table corresponds to the optimal solution to one
          subproblem, and you use your recurrence to fill the table in from
          smallest to largest subproblem. 
	   ◦ Recurrence example: A[i]=max{A[i-1], A[i-2]+wi} 
	3. After solving all subproblems, can quickly compute the final solution 
	   ◦ [usually, it’s just the answer to the “biggest” subproblem] 
	     1. The original problem is typically the “biggest” subproblem 

	•	Note: you should be able to come up with subproblems by reasoning about the
          structure of optimal solutions 
`
        }
      ]
    }
  ]
};
