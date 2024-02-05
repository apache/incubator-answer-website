---
title: "Answer Project Ideas for Google Summer of Code 2024 (Draft)"
authors: [fenbox]
category: Community
draft: true
featured: false
image: 2024-02-05-cover@4x.png
description: "Apache Answer intends to participate in Google Summer of Code 2024."

---

Apache Answer intends to participate in Google Summer of Code 2024, This post contains some of our project ideas.

## Project Ideas

### Plugin: LDAP Authentication

- Languages/skills: TypeScript (React), Go
- Expected size of project: 90 hours
- Difficulty: Easy

The feature is at the top of the users’ wish list.

Today, lots of enterprises and organizations use LDAP to manage employee identity authentication. This allows employees to log in to Answer using their existing LDAP credentials, and simplifies the login process while improves security. It’s also an easy way to manage employees’ Answer usage permissions with LDAP.

### Plugin: AI Bot

- Languages/skills: TypeScript (React), Go
- Expected size of project: 175 hours
- Difficulty: Hard

AI Embedding helps Answer understand the context of the questions, providing comprehensive and accurate search results. Meanwhile, GPT-related technology can summarize the results in a clear and concise way, which makes it easier to find a solution.

### Plugin: Slack Bot or Microsoft Teams Bot

- Languages/skills: TypeScript (React), Go
- Expected size of project: 90 hours
- Difficulty: Medium

The Slack integration allows team members to search information in Answer without leaving their current workflow. Users can perform the corresponding operations by entering similar commands as below:

- `/answer ask`：Add a new question
- `/answer search`：Search
- `/answer connect|disconnect`：Bind or unbind an account
- `/answer notify`：Set up message notifications to receive system messages through Slack

### Webhook Notification

- Languages/skills: TypeScript (React), Go
- Expected size of project: 90 hours
- Difficulty: Medium

Support multiple Webhook for integration with other applications. It sends events of Answer to third-party application and services like Slack, Zapier, and IFTTT for workflow automation. It also supports triggers for events, such as questions, answers, accepted answers, notifications, and votes.

### Gamification Badges

- Languages/skills: TypeScript (React), Go
- Expected size of project: 175 hours
- Difficulty: Hard

Answer offers a badge rewarding system with three levels: gold, silver and bronze. Admins can create and specify the conditions to earn the badges, while the system automatically awards the users. Admins can create exclusive badges and award users manually. This is to encourage team members to actively participate and contribute in Answer. Badges are displayed on the profile page to recognize team members' contributions.
