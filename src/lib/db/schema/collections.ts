import { pgTable, text, varchar, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { z } from 'zod';

export const collections = pgTable('collections', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  createdAt: text('created_at'),
});

export const insertCollectionSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
});
export type InsertCollection = z.infer<typeof insertCollectionSchema>;
