/**
 * @description 获取盒子宽高，滚动距离
 * @returns {string}
 */
let getBoxSpec = (key, el) => {
  let res = [];
  let cat = {
    ["网页可见区域宽"]: () => document.body.clientWidth,
    ["vw"]: () => document.body.clientWidth,
    ["网页可见区域高"]: () => document.body.clientHeight,
    ["vh"]: () => document.body.clientHeight,
    ["网页被卷去的高"]: () => document.body.scrollTop,
    ["pst"]: () => document.body.scrollTop,
    ["网页被卷去的左"]: () => document.body.scrollLeft,
    ["psl"]: () => document.body.scrollLeft,
    ["目标滚动高度"]: () => (el ? document.querySelector(el).scrollTop : warn()),
    ["st"]: () => (el ? document.querySelector(el).scrollTop : warn()),
    ["目标滚动的左"]: () => (el ? document.querySelector(el).scrollLeft : warn()),
    ["sl"]: () => (el ? document.querySelector(el).scrollLeft : warn()),
    ["高"]: () => (el ? document.querySelector(el).clientHeight : warn()),
    ["h"]: () => (el ? document.querySelector(el).clientHeight : warn()),
    ["宽"]: () => (el ? document.querySelector(el).clientWidth : warn()),
    ["w"]: () => (el ? document.querySelector(el).clientWidth : warn()),
  };
  if (typeof key === "string") {
    return cat[key] ? cat[key]() : null;
  }
  if (typeof key === "object" && key.constructor === Array && key.length > 0) {
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
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};

function $() {
  return document.getElementById(arguments[0]);
}

/**
 * 得到上一个元素
 * @param {Object} elem
 */
function prev(elem) {
  do {
    elem = elem.previousSibling;
  } while (elem && elem.nodeType != 1);
  return elem;
}

/**
 * 得到下一个元素
 * @param {Object} elem
 */
function next(elem) {
  do {
    elem = elem.nextSibling;
  } while (elem && elem.nodeType != 1);
  return elem;
}

/**
 * 得到第一个元素
 * @param {Object} elem
 */
function first(elem) {
  elem = elem.firstChild;
  return elem && elem.nodeType != 1 ? next(elem) : elem;
}

/**
 * 得到最后一个元素
 * @param {Object} elem
 */
function last(elem) {
  elem = elem.lastChild;
  return elem && elem.nodeType != 1 ? prev(elem) : elem;
}

/**
 * 得到父元素
 * @param {Object} elem
 * @param {Number} num 需要寻找的父级级别
 */
function parent(elem, num) {
  num = num || 1;
  for (var i = 0; i < num; i++) {
    if (elem != null) elem = elem.parentNode; //原书中这块有错
  }
  return elem;
}

/**
 * 得到相关name元素
 * @param {String} name
 * @param {Object} elem
 */
function tag(name, elem) {
  return (elem || document).getElementsByTagName(name);
}

/**
 * 根据tag寻找
 * @param {String} name
 * @param {String} type
 */
function hasClass(name, type) {
  var r = [];
  var re = new RegExp("(^|\\s)" + name + "(\\s|$)");
  var e = document.getElementsByTagName(type || "*");
  for (var i = 0; i < e.length; i++) {
    if (re.test(e[i].className)) {
      r.push(e[i]);
    }
  }
  return r;
  //http://www.cnblogs.com/rubylouvre/archive/2009/09/01/1557765.html //司徒兄有不同的看法
}

/**
 * 获取元素文本
 * @param {Object} e
 */
function text(e) {
  var t = "";
  e = e.childNodes || e;
  for (var i = 0; i < e.length; i++) {
    //如果不是元素，则追加其文本值
    t += e[i].nodeType != 1 ? e[i].nodeValue : text(e[i].childNodes);
  }
  return t;
}

/**
 *
 * @param {String} elem
 * @param {String} name
 * @param {String} value
 */
function attr(elem, name, value) {
  if (!name || name.constructor != String) {
    return "";
  }

  //检查name的属性是否在怪异命名情形中
  name = { for: "htmlFor", class: "className" }[name] || name;

  if (typeof value != "undefined") {
    elem[name] = value;

    if (elem.setAttribute) {
      elem.setAttribute(name, value);
    }
  }

  return elem[name] || elem.getAttribute(name) || "";
}

/**
 * 在另一个元素之前插件元素
 * @param {Object} parent
 * @param {Object} before
 * @param {String} elem
 */
function before(parent, before, elem) {
  if (elem == null) {
    elem = before;
    before = parent;
    parent = before.parentNode;
  }

  //获取元素的新数组
  var elems = checkElem(elem);

  //向后遍历
  for (var i = elems.length; i >= 0; i--) {
    parent.insertBefore(elems[i], before);
  }
}

/**
 * 创建元素
 * @param {Object} elem
 */
function create(elem) {
  //测试是否用命名空间来创建新的元素
  return document.createElementNS ? document.createElementNS("http://www.w3.org/1999/xhtml", elem) : document.cateElement(elem);
}

/**
 * before 辅助函数
 * @param {Object} elem
 */
function checkElem(a) {
  var r = [];
  if (a.constructor != Array) {
    a = [a];
  }
  for (var i = 0; i < a.length; i++) {
    //如果是字符串
    if (a[i].constructor == String) {
      //用一个临时元素来存放HTML
      var div = document.createElement("div");
      div.innerHTML = a[i];
      //提取DOM结构到临时的div中
      for (var j = 0; j < div.childNodes.length; j++) {
        r[r.length] = div.childNodes[j];
      }
    } else if (a[i].length) {
      //如果它是数组
      //假定DOM节点数组
      for (var j = 0; j < a[i].length; j++) {
        r[r.length] = a[i][j];
      }
    } else {
      //否则假定是DOM节点
      r[r.length] = a[i];
    }
  }

  return r;
}

//此方法我已修改与原文中有异
/**
 * 添加元素 (如果只有一个参数(无elem)，则直接添加到document.body上)
 * @param {Object} elem
 * @param {Object} parent
 */
function append(parent, elem) {
  if (elem == null) {
    elem = parent;
    parent = null;
  }

  //获取元素数组
  var elems = checkElem(elem);
  for (var i = 0; i < elems.length; i++) {
    (parent || document.body).appendChild(elems[i]);
  }
}

/**
 * 删除独立的DOM
 * @param {Object} elem
 */
function remove(elem) {
  if (elem) {
    elem.parentNode.removeChild(elem);
  }
}

/**
 * 删除一个节点的所有子节点
 * @param {Object} elem
 */
function empty(elem) {
  while (elem.firstChild) {
    remove(elem.firstChild);
  }
}

/**
 * 阻止事件冒泡
 * @param {Object} e
 */
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}

