/**
 * Module design pattern
 *
 * Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow
 * for private scopes - that is, a closure that protect variables and methods
 * (however, it will return an object instead of a function).
 */

var HTMLchanger = (function () {
  
  // declare private variables and/or functions
  var contents = 'contents';
  
  var changeHTML = function () {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }
  
  // declare private variables and/or functions
  return {
    // declare public variables and/or functions
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  }
  
})();

HTMLchanger.callChangeHTML();       // Outputs: 'contents'

/**
 * Revealing Module Pattern
 *
 * The purpose is to maintain encapsulation and reveal certain variables
 * and methods returned in an object literal.
 */
var Exposer = (function() {
  var privateVariable = 10;
  
  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }
  
  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }
  
  var otherMethodToExpose = function() {
    privateMethod();
  }
  
  return {
    first: methodToExpose,
    second: otherMethodToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

/**
 * Prototype design pattern
 *
 * The Prototype design pattern relies on the JavaScript prototypical inheritance.
 * The prototype model is used mainly for creating objects in performance-intensive situations.
 */
var myConstructor = function() {
  this.name = '';
  this.age  = '';
  this.dob  = '';
}

// Prototype method 1
myConstructor.prototype.go = function() {
  console.log('We are off!!');
}
// Prototype method 2
myConstructor.prototype.stop = function() {
  console.log('We have stopped');
}

var person = new myConstructor();

person.go(); // Outputs: We are off
person.stop(); // Outputs: We have stopped.

/**
 * Singelton design pattern
 */
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
