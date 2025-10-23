import { pgTable, text, timestamp, varchar, uuid, boolean } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const products = pgTable('products', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 512 }).notNull(),
  description: text('description'),
  brandId: uuid('brand_id'),
  categoryId: uuid('category_id'),
  genderId: uuid('gender_id'),
  isPublished: boolean('is_published').default(true).notNull(),
  defaultVariantId: uuid('default_variant_id'),
  createdAt: timestamp('created_at').notNull().default(sql`now()`),
  updatedAt: timestamp('updated_at').notNull().default(sql`now()`),
});

export type SelectProduct = {
  id: string;
  name: string;
  description?: string | null;
  brandId?: string | null;
  categoryId?: string | null;
  genderId?: string | null;
  isPublished: boolean;
  defaultVariantId?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

import { z } from 'zod';

export const insertProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional().nullable(),
  brandId: z.string().uuid().optional().nullable(),
  categoryId: z.string().uuid().optional().nullable(),
  genderId: z.string().uuid().optional().nullable(),
  isPublished: z.boolean().optional(),
});
export type InsertProduct = z.infer<typeof insertProductSchema>;
