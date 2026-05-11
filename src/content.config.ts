import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    tools: z.array(z.string()),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects };
