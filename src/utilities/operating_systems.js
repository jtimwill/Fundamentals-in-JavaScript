export default {
  name: "Operating Systems",
  data: [
    {
      id: 0,
      name: "Operating System Definition",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

What is an operating system?
1. The body of software that is designed to make the system operate correctly
   and efficiently in an easy to use manner

How does the operating system do that?

1. The primary way is through a technique called virtualization
   a. The OS takes a physical resource (such as the processor, or memory, or a
      disk) and transforms it into a more general, powerful, and easy-to-use
      virtual form of itself. Thus, we sometimes refer to the operating system
      as a virtual machine.
2. The OS also provides interfaces (APIs) that you can call. This allows users
   to make use of the features of the virtual machine (like running a program,
   or allocating memory, or accessing a file)
   a. A typical OS, in fact, exports a few hundred system calls that are
      available to applications. We sometimes say that the OS provides a
      standard library to applications
3. Because virtualization allows many programs to run (sharing the CPU), many
   programs to concurrently access their own instructions and data
   (sharing memory), and many programs to access devices (sharing disks, etc),
   the OS is sometimes known as a resource manager.
`
        }
      ]
    },
    {
      id: 1,
      name: "Kernel",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Kernel_(operating_system)

The kernel is a computer program that is the core of a computer's operating
system, with complete control over everything in the system.[1] On most systems,
it is one of the first programs loaded on start-up (after the bootloader). It
handles the rest of start-up as well as input/output requests from software,
translating them into data-processing instructions for the central processing
unit. It handles memory and peripherals like keyboards, monitors, printers, and
speakers.

The critical code of the kernel is usually loaded into a separate area of
memory, which is protected from access by application programs or other, less
critical parts of the operating system. The kernel performs its tasks, such as
running processes, managing hardware devices such as the hard disk, and handling
interrupts, in this protected kernel space. In contrast, everything a user does
is in user space: writing text in a text editor, running programs in a GUI, etc.
This separation prevents user data and kernel data from interfering with each
other and causing instability and slowness,[1] as well as preventing
malfunctioning application programs from crashing the entire operating system.

The kernel's interface is a low-level abstraction layer. When a process makes
requests of the kernel, it is called a system call. Kernel designs differ in how
they manage these system calls and resources. A monolithic kernel runs all the
operating system instructions in the same address space for speed. A microkernel
runs most processes in user space,[2] for modularity.[3]
`
        }
      ]
    },
    {
      id: 2,
      name: "What happens when a program runs? (Von Neumann)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

1. it executes instructions. Many millions (and these days, even billions) of
   times every second, the processor fetches an instruction from memory, decodes
   it (i.e., figures out which instruction this is), and executes it.
2. After it is done with this instruction, the processor moves on to the next
   instruction, and so on, and so on, until the program finally completes.
`
        }
      ]
    },
    {
      id: 3,
      name: "Virtualization",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

Virtualizing the CPU:
1. Turning a single CPU (or small set of them) into a seemingly infinite number
   of CPUs and thus allowing many programs to seemingly run at once

Virtualizing Memory
1. Each process accesses its own private virtual address space (sometimes just
   called its address space), which the OS maps onto the physical memory of the
   machine.
2. A memory reference within one running program does not affect the address
   space of other processes (or the OS itself); as far as the running program is
   concerned, it has physical memory all to itself.
`
        }
      ]
    },
    {
      id: 4,
      name: "Concurrency",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
This term refers to the host of problems that arise, and must be addressed when
working on many things at once (i.e., concurrently) in the same program.

Threads: you can think of a thread as a function running within the same memory
space as other functions, with more than one of them active at a time.
`
        }
      ]
    },
    {
      id: 5,
      name: "Persistence",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
In system memory, data can be easily lost, as devices such as DRAM store values
in a volatile manner; when power goes away or the system crashes, any data in
memory is lost.

Thus, we need hardware and software to be able to store data persistently;
1. The hardware comes in the form of some kind of input/output or I/O device; in
   modern systems, a hard drive is a common repository for long lived
   information, although solid-state drives (SSDs) are making headway in this
   arena as well.
2. The software in the operating system that usually manages the disk is called
   the file system; it is thus responsible for storing any files the user
   creates in a reliable and efficient manner on the disks of the system.
`
        }
      ]
    },
    {
      id: 6,
      name: "Process",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

A process is an abstraction of a running program that the OS provides to users

The Components of a Process:
  Machine state: what a program can read or update when it is running
    1. Memory: Instructions lie in memory; the data that the running program
       reads and writes sits in memory as well. Thus, the memory that the
       process can address (called its address space) is part of the process.
    2. Registers: many instructions explicitly read or update registers and thus
       clearly they are important to the execution of the process.
       a. Examples of important registers:
         i. The program counter (PC): contains the address of the next
            instruction
         ii. The stack pointer and associated frame pointer manage the stack for
             function parameters, local variables, and return addresses
    3. Persistent Storage Devices: are often accessed by programs too. Such I/O
       information might include a list of the files the process currently has
       open.

  Process API
    The following APIs, in some form, are available on any modern operating
    system:
      1. Create: An OS must include some method to create new processes. When
         you type a command into the shell, or double-click on an application
         icon, the OS is invoked to create a new process to run the program you
         have indicated.
      2. Destroy: System also provide an interface to destroy processes
         forcefully. When a process doesn’t exit itself when complete, the user
         may wish to kill them.
      3. Wait: Sometimes it is useful to wait for a process to stop running.
      4. Miscellaneous Control: Other controls are sometimes possible. For
         example: suspend a process (stop it from running for a while) and then
         resume it.
      5. Status: There are usually interfaces to get some status information
         about a process as well, such as how long it has run for, or what state
         it is in.
`
        }
      ]
    },
    {
      id: 7,
      name: "Threads",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

•	Thread: each thread is very much like a separate process, except for one
  difference: they share the same address space, and thus can access the same
  data. 
  ◦	Single threaded process: a single point of execution within a program (i.e.,
    a single PC where instructions are being fetched from and executed 
  ◦	Multi-threaded process: more than one point of execution (i.e., multiple
    PCs, each of which is being fetched and executed from 
•	The state of a single thread: very similar to that of a process. 
  ◦	It has a program counter (PC) that tracks where the program is fetching
    instructions from 
  ◦	It has its own private set of registers it uses for computation 
  ◦	Context switching (between threads) 
    ▪	Thus, if there are two threads that are running on a single processor,
      when switching from one (T1) to running the other (T2), a context switch
      must take place. 
    ▪	Similar to process context switching, the register state of T1 must be
      saved and the register state of T2 restored before running T2. 
      ▪	With processes, we saved the state to a process control block (PCB). 
      ▪	With threads, we’ll need one or more thread control blocks (TCBs) to
        store the state of each thread of a process. 
    ▪	Different to process context switching: 
      ▪	The address space remains the same (i.e., there is no need to switch
        which page table we are using) 
    ▪	Another Major Difference: [Stack] 
      ▪	Single-threaded process: there is a single stack, usually residing at
        the bottom of the address space. 
      ▪	Multi-threaded process: instead of a single stack in the address space,
        there will be one per thread. 
        ▪	Thus, any stack-allocated variables, parameters, return values, etc.,
          will be placed in what is sometimes called thread-local storage, i.e.,
          the stack of the relevant thread. 
    ▪	Note: having multiple stacks in the same address space is generally okay.
      Stacks aren’t very large, except in programs that make heavy use of
      recursion. 
`
        }
      ]
    },
    {
      id: 8,
      name: "Process Creation: how the OS gets a program up and running",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

1. The OS loads the program’s code and any static data (e.g., initialized
    variables) into memory (into the address space of the process) from the disk
    (or SSD)
    a. In early (or simple) operating systems, the loading process is done
      eagerly
      i. i.e., all at once before running the program
    b. Modern OSes perform the process lazily
      i. i.e., by loading pieces of code or data only as they are needed during
         program execution.
2. Before running the process the OS must
   a. Allocate memory for the program’s run-time stack (or just stack) and give
      it to the process
      i. C programs use the stack for local variables, function parameters, and
         return addresses. The OS will also likely initialize the stack with
         arguments; specifically, it will fill in the parameters to the main()
         function (i.e., argc and the argv array)
   b. The OS may also allocate some memory for the program’s heap
      i. In C programs, the heap is used for explicitly requested
         dynamically-allocated data;
         1. programs request such space by calling malloc() and free it
            explicitly by calling free().
         2. The heap is needed for data structures such as linked lists, hash
            tables, trees, and other interesting data structures.
         3. The heap will be small at first; as the program runs, and requests
            more memory via the malloc() library API, the OS may allocate more
            memory to the process.
   c. The OS will also do some other initialization tasks, particularly related
      to I/O
      i. For example, in UNIX systems, each process by default has three open
         file descriptors, for standard input, output, and error; these
         descriptors let programs easily read input from the terminal as well as
         print output to the screen.
3. The OS starts the program running at the entry point, namely main()
   a. By jumping to the main() routine, the OS transfers control of the CPU to
      the newly-created process, and thus the program begins its execution.
`
        }
      ]
    },
    {
      id: 9,
      name: "3 OS Abstractions",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

◦	Virtualizing the CPU: take a single physical CPU and turn it into multiple
                        virtual CPUs, creating the illusion of multiple programs
                        running at the same time 
◦	Virtualizing Memory: the OS secretly multiplexes address space across physical
                       memory (and sometimes disk), creating the illusion of a
                       large, private virtual memory for each process

Note: In tandem, these two abstractions allow a program to run as if it is in
      its own private, isolated world; as if it has its own processor (or
      processors); as if it has its own memory. This illusion makes programming
      the system much easier and thus is prevalent today not only on desktops
      and servers but increasingly on all programmable platforms including
      mobile phones and the like.

◦	Persistent storage: one more critical piece of the virtualization puzzle
	◦	Examples: a classic hard disk drive, a more modern solid-state storage
              device . These devices store information permanently; thus, the OS
              must take extra care of such a device: this is where users keep
              data that they really care about  
`
        }
      ]
    },
    {
      id: 10,
      name: "System Call",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 11,
      name: "Trap",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 12,
      name: "Context Switching",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 13,
      name: "Caches (Single-CPU vs. Multi-CPU Hardware)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 14,
      name: "Address Space Components (Program Code, Stack, Heap)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
The Address Space
	•	For user convenience, the OS must create an easy to use abstraction of
    physical memory called address space 
	•	Address Space: the running program’s view of memory in the system. 
	•	The address space of a process contains all of the memory state of the
    running program: 
	  ◦	The code of the program (the instructions) 
	  ◦	The stack is used by the running program to keep track of where it is in
      the function call chain, to allocate local variables, and to pass
      parameters and return values to and from routines. 
	  ◦	The heap is used for dynamically-allocated, user-managed memory, such as
      that you might receive from a call to malloc() in C or new in an object
      oriented language such as C++ or Java 
	  ◦	Note: there are other things we will ignore for now like:
      statically-initialized variables) 
