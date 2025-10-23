import { pgTable, text, timestamp, uuid, varchar, uniqueIndex } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const verification = pgTable('verification', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  identifier: varchar('identifier', { length: 320 }).notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().default(sql`now()`),
  updatedAt: timestamp('updated_at').notNull().default(sql`now()`),
}, (t) => ({
  identifier_idx: uniqueIndex('verification_identifier_idx').on(t.identifier),
}));
