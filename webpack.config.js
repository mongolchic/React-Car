var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel",
    },
    {
        test: /\.css$/,
        loader: "style-loader!css-loader",
    },
    {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack'
          ]
    }]
  },

  imageWebpackLoader: {
      mozjpeg: {
        quality: 65
      },
      pngquant:{
        quality: "65-90",
        speed: 4
      },
      svgo:{
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeEmptyAttrs: false
          }
        ]
      }
    }
};

module.exports = config;
