---
title: Dev tools
layout: default
---

## Developer tools used in this course

This document is a summary of the developer tools used in this course. 

<br>

### Web dev work is done on a Unix

We expect the student to do their work on a computer that runs macOS, Linux, or another Unix-like operating system. If a student has a Windows 10 computer, then plan to install an environment that enables the installation of Linux. The [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) feature is recommended, along with a Windows Store version of Linux (e.g. [Ubuntu](https://www.microsoft.com/en-ca/p/ubuntu-1804-lts/9n9tngvndl3q?rtc=1&activetab=pivot:overviewtab)). 

> Important - We *expect* you to do your work on macOS, Linux, or another Unix-like operating system. 

<br>

### Dev tools summary

Some of the dev tools will be graphical user interface (GUI) apps that run on the *base* (device/host) operating system (including web browsers). Some will be command line interface (CLI) apps. 

The following table shows the tasks to be done, and the apps that enable you to do the tasks, on macOS or Windows. 

Task | macOS<br>app | Windows 10 + WSL<br>app
--- | --- | ---
File system GUI | Finder | File Explorer
File system CLI | Terminal | Terminal on **Ubuntu**
Editor | Visual Studio Code | Visual Studio Code<br>installed on **Windows**
Node.js<br>React tools<br>Angular tools | Install these on macOS | Install these on **Ubuntu**
MongoDB engine<br>MongoDB shell | Install these on macOS | Install these on **Ubuntu**
Database inspector<br>and editor | MongoDB Compass | MongoDB Compass<br>installed on **Windows**
Web browser(s)<br>including dev tools,<br>debugger | Chrome<br>Firefox<br>Opera<br>Safari | Chrome<br>Firefox<br>Opera<br>Edge 
HTTP inspector | Postman | Postman<br>installed on **Windows**
Data generator | [mockaroo.com](https://mockaroo.com)<br>online | [mockaroo.com](https://mockaroo.com)<br>online

<br>

### Dev tools usage notes

As you can see from the summary, you will be using GUI versions of the following apps. Each is an app that is designed for the base operating system. 
* File system 
* Code editor
* Database inspector and editor
* Browsers

The dev tools (Node.js etc.) and the database engine and shell are installed on a Unix. DO NOT install these on Windows. 

<br>

#### Using terminal windows

Do not hesitate to use multiple terminal windows. During development, your professor typically uses a minimum of three, but often about five are opened. Each is opened at a different folder, and therefore is used for different purposes:
* One or more is focused on the parent folder of the current app
  * Used to create new apps and to run general commands
* Another is focused on the current app itself
  * It's used to create new files and to run app-specific commands (e.g. `npm start`, or `ng <something>`)
* Another is focused on the database folder area 
  * It's used to run the database command shell or to start and stop the database engine

If you're hesitating because you're uncomfortable with a Unix CLI, then get over it. You passed the BTO120, BTI225, and BTI325 courses, so you are expected to know how to perform typical file system and app execution tasks. If your comfort level is low, then vow to improve your skillset in this area. 

If you're thinking that the terminal area of Visual Studio Code is enough for you, then that's inefficient, confining, and often awkward, when compared to using real terminal windows. 

Professional software developers use multiple terminal windows, and are comfortable and skilled doing so. Just do the right thing. 

<br>

#### Creating folders on macOS

In your Documents folder, create a folder to hold your databases, maybe named `db`. (Then inside that folder, each database will be in its own folder.)

Also in your Documents folder, create a folder to hold your apps, maybe named `dev`. (Then inside that folder, each app will be in its own folder.)

<br>

#### Creating folders on Ubuntu on WSL on Windows 10

After Ubuntu (on WSL on Windows 10) is installed, a typical Unix-style file system is available. Whe you open a terminal, your present working directory (pwd) is your user's home directory (e.g. `/home/peter`). 

This area is NOT visible from the host operating system, Windows 10. However, it is an ideal location for your database folders. Therefore, for each database, we suggest that you create a folder that has a "db-" prefix, so that you can easily and quickly identify them when you display a list of items in a folder. For example, `db-company`. 

Where should you store the apps that you're working on? In an area that's visible from BOTH Ubuntu and the host operating system. Here's our suggestions:

Using File Explorer, create a new folder (maybe named `dev`) in the root of drive C:. In other words, `c:\dev`. Inside that folder, we will be creating separate multiple apps (web APIs, React apps, Angular apps, etc.). 

That `c:\dev` folder will be visible from Ubuntu as `/mnt/c/dev`. 

<br>

#### Deleting old or unneeded app/projecct folders 

As you know, when you delete a folder (using Finder or File Explorer), the folder is just "marked" as deleted, and is then managed by the operating system's Trash folder (Unix) or Recycle Bin folder (Windows 10). Later, you can "empty" the Trash folder, which actually and permanently deletes the contents. 

Why does this matter to us? Well, a typical Node.js + Express.js, or React, or Angular app has thousands of files and is hundreds of megabytes in size. If you create and then discard five (for example) apps per week, then a month later, you have a huge amount of wasted storage space, which takes a long time to actually delete (it can be minutes). 

Therefore, if you want to immediately and permanently delete an old/dead/unneeded app folder:
* On macOS Finder, use Option+delete (instead of delete on its own)
* On Windows 10 File Explorer, use Shift+delete (instead of delete on its own)

<br>
