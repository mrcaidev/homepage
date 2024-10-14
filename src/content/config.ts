import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
