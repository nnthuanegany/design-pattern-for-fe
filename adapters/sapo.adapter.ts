import { Product } from "../entities/product";
import { EcomAdapter } from "./ecom.adapter";
import { sapoProductData } from "../data/sapo.product";

export class SapoAdapter implements EcomAdapter {
  async findOne(query: Record<string, any>): Promise<Product> {
    console.log("[Sapo Adapter] Query a product");
    // Implement logic to get product from Haravan.
    const productFromSapo = sapoProductData;
    // Convert product of Haravan to standard entity
    const product = new Product({
      name: productFromSapo.name,
      slug: productFromSapo.alias,
      platfrom: "Sapo",
    });

    return product;
  }
}
