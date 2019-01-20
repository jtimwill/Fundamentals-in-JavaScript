export default {
  name:"Languages",
  data: [
    {
      id: 0,
      name: "Generations: Machine Code, Assembly Language, Procedural Languages",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Programming_paradigm

First Generation:
	•	Machine code: 
	  ◦	directly represents the instructions (the contents of program memory) as a
      sequence of numbers. 

Second Generation:
	•	Assembly language: 
	  ◦	machine instructions are represented by mnemonics 
	  ◦	memory addresses can be given symbolic labels 
	  ◦	Assembly was, and still is, used for time critical systems and frequently
      in embedded systems as it gives the most direct control of what the
      machine actually does. 

Third Generation:
	•	Procedural languages: 
	  ◦	Following the widespread use of procedural languages, object-oriented
      languages like Simula, Smalltalk, C++, C#, Eiffel and Java were created. 
	  ◦	They describe, step by step, exactly the procedure that should, according
      to the particular programmer at least, be followed to solve a specific
      problem. 
	  ◦	Examples: 
	    ▪	COBOL (COmmon Business Oriented Language) – uses terms like file, move
        and copy. 
	    ▪	FORTRAN (FORmula TRANslation) – using mathematical language terminology,
        it was developed mainly for scientific and engineering problems. 
	    ▪	ALGOL (ALGOrithmic Language) – focused on being an appropriate language
        to define algorithms, while using mathematical language terminology and
        targeting scientific and engineering problems just like FORTRAN. 
	    ▪	PL/I (Programming Language One) – a hybrid commercial/scientific general
        purpose language supporting pointers. 
	    ▪	BASIC (Beginners All purpose Symbolic Instruction Code) – it was
        developed to enable more people to write programs. 
	    ▪	C – a general-purpose programming language, initially developed by
        Dennis Ritchie between 1969 and 1973 at AT&T Bell Labs. 

Bonus:
Object-oriented programming:
	•	In these languages, data and methods of manipulating the data are kept as a
    single unit called an object. The only way that a user can access the data
    is via the object's "methods"; as a result, the inner workings of an object
    may be changed without affecting any code that uses the object.  
	•	The necessity of every object to have associative methods leads some
    skeptics to associate OOP with software bloat. Polymorphism was developed as
    one attempt to resolve this dilemma.
`
        }
      ]
    },
    {
      id: 1,
      name: "Dynamic vs. Static Languages",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Dynamic_programming_language

Dynamic Programming Languages:
	•	is a term used in computer science to describe a class of high-level
    programming languages which, at runtime, execute many common programming
    behaviors that static programming languages perform during compilation. 
	•	Popular dynamic programming languages include JavaScript, Python, Ruby, PHP,
    Lua and Perl. 
	•	Most dynamic languages are also dynamically typed
	•	Dynamic languages are frequently (but not always) referred to as "scripting
    languages"
`
        }
      ]
    },
    {
      id: 2,
      name: "Compiled Languages vs. Interpreted Languages",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Interpreter_(computing)

Compiled Programming Languages
	•	Programs written in a high level language are either directly executed by
    some kind of interpreter or converted into machine code by a compiler (and
    assembler and linker) for the CPU to execute. 
	•	While compilers (and assemblers) generally produce machine code directly
    executable by computer hardware, they can often (optionally) produce an
    intermediate form called object code. 
	•	This is basically the same machine specific code but augmented with a symbol
    table with names and tags to make executable blocks (or modules)
    identifiable and relocatable. 
	•	Compiled programs will typically use building blocks (functions) kept in a
    library of such object code modules. 
	•	A linker is used to combine (pre-made) library files with the object file(s)
    of the application to form a single executable file. 
	•	The object files that are used to generate an executable file are thus often
    produced at different times, and sometimes even by different languages
    (capable of generating the same object format). 
￼
Interpreted Languages
	•	An interpreter is a computer program that directly executes, i.e. performs,
    instructions written in a programming or scripting language, without
    previously compiling them into a machine language program. 
	•	A simple interpreter written in a low level language (e.g. assembly) may
    have similar machine code blocks implementing functions of the high level
    language stored, and executed when a function's entry in a look up table
    points to that code. 
	•	However, an interpreter written in a high level language typically uses
    another approach, such as generating and then walking a parse tree, or by
    generating and executing intermediate software-defined instructions, or
    both. 
	•	Interpreter strategies 
	  1. Parse the source code and perform its behavior directly. 
	     1. Examples: Early versions of LISP, Dartmouth BASIC 
	  2. Translate source code into some efficient intermediate representation and
       immediately execute this. 
	     1. Examples: Perl, Python, MATLAB, Ruby 
	  3. Explicitly execute stored precompiled code[1] made by a compiler which is
       part of the interpreter system. 
	     1. Examples: UCSD, Pascal 
	  4. Multiple: Contemporary versions of BASIC, Java 

Compiled Language: Only need to compile once. a compiler system, including a
                   (built in or separate) linker, generates a stand-alone
                   machine code program[2]
￼
Interpreted Language: Interpreter needs to run every time the program is run.
                      The code is run without having to be compiled into machine
                      code first.
￼
Speed:
	•	However, a compiled program still runs much faster, under most
    circumstances, in part because compilers are designed to optimize code, and
    may be given ample time for this. This is especially true for simpler high
    level languages without (much) dynamic data structures, checks or typing. 
`
        }
      ]
    },
    {
      id: 3,
      name: "C Integration",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.jvoegele.com/software/langcomp.html

Language Integration
It is important for a high level language (particularly interpreted languages)
to be able to integrate seamlessly with other languages. For various reasons,
including
	•	Integration with existing systems, 
	•	The need to interact with low level modules, 
	•	Sheer speed, 

Nearly every language to come along since C was first introduced provides such
integration with C.
	•	This allows high level languages to remain free of the low level constructs
    that make C great for systems programming, but add much complexity. 
`
        }
      ]
    },
    {
      id: 4,
      name: "Garbage Collection",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.jvoegele.com/software/langcomp.html

•	Garbage collection is a mechanism allowing a language implementation to free
  memory of unused objects on behalf of the programmer, thus relieving the
  burden on the programmer to do so. 
•	The alternative is for the programmer to explicitly free any memory that is no
  longer needed. 

Garbage Collection Strategies:

Reference Counting
•	Simplest scheme 
•	Involves the language keeping track of how many references there are to a
  particular object in memory, and deleting that object when that reference
  count becomes zero. 
•	Most important drawback (inability to handle cycles) 
  ◦	Cycles occur when two objects reference each other, and thus their reference
    counts will never become zero even if neither object is referenced by any
    other part of the program. 
  ◦	This is the scheme that is utilized by Python and Visual Basic, although in
    the case of Python an extra step is taken to ensure that cycles are handled
    appropriately. 

Mark and Sweep
•	Two phase process 
  ◦	The mark phase works by first starting at the "root" objects (objects on the
    stack, global objects, etc.), marking them as live, and recursively marking
    any objects referenced from them. These marked objects are the set of live
    objects in program, and any objects that were not marked in this phase are
    unreferenced and therefore candidates for collection. 
  ◦	In the sweep phase, any objects in memory that were not marked as live by
    the mark phase are deleted from memory. 
•	Primary drawback: 
  ▪	It is non-deterministic, meaning that objects are deleted at an unspecified
    time during the execution of the program. 
•	This is the most common form of garbage collection, and the one that is
  supported by most implementations of Eiffel, Smalltalk, Ruby, and Java. 

Generational Garbage Collection
•	Similar to mark and sweep 
  ◦	The differences is that it capitalizes on the statistical probability that
    objects that have been alive the longest tend to stay alive longer than
    objects that were newly created. 
•	Will divide objects into "generations" based upon how long they've been alive. 
  ◦	This division can be used to reduce the time spent in the mark and sweep
    phases because the oldest generation of objects will not need to be
    collected as frequently. 
•	Generational garbage collectors are not as common as the other forms but may
  be found in some implementations of Eiffel, Smalltalk, Ruby, and Java. 
`
        }
      ]
    },
    {
      id: 5,
      name: "Static vs. Dynamic Typing",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.jvoegele.com/software/langcomp.html

•	A dynamic type system doesn't require variables to be declared as a specific
  type. Any variable can contain any value or object. 
  ◦	However, care must be taken that variables hold the expected kind of object.
    Typically, if a variable contains an object of a different type than a user
    of the object expects, some sort of "message not understood" error is raised
    at run-time. 
•	Statically-typed languages require that all variables are declared with a
  specific type. 
  ◦	By enforcing the type constraint on objects contained or referred to by the
    variable, the compiler can ensure a "message not understood" error can never
    occur at run-time.
`
        }
      ]
    },
    {
      id: 6,
      name: "Higher Order Functions & Lexical Closures",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.jvoegele.com/software/langcomp.html

Higher order functions are functions that can be treated as if they were data
objects.
	•	In other words, they can be bound to variables (including the ability to be
    stored in collections), 
	•	they can be passed to other functions as parameters, 
	•	and they can be returned as the result of other functions. 

Higher order functions may be viewed as a form of deferred execution:
	•	A function may be defined in one context, passed to another context, and
    then later invoked by the second context. 
	•	This is different from standard functions in that higher order functions
    represent anonymous lambda functions, so that the invoking context need not
    know the name of the function being invoked. 

Lexical closures
	•	Lexical closures (also known as static closures, or simply closures) take
    this one step further by bundling up the lexical (static) scope surrounding
    the function with the function itself, so that the function carries its
    surrounding environment around with it wherever it may be used. 
	  ◦	This means that the closure can access local variables or parameters, or
      attributes of the object in which it is defined, and will continue to have
      access to them even if it is passed to another module outside of its
      scope. 
`
        }
      ]
    },
    {
      id: 7,
      name: "Pointer Arithmetic",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.jvoegele.com/software/langcomp.html

•	Pointer arithmetic is the ability for a language to directly manipulate memory
  addresses and their contents. 
•	While, due to the inherent unsafety of direct memory manipulation, this
  ability is not often considered appropriate for high-level languages, it is
  essential for low-level systems applications. 
•	Most object-oriented languages have foregone support of pointer arithmetic in
  favor of providing integration with C.
  •	This allows low-level routines to be implemented in C while the majority of
    the application is written in the higher level language.
`
        }
      ]
    },
    {
      id: 8,
      name: "Interpreter vs. Compiler",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Compiler

Compiler:
◦	Definition: A compiler is computer software that transforms computer code
              written in one programming language (the source language) into
              another programming language (the target language). Compilers are
              a type of translator that support digital devices, primarily
              computers. The name compiler is primarily used for programs that
              translate source code from a high-level programming language to a
              lower level language(e.g., assembly language, object code, or
              machine code) to create an executable program.[1] 

◦	However, there are many different types of compilers. 
  ▪	If the compiled program can run on a computer whose CPU or operating system
    is different from the one on which the compiler runs, the compiler is a
    cross-compiler. 
  ▪	A bootstrap compiler is written in the language that it intends to compile. 
  ▪	A program that translates from a low-level language to a higher level one
    is a decompiler. 
  ▪	A program that translates between high-level languages is usually called a
    source-to-source compiler or transpiler. 
◦	A compiler is likely to perform many or all of the following operations:
  preprocessing, lexical analysis, parsing, semantic analysis (syntax-directed
  translation), conversion of input programs to an intermediate representation,
  code optimization and code generation. Compilers implement these operations in
  phases that promote efficient design and correct transformations of source
  input to target output. Program faults caused by incorrect compiler behavior
  can be very difficult to track down and work around; therefore, compiler
  implementers invest significant effort to ensure compiler correctness.[2] 

Source: https://en.wikipedia.org/wiki/Interpreter_(computing)
Interpreter:
◦	Definition: In computer science, an interpreter is a computer program that
              directly executes, i.e. performs, instructions written in a
              programming or scripting language, without requiring them
              previously to have been compiled into a machine language program.

What is the difference between an interpreter and a compiler?

◦	The basic difference is that a compiler system, including a
  (built in or separate) linker, generates a stand-alone machine code program,
  while an interpreter system instead performs the actions described by the high
  level program. 
◦	A compiler can thus make almost all the conversions from source code semantics
  to the machine level once and for all (i.e. until the program has to be
  changed) while an interpreter has to do some of this conversion work every
  time a statement or function is executed.
◦	Development Cycle: 
  ▪	During the software development cycle, programmers make frequent changes to
    source code. When using a compiler, each time a change is made to the source
    code, they must wait for the compiler to translate the altered source files
    and link all of the binary code files together before the program can be
    executed. The larger the program, the longer the wait. 
  ▪	By contrast, a programmer using an interpreter does a lot less waiting, as
    the interpreter usually just needs to translate the code being worked on to
    an intermediate representation (or not translate it at all), thus requiring
    much less time before the changes can be tested. Effects are evident upon
    saving the source code and reloading the program. 
◦	Distribution: 
  ▪	A compiler converts source code into binary instruction for a specific
    processor's architecture, thus making it less portable. This conversion is
    made just once, on the developer's environment, and after that the same
    binary can be distributed to the user's machines where it can be executed
    without further translation. 
  ▪	A cross compiler can generate binary code for the user machine even if it
    has a different processor than the machine where the code is compiled. 
  ▪	An interpreted program can be distributed as source code. It needs to be
    translated in each final machine, which takes more time but makes the
    program distribution independent of the machine's architecture. However, the
    portability of interpreted source code is dependent on the target machine
    actually having a suitable interpreter. 
  ▪	The fact that interpreted code can easily be read and copied by humans can
    be of concern from the point of view of copyright. However, various systems
    of encryption and obfuscation exist. Delivery of intermediate code, such as
    bytecode, has a similar effect to obfuscation, but bytecode could be decoded
    with a decompiler or disassembler. 
◦	Efficiency: 
  ▪	The main disadvantage of interpreters is that an interpreted program
    typically runs slower than if it had been compiled. The difference in speeds
    could be tiny or great; often an order of magnitude and sometimes more. It
    generally takes longer to run a program under an interpreter than to run the
    compiled code but it can take less time to interpret it than the total time
    required to compile and run it. This is especially important when
    prototyping and testing code when an edit-interpret-debug cycle can often be
    much shorter than an edit-compile-run-debug cycle. 
  ▪	Interpreting code is slower than running the compiled code because the
    interpreter must analyze each statement in the program each time it is
    executed and then perform the desired action, whereas the compiled code just
    performs the action within a fixed context determined by the compilation.
    This run-time analysis is known as "interpretive overhead". Access to
    variables is also slower in an interpreter because the mapping of
    identifiers to storage locations must be done repeatedly at run-time rather
    than at compile time. 
◦	Regression 
  ▪	Interpretation cannot be used as the sole method of execution: even though
    an interpreter can itself be interpreted and so on, a directly executed
    program is needed somewhere at the bottom of the stack because the code
    being interpreted is not, by definition, the same as the machine code that
    the CPU can execute. 
◦	https://en.wikipedia.org/wiki/Compiler 
  ▪	Interpretation does not replace compilation completely. It only hides it
    from the user and makes it gradual. Even though an interpreter can itself be
    interpreted, a directly executed program is needed somewhere at the bottom
    of the stack (see machine language). 
`
        }
      ]
    },
    {
      id: 9,
      name: "Java vs. JavaScript",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

Comparison of class-based (Java) and prototype-based (JavaScript) object systems

Class-based (Java)
1. Class and instance are distinct entities.
2. Define a class with a class definition; instantiate a class with constructor
   methods.
3. Create a single object with the new operator.
4. Construct an object hierarchy by using class definitions to define subclasses
   of existing classes
5. Inherit properties by following the class chain.
6. Class definition specifies all properties of all instances of a class. Cannot
   add properties dynamically at run time.

Prototype-based (JavaScript)
1. All objects can inherit from another object.
2. Define and create a set of objects with constructor functions.
3. Same.
4. Construct an object hierarchy by assigning an object as the prototype
   associated with a constructor function.
5. Inherit properties by following the prototype chain.
6. Constructor function or prototype specifies an initial set of properties. Can
   add or remove properties dynamically to individual objects or to the entire
   set of objects.
`
        }
      ]
    }
  ]
};
