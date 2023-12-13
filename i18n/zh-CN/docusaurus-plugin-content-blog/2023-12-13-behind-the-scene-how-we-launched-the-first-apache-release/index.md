---
title: "Behind the Scene: How We Launched the First Apache Release"
authors: [Anne]
category: Community
featured: true
image: 2023-12-13-cover@4x.png
description: "Take a moment to reflect on our first Apache release, and share experience with new projects for a smooth release."

---

Preparing for our Apache debut was an adventure, with two questions constantly echoing in our minds: 

**What's the next step?         
Which document should I check?**

Joining the incubator was more than a new beginning, but a new way of collaboration that requires us to adapt to soon. Now that we finally [shipped it](https://answer.apache.org/blog/2023/12/07/a-new-chapter-begins-answer-first-apache-release-launches), and look back to the lessons we’ve learnt during the process. We’ve been received help from other projects, so it’s our chance to pave the way for more projects by sharing our experience. 

To the future incubator projects: Consider this blog post your guide as you embark on your own first Apache release. Have a smooth release!

## How Do We Collaborate
The driving force behind this release are the 4 PMC members: [LinkinStars](https://github.com/LinkinStars), [shuashuai](https://github.com/shuashuai), [fenbox](https://github.com/fenbox), and [AnnaPrimma](https://github.com/PrimmaAnna), and here’s how they collaborate:
fenbox: the architect, planing and crafting the new features.
LinkinStars: guardian of compliance, meticulous source code and binary package management.
shuashuai: front-end developer, fix bugs, iterate new features, keep flawless user experience, etc.
AnnaPrimma: the doc searcher, translator, and past project experience capturer.

## New Changes
There are basically two significant changes: **compliance and the voting process**, and we’ve spent plenty of time on them. 

### Compliance
Apache releases are required to comply with the Apache Software Foundation's (ASF) policies and procedures. One of the most important compliance requirements is that all **dependencies must also be compliant**.

Before we officially launch the release vote, we focused on compliance, as these are the basic requirements before the release. This includes:

* Review and organize the Notice and LICENSE files
* Add the Apache License Header to all files
* Check the compliance of third-party libraries

We also checked on docs, seemed help from mentors via emails, and traced back to other project’s releases. 

### Process 
The release process was extended because of the need of [Apache voting process](https://www.apache.org/foundation/voting.html).

Though not compulsory, it is recommended to have discussion in the community via mail list before voting. The first round of voting was conducted by the Project Management Committee (PMC), and the second round of voting was conducted by the Mentors. Voting periods should generally run for **at least 72 hours** to provide an opportunity for all concerned individuals to participate, regardless of their geographic location. A vote is considered successful if it receives at least three positive binding votes (+1).

![Release Process](Release%20Process.png)

We were in a bit of a rush to close the voting when we received 3 votes of approval, and were told by another mentor. Please wait at least 72 hours after each round of voting before sending an email to announce the results and close the vote.

Besides the release version number, don’t forget to specify the commit ID of the last commit for the current version and the build node that was used to build the current version. 

## Things We Would Love to Share 
Here are some takeaways from the release process. Hope it helps ;)

### Email. Email. Email. 
Apache projects use mailing lists to coordinate development of their software and administer their organization. Mailing lists also serve as a primary support channel where users can help each other learn to use the software.

We spent a bit of time getting used to email communication, since we were used to instant communication tools. Email is a great way to reduce the information gap for current community members and new members. 

### Try First, Ask Later.
For uncertain questions, try them first and then ask for your mentor's help if needed. Your mentors are here to guide and support, not to do all the work for you.

### Be Patient and Seek Help from the Mentors
If you’ve tried but failed to find a solution, reach out to your mentor by email. 
In the initial phase of the release, one of the obstacles we faced was the format of the license. We first looked at some graduated projects, but turned out that each project had its format. Then, we decided to display the following information for each license: 

**License information**         
**Package name**         
**Repository URL**        
**License reference URL**        

We sent an email for mentors’ advice, and in the end we replaced the LICENSE application URL with the URL we have sorted out.

### Careful with the Assignment
In the past, we simply assigned an issue to the person in charge. However, this approach is not community-driven today. Always remind yourself that: **Issues and pull requests should only be assigned to users who have volunteered to take them on**. 


### Community Over Code
Community is the key to a project's success in graduating from Apache, and we’re building our community. For an easy and smooth contribution experience, we collect everything a contributor needs on the [Community page](https://answer.apache.org/community/contributing), providing a central hub for information and simplifies the contribution process for everyone.

## Recommended Docs for Release
https://incubator.apache.org/guides/releasemanagement.html        
https://linkis.apache.org/community/how-to-release/

You can always welcome to check our [GitHub](https://github.com/apache/incubator-answer) for reference.

## Ready to shape the future of Q&A Software? 
We always have new ideas for Q&A, and plan to release a new version every month. You can find our upcoming plans and join the discussion on our [roadmap](https://github.com/apache/incubator-answer/projects?query=is%3Aopen). 

If you’re a Q&A enthusiast, a developer, or a multilingual speaker, we welcome your contributions, and there’s always a way you can [get involved](https://answer.apache.org/community/contributing). See you soon.


