import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import CartContextProvider from "@/context/CartContext";
import type { Metadata } from "next";
import localFont from "next/font/local";

const BB = localFont({
  src: [
    { path: "../public/BB-Regular.woff2", weight: "400" },
    { path: "../public/BB-CondBold.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--BB",
});

export const metadata: Metadata = {
  title: "Baggashe",
  description: "Baggashe",
};

// const createCart = async (options: ICreateCartMutationOptions) => {
//   const { data, errors } = await client.request(
//     `#graphql
//     mutation CreateCart {
//       cartCreate(input: {}) {
//         cart {
//           id
//           totalQuantity
//           cost {
//             ...CartCostFragment
//           }
//           lines(first: 10) {
//             ...BaseCartLineConnectionFragment
//           }
//         }
//       }
//     }

//     fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
//       edges {
//         node {
//           merchandise {
//             ... on ProductVariant {
//               id
//               image {
//                 id
//                 url
//               }
//               title
//               price {
//                 amount
//                 currencyCode
//               }
//               selectedOptions {
//                 name
//                 value
//               }
//               product {
//                 handle
//                 title
//               }
//             }
//           }
//           id
//           quantity
//         }
//       }
//     }

//     fragment CartCostFragment on CartCost {
//       subtotalAmount {
//         amount
//         currencyCode
//       }
//       totalAmount {
//         amount
//         currencyCode
//       }
//       totalTaxAmount {
//         amount
//         currencyCode
//       }
//       totalDutyAmount {
//         amount
//         currencyCode
//       }
//     }`,
//   );

//   if (errors || !data?.cartCreate?.cart?.id) {
//     throw new Error(errors?.message);
//   }

//   this.setCartId(data.cartCreate.cart?.id);

//   return (data as CreateCartMutation).cartCreate?.cart;
// };

// const getCart = async () => {
//   const id = this.getCartId();
//   if (!id) return;
//   const { data, errors } = await client.request(
//     `#graphql
//     query Cart {
//       cart(
//         id: "${id}"
//       ) {
//         cost {
//           ...CartCostFragment
//         }
//         id
//         lines(first: 10) {
//           ...BaseCartLineConnectionFragment
//         }
//         totalQuantity
//       }
//     }

//     fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
//       edges {
//         node {
//           merchandise {
//             ... on ProductVariant {
//               id
//               image {
//                 id
//                 url
//               }
//               title
//               price {
//                 amount
//                 currencyCode
//               }
//               selectedOptions {
//                 name
//                 value
//               }
//               product {
//                 handle
//                 title
//               }
//             }
//           }
//           id
//           quantity
//         }
//       }
//     }

//     fragment CartCostFragment on CartCost {
//       subtotalAmount {
//         amount
//         currencyCode
//       }
//       totalAmount {
//         amount
//         currencyCode
//       }
//       totalTaxAmount {
//         amount
//         currencyCode
//       }
//       totalDutyAmount {
//         amount
//         currencyCode
//       }
//     }`,
//   );

//   if (errors || !data?.cart?.id) {
//     throw new Error(errors?.message);
//   }

//   this.setCartId(data.cart.id);

//   return (data as CartQuery).cart;
// };

// const addToCart = async (variantId: string) => {
//   const id = this.getCartId();
//   if (!id) return;

//   const { data, errors } = await client.request(
//     `#graphql
//     mutation AddToCart {
//       cartLinesAdd(
//         cartId: "${id}"
//         lines: {merchandiseId: "${variantId}", quantity: 1}
//       ) {
//         cart {
//           cost {
//             ...CartCostFragment
//           }
//           id
//           lines(first: 10) {
//             ...BaseCartLineConnectionFragment
//           }
//           totalQuantity
//         }
//       }
//     }

//     fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
//       edges {
//         node {
//           merchandise {
//             ... on ProductVariant {
//               id
//               image {
//                 id
//                 url
//               }
//               title
//               price {
//                 amount
//                 currencyCode
//               }
//               selectedOptions {
//                 name
//                 value
//               }
//               product {
//                 handle
//                 title
//               }
//             }
//           }
//           id
//           quantity
//         }
//       }
//     }

//     fragment CartCostFragment on CartCost {
//       subtotalAmount {
//         amount
//         currencyCode
//       }
//       totalAmount {
//         amount
//         currencyCode
//       }
//       totalTaxAmount {
//         amount
//         currencyCode
//       }
//       totalDutyAmount {
//         amount
//         currencyCode
//       }
//     }`,
//   );
//   if (errors || !data?.cartLinesAdd?.cart?.id) {
//     throw new Error(errors?.message);
//   }

//   this.setCartId(data.cartLinesAdd?.cart?.id);

//   return (data as AddToCartMutation).cartLinesAdd?.cart;
// };

// const removeFromCart = async (lineId: string) => {
//   const id = this.getCartId();
//   if (!id) return;

//   const { data, errors } = await client.request(
//     `#graphql
//     mutation RemoveFromCart {
//       cartLinesRemove(
//         cartId: "${id}"
//         lineIds: "${lineId}"
//       ) {
//         cart {
//           cost {
//             ...CartCostFragment
//           }
//           id
//           lines(first: 10) {
//             ...BaseCartLineConnectionFragment
//           }
//           totalQuantity
//         }
//       }
//     }

//     fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
//       edges {
//         node {
//           merchandise {
//             ... on ProductVariant {
//               id
//               image {
//                 id
//                 url
//               }
//               title
//               price {
//                 amount
//                 currencyCode
//               }
//               selectedOptions {
//                 name
//                 value
//               }
//               product {
//                 handle
//                 title
//               }
//             }
//           }
//           id
//           quantity
//         }
//       }
//     }

//     fragment CartCostFragment on CartCost {
//       subtotalAmount {
//         amount
//         currencyCode
//       }
//       totalAmount {
//         amount
//         currencyCode
//       }
//       totalTaxAmount {
//         amount
//         currencyCode
//       }
//       totalDutyAmount {
//         amount
//         currencyCode
//       }
//     }`,
//   );
//   if (errors || !data?.cartLinesRemove?.cart?.id) {
//     throw new Error(errors?.message);
//   }

//   this.setCartId(data.cartLinesRemove?.cart?.id);

//   return (data as RemoveFromCartMutation).cartLinesRemove?.cart;
// };

// const updateProductQuantity = async (quantity: number, lineId: string) => {
//   const id = this.getCartId();
//   if (!id) return;

//   const { data, errors } = await client.request(
//     `#graphql
//     mutation UpdateProductQuantity {
//       cartLinesUpdate(
//         cartId: "gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSE41SzhSVjFFS1A0U0NCUkExOEg4QTFO"
//         lines: {id: "gid://shopify/CartLine/0d09e17b-fdc2-4517-9e73-2799f943983b?cart=Z2NwLXVzLWNlbnRyYWwxOjAxSE41SzhSVjFFS1A0U0NCUkExOEg4QTFO", quantity: 10}
//       ) {
//         cart {
//           cost {
//             ...CartCostFragment
//           }
//           id
//           lines(first: 10) {
//             ...BaseCartLineConnectionFragment
//           }
//           totalQuantity
//         }
//       }
//     }

//     fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
//       edges {
//         node {
//           merchandise {
//             ... on ProductVariant {
//               id
//               image {
//                 id
//                 url
//               }
//               title
//               price {
//                 amount
//                 currencyCode
//               }
//               selectedOptions {
//                 name
//                 value
//               }
//               product {
//                 handle
//                 title
//               }
//             }
//           }
//           id
//           quantity
//         }
//       }
//     }

//     fragment CartCostFragment on CartCost {
//       subtotalAmount {
//         amount
//         currencyCode
//       }
//       totalAmount {
//         amount
//         currencyCode
//       }
//       totalTaxAmount {
//         amount
//         currencyCode
//       }
//       totalDutyAmount {
//         amount
//         currencyCode
//       }
//     }`,
//   );

//   if (errors || !data?.cartLinesUpdate?.cart?.id) {
//     throw new Error(errors?.message);
//   }

//   this.setCartId(data.cartLinesUpdate?.cart?.id);

//   return (data as UpdateProductQuantityMutation).cartLinesUpdate?.cart;
// };

// const getCollection = async (handle: string | null | undefined) => {
//   const { data, errors } = await client.request(
//     `#graphql
//       query Collection {
//         collection(handle: "asdasd") {
//           handle
//           descriptionHtml
//           image {
//             id
//             url
//           }
//           products(first: 12) {
//             ...ProductConnectionFragment
//             pageInfo {
//               hasNextPage
//             }
//           }
//         }
//       }

//       fragment ProductConnectionFragment on ProductConnection {
//         edges {
//           node {
//             title
//             images(first: 10) {
//               nodes {
//                 id
//                 url
//               }
//             }
//             id
//             priceRange {
//               minVariantPrice {
//                 amount
//                 currencyCode
//               }
//             }
//             handle
//             options {
//               name
//               values
//             }
//           }
//           cursor
//         }
//         pageInfo {
//           hasNextPage
//         }
//       }`,
//   );

//   if (errors) throw new Error(errors.message);

//   return data as CollectionQuery;
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${BB.className} overflow-x-hidden`}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
