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
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Cryptography

Cryptography or cryptology is the practice and study of techniques for secure
communication in the presence of third parties called adversaries.[2]
`
        }
      ]
    },
    {
      id: 11,
      name: "Private/Public Key Cryptography",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Public-key_cryptography

Public-key cryptography, or asymmetric cryptography, is a cryptographic system
that uses pairs of keys: public keys which may be disseminated widely, and
private keys which are known only to the owner. The generation of such keys
depends on cryptographic algorithms based on mathematical problems to produce
one-way functions. Effective security only requires keeping the private key
private; the public key can be openly distributed without compromising security.
[1]

In such a system, any person can encrypt a message using the receiver's public
key, but that encrypted message can only be decrypted with the receiver's
private key.

Robust authentication is also possible. A sender can combine a message with a
private key to create a short digital signature on the message. Anyone with the
corresponding public key can combine a message, a putative digital signature on
it, and the known public key to verify whether the signature was valid, i.e.
made by the owner of the corresponding private key.[2][3]

Public key algorithms are fundamental security ingredients in modern
cryptosystems, applications and protocols assuring the confidentiality,
authenticity and non-repudiability of electronic communications and data
storage. They underpin various Internet standards, such as Transport Layer
Security (TLS), S/MIME, PGP, and GPG. Some public key algorithms provide key
distribution and secrecy (e.g., Diffie–Hellman key exchange), some provide
digital signatures (e.g., Digital Signature Algorithm), and some provide both
(e.g., RSA).


https://en.wikipedia.org/wiki/Symmetric-key_algorithm
Symmetric-key algorithms[1] are algorithms for cryptography that use the same
cryptographic keys for both encryption of plaintext and decryption of
ciphertext. The keys may be identical or there may be a simple transformation to
go between the two keys.[2] The keys, in practice, represent a shared secret
between two or more parties that can be used to maintain a private information
link.[3] This requirement that both parties have access to the secret key is one
of the main drawbacks of symmetric key encryption, in comparison to public-key
encryption (also known as asymmetric key encryption).[4][5]
`
        }
      ]
    },
    {
      id: 12,
      name: "Diffie-Hellman Key Exchange",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.youtube.com/watch?v=lICOtR078Gw&list=PLB4D701646DAF0817
•	We need a numerical procedure that is easy in one direction, but hard in
  another
  ◦	(3^29)mod17 = 12 (easy)
  ◦	(3^?)mod17 = 12 (hard)
•	We use clock arithmetic (see diagram)
  3^11 mod 17 = 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
  ◦	Select a prime modulus (17) 
  ◦	Find a primitive root of the prime modulus (3). It is known as the
    generator. 
  ◦	Easy one way: 
    ▪	It has the important property that, when raised to an exponent, the
      solutions distributes uniformly around the clock. The solutions is equally
      likely to be any integer between 1 and 17 
  ◦	Hard the other way (the discrete logarithm problem) 
    ▪	Given the solution, find the exponent the generator needs to be raised to 
    ▪	Gets harder as the length of the prime modulus grows 

•	Example: 
  1. Alice and Bob agree publically on a prime modulus and a generator 
     1. i.e. 3 mod 17 
  2. Alice a Bob select private random numbers 
     1. i.e. 15 for Alice and 13 for Bob 
  3. They both raise the generators to their private numbers and exchange the
     results (they exchange public keys) 
     1. 3^15 mod 17 = 6 (Alice’s public key) 
     2. 3^13 mod 17 = 12 (Bob’s public key) 
  4. They use the exchanged public keys to privately do the same calculation 
     a. 12^15 mod 17 = 6^13 mod 17 Because it is the same as
        i. 3^13^15 mod 17 = 3^15^13 mod 17
`
        }
      ]
    },
    {
      id: 13,
      name: "RSA Encryption",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.youtube.com/watch?v=lICOtR078Gw&list=PLB4D701646DAF0817

•	Managing a shared key (using the Diffie-Hellman method) requires extra
  communication 
•	Clifford Cox: 
  ◦	Trapdoor one-way function (mathematical lock). He used modular
    exponentiation 
￼    * See diagram * 3^11 mod 17 = 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
    ▪	Easy in one way 
￼      m^e mod N = ?
    ▪	Hard in the other 
￼      ?^e mod N = c
  ◦	The “key” is some piece of information that makes it easy to reverse the
    encryption. It is “d” in this case. 
￼     c^d mod N = m
    ▪	Same as: 
￼     m^e^d mod N = m
    ▪	Or 
￼     m^ed mod N = m
  ◦	Another one way function with PHI. // Note: prime factorization (hard to
    solve) 
    1. Generate two random prime numbers (p1, p2), roughly the same size 
    2. Multiply them together to get a third number n 
    3. p1*p2 is the prime factorization of n. Hide it. 
    4. Use Euler’s PHI function (it measures the breakability of a number) 
       1. Given a number n, is outputs how many numbers are less than or equal
          to n that do not share any common factor with in 
       2. So ϕ(8)=4(1,3,5,7) 
       3. Calculating the PHI function is hard except with prime numbers 
       4. The PHI of any prime number is the number minus 1 
    5. Since the PHI function is multiplicative (ϕ(A)=ϕ(A)*ϕ(B)), we can do
       this: ϕ(N)=ϕ(P1)*ϕ(P2)=(P1-1)*(P2-1). Thus, we now have a trap door for
       solving PHI. If you know the factorization of N, finding PHI(N) is easy. 
  ◦	Next, he needed to connect the PHI function to modular exponentiation. He
    did this with Euler’s theorem. 
￼    m^ϕ(n) = 1 mod n
  ◦	This means that you can pick any two numbers (m and n) such that they do not
    share a common factor. Now when you raise m to the power of PHI(n) and
    divide by n, you will always be left with one. 
  ◦	He then modified the equation in two ways 
    ▪	You can multiply the exponent PHI(n) by any number k, and the solution is
      still one. 
    ▪	You can multiply the left hand side by m to get m on the right hand side 
￼     m^(k*ϕ(n)+1) = m mod n
  ◦	This is a breakthrough! We now have an equation for finding e*d which
    depends on PHI(N). Therefore, it is easy to calculate d, only if the
    factorization of n is known 
￼    ▪ m^(e*d) = m mod n
    ▪	d = (k*ϕ(n)+1)/e
  ◦	This means that d is the private key. It is the trapdoor that allows you to
    undo the effect of e. 
  ◦	Example: 
    ▪	Bob has a message that he converted into a number using a padding scheme.
      Lets call the message m (89) 
    ▪	Alice generates two prime numbers of similar size and multiplies them to
      get n 
      ▪	p1 = 53 
      ▪	p1 = 59 
      ▪	n = 53*59 = 3127 
    ▪	Alice generates PHI 
      ▪	PHI(n) = 3016 
    ▪	She picks a public exponent e such that it is an odd number that does not
      share a factor with PH(n) 
      ▪	e = 3 
    ▪	She finds the value of her private exponent d: 
      ▪	d = (2 * (3016) + 1)/3 = 2011 
    ▪	Alice sends her public key to Bob (n and e) 
    ▪	Bob locks his message by calculating m^e mod n = c. C = 1394 
    ▪	He sends the encrypted message to Alice 
    ▪	Alice decrypts it with d 
    ▪	c^e = m mod n = 1394^2011 = 89 mod 3127 
    ▪	Note: d can only be found if you know the prime factorization of n 

RSA facts:
	•	The most widely used public-key algorithm in the world 
	•	The most copied software in history 
	•	Every internet user on earth is using RSA or some variant of it 
`
        }
      ]
    },
    {
      id: 14,
      name: "Powers of 2",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://www.hjo3.net/bytes.html
      Bit	          1 bit	                      1/8 bytes
      Nibble	      4 bits	                    1/2 (rare) bytes
      Byte	        8 bits	                    1 bytes

2^10 Kilobyte	  1,024 bytes	                1,024 bytes
2^20 Megabyte	  1,024 kilobytes	        1,048,576 bytes
2^30 Gigabyte	  1,024 megabytes	    1,073,741,824 bytes
2^40 Terrabyte	1,024 gigabytes	1,099,511,627,776 bytes
`
        }
      ]
    }
  ]
};
