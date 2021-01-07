const Api = require("./methodTypes/Api.js");
const Arr = require("./methodTypes/Array.js");
const Dom = require("./methodTypes/Dom.js");
const Num = require("./methodTypes/Number.js");
const Obj = require("./methodTypes/Object.js");
const Str = require("./methodTypes/String.js");
const Url = require("./methodTypes/Url.js");
const Validate = require("./methodTypes/Validate.js");
const Explorer = require("./methodTypes/Explorer.js");
const Images = require("./methodTypes/Images.js");
const Others = require("./methodTypes/Others.js");
const Curry = require("./methodTypes/Curry.js");
const Download = require("./methodTypes/Download.js");
const Http = require("./methodTypes/Http.js");

module.exports = {
  ...Api,
  ...Arr,
  ...Dom,
  ...Num,
  ...Obj,
  ...Str,
  ...Url,
  ...Validate,
  ...Explorer,
  ...Images,
  ...Others,
  ...Curry,
  ...Download,
  ...Http,
};
