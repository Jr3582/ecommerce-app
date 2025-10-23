import { pgTable, text, timestamp, uuid, decimal, integer, boolean } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const productVariants = pgTable('product_variants', {
  id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
  productId: uuid('product_id').notNull(),
  sku: text('sku'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  salePrice: decimal('sale_price', { precision: 10, scale: 2 }),
  colorId: uuid('color_id'),
  sizeId: uuid('size_id'),
  inStock: integer('in_stock').default(0).notNull(),
  createdAt: timestamp('created_at').notNull().default(sql`now()`),
});

export type SelectVariant = {
  id: string;
  productId: string;
  sku?: string | null;
  price: string;
  salePrice?: string | null;
  colorId?: string | null;
  sizeId?: string | null;
  inStock: number;
  createdAt: Date;
};
