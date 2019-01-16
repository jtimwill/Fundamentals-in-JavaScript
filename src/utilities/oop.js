export default {
  name: "Object-oriented Programming",
  data: [
    {
      id: 0,
      name: "Classes",
      language: "js",
      tabs: [
        {
          name: "Question",
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
`
        }
      ]
    },
    {
      id: 1,
      name: "Inheritance (Object-based/Prototypal vs. Class-based)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`// Code Source: https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
class Shape {
  get color() {
    return this._color;
  }
  set color(c) {
    this._color = parseColorAsRGB(c);
    this.markChanged(); // repaint the canvas later
  }
}

Object.setPrototypeOf(Circle.prototype, Shape.prototype); // Hook up instance properties
Object.setPrototypeOf(Circle, Shape); // Hook up static properties

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
      id: 2,
      name: "Encapsulation",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 3,
      name: "Polymorphism",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 4,
      name: "Abstraction",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 5,
      name: "Composition",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 6,
      name: "Mixins",
      language: "js",
      tabs: [
        {
          name: "Question",
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
      id: 7,
      name: "Instance vs. Class Variables/Methods",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    }
  ]
};
