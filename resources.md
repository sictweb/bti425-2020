---
title: Learning resources
layout: default
---

## Learning resources

This page has information about and links to learning resources that you will use in this course.

<br>

### Previous courses

This is the third course in the web programming sequence. 

Therefore, continue to use the content from the courses that you have successfully completed:

* BTI225 - Web Programming Principles
* BTI325 - Web Programming Tools and Frameworks

<br>

### Developer tools

* [Visual Studio Code](https://code.visualstudio.com/) (info, download)  
   * [Getting started docs](https://code.visualstudio.com/docs)
* Browsers (current versions of Chrome, Firefox, Safari, Opera, Edge)  
* Browser dev tools  
* HTTP inspector (e.g. [Postman](https://www.getpostman.com/))
* [Plunker](https://plnkr.co/)
* [jsFiddle](https://jsfiddle.net/)
* [jsBin](https://jsbin.com)
* Other dev tools will be introduced as we make progress through the weekly topics

You will need one or more devices. A College or personal desktop or laptop, and (likely) a personal mobile device (e.g. a smartphone).

[This document](/notes/postman-intro) introduces you to Postman, and has how-to getting started info.

<br>

**Use macOS or Linux**

We expect the student to do their work on a computer that runs macOS (Mac OS X), Linux, or another Unix-like operating system. 

If a student has a Windows 10 computer, then plan to install one of the following: 
* a multiboot or virtualization environment that enables the installation of Linux 
* Windows Subsystem for Linux, and one of the distros from the Microsoft Store

<br>

### Required textbook

None. This is a web programming course therefore, the best source for content is on the web!

<br>

### Required online resources

There are several required online resources:

* The Mozilla Developer Network **MDN Web Docs** web site is vast, with thousands of documents. It is a trusted and authoritative source for web developer information. Of interest:

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML) Guide, including [HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms), and the [HTML5 Element List](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)

* [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

* JavaScript Reference
  * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * (Also suggested) [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS)

* [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM)

> In October 2017, Microsoft, Google, and the W3C committed to making *MDN Web Docs* the single authoritative source for web developer documentation.  
> Read more about this in an [article by Ali Spivak](https://blog.mozilla.org/blog/2017/10/18/mozilla-brings-microsoft-google-w3c-samsung-together-create-cross-browser-documentation-mdn/). 

**Others:**

* [Bootstrap (version 3) CSS documentation](https://getbootstrap.com/docs/3.3/css/)  
Links to other topics (e.g. Getting started, etc.) are on that page

* Official [Angular Documentation](https://angular.io/docs)

* Angular CLI videos on YouTube, by [Codevolution](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw/videos)

* Node Reference
  * [Node.js Documentation](https://nodejs.org/en/docs/)
  * (Suggested) [nodejitsu](https://docs.nodejitsu.com/)

* [Express.js Documentation](https://expressjs.com/en/4x/api.html)

* [TypesScript Reference](https://www.typescriptlang.org/docs/home.html)

<br>

Oh, and you should must know (and love!) the series of RFCs that describe HTTP, [7230](https://tools.ietf.org/html/rfc7230) through 7235. If you want a friendlier introduction to [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), read its Wikipedia article.

<br>

### Other resources

* [W3C Standards](https://www.w3.org/standards/) 

* Google [web developers](https://developers.google.com/web/fundamentals/) content

* [Angular 4: From Theory to Practice](https://www.amazon.ca/dp/B01N9S0CZN/ref=docs-os-doi_0) - Asim Hussain (free!)

* [Beginning Angular 2](https://www.amazon.com/Beginning-Angular-Typescript-updated-ebook/dp/B01N9ZUHBA/) - Greg Lim

**Front end frameworks**  
* [Angular](https://angular.io/docs) (which is NOT AngularJS, a legacy technology)  

Alternatives:
* [Knockout](http://knockoutjs.com/documentation/introduction.html)  
* [React](https://facebook.github.io/react/docs/hello-world.html)  
* [Ember](https://www.emberjs.com/api)
* and many others...  

**State management**  
* [Our own "Teams" API](https://github.com/sictweb/bti425)
* [JSON data API - jsonplaceholder](http://jsonplaceholder.typicode.com)  

<!--**To be categorized**  
RxJS (ReactiveX library for JavaScript) - compose async and event-based programs using observables and LINQ-style queries  
Was known as "Reactive Extensions"  
[reactivex.io - official docs](http://reactivex.io/rxjs/manual/overview.html#introduction) --> 

**HTML and CSS**  
* [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) - MDN  
* [CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) - MDN  

<br>

### Visual Studio Code tips and info

**Start VS Code from the command line**

Make sure that you're in your project folder.  
Then type this command: `code .`

> Note: This assumes that your computer is configured to run this command. See the [Running VS Code on Mac](https://code.visualstudio.com/docs/setup/mac) to configure that feature. 

<br>

**Useful keyboard shortcuts**

Trigger IntelliSense: `Control + Space` 

Toggle comments on/off: `Command + /`

Reformat document: `Shift + Option + Command + F`

Show/hide left-side bar: `Command + B`

Show/hide terminal: `Control + (back-tick)`

Markdown preview pane toggle on/off: `Command + K, V`

<br>

**Useful Emmet snippets**

For most elements, just begin typing the element name, without the angle bracket.

`.` Declare class(es), e.g. `div.row`

`#` Declare unique identifier, e.g. `table#customers`

`>` Child, e.g. `div>p`

`*` Multiplier, e.g. `ul>li*5`

`( )` Grouping, often used with multiplier

`+` Sibling, e.g. `div>h3+p*3`

`{blahblah}` Text content for an element, e.g. `h3{Hello, world!}`

`[` Custom attribute, e.g. `span[data-bind`

See the [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) for full coverage.

<br>

### Other tooling tips

#### npm 

What version of an npm package is installed?

```bash
# All globally-installed packages
npm list -g

# One specific globally-installed package
npm list -g express

# While in the root of a project, one specfic package
npm list express
```

<br>

#### MongoDB

Various commands:

```bash
# Is the database engine installed?
mongod --version

# Is the command shell installed?
mongo --version

# Start the database engine
mongod --dbpath [path-to-database-folder]
```

<br>
