/**
 *
 * @description 流量单位转换
 * @param {*} val
 * @param {*} type
 * @return {*}
 */
const flow2str = (val, type) => {
  switch (type) {
    case "GB":
      return (val / 1024 / 1024 / 1024).toFixed(2);
    case "MB":
      return (val / 1024 / 1024).toFixed(2);
    case "KB":
      return (val / 1024).toFixed(2);
    case "B":
      return val.toFixed(2);
    default: {
      let gb = (val / 1024 / 1024 / 1024).toFixed(2);
      let mb = (val / 1024 / 1024).toFixed(2);
      let kb = (val / 1024).toFixed(2);
      if (val < 1024) {
        return val + "B";
      } else if (kb < 1024) {
        return kb + "KB";
      } else if (mb < 1024) {
        return mb + "MB";
      } else if (gb < 1024) {
        return gb + "GB";
      }
    }
  }
};


/**
 *
 * @description 防抖函数
 * @param {*} handle 为要进行防抖的函数
 * @param {*} delay 设定的时间区间
 * @return {*} 
 */
const debounce = (handle, delay) => {
  var timer = null;
  return function () {
    var self = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(self, args);
    }, delay);
  };
};



/**
 *
 * @description 函数节流
 * @param {*} handle 要进行节流的函数
 * @param {*} delay 时间区间
 * @param {*} immediately 是否要进行立即执行版本的节流
 * @return {*} 
 */
const throttle = (handle, delay, immediately)=> {
  if (immediately == undefined) {
      immediately = false;
  }
  if (immediately) {
      var time = null;
      if (!time || Date.now() - time >= delay) {
          handle.apply(this, arguments);
          time = Date.now()
      }
  } else {
      var timer = null;
      return function () {
          var self = this;
          var args = arguments;
          if (timer) {
              return;
          }
          timer = setTimeout(function () {
              handle.apply(self, args);
              timer = null;
          }, delay)
      }
  }
}



/**
 *
 *@description 用promise封装倒计时
 * @param {number} ms 倒计时毫秒
 * @param {any} arg 倒计时结束返回的数据
 */
const sleep = (ms,arg) => new Promise((resolve) => setTimeout(resolve, ms,arg));



/**
 *
 * @description 获取类型
 * @param {*} val
 * @return {*} 
 */
function typeIs(val) {
  const typeStr = Object.prototype.toString.call(val);
  return typeStr.substring(8, typeStr.length - 1).toLowerCase();
}


module.exports = {
  flow2str,
  debounce,
  throttle,
  sleep,
  typeIs
};
