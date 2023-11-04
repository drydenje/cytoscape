import { getFlyingSuperheros } from './serialize-snapshots'

test('returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperheros()
  expect(flyingHeros).toMatchInlineSnapshot(`
[
  {
    "name": "Dynaguy",
    "powers": [
      "disintegration ray",
      "fly",
    ],
  },
  {
    "name": "Apogee",
    "powers": [
      "gravity control",
      "fly",
    ],
  },
]
`)
})
