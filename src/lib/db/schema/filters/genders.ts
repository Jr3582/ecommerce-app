import { pgTable, text, varchar, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const genders = pgTable('genders', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  label: varchar('label', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
});

export type SelectGender = {
  id: string;
  label: string;
  slug: string;
};

import { z } from 'zod';

export const insertGenderSchema = z.object({
  label: z.string().min(1),
  slug: z.string().min(1),
});
export type InsertGender = z.infer<typeof insertGenderSchema>;
