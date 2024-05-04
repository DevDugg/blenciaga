import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const client = createStorefrontApiClient({
  storeDomain: "http://bagashe.myshopify.com",
  apiVersion: "2024-01",
  publicAccessToken: process.env["NEXT_PUBLIC_STOREFRONT_API_ACCESS_TOKEN"],
});

export default client;
