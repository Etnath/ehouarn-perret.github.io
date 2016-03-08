---
layout: post
title:  "Hello Github Pages!"
date:   2016-03-08 11:34:50 +0800
categories: jekyll, github pages
comments: true
---
Well this is a first post written using Jekyll and published on Github Pages. 

Honestly, I did not bother myself too much and just modified the provided post, that's probably why it looks kind of empty.

Anyway, so far, so good it after fighting for a while setting up my local environment under Windows, I can finally start blogging.

Good for me and my coding addiction, Jekyll has a nice syntax highlighting support for code snippets:

{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}, you rock!"
end
print_hi('Michelle')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

However it seems there is a lack of line numbers, I'm pretty sure there are already some proper workarounds out there.

**[EDIT]**

Found out a couple of articles, listed below:

- [Line numbers in Jekyll code blocks]
- [Jekyll Code Highlight And Line Numbers Problem Solved]

Basically it just required to add a simple Jekyll tag: 

    linenos

to the highlight tag, becoming then:

    highlight ruby linenos

Ah makes sense... and makes me feel real dumb.

Still miss the fact to be able to toggle the line numbers display, feel I would have to write some JS, sigh.

Apart of that some other resources that can be useful:

- [Jekyll Documentation]
- [Jekyll on Github]
- [Jekyll Talk]




[Line numbers in Jekyll code blocks]: https://botleg.com/stories/line-numbers-in-jekyll-code-blocks/
[Jekyll Code Highlight And Line Numbers Problem Solved]:http://thanpol.as/jekyll/jekyll-code-highlight-and-line-numbers-problem-solved/

[Jekyll Documentation]: http://jekyllrb.com/docs/home
[Jekyll on Github]:   https://github.com/jekyll/jekyll
[Jekyll Talk]: https://talk.jekyllrb.com/
