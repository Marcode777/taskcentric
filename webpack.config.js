var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry:[ // entry is where webpack is going to look for our files
    'webpack-dev-server/client?http://127.0.0.1:8080/', // this for webpack-dev-server
    'webpack/hot/only-dev-server', // this is for hot-reloading
    './src' // this is the folder where webpack is going to look for the initial file to run, right now there is no file name here, so by default, it will be looking for an index.js file
  ],
  output: { // output is where webpack would output our files, but for webpack-dev-server, it would not actually output a file, because that would be for production, but this is for develop
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'// bundle.js is standard
  },
  resolve: { // resolve is where webpack is going to look for the files to bundle together
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js'] // these are the extensions that webpack is going to expect
  },
  module: { // this is going to be where we define our loaders, for now, we're only going to have one loader for this file because we only need to recognize js files
    loaders: [
    {
      test: /\.jsx?$/, // we're just going to use js files, but the ? means we can also use jsx files if we want
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel?presets[]=react,presets[]=es2015'] // these are the modules that we installed to help us load our app
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // this has to do with hot-reloading or live-reloading
    new webpack.NoErrorsPlugin() // this basically means that webpack won't compile if there are errors unless we fix them
  ]
};

//differences are in loaders, instead of react-hot it is react-hot-loader/webpack, but here I revised it yet again from react-hot-loader/webpack to react-hot-loader