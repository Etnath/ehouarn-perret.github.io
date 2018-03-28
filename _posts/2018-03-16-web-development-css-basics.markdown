---
layout: post
title:  "Web Development: CSS Basics"
date:   2018-03-16 00:00:00 -0400
categories: web development css basics
---

{:toc}

# General Rule:
{% highlight css linenos %}
selector {
    property: value;
    anotherProperty: value;    
}
{% endhighlight %}


# CSS Inspection
See css rules applied in the current page of your browser:

In both (Google) Chrome / Firefox: 

- Current Page >> Right-cick >> Inspect Element.
- Firefox / (Google) Chrome: `Ctrl` + `Shift` + `C`.

# Integration Examples

## External File
{% highlight css linenos %}
/* Select all h1's and make them purple with a font size of 56px. */
h1 {
    color: purple;
    font-size: 56px;    
}

/* Give All img's a 3px red border. */
img {
    border-color: red;
    border-width: 3px;
}
{% endhighlight %}

## Directly in the html:

Inline directly in the element declaration:
{% highlight html linenos %}
<h3 style="color: pink;">blahblah </h3>
{% endhighlight %}

`style` tag (in the `<head>`):
{% highlight html linenos %}
<html>
    <head>
        <title>About...</tittle>
        <style type="text/css">
            li {
                color: red;
            }
            h1 {
                color: purple;
            }
        </style>
    </head>
    <body>
    </body>
</html>
{% endhighlight %}

The method above is not good. The css should written in a separate css file and rather et referenced in the html file using it (i.e. maintenance and portability purposes).

## The right way of doing 

`main.css` content:
{% highlight html linenos %}
li {
    color: red;
}
h1 {
    color: purple;
}
{% endhighlight %}

`index.html` content.
{% highlight html linenos %}
<html>
    <head>
        <title>About...</tittle>
        <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
    </body>
</html>
{% endhighlight %}

# Properties

## Color
Change the text color ("foreground" color) for a given selector.

More details on:

- Property: https://developer.mozilla.org/en-US/docs/Web/CSS/color
- Value type: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

### Builtins
Colour names (e.g. red, blue, etc.).

Example
{% highlight css linenos %}
h1 {
    color: purple;
}
{% endhighlight %}

### RGB 
Red, Green, Blue range for each the range is [0, 255].

Example
{% highlight css linenos %}
h1 {
    color: rgb(128, 0, 128);
}
{% endhighlight %}


### Hexadecimal
Like RGB but using hexadecimal format.

Example
{% highlight css linenos %}
h1 {
    color: #800080;
}
{% endhighlight %}

### RGBA
RGB + Alpha (transparency) its range is [0.0, 1.0].

Example
{% highlight css linenos %}
h1 {
    color: rgba(128, 0, 128, 0.5);
}
{% endhighlight %}

## Background
Set the style for the selector background.

More details on: https://developer.mozilla.org/en-US/docs/Web/CSS/background
Same rule as for the color (builtins, hexadecimal value, `rgb`, `rgba`) but can also use image.

Example
{% highlight css linenos %}
body {
    background: url("url/to/your/image");
    background-repeat: no-repeat;
    background-size: cover;
}
{% endhighlight %}

## Border
Defines the border style for the given selector.

More details on: https://developer.mozilla.org/en-US/docs/Web/CSS/border

Example
{% highlight css linenos %}
h1 {
    border-color: purple;
    border-width: 5px;
    border-style: dashed;
}
{% endhighlight %}

Alternatively you can combine the border related properties above like that:
{% highlight css linenos %}
h1 {
    border: 5px purple dashed; 
}
{% endhighlight %}

Please note that there specific property for each side of the element:
{% highlight css linenos %}
h1 {
    border-left-color: purple;
    border-left-width: 5px;
    border-left-style: dashed;

    border-right-color: purple;
    border-right-width: 5px;
    border-right-style: dashed;

    border-top-color: purple;
    border-top-width: 5px;
    border-top-style: dashed;

    border-botton-color: purple;
    border-botton-width: 5px;
    border-botton-style: dashed;
}
{% endhighlight %}

## Font and text related

### Font Family
Specifies a priority list of fonts to use for a given selector (the most prioritized font being on the left, the least on the right, works as a fallback if one or several fonts are not available).

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family.

Example
{% highlight css linenos %}
p {
    font-family: Arial;
}
{% endhighlight %}

### Font Size

Specifies how big is the fond use for the given selector.

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size.
Example
{% highlight css linenos %}
p {
    font-size: 10px;
}
{% endhighlight %}

Other units(other than `px`) are also available like `em` (a relative font size unit unlike `px` [which is absolute]).

Example
{% highlight css linenos %}
p {
    font-size: 2.0em;
}
{% endhighlight %}

For more details about length units, see MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/length

### Font Weight

Specifies the "boldness" for the font of the given element.

Example
{% highlight css linenos %}
p {
    /* other values include: normal, bolder, lighter, etc. */
    font-weight: bold;
}
{% endhighlight %}

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight.

### Line Height

Specifies the height of text line.

Example
{% highlight css linenos %}
p {
    font-size: 10px;

    /* With this mode (no unit) it's basically going to set 
    the line height to 2.5 * 10px = 25px */
    line-height: 2.5;
}
{% endhighlight %}

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height.

### Text Align
Describes how inline content like text is aligned in its parent block element.

