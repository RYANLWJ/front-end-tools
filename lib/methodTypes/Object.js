/**
 * @description: 过滤对象里空的键值对
 * @param {options} 基准对象
 * @return: {Object}
 */
const objectFilter = (options) => {
  const ops = {};
  const isEmpty = (v) => {
    //是否为空数据
    if (v === "" || v === "" || v === "undefined" || v === undefined || v === null) {
      return true;
    }
    if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || JSON.stringify(v) == "[{}]") {
      return true;
    }
    return false;
  };
  Object.keys(options).forEach((key) => !isEmpty(options[key]) && (ops[key] = options[key]));
  return ops;
};

/**
 * @description: 清空对象
 * @param {object}obj-对象
 */
const clearObj = (obj) => {
  if (obj.constructor !== Object) return;
  for (let key in obj) delete obj[key];
};

/**
 * @description 深度拷贝对象
 * @param {object} obj
 * @return {object}
 */
const deepClone = (obj) => {
  let new_obj = Array.isArray(obj) ? [] : {};
  if (typeof obj != "object") return (new_obj = obj);
  if (obj instanceof Array) {
    //数组
    for (let i = 0; i < obj.length; i++) {
      new_obj[i] = obj[i];
      if (typeof new_obj[i] == "object") deepClone(new_obj[i]); //数组中的对象
    }
  } else {
    //对象
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 对象中的数组和对象
        if (typeof obj[key] == "object") new_obj[key] = deepClone(obj[key]);
        else new_obj[key] = obj[key];
      }
    }
  }
  return new_obj;
};

/**
 * 从对象中检索出给定选择器指定的一组属性
 * @param {Object|Array} from
 * @param {string} selectors
 * @param {string} keys
 */
const selector = (from, selectors, keys = null) => {
  keys = keys || selectors.match(/([\w]+)/g);
  if (!!keys && !!keys.length && !!from) {
    let key = keys.splice(0, 1);
    let value = from[key];
    return selector(value, selectors, keys);
  } else return from;
};

/**
 *
 * @description 转换对象指定的key名
 * @param {object} obj
 * @param {array} keyOrig
 * @param {array} keyCurr
 * @return {object}
 */
let replaceKeys = (obj, keyOrig, keyCurr) => {
  let newObj = { ...obj };
  if (typeof keyOrig === "string" && typeof keyCurr === "string") {
    newObj[keyCurr] = obj[keyOrig];
    delete newObj[keyOrig];
  } else if (typeof keyOrig === "object" && keyOrig instanceof Array && keyOrig.length > 0 && typeof keyCurr === "object" && keyCurr instanceof Array && keyCurr.length > 0) {
    for (let i = 0; i < keyOrig.length; i++) (newObj[keyCurr[i]] = newObj[keyOrig[i]]) && delete newObj[keyOrig[i]];
  } else {
    return {};
  }

  return newObj;
};

/**
 *
 *@description 把对象里的属性值为数字类型的转换成字符串类型
 * @param {object} obj
 * @return {array} keys
 * @return {object}
 */
 const convertNum2Str = (obj, keys) => {
  const _obj = { ...obj };
  if (keys instanceof Array && keys.length > 0) {
    keys.forEach((key) => {
      _obj[key] = obj[key].toString();
    });
  } else {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] == "number") {
        _obj[key] = obj[key].toString();
      }
    });
  }

  return _obj;
};


 /**
  *
  * @description 错误信息转换
  * @param {object} obj {a:'不能为空' ,b:'资源错误'}
  * @return {array} ['a:']
  */
const formattedErrorMsgs = (obj) => Object.entries(result).map(([key, value]) => key + ":" + value);


/**
 * 筛选对象的key，浅拷贝对象
 *
 * @param {object} obj 原始对象
 * @param {string[]} arr 需保留的key
 * @returns {object} 处理后的对象
 * @example
 * pick({a:1, b:2, c:3}, ['b', 'c']) => {b:2, c:3}
 */
 function pick(obj, arr) {
  return arr.reduce((acc, cur) => {
    cur in obj && (acc[cur] = obj[cur]);
    return acc;
  }, {});
}

/**
 *
 * @description 判断对象里某个以值为布尔类型的属性名是否存在.存在则默认返回该键的值,不存在则返回自定义defaultValue的布尔值.
 * @param {object} obj
 * @param {string} property
 * @param {boolean} defaultValue
 * @return {boolean} 
 */
const  defaultAKey =(obj, property, defaultValue) => {
  return obj.hasOwnProperty(property) ? obj[property] : defaultValue === false ? false : true;
}
module.exports = {
  pick,
  objectFilter,
  clearObj,
  deepClone,
  selector,
  replaceKeys,
  convertNum2Str, 
  formattedErrorMsgs,
  defaultAKey
};
