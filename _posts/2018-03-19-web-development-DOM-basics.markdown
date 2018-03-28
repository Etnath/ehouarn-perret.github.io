---
layout: post
title: "Web Development: DOM Basics"
date: 2018-03-19 00:00:00 -0400
categories: web development DOM basics
---

# Definition

DOM: Document Object Model. It's basically the interface between the your JavaScript and the HTML + CSS couple.

{% highlight html linenos %}
<!DOCTYPE html>
<html>
	<head>
		<title>My title</title>
	</head>
	<body>
		<a href="#">My link</a>
		<h1>My header</h1>
	</body>
</html>
{% endhighlight %}

The browser turns every HTML tag into a JavaScript object that we can manipualte.

Everything is stored inside of the document object (a tree nodes are the HTML Tag).

DOM Hierarchy Example:

- Document
  - Root Element: `<html>`
	- Element: `<head>`
	  - Title: `<title>`
	  - Text: `"My title"`
	- Element: `<body>`
	  - Element: `<a>`
		- Attribute: `href`
		- Text: `"My link"`
	  - Element: `<h1>`
		- Text: `"My header"`

You can have a look at the DOM, by just browsing a website and look at the object returned when typing `document` in your JavaScript console.

More details on the MDN: https://developer.mozilla.org/docs/Web/API/Document_Object_Model


# Important Selector Methods

Let's consider the following html document:

{% highlight html linenos %}
<!DOCTYPE html>
<html>
	<head>
		<title>My title</title>
	</head>
	<body>
		<h1>Hello</h1>
		<h1>Goodbye</h1>
		<ul>
			<li id="highlight">List Item 1</li>
			<li class="bolded">List Item 2</li>
			<li class="bolded">List Item 3</li>
		</ul>
	</body>
</html>
{% endhighlight %}


## getElementById

Definition: Takes a string argument and returns the one element with a matching ID.

Example:
{% highlight javascript %}
var tag = document.getElementById("highlight");
{% endhighlight %}

Selection:
{% highlight html linenos %}
<li id="highlight">List Item 1</li>
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/docs/Web/API/Document/getElementById


## getElementsByClassName

Definition: Takes a string argument and returns a list of elements that have a matching class.

Example:
{% highlight javascript %}
var tag = document.getElementsByClassName("bolded");
{% endhighlight %}

Selection:
{% highlight html linenos %}
<li class="bolded">List Item 2</li>
<li class="bolded">List Item 3</li>
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName 


## getElementsByTagName

Definition: Returns a list of all elements of given tag name, like `<li>` or `<h1>`.

Example:
{% highlight javascript %}
var tag = document.getElementsByTagName("li");
{% endhighlight %}

Selection:
{% highlight html linenos %}
<li id="highlight">List Item 1</li>
<li class="bolded">List Item 2</li>
<li class="bolded">List Item 3</li>
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/docs/Web/API/Document/getElementsByTagName 

## querySelector

Definition: Returns the first element that matches a given CSS-style selector.

Example:
{% highlight javascript %}
var tag = document.querySelector("#highlight");
{% endhighlight %}

Selection:
{% highlight html linenos %}
<li id="highlight">List Item 1</li>
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/docs/Web/API/Document/querySelector 


## querySelectorAll

Definition: Returns a list of elements that matches a given CSS-style selector.

Example:
{% highlight javascript %}
var tag = document.querySelector(".bolded");
{% endhighlight %}

Selection:
{% highlight html linenos %}
<li class="bolded">List Item 2</li>
<li class="bolded">List Item 3</li>
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll 


# Manipulate Style

Example:
{% highlight javascript %}
var tag = document.getElementById("highlight");
{% endhighlight %}

Manipualtion (note that we assign only strings):
{% highlight javascript linenos %}
tag.style.color = "blue";
tag.style.border = "fontSize";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
{% endhighlight %}

But it's not that grand to modify each field indenpendtly, a better alternative that ensure separative of concerns (i.e. JavaScript / HTML / CSS) to the modification done above is to use a predefined class and to assign it to the `tag`.

So le'ts define the CSS class below:
{% highlight css linenos %}
.some-class {
	color: blue;
	border: 10px solid red;
}
{% endhighlight %}

And use it on the selected tag:
{% highlight javascript linenos %}
var tag = document.getElementById("highlight");
tag.classList.add("some-class");
{% endhighlight %}

The same strategy can be used to remove a class already assigned to the element, for example:
{% highlight css linenos %}
.another-class {
	color: purple;
	fontSize: 76px;
}
{% endhighlight %}

