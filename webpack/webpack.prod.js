import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env', autoprefixer()]
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
}

export default prodConfig;