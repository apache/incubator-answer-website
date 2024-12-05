---
date: 2024-11-22
title: "从贡献者到 PPMC Member：Lu Fei 的 Apache Answer之旅"
authors: [Anne]
category: Community
featured: true
image: 2024-11-22-cover-zh@4x.png
description: "了解 Lu Fei 从开发者到 PPMC Member 的成长之路。"

---

近日，Apache Answer 通过社区投票，评选出了进入孵化器后首位 PPMC Member Lu Fei。从去年 10 月起，Lu Fei 便开始在 Apache Answer 社区中活跃起来。截至目前，他在 Answer 主库和插件库共提交了 42 个 PR，解决了 31 个 Issues。这些贡献涵盖了问题修复，文档改善，开发新功能等多个领域。今天，我们邀请 Lu Fei 和大家分享他从 Contributor，到 Committer，再到 PPMC Member 的故事，也希望 Lu Fei 的分享，能够点亮更多开源爱好者。

## 初识 Apache Answer

我非常荣幸地成为 Apache Answer 孵化器项目的 PPMC 成员。这不仅是我个人的成长，也是我参与开源社区的一段珍贵旅程。项目进入孵化器，我见证了 Answer 的 PR 号从 2 成长到当前的 577。现在，Answer 已逐渐构建起了一个小型的用户交流和开发者交流社区。

其实在 2022 年 6 月的时候，joyqi 就曾邀请过我加入 SegmentFault 思否团队，当晚也通过电话聊了聊，不过当时因为工作和个人关系原因婉拒了，回过头想想可能那会就是研发 Answer 这个项目（错过拍大腿系列）。

