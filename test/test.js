const Api = require("../lib/methodTypes/Api.js");
const Arr = require("../lib/methodTypes/Array.js");
const Dom = require("../lib/methodTypes/Dom.js");
const Num = require("../lib/methodTypes/Number.js");
const Obj = require("../lib/methodTypes/Object.js");
const Str = require("../lib/methodTypes/String.js");
const Url = require("../lib/methodTypes/Url.js");
const Validate = require("../lib/methodTypes/Validate.js");
const Explorer = require("../lib/methodTypes/Explorer.js");
const Images = require("../lib/methodTypes/Images.js");
const Others = require("../lib/methodTypes/Others.js");
const Curry = require("../lib/methodTypes/Curry.js");
const Download = require("../lib/methodTypes/Download.js");
const Http = require("../lib/methodTypes/Http.js");
const Tip = require("../lib/methodTypes/Tip.js");

const methods = {
  Api,
  Arr,
  Dom,
  Num,
  Obj,
  Str,
  Url,
  Validate,
  Explorer,
  Images,
  Others,
  Curry,
  Download,
  Http,
  Tip,
};

const allMethodsRecord = Object.entries(methods)
  .map(([key, val]) => {
    const fnNames = Object.keys(val)
      .map((key, index) => `${index + 1}. ${key}`)
      .join("  ");
    return `${key}: ${fnNames}`;
  })
  .join("\n\n");

Tip.warn(allMethodsRecord);
