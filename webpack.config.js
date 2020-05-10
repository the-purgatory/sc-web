/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: './src/index.js',
  output: {
    // https://stackoverflow.com/questions/56573363/react-router-v4-nested-routes-not-work-with-webpack-dev-server
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      __ASSETS: path.resolve(__dirname, 'src/assets/'),
      __COMPONENTS: path.resolve(__dirname, 'src/components/'),
      __CONSTANTS: path.resolve(__dirname, 'src/constants/'),
      __SCREENS: path.resolve(__dirname, 'src/screens/'),
      __STORE: path.resolve(__dirname, 'src/store/'),
      __STYLES: path.resolve(__dirname, 'src/styles/'),
      __UTILS: path.resolve(__dirname, 'src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: './fonts/[name].[ext]',
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin(envKeys)
  ],
  // devtool: none or 'source-map',
  devtool: 'source-map',
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    compress: true,
    // https://stackoverflow.com/questions/56573363/react-router-v4-nested-routes-not-work-with-webpack-dev-server
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': env.BASE_URL
    }
  }
};
