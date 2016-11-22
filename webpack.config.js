var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "public","output");

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
