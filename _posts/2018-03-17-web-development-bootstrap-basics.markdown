---
layout: post
title: "Web Development: Bootstrap 4 Basics"
date: 2018-03-17 00:00:00 -0400
categories: web development bootstrap basics
---


# What is Bootstrap?

A free and open-source front-end library for designing websites and web applications: https://getbootstrap.com/

It helps to have a consistent look and feel. 
You can "bootstrap" a webapp without spending too much time tweaking a style while having a decent theming, which makes you able to work on what really matters to you.

# How to install it?

The setup is detailed here: https://getbootstrap.com/docs/4.0/getting-started/introduction/

Using the CDN (Content Delivery Network: libraries hosted remotely).

The starter template given in the link above is:

{% highlight html linenos %}

<!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <!-- Required for proper rendering on mobile devices -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Page Title</title>
    </head>
    <body>
    <!-- Body content goes here before the Bootstrap related Javascript references below -->
    <!-- Order: jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
{% endhighlight %}

Note: 

- You can change the CDN references with your own version of Bootstrap downloaded there (be it locally or not): https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip
- Referencing a JavaScript file is as simple as: `<script src="url/to/javascript/file" crossorigin="anonymous"></script>` about the crossorigin attribute, more details are available on the MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes
- The documentation of the components is availabe here: https://getbootstrap.com/docs/4.0/components

# Colors

Boostrap defines a set of colors as part of the theme in use:
https://getbootstrap.com/docs/4.0/getting-started/theming/#theme-colors

- Primary
- Secondary
- Success
- Danger
- Warning
- Info
- Light
- Dark

A few simple examples that do not require the JavaScript references.

# Utilities

Here are below a few common utilities that you can combine with most of Bootstrap v4+ components.

## Borders

Borders also support the Boostrap theme colors:

{% highlight html linenos %}

<span class="border border-primary">Primary</span>
<span class="border border-secondary">Secondary</span>
<span class="border border-success">Success</span>
<span class="border border-danger">Danger</span>
<span class="border border-warning">Warning</span>
<span class="border border-info">Info</span>
<span class="border border-light">Light</span>
<span class="border border-dark">Dark</span>
<span class="border border-white">White</span>

{% endhighlight %}

More in the Boostrap Documentation:  https://getbootstrap.com/docs/4.0/utilities/borders/

## Colors

The theme covers predefined colors for text and background:

Text colors example:

{% highlight html linenos %}

<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-light bg-dark">Light</p>
<p class="text-dark">Dark</p>
<p class="text-muted">Muted</p>
<p class="text-white bg-dark">White</p>

{% endhighlight %}

Background colors example:

{% highlight html linenos %}

<div class="bg-primary text-white">Primary</div>
<div class="bg-secondary text-white">Secondary</div>
<div class="bg-success text-white">Success</div>
<div class="bg-danger text-white">Danger</div>
<div class="bg-warning text-dark">Warning</div>
<div class="bg-info text-white">Info</div>
<div class="bg-light text-dark">Light</div>
<div class="bg-dark text-white">Dark</div>
<div class="bg-white text-dark">White</div>

{% endhighlight %}

More in the Boostrap Documentation:  https://getbootstrap.com/docs/4.0/utilities/colors/

## Spacing

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

The most important parts to remember are:

- `m`: for classes that set margin
- `p`: for classes that set padding

Example:

{% highlight html linenos %}

<div class="bg-dark text-light p-3">Padding</div>
<div class="bg-dark text-light m-3">Margin</div>
<div class="bg-dark text-light m-3 p-3">Margin and Padding</div>

{% endhighlight %}

More details in the Boostrap Documentation: https://getbootstrap.com/docs/4.0/utilities/spacing/

## Sizing

Different percentage are supported for weights and heights:

- 25 %
- 50 %
- 75 %
- 100 %

Weight Examples:

{% highlight html linenos %}
<div class="w-25 p-3 m-3 bg-dark text-light">Width 25%</div>
<div class="w-50 p-3 m-3 bg-dark text-light">Width 50%</div>
<div class="w-75 p-3 m-3 bg-dark text-light">Width 75%</div>
<div class="w-100 p-3 m-3 bg-dark text-light">Width 100%</div>
{% endhighlight %}

Height Examples:

