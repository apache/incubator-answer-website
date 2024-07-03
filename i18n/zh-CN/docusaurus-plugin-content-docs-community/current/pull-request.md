---
slug: /pull-request
---

# 拉取请求

我们感谢你抽出时间做出贡献！在提交拉取请求之前，我们要求你创建一个解释错误或功能请求的问题，并告诉我们你计划为它创建拉取请求。如果问题已经存在，请对该问题发表评论，让我们知道你想提交拉取请求。这有助于我们跟踪拉取请求，并确保没有重复的工作量。

## 语义化的提交消息

在提交消息时，遵循以下格式可以令你成为更好的程序员。

```txt
<type>(<scope>): <subject>
```

- `type`

  - `feat`: 一个新功能。
  - `fix`: 一个程序错误修复。
  - `docs`: 仅文档更改。
  - `style`: 不影响代码含义的更改（空白、格式、缺少分号等）。
  - `refactor`: 既不修复错误也不添加功能的代码更改。
  - `perf`: 提高性能的代码更改。
  - `test`: 添加缺失的测试。
  - `chore`: 对构建过程或辅助工具和库（如文档生成）的更改。

- `scope`

  - 范围可以是任何指定提交更改地点的东西。

- `subject`
  - 该主题包含对变化的简要描述。
  - 使用命令式、现在时： "change" 而不是 "changed" 也不是"changes"。
  - 首字母不要大写。
  - 不要在末尾放置`.`。
  - 提交消息的整个长度不得超过50个字符。
  - 描述提交的具体操作，而不是它涉及或修复的问题。
  - 简洁但具有描述性 - 通过阅读主题，我们应该能够清楚地理解提交的操作。
## 许可

通过向 Answer 做出贡献，你同意你的贡献将根据 Apache-2.0 许可证获得许可。将此复制并粘贴到新文件的顶部：

```go
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 ```

## 贡献者许可协议（CLA）

Apache CLA 是 Apache 贡献者许可协议的缩写，本协议的目的是明确定义知识产权向 ASF 贡献的条款，从而允许我们在未来某个时候在软件发生法律争议时为该项目辩护。在个人获得任何 ASF 项目的提交权之前，需要将已签名的 ICLA 存档。

对于由单个原始作者贡献的更大贡献，我们可能会要求你提交[个人贡献者许可协议（ICLA）](https://www.apache.org/licenses/contributor-agreements.html)表格。你的代码的版权仍将属于你，但 ICLA 有助于保护 Apache Answer 的用户。所有项目委员会也都签署了这份表格。

如果你已经签署了 Apache ICLA ，则无需发送电子邮件。由于你已经以你的公共名称提交了 ICLA ，因此无需重新提交。如果你从未签署过 ICLA ，请在电子邮件中注明，PMC可以直接申请此帐户。


## 开发和贡献

有关详细信息，请参阅[文档](/docs/development)。


