/**
 * @description: 检查所有类型非空
 * @param {Object} v
 * @return Boolean
 */
const isEmpty = (v) => {
  switch (typeof v) {
    case "undefined":
      return true;
    case "string":
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length === 0) return true;
      break;
    case "boolean":
      if (!v) return true;
      break;
    case "number":
      if (v === 0 || isNaN(v)) return true;
      break;
    case "object":
      if (v === null || v.length === 0) return true;
      for (let i in v) {
        if (v.hasOwnProperty(i)) {
          return false;
        }
      }
      return true;
  }
  return false;
};

/**
 * @description: 类型判断
 * @param {any} v
 * @example is.string("1") //true
 */
const is = {
  array: (v) => typeof v === "object" && v.constructor === Array,
  object: (v) => typeof v === "object" && v.constructor === Object,
  function: (v) => typeof v === "function",
  string: (v) => typeof v === "string",
  boolean: (v) => typeof v === "boolean",
  number: (v) => typeof v === "number",
  empty: isEmpty, //v是否为空
};

/**
 * @description: 校验两个对象某些字段值是否相等
 * @param {object}base -基准对象
 * @param {object} target -比较对象
 * @param {array} keyList -进行比较的属性名
 * @return: {Boolean}
 */
const hasChange = (base, target, keyList) => {
  //base 为基准对象 target 为基准对象的比较对象 keyList为比较的属性名

  keyList = keyList || getKey();

  let obj3 = {};
  let obj4 = {};

  function getKey() {
    let keyList = [];
    for (let key in base) {
      if (base.hasOwnProperty(key)) keyList.push(key);
    }
    return keyList;
  }

  keyList.forEach((item) => {
    obj3[item] = base[item];
    obj4[item] = target[item];
  });
  for (let i = 0; i < keyList.length; i++) {
    let key = keyList[i];
    if (obj3[key] !== obj4[key]) return false;
  }
  return true;
};

/**
 * @description: 检查目标项是否存在空的
 * @param {object}options-参数
 * @param {array}keyList-keyList 要被检查的字段
 * @returns:[boolean,keyList]
 */
const hasEmpty = (options, keyList) => {
  // options 参数 | keyList 要被检查的字段
  keyList = keyList || getKey();
  function getKey() {
    let keyList = [];
    for (let key in options) {
      if (options.hasOwnProperty(key)) keyList.push(key);
    }
    return keyList;
  }
  let res = [];
  for (let i = 0; i < keyList.length; i++) {
    let key = keyList[i];
    if (
      options[key] == null ||
      options[key] == undefined ||
      options[key] == "" ||
      (options[key] instanceof Array && options[key].length == 0) ||
      JSON.stringify(options[key]) == "{}"
    )
      res.push(key);
  }

  return res.length != 0 ? [true, res] : [false, null];
};

/**
 * @description: 检查对象是否存在我们定义的连续属性
 * @param {object}obj-数据
 * @param {array}keyList-定义的键名顺序
 * @returns:{Boolean}
 * @example if(checkKeyChain(res,"data","result",...))
 */
const checkKeyChain = (obj, ...keyList) => {
  if (keyList.length > 0) {
    return (function checkKey(obj, ...keyList) {
      const key = keyList[0];
      if (keyList.length > 0) {
        if (obj && obj.hasOwnProperty(key)) {
          keyList.splice(0, 1);
          return checkKey(obj[key], ...keyList);
        } else {
          return false;
        }
      } else {
        return true;
      }
    })(obj, ...keyList);
  } else {
    throw Error("parameter 'keyList' is not could be empty");
  }
};

module.exports = {
  isEmpty,
  is,
  hasChange,
  hasEmpty,
  checkKeyChain,
};
