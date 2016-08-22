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
console.log('here');

function demethodize(func) {
  return function(thisArg, num2) {
    return func.call(thisArg, num2);
  }
}

var x = demethodize(Number.prototype.add)(5,6);
console.log(x);
