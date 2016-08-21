## Falsy values for conditionals
* `false`
* `null`
* `undefined`
* `""`
* `0`
* `Nan`

all other objects (including any object) are truthy
* `"0"`
* `"false"`

## objects
Everything is an object except:
* `undefined`
* `null`

Beware however...
```
>> typeof(null)
=> "object"
```

## === operator
`===` compares object references, not values.

## Coerce string to number
* `Number("42")`
* `+"42"`

## statements can have labels
```
loop: for (;;) {
  ...
    if (...) {
      break loop;
    }
  ...    
}
```

## functions
* variables declared anywhere within a function are available anywhere in that function
* `return;` returns undefined
* `arguments` is an array-like object that is available within a function
```
function sum() {
  var i,
      total = 0;
  for (i = 0; i < arguments.length; i += 1 ) {
    total += arguments[i]
  }
  return total;
}

sum(1,2,3,4,5)
```
* the idea of a function is based on the concept of a subroutine - call & return. aka sub, procedure, proc, func, function or lambda
* expression and IFFE.  Any expression or statement can be wrapped in an IFFE without changing the meaning:
```
>>  1+2
=>  3
```
```
>>  (function() {
      return 1+2;
    }())
=>  3    
```
* closure - return an internal function which has access to the variable even after the original function run
```
>>   var bobName = (function() {
      var names = ['bob0', 'bob1', 'bob2'];

      return function(n) {
          return names[n]
      };
    }());
=>  bobName(2) = "bob2"
```
