---
slug: /how-to-release
---

# 如何发布

所有 Apache 项目都必须遵循 [Apache Release Policy](https://www.apache.org/legal/release-policy.html) 。本文可以帮助你了解政策以及如何在 Apache 上发布项目。

## 发布过程

1. 准备所有发布物料。
2. 将发布物料上传到 svn 存储库。
3. 验证发布物料。
4. 对发布进行投票。
5. 宣布投票结果并发布。

## 准备所有发布物料

1. 在 git 存储库中创建带有 RC 的标签，并编写发布说明。
2. 建立发布物料（二进制包、源码等）。
3. 创建签名。
4. 创建校验和。

### 签署发布物料

1. 如果你没有 GPG 密钥，创建一个 GPG 密钥。
2. 将 GPG 密钥添加到 KEYS 文件中。
3. 使用 GPG 密钥签署发布物料。**仔细检查二进制文件是否完整，以避免大小为0。**

```shell
# create a GPG key, after executing this command, select the first one RSA 和 RSA
$ gpg --full-generate-key

# list the GPG keys
$ gpg  --keyid-format SHORT --list-keys

# upload the GPG key to the key server, xxx is the GPG key id
# eg: pub rsa4096/4C21E346 2024-05-06 [SC], 4C21E346 is the GPG key id;
$ gpg --keyserver keyserver.ubuntu.com --send-key xxx

# append the GPG key to the KEYS file the svn repository
# [IMPORTANT] Don't replace the KEYS file, just append the GPG key to the KEYS file. 
$ svn co https://dist.apache.org/repos/dist/release/incubator/answer/
$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS 
$ svn ci -m "add gpg key" 

# sign the release artifacts, xxxx is xxx@apache.org
$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done
```

### 为发布的物料创建校验和

```shell
# create the checksums
$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done
```

## 将发布物料上传到 svn 存储库

1. 在 svn 存储库中为发布物料创建一个目录。
2. 将发布物料上传到 svn 存储库。
3. 发布版本格式：1.3.1-incubating

发布物料应上传到 `https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}`目录。


```shell
$ svn co https://dist.apache.org/repos/dist/dev/incubator/answer/
$ cp /path/to/release/artifacts/* ./{release-version}/
$ svn add ./{release-version}/*
$ svn commit -m "add Apache Answer release artifacts for {release-version}"
```

**重要！**完成后，请访问链接 `https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}` 检查文件上传是否正确。

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
# download KEYS
$ curl https://dist.apache.org/repos/dist/release/incubator/answer/KEYS > KEYS

# import KEYS and trust the key, please replace the email address with the one you want to trust.
$ gpg --import KEYS
$ gpg --edit-key linkinstar@apache.org
gpg> trust
gpg> 5
gpg> y
gpg> quit

# enter the directory where the release artifacts are located
$ cd /path/to/release/artifacts

# verify the signature
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done

# if you see 'Good signature' in the output, it means the signature is valid.
```

### 如何验证校验和

```shell
# verify the checksums
$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done
```

## 对发布进行投票

1. 发送投票电子邮件至dev@answer.apache.org。孵化器项目需要首先在 dev list 进行投票，该投票需要**Apache Answer PPMC members成员至少3个+1票**。
2. 等待**至少72小时**直到达到必要的票数。
3. 在 dev list 上宣布投票结果。
4. 如果 dev 投票通过，请发送电子邮件至 general@incubator.apache.org ，要求在 general 上投票。孵化器项目投票需要**Incubator PMC members 至少3个+1票**（具有约束力的投票）。
5. 等待**至少72小**或直到达到必要的票数。
6. 在 general list 上宣布投票结果。

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

例如，如果你想发布 `1.2.0` 版本，则需要创建一个名为 `v1.2.0-RC1` 的标签。RC 的意思是候选。发布投票通过后，你需要根据RC标签创建一个名为 `v1.2.0-RC2` 的新标签。但是，如果投票未通过，你可以解决问题，并创建一个新的RC标签，如 `v1.2.0-RC2`，然后开始新的投票。
