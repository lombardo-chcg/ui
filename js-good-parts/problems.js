function funky(o) {
  o = null;
}

var x = []
funky(x);
console.log(x);
// x = []
// why?  o is a parameter.  o only knows the value passed to it, which is an array.
// the function only acts on the parameter.
// the function does not change the value of x, it only changes what o is pointing to.

function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
}

var x = 1, y = 2;
swap(x, y)
console.log(x);
// x = 1
// why? same reason as above.  it doesnt' see the variables that were passed
// it only sees the values those variables were bound to
// does not touch global state

// write a function that takes an argument and returns that argument.
function returnArg(x) {
  return x;
}

var x = returnArg('dollar sign');
console.log(x);


// Write 2 binary functions, #add and #mul, that take two numbers and return their sum and product

function add(a, b) {
  return +(a) + (+(b));
}

function mul(a, b) {
  return Number(a) * Number(b);
}

console.log(add(3,4));
console.log(mul(3,4));


// write a function that takes an argument and returns a function that returns that argument

function identityFunction(arg) {
  return function() {
    return arg;
  }
}

idf = identityFunction(3);
console.log(idf());

// write a function that adds from 2 invocations
// ex: addf(3)(4) => 7
// reference https://en.wikipedia.org/wiki/Currying

function addf(num) {
  return function(num2) {
    return num + num2;
  }
}

var x = addf(3)(4);
console.log(x);

// write a function that takes a binary function, and makes it
// callable with 2 invocations
// ex: addf = applyf(add);
//     addf(3)(4);
//     applyf(mul)(5)(6);

function applyf(func) {
  return function(num) {
    return function(num2) {
      return func(num, num2);
    }
  }
}

addf = applyf(add);
var x = addf(3)(4); // => 7
var y = applyf(mul)(5)(6); // => 30
console.log(x, y)

// write a function that takes a function and an argument, and
// returns a function that can supply a 2nd argument

function curry(func, num) {
  return function(num2) {
    return func(num, num2)
  }
}

// EXTRA CREDIT!!
// return applyf() function instead

add3 = curry(add, 3);
var x = add3(4); // => 7
var y = curry(mul, 5)(6); // => 30
console.log(x, y);

// without writing any new functions, show three ways to create the inc function


// one
var inc = addf(1)

x = inc(5); // => 6
y = inc(inc(5)); // => 7
console.log(x, y);

// two
var inc = applyf(add)(1)

x = inc(5); // => 6
y = inc(inc(5)); // => 7
console.log(x, y);

// three
var inc = curry(add, 1)

x = inc(5); // => 6
y = inc(inc(5)); // => 7
console.log(x, y);


// write methodize - a function that converts a binary function to a method

function methodize(func) {
  return function(num2) {
    return func(this, num2);
  };
}

Number.prototype.add = methodize(add);
var x = (3).add(4);  // => 7
console.log(x);

// write demethodize, a function that converts a method to a binary function
// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

function demethodize(func) {
  return function(thisArg, num2) {
    return func.call(thisArg, num2);
  }
}

var x = demethodize(Number.prototype.add)(5,6);
console.log(x);

// write a function twice that takes a binary function and returns
// a unary function that passes its argument to the binary function twice

function twice(func) {
  return function(num) {
    return func(num, num);
  };
}

var double = twice(add);
var x = double(11); // => 22
console.log(x);

var square = twice(mul);
var y = square(11);
console.log(y); // => 121

// write a function composeU that takes 2 unary functions
// and returns a unary function that calls them both

function composeU(func1, func2) {
  return function(num) {
    return func2(func1(num));
  }
}

var x = composeU(double, square)(3) // => 36
console.log(x);

// write a function composeB that takes two binary functions
// and returns a function that calls them both

function composeB(func1, func2) {
  return function(num1, num2, num3) {
    return func2(func1(num1, num2), num3);
  };
}

var x = composeB(add, mul)(2,3,5) // => 25
console.log(x)

// write a function that allows another function to be called only once

function once(func) {
  var counter = 0;
  return function(num1, num2) {
    if (counter < 1) {
      counter += 1;
      return func(num1, num2);
    } else {
      throw "FAMILY FEUD BUZZER SOUND"
    }
  };
}
//
// function once(func) {
//   return function() {
//     var f = func;
//     func = null;
//     return f.apply(this, arguments);
//   }
// }

add_once = once(add);
var x = add_once(3,4); // => 7
console.log(x);
// var y = add_once(3,4); // => throw!

// write a factory function that returns 2 functions
// that implement an up/down counter

function CounterConstructor(num) {
  this.counter = num;

  this.inc = function() {
    this.counter += 1;
    return this.counter;
  };

  this.dec = function() {
    this.counter -= 1;
    return this.counter;
  };
}

function counterf(num) {
  return new CounterConstructor(num);
}
//
// function counterf(value) {
//   return {
//     inc: function() {
//       value += 1;
//       return value;
//     },
//     dec: function() {
//       value -= 1;
//       return value;
//     }
//   }
// }

var counter = counterf(10);
console.log(counter.inc());
console.log(counter.dec());


// make a revokable function
// that takes a "nice" function
// and returns a "revoke" function
// that denies access to the nice function
// and an "invoke" function that can invoke the
// nice function until it is revoked

function revokable(func) {
  return {
    valid: true,

    invoke: function(arg) {
      if (this.valid === true) {
        return func(arg);
      } else {
        throw "ERROR";
      }
    },

    revoke: function() {
      this.valid = false;
    }
  }
}

// function revokable(func) {
//   return {
//     invoke: function(arg) {
//       return func(arg);
//     },
//     revoke: function() {
//       func = null;
//     }
//   }
// }

temp = revokable(console.log);
temp.invoke(7); // => logs 7
temp.revoke();
console.log('here');
temp.invoke(7); // => throws!