{% highlight javascript linenos %}
var tag = document.querySelector("h1");

// Add the class to the tag.
tag.classList.add("another-class");

// Remove the class previously assigned from the tag.
tag.classList.remove("another-class");

// Reset the tag (previously removed): re-assign the class again.
tag.classList.toggle("another-class");
{% endhighlight %}

More details on the MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

# Manipulate Text and Content

Let's say we have the html snippet below:
{% highlight html %}
<p>This is an <strong>awesome</strong> paragraph.</p>
{% endhighlight %}


## textContent

This field represents the text content of a given element:

{% highlight javascript linenos %}

// Select the <p> element:
var tag = document.querySelector("p");

// Retrieve the text content:
// Return: "This is an awesome paragraph."
textContent = tag.textContent;

// "<p>blah blah blah</p>"
tag.textContent = "blah blah blah"
{% endhighlight %}


## innerHtml

Similar to textContent, except it returns a string of all the HTML contained in a given element.

{% highlight javascript linenos %}
var tag = document.querySelector("p");

// Return "This is an <strong>awesome</strong> paragraph."
innerHtml = tag.innerHtml;
{% endhighlight %}

More details on the MDN: 

- https://developer.mozilla.org/docs/Web/API/Node/textContent
- https://developer.mozilla.org/docs/Web/API/Element/innerHTML


# Manipulate Attributes

Let's say we the html below:
{% highlight javascript linenos %}
<a href="www.google.com">I am a link</a>
<img src="logo.png">
{% endhighlight %}

We can modify (read / write) the attributes as follows:
{% highlight javascript linenos %}

var a = document.querySelector("a");

// Return "www.google.com"
a.getAttribute("href");

// Change the href attribute value:
a.setAttribute("href", "www.dogs.com");

var img = document.querySelector("img");

// Change the src attribute value:
img.setAttribute("src", "corgi.png");

{% endhighlight %}

More details on the MDN:

- https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
- https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute


# DOM Events

They are everywhere:

- Clicking on a button.
- Hovering over a link.
- Dragging and Dropping.
- Pressing the Enter key.

The process is relatively simple, like in any other language supporting event handler:

1. Select an element.
2. Add an event listener (a function called upong event occurrence).

The Syntax:
{% highlight javascript %}
element.addEventListener(eventType, callback);
{% endhighlight %}

Example: 
{% highlight html linenos %}
<button>Click Me</button>
<p>No one has clicked on me yet.</p>
{% endhighlight %}

{% highlight javascript linenos %}
var button = document.querySelector("button");
button.addEventListener("click", function() {
	paragraph.textContent = "Someone has clicked the button!";
});

{% endhighlight %}

Obviously to remove an event handler the opposite method is also available:
{% highlight javascript %}
element.removeEventListener(eventType, callback);
{% endhighlight %}

More details on the MDN:

- DOM Events: https://developer.mozilla.org/docs/Web/Events
- addEventListener: https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener
- removeEventListener: https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener

## Event Bubbling vs Event Capturing

### Bubbling

> When an **event** happens on an **element**, it **first** runs the **handlers on it**, **then** on its **parent**, **then** all the way up on other **ancestors**.

Example: 
{% highlight html linenos %}
<!DOCTYPE html>
<html>
	<head>
		<title>Vanilla JavaScript</title>
		<style>
			form, div, p {
				margin: 10px;
				border: 1px solid blue;
		  	}
		</style>
	</head> 
	<body>
		
		<form onclick="log();">Form
			<div onclick="log();">Div
				<p onclick="log();">P
				</p>
			</div>
		</form>
		
		 <button onclick="console.clear();">Clear Console</button> 
			
		<script>
			
			function getEventPhaseString() {
				switch(event.eventPhase) {
					case Event.NONE:
						return "None";
					case Event.CAPTURING_PHASE:
						return "Capturing";
					case Event.AT_TARGET:
						return"At Target";
					case Event.BUBBLING_PHASE:  
						return "Bubbling";
					default:
						return "Unknown";
				}
			}

			function log() {
				console.log("Target: " + event.target.nodeName);
				console.log("Current Target: " + event.currentTarget.nodeName);
				console.log("Event Phase: " + getEventPhaseString());
				console.log("Bubbling up:  " + event.bubbles);
				console.log("---");
			}
			
		</script>
	</body>
</html>

{% endhighlight %}

As you can see when you click on <p>:

### Capturing

Note: in the example above onclick is a shorthand to add the content of an anonymous function right for the related element.

You can decided whether the addEventListener use capturing instead of bubbling behaviour.


In short.