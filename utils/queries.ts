import { IProducts } from "@/typings/products.type";
import defaultRequest from "./defaultRequest";

class Queries {
  public static async getProducts(quantity: number): Promise<IProducts> {
    return defaultRequest<IProducts>(`
    query ProductsQuery {
      products(first: 20) {
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
        }
        edges {
          node {
            id
          }
        }
      }
    }
        `);
  }
}

export default Queries;
