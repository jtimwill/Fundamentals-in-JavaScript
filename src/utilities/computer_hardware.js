export default {
  name: "Computer Hardware",
  data: [
    {
      id: 0,
      name: "Boolean Logic (Nand Gate, Adder)",
      language: "js",
      tabs: [
        {
          image_src: "https://cdncontribute.geeksforgeeks.org/wp-content/uploads/logic-gates.jpg",
          name: "Question",
          data:
`Source: https://www.nand2tetris.org/

Boolean algebra: deals with Boolean (also called binary) values that are
                 typically labeled true/false, 1/0, yes/no, on/off, and so forth

Boolean function: a function that operates on binary inputs and returns binary
                  outputs

Truth table: the simplest way to specify a Boolean function. In a truth table,
             you enumerate over all possible values of the function’s input
             variables, along with the function’s output for each set of inputs.

Canonical Representation: Every Boolean function, no matter how complex, can be
expressed using three Boolean operators only: And, Or, and Not. 
  ◦	Starting with the function’s truth table, we focus on all the rows in which
    the function has value 1. 
  ◦	For each such row, we construct a term created by And-ing together literals
    (variables or their negations) that fix the values of all the row’s inputs. 
  ◦	OR them together 
  ◦	Simplify (finding the shortest possible expression is NP-hard) 

The Nand function (as well as the Nor function) has an interesting theoretical
property: Each one of the operations And, Or, and Not can be constructed from
it, and it alone. And since every Boolean function can be constructed from And,
Or, and Not operations using the canonical representation method, it follows
that every Boolean function can be constructed from Nand operations alone. This
result has far-reaching practical implications: Once we have in our disposal a
physical device that implements Nand, we can use many copies of this device
(wired in a certain way) to implement in hardware any Boolean function.

Gate: a physical device that implements a Boolean function.
	•	The simplest gates of all are made from tiny switching devices, called
    transistors , wired in a certain topology designed to effect the overall
    gate functionality.
`
        }
      ]
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
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.nand2tetris.org/

Sequential Logic
	•	Combinational chips compute functions that depend solely on combinations of
    their input values. These relatively simple chips provide many important
    processing functions (like the ALU), but they cannot maintain state. 
	•	Since computers must be able to not only compute values but also store and
    recall values, they must be equipped with memory elements that can preserve
    data over time. These memory elements are built from sequential chips. 
The Clock
	•	In most computers, the passage of time is represented by a master clock that
    delivers a continuous train of alternating signals. The exact hardware
    implementation is usually based on an oscillator that alternates
    continuously between two phases labeled 0–1, low-high, tick-tock, etc. 
	•	Each clock cycle is taken to model one discrete time unit. 
	•	The current clock phase (tick  or tock ) is represented by a binary signal.
    Using the hardware’s circuitry, this signal is simultaneously broadcast to
    every sequential chip throughout the computer platform. 
Flip-Flops
	•	The most elementary sequential element in the computer is a device called a
    flip-flop, of which there are several variants. 
	  ◦	In this book we use a variant called a data flip-flop, or DFF, whose
      interface consists of a single-bit data input and a single-bit data
      output. In addition, the DFF has a clock  input that continuously changes
      according to the master clock’s signal. 
	•	The data and the clock inputs enable the DFF to implement the time-based
    behavior: out(t)=in(t-1) 
	  ◦	the DFF simply outputs the input value from the previous time unit. 
￼     * see diagram *
Registers
	•	A register is a storage device that can ‘‘store,’’ or ‘‘remember,’’ a value
    over time, implementing the classical storage behavior: out(t)=in(t-1) 
	•	Further, the ‘‘select bit’’ of this multiplexor can become the ‘‘load bit’’
    of the overall register chip: If we want the register to start storing a new
    value, we can put this value in the in input and set the load  bit to 1; if
    we want the register to keep storing its internal value until further
    notice, we can set the load  bit to 0. 
￼    * see diagram *
	•	Once we have developed the basic mechanism for remembering a single bit over
    time, we can easily construct arbitrarily wide registers. This can be
    achieved by forming an array of as many single-bit registers as needed,
    creating a register that holds multi-bit values (figure 3.2). The basic
    design parameter of such a register is its width —the number of bits that it
    holds—e.g., 16, 32, or 64. The multi-bit contents of such registers are
    typically referred to as words 
Memories
	•	Once we have the basic ability to represent words, we can proceed to build
    memory banks of arbitrary length. 
	•	This can be done by stacking together many registers to form a Random Access
    Memory RAM unit. The term random access memory derives from the requirement
    that read/write operations on a RAM should be able to access randomly chosen
    words, with no restrictions on the order in which they are accessed. 
	  ◦	That is to say, we require that any word in the memory—irrespective of its
      physical location—be accessed directly, in equal speed. 
	•	In sum, a classical RAM device accepts three inputs: a data input, an
    address input, and a load bit. 
	  ◦	The address  specifies which RAM register should be accessed in the
      current time unit. 
	  ◦	In the case of a read operation (load=0 ), the RAM’s output immediately
      emits the value of the selected register. 
	  ◦	In the case of a write operation (load=1 ), the selected memory register
      commits to the input value in the next time unit, at which point the RAM’s
      output will start emitting it. 
	•	The basic design parameters of a RAM device are its 
	  ◦	Data width: the width of each one of its words 
	  ◦	Size: the number of words in the RAM. 
	  ◦	Modern computers typically employ 32- or 64-bit-wide RAMs whose sizes are
      up to hundreds of millions. 
￼      * See Diagram *
￼
Counters
	•	A counter is a sequential chip whose state is an integer number that
    increments every time unit, effecting the function out(t)=out(t-1)+c, where
    c is typically 1 
	•	A counter chip can be implemented by combining the input/output logic of a
    standard register with the combinatorial logic for adding a constant. 
	  ◦	Typical additional functionality 
	    ▪	Resetting the count to zero 
	    ▪	Loading a new counting base 
	    ▪	Decrementing instead of incrementing. 
Time Matters
	•	Simply stated: a sequential chip is a chip that embeds one or more DFF
    gates, either directly or indirectly. 
	•	Functionally speaking: the DFF gates endow sequential chips with the ability
    to either maintain state (as in memory units) or operate on state (as in
    counters). 
	•	Technically speaking: done by forming feedback loops inside the sequential
    chip 
	  ◦	Feedback loops wouldn’t work in combinational chips (the output would
      depend on itself) ← see “data races” 
	  ◦	Feedback loops work in sequential chips because the DFFs introduce an
      inherent time delay: the output at time t doesn’t depend on itself, but
      rather on the output at time t-1. 
	•	Combinational chips: outputs change when their inputs change 
	•	Sequential chips: outputs change only at the point of transition from one
    clock cycle to the next, not within the cycle itself. 
	  ◦	This ‘‘discretization’’ of the sequential chips’ outputs has an important
      side effect: It can be used to synchronize the overall computer
      architecture. 
	    ▪	Being a combinational chip , the ALU is insensitive to the concept of
        time - it continuously adds up whichever data values happen to lodge in
        its inputs. Thus, it will take some time before the ALU’s output
        stabilizes to the correct result. Until then, the ALU will generate
        garbage. 
	    ▪	Well, since the output of the ALU is always routed to some sort of a
        sequential chip (a register, a RAM location, etc.), all we have to do is
        ensure, when we build the computer’s clock, that the length of the clock
        cycle will be slightly longer that the time it takes a bit to travel the
        longest distance from one chip in the architecture to another. 
	    ▪	This way, we are guaranteed that by the time the sequential chip updates
        its state (at the beginning of the next clock cycle), the inputs that it
        receives from the ALU will be valid. 
`
        }
      ]
    },
    {
      id: 3,
      name: "Memory (RAM, ROM, Firmware)",
      language: "js",
      tabs: [
        {
          image_src: "https://www.informationq.com/wp-content/uploads/2015/05/Computer-Memory-diagram-1024x664.jpg",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Computer_memory

Computer memory

In computing, memory refers to the computer hardware integrated circuits that
store information for immediate use in a computer; it is synonymous with the
term "primary storage". Computer memory operates at a high speed, for example
random-access memory (RAM), as a distinction from storage that provides
slow-to-access information but offers higher capacities. If needed, contents of
the computer memory can be transferred to secondary storage; a very common way
of doing this is through a memory management technique called "virtual memory".
An archaic synonym for memory is store.[1]

The term "memory", meaning "primary storage" or "main memory", is often
associated with addressable semiconductor memory, i.e. integrated circuits
consisting of silicon-based transistors, used for example as primary storage but
also other purposes in computers and other digital electronic devices. There are
two main kinds of semiconductor memory, volatile and non-volatile. Examples of
non-volatile memory are flash memory (used as secondary memory) and ROM, PROM,
EPROM and EEPROM memory (used for storing firmware such as BIOS). Examples of
volatile memory are primary storage, which is typically dynamic random-access
memory (DRAM), and fast CPU cache memory, which is typically static
random-access memory (SRAM) that is fast but energy-consuming, offering lower
memory areal density than DRAM.

Most semiconductor memory is organized into memory cells or bistable flip-flops,
each storing one bit (0 or 1). Flash memory organization includes both one bit
per memory cell and multiple bits per cell (called MLC, Multiple Level Cell).
The memory cells are grouped into words of fixed word length, for example 1, 2,
4, 8, 16, 32, 64 or 128 bit. Each word can be accessed by a binary address of N
bit, making it possible to store 2 raised by N words in the memory. This implies
that processor registers normally are not considered as memory, since they only
store one word and do not include an addressing mechanism.

Typical secondary storage devices are hard disk drives and solid-state drives.
`
        }
      ]
    },
    {
      id: 4,
      name: "Fetch Execution Cycle",
      language: "js",
      tabs: [
        {
          image_src: "https://www-users.cs.york.ac.uk/~mjf/simple_cpu/Images/arch.jpg",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Instruction_cycle

The instruction cycle (also known as the fetch–decode–execute cycle or the 
fetch-execute cycle) is the basic operational process of a computer system. It
is the process by which a computer retrieves a program instruction from its 
memory, determines what actions the instruction describes, and then carries out
those actions. This cycle is repeated continuously by a computer's central
processing unit (CPU), from boot-up until the computer has shut down.
￼
In simpler CPUs the instruction cycle is executed sequentially, each instruction
being processed before the next one is started. In most modern CPUs the
instruction cycles are instead executed concurrently, and often in parallel,
through an instruction pipeline: the next instruction starts being processed
before the previous instruction has finished, which is possible because the
cycle is broken up into separate steps.

* Components *
Program counter (PC): An incrementing counter that keeps track of the memory
                      address of the instruction that is to be executed next or
                      in other words, holds the address of the instruction to be
                      executed next.
Memory address register (MAR): Holds the address of a block of memory for
                               reading from or writing to.
Memory data register (MDR): A two-way register that holds data fetched from
                            memory (and ready for the CPU to process) or data
                            waiting to be stored in memory. (This is also known
                            as the memory buffer register (MBR).)
Instruction register (IR): A temporary holding ground for the instruction that
                           has just been fetched from memory.
Control unit (CU): Decodes the program instruction in the IR, selecting machine
                   resources, such as a data source register and a particular
                   arithmetic operation, and coordinates activation of those
                   resources.
Arithmetic logic unit (ALU): Performs mathematical and logical operations.
Floating-point unit (FPU): Performs floating-point operations.


* Steps *

Each computer's CPU can have different cycles based on different instruction
sets, but will be similar to the following cycle:
	1. Fetch the instruction: The next instruction is fetched from the memory
     address that is currently stored in the program counter and stored into the
     instruction register. At the end of the fetch operation, the PC points to
     the next instruction that will be read at the next cycle.
	2. Decode the instruction: During this cycle the encoded instruction present
     in the instruction register is interpreted by the decoder.
	3. Read the effective address: In the case of a memory instruction (direct or
     indirect) the execution phase will be during the next clock pulse. If the
     instruction has an indirect address, the effective address is read from
     main memory, and any required data is fetched from main memory to be
     processed and then placed into data registers (clock pulse: T3). If the
     instruction is direct, nothing is done during this clock pulse. If this is
     an I/O instruction or a register instruction, the operation is performed
     during the clock pulse.
	4. Execute the instruction: The control unit of the CPU passes the decoded
     information as a sequence of control signals to the relevant function units
     of the CPU to perform the actions required by the instruction such as
     reading values from registers, passing them to the ALU to perform
     mathematical or logic functions on them, and writing the result back to a
     register. If the ALU is involved, it sends a condition signal back to the
     CU. The result generated by the operation is stored in the main memory or
     sent to an output device. Based on the feedback from the ALU, the PC may be
     updated to a different address from which the next instruction will be
     fetched.
The cycle is then repeated.
`
        }
      ]
    },
    {
      id: 5,
      name: "The Stored Program Concept",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Stored-program_computer

Stored-program computer
A stored-program computer is a computer that stores program instructions in
electronic memory.[1] This contrasts with machines where the program
instructions are stored on plugboards or similar mechanisms.

Often the definition is extended with the requirement that the treatment of
programs and data in memory be interchangeable or uniform.[2][3][4]


Source: https://www.nand2tetris.org/

The Stored Program Concept 
  ◦	Formulated independently by several scientists and engineers in the 1930s,
    the stored program concept is still considered the most profound invention
    in, if not the very foundation of, modern computer science. 
  ◦	Like many scientific breakthroughs, the basic idea is remarkably simple. The
    computer is based on a fixed hardware platform, capable of executing a fixed
    repertoire of very simple instructions. At the same time, these instructions
    can be combined like building blocks, yielding arbitrarily sophisticated
    programs. Moreover, the logic of these programs is not embedded in the
    hardware, as it was in mechanical computers predating 1930. Instead, the
    program’s code is temporarily stored and manipulated in the computer’s
    memory, just like data, becoming what is known as “software.” 
    ▪	Since the computer’s operation manifests itself to the user through the
      currently executing software, the same hardware platform can be made to
      behave completely differently each time it is loaded with a different
      program. 
`
        }
      ]
    },
    {
      id: 6,
      name: "Computer System (Memory, CPU, I/O)",
      language: "js",
      tabs: [
        {
          image_src: "http://computersciencementor.com/wp-content/uploads/2017/02/BLOCK-DIAGRAM-OF-COMPUTER.jpg",
          name: "Question",
          data:
`Source: https://www.nand2tetris.org/

•	The von Neumann Architecture 
  ◦	The von Neumann machine is a practical architecture and the conceptual
    blueprint of almost all computer platforms today. 
    ▪	It is based on a central processing unit (CPU), interacting with a memory
      device, receiving data from some input device, and sending data to some
      output device. 
    ▪	At the heart of this architecture lies the stored program concept: The
      computer’s memory stores not only the data that the computer manipulates,
      but also the very instructions that tell the computer what to do. 
￼
•	Memory 
  ◦	Physically, the memory is a linear sequence of addressable registers, each
    having a unique address and a value, which is a fixed-size word of information 
  ◦	Logically, the memory is divided into two areas. 
    ▪	One area is dedicated for storing data, e.g. the arrays and objects of
      programs that are presently executing 
    ▪	The other area is dedicated for storing the programs’ instructions. 
    ▪	Although all these “data words” and “instruction words” look exactly the
      same physically, they serve very different purposes. 
  ◦	Harvard Architecture: In some variants, the data memory and the instruction
    memory are kept in separate physical memory units that have distinct address
    spaces. This setting is also the architecture of our Hack computer. 
  ◦	Random Access Memory (RAM) is often used to denote the important fact that
    each randomly selected register can be reached in the same access time,
    irrespective of the memory size and the register’s location in it. 
  ◦	Data Memory 
    ▪	High-level programs manipulate abstract artifacts like variables, arrays,
      and objects. After the programs are translated into machine language,
      these data abstractions become binary codes, stored in the computer’s
      memory. 
    ▪	Once an individual register has been selected from the memory by
      specifying its address, its contents can be either read or written to. 
◦	Instruction Memory 
  ▪	Before high-level programs can be executed on the computer, they must be
    translated into machine language. 
  ▪	Following this translation, each high-level statement becomes a series of
    one or more machine language instructions. 
  ▪	These instructions are stored in the computer’s instruction memory as binary
    codes. 
  ▪	In each step of a program’s execution, the CPU fetches (i.e., reads) a
    binary machine instruction from a selected register in the instruction
    memory, decodes it, executes the specified instruction, and figures out
    which instruction to fetch and execute next. 
  ▪	Note: 
    ▪	We see that before executing a particular program, we must first load the
      program’s code into the instruction memory, typically from some peripheral
      mass storage device like a disk. Given the compact and highly focused
      perspective of a von Neumann machine, how a program is loaded into the
      computer’s instruction memory is considered an external issue. 
    ▪	What’s important is that when the CPU is called upon to execute a program,
      the program’s code will already reside in memory, one way or another. 
•	Central Processing Unit 
  ◦	The CPU—the centerpiece of the computer’s architecture—is in charge of
    executing the instructions of the currently loaded program. These
    instructions tell the CPU which calculation it has to perform, which
    registers is has to read from or write to, and which instruction it has to
    fetch and execute next. 
  ◦	The CPU executes these tasks using three main hardware elements: an
    Arithmetic-Logic Unit (ALU), a set of registers, and a control unit. 
  ◦	Arithmetic Logic Unit: The ALU chip is built to perform all the low-level
    arithmetic and logical operations featured by the computer. 
    ▪	How much functionality an ALU should have is a matter of need, budget,
      energy, and similar cost effectiveness considerations. Any function not
      supported by the ALU as a primitive hardware operation can be later
      realized by the computer’s system software (yielding a slower
      implementation, of course). 
  ◦	Registers 
    ▪	In order to boost performance, it is desirable to store the intermediate
      results that computer programs generate locally, close to the ALU, rather
      than ship them in and out of the CPU chip and store them in some remote
      and separate RAM chip. 
    ▪	Thus, a CPU is typically equipped with a small set of 2 up to 32 resident
      high-speed registers, each capable of holding a single word. 
◦	Control Unit: 
  ▪	A computer instruction is represented as a binary code, typically 16, 32, or
    64 bits wide. 
  ▪	Before such an instruction can be executed, it must be decoded, and the
    information embedded in it must be used to signal various hardware devices
    (ALU, registers, memory) how to execute the instruction. 
  ▪	The instruction decoding is done by some control unit, which is also
    responsible for figuring out which instruction to fetch and execute next. 
  ▪	Fetch-execute cycle: 
    ▪	The CPU operation can now be described as a repeated loop: decode the
      current instruction, execute it, figure out which instruction to execute
      next, fetch it, decode it, and so on. 
•	CPU-resident Registers 
  ◦	CPU-resident registers save unnecessary memory access (faster), and allow
    using thinner instruction formats (no addr needed), resulting in faster
    throughput. 
    ▪	Note about addresses: In order to specify an instruction that includes a
      memory register, like Memory[addr]=value, we must supply a memory address,
      which typically requires many bits. In the 16-bit Hack platform, this
      forces us to use two machine instructions, and two clock cycles. 
  ◦	Data registers 
    ▪	These registers give the CPU short-term memory services. For example, if a
      program wants to calculate (a − b) ⋅ c, we must first compute and remember
      the value of (a − b). 
    ▪	Typically, CPU’s use at least one and up to 32 data registers. 
  ◦	Address register 
    ▪	Many machine language instructions involve memory access: reading data,
      writing data, and fetching instructions. 
    ▪	In any one of these operations, we must specify the address of the memory
      register that we wish to operate on. 
    ▪	In some cases, the address is coded as part of the instruction, while in
      other cases the address is specified, or computed, by some previous
      instruction and stored in the address register. 
    ▪	Unlike regular registers, the output of an address register is typically
      connected to the address input of a memory device. 
    ▪	If needed, it can be used as yet another data register. 
      ▪	Example: set the D register to 17 
        ▪	@17 // The fact that Memory[17] was selected is ignored 
        ▪	D=A 
  ◦	Program counter 
    ▪	When executing a program, the CPU must always keep track of the address of
      the instruction that must be fetched and executed next. 
    ▪	This address is kept in a special register called program counter, or PC. 
    ▪	The contents of the PC is computed and updated as a side effect of executing
      the current instruction. 
•	Input and Output 
  ◦	Computers interact with their external environments using a diverse array of
    input and output (I/O) devices. 
  ◦	There are two reasons why we don’t concern ourselves here with the low-level
    architecture of these various devices. 
    ▪	First, every one of them represents a unique piece of machinery requiring a
      unique knowledge of engineering. 
    ▪	Second, and for this very same reason, computer scientists have devised
      clever schemes to make all these different devices look exactly the same
      to the computer. 
      ▪	The key trick in managing this complexity is called memory-mapped I/O. 
  ◦	Memory-mapped I/O 
    ▪	The basic idea is to create a binary emulation of the I/O device, making
      it “look” to the CPU as if it were a regular memory segment. 
    ▪	In particular, each I/O device is allocated an exclusive area in memory,
      becoming its “memory map.” 
      ▪	In the case of an input device like a keyboard, the memory map is made
        to continuously reflect the physical state of the device: when the user
        presses a key on the keyboard, a binary code representing that key
        appears in the keyboard’s memory map. 
      ▪	In the case of an output device like a screen, the screen is made to
        continuously reflect the state of its designated memory map: when we
        write a bit in the screen’s 10 memory map, a certain pixel turns on or
        off on the screen. 
    ▪	The I/O devices are “refreshed” from the memory (and vice versa) several
      times per second, so the response time from the user’s perspective is
      almost instantaneous. 
    ▪	Whenever we want to connect a new I/O device to the computer, all we have
      to do is allocate to it a new memory map and “take note” of its base
      address (these one-time configurations are typically done by the operating
      system). 
      ▪	From this point onward, any program that wants to manipulate this I/O
        device can do so—all it needs to do is manipulate selected registers in
        the memory map designated to represent the device. 
`
        }
      ]
    },
    {
      id: 7,
      name: "Instruction set architecture",
      language: "js",
      tabs: [
        {
          image_src: "https://i.stack.imgur.com/AvG0R.jpg",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Instruction_set_architecture

An instruction set architecture (ISA) is an abstract model of a computer. It is
also referred to as architecture or computer architecture. A realization of an
ISA is called an implementation. An ISA permits multiple implementations that
may vary in performance, physical size, and monetary cost (among other things);
because the ISA serves as the interface between software and hardware. Software
that has been written for an ISA can run on different implementations of the
same ISA. This has enabled binary compatibility between different generations of
computers to be easily achieved, and the development of computer families. Both
of these developments have helped to lower the cost of computers and to increase
their applicability. For these reasons, the ISA is one of the most important
abstractions in computing today.

An ISA defines everything a machine language programmer needs to know in order
to program a computer. What an ISA defines differs between ISAs; in general,
ISAs define the supported data types, what state there is (such as the main
memory and registers) and their semantics (such as the memory consistency and
addressing modes), the instruction set (the set of machine instructions that
comprises a computer's machine language), and the input/output model.

Classification of ISAs
An ISA may be classified in a number of different ways. A common classification
is by architectural complexity. A complex instruction set computer (CISC) has
many specialized instructions, some of which may only be rarely used in
practical programs. A reduced instruction set computer (RISC) simplifies the
processor by efficiently implementing only the instructions that are frequently
used in programs, while the less common operations are implemented as
subroutines, having their resulting additional processor execution time offset
by infrequent use.[2]

Other types include very long instruction word (VLIW) architectures, and the
closely related long instruction word (LIW) and explicitly parallel instruction
computing (EPIC) architectures. These architectures seek to exploit
instruction-level parallelism with less hardware than RISC and CISC by making
the compiler responsible for instruction issue and scheduling.

Architectures with even less complexity have been studied, such as the minimal
instruction set computer (MISC) and one instruction set computer (OISC). These
are theoretically important types, but have not been commercialized.
`
        }
      ]
    },
    {
      id: 8,
      name: "Moore's Law",
      language: "js",
      tabs: [
        {
          image_src: "http://www.extremetech.com/wp-content/uploads/2015/04/MooresLaw2.png",
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
      id: 9,
      name: "Locality (Memory Access Hierarchy)",
      language: "js",
      tabs: [
        {
          image_src: "https://images.slideplayer.com/39/10873962/slides/slide_3.jpg",
          name: "Question",
          data:
`Source: https://image.slidesharecdn.com/turing100presentation-jan5-130107033733-phpapp01/95/life-and-work-of-jim-gray-turing100persistent-32-638.jpg?cb=1357584135

Jim Gray's Storage Latency Analogy:

Registers: 1ns
On Chip Cache: 2ns
On Board Cache: 10ns
Memory: 100ns
Disk: 10^6ns
Tape/Optical Robot: 10^9ns
`
        }
      ]
    },
    {
      id: 10,
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
      id: 11,
      name: "Micro-controller vs Microprocessor",
      language: "js",
      tabs: [
        {
          image_src: "https://electronicsforu.com/wp-contents/uploads/2016/05/Screen-Shot-2016-05-28-at-16.51.34.png",
          name: "Question",
          data:
`Source: https://electronics.stackexchange.com/questions/1092/whats-the-difference-between-a-microcontroller-and-a-microprocessor

A microprocessor generally does not have RAM, ROM and IO pins. It usually uses
its pins as a bus to interface to peripherals such as RAM, ROM, Serial ports,
Digital and Analog IO. It is expandable at the board level due to this.

A microcontroller is 'all in one', the processor, ram, IO all on the one chip,
as such you cannot (say) increase the amount of RAM available or the number of
IO ports. The controlling bus is internal and not available to the board
designer.

This means that a microprocessor is generally capable of being built into bigger
general purpose applications than a microcontroller. The microcontroller is
usually used for more dedicated applications.

All of these are very general statements. There are chips available that blur
the boundaries.
`
        }
      ]
    },
    {
      id: 12,
      name: "Multicore Processor vs. Single Core Processor",
      language: "js",
      tabs: [
        {
          image_src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Dual_Core_Generic.svg",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Multi-core_processor

A multi-core processor is a single computing component with two or more
independent processing units called cores, which read and execute program
instructions.[1] The instructions are ordinary CPU instructions (such as add,
move data, and branch) but the single processor can run multiple instructions on
separate cores at the same time, increasing overall speed for programs amenable
to parallel computing.[2] Manufacturers typically integrate the cores onto a
single integrated circuit die (known as a chip multiprocessor or CMP) or onto
multiple dies in a single chip package. The microprocessors currently used in
almost all personal computers are multi-core.

A multi-core processor implements multiprocessing in a single physical package.
Designers may couple cores in a multi-core device tightly or loosely. For
example, cores may or may not share caches, and they may implement message
passing or shared-memory inter-core communication methods.

The improvement in performance gained by the use of a multi-core processor
depends very much on the software algorithms used and their implementation. In
particular, possible gains are limited by the fraction of the software that can
run in parallel simultaneously on multiple cores; this effect is described by
Amdahl's law.
`
        }]
    }
  ]
};
