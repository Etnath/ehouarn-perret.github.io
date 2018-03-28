---
layout: post
title:  "Post-installation Linux Setup"
date:   2018-03-13 00:00:00 -0400
categories: linux installation packages kubuntu
---

{:toc}

# Distribution
- [KDE neon][KDE neon]
  - Stability: Ubuntu LTS versions only.
  - HiDPI Support: not that bad.
  - Windows Resizing: not that sluggish.
  - Packages: minimalist, install only.

# Packages
- Rust: the [Rust language][Rust language]...
- Go: the [Go language][Go language]...
- [KTorrent][KTorrent]: no defaut torrent client (minimalist).
- Node: [Node.js][Node.js]...
- [npm][npm]: well you know that piece of sh*te required for the packages [there][npm Website]
- [Jekyll][Jekyll]: static website generator (i.e. this blog)...
- octave: [GNU Octave][GNU Octave] is free and open alternative replacing matlab...
- driver manager: [KDE-based Ubuntu driver manager][kubuntu-driver-manager]  
- [Git][Git]: well... we all need a famous vcs...
- [Cheese][Cheese]: I... don't use it: gnome based camera app.
- [htop][htop]: fancy version of [top][top].
- [unetbootin][unetbootin]: write linux isos to bootable usb sticks.
- [WoeUSB][WoeUSB]: write windows isos to bootable usb stics.
- [Visual Studio Code][Visual Studio Code]: free Microsoft Code Editor without thousands of plugins.
- [Skype][Skype]: to talk to people who only have Skype and don't want to move to something else.
- [GParted][GParted]: Gnome-based partition editor.


Setup script:

{% highlight bash linenos %}
# Let's define the packages we want...
packagelist=(
    rustc
    golang
    ktorrent
    git
    jekyll
    octave
    kubuntu-driver-manager
    unetbootin
    htop
    cheese
)

# Install the packages...
sudo apt-get install ${packagelist[@]}

# For node.js

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions



# In case you have npm packages (yarn) calling node and you don't want to mess with the expected node binary name.
ln -s /usr/bin/nodejs /usr/bin/node

{% endhighlight %}

# Bash Customization

## Add Bash case insensitive autocompletion
Add `set completion-ignore-case` into `/etc/inputrc`:
{% highlight bash %}
echo set completion-ignore-case on | sudo tee -a /etc/inputrc
{% endhighlight %}

## Add current git branch to the bash
Add current git branch

Originally in the `~/.bashrc`:
{% highlight bash linenos %}
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi

unset color_prompt force_color_prompt
{% endhighlight %}

To add the support without those catchy colours:
{% highlight bash linenos %}
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;31m\]\u\[\033[00m\]@\[\033[01;35m\]\h\[\033[00m\]:\[\033[01;36m\]\w\[\033[01;30m\]$(parse_git_branch)\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi

unset color_prompt force_color_prompt
{% endhighlight %}


[KDE neon]: https://neon.kde.org
[Rust language]: https://www.rust-lang.org
[Go language]: https://golang.org
[KTorrent]: https://en.wikipedia.org/wiki/KTorrent
[Node.js]: https://nodejs.org
[Jekyll]: https://jekyllrb.com
[GNU Octave]: https://www.gnu.org/software/octave
[kubuntu-driver-manager]: https://launchpad.net/ubuntu/+source/kubuntu-driver-manager
[Git]: https://git-scm.com/
[Cheese]: https://en.wikipedia.org/wiki/Cheese_(software)
[top]: https://en.wikipedia.org/wiki/Top_(software)
[htop]: https://en.wikipedia.org/wiki/Htop
[unetbootin]: https://unetbootin.github.io
[Visual Studio Code]: https://code.visualstudio.com
[Skype]: https://www.skype.com
[GParted]: https://gparted.org
[WoeUSB]: https://github.com/slacka/WoeUSB
[npm]: https://en.wikipedia.org/wiki/Npm_(software)
[npm Website]: https://www.npmjs.com