{% highlight html linenos %}
<div style="height: 150px;" class="bg-warning text-dark p-3 m-3">
    <div class="h-25 d-inline-block bg-dark text-light">Height 25%</div>
    <div class="h-50 d-inline-block bg-dark text-light">Height 50%</div>
    <div class="h-75 d-inline-block bg-dark text-light">Height 75%</div>
    <div class="h-100 d-inline-block bg-dark text-light">Height 100%</div>
</div>
{% endhighlight %}

# Grid System

The Bootstrap grid system allows to use up to 12 columns across the page.

There are different set of columns that can be used reflecting different breakpoints: 

|-----------------+---------------------+-------------------------|
|   Column class  |   Device Category   |        Breakpoint       |
|:----------------|:--------------------|:------------------------|
|   `col-`        | Extra Small         | Screen Width < 576px    |
|   `col-sm-`     | Small               | Screen Width >= 576px   |
|   `col-md-`     | Medium              | Screen Width >= 768px   |
|   `col-lg-`     | Large               | Screen Width >= 992px   |
|   `col-xl-`     | Extra Large         | Screen Width >= 1200px  |

Rows must be placed within a class `container` (fixed-width) or `container-fluid` (full-width) for proper alignment and padding.

If we don't specify any column number class, Bootstrap will automatically detect the number of columns and give them a equal width.

In the example below, we define 3 columns which will take 33.33% width each:
{% highlight html linenos %}

<div class="container">
    <div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="col">col</div>
    </div> 
</div>

{% endhighlight %}

The same can be achieved using numbers (3 columns with each having a column span of 4, i.e. 3 . 4 = 12):

{% highlight html linenos %}

<div class="container">
    <div class="row">
        <div class="col-4">col</div>
        <div class="col-4">col</div>
        <div class="col-4">col</div>
    </div> 
</div>

{% endhighlight %}

