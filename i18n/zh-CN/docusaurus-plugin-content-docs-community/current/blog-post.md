---
sidebar_label: Blog Post
slug: /blog-post
---

# 贡献一篇博客文章

博客是[参与](/community/contributing#get-involved) Apache Answer 的最简单方法之一。这也是与他人分享你的知识和经验的好方法。

如果你用 Apache Answer 构建了自己的问答社区，或者 Apache Answer 帮助你解决了问题，我们很想听听你的故事。我们还鼓励你分享使用 Apache Answer 的技巧和窍门，或写下如何为项目做出贡献。

要开始，只需阅读我们的博客指南并开始写作！

## 存储库地址

- [GitHub](https://github.com/apache/incubator-answer-website): 撰写和存储博客文章。
- [Crowdin](https://crowdin.com/project/answer-website): 将博客文章翻译成多种语言，使更广泛的受众更容易访问。

## 博客目录

博客目前有两种语言版本：英语（默认）和中文。如果你要提交中文博客，你需要手动将其复制到 /blog 目录，以防止编译错误。如果你只提交英语博客，你不需要做其他任何事情。

- 英文博客： `/blog`
- 中文博客： `/i18n/docusaurus-plugin-content-blog`

我们与 Crowdin 集成，它会自动同步需要翻译的文件。这使得社区贡献者更容易参与翻译。

## 博客类别

我们当前的博客类别是：

- Community
- Best Practices
- Tutorials
- Insights
- Releases
- Tech

除了提交新博客外，还可以通过识别和纠正任何不正确或不清晰的语言，或更新内容以反映最新信息来帮助维护现有的博客内容。

## 提交博客

### 环境设置

项目预览和运行取决于 [node](https://nodejs.org) 和 [pnpm](https://pnpm.io) 。请提前安装好。

### 添加作者信息

所有作者信息都存储在以下文件中：

- `/blog/authors.yml`
- `/i18n/docusaurus-plugin-content-blog/authors.yml`

你可以在这些文件中添加有关自己的信息以显示。这里有一个例子：

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

2. 为了确保最终文章 URL 遵循`/blog/2023/06/01/hello-world`，我们为每个文章文件建立了以下命名约定：

    - **纯文本**
      - 在`/blog`目录中直接创建一个名为`2023-06-01-hello-world.md`的文件。
    - **富文本**
      - 在`/blog`目录中创建一个名为`/2023-06-01-foo-bar`的目录。
      - 在`/2023-06-01-foo-bar`目录里创建一个`index.md`文件。
      - 图像和其他多媒体内容也应放置在此目录中。

    为了保持语义和独特的文章 URL ，我们建议在命名文件或文件夹时在日期后使用博客标题。将标题转换为小写，并将单词与连字符连接起来。这消除了对页面上的弹头字段的担忧。除非绝对必要，否则避免指定弹头字段。

    例如，如果博客的标题是`Hello World`，该文件可以命名为`2023-06-01-hello-world`，这将生成 URL `/blog/2023-06-01/hello-world`。

    ```shell
    blog
    ├── 2023-06-01-foo-bar  # Use directory for images.
    │   ├── index.md
    │   ├── sample.png
    │   └── ... 
    ├── 2023-06-01-hello-world.md  # Use file for plain text.
    └── ...
    ```

    为了确保跨平台的文件兼容性，避免在文件名中使用特殊字符`/ ? * : | \ < > & #`。

3. 在 [Docusaurus Markdown](https://docusaurus.io/docs/markdown-features) 中学习 Markdown 语法。如果包含图像，请确保图像和博客位于同一目录中。

    除了标准元数据字段外，我们还引入了一些自定义字段及其用法，例如“封面图像”（图像）和“特色帖子”（特色）。

    封面图像需要遵守我们的视觉风格指南，以便你可以专注于撰写博客文章。提交后，我们将根据你的内容自动生成封面图片。

    “特色”字段决定你的博客文章是否出现在[博客](/blog)主页上。要突出你的博客文章，请将“特色”字段设置为“真实”。

    查看以下示例。

    ```yaml
    title: The What, Why Using Tags for Online Community
    authors: [Anne]
    category: Insights // value reference in blog type
    featured: true
    image: 2023-07-11-cover@4x.png // Note: place it in the /static/img/blog directory.
    description: "Discover more about tags, benefits, and how vital they are for organizing content in online community."
    ```

4. 在提交代码之前，请确保运行无错误。你可以通过运行以下命令来检查它。

    ```shell
    # Preview locally
    pnpm start  # to preview the Chinese docs, run pnpm start:zh)

    # Locally compile to ensure no errors before submitting
    pnpm build # no errors when display [SUCCESS] Generated static files in "build/zh-CN"
    ```

## 其他

对于代码提交，您可能还需要学习 [Git](https://git-scm.com/) 和[拉取请求](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)。
