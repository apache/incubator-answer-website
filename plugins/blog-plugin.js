const path = require("path");
const blogPluginExports = require("@docusaurus/plugin-content-blog");
const utils = require("@docusaurus/utils");

const defaultBlogPlugin = blogPluginExports.default;

// get recommend post list
function getRecommendList ({
  blogPosts, // all posts data
}) {
  const result =  blogPosts.filter((post) => post.metadata?.frontMatter.featured).slice(0, 5)?.map((post) => {
    return {
      ...post.metadata?.frontMatter,
      tags: post.metadata.tags,
      permalink: post.metadata.permalink,
    }
  });

  return result;
}

function getAllTags(blogTags){
  const tagsProp = Object.values(blogTags).map((tag) => ({
    label: tag.label,
    permalink: tag.permalink,
    count: tag.items.length,
  }));
  return Array.from(new Set(tagsProp));
}

// paginate blog posts
function paginateBlogPosts({
  filtedBlogPosts,
  basePageUrl,
  blogTitle,
  blogDescription,
  postsPerPageOption,
}) {
  const totalCount = filtedBlogPosts.length;
  const postsPerPage =
    postsPerPageOption === "ALL" ? totalCount : postsPerPageOption;

  const numberOfPages = Math.ceil(totalCount / postsPerPage);

  const pages = [];

  function permalink(page) {
    return page > 0
      ? utils.normalizeUrl([basePageUrl, `page/${page + 1}`])
      : basePageUrl;
  }

  for (let page = 0; page < numberOfPages; page += 1) {
    pages.push({
      items: filtedBlogPosts
        .slice(page * postsPerPage, (page + 1) * postsPerPage)
        .map((item) => item.id),
      metadata: {
        permalink: permalink(page),
        page: page + 1,
        postsPerPage,
        totalPages: numberOfPages,
        totalCount,
        previousPage: page !== 0 ? permalink(page - 1) : '',
        nextPage:
          page < numberOfPages - 1 ? permalink(page + 1) : '',
        blogDescription,
        blogTitle,
      },
    });
  }

  return pages;
}

// related posts by tag
function getReletadPosts(allBlogPosts, metadata) {
  const relatedFourPosts = allBlogPosts.filter(
    (post) =>
      post.metadata.frontMatter.tags?.some((tag) =>
        metadata.frontMatter.tags?.includes(tag),
      ) && post.metadata.title !== metadata.title,
  ).slice(0, 4);

  const filteredPostInfos = relatedFourPosts.map((post) => {
    return {
      content: {
        frontMatter: {
          image: post.metadata.frontMatter.image,
        },
        metadata: post.metadata,
      }
    };
  });

  return filteredPostInfos;
}

const pluginDataDirRoot = path.join(
  ".docusaurus",
  "docusaurus-plugin-content-blog",
);
const aliasedSource = (source) =>
  `~blog/${utils.posixPath(path.relative(pluginDataDirRoot, source))}`;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);
  const { blogTitle, blogDescription, postsPerPage } = pluginArgs[1];

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    async contentLoaded(data) {
      // Get the 5 latest blog posts
      const { content: blogContents, actions } = data;
      const {
          blogPosts: allBlogPosts,
          blogTags,
          blogTagsListPath,
      } = blogContents;

      console.log('===========', blogTagsListPath)

      const { createData, addRoute } = actions;

      // Blog Home page

      // Recommend posts list
      const recommendPosts = getRecommendList({blogPosts: allBlogPosts});
      const recommendPostsJson = await createData(
        `${utils.docuHash('recommendPosts')}.json`,
        JSON.stringify(recommendPosts, null, 2)
      );

      // filted reommend posts
      const filtedBlogPosts = allBlogPosts.filter((post) => {
        return !recommendPosts.find((v) => v.permalink === post.metadata.permalink);
      });

      // Blog Home page pagenation
      const paginateBlogs = paginateBlogPosts({
        filtedBlogPosts,
        basePageUrl: "/blog",
        blogTitle,
        blogDescription,
        postsPerPageOption: postsPerPage,
      });

      // Tags list
      const tags = getAllTags(blogTags);
      const tagsJson = await createData(
        `${utils.docuHash('tags')}.json`,
        JSON.stringify(tags, null, 2)
      );


      const blogItemsToMetadata = {};
      function blogPostItemsModule(items) {
        return items.map((postId) => {
          const blogPostMetadata = blogItemsToMetadata[postId];

          return {
            content: {
              __import: true,
              path: blogPostMetadata.source,
              query: {
                truncated: true,
              },
            },
          };
        });
      }

      // Create routes for blog details page.
      await Promise.all(
        allBlogPosts.map(async (blogPostItem) => {
          const { id, metadata } = blogPostItem;

          const relatedPosts = getReletadPosts(
            allBlogPosts,
            metadata,
          );

          const relatedList = await createData(
            `realted-${utils.docuHash(id)}.json`,
            JSON.stringify(relatedPosts, null, 2),
          )

          addRoute({
            path: metadata.permalink,
            component: "@site/src/components/BlogDetailPage",
            exact: true,
            modules: {
              relatedList,
              content: metadata.source,
            },
          });

          blogItemsToMetadata[id] = metadata;
        }),
      );

      // Create routes for blog's paginated list entries.
      await Promise.all(
        paginateBlogs.map(async (listPage, index) => {
          const { metadata, items } = listPage;
          const { permalink } = metadata;

          const pageMetadataPath = await createData(
            `home-${utils.docuHash(permalink)}.json`,
            JSON.stringify(metadata, null, 2),
          );

          addRoute({
            path: permalink,
            exact: true,
            component:  "@site/src/components/BlogHome",
            modules: {
              recommendPosts: permalink === '/blog' ? recommendPostsJson : [],
              tagsList: tagsJson,
              blogList: blogPostItemsModule([...items]),
              metadata: pageMetadataPath,
            }
          })
        }),
      );

      // Create routes for blog tags post list entries.
      async function createTagPostsListPage(tag)  {
        await Promise.all(
          tag.pages.map(async (blogPaginated) => {
            const { metadata, items } = blogPaginated;
            const tagProp = {
              label: tag.label,
              permalink: tag.permalink,
              allTagsPath: blogTagsListPath,
              count: tag.items.length,
            };
            const tagPropPath = await createData(
              `${utils.docuHash(metadata.permalink)}.json`,
              JSON.stringify(tagProp, null, 2),
            );

            const listMetadataPath = await createData(
              `${utils.docuHash(metadata.permalink)}-list.json`,
              JSON.stringify(metadata, null, 2),
            );

            addRoute({
              path: metadata.permalink,
              component: "@site/src/components/BlogTagsPostsPage",
              exact: true,
              modules: {
                items: blogPostItemsModule(items),
                tag: aliasedSource(tagPropPath),
                tags: tagsJson,
                listMetadata: aliasedSource(listMetadataPath),
              },
            });
          }),
        );
      }
      await Promise.all(
        Object.values(blogTags).map(createTagPostsListPage),
      );

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded({content: blogContents, actions});
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
