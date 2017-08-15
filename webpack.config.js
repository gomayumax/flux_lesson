/**
 * Created by m_ishikawa on 2017/08/12.
 */
module.exports = {
  context: __dirname,
  entry: {
    'app': './src/App',
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
