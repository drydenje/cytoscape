/* 
Notes:
  ENDPOINT and ACCESS_TOKEN are defined in .env file

Usage:
  import FetchGraphQL from '@/data/FetchGraphQL';

  export default async function Home() {
    const { crewCollection } = await FetchGraphQL(query);
    const crew = crewCollection.items;
  }

  const query = `query {
    crewCollection {
      items {
        name
        role
        bio
      }
    }
  }`;

*/

const FetchGraphQL = async (
  query: string,
  host = process.env.ENDPOINT as string,
  token = process.env.ACCESS_TOKEN as string
) => {
  const opts = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  const results = await fetch(host, opts)
    .then((res) => res.json())
    .catch(console.error)
  return results.data
}

export default FetchGraphQL
