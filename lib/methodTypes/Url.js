/**
 *
 * @description 获取url的全部参数或指定参数
 * @param {array | void} names - names为数组 names为空则默认获取全部参数
 * @return {object}
 */
const getQueryString = (names) => {
  let obj = {};
  if (names) {
    names.forEach((item) => {
      let reg = new RegExp('(^|&)' + item + '=([^&]*)(&|$)', 'i');
      let r = window.location.search.substr(1).match(reg);
      if (r != null) {
        obj[item] = unescape(r[2]);
      } else {
        obj[item] = null;
      }
    });
    return obj;
  } else {
    let params = window.location.search.substr(1).split('&');

    params.forEach((item, index) => {
      let aParam = params[index].split('=');
      obj[aParam[0]] = aParam[1];
    });
    return obj;
  }
};

/**
 * @description 把对象转换成get请求?后面的参数
 * @param {object} params
 * @return {string}
 */
const toQueryString = (params) => {
  let str = '';
  let i = 0;
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      let item = params[key];
      if (typeof item === 'object') {
        item = JSON.stringify(item);
      }
      i === 0 ? (str += `${key}=${item}`) : (str += `&${key}=${item}`);
      i++;
    }
  }
  return str;
};

/**
 * @description 获取路由的所有参数集合
 * @param {string} url
 * @return {object}
 */
const getAllUrlParams = (url) => {
  // 用JS拿到URL，如果函数接收了URL，那就用函数的参数。如果没传参，就使用当前页面的URL
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  // 用来存储我们所有的参数
  var obj = {};
  // 如果没有传参，返回一个空对象
  if (!queryString) {
    return obj;
  }
  // stuff after # is not part of query string, so get rid of it
  queryString = queryString.split('#')[0];
  // 将参数分成数组
  var arr = queryString.split('&');
  for (var i = 0; i < arr.length; i++) {
    // 分离成key:value的形式
    var a = arr[i].split('=');
    // 将undefined标记为true
    var paramName = a[0];
    var paramValue = typeof a[1] === 'undefined' ? true : a[1];
    // 如果调用对象时要求大小写区分，可删除这两行代码
    paramName = paramName.toLowerCase();
    if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
    // 如果paramName以方括号结束, e.g. colors[] or colors[2]
    if (paramName.match(/\[(\d+)?\]$/)) {
      // 如果paramName不存在，则创建key
      var key = paramName.replace(/\[(\d+)?\]/, '');
      if (!obj[key]) obj[key] = [];
      // 如果是索引数组 e.g. colors[2]
      if (paramName.match(/\[\d+\]$/)) {
        // 获取索引值并在对应的位置添加值
        var index = /\[(\d+)\]/.exec(paramName)[1];
        obj[key][index] = paramValue;
      } else {
        // 如果是其它的类型，也放到数组中
        obj[key].push(paramValue);
      }
    } else {
      // 处理字符串类型
      if (!obj[paramName]) {
        // 如果如果paramName不存在，则创建对象的属性
        obj[paramName] = paramValue;
      } else if (obj[paramName] && typeof obj[paramName] === 'string') {
        // 如果属性存在，并且是个字符串，那么就转换为数组
        obj[paramName] = [obj[paramName]];
        obj[paramName].push(paramValue);
      } else {
        // 如果是其它的类型，还是往数组里丢
        obj[paramName].push(paramValue);
      }
    }
  }
  return obj;
};

/**
 * @description 把对象转换成form表单的请求参数
 * @param {object} options
 * @return {FormData}
 */
const toFormData = (options) => {
  let data = new FormData();

  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      console.log(options[key]);
      if (typeof options[key] === 'object') {
        data.append([key], JSON.stringify(options[key]));
      } else {
        data.append([key], options[key]);
      }
    }
  }
  //     data.forEach((value, key) => {
  //         console.log("key %s: value %s", key, value);
  //    })
  return data;
};

module.exports = {
  getQueryString,
  toQueryString,
  getAllUrlParams,
  toFormData,
};