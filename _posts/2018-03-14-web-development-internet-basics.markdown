---
layout: post
title:  "Web Development: Internet Basics"
date:   2018-03-14 00:00:00 -0400
categories: web development internet basics
---

{:toc}

# Basics
What happens when I typed (in my webbrowser address bar): `https://askubuntu.com/questions/`? 

1. Finding the right address
- Your query is subtmitted to your ISP
- Within your ISP, the DNS takes the Domain name and turns it into an IP Address

2. Going to that address
- A request is sent to the desired IP address via HTTP.
- Your request finds the fatest possibble path to the server with the specified IP.
- This is not a direct journey. It requires hoping from server to server until we arrive.

3. Server responds
- It figures out exactly what we are asking for (i.e. `/questions`).
- The server builds us the right content, often pulling information from database.
- The server responds with any combination of HTML, CSS and JavaScript.
- and then your browser translate the code into a dynamic visual content.

# Front End Vs. Back End
1. The Front End is the stuff that you see and interact with: HTML, CSS and JS.
2. The Back End is everything else: so many choices!
3. Restaurant Analogy: the backend is everything that happends in the kitchen; the front end is what is plated and sent to your table.

# The Front End Holy Trinity

## HTML
- HyperText Markup Language
- Defines the structure of a webpage:
  - "put an image here"
  - "put a form here"
- The "nouns" of a webpage.

## CSS
- Cascading Style Sheets
- Define the style of HTML:
  - "make all text purple"
  - "give the first inage a yellow border"
- The "adjectives" of a webpage or the skin of the HTML skeleton.

## JavaScript
- Add logic and interactivity to a page:
  - "Do some math"
  - "Change color when the user clicks"
  - "Load new data from twitter"
- The actions or "verbs" of a webpage.
