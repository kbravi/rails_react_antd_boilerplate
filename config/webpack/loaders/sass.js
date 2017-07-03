const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')
const themeOverwrite = require('../../../app/javascript/themes/basic.json')

// Hot reloading css styles require style loader in development
if (env.NODE_ENV === 'development'){
  module.exports = {
    test: /\.(scss|sass|css|less)$/i,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true } },
      { loader: 'less-loader', options: { sourceMap: true, modifyVars: themeOverwrite } }
    ]
  }
}else{
  module.exports = {
    test: /\.(scss|sass|css|less)$/i,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader', options: { minimize: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        'resolve-url-loader',
        { loader: 'sass-loader', options: { sourceMap: true } },
        { loader: 'less-loader', options: { sourceMap: true, modifyVars: themeOverwrite } }
      ]
    })
  }
}