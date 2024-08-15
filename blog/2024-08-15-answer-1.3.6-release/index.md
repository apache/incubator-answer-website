---
title: "Say Hi to Answer 1.3.6: Faster and Easier"
authors: [Anne]
category: Release
featured: true
image: 2024-08-15-cover@4x.png
description: "This update brings features and improvements designed to enhance both user experience and loading speed."

---

New version for a new release. In 1.3.6, we focus on user experience and performance. Whether you're managing a bustling community forum or building a custom Q&A solution, Answer 1.3.6 empowers you to create a more intuitive and efficient platform for everyone involved. 

[Upgrade](https://answer.apache.org/docs/upgrade) now, and find out what we’ve got for you.

## What’s New

### Pre-fill Forms: Focus on the Content. Leave the Rest. 
Introducing pre-fill forms, a feature that improves data accuracy and more concentration. By allowing you to pre-fill question fields with relevant information, you can significantly reduce user input and improve data accuracy. 

It’s useful for:
Frequently asked questions: Pre-fill common question tags.
Customer support: Provide essential context for support tickets.

Follow the steps to build a pre-fill form for community members.
1. Add pre-fill information to the filed for the users. 

	```
    ---
	title: How to deploy Apache Answer
	tags: discussion
	---
	How to deploy Apache Answer?
    ```

2. Encode at [https://www.urlencoder.org/](https://www.urlencoder.org/)  

![Encode](Encode.jpeg)

3. Copy and paste the encoded string with your Answer URL.
4. Share it with your community members.

### CDN Plugins: Speed it up!
Speaking of performance, Answer 1.3.6 offers two new CDN plugins: [Amazon CloudFront](https://github.com/apache/incubator-answer-plugins/tree/main/cdn-s3) and [Aliyun CDN](https://github.com/apache/incubator-answer-plugins/tree/main/cdn-aliyun). By integrating these plugins into your infrastructure, you can dramatically improve load times and enhance overall user experience. These plugins are by your side for handling increased traffic and faster content delivery.

## Take a Look at the Optimizations that Matters
We support username and email update before, and now changing display name is possible for admin. In Admin panel, click Users. Then, hit Action and Edit profile.  

### CDN Plugins: Speed it up!
Speaking of performance, Answer 1.3.6 offers two new CDN plugins: [Amazon CloudFront](https://github.com/apache/incubator-answer-plugins/tree/main/cdn-s3) and [Aliyun CDN](https://github.com/apache/incubator-answer-plugins/tree/main/cdn-aliyun). By integrating these plugins into your infrastructure, you can dramatically improve load times and enhance overall user experience. These plugins are by your side for handling increased traffic and faster content delivery.

## Take a Look at the Optimizations that Matters
We support username and email update before, and now changing display name is possible for admin. In Admin panel, click Users. Then, hit Action and Edit profile.  

![Edit Display Name](Edit%20Display%20Name.png)

We changed the checkbox to toggle button, providing a more intuitive way of responding to your question. 

![Toggle Button](Toggle.png)

Search bar says goodbye to loneliness with an icon.

![Search Icon](Search%20Icon.png)

## To the Contributors!
We owe a huge debt of gratitude to the feature constructor, improvement maker, and bug hunter who contributed their time and expertise to make this release possible, and they are:

[kevin](https://github.com/kevingil), [kumfo](https://github.com/kumfo), [hgaol](https://github.com/hgaol), [robin](https://github.com/robinv8), [LinkinStars](https://github.com/LinkinStars), [dashuai](https://github.com/shuashuai), and [Luffy](https://github.com/sy-records). 

## Join the Conversation
We believe that every [contribution](https://answer.apache.org/community/contributing#get-involved) makes a real difference, leaving your feedback to us is a way to contribute. Reach us at our [Q&A community](https://meta.answer.dev/), [social media](https://x.com/AnswerDev), and [Discord](https://discord.gg/a6PZZbfnFx).