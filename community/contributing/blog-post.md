---
sidebar_label: Blog Post
slug: /blog-post
---

# Contribute a Blog Post

Blogs are one of the easiest ways to [get involved](/community/contributing#get-involved) in Apache Answer. It is also a great way to share your knowledge and experience with others.

If you've used Apache Answer to build your own Q&A community, or if Apache Answer has helped you solve a problem, we'd love to hear your story. We also encourage you to share tips and tricks for using Apache Answer, or to write about how to contribute to the project.

To get started, just read our blog guidelines and get writing!

## Repository address

- [GitHub](https://github.com/apache/incubator-answer-website): Write and store blog posts.
- [Crowdin](https://crowdin.com/project/answer-website): Translate blog posts into multiple languages to make them more accessible to a wider audience.

## Blog directory

Blogs are currently available in two languages: English (default) and Chinese. If you're submitting a Chinese blog, you need to manually copy it to the /blog directory to prevent compilation errors. If you're only submitting English blogs, you don't need to do anything else.

- English blogs: `/blog`
- Chinese blogs: `/i18n/docusaurus-plugin-content-blog`

We've integrated with Crowdin, which automatically syncs files that need to be translated. This makes it easier for community contributors to get involved in the translation.

## Blog categories

Our current blog categories are:

- Community
- Best Practices
- Tutorials
- Insights
- Releases
- Tech

Besides submitting a new blog, you can also help maintain existing blog content by identifying and correcting any incorrect or unclear language, or updating the content to reflect the latest information.

## Submit a blog

### Environment setup

The project preview and run depend on [node](https://nodejs.org) and [pnpm](https://pnpm.io). Please install them in advance.

### Add author information

All author information is stored in the following files:

- `/blog/authors.yml`
- `/i18n/docusaurus-plugin-content-blog/authors.yml`

You can add information to display about yourself in these files. Here’s an example:

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

### Process

1. Make sure to put the new blog documents in the correct path.

    - **For English blog**: Create a new Markdown file in the `/blog` directory.
    - **For Chinese blog**: Create a new Markdown file in the `/i18n/zh-CN/docusaurus-plugin-content-blog/` directory.

2. To ensure that the final article URL follows a format like `/blog/hello-world`, we've established the following naming convention for each article file:

    - **Plain Text**
      - Directly create a file named `2023-06-01-hello-world.md` in the `/blog` directory.
    - **Rich Text**
      - Create a directory named `/2023-06-01-foo-bar` in the `/blog` directory.
      - Create an `index.md` file inside the `/2023-06-01-foo-bar` directory.
      - Images and other multimedia content should also be placed within this directory.

    To maintain semantic and unique article URLs, we recommend using the blog's title after the date when naming files or folders. Convert the title to lowercase and connect the words with hyphens, and writing the converted lowercase letters to the metadata in the file.

    For instance, if the blog's title is `Hello World`, the file can be named `2023-06-01-hello-world`, writing `slug: hello-world`, This will generate the URL `/blog/hello-world`.

    ```shell
    blog
    ├── 2023-06-01-foo-bar  # Use directory for images.
    │   ├── index.md
    │   ├── sample.png
    │   └── ... 
    ├── 2023-06-01-hello-world.md  # Use file for plain text.
    └── ...
    ```

    To ensure file compatibility across platforms, please avoid using special characters `/ ? * : | \ < > & #` in file names.

3. Learn Markdown syntax in [Docusaurus Markdown](https://docusaurus.io/docs/markdown-features). If images are included, make sure the images and the blog are in the same directory .

    Apart from the standard metadata fields, we've also introduced some custom fields and their usage, such as "cover image" (image) and "featured post" (Featured).

    The cover image needs to adhere to our visual style guidelines, so you can focus on writing your blog post. Once submitted, we'll automatically generate a cover image based on your content.

    The "featured" field determines whether your blog post appears on the [Blog](/blog) homepage. To have your blog post featured, set the "featured" field to "true".

    Check the example below.

    ```yaml
    slug: the-what-why-using-tags-for-online-community
    title: The What, Why Using Tags for Online Community
    authors: [Anne]
    category: Insights // value reference in blog type
    featured: true
    image: 2023-07-11-cover@4x.png // Note: place it in the /static/img/blog directory.
    description: "Discover more about tags, benefits, and how vital they are for organizing content in online community."
    ```

4. Before submitting your code, please ensure that it runs error-free. You can check it by running the following commands.

    ```shell
    # Preview locally
    pnpm start  # to preview the Chinese docs, run pnpm start:zh)

    # Locally compile to ensure no errors before submitting
    pnpm build # no errors when display [SUCCESS] Generated static files in "build/zh-CN"
    ```

## Others

For code submitting, you may also need to learn [Git](https://git-scm.com/) and [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).