function stopDefault(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  } else {
    window.event.returnValue = false;
  }
  return false;
}

/**
 * 得到外链样式
 * @param {Object} elem
 * @param {String} name
 */
function getStyle(elem, name) {
  if (elem.style[name]) {
    return elem.style[name];
  } else if (elem.currentStyle) {
    //如果ie
    return elem.currentStyle[name];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    //如果是不是w3c方法
    name = name.replace(/([A-Z])/g, "-$1");
    name = name.toLowerCase();

    //获取样式
    var s = document.defaultView.getComputedStyle(elem, "");
    return s && s.getPropertyValue(name);
  } else {
    return null;
  }
}

/**
 * 获取元素的x位置
 * @param {String} elem
 */
function pageX(elem) {
  return elem.offsetParent ? elem.offsetLeft + pageX(elem.offsetParent) : elem.offsetLeft;
}

/**
 * 获取元素的Y位置
 * @param {String} elem
 */
function pageY(elem) {
  return elem.offsetParent ? elem.offsetTop + pageY(elem.offsetParent) : elem.offsetTop;
}

/**
 * 获取元素相对于父级的x位置
 * @param {String} elem
 */
function parentX(elem) {
  return elem.parentNode == elem.offsetParent ? elem.offsetLeft : pageX(elem) - pageX(elem.parentNode);
}

/**
 * 获取元素相对于父级的Y位置
 * @param {String} elem
 */
function parentY(elem) {
  return elem.parentNode == elem.offsetParent ? elem.offsetTop : pageY(elem) - pageY(elem.parentNode);
}

/**
 * 查找元素的左端位置
 * @param {Object} elem
 */
function posX(elem) {
  return parseInt(getStyle(elem, "left"));
}

/**
 * 查找元素的顶端位置
 * @param {Object} elem
 */
function posY(elem) {
  return parseInt(getStyle(elem, "top"));
}

/**
 * 设置元素水平位置
 * @param {Object} elem
 * @param {Object} pos
 */
function setX(elem, pos) {
  elem.style.left = pos + "px";
}

/**
 * 设置垂直水平位置
 * @param {Object} elem
 * @param {Object} pos
 */
function setY(elem, pos) {
  elem.style.top = pos + "px";
}

/**
 * 获取高度
 * @param {Object} elem
 */
function getHeight(elem) {
  return parseInt(getStyle(elem, "height"));
}

/**
 * 获取宽度
 * @param {Object} elem
 */
function getWidth(elem) {
  return parseInt(getStyle(elem, "width"));
}

/**
 * 得到完整的高度，就算对象已隐藏
 * @param {Object} elem
 */
function fullHeight(elem) {
  //如果元素显示
  if (getStyle(elem, "display") != "none") {
    return elem.offsetHeight || getHeight(elem);
  }

  //如果不显示，则复原css
  var old = resetCss(ele, {
    display: "",
    visibility: "hidden",
    position: "absolute",
  });

  var h = elem.clientHeight || getHeight(elem);
  restoreCss(elem, old);

  return h;
}

/**
 * 恢复原有设置
 * @param {String} elem
 * @param {Object} prop
 */
function resetCss(elem, prop) {
  var old = {};

  for (var i in prop) {
    old[i] = prop[i];
    elem.style[i] = prop[i];
  }
  return old;
}

/**
 *
 * @param {String} elem
 * @param {Object} old
 */
function restoreCss(elem, old) {
  for (var i in old) {
    elem.style[i] = old[i];
  }
}
module.exports = {
  getBoxSpec,
  getEl,
  getstyle,
  getScrollTop,
  getScrollHeight,
  getWindowHeight,
};
