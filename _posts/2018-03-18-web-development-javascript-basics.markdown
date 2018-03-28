---
layout: post
title: "Web Development: JavaScript Basics"
date: 2018-03-18 00:00:00 -0400
categories: web development javascript basics
---

# JavaScript Console
- Firefox: `Ctrl` + `Shift` + `K`
- (Google) Chrome: ???

# Primitives

There 5 primitive types that are going matter to us.

Examples
{% highlight javascript linenos %}
// Numbers
4
9.3
-10

// Strings
"Hello World"
"43"

// Booleans
true
false

// null and undefined
null
undefined

{% endhighlight %}

## Numbers

They are coded with double-precision 64-bit floating point format (IEEE 754).

More Regular operators work as expected:
{% highlight javascript linenos %}

// -28
4 + 10 - 42

// -19.6
(1 + 3 * -33) / 5

// 0
24 % 2

// 4
15 % 11

// Infinity
2 / 0

// Nan
0 / 0 

{% endhighlight %}

More details about the format on: https://en.wikipedia.org/wiki/Double-precision_floating-point_format

## Strings

Single or Double quotes are both okay to define a string:
{% highlight javascript linenos %}
"hello world"
'hello world'
{% endhighlight %}

Concatenation:
{% highlight javascript linenos %}
// charliebrown
"charlie" + "brown"
{% endhighlight %}

Escape characters:
{% highlight javascript linenos %}
"Singin \"Do wah diddy, diddy, dum diddy do\""
"This is a backslash: \\"
{% endhighlight %}

Strings have a length property:
{% highlight javascript linenos %}
// 11
"hello world".length
{% endhighlight %}

Strings have a method to return the index of the first character of a given substring (and return -1 if the substring is not contained):
{% highlight javascript linenos %}
// -1
"hello world".indexOf("hi");

// 6
"hello world".indexOf("world");
{% endhighlight %}

Access individual characters using [] and the character index:
{% highlight javascript linenos %}
// "h"
"hello"[0]

// "o"
"hello"[4]
{% endhighlight %}

Implicit conversions:
{% highlight javascript linenos %}

// Nan
"a" * 3

// 6
"2" * 3
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

# Variables

They are subject to dynamic typing so a variable type can change upon update.

The naming convention for variables in JavaScript is cameCase.

{% highlight javascript linenos %}
var a = 43;

// a = 44
a++;

// a = 45
a += 1;

// a = 40
a -= 5;

// a = 20
a /= 2;

// a = 60
a *= 3;

a = "Michelle";

// "Michelle ma belle."
a += " ma belle.";

