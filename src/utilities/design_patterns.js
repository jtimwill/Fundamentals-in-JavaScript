export default {
  name: "Design Patterns",
  data: [
    {
      id: 0,
      name: "Module",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Source: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know

// Basic:
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();

// Revealing Module Pattern
var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined
`
      }]
    },
    {
      id: 1,
      name: "Prototype",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Source: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know

// Basic:
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}

// Revealing Prototype Pattern:
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = function() {

  var go = function() {
    // Rotate wheels
  };

  var stop = function() {
    // Apply brake pads
  };

  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  }

}();
`
      }]
    },
    {
      id: 2,
      name: "Observer",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Source: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know

// Controller 1
$scope.$on('nameChanged', function(event, args) {
    $scope.name = args.name;
});

...

// Controller 2
$scope.userNameChanged = function(name) {
    $scope.$emit('nameChanged', {name: name});
};

//
`
      }]
    },
    {
      id: 3,
      name: "Singleton",
      language: "js",
      tabs: [{
        name: "Question",
        data:
`// Source: https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
var printer = (function () {

  var printerInstance;

  function create () {

    function print() {
      // underlying printer mechanics
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() {
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

  function Singleton () {
    if(!printerInstance) {
      printerInstance = intialize();
    }
  };

})();
`
      }]
    }
  ]
};
