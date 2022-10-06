import { Product } from "../entities/product";

export interface EcomAdapter {
  findOne(query: Record<string, any>): Promise<Product>;
}
