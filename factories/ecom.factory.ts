import { EcomAdapter } from "../adapters/ecom.adapter";
import { HaravanAdapter } from "../adapters/haravan.adapter";
import { SapoAdapter } from "../adapters/sapo.adapter";

export type EcomType = "Haravan" | "Sapo";

export class EcomFactory {
  static create(type: EcomType): EcomAdapter {
    switch (type) {
      case "Haravan":
        return new HaravanAdapter();
      case "Sapo":
        return new SapoAdapter();
      default:
        throw new Error("Adapter not supported");
    }
  }
}