Example
{% highlight css linenos %}
p {

    /* other values that are usually used
    - right
    - center
    - justify
    - ... */
    text-align: left;
}
{% endhighlight %}

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align.

### Text Decoration 
Specifies the appearance of decorative lines used on text.

{% highlight css linenos %}
p {
    text-decoration: underlined dotted purple;
}
{% endhighlight %}

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration.

# Add new fonts

Very similar to reference a css file to your html file, just reference a fonts file: just add `<link rel="stylesheet" type="text/css" href="url/to/my/fonts">` in the `<head>`.

Example:
{% highlight css linenos %}
<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" type="text/css" href="url/to/my/fonts">
    </head>
    <body>
    </body>
</html>
{% endhighlight %}

# Selectors

## Basics

### Element
Select all instances of a given element.

Example
{% highlight css linenos %}
div {
    background: purple; 
}
{% endhighlight %}

### ID
Selects an element with a given ID. Only one per page.

Example

In the css file:
{% highlight css linenos %}
#special {
    background: purple; 
}
{% endhighlight %}

In the html file which refers the css file containing the snippet above:
{% highlight html linenos %}
<h1 id="special">I'm special!!!</h1>
{% endhighlight %}

### Class
Select all elements with a given class

Example

In the css file:
{% highlight css linenos %}
#highlight {
    background: purple; 
}
{% endhighlight %}

In the html file which refers the css file containing the snippet above:
{% highlight html linenos %}
<h1 class="highlight">I'm super important!!!</h1>
{% endhighlight %}

## More Selectors

### Star
Apply to every single element (including the body, litteraly everything).

MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors

Example:
{% highlight css linenos %}
* {
    border: 5px solid black; 
}
{% endhighlight %}

### Descendant

From right to left, the selector (could be an element, a class, etc.) of the right must be contained in the selector indicated by the left. 

That kind of selector consider nested relationship from left to right.

MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors

Example:
{% highlight css linenos %}
li a {
    color: red;
}
{% endhighlight %}

### Adjacent

Similar to the descendant selector, but it's not about nested selectors like above but with simbling selectors, it matches the second term on the right of the '+' symbol (which must be next to the left operand).

MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors

Example:
{% highlight css linenos %}
h4 + ul {
    border: 4px solid red;
}
{% endhighlight %}

### Attribute
Applies to all the elements with the given attribute:

MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

Example:
{% highlight css linenos %}
input[type="checkbox"] {
    background: blue;
}
{% endhighlight %}

### nth of type
Select every nth of a given element.

Example:
{% highlight css linenos %}
li:nth-of-type(3) {
    background: purple;
}
{% endhighlight %}

### More selectors?
See the MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

## Specificy

Concept of inheritance, the elements nested in a given parent element use by default the parent style unless specificed otherwise.

{% highlight css linenos %}
body {
    color: red;
    background: purple
}

/* if a <ul> is contained within the <body> the definition
below may override the definition above (if any).*/
ul {
    /* override the initial value given by the <body> css */
    color: blue;

    /* On the other hand, the background is using background
    given by the parent aka body so, the background of the
    <ul> (and its <li>!) will be... purple */
}

/* if some <li> have the class below like say 
<li class="highlight"> they will override the default given
through <ul> (the class is more specific). */
.highlight {
    color: orange;
}

/* The stye definition for the style below is even greater
than for the class above */
#special {
    color: green;
}
{% endhighlight %}

Want more: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

Long story short a the specifity can be computed: https://specificity.keegan.st/

From the least specific selectors to the most specific ones:

- Type Selectors:
    - `li { /*...*/ }`.
    - `li a { /*...*/ }`.
    - `li + a { /*...*/ }`.
- Class, Attribute and Pseudo-class Selectors:
    - Class, e.g. `.hello { /*...*/ }`.
    - Attribute, e.g. `input[type="text"] { /*...*/ }`.
    - Pseudo-class, e.g. 
        - `a:hover { /*...*/ }`.
        - `input:checked{ /*...*/ }`.
- ID Selectors, e.g. `#special { /*...*/ }`.

# Box Model

The browser's rendering engine represents each element as a rectangular box according to the standard CSS basic box model:

- Content: the actual content of the element, such as text, an image, video player, etc. It's bounded by the content edge.
- Padding: the space between the content edge and the border inner edge.
- Border: the decoration we described above with a given pattern, thickness and color.
- Margin: the space between the border edge and the 

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

## Padding

For the same padding value on each side of the content:

{% highlight css %}

padding: 5px;

{% endhighlight %}

For the padding of vertical and horizontal sides respectively:

{% highlight css %}

padding: 5px 5px;

{% endhighlight %}

For the padding of top, horizontal and bottom sides respectively:

{% highlight css %}

padding: 5px 5px 5px;

{% endhighlight %}

For each side (top, right, bottom, left) in one line of code:

{% highlight css %}

padding: 5px 5px 5px 5px;

{% endhighlight %}

With the specific properties:

{% highlight linenos css %}

padding-top: 5px;
padding-right: 5px;
padding-bottom 5px;
padding-left: 5px;

{% endhighlight %}


See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/padding

## Margin

The same kind of definition can be used to define the margin, in the previous section just replace `padding` with `margin`.

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/margin

# Float

Specificies whether an element should be removed from the normal flow of the web page and be set to the left or the right of its container making the inline elements wrapping around that specific element.

Example:

{% highlight css %}

/* Default value: none. 
Other common value possible: right. */
float: left;

{% endhighlight %}

See MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/float