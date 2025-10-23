import { pgTable, text, timestamp, uuid, varchar, uniqueIndex } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const guest = pgTable('guest', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  sessionToken: varchar('session_token', { length: 512 }).notNull(),
  createdAt: timestamp('created_at').notNull().default(sql`now()`),
  expiresAt: timestamp('expires_at').notNull(),
}, (t) => ({
  session_idx: uniqueIndex('guest_session_idx').on(t.sessionToken),
}));
