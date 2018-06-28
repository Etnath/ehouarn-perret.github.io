---
layout: post
title: "Web Development: jQuery Basics"
date: 2018-03-20 00:00:00 -0400
categories: web development jquery basics
---

# Introduction

## Definition

A cross-platform JavaScript library designed to simplify the client-side scripting of HTML.

More details on the MDN: https://developer.mozilla.org/docs/Glossary/jQuery

## Should you use it?

# Yes
- Fixes "broken" DOM API
- BRevity and Clarity
- Ease of use
- Cross-Browser Support
- AJAX
- Lot's of people use jQuery!

# No
- The DOM API is no longer "broken".
- These days there are even decent ways to handle AJAX with standard vanilla JS.
- It does not do anything you cannot do on your own.
- It can be an unnecessary dependency.
- Performance.
- Lot's of people are moving away from jQuery.

More details on: 
http://youmightnotneedjquery.com/


# How-to add jQuery

## Download jQuery and link it locally

Download page: https://jquery.com/download/

{% highlight html linenos %}
<!DOCTYPE html>
<html>
    <head>
        <script src="path/to/you/local/jquery.min.js">
        </script>
    </head> 
    <body>
    </body>
</html>
{% endhighlight %}


## Link to a CDN
Same as the local version, except that you are going to use a different source (`src` attribute), an hosted copy.

For the version 3.2.1: `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js`


# Selecting with jQuery

Syntax:
{% highlight javascript %}
$(selector)
{% endhighlight %}

Works like querySelectorAll, in that we provide a CSS style selector and jQuery will return all matching elements.

Example:

{% highlight html linenos %}
<!DOCTYPE html>
<html>
    <head>
        <title>jQuery Demo</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
        </script>
    </head> 
    <body>
        <h1>jQuery Demo!</h1>
        <ul>
            <li>Newt</li>
            <li class="sale">Howler Monkey <a href="Monkey.com">Monkey.com</a></li>
            <li id="bonus">Pine Marten</li>
        </ul>
    </body>
</html>
{% endhighlight %}

{% highlight javascript linenos %}

// To select all img tags.
$("img");

// To select all elements with class "sale"
$(".sale");

// To select element with id "bonus" 
$("#bonus");

// To select all <a> tags inside <li> tags.
$("li a");

// To select the first <li>.
$("li:first-of-type");

// Same as above using the builtin jQuery. 
// (but does not use a builtin css selector, so it's slower)
$("li:first");

// Select the last <li>
// (no optimization too)
$("li:last");

{% endhighlight %}

More details on: https://api.jquery.com/category/selectors/


# Manipulate Style: css

Works on both single and multiple selections.

Syntax:

{% highlight javascript %}
// Single property modifications
$(selector).css(property, value);

// Styles object (field names are css property names)
$(selector).css(styles);
{% endhighlight %}

Example:
{% highlight javascript linenos %}
// Select element with id "bonus" and give it a border.
$("#bonus").css("border", "2px solid red");

// We can also pass in an object with styles
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold"
};

$("#bonus").css(styles);

{% endhighlight %}


# Common jQuery Methods

Let's start with the example below:

{% highlight html linenos %}
<!DOCTYPE html>
<html>
    <head>
        <title>jQuery Methods</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
        </script>
    </head> 
    <body>
        <h1>jQuery Methods Demo Page</h1>
        <input type="text" placeholder="your name" value="Jean-Michelle">
        <ul>
            <li>Skittles</li>
            <li>Starbust</li>
            <li>Twix</li>
        </ul>
    </body>
</html>
{% endhighlight %}

The list of the jQuery API methods: 
http://api.jquery.com


## val

It's a wrapper around standard DOM `.value` property.

Definition: Get the current value of the first element in the set of matched elements.

- > **Get** the current value of the **first** element in the set of **matched** elements.
- > **Set** the value of **each** element in the **set** of matched elements.

Example:
{% highlight javascript linenos %}
// Returns "Jean-Michelle".
$("input").val();

// Sets the value to "Michelle Prime" .
$("input").val("Michelle Prime");
{% endhighlight %}

Note: `val()` is actually the equivalent of the `prop("value")` call.

More details on: http://api.jquery.com/val


## text

The jQuery version of the standard `textContent` method.

