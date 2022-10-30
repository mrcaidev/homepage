/// <reference types="astro/client" />

interface Page<T = any> {
  data: T[];
  start: number;
  end: number;
  total: number;
  currentPage: number;
  size: number;
  lastPage: number;
  url: {
    current: string;
    prev: string | undefined;
    next: string | undefined;
  };
}

interface Frontmatter {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  layout: string;
}

type DeeplyNonNullable<T> = T extends object
  ? {
      [K in keyof T]: DeeplyNonNullable<T[K]>;
    }
  : NonNullable<T>;
