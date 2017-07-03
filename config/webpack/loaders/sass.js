const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

// Hot reloading css styles require style loader in development
if(env.NODE_ENV == 'development'){
  module.exports = {
    test: /\.(scss|sass|css)$/i,
    use: [
      { loader: 'style-loader'},
      { loader: 'css-loader'},
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true } }
    ]
  }
}else{
  module.exports = {
    test: /\.(scss|sass|css)$/i,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader', options: { minimize: env.NODE_ENV === 'production' } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        'resolve-url-loader',
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    })
  }
}
