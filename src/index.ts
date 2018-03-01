import { importSchema } from 'graphql-import'

export default source => {
  this.value = source
  return `module.exports = \`${importSchema(source)}\``
}
