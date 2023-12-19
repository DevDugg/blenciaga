import { NextRequest, NextResponse } from "next/server";

import { IProducts } from "@/typings/products.type";
import defaultRequest from "@/utils/defaultRequest";

interface ISearch {
  quantity: string | null;
}

export async function GET(req: NextRequest, res: NextResponse) {
  const quantity: ISearch["quantity"] = new URL(req.url).searchParams.get("quantity") || "10";

  const query = `query ProductsQuery {
    products(first: ${quantity}) {
      nodes {
        title
        images(first: 5) {
          nodes {
            id
            url
          }
        }
        id
        collections(first: 1) {
          nodes {
            id
            handle
            title
          }
        }
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
      }
    }
  }`;

  try {
    const data = await defaultRequest<IProducts>(query);
    return NextResponse.json({
      data,
    });
  } catch (err) {
    console.log(err);
  }
}
