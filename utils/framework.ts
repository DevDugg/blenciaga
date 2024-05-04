import Client from "shopify-buy";

export const client = Client.buildClient({
  domain: "http://bagashe.myshopify.com",
  apiVersion: "2024-01",
  storefrontAccessToken: process.env["NEXT_PUBLIC_STOREFRONT_API_ACCESS_TOKEN"]!,
});
