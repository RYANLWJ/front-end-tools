/**
 * @description 递归进行ajax请求
 * @param {array} apiList
 * @param {this | function} fn
 * @example apiList : [] url集合 ; fn this | callback (url,res,rej)
 */
const request = (apiList, fn) => {
  let self = fn || this;

  let reslist = [];
  let counts = 0;

  (function apirequest(url) {
    let p = new Promise((res, rej) => {
      if (fn && typeof fn === 'function') {
        fn(url, res, rej);
      } else {
        self.$axios.post(url).then(res).catch(rej);
      }
    });
    p.then((res) => {
      counts++;
      if (counts > apiList.length) {
        return;
      }

      apirequest(apiList[counts]);
    }).catch((err) => {
      counts++;
      if (counts > apiList.length) {
        return;
      }
      reslist.push({ index: counts - 1, url, fail: err.response });
      apirequest(apiList[counts]);
      console.warn(reslist);
    });
  })(apiList[0]);
};

/**
 * @description 用promise 二次封装async await
 * @returns {promise}
 */
const asyncHandle = (promise) => {
  let p;
  console.log(typeof promise);
  if (typeof promise === 'function') {
    p = promise();
  } else {
    if (!promise || !promise.then) {
      return new Promise((resolve, reject) => reject(new Error('requires a promise as the param'))).catch((err) => [err, null]);
    } else {
      p = promise;
    }
  }
  return p.then((res) => [null, res]).catch((err) => [err, null]);
};

/**
 * @description 模拟接口请求
 * @returns {promise}
 */
const simulateRequest = ({ status, reason, success, result }) => {
  let data = {
    success: success === false ? false : true,
    status: status ? status : success ? '200' : '400',
    reason: reason ? reason : success ? 'OK' : 'FAIL',
    result: result || '',
  };
  return new Promise((res, rej) => setTimeout(() => (data.success ? res(data) : rej(new Error(data))), 200));
};
module.exports = {
  request,
  asyncHandle,
  simulateRequest,
  
};