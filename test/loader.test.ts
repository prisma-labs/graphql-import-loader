import compiler from './compiler'

const simple = `module.exports = \`type Simple {
  id: ID!
  value: String
}
\``

const complex = `module.exports = \`type Complex {
  id: ID!
  a: A!
  b: B!
  c: C!
  d: D!
}

type A {
  id: ID!
  valueA: String
}

type B {
  id: ID!
  valueB: String
}

type C {
  id: ID!
  valueC: String
}

type D {
  id: ID!
  valueD: String
}
\``

const fixtures = {
  'simple.graphql': simple,
  'complex.graphql': complex,
}

Object.keys(fixtures).forEach(fixture => {
  test(`Fixture: ${fixture}`, async () => {
    const stats = await compiler(fixture)
    const output = stats.toJson().modules[0].source
    expect(output).toBe(fixtures[fixture])
  })
})
