// var imagemin = require("imagemin"),    // The imagemin module.
//   webp = require("imagemin-webp"),   // imagemin's WebP plugin.
//   outputFolder = "./img",            // Output folder
//   PNGImages = "./img/*.png",         // PNG images
//   JPEGImages = "./img/*.jpg";        // JPEG images

// imagemin([PNGImages], outputFolder, {
//   plugins: [webp({
//       lossless: true // Losslessly encode images
//   })]
// });

// imagemin([JPEGImages], outputFolder, {
//   plugins: [webp({
//     quality: 65 // Quality setting from 0 to 100
//   })]
// });



const path = require('path');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['source/img/*.{jpg,png}'], {
  destination: path.resolve(__dirname, 'source/webp'),
  plugins: [imageminWebp({ quality: 50 })],
});
