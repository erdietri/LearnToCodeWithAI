---
sidebar_position: 3
---

# Data Types & Variables

Computers are dumb, so we must tell them what information to remember and what exactly that information *is*. After all, coding is really just having your computer remember information (i.e. that a switch is in active mode) and then creating logical actions on that information (i.e. having that switch failover to passive mode). This video explains how we "store" information in something called a variable. 

## Watch the lesson

<iframe width="560" height="315" src="https://www.youtube.com/embed/19se3JuY1Gs?si=YHkzLSTAStCD0PJ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Practice what you preach

Pretend you are preparing to write a script related to a switch on your network. 

Below is a code block containing information related to the switch. (Each line is currently commented out.) Copy and paste the code below into a new Python file in your developer environment: 

```python

# Cisco IOS-XE
# Credentials are admin with password admin123
# Management IP address is 192.168.1.10
# Metrics for this switch show 52% CPU utilization and 24% memory utilization
# Device uptime is 17.5 days
# POE is not enabled

```
Underneath each comment, create a variable, "store" the value above in it, and make sure it's the correct data type.

For example, if the comment said
The link is up 

You might create a variable that looks like this: 
link_up = True

Keep in mind that there isn't always one correct answer for your data type, and that variable naming has best practices but is subjective.

## Have your mentor ask you this...

1. Walk through each of the variables the student has created and ask them how they decided upon each variable name and data type... even if it all looks good. Discuss.

2. Pretend this script will now need to work with information for 3 different Cisco IOS-XE switches on the network. How might that affect how the variables should be named? Discuss. 

3. Pretend that we would also like to add a VLAN ID and interface speed to this script. Which of these variables could be an int (integer) instead of a string, and why is that so? Discuss scenarios in which the variable might need to be an int. 

(Mentors, for #3, feel free to ask a similar question about other potential switch variables to ensure an unscripted discussion.)