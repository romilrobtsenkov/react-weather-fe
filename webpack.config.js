const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const BUILD_DIR = path.resolve(__dirname, './dist')
const SRC_DIR = path.resolve(__dirname, './src')
const PRODUCTION = process.env.NODE_ENV === 'production'
const VISUALIZE = process.env.visualization === 'true'
console.log(
  'Running webpack in mode:' +
    process.env.NODE_ENV +
    ' visualization:' +
    VISUALIZE
)

const extractSCSS = new ExtractTextPlugin('css/style.[contenthash:10].css')

const isExternal = function (module) {
  var context = module.context
  if (typeof context !== 'string') {
    return false
  }
  return context.indexOf('node_modules') !== -1
}

const plugins = [
  VISUALIZE
    ? new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
    : null,
  extractSCSS,
  // TODO merge css files via merge-files-webpack-plugin
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: function (module) {
      return isExternal(module)
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new HtmlWebpackPlugin({
    // hash: DEVELOPMENT ? true : false, // if needed to force remove caching issues while in dev
    template: SRC_DIR + '/index.html',
    minify: {
      collapseWhitespace: !!PRODUCTION // this is for minifying HTML in PRODUCTION
    }
  }),
  PRODUCTION
    ? (new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      },
      minimize: true,
      sourceMap: true
    }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240, // only if file size > 10.24 kb
        minRatio: 0.8
      }))
    : null
].filter(p => p)

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }
  },
  {
    test: /media\/([^/]*)\.(jpe?g|png|gif|svg)$/i,
    exclude: [/node_modules/],
    use: [
      {
        loader: 'url-loader',
        options: { limit: 1024, name: 'media/[hash:10].[ext]' } // embed images size < 10kb
      }
    ]
  },
  {
    test: /font\/([^/]*)\.(woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: { limit: 1, name: 'font/[name].[ext]' } // do not embed fonts > 1b
      }
    ]
  },
  // TODO add autoprefixer like autoprefixer?browsers=last 2 version
  {
    test: /\.scss$/,
    use: extractSCSS.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    })
  },
  {
    test: /\.css$/,
    use: extractSCSS.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader' }
      ]
    })
  }
]

module.exports = {
  devtool: 'source-map',
  stats: 'normal',
  entry: {
    app: [SRC_DIR + '/app.js']
  },
  plugins: plugins,
  // externals: { jquery: "jQuery" }, jquery is external and available at the global variable jQuery
  module: {
    rules
  },
  output: {
    path: BUILD_DIR,
    publicPath: PRODUCTION ? '/' : '/',
    filename: PRODUCTION ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    chunkFilename: '[chunkhash].js'
  },
  devServer: {
    // host: 'localhost',
    port: 3446, // preferred port
    contentBase: BUILD_DIR,
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: true,
    watchOptions: { poll: true }
  }
}
