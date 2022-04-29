import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'dotenv/config';
import autoprefixer from 'autoprefixer';

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: process.env.PORT || 3000,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env', autoprefixer()],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
};

export default devConfig;
