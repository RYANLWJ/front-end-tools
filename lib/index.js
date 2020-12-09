const [Api, Arr, Dom, Num, Obj, Str, Url, Validate] = [
  require("./methodTypes/Api.js"),
  require("./methodTypes/Array.js"),
  require("./methodTypes/Dom.js"),
  require("./methodTypes/Number.js"),
  require("./methodTypes/Object.js"),
  require("./methodTypes/String.js"),
  require("./methodTypes/Url.js"),
  require("./methodTypes/Validate.js"),
];

module.exports = {
  ...Api,
  ...Arr,
  ...Dom,
  ...Num,
  ...Obj,
  ...Str,
  ...Url,
  ...Validate,
};