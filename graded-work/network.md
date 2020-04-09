---
title: Network connectivity tracking
layout: default
---

## Network connectivity tracking

This note has info on how you can keep track of your computer's network connectivity to the internet over a period of time. It uses the "ping" command, and records the results in a text file. 

Below, there's a Windows version, and a macOS version.

<br>

#### Test this before you need it 

If you think that you will need this capability during an online test, then test it before you need it. During the online test time period, if you have a network connectivity problem from your home, then you must prove that it happened. This technique, in addition to screen captures and/or photos that you take, will provide useful supporting info if you must interact with your professor. 

<br>

### Windows 10 how-to

Open PowerShell. (Obviously, notice your location in the file system.)

Start a "transcript" file (which is a plain text file):
```
start-transcript pinglog.txt -append
```

Identify your internet protocol (IP) address:
```
get-netipaddress -addressfamily ipv4
```

Start the "ping" command, as follows:
```
ping -t 8.8.8.8 | foreach { "{0} - {1}" -f (get-date), $_}
```

It will start running, and show content that looks like this:
```
2020-04-09 12:33:21 PM - Pinging 8.8.8.8 with 32 bytes of data:
2020-04-09 12:33:21 PM - Reply from 8.8.8.8: bytes=32 time=11ms TTL=55
2020-04-09 12:33:22 PM - Reply from 8.8.8.8: bytes=32 time=11ms TTL=55
2020-04-09 12:33:23 PM - Reply from 8.8.8.8: bytes=32 time=8ms TTL=55
(etc.)
```

Switch to your browser window, and work with Blackboard as directed by your professor. 

At the end of testing timeslot, switch to your terminal window, and stop (close/save) the "transcript" file:
```
stop-transcript
```

If you want to view the "transcript", open it in a text editor:
```
notepad pinglog.txt
```

<br>

### macOS (bash shell) how-to

Open Terminal. (Obviously, notice your location in the file system.)

> This will also work in the Ubuntu Linux bash shell, and likely others.

Start a "typescript" file (which is a plain text file):
```
script pinglog.txt --append
```

Identify your internet protocol (IP) address:
```
ifconfig en0 inet
```

> On Ubuntu Linux, the command is:  
> `ip -4 address show`

Start the "ping" command, as follows:
```
ping 8.8.8.8 | while read p; do echo "$(date "+%y/%m/%d %H:%M:%S %r -") $p"; done

```

It will start running, and show content that looks like this:
```
20/04/09 15:35:06 03:35:06 PM - PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
20/04/09 15:35:06 03:35:06 PM - 64 bytes from 8.8.8.8: icmp_seq=1 ttl=55 time=15.9 ms
20/04/09 15:35:07 03:35:07 PM - 64 bytes from 8.8.8.8: icmp_seq=2 ttl=55 time=11.9 ms
20/04/09 15:35:08 03:35:08 PM - 64 bytes from 8.8.8.8: icmp_seq=3 ttl=55 time=8.79 ms
(etc.)
```

Switch to your browser window, and work with Blackboard as directed by your professor. 

At the end of testing timeslot, switch to your terminal window, and press `Ctrl+C` to stop the ping command.  

Then, press `Ctrl+D` to stop (close/save) the "typescript" file.

If you want to view the "typescript" file, open it in a text editor.

<br>
