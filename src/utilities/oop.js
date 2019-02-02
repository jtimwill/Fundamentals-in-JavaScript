export default {
  name: "Object-oriented Programming",
  data: [
    {
      id: 0,
      name: "Inheritance (Object-based/Prototypal vs. Class-based)",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: https://en.wikipedia.org/wiki/Prototype-based_programming
◦	Object-based/Prototypal Inheritance: (objects inherit from objects) 
  1. Clone existing prototypes objects to make new objects 
  2. Extend the prototype object with new more specific properties 

// Source: https://en.wikipedia.org/wiki/Class-based_programming
◦	Class-based Inheritance: (objects inherit from  classes) 
  1. The structure and behavior of an object are defined by a class, which is a
     definition, or blueprint, of all objects of a specific type.
  2. An object must be explicitly created based on a class and an object thus
     created is considered to be an instance of that class.
`
        },
        {
          name: "JavaScript",
          data:
`// Code Source: https://hacks.mozilla.org/2015/07/es6-in-depth-classes/
// ES6
function Circle(radius) {
  this.radius = radius;
  Circle.circlesMade++;
}

Circle.draw = function draw(circle, canvas) { /* Canvas drawing code */ }

Object.defineProperty(Circle, "circlesMade", {
  get: function() {
    return !this._count ? 0 : this._count;
  },

  set: function(val) {
    this._count = val;
  }
});

Circle.prototype = {
  area() {
    return Math.pow(this.radius, 2) * Math.PI;
  },

  // Tim note: in the past, you had to use the defineProperty method for get/set
  get radius() {
  // Note that a getter installed this way must have no arguments
    return this._radius;
  },
  set radius(radius) {
  // Note that a setter installed this way must have exactly one argument
    if (!Number.isInteger(radius))
      throw new Error("Circle radius must be an integer.");
    this._radius = radius;
  }
};

// Code Source: https://hacks.mozilla.org/2015/07/es6-in-depth-classes/
// Class Sugar
class Circle { // Note: semi colons are optional
  constructor(radius) {
    this.radius = radius;
    Circle.circlesMade++;
  };

  static draw(circle, canvas) {
    // Canvas drawing code
  };

  static get circlesMade() {
    return !this._count ? 0 : this._count;
  };
  static set circlesMade(val) {
    this._count = val;
  };

  area() {
    return Math.pow(this.radius, 2) * Math.PI;
  };

  get radius() {
    return this._radius;
  };
  set radius(radius) {
    if (!Number.isInteger(radius))
        throw new Error("Circle radius must be an integer.");
    this._radius = radius;
  };
}


// Code Source: https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
class Shape {
  get color() {
    return this._color;
  }
  set color(c) {
    this._color = parseColorAsRGB(c);
    this.markChanged(); // repaint the canvas later
  }
}

//** Old Way
// Hook up instance properties:
Object.setPrototypeOf(Circle.prototype, Shape.prototype);
// Hook up static properties:
Object.setPrototypeOf(Circle, Shape);
//**

// *****
class Circle extends Shape {
  // As above
}

class ScalableCircle extends Circle {
  get radius() {
    // This new super keyword allows us to bypass our own properties, and look
    // for the property starting with our prototype, thus bypassing any
    // shadowing we may have done.
    return this.scalingFactor * super.radius;
  }
  set radius() {
    throw new Error("ScalableCircle radius is constant." +
                    "Set scaling factor instead.");
  }
  // Code to handle scalingFactor
}

// Derived Class Constructors
// 1. In traditional class models, constructors are used to initalize any
//    internal state for instances of the class. Each consecutive subclass is
//    responsible for initializing the state associated with that specific
//    subclass. We want to chain these calls, so that subclasses share the same
//    initialization code with the class they are extending.
// 2. To call a super constructor, we use the super keyword again, this time as
//    if it were a function. This syntax is only valid inside constructor
//    methods of classes that use extends. With super, we can rewrite our Shape
//    class.
class Shape {
  constructor(color) {
    this._color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
    // As from above
}

// As we saw in the last post, where you could omit the constructor method,
// derived class constructors can be omitted, and it is as if you had written:
constructor(...args) {
  super(...args);
}
`
        }
      ]
    },
    {
      id: 1,
      name: "Encapsulation",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/

Encapsulation is one of the fundamental concepts in object-oriented programming
(OOP). It describes the idea of bundling data and methods that work on that data
within one unit, e.g., a class in Java.

This concept is also often used to hide the internal representation, or state,
of an object from the outside. This is called information hiding. The general
idea of this mechanism is simple. If you have an attribute that is not visible
from the outside of an object, and bundle it with methods that provide read or
write access to it, then you can hide specific information and control access to
the internal state of the object.

If you’re familiar with any object-oriented programming language, you probably
know that these methods as getter and setter methods. As the names indicate, a
getter method retrieves an attribute, and a setter method changes it. Depending
on the methods that you implement, you can decide if an attribute can be read
and changed, or if it’s read-only, or if it is not visible at all. As I will
show you later, you can also use the setter method to implement additional
validation rules to ensure that your object always has a valid state.
`
        }
      ]
    },
    {
      id: 2,
      name: "Polymorphism",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: https://www.webopedia.com/TERM/P/polymorphism.html
Generally, the ability to appear in many forms. In object-oriented programming,
polymorphism refers to a programming language's ability to process objects
differently depending on their data type or class. More specifically, it is the
ability to redefine methods for derived classes. For example, given a base class
shape, polymorphism enables the programmer to define different area methods for
any number of derived classes, such as circles, rectangles and triangles. No
matter what shape an object is, applying the area method to it will return the
correct results. Polymorphism is considered to be a requirement of any true
object-oriented programming language (OOPL).
`
        }
      ]
    },
    {
      id: 3,
      name: "Abstraction",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: https://stackify.com/oop-concept-abstraction/
Abstraction is one of the key concepts of object-oriented programming (OOP)
languages. Its main goal is to handle complexity by hiding unnecessary details
from the user. That enables the user to implement more complex logic on top of
the provided abstraction without understanding or even thinking about all the
hidden complexity.
`
        }
      ]
    },
    {
      id: 4,
      name: "Composition",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: https://en.wikipedia.org/wiki/Object_composition
Object Composition: (HAS-A)
In computer science, object composition is a way to combine simple objects or
data types into more complex ones.
`
        }
      ]
    },
    {
      id: 5,
      name: "Mixins",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: https://en.wikipedia.org/wiki/Mixin
Mixin
•	mixin is a class that contains methods for use by other classes without having
  to be the parent class of those other classes. 
•	Mixins are sometimes described as being "included" rather than "inherited". 
`
        },
        {
          name: "JavaScript",
          data:
`// Code Source: https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
// the well-known extend mixin idiom
function mix(...mixins) {
    class Mix {}

    // Programmatically add all the methods and accessors
    // of the mixins to class Mix.
    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }

    return Mix;
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== "constructor" && key !== "prototype" && key !== "name") {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

// We can now use this function mix to create a composed superclass, without
// ever having to create an explicit inheritance relationship between the
// various mixins. Imagine writing a collaborative editing tool in which
// editing actions are logged, and their content needs to be serialized. You can
// use the mix function to write a class DistributedEdit:
class DistributedEdit extends mix(Loggable, Serializable) {
    // Event methods
}
// It’s the best of both worlds. It’s also easy to see how to extend this model
// to handle mixin classes that themselves have superclasses: we can simply pass
// the superclass to mix and have the return class extend it.

`
        }
      ]
    },
    {
      id: 6,
      name: "Instance vs. Class Variables/Methods",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`// Source: http://www.jvoegele.com/software/langcomp.html

Class Variables/Methods
	•	Class variables and methods are owned by a class, and not any particular
    instance of a class.
	•	This means that for however many instances of a class exist at any given
    point in time, only one copy of each class variable/method exists and is
    shared by every instance of the class
`
        }
      ]
    }
  ]
};
