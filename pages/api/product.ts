// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../entities/product";
import { EcomFactory, EcomType } from "../../factories/ecom.factory";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | Record<string, any>>
) {
  try {
    let ecomAdapter = EcomFactory.create(req.query["platform"] as EcomType);
    const proudct = await ecomAdapter.findOne(req.query);
    res.status(200).json(proudct);
  } catch (error) {
    res.status(400).json({ isError: true });
  }
}
