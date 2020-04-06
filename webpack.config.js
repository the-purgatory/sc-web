const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // https://stackoverflow.com/questions/56573363/react-router-v4-nested-routes-not-work-with-webpack-dev-server
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
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
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env']
        //   }
        // }
      },
      //   {
      //     test: /\.(css|scss)$/,
      //     exclude: /node_modules/,
      //     use: ['style-loader', 'css-loader', 'sass-loader']
      //   },
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
    })
  ],
  devServer: {
    compress: true,
    // https://stackoverflow.com/questions/56573363/react-router-v4-nested-routes-not-work-with-webpack-dev-server
    historyApiFallback: true
  }
};
