---
slug: /contributing
---

# 贡献

感谢你对 Apache Answer 的关注，希望本文档能让你对贡献过程有更清楚的了解。

我们推荐你访问 [开源指南网站](https://opensource.guide/)，该网站为个人、社区和公司提供了开源相关的学习、运营和贡献等资源。无论是经验丰富的贡献者，还是刚接触开源的新手，都能从下面的文档里找到有益的指引：

- [如何为开源做贡献](https://opensource.guide/how-to-contribute/)
- [建立友好的社区](https://opensource.guide/building-community/)

## 行为准则

Apache Answer 通过了一项行为准则，我们希望项目参与者遵守该准则。请阅读[全文](https://www.apache.org/foundation/policies/conduct.html)，以便你了解哪些行动是可以接受的，哪些是不可以的。

## 参与进来

Apache Answer 是一个由热情的用户、贡献者和PMC成员共同打造的开源项目。我们致力于创建一个开放和包容的社区，我们欢迎每个人加入我们，遵循 Apache 之道，携手构建开源生态。

任何人都可以为 Apache Answer 做出贡献。不局限于贡献代码，以下是其他的参与方式：

##### 使用 Apache Answer

- 运行 Apache Answer 很容易。只需遵循我们的[入门指南](/docs/installation)，看看是否一切按预期运行。
- 如果遇到问题，你可以[创建一个问题](/community/issues)来报告错误或提出改进建议。

##### 参与处理问题和代码提交请求

- 如果你认为[问题](/community/issues)没有提供解决它所需的所有细节，请询问用户提供更多信息。
- 帮助问题添加[标签](https://github.com/apache/incubator-answer/labels)有助于对问题进行分类。
- 标记过时或应该关闭的问题。
- 询问测试计划和审查代码。

##### 贡献代码

- 如果你找到你可以解决的问题，请认领它。创建一个[拉取请求](/community/pull-request)来提交你的更改。
- 标记为[`good first issue`](https://github.com/apache/incubator-answer/labels/good%20first%20issue)的问题非常适合新手们。

##### 改进文档

- 如果你在阅读我们的[文档](/docs)时发现任何错别字、语法或内容错误，只需单击“编辑此页面”并直接在 GitHub 上进行编辑即可。

##### 开发插件

- 通过开发插件，延展 Apache Answer 的功能。
- 可以查看现有插件需求，或者[开发和提交](/docs/development/plugins)实现他人或者自己需要的那个功能。

##### 参与版本发布

- 通过测试新的候选版本并参与 [dev@answer.apache.org](https://lists.apache.org/list.html?dev@answer.apache.org) 上投票。
- 如果你没有发现任何问题，可以投`+1 (non-binding)`赞成票。
- 如果你发现了问题，可以投 `-1 (non-binding)`反对票。

##### 贡献翻译

- 如果你还掌握英语以外的语言，你可以使用 [Crowdin](https://crowdin.com/project/answer) 帮助我们将 Apache Answer 翻译成其他语言。
- 关于其他信息，请阅读[贡献翻译指南](/community/translation)。

##### 提供支持

- 在 [Apache Answer Meta](https://meta.answer.dev)上解答其他用户的问题。
- 回复并解决[邮箱列表](/community/support/#mailing-list)中的提问。

##### 推广 Apache Answer

- 在社交媒体上分享 Apache Answer 。
- 把你的使用心得分享给更多人。
- 参与我们的闲暇聚会、论坛等活动。

##### 其他

- 有新想法吗？我们非常欢迎任何形式的贡献。
- 如果你在规划贡献时遇到问题，请[联系我们](/community/support/#others)，并告诉我们你需要一些帮助。

## 开发过程

Apache Answer 使用[GitHub](https://github.com/apache/incubator-answer)作为代码版本库。核心团队将在该平台进行协作开发。所有的代码变更都是对外公开的。

所有 Pull Request 都将由持续集成系统（GitHub Actions）进行检查，其中包括单元测试等其它测试方法。

### 分支管理

提交PR时应选择哪个分支？

- `main`分支对应于**最新版本**的 Answer。如果你正在为最新版本**修复**问题，请选择主分支。
- `dev`分支用于**下一个版本**的开发。因此，如果你正在开发**新功能**，请切换到开发分支，并为其提交PR。

通常，我们在问题上标记里程碑 (milestone) 来跟踪问题应该在哪个版本中修复。因此，你可以根据里程碑确定应将代码提交到哪个分支。