Columns do not have to be defined with equal width. For example one column with a columnspan of 6 and two others with for each a span of 3 (automatically set if we don't bother ourselves specificying `col-3`):

{% highlight html linenos %}

<div class="container">
    <div class="row">
        <div class="col">col-3</div>
        <div class="col-6">col-6</div>
        <div class="col">col-3</div>
    </div> 
</div>

{% endhighlight %}

Using a single set of `col-sm-*` classes, you can create a basic grid system that starts out stacked before becoming horizontal with at the small breakpoint (sm).

{% highlight html linenos %}

<div class="container">
    <div class="row">
        <div class="col-sm-8">col-sm-8</div>
        <div class="col-sm-4">col-sm-4</div>
    </div>
    <div class="row">
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
    </div>
</div>

{% endhighlight %}

Now if we want that a screen width screen >= 768px (medium category) to have 4 columns per line (since the screen is 12 column units wide it means each column takes 3 units) and when screen width >= 576px (small category) to have only 2 columns per line (so 6 units per column):

{% highlight html linenos %}

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">col-sm</div>
        <div class="col-md-3 col-sm-6">col-sm</div>
        <div class="col-md-3 col-sm-6">col-sm</div>
        <div class="col-md-3 col-sm-6">col-sm</div>
    </div>
</div>

{% endhighlight %}

Which is by the way the same as:

{% highlight html linenos %}

<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6">col-sm</div>
        <div class="col-lg-3 col-md-3 col-sm-6">col-sm</div>
        <div class="col-lg-3 col-md-3 col-sm-6">col-sm</div>
        <div class="col-lg-3 col-md-3 col-sm-6">col-sm</div>
    </div>
</div>

{% endhighlight %}

Why? Because the smaller units per column definitions take over non existing definitions for upper categories. 

More in the Boostrap Documentation: https://getbootstrap.com/docs/4.0/layout/grid/


# Components

## Button Classes

The base button class is "btn" which is often completed with "btn-{color}" where colors are specified among the ones defined previously. 

Examples:

{% highlight html linenos %}

<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>

{% endhighlight %}

The button decoration can even removed with the `btn-link` class.

Not only the class button can be used with `<button>` elements but also with `<a>` and `<input>` elements.

Examples:

{% highlight html linenos %}

<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">

{% endhighlight %}

It's also possible to use predefined classes that displayed an empty background `btn-outline-{color}`.

Examples:

{% highlight html linenos %}

<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>

{% endhighlight %}

Different sizes can also be specified by adding the class `btn-lg` (larger) or `btn-sm` (smaller).

Can also make the button block-level by adding the `btn-block` class.

Possibility to make the buttons disabled with the boolean attribute disabled for `<button>` and `<input type="button">` or by adding the `disabled` class plus setting the `aria-disabled` attribute to true.

Examples:

{% highlight html linenos %}
<button type="button" class="btn btn-lg btn-primary" disabled>Disabled primary button</button>
<a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Disabled primary link</a>
{% endhighlight %}

You can find out more about buttons in the Boostrap Documentation: https://getbootstrap.com/docs/4.0/components/buttons/

## Jumbotron

A showcase component for key marketing messages.

Example: 

{% highlight html linenos %}

<div class="jumbotron">
   <!-- Content goes here -->
</div>

{% endhighlight %}

More in the Boostrap Documentation:  https://getbootstrap.com/docs/4.0/components/jumbotron/

## Forms

They are similar to what you have used without the library.

The main differences are all about the additional classes:

- To gather a `<label>` and its related `<input>` you have to nest them in:
  - `<div class="form-check">` for both checkbox and radio types (e.g. `<input type="radio">` or `<input type="checkbox">`).
  - `<div class="form-group">` for any other kinds of regular inputs (e.g. `<input type="email">`, `<select>`, `<textarea>`).
- The `form-group` class mentionned above can be augmented with the `row` class to make the `<label>` and its related `<input>` located on the same line.
- For NON checkbox and radio input types, use the `form-control` class in order to benefit from the consistent look and feel. For both checkbox and radio types there are additional classes for respectively `<input>` (`form-check-input`) and `<label>` (`form-check-label`).
- There are sizing options to complete the form-control class: 
  - `form-control-sm` (smaller size).
  - `form-control-lg` (larger size).
- There is also a `readonly` boolean attribute to just prevent from editing an `<input>`.
- And a `disabled` boolean attribute to prevent from value selection and edition as well as a `disabled` class for the `<div>` level. When you want to apply the `disabled` boolean attribute to the whole `<form>` you can nest all the content of the `<form>` in a `<fieldset disabled>`.
- The `form-inline` class can be added to make the `<form>` elements inlined. For checkbox and radio types the inline can also apply to the equivaent of the `<div class="form-group">` aka the `<div class="form-check">` with the class.

Example:
{% highlight html linenos %}
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        </select>
    </div>
    <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>A</option>
            <option>B</option>
        </select>
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example readonly</label>
        <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
        <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
    </div>
    <div class="form-group">
        <label for="disabledTextInput">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" disabled>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endhighlight %}

More in the Boostrap Documentation:  https://getbootstrap.com/docs/4.0/components/forms/


## Cards

It's a content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

Example:
{% highlight html linenos %}
<div class="card border-dark text-center">
    <div class="card-header">
        Header
    </div>
    <div class="card-body">
        <h5 class="card-title">Body</h5>
        <p class="card-text">Text</p>
        <a href="#" class="btn btn-primary">Click Me!</a>
    </div>
    <div class="card-footer text-muted">
        Footer
    </div>
</div>
{% endhighlight %}

Each part of the card can use the utilities like the theme background and border colors as well as . 

More in the Boostrap Documentation: https://getbootstrap.com/docs/4.0/components/card/

## Navbars

The navbars are containers with content dedicated to the navigation. 

They require being wrapped in a `<nav>`.

The main classes and related components of the `navbar` are:

- `navbar-brand`: display the title and / or the logo.
- `navbar-toggler`: define the button that is displayed the menu is collapsed on narrow displays.
- `collapse navbar-collapse`: the content of the navbar can can collapsed on narrow displays. It can contain regular list items within a `<ul>`.
- `nav-item`: the differents in the content above. Usually defined with `<li>`, they are contained in in an unoredered list such as: `<ul class="navbar-nav">`.
- `nav-link`: the link associated with then `nav-item`.

Example:

{% highlight html linenos %}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
        <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Bootstrap
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>

{% endhighlight %}

More information on:

- https://getbootstrap.com/docs/4.0/components/navbar/
- https://getbootstrap.com/docs/4.0/components/navs/

# Notes: Icons

Since Bootstrap v4 the glyphicons have been dropped, there are a few decent alternatives (including free packages): 

- https://fontawesome.com/
- http://ionicons.com/
- https://useiconic.com/open/
- https://octicons.github.com/
- https://material.io/icons/
- https://thenounproject.com/
