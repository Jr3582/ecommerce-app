import { pgTable, text, varchar, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const brands = pgTable('brands', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  logoUrl: text('logo_url'),
  createdAt: text('created_at'),
});

export type SelectBrand = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string | null;
};

import { z } from 'zod';

export const insertBrandSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  logoUrl: z.string().optional().nullable(),
});
export type InsertBrand = z.infer<typeof insertBrandSchema>;
