---
sidebar_label: 发布博客
slug: /blog-post
---

# 贡献一篇博客文章

博客是[参与](/community/contributing#get-involved) Apache Answer 最简单的方法之一。这也是你与他人分享知识和使用经验的好方式。

如果你用 Apache Answer 构建了自己的问答社区，或者使用 Apache Answer 解决了问题，我们都想听听你的故事。我们还鼓励你分享使用 Apache Answer 的技巧和窍门，或分享你是如何为 Apache Answer 做出贡献的。

阅读我们的博客指南，准备贡献你的第一篇博客吧。

## 存储库（Repository）地址

- [GitHub](https://github.com/apache/incubator-answer-website): 编写和存储博客文章。
- [Crowdin](https://crowdin.com/project/answer-website): 将博客文章翻译成多种语言，以方便更多用户阅读。

## 博客目录

博客目前有两种语言版本：英语（默认）和中文。如果你要提交中文博客，你需要手动将其复制到 /blog 目录，以防止编译错误。如果你只提交英语博客，则无需其他操作。

- 英文博客： `/blog`
- 中文博客： `/i18n/docusaurus-plugin-content-blog`

我们集成了 Crowdin 平台，它会自动同步需要翻译的文件。这使得社区贡献者更容易参与翻译中来。

## 博客类别

我们当前的博客类别是：

- Community
- Best Practices
- Tutorials
- Insights
- Releases
- Tech

除了提交新博客外，你还可以通过以下方式帮助维护现有博客内容：纠正不准确和不清晰的表达，或者将博客里过时的信息进行更新。

## 提交博客

### 环境设置

项目预览和运行取决于 [node](https://nodejs.org) 和 [pnpm](https://pnpm.io) 。请提前安装好。

### 添加作者信息

所有作者信息都存储在以下文件中：

- `/blog/authors.yml`
- `/i18n/docusaurus-plugin-content-blog/authors.yml`

你可以在这些文件中添加有关自己的信息。这里有一个例子：

```yaml title="/blog/authors.yml"
Anne:
  name: Anne Zhu 
  title: Product Marketing Manager
  url: https://github.com/PrimmaAnna
  image_url: https://avatars.githubusercontent.com/u/131739771?v=4

# Use in the blog's frontMeta
---
authors: [Anne]  # separate with commas [Anne, others]
---
```

### 过程

1. 确保将新的博客文档放在正确的路径上。

    - **对于英语博客**: 在`/blog`目录中创建一个新的 Markdown 文件。
    - **对于中文博客**: 在`/i18n/zh-CN/docusaurus-plugin-content-blog/`目录中创建一个新的 Markdown 文件。

2. 为了确保最终文章 URL 遵循`/blog/hello-world`，我们为每个文章文件建立了以下命名约定：

    - **纯文本**
      - 在`/blog`目录中直接创建一个名为`hello-world.md`的文件。
    - **富文本**
      - 在`/blog`目录中创建一个名为`/foo-bar`的目录。
      - 在`/foo-bar`目录里创建一个`index.md`文件。
      - 图像和其他多媒体内容也应放置在此目录中。

   为了保持文章 URL 的语义和唯一性，我们建议在命名文件或文件夹时，使用博客标题并将标题转换为小写，并用连字符将单词连接起来。这样一来，您就无需担心页面上的 slug 字段。除非绝对必要，否则请避免指定 slug 字段。

    例如，如果博客的标题是`Hello World`，该文件可以命名为`hello-world`，这将生成 URL `/blog/hello-world`。

    ```shell
    blog
    ├── foo-bar  # Use directory for images.
    │   ├── index.md
    │   ├── sample.png
    │   └── ... 
    ├── hello-world.md  # Use file for plain text.
    └── ...
    ```

    为了确保跨平台的文件兼容性，避免在文件名中使用特殊字符`/ ? * : | \ < > & #`。

3. 在 [Docusaurus Markdown](https://docusaurus.io/docs/markdown-features) 中学习 Markdown 语法。如果包含图像，请确保图像和博客位于同一目录中。

    除了标准元数据字段外，我们还引入了一些自定义字段及其用法，例如 “封面图像”（image）和 “首页”（Featured）。

    封面图像需要遵守我们的视觉风格指南，以便你可以专注于撰写博客文章。提交后，我们将根据你的内容自动生成封面图片。

    “featured” 字段决定你的博客文章是否出现在[博客](/blog)主页上。要突出你的博客文章，请将 “featured” 字段设置为 “true”。

    查看以下示例。

    ```yaml
    date: 2023-07-11
    title: The What, Why Using Tags for Online Community
    authors: [Anne]
    category: Insights // value reference in blog type
    featured: true
    image: 2023-07-11-cover@4x.png // Note: place it in the /static/img/blog directory.
    description: "Discover more about tags, benefits, and how vital they are for organizing content in online community."
    ```

4. 在提交代码之前，请确保运行误。你可以通过运行以下命令来检查它。

    ```shell
    # Preview locally
    pnpm start  # to preview the Chinese docs, run pnpm start:zh)

    # Locally compile to ensure no errors before submitting
    pnpm build # no errors when display [SUCCESS] Generated static files in "build/zh-CN"
    ```

## 其他

代码提交部分，你可以查看 [Git](https://git-scm.com/) 和[拉取请求](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)。