`
        }
      ]
    },
    {
      id: 15,
      name: "Memory Problems (Leak, Stack Overflow, Segmentation Fault, Page Fault etc.)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 16,
      name: "Internal vs. External Fragmentation",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 17,
      name: "Paging",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 18,
      name: "Two Types of Locality",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
•	The idea behind hardware caches is to take advantage of locality: 
  ◦	Temporal Locality: the idea is that an instruction or data item that has
                       been recently accessed will likely be re-accessed soon in
                       the future 
  ◦	Spatial Locality: the idea is that if a program accesses memory at address
                      x, it will likely soon access memory near x. 
`
        }
      ]
    },
    {
      id: 19,
      name: "Single threaded process vs. Multi-threaded process",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 20,
      name: "Context Switching between threads",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 21,
      name: "Race condition, critical section, atomicity, transaction",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 22,
      name: "Multi-threading Data Structures, Locks, Condition Variables, Mutexes, Semaphore",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 23,
      name: "Famous Concurrency Problems: bounded buffer, dining philosophers, etc.",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 24,
      name: "Common problems with concurrency (Non-Deadlock, Deadlock, Order-Violation)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 25,
      name: "Event-Based Concurrency (e.g. Node.JS)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
Event-based Concurrency (Advanced) [single thread: the event loop]
	•	You can actually build concurrent applications without using threads 
	•	Event-based concurrency is a different style concurrent programming. It is
    often used in both GUI-based applications [O96] as well as some types of
    internet servers [PDZ99] 
	•	It has become popular in some modern systems, including server-side
    frameworks such as node.js [N13], but its roots are found in C/UNIX systems
    that we’ll discuss below. 
	•	The two problems event-based concurrency addresses: 
	  ◦	Managing concurrency correctly in multi-threaded applications can be
      challenging; as we’ve discussed, missing locks, deadlock, and other nasty
      problems can arise. 
	  ◦	in a multi-threaded application, the developer has little or no control
      over what is scheduled at a given moment in time; rather, the programmer
      simply creates threads and then hopes that the underlying OS schedules
      them in a reasonable manner across available CPUs 

The Crux: how to build concurrent servers without threads

The Basic Idea: An Event Loop
	•	The basic approach we’ll use, as stated above, is called event-based
    concurrency. 
	•	The approach is quite simple: 
	  ◦	you simply wait for something (i.e., an “event”) to occur; 
	  ◦	when it does, you check what type of event it is and do the small amount
      of work it requires (which may include issuing I/O requests, or scheduling
      other events for future handling, etc.). 
	  ◦	That’s it! 


•	Example: pseudo code for a canonical event-based server (event loop) 
  ￼while(1) {
    events = getEvents();
    for (e in events)
      processEvent(e);
  }
  ◦	The main loop simply waits for something to do (by calling getEvents() in
    the code above) and then, for each event returned, processes them, one at a
    time; 
  ◦	the code that processes each event is known as an event handler. 
  ◦	Importantly, when a handler processes an event, it is the only activity
    taking place in the system; thus, deciding which event to handle next is
    equivalent to scheduling. 
  ◦	This explicit control over scheduling is one of the fundamental advantages
    of the event based approach.
`
        }
      ]
    },
    {
      id: 26,
      name: "Blocking vs. Non-Blocking Interfaces (Event-based Concurrency)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
Aside: Blocking vs. Non-Blocking Interfaces
	•	Blocking (or synchronous) interfaces do all of their work before returning
    to the caller 
	•	Non-blocking (or asynchronous) interfaces begin some work but return
    immediately, thus letting whatever work that needs to be done get done in
    the background. 
	•	The usual culprit in blocking calls is I/O of some kind. 
	  ◦	For example, if a call must read from disk in order to complete, it might
      block, waiting for the I/O request that has been sent to the disk to
      return. 
	•	Non-blocking interfaces can be used in any style of programming (e.g., with
    threads), but are essential in the event-based approach, as a call that
    blocks will halt all progress.

Why Simpler? No Locks Needed
	•	With a single CPU and an event-based application, the problems found in
    concurrent programs are no longer present. 
	  ◦	Specifically, because only one event is being handled at a time, there is
      no need to acquire or release locks; the event-based server cannot be
      interrupted by another thread because it is decidedly single threaded. 
	•	Thus, concurrency bugs common in threaded programs do not manifest in the
    basic event-based approach.

TIP: DON’T BLOCK IN EVENT-BASED SERVERS
•	Event-based servers enable fine-grained control over scheduling of tasks. 
•	However, to maintain such control, no call that blocks the execution the
  caller can ever be made; failing to obey this design tip will result in a
  blocked event-based server 

Asynchronous I/O
•	Many modern operating systems have introduced new ways to issue I/O requests
  to the disk system, referred to generically as asynchronous I/O. 
  ◦	These interfaces enable an application to issue an I/O request and return
    control immediately to the caller, before the I/O has completed; 
  ◦	additional interfaces enable an application to determine whether various
    I/Os have completed (Tim note: e.g., Polling I/O vs. Interrupt)
`
        }
      ]
    },
    {
      id: 27,
      name: "What does a canonical device consist of?",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 28,
      name: "Interrupt vs. Polling",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 29,
      name: "Device Driver",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 30,
      name: "Single HDD vs. RAIDs",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 31,
      name: "What is the File System, Ideal file system, File System Mental Model",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 32,
      name: "What is a File, Directory, Directory Tree",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 33,
      name: "Hard link vs. Link",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 34,
      name: "Inode vs Inumber",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 35,
      name: "Crash-consistency Problem and solutions",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    }
  ]
};
