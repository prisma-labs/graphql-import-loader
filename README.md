# graphql-import-loader

[![CircleCI](https://circleci.com/gh/graphcool/graphql-import-loader.svg?style=shield)](https://circleci.com/gh/graphcool/graphql-import-loader) [![npm version](https://badge.fury.io/js/graphql-import-loader.svg)](https://badge.fury.io/js/graphql-import-loader)


Webpack loader for [`graphql-import`](https://github.com/graphcool/graphql-import)

## Install

```console
yarn add --dev graphql-import-loader
```

## Usage

Resolve GraphQL file import statements with relative paths. See the tests for more details

```
.
├── src
│   ├── index.js
│   └── schema
│       ├── a.graphql
│       ├── b.graphql
│       ├── main.graphql
│       └── subdir
│           └── cd.graphql
└── webpack.config.js
```

```graphql
# import { A } from './a.graphql'
# import { B } from './b.graphql'
# import { C, D } from './subdir/cd.graphql'

type Complex  {
  id: ID!
  a: A!
  b: B!
  c: C!
  d: D!
}
```

```js
import typeDefs from './schema/main.graphql'
```

```js
// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: 'graphql-import-loader' }]
      }
    ]
  }
}
```

## Examples

Simple Server:

```ts
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import typeDefs from './schema.graphql'

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server running on :4000'))
```


Advanced:

[serverless-prisma](https://github.com/jgeschwendt/serverless-prisma): Serverless starter kit using Prisma (early-stages)
