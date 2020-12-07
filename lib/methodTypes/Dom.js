/**
 * @description 获取盒子宽高，滚动距离
 * @returns {string}
 */
let getBoxSpec = (key, el) => {
  let res = [];
  let cat = {
    ['网页可见区域宽']: () => document.body.clientWidth,
    ['vw']: () => document.body.clientWidth,
    ['网页可见区域高']: () => document.body.clientHeight,
    ['vh']: () => document.body.clientHeight,
    ['网页被卷去的高']: () => document.body.scrollTop,
    ['pst']: () => document.body.scrollTop,
    ['网页被卷去的左']: () => document.body.scrollLeft,
    ['psl']: () => document.body.scrollLeft,
    ['目标滚动高度']: () => (el ? document.querySelector(el).scrollTop : warn()),
    ['st']: () => (el ? document.querySelector(el).scrollTop : warn()),
    ['目标滚动的左']: () => (el ? document.querySelector(el).scrollLeft : warn()),
    ['sl']: () => (el ? document.querySelector(el).scrollLeft : warn()),
    ['高']: () => (el ? document.querySelector(el).clientHeight : warn()),
    ['h']: () => (el ? document.querySelector(el).clientHeight : warn()),
    ['宽']: () => (el ? document.querySelector(el).clientWidth : warn()),
    ['w']: () => (el ? document.querySelector(el).clientWidth : warn()),
  };
  if (typeof key === 'string') {
    return cat[key] ? cat[key]() : null;
  }
  if (typeof key === 'object' && key.constructor === Array && key.length > 0) {
    for (let i = 0; i < key.length; i++) cat[key[i]] && res.push(cat[key[i]]());
  }
  function warn() {
    console.warn('The second parameter "el" is required for this/these key ! # Warnning occur on function "getBoxSpec" # ');
    return null;
  }
  return res;
};

/**
 * @description 按顺序获取顺序最后一个指定元素
 * @returns {object} element
 */
const getEl = (...list) => {
  keyList = list[0] instanceof Array ? list[0] : list;
  if (keyList.length > 0) {
    let el;
    let i = 0;
    return (function getBySelector(...keyList) {
      if (keyList.length == 1) {
        return document.querySelector(...keyList);
      }
      if (i < keyList.length - 1) {
        const key0 = keyList[i];
        const key1 = keyList[i + 1];
        if (i == 0) {
          el = document.querySelector(key0).querySelector(key1);
          i++;
          getBySelector(...keyList);
        } else if (i < keyList.length - 1) {
          el = el.querySelector(key1);
          i++;
        }
      }

      return el;
    })(...keyList);
  } else {
    console.warn("parameter 'list' could not be empty # function getEl #");
  }
};

/**
 * @description 按顺序获取顺序最后一个指定元素的样式
 * @returns {string}
 */
function getstyle(cls, ...ele) {
  const getEl = (...list) => {
    keyList = list[0] instanceof Array ? list[0] : list;
    if (keyList.length > 0) {
      let el;
      let i = 0;
      return (function getBySelector(...keyList) {
        if (keyList.length == 1) {
          return document.querySelector(...keyList);
        }
        if (i < keyList.length - 1) {
          const key0 = keyList[i];
          const key1 = keyList[i + 1];
          if (i == 0) {
            el = document.querySelector(key0).querySelector(key1);
            i++;
            getBySelector(...keyList);
          } else if (i < keyList.length - 1) {
            el = el.querySelector(key1);
            i++;
          }
        }

        return el;
      })(...keyList);
    } else {
      console.warn("parameter 'list' could not bt empty # function getEl #");
    }
  };
  ele = ele[0] instanceof Array ? ele[0] : ele;
  if (getComputedStyle(getEl(ele), false)) {
    //在高级浏览器下面
    return getComputedStyle(getEl(ele), false)[cls];
  } else {
    //在低版本浏览器 IE8-
    return getEl(ele).currentStyle[cls];
  }
}

//滚动条在Y轴上的滚动距离
const getScrollTop = () => {
  var scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
};

//文档的总高度
const getScrollHeight = () => {
  var scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
};

//浏览器视口的高度
const getWindowHeight = () => {
  var windowHeight = 0;
  if (document.compatMode == 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};

module.exports = {
  getBoxSpec,
  getEl,
  getstyle,
  getScrollTop,
  getScrollHeight,
  getWindowHeight,
  
};