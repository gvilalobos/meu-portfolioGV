import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  // Nova funcionalidade do Astro 5: indicar a pasta exata dos projetos
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects: projectsCollection,
};