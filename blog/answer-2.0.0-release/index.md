---
date: 2026-01-30
title: "Apache Answer 2.0.0: AI-Powered Workflows & Major Enhancements"
authors: [shuai]
category: Release
featured: true
image: 2026-01-30-cover@4x.png
description: "This major release introduces AI Assistant, MCP Server, API Keys, and editor plugin support, revolutionizing how users interact with Answer through AI-powered workflows and enhanced extensibility."
---

> [!note]
> This is a major upgrade focused on AI workflows: it adds AI Assistant, MCP Server, API Keys, and editor plugin support, along with a revamped admin navigation experience. Please make a complete backup before upgrading to prevent any data loss.

We're excited to announce **Apache Answer 2.0.0**, a major milestone release that brings powerful AI capabilities and significant enhancements to the platform!
This version introduces **AI Assistant**, **MCP Server**, **API Keys**, and **editor plugin support**, transforming how users interact with Answer through intelligent workflows. Additionally, we've improved the admin navigation experience and added layout customization options.

As always, thank you to everyone in the community who contributed code, reviews, and feedback.

---

## ✨ New Features

### AI & Integration Capabilities

* **New**: AI Assistant feature ([#1479](https://github.com/apache/answer/pull/1479)) by [@shuashuai](https://github.com/shuashuai) & [@LinkinStars](https://github.com/LinkinStars)
  Empowers users with intelligent assistance directly within Answer, enabling AI-powered content generation, suggestions, and workflow automation.

* **New**: MCP Server feature ([#1480](https://github.com/apache/answer/pull/1480)) by [@LinkinStars](https://github.com/LinkinStars) & [@shuashuai](https://github.com/shuashuai)
  Integrates Model Context Protocol (MCP) server support, enabling seamless connectivity with AI models and external services for enhanced functionality.

* **New**: API Keys feature ([#1482](https://github.com/apache/answer/pull/1482)) by [@LinkinStars](https://github.com/LinkinStars) & [@shuashuai](https://github.com/shuashuai)
  Provides secure API key management for programmatic access, enabling developers to integrate Answer with external systems and automate workflows.

* **New**: Editor plugin support ([#1481](https://github.com/apache/answer/pull/1481)) by [@robinv8](https://github.com/robinv8)
  Extends the editor with plugin architecture, allowing developers to customize and enhance the editing experience with custom functionality.

---

## 🚀 Improvements

### Admin & User Experience

* **Improve**: Enhanced convenience of the Admin navigation menu ([#1483](https://github.com/apache/answer/pull/1483)) by [@shuashuai](https://github.com/shuashuai) & [@kumfo](https://github.com/kumfo)
  Redesigned admin navigation for improved usability and faster access to administrative functions.

* **Improve**: Added layout width option ([#1484](https://github.com/apache/answer/pull/1484)) by [@shuashuai](https://github.com/shuashuai)
  Gives users control over content layout width, allowing customization to match different screen sizes and preferences.

---

## 🐛 Bug Fixes

### Admin & User Management

* **Fixed**: Missing result prompt after submitting user addition in Admin ([#1457](https://github.com/apache/answer/pull/1457)) by [@bimakw](https://github.com/bimakw)
  Users now receive proper feedback when adding new users through the admin interface.

* **Fixed**: External ID notification issue ([#1465](https://github.com/apache/answer/pull/1465)) by [@IfDougelseSa](https://github.com/IfDougelseSa)
  Resolves notification problems related to external ID handling.

* **Fixed**: Expanded avatar column length from 1024 to 2048 ([#1463](https://github.com/apache/answer/pull/1463)) by [@csouls](https://github.com/csouls)
  Increases avatar storage capacity to support higher resolution images.

### Form & Input Handling

* **Fixed**: Default value of 0 not displayed when SchemeForm input type is number by [@shuashuai](https://github.com/shuashuai)
  Ensures numeric default values are properly displayed in form inputs.

---

## 🎨 Other Changes

* **Major version upgrade**
  This release represents a significant milestone with architectural improvements and new AI capabilities. Users upgrading from previous versions should review the new features and ensure compatibility with their workflows.

---

## 🙌 Contributor Acknowledgments

A big thank you to everyone who contributed to this release through code, reviews, testing, and feedback. Your efforts help keep Apache Answer reliable and continuously improving.

Special thanks to the contributors (in alphabetical order):

* [@bimakw](https://github.com/bimakw)
* [@csouls](https://github.com/csouls)
* [@IfDougelseSa](https://github.com/IfDougelseSa)
* [@kumfo](https://github.com/kumfo)
* [@LinkinStars](https://github.com/LinkinStars)
* [@robinv8](https://github.com/robinv8)
* [@shuashuai](https://github.com/shuashuai)

---

**Upgrade now** to enjoy these powerful new features and improvements! Remember to make a complete backup before upgrading. If you encounter any issues, please report them on [GitHub](https://github.com/apache/answer/issues).

Happy browsing! 🎉
