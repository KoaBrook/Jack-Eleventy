const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
		templateFormats: [
			"md",
			"css",
			"svg",
			"png",
      "njk",
      "ttf",
		],
		passthroughFileCopy: true,
	};
};
