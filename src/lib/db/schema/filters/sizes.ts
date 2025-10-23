import { pgTable, text, varchar, uuid, integer } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const sizes = pgTable('sizes', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  slug: varchar('slug', { length: 50 }).notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
});

export type SelectSize = {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
};

import { z } from 'zod';

export const insertSizeSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  sortOrder: z.number().int().optional(),
});
export type InsertSize = z.infer<typeof insertSizeSchema>;
