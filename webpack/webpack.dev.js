import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'dotenv/config';
import postcssRules from './postcss-rules.js';

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
          postcssRules,
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
};

export default devConfig;
