/**
 * 方法：生成n ~ m 随机数
 * 调用：common.random(0,10);
 * @param min = 最小值
 * @param max = 最大值
 * @returns {number}
 */
const random = (min, max) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
module.exports = {
  random,
};
