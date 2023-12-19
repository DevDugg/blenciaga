export interface IProducts {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  products: Products;
}

export interface Products {
  nodes: ProductsNode[];
}

export interface ProductsNode {
  title: string;
  images: Images;
  id: string;
  collections: Collections;
  priceRangeV2: PriceRangeV2;
}

export interface Collections {
  nodes: CollectionsNode[];
}

export interface CollectionsNode {
  id: string;
  handle: string;
  title: string;
}

export interface Images {
  nodes: ImagesNode[];
}

export interface ImagesNode {
  id: string;
  url: string;
}

export interface PriceRangeV2 {
  minVariantPrice: MinVariantPrice;
}

export interface MinVariantPrice {
  amount: string;
}

export interface Extensions {
  cost: Cost;
}

export interface Cost {
  requestedQueryCost: number;
  actualQueryCost: number;
  throttleStatus: ThrottleStatus;
}

export interface ThrottleStatus {
  maximumAvailable: number;
  currentlyAvailable: number;
  restoreRate: number;
}
