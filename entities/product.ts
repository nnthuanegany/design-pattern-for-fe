import { Entity } from "./entity";

export class Product extends Entity {
  name!: string;
  slug!: string;
  platfrom!: "Haravan" | "Sapo" | "Shopify" | null;

  constructor(props: Record<string, any>) {
    super(props);
  }
}
