export default {
  name: "Misc. Computer Science",
  data: [
    {
      id: 0,
      name: "Asymptotic Analysis",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

a*n^b 
  ◦	System independent effects (determines the exponent b) 
    ▪	Algorithm 
    ▪	(Rarely) Input data 
  ◦	System dependent effects (determines constant a) 
    ▪	Hardware: CPU, memory, cache, … 
    ▪	Software: compiler, interpreter, garbage collector 
    ▪	System: operating system, network, other apps, … 
    ▪	Input data 
`
        }
      ]
    },
    {
      id: 1,
      name: "Operations/second",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

10^9 operations per second (GHz)
`
        }
      ]
    },
    {
      id: 2,
      name: "Words in Main Memory",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

10^9 words of main memory (GB) 
  ◦	2^20 bytes ≈ 1 Million (MB)
  ◦	2^30 bytes ≈ 1 Billion (GB)
`
        }
      ]
    },
    {
      id: 3,
      name: "Touch all words in 1 second",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

You can touch all words in ≈ 1 second (a truism (roughly) since 1950!)
`
        }
      ]
    },
    {
      id: 4,
      name: "Operation Nanoseconds",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

Estimated time of basic operations [OSX on MacBook Pro 2.2GHz with 2GB RAM]
  Integer Add (a + b):              2.1ns
  Integer Multiply (a * b):         2.4ns
  Integer Divide (a / b):           5.4ns
  Floating-point Add (a + b):       4.6ns
  Floating-point Multiply (a * b):  4.2ns
  Floating-point Divide (a / b):   13.5ns
  Sine (Math.sine(theta)):         91.3ns
  Arctangent (Math.atan2(y, x)):  129.0ns
`
        }
      ]
    },
    {
      id: 5,
      name: "Why 2s Comp is Used",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.youtube.com/watch?v=thrx3SBEpL8
Why We Use Binary - Computerphile
	•	Mechanical computers (Babbage): Ten teeth on a gear possible 
	•	Early electronic computers: vacuum tubes for logic [Tommy Flowers, Colossus] 
	•	Advantage of Decimal: you need less hardware 
	  ◦	Log2(10) = 3.322 [The # of binary digits needed to represent single digit
                        base-10 number] 
	    ▪	Note: you have to round up (e.g. 4 bits for 9: 1001) 
	  ◦	A binary system needs 3.322x the hardware 
	•	Disadvantage of Decimal: 
	  ◦	More voltage levels (not just high and low), less stable 
	  ◦	Decimal hardware is complicated to build than binary 

Source:
Why We Use 2’s Comp  https://www.youtube.com/watch?v=lKTsv6iVxV4

| Decimal | Sign & Mag | 1’s Comp | 2’s Comp|
| -2      | 1010       | 1101     | 1110    |
| -1      | 1001       | 1110     | 1111    |
| -0      | 1000       | 1111     | 0000    |
| +0      | 0000       | 0000     | 0000    |
| +1      | 0001       | 0001     | 0001    |
| +2      | 0010       | 0010     | 0010    |

•	Sign and mag 
  ◦	Addition doesn’t work 
  ◦	You don’t want two zeros 
    ▪	So 16 bits is -7 to 7 (two zeros) 
•	1’s Comp (negative numbers = comp of positive) 
  ◦	Addition works, if you treat the sign as a normal number, but you need to
    bring the carry out around and add it to the least significant bit 
  ◦	You don’t want two zeros 
   ▪	So 16 bits is -7 to 7 (two zeros) 
•	2’s Comp [negative numbers = 1’s Comp + 1] 
  ◦	Addition works 
  ◦	Negative zero becomes negative 1 
    ▪	So 16 bits is -8 to 7 (one zero) 
  ◦	Note: overflows still happen 
  ◦	Video comments: use negative weight 
    ▪	1000 = -8 
    ▪	1011 =  -8 + 3 = -5 
`
        }
      ]
    },
    {
      id: 6,
      name: "P vs NP (Reductions)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

•	Reductions [Sedgewick/Wayne Princeton] 
  ◦	Def: Problem X reduces to problem Y if you can use an algorithm that solves
    Y to help solve X 
  * See Diagram *
  ◦	Cost of solving X = total cost of solving Y + cost of reduction 
    ▪	Perhaps many calls to Y on problems of different sizes (typically only 1
      call) 
    ▪	Preprocessing and postprocessing (typically less than cost of solving Y) 

Source: http://www.timroughgarden.org/videos.html
•	Reductions [Roughgarden] 
  ◦	Definition: Problem π1 reduces to problem π2 if: 
    ▪	Given a polynomial-time subroutine for π2, can solve π1 in polynomial time
      (π2 is at least as hard as π1) 
      ▪	[Enlarging the frontier of tractability from π2 to include π1 ] 
  ◦	Reduction Examples 
    ▪	Computing the median reduces to sorting 
    ▪	Detecting a cycle reduces to DFS 
    ▪	APSP reduces to SSSP 
`
        }
      ]
    },
    {
      id: 7,
      name: "P vs NP (Completeness)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.timroughgarden.org/videos.html

•	Completeness (using reduction to spread the frontier of intractability from π1
  to π2) [Roughgarden] 
  ◦	Suppose π1 reduces to π2 
  ◦	Contrapositive: if π1 is not in P, then neither is π2 
    ▪	That is: π2 is at least as hard as π1 
  ◦	Definition: let C = a set of all problems 
    ▪	The problem π is C-complete (complete for C)  if: 
      1.	C and 
      2.	Everything in C reduces to π 
  ◦	That is: π is the hardest problem in all of C
`
        }
      ]
    },
    {
      id: 9,
      name: "3 strategies for NP-complete problems",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.timroughgarden.org/videos.html
◦	Identify computationally tractable special cases
◦	Heuristics - fast algorithms that are not always correct (e.g., via suitable
  greedy algorithms)
◦	Solve in exponential time, but faster than brute-force search [for when you
  are unwilling to consider heuristics]
  a. Note: here you are insisting on correctness
`
        }
      ]
    },
    {
      id: 10,
      name: "Cryptography",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 11,
      name: "Private/Public Key Cryptography",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 12,
      name: "Diffie-Hellman Key Exchange",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 13,
      name: "RSA Encryption",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 14,
      name: "Powers of 2",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    }
  ]
};
