/**
 * @description 获取某个指定字符在一串字符中出现的次数
 * @param {string} aStr - 原始字符串
 * @param {string} aChar - 要检索的字符
 * @return {number}
 */
const getStrCount = (aStr, aChar) => {
  let regex = new RegExp(aChar, "g"); // 使用g表示整个字符串都要匹配
  let result = aStr.match(regex);
  let count = !result ? 0 : result.length;
  return count;
};

/**
 * @description 去除字符串前后空格
 * @param {*} str
 */
const trimSpace = (str) => str.replace(/^\s+/, "").replace(/\s+$/, "");

/**
 *
 * @description 给字符串补0
 * @param {string} str
 * @param {number} num
 * @return {string}
 */
const addZero = (str, num) => {
  for (let i = 0; i < str.length; i++) str.length < num && (str += "0");
  return str;
};

/**
 *
 * @description 转换占位符
 * @param {string} placeholders
 * @return {array}
 */
const getPlaceholders = (placeholders) => {
  const regex = /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g;
  const arr = placeholders.match(regex);
  let types = [];
  arr.forEach((item) => {
    regex.exec("");
    const res = regex.exec(item);
    types.push(res && res[1]);
  });
  return types;
};

/**
 *
 * @description 在一串字符串里的指定索引位置插入自定义字符
 * @param {string} str 原字符串
 * @param {array|number} positions 要进行插入自定义字符的索引位置
 * @param {string} newStr 自定义字符
 * @return {string}
 */
const insertStr = (str, positions, newStr) => {
  const insert = (str, start, newStr) => str.slice(0, start) + newStr + str.slice(start);
  const lg = newStr.length;
  let _str = str;
  if (positions instanceof Array) {
    for (let i = 0; i < positions.length; i++) {
      const idx = i == 0 ? positions[i] : positions[i] + i * lg;
      _str = insert(_str, idx, newStr);
    }
    return _str;
  } else {
    return insert(str, positions, newStr);
  }
};

/**
 *
 * @description 收集关键字符keyString的出现索引集合
 * @param {*} str 原字符串
 * @param {*} keyString 关键字符
 * @return {*}
 */
const getStrIndexList = (str, keyString) => {
  let positions = []; // 收集关键字符keyString的出现索引
  let strList = []; // 根据关键字符keyString ,将字符串切割成数组
  let pos = str.indexOf(keyString);
  while (pos > -1) {
    positions.push(pos);
    pos = str.indexOf(keyString, pos + 1);
  }
  return positions;
};

/**
 *
 *  @description 根据某个字符进行字符串切割
 * @param {string} str 原字符串
 * @param {string} keyString 关键字符
 * @return {array}
 */
const splitStringByKey = (str, keyString) => {
  let positions = []; // 收集关键字符keyString的出现索引
  let strList = []; // 根据关键字符keyString ,将字符串切割成数组
  let pos = str.indexOf(keyString);
  while (pos > -1) {
    positions.push(pos);
    pos = str.indexOf(keyString, pos + 1);
  }
  for (let i = 0; i < positions.length; i++) {
    if (positions.length <= 1) {
      return str;
    }
    if (positions.length > 1) {
      const start = positions[i];
      const end = positions[i + 1];
      let s = end ? str.slice(start, end).trim() : str.slice(start).trim();
      strList.push(s);
    }
  }
  return strList;
};

/**
 *
 * @description 在一串字符里根据某个字符开头插入换行符'\n'
 * @param {string} keyString 关键字符
 * @param {string} str 原字符串
 * @return {string}
 */
const wrapStringBy = (keyString, str) => {
  if (str.lastIndexOf(keyString) === 0) {
    return str;
  } else {
    let positions = []; // 收集关键字符keyString的出现索引
    let strList = []; // 根据关键字符keyString ,将字符串切割成数组
    let pos = str.indexOf(keyString);
    while (pos > -1) {
      positions.push(pos);
      pos = str.indexOf(keyString, pos + 1);
    }

    for (let i = 0; i < positions.length; i++) {
      if (positions.length <= 1) {
        return str;
      }
      if (positions.length > 1) {
        const start = positions[i];
        const end = positions[i + 1];
        let s = end ? str.slice(start, end).trim() : str.slice(start).trim();
        strList.push(s);
      }
    }
    let firstClip = strList[0];
    strList.shift();
    strList = strList.map((str) => "\n" + str).join("");
    return firstClip + strList;
  }
};


/**
 *
 * @description 去除空格 type 1-所有空格 2-前后空格 3-前空格 4-后空格
 * @param {*} str
 * @param {*} type
 * @return {*} 
 */
function trim(str,type){
  switch (type){
      case 1:return str.replace(/\s+/g,"");
      case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:return str.replace(/(^\s*)/g, "");
      case 4:return str.replace(/(\s*$)/g, "");
      default:return str;
  }
}

/**
 * 转换 _ 或 - 为驼峰形式
 *
 * @param {string} str 原始字符串
 * @returns {string} CamelCase 形式
 */
function camelize(str) {
  if (str.indexOf('-') < 0 && str.indexOf('_') < 0) {
    return str;
  }
  return str.replace(/[-_][^-_]/g, (match) => match.charAt(1).toUpperCase());
}


/**
 * 防XSS攻击过滤
 *
 * @param {string} str 原始字符串
 * @returns {string} 过滤后字符串
 */
 function xssFilter(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
module.exports = {
  xssFilter,
  camelize,
  trim,
  getStrCount,
  trimSpace,
  getStrCount,
  addZero,
  getPlaceholders,
  insertStr,
  getStrIndexList,
  splitStringByKey,
  wrapStringBy,
};