Definitions: 

- > **Get** the **combined text** contents of **each** element in the set of **matched** elements, **including their descendants**.
- > **Set** the content of **each** element in the set of **matched** elements to the specified text.

Example:
{% highlight javascript linenos %}
// Returns "jQuery Methods Demo Page".
$("h1").text();

// Returns "Skittles Starbust Twix".
$("ul").text();

// Returns "SkittlesStarbustTwix" (yup no space).
$("li").text();

// Will give: <h1>New Text!!!</h1>
$("h1").text("New Text!!!");

// Will give: 
// <li>You're awesome!</li>
// <li>You're awesome!</li>
// <li>You're awesome!</li>
// Note: no need to perform a loop.
$("li").text("You're awesome!");
{% endhighlight %}

More details on: http://api.jquery.com/text


## attr

Sets or returns attributes and values of the selected elements.

A bit analog to the standard `setAttribute` and `getAttribute` methods.

Definitions:

- **Get** the value of an attribute for the **first** element in the set of **matched** elements.
- **Set** one or more attributes for the set of **matched** elements.

Example:
{% highlight javascript linenos %}
// Returns "text".
$("input").attr("type");

// Sets to a password type
$("input").attr("password");
{% endhighlight %}

More details on: http://api.jquery.com/attr

Note: 

> As of jQuery 1.6, the `attr` method returns `undefined` for **attributes** that have **not been set**. In addition, `attr` **should not be used on plain objects, arrays, the window, or the document**. To retrieve and change DOM properties, **use the** `prop` method.


## prop

Sets or returns properties and values of the selected elements.

Definitions:

- > **Get** the value of a property for the **first** element in the set of **matched** elements.
- > **Set one or more properties** for the set of **matched** elements.

Example:
{% highlight javascript linenos %}
// Returns "text".
$("input").prop("type");

// Sets to a password type
$("input").prop("password");
{% endhighlight %}

### Differences between `prop` and `attr`:

Example 1 - HTML attributes / DOM objects:
{% highlight html %}
<input type="text" blah="hello" placeholder="your name" value="Jean-Michelle">
{% endhighlight %}

{% highlight javascript linenos %}
// Returns "hello" as expected. No suprises here.
$("input").attr("blah");

// Returns undefined, why?
// Because it's trying to do [HTMLInputElement].blah 
// and no such property on that DOM object exists. 
// It only exists in the scope as an attribute of that element 
// i.e. [HTMLInputElement].getAttribute('blah')
$("input").prop("blah");

// Let's introduce new changes:
$("input").attr("blah", "apple");
$("input").prop("blah", "pear");

// Returns "apple"... 
// Why? Why not "pear" as this was set last on that element?
// Because the property was changed on the input attribute
// and not the DOM input element itself.
// The basically almost work independently of each other.
$("input").attr("blah");

// Returns "pear".
$("input").prop("blah")
{% endhighlight %}

Example 2 - Style:

{% highlight html %}
<input style="font:arial;"/>
{% endhighlight %}

{% highlight javascript linenos %}
// Returns inline styles for the matched element, i.e. "font:arial;".
$("input").attr("style");

// Returns an style declaration object i.e. CSSStyleDeclaration.
$("input").prop("style");
{% endhighlight %}

Example 3 - Value:
{% highlight html %}
<input value="hello" type="text"/>
{% endhighlight %}

{% highlight javascript linenos %}
// Let's change the value of the <input>.
$("input").prop("value", "i changed the value");

// Returns the old value: "hello".
$("input").attr("value");
// Returns the new value: "i changed the value".
$("input").prop("value");
{% endhighlight %}

### Difference between `prop` and `val`:

> However, using `val` **is not always the same**. For instance, the value of `<select>` elements is actually the value of their selected option. `val` takes that into account, but `prop` does not. For this reason, `val` **is preferred**.


## html

The jQuery version of the standard `innerHtml` method.

Definitions: 

- > **Get** the HTML contents of the **first** element in the set of **matched** elements.
- > **Set** the HTML contents of **each** element in the set of **matched** elements.

Example:
{% highlight javascript linenos %}
// Returns "<li>Skittles</li> <li>Starbust</li> <li>Twix</li>".
$("ul").html();

