import { importSchema } from 'graphql-import'

export default function(source) {
  const callback = this.async();
  const isFileRegex = /\.graphql$/i

  this.cacheable()

  const sdl = importSchema(isFileRegex.test(this.resource) ? this.resource : source)

  callback(null, `module.exports = \`${sdl.replace(/`/g, '\\`')}\``)
}
