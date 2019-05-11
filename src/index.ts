import { importSchema, parseSDL } from 'graphql-import'
import { dirname, resolve } from 'path'

export default function (source) {
  const callback = this.async();

  this.cacheable();

  parseSDL(source).forEach(rawModule => {
    this.addDependency(resolve(dirname(this.resourcePath), rawModule.from));
  });

  callback(null, `module.exports = \`${importSchema(this.resourcePath).replace(/`/g, '\\`')}\``);
}
