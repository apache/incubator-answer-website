---
slug: /how-to-release
---

# 如何发布

所有 Apache 项目都必须遵循 [Apache Release Policy](https://www.apache.org/legal/release-policy.html) 。本文可以帮助你了解政策以及如何在 Apache 上发布项目。

## 发布流程

1. 如果没有 GPG 密钥,请创建一个。
3. 将发布物料上传到 svn 仓库。
4. 验证发布物料。
5. 开始投票。
6. 宣布投票结果和发布。

## 创建 GPG 密钥

如果没有 GPG 密钥,请创建一个。您可以按照[这里](https://www.apache.org/dev/openpgp.html)的说明进行操作。

```shell
# 创建 GPG 密钥
$ gpg --full-generate-key

# 列出 GPG 密钥
$ gpg  --keyid-format SHORT --list-keys

# 将 GPG 密钥上传到密钥服务器,xxx 是 GPG 密钥 id
$ gpg --keyserver keyserver.ubuntu.com --send-key xxx

# 将 GPG 密钥附加到 svn 仓库中的 KEYS 文件
$ svn co https://dist.apache.org/repos/dist/release/incubator/answer/
$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS
$ svn ci -m "add gpg key" 
```

## 将发布物料上传到 svn 仓库

### 准备所有发布物料

1. 在 git 仓库中创建 RC 标签并编写发布说明。
   1. 注意 1: 请记住在点击"发布版本"之前选择"设置为预发布"。
   2. 注意 2: 发布说明应选择非分支的标签,例如 `v1.2.0-RC1`。
3. 构建发布物料(捆绑包、源代码归档等)。

### 签名发布物料

使用 GPG 密钥对发布物料进行签名。**请仔细检查二进制文件是否完整,避免出现大小为 0 的情况。**

```shell
# 签名发布物料,xxxx 是 xxx@apache.org
$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done
```

### 为发布物料创建校验和

```shell
# 创建校验和
$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done
```

### 上传到 svn 仓库
> **注意** 创建 GPG 密钥的仓库地址和上传发布物料的仓库地址不同。GPG 密钥上传到 `https://dist.apache.org/repos/dist/release/incubator/answer/` 仓库,而发布物料上传到 `https://dist.apache.org/repos/dist/dev/incubator/answer/` 仓库。

1. 在 svn 仓库中为发布物料创建一个目录。
   ```shell
   $ svn co https://dist.apache.org/repos/dist/dev/incubator/answer/
   ```
2. 将发布物料上传到 svn 仓库。
   ```shell
   $ cp /path/to/release/artifacts/* ./{release-version}/
   $ svn add ./{release-version}/*
   ```
3. release-version 格式: 1.3.1-incubating
   ```shell
   $ svn commit -m "add Apache Answer release artifacts for {release-version}"
   ```
发布物料应上传到 `https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}` 目录。

**重要** 完成后,请访问链接 `https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}` 检查文件上传是否正确。

![correct result](/img/community/release.jpeg)

## 验证发布物料

以下是发布物料的基本检查项。

- [ ] 下载链接是有效的。
- [ ] 校验和与 PGP 签名是有效的。
- [ ] 源代码发行版具有与当前版本匹配的正确名称。
- [ ] 许可证和通知文件对每个 Apache Answer repo 都是正确的。
- [ ] 如有必要，所有文件都有许可证标头。
- [ ] 源档案中没有捆绑未经许可的编译档案。

### 如何验证签名
```shell
# 下载 KEYS
$ curl https://dist.apache.org/repos/dist/release/incubator/answer/KEYS > KEYS

# 导入 KEYS 并信任密钥,请将电子邮件地址替换为您想要信任的地址。
$ gpg --import KEYS
$ gpg --edit-key linkinstar@apache.org
gpg> trust
gpg> 5
gpg> y
gpg> quit

# 进入发布物料所在的目录
$ cd /path/to/release/artifacts

# 验证签名
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done

# 如果在输出中看到"Good signature",则表示签名有效。
```

### 如何验证校验和
```shell
# 验证校验和
$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done
```

## 开始投票

1. 向 dev@answer.apache.org 发送投票邮件。孵化器需要先在他们的开发邮件列表上进行投票,该投票需要至少 **3 个来自 Apache Answer PPMC 成员的 +1**。
2. 等待**至少 72 小时**或直到达到必要的投票数。
3. 在开发邮件列表上宣布投票结果。
4. 如果开发投票通过,发送邮件到 general@incubator.apache.org 请求在通用邮件列表上进行投票。孵化器投票需要至少 **3 个来自孵化器 PMC 成员的 +1**   (有约束力的投票)。
5. 等待**至少 72 小时**或直到达到必要的投票数。
6. 在通用邮件列表上宣布投票结果。

### 投票电子邮件模板

**注意！**直接复制电子邮件内容将导致格式不正确。建议将电子邮件复制到 `.txt` 文件。写完内容后，将其复制到您正在使用的电子邮件工具中。在开发的第一轮投票中，不需要 `The vote tread` 和 `Vote Result` 。

如何获取投票的链接地址：
1. 从 Apache 邮件列表中找到你发送的电子邮件。
2. 单击电子邮件下方的链接按钮以获取你需要的链接地址。

![vote thread link](/img/community/vote-tread-link.jpeg)

```text
[VOTE] Release Apache Answer (Incubating) {release-version}

Hello,

    This is a call for vote to release Apache Answer (Incubating) version {release-version}.

    The vote thread:
        https://lists.apache.org/thread/{id}

    Vote Result:
        https://lists.apache.org/thread/{id}

    The release candidates:
        https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}/
    
    Release notes:
        https://github.com/apache/incubator-answer/releases/tag/{release-version}

    Git tag for the release:
        https://github.com/apache/incubator-answer/releases/tag/{release-version}
    
    Git commit id for the release:
        https://github.com/apache/incubator-answer/commit/{id}

    Keys to verify the Release Candidate:
        https://downloads.apache.org/incubator/answer/KEYS
        
    The vote will be open for at least 72 hours or until the necessary number of votes are reached.

    Please vote accordingly:

    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason

    Checklist for reference:

    [ ] Download links are valid.
    [ ] Checksums and PGP signatures are valid.
    [ ] Source code distributions have correct names matching the current release.
    [ ] LICENSE and NOTICE files are correct for each Apache Answer repo.
    [ ] All files have license headers if necessary.
    [ ] No unlicensed compiled archives bundled in source archive.

    To compile from the source, please refer to:
    
    https://github.com/apache/incubator-answer#building-from-source

Thanks,
<YOUR NAME>
```

### 宣布投票结果的电子邮件模板

```text
Hello everyone,

The Apache Answer (Incubating) {release-version} has been released!

Apache Answer is a Q&A platform software for teams at any scale.
Whether it's a community forum, help center, or knowledge management platform, you can always count on Apache Answer.

Download Links: https://downloads.apache.org/incubator/answer/

Release Notes: https://github.com/apache/incubator-answer/releases/tag/{release-version}

Website: https://answer.apache.org/

Resources:
- Issue: https://github.com/apache/incubator-answer/issues
- Mailing list: dev@answer.apache.org

Thanks,
<YOUR NAME>
```

## 将发布物料迁移到 Apache SVN release

在宣布投票结果之前，你需要将发布物料从 Apache SVN dev 迁移到 Apache SVN release。发布物料应上传到 `https://dist.apache.org/repos/dist/release/incubator/answer/{release-version}` 目录。

```shell
$ svn mv https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version} https://dist.apache.org/repos/dist/release/incubator/answer/{release-version} -m "transfer packages for answer {release-version}"
```

## 注意
### RC 标签
当你想发布新版本时，你需要先在 git 存储库中创建一个新的 RC 标签。标签名称应该是`v{release-version}-rc{rc-version}`。

例如，如果你想发布 `1.2.0` 版本，则需要创建一个名为 `v1.2.0-RC1` 的标签。RC 的意思是候选。发布投票通过后，你需要根据RC标签创建一个名为 `v1.2.0` 的新标签。但是，如果投票未通过，你可以解决问题，并创建一个新的RC标签，如 `v1.2.0-RC2`，然后开始新的投票。
