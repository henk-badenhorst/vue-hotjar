const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = function (env, argv) {
  const isProduction = argv.mode === 'production'
  return {
    output: {
      libraryTarget: 'umd',
      filename: 'vue-hotjar.js',
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: isProduction
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, './src'),
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      ...(isProduction ? [new CompressionPlugin()] : []),
      new CopyPlugin([
        // Copy Typings to dist
        { from: 'src/types', to: 'types' }
      ])
    ]
  }
}
