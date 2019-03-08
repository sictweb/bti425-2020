---
title: Angular debugging introduction
layout: default
---

## Angular debugging introduction

There are two tools that can help you during Angular app development:
1. Debug via Visual Studio Code (for Chrome browser)
2. Augury for Chrome browser

During class, your professor will provide a brief demonstration. 

There are other techniques too, described below.

<br>

### Debug via Visual Studio Code (for Chrome browser)

A Visual Studio (VS) Code *extension* can be added to support debugging, when using the Chrome browser. The extension was created by the VS Code team. 

Read about it here; it includes how-to info about installation and use:  
[Debugging Angular](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular)

<br>

### Augury for Chrome browser

A Chrome browser *extension* can be added to support app inspection. The extension was created by the Rangle.io and the Angular teams. 

Read about it here; it includes how-to info about installation and use:  
[Angular Augury](https://augury.rangle.io/)

<br>

### Other techniques

Everyone knows and uses `console.log()`. Yes, that's still valid. There are other techniques that are useful in the Angular environment.

Some of this was taken from an article titled [A Guide to Debugging Angular Applications](https://medium.com/front-end-weekly/a-guide-to-debugging-angular-applications-5a36bd88b4cf).

#### Angular pipe and JSON

You can emit/output a JSON representation of an object in memory by using the Angular JSON pipe. 

Somewhere in your *template markup*, add a binding to emit/output the object in memory. For example:  
```
{% raw %}{{ someObject | json }}{% endraw %}
```

#### .pipe() and .tap()

An `Observable` can be inspected by using the RxJS `.pipe()` operator. Inside the RxJS pipe function, add `.tap()` statements to do whatever, e.g. simple `console.log()` statements. 

> Additional info:  
> [Angular commentary on this topic](https://angular.io/guide/rx-library#operators)  
> [RxJS `pipe` method](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-pipe)  
> [RxJS `of` method](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-of)  

<br>
