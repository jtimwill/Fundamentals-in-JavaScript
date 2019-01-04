export default {
  name: "Data Structures",
  data: [
    {
      id: 0,
      name: "Arrays and Strings",
      language: "js",
      tabs: [
              {
                name: "Question",
                data:
`// Source:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object

// Array JS
let colors = ['red', 'blue']; // Instantiation
colors[0]; //=> First item
colors[colors.length - 1]; //=> Last item
colors.forEach((item, index, array) => { // Loop over array
  console.log(item, index);
});
colors.push('green'); // Add item to end
colors.pop(); // Remove last item
colors.unshift('white'); // Add item to front
colors.shift(); // Remove item from front
color.indexOf('red'); // Find index of item
color.splice(pos, n); // Remove item(s) from index position(s)
colors.slice(); // Shallow copy

// Array Methods (they all appear to mutate the caller)
concat() // joins two arrays and returns a new array.
join(deliminator = ',') // joins all elements of an array into a string.
reverse() // transposes the elements of an array: the first array element
          // becomes the last and the last becomes the first. *Mutates Caller*
sort([compareFunction]) // sorts the elements of an array.
find(callback[, thisArg]) // returns a value in the array, if an element in the
                          // array satisfies the provided testing function.
                          // Otherwise undefined is returned.

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting#String_objects
// String JS
charAt, charCodeAt, codePointAt // Return the character or character code at the
                                // specified position in string.
indexOf, lastIndexOf // Return the position of specified substring in the string
                     // or last position of specified substring, respectively.
startsWith, endsWith, includes // Returns whether or not the string starts, ends
                               // or contains a specified string.
concat // Combines the text of two strings and returns a new string.
fromCharCode, fromCodePoint // Constructs a string from the specified sequence
                            // of Unicode values. This is a method of the String
                            // class, not a String instance.
split // Splits a String object into an array of strings by separating the
      // string into substrings.
slice // Extracts a section of a string and returns a new string.
substring, substr // Return the specified subset of the string, either by
                  // specifying the start and end indexes or the start index and
                  // a length.
match, replace, search //Work with regular expressions.
toLowerCase, toUpperCase // Return the string in all lowercase or all uppercase,
                         // respectively.
normalize // Returns the Unicode Normalization Form of the calling string value.
repeat // Returns a string consisting of the elements of the object repeated the
       // given times.
trim	// Trims whitespace from the beginning and end of the string.
`
              }
            ]
    },
    {
      id: 1,
      name: "Linked List",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Access", data: "Answer"},
              {name: "Search", data: "Answer"},
              {name: "Insert", data: "Answer"},
              {name: "Delete", data: "Answer"}
            ]
    },
    {
      id: 2,
      name: "Binary Tree",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Search", data: "Answer"},
              {name: "Insert", data: "Answer"},
              {name: "Delete", data: "Answer"},
              {name: "Pre-order", data: "Answer"},
              {name: "In-order", data: "Answer"},
              {name: "Post-order", data: "Answer"}
            ]
    },
    {
      id: 3,
      name: "Stack",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Push", data: "Answer"},
              {name: "Pop", data: "Answer"},
              {name: "Peek", data: "Answer"},
              {name: "Max", data: "Answer"},
              {name: "Empty?", data: "Answer"}
            ]
    },
    {
      id: 4,
      name: "Queue",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Enqueue", data: "Answer"},
              {name: "Dequeue", data: "Answer"},
              {name: "Peek front", data: "Answer"},
              {name: "Peek back", data: "Answer"},
              {name: "Max", data: "Answer"}
            ]
    },
    {
      id: 5,
      name: "Hash Table",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Insert", data: "Answer"},
              {name: "Delete", data: "Answer"},
              {name: "Keys", data: "Answer"},
              {name: "Values", data: "Answer"},
              {name: "Pairs", data: "Answer"}
            ]
    },
    {
      id: 6,
      name: "Binary Search Tree (Balanced Binary Tree)",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Max", data: "Answer"},
              {name: "Min", data: "Answer"},
              {name: "Next Largest", data: "Answer"},
              {name: "Next Smallest", data: "Answer"},
              {name: "Find", data: "Answer"},
              {name: "Delete", data: "Answer"}
            ]
    },
    {
      id: 7,
      name: "Heap",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"},
              {name: "Heapify", data: "Answer"},
              {name: "n-largest", data: "Answer"},
              {name: "n-smallest", data: "Answer"},
              {name: "push", data: "Answer"},
              {name: "pop", data: "Answer"},
              {name: "mix/max", data: "Answer"}
            ]
    },
    {
      id: 8,
      name: "Graphs",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"}
            ]
    },
    {
      id: 9,
      name: "Union Find",
      language: "js",
      tabs: [
              {name: "Setup", data: "Answer"}
            ]
    }
  ]
};
