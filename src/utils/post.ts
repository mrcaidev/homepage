export interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
}

export interface Post extends Frontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export const mockPosts: Post[] = [
  {
    title: "Use Axios Interceptor with TypeScript",
    description:
      "It is a common practice to set an Axios response interceptor to directly retrieve res.data, but TypeScript's type checking knows nothing about it. How can we inform TypeScript of this change?",
    publishedAt: "2022/8/24",
    slug: "use-axios-interceptor-with-typescript",
    content: "Lorem ipsum",
    readingTime: "8 mins read",
  },
  {
    title: "Use Axios Interceptor with TypeScript",
    description:
      "It is a common practice to set an Axios response interceptor to directly retrieve res.data, but TypeScript's type checking knows nothing about it. How can we inform TypeScript of this change?",
    publishedAt: "2022/8/23",
    slug: "use-axios-interceptor-with-typescript",
    content: "Lorem ipsum",
    readingTime: "8 mins read",
  },
  {
    title: "Use Axios Interceptor with TypeScript",
    description:
      "It is a common practice to set an Axios response interceptor to directly retrieve res.data, but TypeScript's type checking knows nothing about it. How can we inform TypeScript of this change?",
    publishedAt: "2022/8/25",
    slug: "use-axios-interceptor-with-typescript",
    content: "Lorem ipsum",
    readingTime: "8 mins read",
  },
  {
    title: "Use Axios Interceptor with TypeScript",
    description:
      "It is a common practice to set an Axios response interceptor to directly retrieve res.data, but TypeScript's type checking knows nothing about it. How can we inform TypeScript of this change?",
    publishedAt: "2022/8/21",
    slug: "use-axios-interceptor-with-typescript",
    content: "Lorem ipsum",
    readingTime: "8 mins read",
  },
  {
    title: "Use Axios Interceptor with TypeScript",
    description:
      "It is a common practice to set an Axios response interceptor to directly retrieve res.data, but TypeScript's type checking knows nothing about it. How can we inform TypeScript of this change?",
    publishedAt: "2022/8/27",
    slug: "use-axios-interceptor-with-typescript",
    content: "Lorem ipsum",
    readingTime: "8 mins read",
  },
];
