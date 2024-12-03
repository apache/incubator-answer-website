---
slug: how-release-managers-make-the-release-process-productive
title: "How Release Managers Make the Release Process Productive"
authors: [Anne]
category: Community
featured: true
image: 2024-11-13-cover@4x.png
description: "Learn the behind-the-scenes story of how four Release Managers gradually optimized the release process."

---

An Apache release follows a rigorous process with valid, signed, artifacts, voted on by the appropriate PMC and ultimately distributed on the official ASF release infrastructure. Each project designates a committer to be release manager for release preparation, execution, and document maintenance, etc. Apache encourages committers to take turns in this role for different release, ensuring release quality, efficiency, and process optimization.

Since joining the Apache Incubator in October 2023, Apache Answer has released 8 Apache versions with 4 release managers involved. With their help, the project has accumulated Apache release experience. The process of merging code and packaging has become smoother, the Release doc includes more details, and the recent added email templates make writing voting emails easier.

In today's read, we will look back at the challenges encountered by the release managers during the release, how they solved them, and how they improved the release documentation and the release process.

## Evolution of the Release Doc 
As the foundation of the release, the release doc provides detailed guidance. It also serves as a testament to the project’s maturity and independence in release management.

LinkinStars, a backend engineer, became Apache Answer’s [first release manager](https://answer.apache.org/blog/meet-our-release-manager-linkinstars). He crafted the initial version of the release doc with an entire release cycle and final deployment. In this version, the release doc packed with process from packaging, signing, verification, and uploading, as well as email templates. With his help, Apache Answer’s [first Apache release](https://answer.apache.org/zh-CN/blog/a-new-chapter-begins-answer-first-apache-release-launches) was successfully launched on November 29th, 2023.

Later on, the PPMC members started to take turns following the guidance of the mentor. By rotating this role, the community was not only familiarized with the release process but also able to identify the optimization gap. 

As the frontend developer of Apache Answer, shuai built Apache Answer’s frontend from scratch. He took up the torch and became the second release manager. During the release process, he enhanced the doc by elaborating of GPG keys, methods of file verification, and ways to obtain email links.

![Alt text](shuai-sign-the-release-artifacts.PNG)


Kumfo has taken over from shuai as the third release manager for Apache Answer. As a backend developer, he contributed to the development of features related to reputation, upvoting, and other event-driven functionalities. He made modifications and additions based on feedback from IPMC Members.

![kumfo's contribution](kumfo-improvement.PNG)

Currently, the baton for releasing Apache Answer has passed to robin. He has made more detailed revisions to the documentation, such as breaking down some release steps, adding more details, and reorganizing the structure of the document for better clarity and sequence.

![robin's update](how-to-release.PNG)

Read the latest [release docs](https://answer.apache.org/community/how-to-release) proudly presented and polished by the release managers.

## Challenges and Solutions
For LinkinStars, the first release was undoubtedly a huge challenge. He first worked with other PPMC members to collect and organize the relevant release documentation, creating an initial release process.

![Alt text](release-process.PNG)

Click [here](https://answer.apache.org/blog/behind-the-scene-how-we-launched-the-first-apache-release) to learn more about the behind-the-scenes story of Apache Answer's first Apache release.

After shuai‘s take-over, he referred to LinkinStars’ release documentation and prepared the GPG key and SVN configuration in advance. However, he still faced issues such as incorrect email subject/content, missing content after packaging, and incorrect signatures. To avoid formatting errors caused by copy-pasting in emails, shuai suggested creating a .txt file locally first, where the email template can be edited and modified before copying it into the email editor. He also created a [GitHub repo of Apache release email templates](https://github.com/shuashuai/apache-release-email) to help other release managers avoid encountering such problems in the future.

When waiting for a General vote takes longer than expected, a REMINDER email can be sent for kindly notice. However, it is recommended to prioritize seeking vote from mentors.

![Alt text](reminder-tips.png)

In the Apache community, all communication is transparent and traceable, which is incredibly helpful for Release Managers referencing past Apache project release processes and emails. The community atmosphere at Apache is open and friendly, and when issues arise, someone will point them out and help resolve them in the emails. For example, during the General vote phase, a mentor pointed out that the release files uploaded to the SVN repository were incorrect, with the signed files having a size of 0. After several rounds of checks, it was found that the release manager had not properly downloaded the release files, and the browser had restricted the content, causing the downloaded files to be incorrect.

When talking to the release managers, all of them have mentioned the importance of collaboration and cooperation among release managers. Besides meticulous and repeated checks during the release, it is highly recommended to invite other release managers to help validate the release to ensure that every step is correct.

One of the graduation checklist items in Apache's successful graduation guide is the ability to release an Apache version. This requires not only clear release documentation and a transparent communication mechanism but also the collective effort of all community members. From requirement analysis, development, and testing to the final release, the collaboration among community members is key to ensuring a successful release. Apache Answer welcomes and encourages more people to join the community to help build a better Q&A platform software together.
