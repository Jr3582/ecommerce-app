import { pgTable, text, timestamp, uuid, varchar, uniqueIndex } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const session = pgTable('session', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  userId: uuid('user_id').notNull(),
  token: varchar('token', { length: 512 }).notNull(),
  ipAddress: varchar('ip_address', { length: 45 }).default(''),
  userAgent: text('user_agent').default(''),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().default(sql`now()`),
  updatedAt: timestamp('updated_at').notNull().default(sql`now()`),
}, (t) => ({
  token_idx: uniqueIndex('session_token_idx').on(t.token),
}));
