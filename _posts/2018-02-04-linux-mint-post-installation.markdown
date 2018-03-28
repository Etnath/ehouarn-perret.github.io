---
layout: post
title:  "Linux Mint Post-Installation Tuning"
date:   2018-02-04 11:11:11 -0500
categories: linux mint tuning
---
 
Content

* TOC
{:toc}

# Introduction
I am usually not a big fan of the Ubuntu distributions (and even less about their derivatives like Mint), I am myself more an Arch / Manjaro person.

However, I have to admit that when it comes to have something working out of the box without bothering myself too much and regardless of the hardware I am running the operating system against, this is how to put it "greatly appreciated".

For instance when you use Arch or Manjaro, you still have to setup by yourself the disk auto-mounting system which pains me, I consider this as a pre-requesite. 

Anyway, here is the list of things I usually setup once I am done with the initial setup of Mint. So keep in mind that this is just a very personal list, more like a sticky note.

# Basics
 - Update the repositories and everything: sudo apt update
 - Upgrade everything: sudo apt upgrade

# Applications
Through apt:

- [git][Git] (surprinsgly not out of the box...)
- [Node][Node]
- [Jekyll][Jekyll Documentation]
- [Audacity][Audacity]

`sudo apt-get install git nodejs jekyll`

Through their respective *.deb or *.tar.gz:

- [Visual Studio Code][Visual Studio Code Download] (right from the deb cause the version in the repositories is a bit outdated)
- [Jetbrains Toolbox][Jetbrain Toolbox Linux Download] (also right from the official website for the same reasons as above)
- [Astrill][Astrill Linux Download]



Change the default search engine of Firefox (seriously who is using Yahoo these days?) to duckduckgo.

# HDPI
As I am running Mint (18.1.3, xfce variant at the moment) against a [X230 Thinkpad laptop][Thinkpad X230] and since hiDPI screen + xfce... are not very good friends (Gnome 3 and KDE not so much either...):

- Resolution: 1920 x 1080
- Desktop Settings: 
  - Icon size: 64
  - Use custom font size: 12
- Window Manager:
  - Theme: Default-hdpi
  - Title font: Noto Sans Bold, 11
- Appearance: 
  - Default Font: Noto Sans, 12
  - DPI, custom DPI setting: 125
- Mouse and Touchpad
  - Touchpad: Disable touchpad while typing

[Audacity]: http://www.audacityteam.org/
[Astrill Linux Download]: https://www.astrill.com/download/linux
[Node]: https://nodejs.org/en/
[Git]:https://git-scm.com/
[Linux Mint]:https://linuxmint.com/
[DuckDuckGo]:https://duckduckgo.com/
[Visual Studio Code Download]: https://code.visualstudio.com/Download
[Jekyll Documentation]: http://jekyllrb.com/docs/home
[Jetbrain Toolbox Linux Download]: https://www.jetbrains.com/toolbox/download/#section=linux
[Thinkpad X230]: http://psref.lenovo.com/syspool/Sys/PDF/withdrawnbook/ThinkPad_X230_WE.pdf
