---
date: 2026-01-30
title: "Apache Answer 2.0.0: AI 驱动的工作流与重大增强"
authors: [shuai]
category: Release
featured: true
image: 2026-01-30-cover@4x.png
description: "本次重大版本引入了 AI 助手、MCP 服务器、API 密钥和编辑器插件支持，通过 AI 驱动的工作流和增强的扩展性，彻底改变了用户与 Answer 的交互方式。"
---

> [!note]
> 这是一个专注于 AI 工作流的重大升级：新增了 AI 助手、MCP 服务器、API 密钥和编辑器插件支持，同时重新设计了管理导航体验。请在升级前进行完整备份，以防止任何数据丢失。

我们很高兴宣布 **Apache Answer 2.0.0**，这是一个重要的里程碑版本，为平台带来了强大的 AI 功能和重大增强！
本版本引入了 **AI 助手**、**MCP 服务器**、**API 密钥**和**编辑器插件支持**，通过智能工作流改变了用户与 Answer 的交互方式。此外，我们还改进了管理导航体验，并添加了布局自定义选项。

一如既往，感谢社区中所有贡献代码、审查和反馈的成员。

---

## ✨ 新功能

### AI 与集成能力

* **新功能**：AI 助手功能 ([#1479](https://github.com/apache/answer/pull/1479)) 由 [@shuashuai](https://github.com/shuashuai) 和 [@LinkinStars](https://github.com/LinkinStars) 贡献
  使用户能够在 Answer 中直接获得智能辅助，支持 AI 驱动的内容生成、建议和工作流自动化。

* **新功能**：MCP 服务器功能 ([#1480](https://github.com/apache/answer/pull/1480)) 由 [@LinkinStars](https://github.com/LinkinStars) 和 [@shuashuai](https://github.com/shuashuai) 贡献
  集成模型上下文协议（MCP）服务器支持，实现与 AI 模型和外部服务的无缝连接，以增强功能。

* **新功能**：API 密钥功能 ([#1482](https://github.com/apache/answer/pull/1482)) 由 [@LinkinStars](https://github.com/LinkinStars) 和 [@shuashuai](https://github.com/shuashuai) 贡献
  提供安全的 API 密钥管理，支持程序化访问，使开发者能够将 Answer 与外部系统集成并自动化工作流。

* **新功能**：编辑器插件支持 ([#1481](https://github.com/apache/answer/pull/1481)) 由 [@robinv8](https://github.com/robinv8) 贡献
  通过插件架构扩展编辑器，允许开发者使用自定义功能来定制和增强编辑体验。

---

## 🚀 改进

### 管理与用户体验

* **改进**：增强管理导航菜单的便利性 ([#1483](https://github.com/apache/answer/pull/1483)) 由 [@shuashuai](https://github.com/shuashuai) 和 [@kumfo](https://github.com/kumfo) 贡献
  重新设计管理导航，提高可用性并加快对管理功能的访问。

* **改进**：添加布局宽度选项 ([#1484](https://github.com/apache/answer/pull/1484)) 由 [@shuashuai](https://github.com/shuashuai) 贡献
  让用户能够控制内容布局宽度，允许根据不同的屏幕尺寸和偏好进行自定义。

---

## 🐛 错误修复

### 管理与用户管理

* **修复**：在管理界面添加用户后缺少结果提示 ([#1457](https://github.com/apache/answer/pull/1457)) 由 [@bimakw](https://github.com/bimakw) 贡献
  现在，通过管理界面添加新用户时，用户会收到适当的反馈。

* **修复**：外部 ID 通知问题 ([#1465](https://github.com/apache/answer/pull/1465)) 由 [@IfDougelseSa](https://github.com/IfDougelseSa) 贡献
  解决了与外部 ID 处理相关的通知问题。

* **修复**：将头像列长度从 1024 扩展到 2048 ([#1463](https://github.com/apache/answer/pull/1463)) 由 [@csouls](https://github.com/csouls) 贡献
  增加头像存储容量，支持更高分辨率的图像。

### 表单与输入处理

* **修复**：当 SchemeForm 输入类型为数字时，默认值 0 不显示 由 [@shuashuai](https://github.com/shuashuai) 贡献
  确保数字默认值在表单输入中正确显示。

---

## 🎨 其他更改

* **重大版本升级**
  本次发布代表了一个重要的里程碑，包含架构改进和新的 AI 功能。从以前版本升级的用户应查看新功能并确保与工作流的兼容性。

---

## 🙌 贡献者致谢

非常感谢所有通过代码、审查、测试和反馈为本次发布做出贡献的成员。你们的努力帮助 Apache Answer 保持可靠并持续改进。

特别感谢以下贡献者（按字母顺序）：

* [@bimakw](https://github.com/bimakw)
* [@csouls](https://github.com/csouls)
* [@IfDougelseSa](https://github.com/IfDougelseSa)
* [@kumfo](https://github.com/kumfo)
* [@LinkinStars](https://github.com/LinkinStars)
* [@robinv8](https://github.com/robinv8)
* [@shuashuai](https://github.com/shuashuai)

---

**立即升级**以享受这些强大的新功能和改进！请记住在升级前进行完整备份。如果遇到任何问题，请在 [GitHub](https://github.com/apache/answer/issues) 上报告。

祝您使用愉快！🎉
