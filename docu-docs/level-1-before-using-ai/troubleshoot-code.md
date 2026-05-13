---
sidebar_position: 7
---

# Troubleshoot Your Code

As you know, everything breaks...including our code. In this video, I expose you to the concept of troubleshooting your code with the debugger that is built into your developer environment. Don't focus too much on how comfortable you feel with the debugger just yet; simply focus on practicing using it to walk through and understand your code or to troubleshoot errors. (Trust me, you'll get to use AI for some of this later!)

## Watch the lesson

<iframe width="560" height="315" src="https://www.youtube.com/embed/0sYIXfMfVGg?si=apVpBL1gj7AI0m5f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Practice what you preach

You're handed this script from your colleague. They really want to collect show commands from a Cisco Catalyst switch, but they're getting a stacktrace (error) and don't know why.

You want to help them troubleshoot their code using the VS Code in debugger. Where would you try putting breakpoints and why? (There's no need for a perfect answer here, just think about it and try it!)

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
        output = net_connect.get_command(command)
        print(output)
    ```

## Have your mentor ask you this...

There's at least a 50% chance that your mentor has never used the debugger or is not comfortable with it, so not putting anything here. (That's not a knock on network engineers either; many developers aren't comfortable using it. But that's a problem.)

Reach out to Erika with any feedback on this module's exercise and she'll continue tailoring it for you!