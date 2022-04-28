import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
import prodConfig from './webpack.prod.js';
import devConfig from './webpack.dev.js';


const webpackConfig = (envVars) => {
  const { mode } = envVars;
  
  return merge(commonConfig, mode === 'dev' ? devConfig : prodConfig);
}

export default webpackConfig;