// Replace the original <li> within the <ul> with new ones
$("ul").html("<li>I hacked your UL!</li><li>Rusty is still adorable</li>");

// Replace all the <li> content with the same <a> tag.
$("li").html("<a href='google.com'>Click me to go to google</a>");
{% endhighlight %}

More details on: http://api.jquery.com/html

## Classes Manipulation

Now, let's say we add the class below in a css referenced to the html code given as the example for Common jQuery Methods section:

{% highlight css linenos %}
.correct {
    background: green;
}
.wrong {
    background: red;
}
{% endhighlight %}

The methods mentionned in this subsection are similar to the classList methods except that you don't need to explicitly loop over several elements (given the jQuery selection).

### addClass

Definition: 

> **Adds** the specified **class(es)** to **each** element in the set of **matched** elements.

It is a bit analog to the standard `classList.add` method.

Example:

{% highlight javascript linenos %}
// Set the background color of all <li> to green.
$("li").addClass("correct");
{% endhighlight %}

More details on: http://api.jquery.com/addClass


### removeClass

Definition: 

> **Remove** a single class, multiple **classes**, or all classes from **each** element in the set of **matched** elements.

It is a bit analog to the standard `classList.remove` method.

Example:
{% highlight javascript linenos %}
// Remove the green background color of all <li>.
$("li").removeClass("correct");

// Set the background color of all <li> to red.
$("li").addClass("wrong");
{% endhighlight %}

More details on: http://api.jquery.com/removeClass


### toggleClass

Definition: 

> **Add or remove** one or more **classes** from **each** element in the set of **matched** elements, depending on either the class's presence or the value of the state argument.

It is a bit analog to the standard `classList.toggle` method.

Example:

{% highlight javascript linenos %}
// If unset before, set the background color of all <li> to green.
$("li").toggleClass("correct");

// Remove the green background color of all <li>.
$("li").toggleClass("correct");
{% endhighlight %}

More details on: http://api.jquery.com/toggleClass

# (Most Common) Events

Just like with the regulard DOM operations, we can subscribe to and unsubscribe from various events.

Note: more events are available here: https://api.jquery.com/category/events

## Note about this with jQuery event handlers

When an event handled is called following the event occurence, you might need information given by the underlying element on which the event occurs. Unlike standard DOM javascript events, you may need `$(this)` to access to the underlying element.

Why? because you need to consider the few things below:

- > `$()` is the jQuery constructor function.
- > `this` is a reference to the DOM element of invocation.
- > So basically, in `$(this)`, you are just passing the `this` in `$()` as a parameter so that you could call jQuery methods and functions.


## Event Handler Attachment

### on

Definition: it's very similar to the standard DOM `addEventListener`, it attach an event handler function for one or more events to the selected elements.

It supports all types of events, for example:

{% highlight javascript linenos %}
// Subscribe to the double click event of a <button> selection.
$("button").on("dblclick", function() {
    alert("DOUBLE CLICKED!");
});

// Subscribe to drag start even of <a> selection.
$("a").on("dragstart", function() {
    alert("DRAG STARTED!");
});

{% endhighlight %}

More details on: http://api.jquery.com/on


### Differences with addEventListener

> You cannot use capture for jQuery `on`, such a thing just doesn't exist. **jQuery only supports event bubbling**. You could, however, **specify** whether to capture the **event** in **capture phase** or **bubble phase** with `addEventListener`.

