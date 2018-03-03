import * as memoryfs from 'memory-fs'
import * as path from 'path'
import * as webpack from 'webpack'
import { Stats } from 'webpack'

export default (fixture, options = {}) => {
  const compiler = webpack({
    mode: 'development',
    context: path.resolve(__dirname),
    entry: `./fixtures/${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.graphql$/,
        use: [
          { loader: path.resolve(__dirname, '..', 'dist/src') }
        ]
      }]
    }
  })

  compiler.outputFileSystem = new memoryfs()

  return new Promise<Stats>((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)

      resolve(stats)
    })
  })
}
