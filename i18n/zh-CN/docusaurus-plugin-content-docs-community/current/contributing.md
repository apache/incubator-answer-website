---
slug: /contributing
---

# 贡献

感谢你有兴趣为 Apache Answer 做出贡献，希望本文档能明确做出贡献的过程。

[开源指南网站](https://opensource.guide/)为想要学习如何运行开源项目并为其做出贡献的个人、社区和公司提供了资源集合。以下指南将会对贡献者和开源新手特别有用：

- [如何为开源做出贡献](https://opensource.guide/how-to-contribute/)
- [建立欢迎社区](https://opensource.guide/building-community/)

## 行为规范

Apache Answer 通过了一项行为准则，我们希望项目参与者遵守该准则。请阅读[全文](https://www.apache.org/foundation/policies/conduct.html)，以便你了解哪些行动是可以容忍的，哪些是不能容忍的。

## 参与进来

Apache Answer 是一个由热情的用户、贡献者和PMC成员构建的开源项目。我们致力于创建一个开放和包容的社区，我们欢迎每个人加入我们，接收 Apache 的方式，共同构建开源。

任何人都可以为 Apache Answer 做出贡献。除了贡献代码外，还有许多其他参与方式，例如：

##### 使用 Apache Answer

- 开始使用Apache Answer很容易。只需遵循我们的[入门指南](/docs/installation)，看看是否一切正常运行。
- 如果没有，你可以。[创建一个问题](/community/issues)来报告错误或提出改进建议。

##### 分类问题和拉取请求

- 如果你认为[问题](/community/issues)没有提供解决它所需的所有细节，请询问更多信息。
- 表明[标签](https://github.com/apache/incubator-answer/labels)有助于对问题进行分类。
- 标记过时或应该关闭的问题。
- 询问测试计划和审查代码。

##### 贡献代码

- 如果你找到可以解决的问题，请认领问题。创建一个[拉取请求](/community/pull-request)来提交你的更改。
- 标记为[`good first issue`](https://github.com/apache/incubator-answer/labels/good%20first%20issue)的问题非常适合作为开始。

##### 改进文档

- 如果你在阅读我们的[文档](/docs)时发现任何错别字、语法或错误，只需单击“编辑此页面”并在GitHub上进行编辑。

##### 开发插件

- 使用插件扩展 Apache Answer 的功能。
- 一些用户期待的功能，可以通过[开发和提交](/docs/development/plugins)去声明或创建你的需求。

##### 帮助版本发布

- 通过测试新的候选版本并在[dev@answer.apache.org](https://lists.apache.org/list.html?dev@answer.apache.org)上投票，帮助我们让 Apache Answer 变得更好。
- 如果你没有发现任何问题，可以投`+1 (non-binding)`赞成票。
- 如果你发现了问题，可以投 `-1 (non-binding)`反对票。

##### 贡献翻译

- 如果你能流利地使用英语以外的语言，你可以使用 [Crowdin](https://crowdin.com/project/answer) 帮助我们将 Apache Answer 翻译成其他语言。
- 想要获得更多信息，可以参阅[贡献翻译指南](/community/translation)。

##### 帮助支持

- 通过在 [Apache Answer Meta](https://meta.answer.dev)上帮助其他用户可以为我们提供很大的帮助。
- 回复并解决[邮箱列表](/community/support/#mailing-list)中的问题。

##### 推广 Apache Answer

- 在社交媒体上分享 Apache Answer 。
- 在 Apache Answer 上把你的故事分享给更多人。
- 加入我们的聚会、论坛等。

##### 其他

- 有新想法吗？非常欢迎所有贡献。
- - 如果你认为你需要帮助来规划你的贡献，请[联系我们](/community/support/#others)，并告诉我们你正在寻找什么样的帮助。

## 开发过程

Apache Answer 使用[GitHub](https://github.com/apache/incubator-answer)作为其真实版本的来源。核心团队将直接在那里工作。所有的更改从一开始就会是公开的。

所有拉取请求都将由持续集成系统GitHub操作进行检查。有单元测试，还有更多。

### 分支组织

提交PR时应选择哪个分支？

- `main`分支对应于**最新版本**的 answer。如果你正在为最新版本**修复**问题，请选择主分支。
- `dev`分支用于**下一个版本**的开发。因此，如果你正在开发**新功能**，请切换到开发分支，并为其提交PR。

通常，我们在问题上标记里程碑来跟踪问题应该在哪个版本中修复。因此，你可以根据里程碑确定应该提交到哪个版本。
