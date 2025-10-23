import { pgTable, text, varchar, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const categories = pgTable('categories', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  parentId: uuid('parent_id'),
  createdAt: text('created_at'),
});

export type SelectCategory = {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null;
};

import { z } from 'zod';

export const insertCategorySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  parentId: z.string().uuid().optional().nullable(),
});
export type InsertCategory = z.infer<typeof insertCategorySchema>;
