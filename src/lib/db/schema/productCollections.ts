import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const productCollections = pgTable('product_collections', {
  productId: uuid('product_id').notNull(),
  collectionId: uuid('collection_id').notNull(),
});
