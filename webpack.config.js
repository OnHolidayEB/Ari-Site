const path = require('path');

 module.exports = {
   mode: 'production',
   watch: true,
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     //publicPath: './dist/'
   },
   
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "img/",
          }
        }
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
    ],
  },
 };