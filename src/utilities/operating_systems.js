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
      tabs: [
        {
          image_src: "https://notes.shichao.io/spec/figure_3.2.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/System_call

In computing, a system call is the programmatic way in which a computer program
requests a service from the kernel of the operating system it is executed on.
This may include hardware-related services (for example, accessing a hard disk
drive), creation and execution of new processes, and communication with integral
kernel services such as process scheduling. System calls provide an essential
interface between a process and the operating system.

In most systems, system calls can only be made from userspace processes, while
in some systems, OS/360 and successors for example, privileged system code also
issues system calls.[1]

Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

◦	User applications run in what is referred to as user mode which means the
  hardware restricts what applications can do; 
  ▪	for example, an application running in user mode can’t typically initiate an
    I/O request to the disk, access any physical memory page, or send a packet
    on the network. 
◦	A system call transfers control into the OS while simultaneously raising the
  hardware privilege level. 
◦	When a system call is initiated (usually through a special hardware-specific
  instruction called a trap), the hardware transfers control to a pre-specified
  trap handler and simultaneously raises the privilege level to kernel mode. 
  ▪	In kernel mode, the OS has full access to the hardware of the system and
    thus can do things like initiate an I/O request or make more memory
    available to a program. 
  ▪	When the OS is done servicing the request, it passes control back to the
    user via a special return-from-trap instruction, which reverts to user mode
    while simultaneously passing control back to where the application left off. 
`
        }
      ]
    },
    {
      id: 11,
      name: "Context Switching",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 12,
      name: "Caches (Single-CPU vs. Multi-CPU Hardware)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 13,
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
      id: 14,
      name: "Memory Problems (Leak, Stack Overflow, Segmentation Fault, Page Fault etc.)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 15,
      name: "Internal vs. External Fragmentation",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 16,
      name: "Paging",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 17,
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
      id: 18,
      name: "Single threaded process vs. Multi-threaded process",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 19,
      name: "Context Switching between threads",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 20,
      name: "Race condition, critical section, atomicity, transaction",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 21,
      name: "Multi-threading Data Structures, Locks, Condition Variables, Mutexes, Semaphore",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 22,
      name: "Famous Concurrency Problems: bounded buffer, dining philosophers, etc.",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 23,
      name: "Common problems with concurrency (Non-Deadlock, Deadlock, Order-Violation)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 24,
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
      id: 25,
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
      id: 26,
      name: "What does a canonical device consist of?",
      language: "js",
      tabs: [
        {
          image_src: "https://slideplayer.com/slide/13081284/79/images/5/Hint%3A+remember%2C+devices+can+be+slow%21.jpg",
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

•	A device has two important components: 
  ◦	The hardware interface it presents to the rest of the system. Just like a
    piece of software, hardware must also present some kind of interface that
    allows the system software to control its operation. Thus, all devices have
    some specified interface and protocol for typical interaction. 
  ◦	Its internal structure. Very simple devices will have one or a few hardware
    chips to implement their functionality; more complex devices will include a
    simple CPU, some general purpose memory, and other device-specific chips to
    get their job done. 
    ▪	For example, modern RAID controllers might consist of hundreds of
      thousands of lines of firmware (i.e., software within a hardware device)
      to implement its functionality. 

The Canonical Protocol
•	In the picture above, the (simplified) device interface is comprised of three
  registers. By reading and writing these registers, the operating system can
  control device behavior. 
  ◦	status register: can be read to see the current status of the device 
  ◦	command register: tells the device to perform a certain task 
  ◦	data register: can pass data to the device, or get data from the device 
•	Example: a typical interaction that the OS might have with the device in order
  to get the device to do something on its behalf. The protocol is as follows: 
  * See code in picture *
￼
  ◦	The protocol has four steps: 
    ▪	First, the OS waits until the device is ready to receive a command by
      repeatedly reading the status register; we call this polling the device
      (basically, just asking it what is going on). 
    ▪	Second, the OS sends some data down to the data register; 
      ▪	one can imagine that if this were a disk, for example, that multiple
        writes would need to take place to transfer a disk block (say 4KB) to
        the device. 
      ▪	When the main CPU is involved with the data movement (as in this example
        protocol), we refer to it as programmed I/O (PIO). 
    ▪	Third, the OS writes a command to the command register; doing so
      implicitly lets the device know that both the data is present and that it
      should begin working on the command. 
    ▪	Fourth, the OS waits for the device to finish by again polling it in a
      loop, waiting to see if it is finished (it may then get an error code to
      indicate success or failure). 
•	Basic protocol summary: 
  ◦	Pros: simple and working 
  ◦	Cons: 
    ▪	The first problem you might notice in the protocol is that polling seems
      inefficient; specifically, it wastes a great deal of CPU time just waiting
      for the (potentially slow) device to complete its activity, instead of
      switching to another ready process and thus better utilizing the CPU. 

The Crux: How to Avoid The Costs of Polling
•	How can the OS check device status without frequent polling, and thus lower
  the CPU overhead required to manage the device? 

Lowering CPU Overhead With Interrupts
•	The invention that many engineers came upon years ago to improve this
  interaction is something we’ve seen already: the interrupt. 
•	Interrupts allow for the overlap of computation and I/O, which is key for
  improved utilization 
•	Instead of polling the device repeatedly: 
  ◦	the OS can issue a request, put the calling process to sleep, and context
    switch to another task. 
  ◦	When the device is finally finished with the operation, it will raise a
    hardware interrupt, causing the CPU to jump into the OS at a pre-determined
    interrupt service routine (ISR) or more simply an interrupt handler. 
  ◦	The handler is just a piece of operating system code that will finish the
    request (for example, by reading data and perhaps an error code from the
    device) and wake the process waiting for the I/O, which can then proceed as
    desired. 
`
        }
      ]
    },
    {
      id: 27,
      name: "Device Driver",
      language: "js",
      tabs: [
        {
          image_src: "https://www.faceofit.com/wp-content/uploads/2016/06/Device-Drivers-1.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Device_driver

In computing, a device driver is a computer program that operates or controls a
particular type of device that is attached to a computer.[1] A driver provides a
software interface to hardware devices, enabling operating systems and other
computer programs to access hardware functions without needing to know precise
details about the hardware being used.

A driver communicates with the device through the computer bus or communications
subsystem to which the hardware connects. When a calling program invokes a
routine in the driver, the driver issues commands to the device. Once the device
sends data back to the driver, the driver may invoke routines in the original
calling program. Drivers are hardware dependent and operating-system-specific.
They usually provide the interrupt handling required for any necessary
asynchronous time-dependent hardware interface.[2]
`
        }
      ]
    },
    {
      id: 28,
      name: "Single HDD vs. RAIDs",
      language: "js",
      tabs: [
        {
          image_src: "https://image.slidesharecdn.com/caissac10-2012-pub-121011023618-phpapp02/95/progress-and-outlook-of-hdd-technology-xiaodong-che-2-728.jpg?cb=1349923790",
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

Hard disk drives: these drives have been the main form of persistent data
storage in computer systems for decades and much of the development of file
system technology (coming soon) is predicated on their behavior.

The Interface: [applies to all modern disk drives]
•	The drive consists of a large number of sectors (512-byte blocks), each of
  which can be read or written. 
•	The sectors are numbered from 0 to n − 1 on a disk with n sectors. 
•	Thus the address space of the drive can be viewed as an array of sectors from
  0 to n-1 
•	Notes: 
  ◦	Multi-sector operations are possible; indeed, many file systems will read or
    write 4KB at a time (or more). However, when updating the disk, the only
    guarantee drive manufactures make is that a single 512-byte write is atomic
    (i.e., it will either complete in its entirety or it won’t complete at all);
    thus, if an untimely power loss occurs, only a portion of a larger write may
    complete (sometimes called a torn write). 
  ◦	There are some assumptions most clients of disk drives make, but that are
    not specified directly in the interface. Specifically, 
    ▪	One can usually assume that accessing two blocks that are near one-another
      within the drive’s address space will be faster than accessing two blocks
      that are far apart. 
    ▪	One can also usually assume that accessing blocks in a contiguous chunk
      (i.e., a sequential read or write) is the fastest access mode, and usually
      much faster than any more random access pattern. 

Basic Components of a Modern Disk
•	Platter: 
  ◦	a circular hard surface on which data is stored persistently by inducing
    magnetic changes to it. 
  ◦	A disk may have one or more platters; each platter has 2 sides, each of
    which is called a surface. 
  ◦	These platters are usually made of some hard material (such as aluminum),
    and then coated with a thin magnetic layer that enables the drive to
    persistently store bits even when the drive is powered off. 
•	Spindle: 
  ◦	The platters are all bound together around the spindle, which is connected
    to a motor that spins the platters around (while the drive is powered on) at
    a constant (fixed) rate. 
  ◦	The rate of rotation is often measured in rotations per minute (RPM), and
    typical modern values are in the 7,200 RPM to 15,000 RPM range. 
•	Track: 
  ◦	Data is encoded on each surface in concentric circles of sectors; we call
    one such concentric circle a track. 
  ◦	A single surface contains many thousands and thousands of tracks, tightly
    packed together, with hundreds of tracks fitting into the width of a human
    hair. 
•	Disk Head: 
  ◦	To read and write from the surface, we need a mechanism that allows us to
    either sense (i.e., read) the magnetic patterns on the disk or to induce a
    change in (i.e., write) them. The is done by the disk head. 
  ◦	There is one such head per surface of the drive. 
•	Disk Arm: 
  ◦	The disk head is attached to a single disk arm, which moves across the
    surface to position the head over the desired track. 



Redundant Arrays of Inexpensive Disks (RAIDs)
CRUX: HOW TO MAKE A LARGE, FAST, RELIABLE DISK
Redundant Array of Inexpensive Disks better known as RAID [P+88], a technique to
use multiple disks in concert to build a faster, bigger, and more reliable disk
system.
•	Externally, a RAID looks like a disk: a group of blocks one can read or write. 
•	Internally, the RAID is a complex beast, consisting of multiple disks, memory
  (both volatile and non-), and one or more processors to manage the system. 
  ◦	A hardware RAID is very much like a computer system, specialized for the
    task of managing a group of disks. 
•	RAID Advantages over a single disk 
  ◦	Performance: Using multiple disks in parallel can greatly speed up I/O times 
  ◦	Capacity: Large data sets demand large disks 
  ◦	Reliability: with some form of redundancy, RAIDs can tolerate the loss of a
    disk and keep operating as if nothing were wrong. 
•	Transparency: 
  ◦	Amazingly, RAIDs provide these advantages transparently to systems that use
    them, i.e., a RAID just looks like a big disk to the host system. 
  ◦	The beauty of transparency, of course, is that it enables one to simply
    replace a disk with a RAID and not change a single line of software; the
    operating system and client applications continue to operate without
    modification. 
  ◦	In this manner, transparency greatly improves the deployability of RAID,
    enabling users and administrators to put a RAID to use without worries of
    software compatibility 

Tip: Transparency enables deployment
•	When considering how to add new functionality to a system, one should always
  consider whether such functionality can be added transparently, in a way that
  demands no changes to the rest of the system. 
•	RAID is a perfect example, and certainly its transparency contributed to its
  success; administrators could install a SCSI-based RAID storage array instead
  of a SCSI disk, and the rest of the system (host computer, OS, etc.) did not
  have to change one bit to start using it. 

Interface and RAID Internals
•	To a file system above, a RAID looks like a big, (hopefully) fast, and
  (hopefully) reliable disk. Just as with a single disk, it presents itself as a
  linear array of blocks, each of which can be read or written by the file
  system (or other client). 
•	When a file system issues a logical I/O request to the RAID, 
  ◦	the RAID internally must calculate which disk (or disks) to access in order
    to complete the request, and then issue one or more physical I/Os to do so. 
  ◦	The exact nature of these physical I/Os depends on the RAID level 
•	Example: consider a RAID that keeps two copies of each block (each one on a
  separate disk); when writing to such a mirrored RAID system, the RAID will
  have to perform two physical I/Os for every one logical I/O it is issued. 
•	Hardware: At a high level, a RAID is very much a specialized computer system:
  it has a processor, memory, and disks; however, instead of running
  applications, it runs specialized software designed to operate the RAID 
  ◦	A RAID system is often built as a separate hardware box, with a standard
    connection (e.g., SCSI, or SATA) to a host. 
  ◦	Microcontroller that runs firmware to direct the operation of the RAID 
  ◦	Volatile memory such as DRAM to buffer data blocks as they are read and
    written 
  ◦	In some cases, non-volatile memory to buffer writes safely 
  ◦	Perhaps even specialized logic to perform parity calculations 

Fault Model [RAIDs are designed to detect and recover from certain kinds of disk
faults]

Tim note: See RAID levels

`
        }
      ]
    },
    {
      id: 29,
      name: "File System Mental Model",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

•	Two aspects of file systems: 
  ◦	The data structures of the file system 
    ▪	What types of on-disk structures are utilized by the file system to
      organize its data and metadata? 
    ▪	The first file systems we’ll see (including vsfs below) employ simple
      structures, like arrays of blocks or other objects, whereas more
      sophisticated file systems, like SGI’s XFS, use more complicated
      tree-based structures 
  ◦	The access methods of the file system 
    ▪	How does it map the calls made by a process, such as open(), read(),
      write(), etc., onto its structures? 
    ▪	Which structures are read during the execution of a particular system
      call? Which are written? 
    ▪	How efficiently are all of these steps performed? 
Aside: Mental Models of File Systems
•	For file systems, your mental model should eventually include answers to
  questions like: 
  ◦	what on-disk structures store the file system’s data and metadata? 
  ◦	What happens when a process opens a file? 
  ◦	Which on-disk structures are accessed during a read or write? 

Overall Organization (a simplified version of a typical UNIX file system )
•	We now develop the overall on-disk organization of the data structures of the
  vsfs file system 
•	First, we divide the disk into blocks; simple file systems use just one block
  size, and that is what we will do here. 
  ◦	Thus, our view of the disk partition where we’re building our file system is
    simple: 
    ▪	A series of blocks, each of size 4 KB. 
    ▪	The blocks are addressed from 0 to N −1, in a partition of size N 4-KB
      blocks. 
    ▪	Assume we have a really small disk, with just 64 blocks: 
•	Most of the space in any file system is (and should be) user data. Let’s call
  the region of the disk we use for user data the data region, and again for
  simplicity, reserve a fixed portion of the disk for these blocks, say the last
  56 of 64 blocks on the disk: 
•	A file system has to track information about each file. To store this
  metadata, file systems usually have a structure called an inode. We will
  reserve 5 of our blocks for inodes. We will call this portion of the disk the
  inode table. 
  ◦	Note: inodes are typically not that big, for example 128 or 256 bytes. 
  ◦	Assuming 256 bytes per inode, a 4KB block can hold 16 inodes, and our file
    system above contains 80 total inodes. 
  ◦	In our simple file system, built on a tiny 64-block partition, this number
    represents the maximum number of files we can have in our file system;
    however, do note that the same file system, built on a larger disk, could
    simply allocate a larger inode table and thus accommodate more files. 
•	We need an allocation structure to track whether inodes or data blocks are
  free or allocated. Many allocation-tracking methods are possible. Example: 
  ◦	We could use a free list that points to the first free block, which then
    points to the next free block, and so forth 
  ◦	We instead choose a simple and popular structure known as a bitmap, one for
    the data region (the data bitmap), and one for the inode table (the inode
    bitmap). 
    ▪	Each bit in the bitmap will indicate whether the corresponding
      object/block is free (0) or in-use (1). 
  ◦	Note: 
    ▪	A 4KB bitmap can track the allocation 32K objects, yet we only have 80
      inodes and 56 data blocks. We are just using the entire 4KB block for each
      bitmap for simplicity. 
•	We reserve this for the superblock, denoted by an S in the diagram below. 
  ◦	The superblock contains information about this particular file system,
    including, for example: 
    ▪	how many inodes and data blocks are in the file system (80 and 56,
      respectively in this instance) 
    ▪	where the inode table begins (block 3), and so forth 
    ▪	It will likely also include a magic number of some kind to identify the
      file system type (in this case, vsfs). 
  ◦	Thus, when mounting a file system, the operating system will read the
    superblock first, to initialize various parameters, and then attach the
    volume to the file-system tree. When files within the volume are accessed,
    the system will thus know exactly where to look for the needed on-disk
    structures. 
￼    * See Diagram *
 


`
        }
      ]
    },
    {
      id: 30,
      name: "What is a File, Directory, Directory Tree",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

Files and Directories
•	Two key abstractions have developed over time in the virtualization of
  storage. 
  ◦	File: a linear array of bytes each of which you can read or write 
    ▪	Each file has some kind of low-level name, usually a number of some kind;
      often, the user is not aware of this name. This name is often called its
      inode number. 
    ▪	In most systems, the OS does not know much about the structure of the file
      (e.g., whether it is a picture, or a text file, or C code); rather, the
      responsibility of the file system is simply to store such data
      persistently on disk and make sure that when you request the data again,
      you get what you put there in the first place. 
  ◦	Directory: 
    ▪	A directory also has a low-level name (i.e., an inode number), but its
      contents are quite specific: it contains a list of (user-readable name,
      low-level name) pairs. 
    ▪	For example, let’s say there is a file with the low-level name “10”, and
      it is referred to by the user-readable name of “foo”. 
      ▪	The directory that “foo” resides in thus would have an entry (“foo”,
        “10”) that maps the user-readable name to the low-level name. 
    ▪	Each entry in a directory refers to either files or other directories. 
    ▪	By placing directories within other directories, users are able to build
      an arbitrary directory tree (or directory hierarchy), under which all
      files and directories are stored. 
•	Directory trees: 
  ◦	The directory hierarchy starts at a root directory (in UNIX-based systems,
    the root directory is simply referred to as /) and uses some kind of
    separator to name subsequent sub-directories until the desired file or
    directory is named. 
  ◦	Example:  * See Diagram *
  ◦	Note: Directories and files can have the same name as long as they are in
          different locations in the file-system tree 
•	The parts of a file name: [separated by a period] 
  ◦	The first part is an arbitrary name, whereas the second part of the file
    name is usually used to indicate the type of the file 
  ◦	However, this is usually just a convention: there is usually no enforcement
    that the data contained in a file named main.c is indeed C source code. 
•	Notes: 
  ◦	Names are important in systems as the first step to accessing any resource
    is being able to name it. 
  ◦	In UNIX systems, virtually everything that you can think of is named through
    the file system. Beyond just files, devices, pipes, and even processes [K84]
    can be found in what looks like a plain old file system. 
  ◦	In UNIX systems, the file system thus provides a unified way to access files
    on disk, USB stick, CD-ROM, many other devices, and in fact many other
    things, all located under the single directory tree. 


`
        }
      ]
    },
    {
      id: 31,
      name: "Hard link vs. Symbolic Link",
      language: "js",
      tabs: [
        {
          image_src: "https://miro.medium.com/max/826/1*0jTNXBcldvnA346Trvc7Pw.png",
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php

•	Symbolic Links 
  ◦	As we look around, we are likely to see a directory listing with an entry
    like this: 
    ▪	 lrwxrwxrwx 1 root root 11 2007-08-11 07:34 libc.so.6 -> libc-2.6.so 
  ◦	Notice how the first letter of the listing is “l” and the entry seems to
    have two filenames? This is a special kind of a file called a symbolic link
    (also known as a soft link or symlink). In most Unix-like systems it is
    possible to have a file referenced by multiple names. While the value of
    this may not be obvious, it is really a useful feature. 
    ▪	The directory listing above (from the /lib directory of a Fedora system)
      shows a symbolic link called “libc.so.6” that points to a shared library
      file called “libc-2.6.so.” This means that programs looking for
      “libc.so.6” will actually get the file “libc-2.6.so.” 
•	Hard Links 
  ◦	There is a second type of link called a hard link. Hard links also allow
    files to have multiple names, but they do it in a different way. 

•	Hard Links 
  ◦	Hard links are the original Unix way of creating links, compared to symbolic
    links, which are more modern. By default, every file has a single hard link
    that gives the file its name. When we create a hard link, we create an
    additional directory entry for a file. Hard links have two important
    limitations: 
    1.	A hard link cannot reference a file outside its own file system. This
        means a link cannot reference a file that is not on the same disk
        partition as the link itself. 
    2.	A hard link may not reference a directory. 
  ◦	A hard link is indistinguishable from the file itself. Unlike a symbolic
    link, when you list a directory containing a hard link you will see no
    special indication of the link. When a hard link is deleted, the link is
    removed but the contents of the file itself continue to exist (that is, its
    space is not deallocated) until all links to the file are deleted. 
  ◦	It is important to be aware of hard links because you might encounter them
    from time to time, but modern practice prefers symbolic links, which we will
    cover next. 
•	Symbolic Links 
  ◦	Symbolic links were created to overcome the limitations of hard links.
    Symbolic links are a special type of file that contains a text pointer to
    the target file or directory. In this regard, they operate in much the same
    way as a Windows shortcut though of course, they predate the Windows feature
    by many years ;-) 
  ◦	A file pointed to by a symbolic link, and the symbolic link itself are
    largely indistinguishable from one another. For example, if you write
    something to the symbolic link, the referenced file is written to. However
    when you delete a symbolic link, only the link is deleted, not the file
    itself. If the file is deleted before the symbolic link, the link will
    continue to exist, but will point to nothing. In this case, the link is said
    to be broken. In many implementations, the ls command will display broken
    links in a distinguishing color, such as red, to reveal their presence. 
  ◦	The concept of links can seem very confusing, but hang in there. We're going
    to try all this stuff and it will, hopefully, become clear. 
•	Hard links and Inodes 
  ◦	When thinking about hard links, it is helpful to imagine that files are made
    up of two parts: the data part containing the file's contents and the name
    part which holds the file's name. 
  ◦	When we create hard links, we are actually creating additional name parts
    that all refer to the same data part. The system assigns a chain of disk
    blocks to what is called an inode, which is then associated with the name
    part. Each hard link therefore refers to a specific inode containing the
    file's contents. 
  ◦	The ls command has a way to reveal this information. It is invoked with the
    “-i” option (same inode number means same file): 
    ▪	$ ls -li 
•	Removing Files and Directories 
  ◦	One thing to remember about symbolic links is that most file operations are
    carried out on the link's target, not the link itself. rm is an exception.
    When you delete a link, it is the link that is deleted, not the target. 

Source: http://pages.cs.wisc.edu/~remzi/OSTEP/
•	Hard links are somewhat limited: 
  ◦	You can’t create one to a directory (for fear that you will create a cycle
    in the directory tree); 
  ◦	You can’t hard link to files in other disk partitions (because inode numbers
    are only unique within a particular file system, not across file systems);
    etc. 
•	Symbolic links 
  ◦	Symbolic links were created because to the limitations of hard links
  ◦	They are sometimes called soft links
`
        }
      ]
    },
    {
      id: 32,
      name: "Inode vs Inumber",
      language: "js",
      tabs: [
        {
          image_src: "https://cdn-images-1.medium.com/max/1600/1*dsoSz5SSHZsxtLNRhcFsHg.png",
          name: "Question",
          data:
`Source: http://pages.cs.wisc.edu/~remzi/OSTEP/

File Organization: The Inode
•	The inode is the generic name that is used in many file systems to describe
  the structure that holds the metadata for a given file, such as its 
  ◦	Length 
  ◦	Permissions 
  ◦	location of its constituent blocks. 
•	The name goes back at least as far as UNIX (and probably further back to
  Multics if not earlier systems); it is short for index node, as the inode
  number is used to index into an array of on-disk inodes in order to find the
  inode of that number. 
•	As we’ll see, design of the inode is one key part of file system design. 
•	Most modern systems have some kind of structure like this for every file they
  track, but perhaps call them different things (such as dnodes, fnodes, etc.). 
•	Inumber: 
  ◦	Each inode is implicitly referred to by a number (called the inumber), which
    we’ve earlier called the low-level name of the file. 
  ◦	In vsfs (and other simple file systems), given an i-number, you should
    directly be able to calculate where on the disk the corresponding inode is
    located. 
•	Example: vsfs inode layout (closeup of disk above) 
￼* See diagram *
  ◦	Inode table size: 20KB (5 4KB blocks); thus, 80 inodes (assuming each inode
    is 256 bytes). The inode table ranges from 12KB to 32KB 
  ◦	To read inode number 32 the file system would have to calculate: 
    ▪	Offset in the inode region (32 * sizeof(inode) or 8192), and add it to the
      starting address of the inode table (12KB). Thus, the byte address of the
      desired block of inodes is 20KB 
    ▪	Recall that disks are not byte addressable, but rather consist of a large
      number of addressable sectors, usually 512 bytes. Thus, to fetch the block
      of inodes that contains inode 32, the file system would have to issue a
      read to sector 20KB/0.5KB or 40 to fetch the desired inode block. 
    ▪	More generally the sector address iaddr of the inode can be calculated as
      follows: 
￼* See Diagram *
•	What’s inside an inode: (example from an ext2 inode) 
  ◦	Note: Type info is kept in the directory entry, and thus is not found in the
    inode itself 
￼* See diagram *
  ◦	Inside each inode is virtually all of the information you need about a file: 
    ▪	Its type (e.g., regular file, directory, etc.) 
    ▪	Its size 
    ▪	The number of blocks allocated to it 
    ▪	Protection information (such as who owns the file, as well as who can
      access it) 
    ▪	Some time information, including when the file was created, modified, or
      last accessed 
    ▪	Information about where its data blocks reside on disk (e.g., pointers of
      some kind) 
  ◦	We refer to all such information about a file as metadata; in fact, any
    information inside the file system that isn’t pure user data is often
    referred to as such. 
•	How should an inode refer to where data block are? 
  ◦	One of the most important decisions in the design of the inode is how it
    refers to where data blocks are. 
  ◦	One simple approach would be to have one or more direct pointers (disk
    addresses) inside the inode; each pointer refers to one disk block that
    belongs to the file. 
  ◦	Such an approach is limited: for example, if you want to have a file that is
    really big (e.g., bigger than the size of a block multiplied by the number
    of direct pointers), you are out of luck. 
•	 The Multi-Level Index 
  ◦	To support bigger files, file system designers have had to introduce
    different structures within inodes. One common idea is to have a special
    pointer known as an indirect pointer. 
    ▪	Instead of pointing to a block that contains user data, it points to a
      block that contains more pointers, each of which point to user data. 
  ◦	Thus, an inode may have some fixed number of direct pointers (e.g., 12), and
    a single indirect pointer. If a file grows large enough, an indirect block
    is allocated (from the data-block region of the disk), and the inode’s slot
    for an indirect pointer is set to point to it. 
    ▪	Example: 
      ▪	4-KB blocks and 4-byte disk addresses, that adds another 1024 pointers
        (4KB/4B) 
      ▪	Thus, the file can grow to be (12 + 1024) * 4KB or 4,144KB 
        ▪	Originally, it was just 48KB max 
  ◦	To support even larger files, you can add another pointer to the inode: The
    double indirect pointer 
    ▪	This pointer refers to a block that contains pointers to indirect blocks,
      each of which contain pointers to data blocks. 
    ▪	A double indirect block thus adds the possibility to grow files with an
      additional 1024*1024 or 1-million 4KB blocks, in other words supporting
      files that are over 4GB in size. 
◦	To support even larger files, you can add another pointer to the inode: The
  triple indirect pointer 
◦	Overall, this imbalanced tree is referred to as the multi-level index approach
  to pointing to file blocks 
◦	Many file systems use a multi-level index, including commonly-used file
  systems such as Linux ext2 [P09] and ext3, NetApp’s WAFL, as well as the
  original UNIX file system. Other file systems, including SGI XFS and Linux
  ext4, use extents instead of simple pointers 
◦	Why use an imbalanced tree like this? 
  ▪	Well, as it turns out, many researchers have studied file systems and how
    they are used, and virtually every time they find certain “truths” that
    hold across the decades. One such finding is that most files are small. This
    imbalanced design reflects such a reality; 
  ▪	if most files are indeed small, it makes sense to optimize for this case.
    Thus, with a small number of direct pointers (12 is a typical number), an
    inode can directly point to 48 KB of data, needing one (or more) indirect
    blocks for larger files. 
  ▪	See Agrawal et. al [A+07] for a recent study; Figure 40.2 summarizes those
    results. 
￼* See diagram *
  ▪	Note: Of course, in the space of inode design, many other possibilities
    exist; after all, the inode is just a data structure, and any data structure
    that stores the relevant information, and can query it effectively, is
    sufficient. As file system software is readily changed, you should be
    willing to explore different designs should workloads or technologies
    change. 

`
        }
      ]
    }
  ]
};
