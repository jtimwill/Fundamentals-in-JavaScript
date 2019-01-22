export default {
  name: "Primitive Types",
  data: [
    {
      id: 0,
      name: "Bit manipulation",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Source: https://en.wikipedia.org/wiki/Mask_(computing)
1001 & 0010 //=> 0000 (Query status of single bit. Returns 0 iff bit is off)
1001 | 1111 //=> 1111 (Mask on)
1001 & 1111 //=> 0000 (Mask off)
1001 ^ 1111 //=> 0110 (Toggle bit values)

// Source: https://www.cheatography.com/miracoli/cheat-sheets/bitmanipulation/
(x>>5) & 1   // Test if bit 5 is set (same as "query status")
x |= (1<<5)  // Set bit 5
x &= ~(1<<5) // Clear bit 5
x ^= (1<­­<5)  // Toggle bit 5
x & 1        // Check if integer is odd
x & (x-1)    // Turn off rightmost 1-bit
x & (-x)     // Isolate rightmost 1-bit
x | (x-1)    // Right propagate the rightmost 1-bit
x | (x+1)    // Turn on the rightmost 0-bit
~x & (x+1)   // Isolate rightmost 0-bit
x & (x+1)    // Right propagate the rightmost 0-bit
x <<= 1      // Multiply by 2
x >>= 1      // Divide by 2
1 << n       // 2^n
x = (x | ' ') // Convert letter to lowercase
x = (x & '_') // Convert letter to uppercase
a ^= b; b ^= a; a ^= b; // XOR swap
(x << 4) | (x >> 4) // Swap nibbles: 0b11110000 => 0b00001111
`
             }]
    },
    {
      id: 1,
      name: "Type conversion",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Sources:
//  https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839
//  https://www.w3schools.com/js/js_type_conversion.asp

// To String:
String(123.11) //=> "123.11"
(123.11).toString() //=> "123.11"
123.11 + "" //=> "123.11"

// To Number:
parseFloat("123.11") //=> 123.11
parseInt("123.99") //=> 123
Number("123.11") //=> 123.11
+"123.11" //=> 123.11

// To Boolean:
Boolean(2) //=> true
!!2 //=> true`
      }]
    },
    {
      id: 2,
      name: "Type checking",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Source: https://javascript.info/types

// There are 7 basic types in JavaScript.
number // for numbers of any kind: integer or floating-point.
string // for strings. A string may have one or more characters, there’s no separate single-character type.
boolean // for true/false.
null // for unknown values – a standalone type that has a single value null.
undefined // for unassigned values – a standalone type that has a single value undefined.
object // for more complex data structures.
symbol // for unique identifiers.

// The typeof operator allows us to see which type is stored in the variable.
// 1. Two forms:
  typeof x
  typeof(x)
// 2. Returns a string with the name of the type, like "string".
// 3. For null returns "object" – that’s an error in the language, it’s not an object in fact.
`
             }]
    },
    {
      id: 3,
      name: "Type sizes",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.coursera.org/learn/algorithms-part1
Source: https://www.coursera.org/learn/algorithms-part2

•	Memory (Java) 
  ◦	We assume 64-bit machine with 8-byte pointers 
    ▪	Some JVMs “compress” ordinary object pointers to 4 bytes to avoid this
      cost
  ◦ Primitive Types
      boolean: 1 byte
      byte: 1 byte
      char: 2 bytes
      int: 4 bytes
      float: 4 bytes
      long: 8 bytes
      double: 8 bytes
  ◦ One-dimensional Arrays
      char[]: 2n + 24 bytes
      int[]: 4n + 24 bytes
      double[]: 8n + 24 bytes
  ◦ Two-dimensional Arrays
      char[][]: ≈ 2mn bytes
      int[][]: ≈ 4mn bytes
      double[][]: ≈ 8mn bytes
  ◦ Objects
    ▪	Object overhead: 16 bytes 
	    ▪	+8 extra bytes per inner class object (for reference to enclosing class) 
	  ▪	Object reference: 8 bytes. 
	  ▪	Padding: Each object uses a multiple of 8 bytes (padding rounds up). 
	  ▪	Example: Date object uses 32 bytes of memory 
      public class Date { // overhead: 16 bytes
        private int day; // 4 bytes
        private int month; // 4 bytes
        private int year; // 4 bytes
        // 4 bytes (padding)
      ...
      }
`
        }
      ]
    }
  ]
};
