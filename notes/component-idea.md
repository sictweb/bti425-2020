---
title: Composing UI with components
layout: default
---

## Composing UI with components

What's the big new idea that you must learn now?

It is that JavaScript is now *in charge* of the front-end browser / client / end-user experience. When thinking and planning to code a web user interface, we *start* with the programming task.  

<br>

### Your understanding, up until now...

You have used the web for many years. And you have passed at least two introductory or entry-level web programming courses in your studies so far. 

Here's what you understand about the experience:

**Page (or resource) oriented**:  
Your thought process begins with a "page" or similar resource, but often an HTML page. 

**The page is paramount**:  
It is *in charge* of everything - what gets displayed, what gets pulled in through links (i.e. other assets). It's where you start your thought and design process, and receives much of your attention. 

**Other assets are subordinate**  
As suggested above, everything else a page needs (e.g. images, code, etc.) "reports to" the big boss, which is the exalted HTML page. 

Think of the front-end browser / client / end-user experience as a company - "The DOM Company". (DOM is document object model, as you know.) Its organization chart looks like this:

![The old way](/bti425-2020/media/boss-html-v1.png)

<br>

### The NEW way; the new idea...

Recently, a big change happened at The DOM Company, driven by changes in the environment which showed a number of weaknesses in the in-charge HTML page. The big boss was demoted, and the more-capable JavaScript got promoted.

In essence, the "old way" has been *blown up*:

![BOOM!](/bti425-2020/media/explosion.png)

<br>

Now, JavaScript is the big boss. It is now *in charge*. It runs the DOM, and deploys assets (HTML, images, more code, etc.) as determined by the user's flow through the app. The modern organization chart now looks like this:

![The new way](/bti425-2020/media/boss-js-v1.png)

<br>

### Our new understanding, from now on

In app frameworks like React and Angular, we start with and do most of our work in JavaScript code. We are code-oriented. 

Next, we begin to think about the user interface (UI) as a design surface on which we "compose" the UI by placing a number of "components" on the surface. 

Obviously, the language used by the components is still HTML, because that's what the DOM (and the browser's layout engine) expects and needs. But it's a *code first* approach that's different. (The old way was *markup first*.)

A fully-written app will have a fairly large number of assets, bundled together in a "package". (Kind of like a zip file.) It runs wholly in the browser. 

How does it get to the browser? Well, the package is initially stored on a server (for public deployment at scale). The browser requests the start or default/home HTML page at a known URL. That HTML page is almost empty except for a `<script>` element, which points to the app's [bootstrap](https://en.wikipedia.org/wiki/Bootstrapping) code, which then gets requested and delivered. 

When the app loads, it takes over everything. It also changes the role of the browser - now, the browser is subordinate to the app. The app controls workflow, the appearance of content, the address bar, the back and forward buttons, the history, and so on. 

Yes, it's the modern way. Let's begin our study of modern web dev techniques. 

<br>
