import { Product } from "../entities/product";
import { EcomAdapter } from "./ecom.adapter";
import { haravanProductData } from "../data/haravan.product";

export class HaravanAdapter implements EcomAdapter {
  async findOne(query: Record<string, any>): Promise<Product> {
    console.log("[Haravan Adapter] Query a product");
    // Implement logic to get product from Haravan.
    const productFromHaravan = haravanProductData;
    // Convert product of Haravan to standard entity
    const product = new Product({
      name: productFromHaravan.title,
      slug: productFromHaravan.handle,
      platfrom: "Haravan",
    });

    return product;
  }
}
