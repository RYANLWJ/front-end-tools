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
module.exports = {
  getStrCount,
  trimSpace,
  getStrCount,
  addZero,
  getPlaceholders
};
