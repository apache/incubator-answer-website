const blogPluginExports = require("@docusaurus/plugin-content-blog");
const utils = require("@docusaurus/utils");
const loadsh = require('lodash');

const defaultBlogPlugin = blogPluginExports.default;

// get recommend post list
function getRecommendList ({
  blogPosts, // all posts data
}) {
  let result =  blogPosts.filter((post) => Number(post.metadata?.frontMatter.recommend) > 0).slice(0, 5)?.map((post) => {
    return {
      ...post.metadata?.frontMatter,
      tags: post.metadata.tags,
      permalink: post.metadata.permalink,
    }
  });
  result = loadsh.sortBy(result, ['recommend']).reverse();

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

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);
  const { postsPerPage } = pluginArgs[1];

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
          blogListPaginated,
      } = blogContents;

      console.log('blogTagsListPath',blogListPaginated, blogTagsListPath);

      // Blog Home page
      const recommendPosts = getRecommendList({blogPosts: allBlogPosts});
      const recommendPostsJson = await actions.createData(
        `${utils.docuHash('recommendPosts')}.json`,
        JSON.stringify(recommendPosts, null, 2)
      );

      // Tags list
      const tags = getAllTags(blogTags);
      const tagsJson = await actions.createData(
        `${utils.docuHash('tags')}.json`,
        JSON.stringify(tags, null, 2)
      );

      const homePaginatedJson = await actions.createData(
        `${utils.docuHash('home-page')}.json`,
          JSON.stringify({
            previousPage: undefined,
            nextPage: blogListPaginated.length > 1 ? '/blog/page/2' : ''},
            null, 2
          )
      );

      actions.addRoute({
        // Add route for the home page
        path: "/blog",
        exact: true,

        // The component to use for the "Home" page route
        component:  "@site/src/components/BlogHome",

        // These are the props that will be passed to our "Home" page component
        modules: {
          recommendPosts: recommendPostsJson,
          tagsList: tagsJson,
          pagenation: homePaginatedJson,
          blogList: allBlogPosts.filter(v=> !v.metadata?.frontMatter.recommend).slice(0, postsPerPage).map((post) => ({
            content: {
              __import: true,
              // The markdown file for the blog post will be loaded by webpack
              path: post.metadata.source,
              query: {
                truncated: true,
              },
            },
          })),
        },
      });

      // Call the default overridden `contentLoaded` implementation
      // return blogPluginInstance.contentLoaded({blogContents, actions});
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
