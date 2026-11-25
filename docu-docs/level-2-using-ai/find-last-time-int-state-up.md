---
title: Code With Me!
sidebar_position: 6
---

# Code With Me! Find Last Time Int State Up

In this "come along" style vlog, I walk you through my thought process writing a script to determine the last time an interface was in an up state. We use my Working Script (Automation) Process and AI to plan it out, gather necessary info, break down the problem into smaller parts, and to code a minimum viable product that "just works." I include things I backtracked on, mistakes I made, and tradeoffs decided upon and edit only to make this video not (extremely) long and (less) boring.

In part 2, we'll implement best practices, including proper code security. (I accidentally went slightly above and beyond/into security in this current video, my apologies.) While we eventually want to implement certain security practices from the get-go, when first starting learning, it's important to first learn how to write working code.

In part 3, we'll enhance this script by trying to scale it and also collect the MAC and IP associated with the interface the last time it was up as well as a DNS record (if found). 

Thank you to Aaron Brown and James Strathdee for this script idea.

SOME ASSUMPTIONS & DECISIONS MADE
(All of this can change as we move through the series, but I had to decide on scope to do this.)

Syslog is configured, includes timestamps, at least Severity Level 5 messages, sent to a Linux server running Ubuntu. We assume the local buffer is not large enough to hold these status messages.
We assume that the amount of logging and rotating of files is such that we can grep through the most recent, uncompressed log file. (This will obviously vary and would like your input.)
We initially confined scope and made up some info... like that we're working with a Cisco Catalyst switch running IOS-XE, could have 30 interfaces (random # that obv needs to change later), make & search a filepath that isn't the default /var/log/syslog path for syslog messages on Ubuntu (we do this for testing purposes because we don't actually have syslog configured)
That, for syslog, since we can only see when an interface last *changed* to up or down state, not technically the last second/minute it was up, I currently output both timestamps.
Username, password, and interface are collected as input in the terminal and the resulting last time up messages are output into the terminal.

RESULTING CODE
I won't be sharing any code until part 2 when we implement code security as we only want secure code running in production. This video was only for instructional purposes.

## Watch the lesson

<iframe width="560" height="315" src="https://www.youtube.com/embed/TcTBmZOhh8w" title="Finding Last Time Interface Was Up, part 1 | Learn To Code Using AI course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
