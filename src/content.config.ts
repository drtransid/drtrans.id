import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const area = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/area' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    highlight: z.string().optional(),
    description: z.string(),
    targetLocation: z.string(),
    category: z.string(),
    priceFrom: z.string(),
    deliveryInfo: z.string(),
    services: z.array(z.string()),
    tint: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { area };
