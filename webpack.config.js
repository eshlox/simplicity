const AssetsPlugin = require('assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const define = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

const extractCSS = new ExtractTextPlugin({
  filename: getPath => getPath('css/[name].[contenthash:12].css')
})

const assetsManifest = new AssetsPlugin({
  filename: 'assets.json',
  path: path.join(__dirname, 'data'),
  fullPath: false,
  processOutput: assets => {
    Object.keys(assets).forEach(bundle => {
      Object.keys(assets[bundle]).forEach(type => {
        let filename = assets[bundle][type]
        assets[bundle][type] = filename.slice(filename.indexOf(bundle))
      })
    })
    return JSON.stringify(assets, null, 2)
  }
})

const copyImages = new CopyWebpackPlugin([{
  from: 'src/images',
  to: 'img'
}])

const cleanBuild = new CleanWebpackPlugin([
  'static/assets/img/*',
  'static/assets/css/*',
  'static/assets/js/*'
])

const config = {
  entry: {
    main: path.join(__dirname, 'src/scripts', 'main.js')
  },
  output: {
    filename: 'js/[name].[chunkhash:12].js',
    path: path.join(__dirname, 'static', 'assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/scripts'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: extractCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['> 1%', 'last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss']
  },
  plugins: [
    define,
    extractCSS,
    assetsManifest,
    copyImages
  ]
}

if (process.env.NODE_ENV === 'production') config.plugins.push(cleanBuild)

module.exports = config