{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

# null and undefined

Apparently related to each other but... not really:

- `undefined`: declared but does not have a value... YET.
- `null`: express explicitly nothingness, it is an assigned value.

{% highlight javascript linenos %}
// undefined: not yet defined
var name;

// explicitly set to "nothing"
var currentPlayer = "charlie";
currentPlayer = null;
{% endhighlight %}

More details on the MDN: 

- `undefined`: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined
- `null`: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null

# Builtin-methods

Some toy functions to play around with the browser:

- `alert(message)`: popup the content of `message`.
- `value = prompt(message)`: get the input `value` from a user through a popup displaying the content of `message`. If the user clicks the cancel button, the `value` will be `null`.
- `console.clear()`: clear the JavaScript console.
- `console.log(message)`: display `message` content in the JavaScript console.

# Control Flow

## Boolean Logic

### Comparison Operators

The usual ones, short recap: `>`, `>=`, `<`, `<=`, `==` and `!=`.

And the less usual: `===` and `!==`: only those two operators won't perform type coercion.

Example:

{% highlight javascript linenos %}
var  x = 99;

// true
x == "99"

// false
x === "999"

var y = null;

// true
y == undefined;

// false
y === undefined;

{% endhighlight %}

More details on the MDN:

- Comparison Operators: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
- Type Coercion: https://developer.mozilla.org/docs/Glossary/Type_Conversion


### Few Intersting Cases

{% highlight javascript linenos %}
// true
true == 1

// true
false == 0

// true
null == undefined

// false...
NaN == Nan
{% endhighlight %}

### Logical Operators

The usual stuff: `&&`, `||` and `!`.

More details on the MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

### Truthy and Falsy Values

Values that are not inherently true or false are still inherently truthy or falsy. 

Falsy values are translated to false when evaluated in a boolean context.

To determine their truthiness you can use `!!variable`.

{% highlight javascript linenos %}
// false
!!""
{% endhighlight %}

Falsy values are:

{% highlight javascript linenos %}
false
0
""
null
undefined
NaN
{% endhighlight %}

Note: `NaN` is not equal to any other object (including itself!).

Everything else is truthy.

More details on the MDN:

- `NaN`: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN
- Falsy: https://developer.mozilla.org/docs/Glossary/Falsy
- Truthy: https://developer.mozilla.org/docs/Glossary/Truthy

### Conditionals

Also the usual stuff: `if`, `else if` and `else`.

Example:

{% highlight javascript linenos %}

if (condition1)
   // statement1
else if (condition2)
   // statement2
else if (condition3)
   // statement3
//...
else
   //statementN

{% endhighlight %}

Ternary operator is also available: 

{% highlight javascript %}
var variable = condition ? trueAction() : falseAction();
{% endhighlight %}

Switch-like structure is also the same:

{% highlight javascript linenos %}

switch(variable) {
    case value1:
        // statement 1;
        break;
    case value2:
        // statement 2;
        break;
    // Other cases...
    default:
        // statement default;
        break;
}
{% endhighlight %}

More on the MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

### Loops

#### While

As expected, the same as in many other programming languages:

{% highlight javascript linenos %}
while (condition) {
    // statement
}
{% endhighlight %}

Example:
{% highlight javascript linenos %}

var str = "hello";

var count = 0;

while (count < str.length) {
    console.log(str[count]);
    count++;
}

{% endhighlight %}

See more on the MDN: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/while

#### For

Same old syntax...

{% highlight javascript linenos %}
for (var iterationVariable = startValue; conditionToStop; iterationVariableAction) {
    // statement
}
{% endhighlight %}

Example:
{% highlight javascript linenos %}
var str = "hello";

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
{% endhighlight %}

See more on the MDN: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for

# Functions

## Basics

The usual reusable bits of code:

{% highlight javascript linenos %}
function functionName(parameters) {
    // statement
}

var result = functionName(parameters);
{% endhighlight %}

Since functions are fist-class citizens in JavaScript you can assgin them to a variable:

{% highlight javascript linenos %}
// Function Declaration: known as a definition or statement.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function Expression: resolve to a value, even if just undefined.
var capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
{% endhighlight %}


More on the MDN:

- Function: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions
- Expressions: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions


## Scope

The scope is a pretty big topic in JavaScript that usually many concepts. 
I am just going to keep the exlanations rather simple here and will elaborate more in another lesson called Intermediate / Advanced JavaScript for Web Development that will include ES6, 7, 8 features, promises, iterators, generators along with some quirks of the language and digging into memory management, OO, Design Patterns as well.

The scope is the context in which the code is executed.

A function creates a scope, in the sense that variables defined within the function are not accessible outside of the scope:

{% highlight javascript linenos %}
var phrase = "hi there!";

function doSomething() {
    var phrase = "Goodbye!";
    console.log(phrase);
}

// Will print out "Goodbye!" and NOT "hi there!".
doSomething();
{% endhighlight %}

Here is a simple brain-teaser about scoping:
{% highlight javascript linenos %}
var num = 8;

function doMath() {
    num += 1;
    if (num % 5 == 0) {
        return true;
    } else {
        return false;
    }
}

num++;

// Will return true
// The num variable will equal to 10 in the function when it is evaluated. 
doMath();

{% endhighlight %}

More on the MDN: https://developer.mozilla.org/docs/Glossary/Scope

### var

Most languages have block scopes in regard to variables, JavaScript does not with `var`.

`var` only consider boundaries with respect to the **function scope**.

Example:
{% highlight javascript linenos %}
var y = "Another variable in the global scope";

function doSomething() {
    // Lexicon Scoping: the variables defined out of the 
    // function are accessible within the function.
    console.log(x);
    console.log(y);

    var y = "I am also defined as a variable in the function";

    if (true) {
        var b = "Variable that is going to be initialized";
    }

    if (false) {
        var c = "Variable that is never going to be touched";
    }

    var a = "I am only accessible in this function";
    console.log(a);
    console.log(b);
}

doSomething();

var x = "I am defined after the function which actually used me";

// a is obviously not defined here...
console.log(a);

{% endhighlight %}

### Hoisting

Let's look at the example below:

More details on: https://developer.mozilla.org/docs/Glossary/Hoisting

### IIFE

An Immediatly Invoked Function Expression is a way to control the variables scopes (since the var scope can be defined with functions):

{% highlight javascript linenos %}
(function() {

})();

{% endhighlight %}

### Module Pattern

Just a glimpse in the world of the Design Patterns for JavaScript, one the most 

{% highlight javascript linenos %}

{% endhighlight %}

More on the MDN: https://developer.mozilla.org/docs/Glossary/IIFE

## Higher Order Functions

When we pass functions as the arguments of other functions.

Some builtins functions that expect functions are their arguments:
{% highlight javascript linenos %}

function printSomething() {
    console.log("Hello!");
}

// Delay the execution of printSomething for 1000ms.
timeoutId = setTimeout(printSomething, 1000);

// Execute printSomething every 1000 ms.
intervalId = setInterval(printSomething, 1000);

// Anonymous function declared on the spot
setTimeout(function() {
    clearTimeout(timeoutId);
    clearInterval(intervalId);

}, 4000);

{% endhighlight %}

More details on MDN:

- https://developer.mozilla.org/docs/Web/API/window.setTimeout
- https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout
- https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
- https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval

# Arrays

0-based index. In JavaScript arrays are more like list-like objects.

{% highlight javascript linenos %}
// Alternative: var emptyArray = new Array();
var emptyArray = [];

// The array can contains different types of data
var initializedArray = [1, "b", null, undefined];

// Returns 1
var index0Item = initializedArray[0];

// Returns the item at index 42, so undefined
var index42Item = emptyArray[42];

// Set items at index: 0, 1, 2, 3 and 4 to undefined and "hello! to the index 5.
// Automatically expand the array size.
emptyArray[5] = "hello!";

// Append item to the end of the array
// Returns
var newArrayLength = initializedArray.push("last");

// Add item to the fron of the array
// Returns
newArrayLength = initializedArray.unshift("front");

// Remove from the end of the array
// Returns "last"
var lastItem = initializedArray.pop();

// Remove from the front of the array
// Returns "front"
var firstItem = initializedArray.shift();

// Loop over the array
initializedArray.forEach(function(item, index, array) {
  console.log(item, index);
});

// Just like for strings, the method find the index of item in the array (returns -1 if not found)
// Returns -1
indexOfMichelle = initializedArray.indexOf("Michelle ma belle.");

// Gets a segment of the array between the index 1 and 3 (excluded).
// Returns [1, 2]
var slice = [0, 1, 2, 3, 4].slice(1, 3);

// Gets a segment of the array between the index 1 to the end of the array.
// Returns [1, 2, 3, 4]
slice = [0, 1, 2, 3, 4].slice(1);

// Copy an array.
copy = [0, 1, 2, 3, 4].slice();

{% endhighlight %}

More details on MDN: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array


# Objects

Dictionary-like objects.
{% highlight javascript linenos %}

// Literal Object Creation
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

// Creating fields on spot
person = {};
person.name = "Travis";
person.age = 21;
person.city = "LA";

// Object Constructor Creation
person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

// Bracket Notation, useful if your field starts with a number or contains a spaces (which is btw a bad practice).
// It also let you access object field with a variable
console.log(person["age"]);

// Dot Notation
console.log(person.age);

// Field modification
person["age"] = 24;
person.age = "24";

// Fields no not have to hold only primitive types and can hold other objects
var junkObject = {
    colors: {
        red: 255,
        green: 255,
        blue: 255
    },
    name: "empty name"
};

// Fields can be methods
junkObject.woof = function() {
    console.log("woof woof!");
};

// Display "woof woof!"
junkObject().woof();

// this keyword can be used to reference the object itself (just in many other languages)
junkObject.printColors = function() {
    console.log(this.colors);
};

{% endhighlight %}

More details on the MDN:

- Objects: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
- this keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
