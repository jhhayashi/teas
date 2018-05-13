const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: './src/',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlPlugin({title: "Jordan's Teas"/*, template: 'index.html'*/}),
    new ExtractTextPlugin({filename: 'styles.css', disable: mode === 'development'}),
    // DEV && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?modules&importLoaders=1!postcss-loader',
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(ttf|eot|png|jpg|gif|svg|woff2?|csv)/,
        use: 'url-loader?limit=5000',
      },
    ],
  },
}