2022 年 10 月 24 日，SegmentFault 思否团队正式宣布[对外开源问答社区软件 Answer](https://segmentfault.com/a/1190000042672978)。
其实当时看到 Answer 开源的消息后，我就点开了 repo，在扫了一眼安装文档后，我的第一个 [PR](https://github.com/apache/incubator-answer/pull/2) ：`doc: update install` 便诞生了。由于我在工作中主要使用的技术栈是 PHP，Answer 的技术栈是 Golang 和 Node.js，所以在后来的一段时间里，我按下了贡献的暂停键。

次年，恰逢开源一周年，Answer 社区发布公告宣布项目已顺利通过投票，正式进入 Apache 软件基金会（ASF）孵化器，而我在这个时候也提交了我的第二个 [PR](https://github.com/apache/incubator-answer/pull/577): `fix: typo`。

![Alt text](ASF.png)

当时大家都在思否的群里恭喜祝贺，微信群里就有人问了：什么时候自己才能得到一个 @apache.org 邮箱，看着大家七嘴八舌的在群里讨论，我虽然关闭群聊继续去工作了，但心里还是想了想我什么时候能得到这个邮箱。

## 深入了解 Apache 软件基金会

在 Answer 进入 Apache 软件基金会（ASF）孵化器后，我也开始了解一些相关知识，在这里也为大家做一些分享，当作科普。

![Alt text](ASF%2025%20Years.PNG)

### Apache 孵化器

Apache 孵化器（Incubator）成立于 2002 年，为希望进入 Apache 软件基金会（ASF）的项目提供服务。作为全球最大的开源基金会，ASF 的开源软件在全球被广泛应用，拥有超过 8400 名贡献者活跃在 320 多个项目中。据 Apache 统计，目前整个 Apache 软件基金会有价值超过 200+ 亿美元的开源软件和项目，横跨 Web 服务器和大数据处理到分布式存储和机器学习。这些项目均免费提供给开发者使用，并使全世界数十亿的用户受益。
Apache 孵化器为每个孵化项目（podling）指派了一些导师，他们会协助即将加入 ASF 的项目，指导它们在 ASF 的治理模式和运作流程下逐渐成长和独立运营，引导它们使用 ASF 提供的服务，促进孵化项目的增长和运营。经过一系列的阶段和评估，孵化器项目才能毕业成为顶级 ASF 项目（TLP）。

### Apache 之道

![Alt text](Apache%20Way.PNG)

“Apache Way” 是 Apache 软件基金会（ASF）的核心理念之一，是指在开源项目中遵循的一套社区治理原则。它强调透明、协作和社区驱动的项目管理方式，确保项目不仅仅由少数人掌控，而是由一群贡献者共同推动发展的。以下是 “Apache Way” 的几个关键原则：

1. 社区优先：项目是由社区的整体力量推动的，社区健康比代码本身更重要。所有人都可以参与贡献，社区成员互相协作，避免个人或公司对项目的控制。

2. 决策透明：所有讨论和决策公开进行，确保每个人都可以看到项目的发展方向和做出贡献的机会。这通常通过邮件列表或公开的讨论平台实现。

3. 基于共识：重大决策通常通过共识达成，减少对抗性分歧，并确保社区大多数人都支持项目的关键变动。

4. 尊重与包容：Apache Way 鼓励尊重和包容多样化的观点，确保项目对新贡献者友好，并提供成长的机会。

5. 贡献者驱动：每个人都有机会通过贡献获得更大责任，从 Contributor 到 Committer 再到 PMC Member（项目管理委员会），这样的逐步晋升是基于贡献和社区信任的结果。

## Committer：从兴趣到责任

在深入了解 Apache Answer 后，我对这个项目充满了兴趣。不仅因为它的目标是打造一个开放的问答平台工具，更因为我看到这个项目在技术栈上对我有很大的吸引力。作为一名开发者，我希望不断提升自己的技术能力，Apache Answer 正好采用了 Go 语言，正好是我一直想深入学习和实践的技能。

为了尽快上手，我首先从社区的 `good first issue` 标签入手。

这些问题通常比较简单，非常适合新人了解项目结构和贡献流程。我从修复文档问题、优化简单逻辑代码开始，一步步熟悉项目的代码风格和设计理念。在社区的帮助下，我逐渐理解了项目的架构，并开始尝试增加功能，比如为 [Dockerfile 增加时区](https://github.com/apache/incubator-answer/pull/581)和[邮件服务支持 TLS](https://github.com/apache/incubator-answer/pull/953) 等。

这一过程中，我的 Go 技能得到了极大的提升，也让我对高效协作和代码质量的重要性有了更深的体会，我的代码质量和贡献数量逐步提升，这也让我得到了成为 Committer 的机会。

2024 年 6 月 25 日，经过社区讨论和投票，我收到了 joyqi 的正式邀请。由于是第一次加入 Apache，我需要签署和提交 ICLA，回复邮件后等待 Apache 账号的创建。

![Alt text](Invitation%20of%20Committer.png)

2024 年 6 月 27 日，我收到了 Welcome to the Apache Software Foundation的邮件，并且获得了自己的 ASF 账号。

![Alt text](Welcome%20to%20ASF.png)

2024 年 7 月 8 日，我被加入到 Apache Answer Committer 的列表中。至此我成为了 Apache Answer 的 Committer，这个角色不仅意味着社区对我技术能力的认可，也意味着我需要承担更多的责任，包括代码评审、维护项目质量以及协助新贡献者融入社区。从兴趣到责任的转变让我深刻体会到，开源社区不仅是技术交流的平台，更是一个充满挑战和成长的舞台。

## PPMC Member：承载信任与期望

成为 Committer 之后，我开始更加关注 Apache Answer 的动态了。除了在邮件列表中积极沟通，版本发布的验证、投票外，我还会在收到 issue 的邮件通知后打开看看是什么问题，能不能解决，其中包括了 Bug 修复和功能改进。

除此之外，我也参考了其他 Apache Answer 的插件，[提交新的插件](https://github.com/apache/incubator-answer-plugins/pulls?q=is%3Apr+author%3Asy-records+is%3Aclosed)，丰富插件市场：[腾讯云对象存储 COS](https://github.com/apache/incubator-answer-plugins/tree/main/storage-tencentyuncos)、[钉钉通知](https://github.com/apache/incubator-answer-plugins/tree/main/notification-dingtalk)和[百度内容审核插件](https://github.com/apache/incubator-answer-plugins/tree/main/reviewer-baidu)。

当我收到成为 PPMC Member 的提议时，我既兴奋又感觉到肩上的责任更重了。PPMC Member 的角色不仅是技术贡献，更重要的是帮助社区成长、维护项目方向，并确保 Apache Way 的实践。在这个新的角色中，我将与其他社区成员密切合作，推动项目的孵化进程，吸引更多开发者加入，并探索 Apache Answer 在全球范围内的更多应用场景。

## 加入 Apache Answer 社区吧

Apache Answer 社区是一个包容且充满活力的大家庭。无论是新手还是资深开发者，都能在社区里找到属于自己的位置。你会发现 Apache Answer 所有的功能，从设计到开发落地，全部是由我们社区中才华横溢的开发者们完成的。如果你是一名开发者，或者对问答系统感兴趣，我衷心邀请你加入 Apache Answer 社区。在这里，你不仅可以提升技术能力，还能与志同道合的伙伴一起创造价值。

我建议你从文档贡献开始，或者尝试修复一个简单的 Bug，再慢慢深入到项目中来。在贡献的过程中，你会发现开源的魅力远不止技术，更是一种文化和态度。

最后，我要感谢 Apache Answer 社区的每一位成员，是你们的支持让我一路成长。希望在未来的日子里，我们能共同努力，将 Apache Answer 打造成更好的问答社区平台，同时能成为更多开发者成长的舞台！