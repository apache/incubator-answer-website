---
date: 2026-07-21
title: "Apache Answer 2.0.2：AI 推理内容、邮件通知间隔、更安全的登录与更多改进"
authors: [Robin]
category: Release
featured: true
image: 2026-07-21-cover@4x.png
description: "Apache Answer 2.0.2 为 AI 对话保留推理内容，新增邮件通知间隔与可选邮箱验证，强化认证与权限安全，并修复了短链接、API、打包等一组问题。"
---

我们很高兴发布 **Apache Answer 2.0.2**。这是一个聚焦打磨体验的小版本更新，进一步提升了 AI 对话体验、邮件通知灵活性，并在认证、权限与内容安全方面做了多项加固。

你可以从 [Apache Answer 下载页](https://answer.apache.org/download) 获取本次发布，也可以在 [GitHub Release 页面](https://github.com/apache/answer/releases/tag/v2.0.2) 查看完整信息。

---

## ✨ 本次更新亮点

### AI 推理内容支持

推理模型通常会在给出最终答案前展示思考过程。Apache Answer 现在会在 AI 对话记录和聊天界面中保留这部分推理内容，让多轮对话能够保留完整的上下文。

- **在 AI 对话记录和聊天界面中支持推理内容** ([#1530](https://github.com/apache/answer/pull/1530))，感谢 [@hgaol](https://github.com/hgaol)

### 可选邮箱验证

对于不需要强制邮件确认的内部或受信任环境，管理员现在可以直接在站点设置中关闭邮箱验证，简化用户入驻流程。

- **支持在站点设置中关闭邮箱验证** ([#1540](https://github.com/apache/answer/pull/1540))，感谢 [@AsyncAssassin](https://github.com/AsyncAssassin)

### 可配置的新问题邮件通知间隔

新问题邮件通知现在支持按间隔发送，同时邮件限流也已迁移到独立 worker，并支持配置邮件队列。

- **新增新问题邮件通知的间隔发送支持** ([#1545](https://github.com/apache/answer/pull/1545))，感谢 [@AsyncAssassin](https://github.com/AsyncAssassin)
- **将新问题邮件限流迁移至独立 worker，并支持配置邮件队列**，感谢 [@AsyncAssassin](https://github.com/AsyncAssassin)

### 更优雅的 Panic 恢复

新增 recovery 中间件，可以更早、更优雅地捕获意外 panic，降低单个失败拖垮整个请求的风险。

- **新增 recovery 中间件以更好地处理 HTTP 请求中的意外 panic** ([#1537](https://github.com/apache/answer/pull/1537))，感谢 [@hhc7](https://github.com/hhc7)

### 更安全的外部登录

连接器登录流程现在能更好地防止错误的账号绑定，同时在角色或账号变更后会清理过期的管理员 API Key 权限。

- **防止连接器登录流程中的错误外部账号绑定**，感谢 [@LinkinStars](https://github.com/LinkinStars)
- **在角色或账号变更后移除过期的管理员 API Key 权限**，感谢 [@LinkinStars](https://github.com/LinkinStars)

### 构建与打包更新

- **Docker 与 CI 构建流程升级为 Buildx 与 Go 1.25**，感谢 [@LinkinStars](https://github.com/LinkinStars)

---

## 🔒 稳定性与安全性增强

除了 release note 中列出的内容之外，从 **v2.0.1** 到 **v2.0.2** 的代码改动还覆盖了几项很重要的底层修正：

- **短链接修复**：开启短链接后，编辑问题和采纳回答现在都能正常工作 ([#1541](https://github.com/apache/answer/pull/1541), [#1554](https://github.com/apache/answer/pull/1554))
- **许可证合规**：补充了 `mozillazg-go-unidecode` 缺失的许可证声明 ([#1552](https://github.com/apache/answer/pull/1552))
- **请求头加固**：`Accept-Language` 解析现在会拒绝畸形超长请求头
- **修订审核权限**：采纳与拒绝操作的权限校验现在保持一致
- **头像所有权**：更新头像时会强制执行所有权检查并清理旧头像
- **内容可见性**：在回答与 MCP 检索路径中限制已删除或待审核回答的可见性
- **错误处理**：JSON 500 重写仅作用于 API 路由，并避免在响应已刷新后重写
- **URL Slug**：非拉丁标题现在会生成实用的 ASCII slug，而不是回退到 `/topic` ([#1526](https://github.com/apache/answer/pull/1526))

如果你已经在使用 **2.0.0** 或 **2.0.1**，我们建议尽快升级到 **2.0.2**。

---

## 🙌 致谢贡献者

感谢所有参与本次发布的贡献者：

[@ahmedqasid](https://github.com/ahmedqasid), [@AsyncAssassin](https://github.com/AsyncAssassin), [@hgaol](https://github.com/hgaol), [@hhc7](https://github.com/hhc7), [@LinkinStars](https://github.com/LinkinStars), [@Luffy](https://github.com/sy-records)。

正是这些持续的贡献，让 Apache Answer 每个版本都更可靠、更好用。
