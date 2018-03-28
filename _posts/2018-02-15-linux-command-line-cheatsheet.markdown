---
layout: post
title:  "Linux Command Line Cheatsheet"
date:   2018-02-15 11:11:11 -0500
categories: linux shell command line cheatsheet
---

Content

* TOC
{:toc}

# !!: Most Recent Command

Example:

{% highlight bash linenos %}
ls -al
!!
sudo !!
{% endhighlight %}

And to run the most recent command starting with say a string like `u`: `!u`.


# !*: Reuse arguments

Example:

{% highlight bash linenos %}
touch file1 file2 file3
ls !*
{% endhighlight %}

# !$: Last Item

Example:

{% highlight bash linenos %}
touch file1 file2 file3
ls !$
{% endhighlight %}

