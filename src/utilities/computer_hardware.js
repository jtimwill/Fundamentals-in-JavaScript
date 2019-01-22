export default {
  name: "Computer Hardware",
  data: [
    {
      id: 0,
      name: "Boolean Logic (Nand Gate, Adder)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 1,
      name: "VHDL",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.nand2tetris.org/
Actual Hardware Construction
	•	Hardware Description Language (HDL) 
	  ◦	Today, hardware designers no longer build anything with their bare hands.
      Instead, they plan and optimize the chip architecture on a computer
      workstation, using structured modeling formalisms like Hardware
      Description Language , or HDL (also known as VHDL, where V stands for
      Virtual). 
	  ◦	The designer specifies the chip structure by writing an HDL program ,
      which is then subjected to a rigorous battery of tests. 
	•	Hardware simulator: used to help the designer otpimize the design until the
    simulated chip delivers desired cost/performance 
	  ◦	takes the HDL program as input and builds an image of the modeled chip in
      memory. 
	  ◦	Next, the designer can instruct the simulator to test the virtual chip on
      various sets of inputs, generating simulated chip outputs. 
	  ◦	In addition to testing the chip’s correctness, the hardware designer will
      typically be interested in a variety of parameters such as speed of
      computation, energy consumption, and the overall cost implied by the chip
      design. 
	•	Mass production: 
	  ◦	When the HDL program is deemed complete, that is, when the performance of
      the simulated chip satisfies the client who ordered it, the HDL program
      can become the blueprint from which many copies of the physical chip can
      be stamped in silicon. 
	  ◦	This final step in the chip life cycle—from an optimized HDL program to
      mass production—is typically outsourced to companies that specialize in
      chip fabrication, using one switching technology or another. 
`
        }
      ]
    },
    {
      id: 2,
      name: "Sequential Logic (Flip-flop, Register, Counter)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 3,
      name: "Memory (RAM, ROM, Firmware)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 4,
      name: "I/O",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 5,
      name: "CPU (ALU, Data/Address Registers, Control Unit, Cache, Program Counter)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 6,
      name: "Fetch Execution Cycle",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 7,
      name: "The Stored Program Concept",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 8,
      name: "Von Neumann vs. Harvard (Data Memory, Instruction Memory)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 9,
      name: "Computer System (Memory, CPU, I/O)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 10,
      name: "RISC Pipeline (vs. CISC)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 11,
      name: "Moore's Law",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Moore%27s_law
Moore's law is the observation that the number of transistors in a dense
integrated circuit doubles about every two years. The observation is named after
Gordon Moore, the co-founder of Fairchild Semiconductor and CEO of Intel, whose
1965 paper described a doubling every year in the number of components per
integrated circuit,[2] and projected this rate of growth would continue for at
least another decade.[3] In 1975,[4] looking forward to the next decade,[5] he
revised the forecast to doubling every two years.[6][7][8] The period is often
quoted as 18 months because of a prediction by Intel executive David House
(being a combination of the effect of more transistors and the transistors being
faster).[9]

Moore's prediction proved accurate for several decades, and has been used in the
semiconductor industry to guide long-term planning and to set targets for
research and development.[10] Advancements in digital electronics are strongly
linked to Moore's law: quality-adjusted microprocessor prices,[11] memory
capacity, sensors and even the number and size of pixels in digital cameras.[12]
Digital electronics has contributed to world economic growth in the late
twentieth and early twenty-first centuries.[13] Moore's law describes a driving
force of technological and social change, productivity, and economic growth.[14]
[15][16][17]

Moore's law is an observation and projection of a historical trend and not a
physical or natural law. Although the rate held steady from 1975 until around
2012, the rate was faster during the first decade. In general, it is not
logically sound to extrapolate from the historical growth rate into the
indefinite future. For example, the 2010 update to the International Technology
Roadmap for Semiconductors predicted that growth would slow around 2013,[18] and
in 2015 Gordon Moore foresaw that the rate of progress would reach saturation:
"I see Moore's law dying here in the next decade or so."[19]

Intel stated in 2015 that the pace of advancement has slowed, starting at the
22 nm feature width around 2012, and continuing at 14 nm.[20] Brian Krzanich,
the former CEO of Intel, announced, "Our cadence today is closer to two and a
half years than two."[21] Intel also stated in 2017 that hyperscaling would be
able to continue the trend of Moore's law and offset the increased cadence by
aggressively scaling beyond the typical doubling of transistors.[22] Krzanich
cited Moore's 1975 revision as a precedent for the current deceleration, which
results from technical challenges and is "a natural part of the history of
Moore's law".[23][24][25]
`
        }
      ]
    },
    {
      id: 12,
      name: "Locality (Memory Access Hierarchy)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 13,
      name: "Numbers Everyone Should Know (latency)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://static.googleusercontent.com/media/research.google.com/en/us/people/jeff/stanford-295-talk.pdf

L1 cache reference                            0.5 ns
Branch mispredict                             5 ns
L2 cache reference                            7 ns
Mutex lock/unlock                           100 ns
Main memory reference                       100 ns
Compress 1K bytes with Zippy             10,000 ns
Send 2K bytes over 1 Gbps network        20,000 ns
Read 1 MB sequentially from memory      250,000 ns
Round trip within same datacenter       500,000 ns
Disk seek 10,000,000 ns
Read 1 MB sequentially from network  10,000,000 ns
Read 1 MB sequentially from disk     30,000,000 ns
Send packet CA->Netherlands->CA     150,000,000 ns
`
        }
      ]
    },
    {
      id: 14,
      name: "Micro-controller vs Microprocessor",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 15,
      name: "Multicore Processor vs. Single Core Processor",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    }
  ]
};
