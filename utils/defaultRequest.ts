import { gql } from "./gql";

const defaultRequest = async <T>(query: string): Promise<T> => {
  return (
    await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.NEXT_PUBLIC_ADMIN_API_ACCESS_TOKEN!,
      },
      body: JSON.stringify({
        query: gql`
          ${query}
        `,
      }),
    })
  ).json() as T;
};

export default defaultRequest;
