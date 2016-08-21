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
