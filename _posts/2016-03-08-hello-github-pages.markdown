---
layout: post
title: "Hello Github Pages!"
tags: Jekyll, Github Pages
comments: true
---
Well this is a first post written using Jekyll and kindly hosted on Github Pages. 

Honestly, I did not bother myself too much and started off modifying the provided post, that's probably why it looks kind of empty.

Anyway, so far so good, after fighting for a while against up my portable setup of Ruby (litteraly) against Windows, I can finally start rambling.

Good for me and my coding addiction, Jekyll has a nice syntax highlighting support for code snippets:

{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}, you rock!"
end
print_hi('Michelle')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

 ~~However, it seems there is a lack of builtin support for line numbers, I'm pretty sure there are already some proper workarounds out there.~~

 See below...

**[EDIT]**
# The trick: read the official document, thoroughly :x

I got my answer thanks to the articles below:

- [Line numbers in Jekyll code blocks]
- [Jekyll Code Highlight And Line Numbers Problem Solved]
- [Jekyll Template Documentation]

Basically to add the line numbers support, it just required to add a very simple Jekyll Liquid tag argument: 

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
[Jekyll Template Documentation]: https://jekyllrb.com/docs/templates/
