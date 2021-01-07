/**
 * Convert an image
 * to a base64 string
 * @param  {String}   url
 * @param  {Function} callback
 * @param  {String}   [outputFormat=image/png]
 */
const convertImgToBase64 = (url, callback, outputFormat) => {
  var canvas = document.createElement("CANVAS"),
    ctx = canvas.getContext("2d"),
    img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    var dataURL;
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback.call(this, dataURL);
    canvas = null;
  };
  img.src = url;
};

module.exports = {
  convertImgToBase64,
};
