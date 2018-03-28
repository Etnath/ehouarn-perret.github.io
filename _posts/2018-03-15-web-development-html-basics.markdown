---
layout: post
title:  "Web Development: HTML Basics"
date:   2018-03-15 00:00:00 -0400
categories: web development html basics
---

{:toc}

# History

- HTML was created back in 1989 / 1990.
- Allowed publishing and exchanging of scientific and technical documents.
- Allowed eletronic linking of documents via hyperlinks.

# General Rule
{% highlight html %}
<tagName> Some Content </tagName>
{% endhighlight %}

More details:
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML

MDN: Mozilla Developer Network
Good reesource for HTML, CSS and JavaScript.

# Standard HTML boilerplate
{% highlight html linenos %}

<!-- I am a comment... -->
<!-- Ctrl + /: toggle comment / comment out the selection -->

<!-- Indicates the HTML content users HTML5 -->
<!DOCTYPE html>

<!-- Root of the HTML document, everything should go below -->
<html>
    <!-- Provide general metadata about the document in the head -->
    <head>
         <!-- Example of metadata: the page title -->
        <title></title>
    </head>
    <!-- Our content goes into the body below -->
    <body>
    </body>
</html>
{% endhighlight %}

# Basic Tags
Note: you can check all the tags on: HTML elements reference (https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Tags `<h1>` to `<h6>` make the content one of six levels of headings (from the biggest `<h1>` to the smallest level `<h6>`).

They are block level elements, that is they "have" their own line:

- Tag `<p>`: makes the tag content as a paragraph (note: paragraphs are also block level elements).

Traditionally we also have inline elements:

- Tag `<b>`: makes the content bold (inline).
- Tag `<i>`: makes the content italic (also inline).

But it's better to use semantic markup (still both tags below are inline):

- Tag `<strong>` instead of `<b>`.
- Tag `<em>` (emphasized) instead of `<i>`.

# Lists

## Ordered List 
They display an ordinal number for each item of the list:
{% highlight html linenos %}
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
{% endhighlight %}

## Unordered List
They display a bullet for each item of the list:
{% highlight html linenos %}
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
{% endhighlight %}

## Combination
You can combine tags and create sublists, for example:
{% highlight html linenos %}
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item3: SubList
        <ol>
            <li>SubItem 1</li>
            <li>SubItem 2</li>
            <li>SubItem 3</li>
        </ol>
    </li>
</ul>
{% endhighlight %}

## Block level and and inline containers

Both are containers containing elements but:

- `<div>`: block-level (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
- `<span>`: inline (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)

## Tables

Tag `<table>`: Create a table (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

Example
{% highlight html linenos %}
<table>
    <thead>
        <tr>
            <th>Column 1 Header</th>
            <th>Column 2 Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cell Data: { Row 1, Column 1 }</td>
            <td>Cell Data: { Row 1, Column 2 }</td>
        </tr>
        <tr>
            <td>Cell Data: { Row 2, Column 1 }</td>
            <td>Cell Data: { Row 2, Column 2 }</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

Let's break it down:

- `<table>`: the tag delimiting the table content
- `<thead>`: delimit the header rows
- `<tbody>`: delimit the content rows
- `<tr>`: table row
- `<td>`: table data

# Attributes
Adding additional information to tags.
{% highlight html %}
<tag attribute="value">content</tag>
{% endhighlight %}

MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

`src` example:
`<img src="the/path/to/this/image.png">`: display the image located at: `the/path/to/this/image.png`.

`href` example:
`<a href="http://www.google.com">Goto Google</a>`: makes the content "Goto Google" by default "clickable" and forward to `google.com`
Beware to indicate the http protocol (absolute path) otherwise the browser is going to forward you to `your/current/location/www.google.com` which is a relative path.

# Forms
How we can get inputs.
MDN: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms

Example:
{% highlight html linenos %}
<form action="/url/to/send/data/to" method="post">
    <!-- All our inputs iwill go here -->
</form>
{% endhighlight %}

- `action`: the url where to send the form data to.
- `method`: the type of HTTP request.

## Inputs

The tag `<input>` accepts a `type` attribute to indicate the control to use, examples of values:

- `text` 
- `date`
- `color`
- `file`
- `radio`
- `checkbox`

MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

They can also accept a `name` attribute in order to recognize which input is passing which specific data.

## Names

Example:
{% highlight html linenos %}
<h1>Login</h1>
<form action="/sign-in-url" method="post">
    <input name="username" type="text" placeholder="username">
    <input name="password" type="password" placeholder="password">
    <input name="rememberme" type="checkbox">
    <input type="submit">
</form>
{% endhighlight %}

The bar address will display "/sign-in-url?username=...&password=..." where "..." are filled with the respective controls values.

## Labels

- Tag `<label>`: Useful for people suffering from impairements.
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label

Example
{% highlight html linenos %}
<h1>Login</h1>
<form action="/sign-in-url" method="post">
    <label>
        Username: 
        <input name="username" type="text" placeholder="username">
    </label>
    <label>
        Password: 
        <input name="password" type="password" placeholder="Password">
    </label>
    <label>
        Remember Me: 
        <input name="rememberme" type="checkbox" checked>
    </label>
    <input type="submit">
</form>
{% endhighlight %}

There is also an alternate syntax using the `for` and `id` attributes:
{% highlight html linenos %}
<h1>Login</h1>
<form action="/sign-in-url" method="post">
    <label for="username">Username: </label>
    <input id="username" type="text" placeholder="username">
    <label for="password">Password: </label>
    <input id="password" type="password" placeholder="password">
    <label for="rememberme">Remember Me:  </label>
    <input id="rememberme" type="checkbox" checked>
    </label>
    <input type="submit">
</form>
{% endhighlight %}

## Simple Validations
Enforce rules on different parts of the `form`:
- required attributes validates that an `<input>` is not empty.
- There are also type validations, like changing `<input>` `type` attribute from `text` to `email`.

{% highlight html linenos %}
<h1>Login</h1>
<form action="/sign-in-url" method="post">
    <label for="username">Username: </label>
    <input id="username" type="text" placeholder="username" required>
    <label for="password">Password: </label>
    <input id="password" type="password" pattern=".{2,3}" placeholder="password" title="Password must be between 5 and 10 characters" required>
    <input type="submit">
</form>
{% endhighlight %}

## Some other elements

### Radio Buttons
`<input>` with `radio` as the type attribute.
{% highlight html linenos %}
<form action="/action-url" method="post">
    <label for="dogs">Dogs: </label>
    <input id="petchoice" type="radio" value="DOGS">
    <label for="cats">Cats: </label>
    <input id="petchoice" type="radio" value="CATS">
    <input type="submit">
</form>
{% endhighlight %}
Note: if the `id` attribute is the same for several `radio` `<input>` then only one of the input can be selected.

## Dropdown
A combobox for selection purposes:
{% highlight html linenos %}
<select name="mood">
    <option value="happy">:]</option>
    <option value="neutral">:|</option>
    <option value="sad">=/</option>
</select>
{% endhighlight %}

## Textarea
A muliple lines text field

{% highlight html linenos %}
<textarea name="paragraph" rows="10" cols="50">
</textarea>
{% endhighlight %}

# Source Code
Tooling: see the code source of the current page in your browser:

In both (Google) Chrome / Firefox: 

- Current Page >> Right-cick >> View Page Source
- `Ctrl` + `U`
