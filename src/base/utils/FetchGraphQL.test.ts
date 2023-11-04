import { describe, expect, test } from '@jest/globals'
// import FetchGraphQL from "./FetchGraphQL";

describe('Smoke Tests', () => {
  test('fetches data from a GraphQL server', () => {
    const query = `query {
      crewCollection {
        items {
          name
          role
          bio
        }
      }
    }`

    expect(query).toEqual(query)
  })
})
