export default {
  name: "Misc. Computer Science",
  data: [
    {
      id: 0,
      name: "Scalability and Memory Limits",
      language: "js",
      tabs: [
        {
          name: "Question",
          data: "Answer"
        }
      ]
    },
    {
      id: 1,
      name: "Operations/second",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 2,
      name: "Words in Main Memory",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 3,
      name: "Touch all words in 1 second",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 4,
      name: "Operation Nanoseconds",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
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
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 7,
      name: "P vs NP (Completeness)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 8,
      name: "P = NP if...",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 9,
      name: "3 strategies for NP-complete problems",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
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
