import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const carsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/cars" }),
  schema: z.object({
    id_tag: z.string(),
    name: z.string(),
    short_desc: z.string(),
    category: z.string(),
    subsystems: z.record(z.string(), z.string()),
    stats: z.record(z.string(), z.string())
  }),
});

export const collections = {
  'cars': carsCollection,
};