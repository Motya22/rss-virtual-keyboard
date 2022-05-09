const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    // contentBase: path.join(__dirname, 'public'),
  },
};

// const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['js'] }) ];

const plugins = [
  new HtmlWebpackPlugin({ template: './src/index.html', favicon: './src/assets/favicon.ico' }),
  new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  new ESLintPlugin({ extensions: ['js'] }),
  // ...esLintPlugin(development),
];

module.exports = {
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  ...devServer(mode),
};
