# graphql-import-loader

[![CircleCI](https://circleci.com/gh/graphcool/graphql-import-loader.svg?style=shield)](https://circleci.com/gh/graphcool/graphql-import-loader) [![npm version](https://badge.fury.io/js/graphql-import-loader.svg)](https://badge.fury.io/js/graphql-import-loader)


Webpack loader for [`graphql-import`](https://github.com/graphcool/graphql-import)

## Install

```console
yarn add --dev graphql-import-loader
```

## Usage

Add the following to the `rules` section in your `webpack.config.js`

```js
    rules: [{
      exclude: /node_modules/,
      test: /\.graphql$/,
      use: [{ loader: 'graphql-import-loader' }]
    }],
```