> jQuery `on` allows you to attach the same event listener for multiple events, whereas `addEventListener` only allows you to add an event listener to a **single event** type at a time (although you could use something like:

{% highlight javascript linenos %}

["event type 1", "event type 2"].forEach( function(i){ 
        element.addEventListener(i, function(){} ); 
})

{% endhighlight %}

> Event listeners attached by using jQuery `on` **can be invoked** by calling `trigger`, another jQuery function, but event listeners attached by using `addEventListener` will **not respond** to `trigger`.

### Difference with builtin jQuery events

In most cases for example `click` and `on("click")` will both get the job done. However, there is one key difference:

- `click` ondly adds listeners for existing elements.
- `on("click")` will add listeners for all potential future elements.


### off

Definition: it's pretty much the same as the standard DOM `removeEventListener`, it removes one or more event handlers.

We can remove all kinds of event handlers from a specific set of matched elements:
{% highlight javascript linenos %}
// Remove all event handlers from all paragraphs:
$("p").off();
{% endhighlight %}

But we can also remove specific even handlers for a certain type of event:
{% highlight javascript linenos %}
// Remove all delegated click handlers from all paragraphs:
$("p").off("click", "**");
{% endhighlight %}
 
We can also remove just one previously bound handler by passing it as the third argument:
{% highlight javascript linenos %}
// Code to handle some kind of event
var foo = function() {
};

// ... Now foo will be called when paragraphs are clicked ...
$("body").on( "click", "p", foo);
 
// ... Foo will no longer be called.
$("body").off( "click", "p", foo);

{% endhighlight %}

More details on: http://api.jquery.com/off

## Most Common Input-like Events

The majority of the common events behave are defined such as to:

- > **Bind** an **event handler** to be **fired** when the **underlying DOM event occurs on the givent selection**, it is often translated as: `on("eventName", handler)`.

Example:
{% highlight javascript linenos %}
// subscribe to the eventName event with the given handler (anonymous function).
$(selector).eventName(function() {
    console.log("The 'eventName' event has just occured.");
});
{% endhighlight %}

- > **Trigger that handler** on an element, often translated as: `trigger("eventName")`.
Example:
{% highlight javascript linenos %}
// Programmatically triggers the event on the jQuery selection. 
$(selector).eventName();
{% endhighlight %}

Note: the `eventName` mentionned above is just used for illustration purposes and can be replaced later on by one of the events mentionned in the lists below (i.e. working examples).


## Mouse

Most common mouse events are self-explanatory and include (non-exhaustive list):

- `mouseenter`
  - jQuery Event: https://api.jquery.com/mouseenter
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/mouseenter
- `mouseleave`
  - jQuery Event: https://api.jquery.com/mouseleave
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/mouseleave
- `mousemove`
  - jQuery Event: https://api.jquery.com/mousemove
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/mousemove
- `mouseover` 
  - jQuery Event: https://api.jquery.com/mouseover
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/mouseover
- `click`
  - jQuery Event: https://api.jquery.com/click
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/click
- `dblclick`
  - jQuery Event: https://api.jquery.com/dblclick
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/dblclick

Certain events can combine several events, for example `hover` is a convenient shorthand for handling both `mouseenter` and `mouseleave` and supporting two different forms:

  - Two Handlers Form: `$(selector).mouseenter(handlerIn).mouseleave(handlerOut);`.
  - Single Handler Form: `$(selector).on("mouseenter mouseleave", handlerInOut);`.

More details on: https://api.jquery.com/hover

To figure out which mouse button has been used:
{% highlight javascript linenos %}
// On mousedown occurence, this code below will log: "keydown: {button code}".
$(selector).on( "mousedown", function(event) {
    console.log(event.type + ": " +  event.which);
});
{% endhighlight %}

Note: 

> `event.which` also **normalizes button presses** (`mousedown` and `mouseup` events), reporting **1 for left** button, **2 for middle**, and **3 for right**. Use `event.which` instead of `event.button`. 


More jQuery mouse events on: https://api.jquery.com/category/events/mouse-events

## Keyboard

Most common keyboard events are also self-explanatory and include:

- `keydown`
  - jQuery Event: https://api.jquery.com/keydown
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/keydown
- `keyup`
  - jQuery Event: https://api.jquery.com/keyup
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/keyup
- `keypress`
  - jQuery Event: https://api.jquery.com/keypress
  - DOM Event: https://developer.mozilla.org/docs/Web/Events/keypress

To figure out which key has been used:
{% highlight javascript linenos %}
// On key down occurence, this code below will log: "keydown: {key code}".
$(selector).on("keydown", function(event) {
    console.log(event.type + ": " +  event.which);
});
{% endhighlight %}

Note: 

> The `event.which` property **normalizes** `event.keyCode` and `event.charCode`. It is **recommended** to watch `event.which` for **keyboard key input**. 

For more detail about char code, see the MDN: https://developer.mozilla.org/docs/Web/API/KeyboardEvent/charCode#Notes

The official jQuery documentation about those those keyboard events: https://api.jquery.com/category/events/keyboard-events/

## Effects

