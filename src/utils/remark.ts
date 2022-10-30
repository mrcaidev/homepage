import type { RemarkPlugins } from "astro";
import { toString } from "mdast-util-to-string";
import readingTime from "reading-time";

type Plugin = RemarkPlugins[number];

export const injectFrontmatter: Plugin = () => {
  return (tree, { data }) => {
    const { text } = readingTime(toString(tree));
    (data.astro as any).frontmatter.readingTime = text;
    (data.astro as any).frontmatter.layout = "layouts/PostPage.astro";
  };
};
