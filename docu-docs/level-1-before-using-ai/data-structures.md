---
sidebar_position: 6
---

# Essential Data Structures

We've learned that code "remembers" a piece of information that's stored in a variable, but what if you have multiple pieces of information to remember? This is where data structures come in. While data structures can certainly get more complex and also have other uses, after this video, you'll have an understanding of the 3 structures you'll use often as a network engineer: sets, lists, and dictionaries.

## Watch the lesson

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZRJ972Fsoss?si=WJmG6hRH9IUa6dCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Practice what you preach 

1. As a network engineer, why should you care about data structures? (...If you can't remember or still aren't sure, the next exercises will give you some ideas.)

2. If you wanted to store a bunch of syslog messages to try to diagnose a network issue (flapping interface) with code, would you store those messages in a dictionary, set, or list? Example messages below.

(Something I regret not including in this video that I'll include in Level 2; sets also do not contain duplicates. So if you try to put the same thing in a set twice, like the same syslog message, the set will only show it once.)

```
May 13 10:01:22: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/0/1, changed state to down
May 13 10:01:25: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/0/1, changed state to up
May 13 10:01:31: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/0/1, changed state to down
May 13 10:01:34: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet1/0/1, changed state to up
```

3. In this script, how many data structures do you see? What kind of data structures are they?

```
from netmiko import ConnectHandler

device = {
    "device_type": "cisco_ios",
    "host": "192.168.1.1",
    "username": "admin",
    "password": "your_password",
    "secret": "your_enable_secret",
    "port": 22,
}

commands = [
    "show version",
    "show ip interface brief",
    "show interfaces status",
    "show vlan brief",
    "show cdp neighbors",
    "show spanning-tree summary",
]

with ConnectHandler(**device) as net_connect:
    net_connect.enable()

    for command in commands:
        print(f"\n{'='*60}")
        print(f"Command: {command}")
        print('='*60)
        output = net_connect.send_command(command)
        print(output)
```

## Have your mentor ask you this...

Let's start thinking through your own workday and the need you might have to use data structures.

Do you need to pull information from multiple network devices?

Do you need to connect to these devices (login) using code?

Discuss how you might use a data structure in both of these scenarios. What would it look like?