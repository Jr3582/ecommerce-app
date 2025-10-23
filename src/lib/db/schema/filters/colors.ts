import { pgTable, text, varchar, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const colors = pgTable('colors', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull(),
  hexCode: varchar('hex_code', { length: 7 }),
});

export type SelectColor = {
  id: string;
  name: string;
  slug: string;
  hexCode?: string | null;
};

import { z } from 'zod';

export const insertColorSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  hexCode: z.string().optional().nullable(),
});
export type InsertColor = z.infer<typeof insertColorSchema>;
