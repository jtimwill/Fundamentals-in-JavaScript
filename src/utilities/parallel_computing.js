export default {
  name: "Parallel Computing",
  data: [
    {
      id: 0,
      name: "Parallelism vs. Concurrency",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://stackoverflow.com/questions/1050222/what-is-the-difference-between-concurrency-and-parallelism

Concurrency is when two or more tasks can start, run, and complete in
overlapping time periods. It doesn't necessarily mean they'll ever both be
running at the same instant. For example, multitasking on a single-core machine.

Parallelism is when tasks literally run at the same time, e.g., on a multicore
processor.

Quoting Sun's Multithreaded Programming Guide:
	◦	Concurrency: A condition that exists when at least two threads are making
                 progress. A more generalized form of parallelism that can
                 include time-slicing as a form of virtual parallelism. 
	◦	Parallelism: A condition that arises when at least two threads are executing
                 simultaneously.
`
        }
      ]
    },
    {
      id: 1,
      name: "Amdahl's Law",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Amdahl%27s_law
Slatency(s) = 1 / ((1 - p) + p/s)

◦	Slatency is the theoretical speedup of the execution of the whole task; 
◦	s is the speedup of the part of the task that benefits from improved system
  resources; 
◦	p is the proportion of execution time that the part benefiting from improved
  resources originally occupied.
◦	Example: if a program needs 20 hours using a single processor core, and a
           particular part of the program which takes one hour to execute cannot
           be parallelized, while the remaining 19 hours (p = 0.95) of execution
           time can be parallelized, then regardless of how many processors are
           devoted to a parallelized execution of this program, the minimum
           execution time cannot be less than that critical one hour. Hence, the
           theoretical speedup is limited to at most 20 times (1/(1 − p) = 20).
           For this reason, parallel computing with many processors is useful
           only for highly parallelizable programs.
`
        }
      ]
    },
    {
      id: 2,
      name: "Gustafson's Law",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Gustafson%27s_law
Slatency(s) = 1 - p + s*p
•	Slatency is the theoretical speedup in latency of the execution of the whole
  task;
•	s is the speedup in latency of the execution of the part of the task that
  benefits from the improvement of the resources of the system;
•	p is the percentage of the execution workload of the whole task concerning the
  part that benefits from the improvement of the resources of the system before
  the improvement.


◦	Amdahl’s law applies only to cases where the problem size is fixed 
◦	Gustafson's law instead proposes that programmers tend to set the size of
  problems to fully exploit the computing power that becomes available as the
  resources improve. Therefore, if faster equipment is available, larger
  problems can be solved within the same time.
`
        }
      ]
    }
  ]
};
