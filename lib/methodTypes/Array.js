/**
 * @description: 根据key和value获取指定项
 * @param {array}arr-资源数组
 * @param {string}val-值
 * @param {string}key-键名
 */
const getRowByVal = (arr, val, key) => arr.filter((item) => item[key] === val);

/**
 * @description:将非常规下拉选项数组转换成label,value常规状态
 * @param {array}arr-资源数组
 * @param {array}label ['label','enumName']  将原本key为enumName转为label
 * @param {array}value ['value','enumCode'] 将原本key为enumCode转为value
 * @returns {array}[{label:xxx,value:xxx}]
 */
const cLV = (arr, label, value) => arr.map((item) => ({ [label[0]]: item[label[1]], [value[0]]: item[value[1]] }));

/**
 *@description 获取两个普通数组不重复元素
 * @param {*} arr1
 * @param {*} arr2
 * @return {array}
 */
const getArrDifference = (arr1, arr2) => arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v));

/**
 * 根据属性去重数组
 * @param {array} arr 去重的数组
 * @param {string} fn 去重的key
 * @example utilscore.uniqueBy([{name:'1111'},{name:'1111'},{name:'222'},{name:'333'}],'name') => [{name:'1111'},{name:'222'},{name:'333'}
 *  普通数组去重
 * @param {array} arr 去重的数组
 * @example utilscore.uniqueBy ([1,2,2,3,4,3,4,7]) => [1, 2, 3, 4, 7] uniqueBy(arr, row => row)
 */
const uniqueBy = (arr, fn) => {
  return arr.filter(
    (element, index, array) =>
      array.findIndex((row) => {
        return typeof fn === "function" ? fn.call(this, row) === fn.call(this, element) : row[fn] === element[fn];
      }) === index
  );
};

/**
 * @description:比对两个数组,获取实际唯一项
 * @return {arr}
 */
const getUniqueFrom2Arr = (arr1, arr2) => arr1.filter((item) => !arr2.includes(item));

/**
 * @description:给数组对象里的每一项添加属性
 * @return {object}
 */
const addExtraProperty = (list, extra) =>
  (list || []).map((item) => ({
    ...item,
    ...extra,
  }));

/**
 * @description: 获取实际新增项 [{...},{...}]
 */
const getActualNewItems = function (orin, curr, key) {
  // orin 为基准数组对象 curr 为基准数组比较数组对象 根据某个键名最终筛选出基准数组对象里没有的新增项
  let list = [];
  curr.forEach((item) => {
    if (orin.every((it) => it[key] !== item[key])) list.push(item);
  });

  return list;
};

/**
 * @description: 合并列表子项数组并去重
 */
const mergeAndDiff = (list, key, name) => {
  let result = {};
  key instanceof Array && key.length > 0 ? key.forEach((item) => (result[item] = [])) : (result[key] = []);

  list.forEach((item) => {
    if (key instanceof Array && key.length > 0) {
      key.forEach((key) => {
        if (item[key] && item[key] instanceof Array && item[key].length > 0) {
          result[key] = arrayUnique([...result[key], ...item[key]], name);
        }
      });
    } else {
      result[key] = arrayUnique([...result[key], ...item[key]], name);
    }
  });

  return result;

  function arrayUnique(arr, name) {
    let hash = {};
    return arr.reduce((item, next) => {
      hash[next[name]] ? "" : (hash[next[name]] = true && item.push(next));
      return item;
    }, []);
  }
};

/**
 *
 * @description 在数组对象中,比较各项某个key值,获取最终筛选项
 * @param {*} arr
 * @param {*} key
 * @param {*} callback
 * @example e.glet persons = [
 * { name: "cherry", age: 30 },
 * { name: "alex", age: 40 },
 *
 * console.log(compareByKey(persons, "age", (prev, cur) => cur > prev));// { name: "ex", age: 60 },
 * ];
 */
const compareByKey = (arr, key, callback) => arr.reduce((acc, cur) => (callback(acc[key], cur[key]) ? cur : acc));

/**
 * @description 获取出现次数最多次数项
 * @param {array} arr
 * @return {array}
 */
const findMostItems = (arr) => {
  let results = [];
  const objGroup = arr.reduce((obj, name) => {
    // 统计每个元素出现次数
    obj[name] = obj[name] ? ++obj[name] : 1;
    return obj;
  }, {});

  const max = Math.max.apply(null, Object.values(objGroup)); // 获取出现最多次数项的出现次数

  Object.keys(objGroup).forEach((key) => {
    // 筛选出出现次数项最多的元素
    if (objGroup[key] == max) {
      results.push(key);
    }
  });
  return results;
};

/**
 * @description 统计数组每项元素出现次数
 * @param {array} arr
 * @param {string | void} key - 空的时候统计普通类型数组每项元素出现的次数,否则就只统计数组对象里指定key名的元素出现次数
 * @return {*}
 */
let countEachItem = (arr, key) => {
  return arr.reduce((prev, curr) => {
    if (key) {
      if (curr[key] in prev) {
        prev[curr[key]]++;
      } else {
        prev[curr[key]] = 1;
      }
    } else {
      if (curr in prev) {
        prev[curr]++;
      } else {
        prev[curr] = 1;
      }
    }

    return prev;
  }, {});
};

/**
 * @description 利用filter和map实现过滤数据和添加额外属性
 * @example e.g
 * let _arr = fMap(
 *   arr,
 *   (item) => item.age == 28,
 *   (item) => ({ ...item, sex: sex })
 * );
 */
let fMap = (arr, fn1, fn2) => (arr instanceof Array && arr.length > 0 ? arr.filter(fn1).map(fn2) : []);

/**
 * @description 根据数组对象的某个key进行排序
 * @params {key:string ,arr:array, callback:function}
 * @returns {array}
 */
const sortByKey = (key, arr, callback) => arr.sort(({ [key]: a }, { [key]: b }) => callback(a, b));

//將某个元素置頂   参数为数组，索引   例如toFirst([1,2,3,4,5],2)  返回[3,1,2,4,5]
const toFirst = (arr, index) => {
  if (index != 0) {
    arr.unshift(arr.splice(index, 1)[0]);
  }
};

//將某个元素往前移动一个格子  参数为数组，索引   例如upGo([1,2,3,4,5],2)  返回[1,3,2,4,5]
const upGo = (arr, index) => {
  if (index != 0) {
    arr[index] = arr.splice(index - 1, 1, arr[index])[0];
  } else {
    arr.push(arr.shift());
  }
};

//將某个元素往后移动一个格子  参数为数组，索引   例如downGo([1,2,3,4,5],2)  返回[1,2,4,3,5]
const downGo = (arr, index) => {
  if (index != arr.length - 1) {
    arr[index] = arr.splice(index + 1, 1, arr[index])[0];
  } else {
    arr.unshift(arr.splice(index, 1)[0]);
  }
};

//将某个元素设置到末尾  参数为数组，索引   例如toEnd([1,2,3,4,5],2)  返回[1,2,4,5,3]
const toEnd = (arr, index) => {
  arr.push(arr[index]);
  arr.splice(index, 1);
  return arr;
};

const addLastNewMember = (list, item, key) => {
  const { [key]: v } = item;
  for (let i = 0; i < list.length; i++) {
    const { [key]: _v } = list[i];
    if (v == _v) {
      list.splice(i, 1);
    }
  }
  list.push(item);
};

/**
 *
 * @description 给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。否则, 返回false。
 * @param {*} arr
 * @param {*} sum
 */
const findSum = (arr, sum) => arr.some(((set) => (n) => set.has(n) || !set.add(sum - n))(new Set()));

/**
 *
 *@description 获取两个普通数组的交集项
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
const getIntersectionItems = (arr1, arr2) => new Set([...arr1].filter((x) => new Set(arr2).has(x)));

/**
 *
 * @description 使两个数组并集
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
const setUnion = (arr1, arr2) => new Set([...new Set(arr1), ...new Set(arr2)]);

/**
 *
 *@description 和原数组根据某个键值进行比较 只添加原数组不存在的项
 * @param {*} orig
 * @param {*} curr
 * @param {*} key
 * @return {*}
 */
const setUnionByKey = (orig, curr, key) => {
  if (orig.length == 0) return curr;
  if (curr.length == 0) return orig;

  curr.forEach((item) => {
    for (let i = 0; i < orig.length; i++) {
      const it = orig[i];
      if (it[key] == item[key]) return;
    }
    orig.push(item);
  });
  return orig;
};

/**
 *
 * @description 数组对象去重
 * @param {*} arr
 * @param {*} name
 * @return {*}
 */
const arrayUnique2 = (arr, name) => ((myMap) => arr.filter((item) => !myMap.has(item.name) && myMap.set(item.name, true)))(new Map());

/**
 *
 * @description 回调函数获取数组的每项索引和值
 * @param {array} arr
 * @param {function} callback
 */
const getArrEntries = (arr, callback) => {
  for (const item of arr.entries()) callback && callback(item);
};

/**
 * 乱序（洗牌算法）
 *
 * @param {Array} arr 数组
 * @returns {Array} 经过随机乱序后的数组
 */
const shuffle = (arr = []) => {
  let cursor = arr.length;

  while (--cursor) {
    const random = Math.floor(Math.random() * cursor);
    [arr[cursor], arr[random]] = [arr[random], arr[cursor]];
  }

  return arr;
};

/**
 *
 *@description 获取数组对象交集
 * @param {*} arr1
 * @param {*} arr2
 * @param {*} key
 * @return {*}
 */
const getIntersectionByKey = (arr1, arr2, key) => {
  const ids = arr1.map((item) => item[key]);
  return arr2.filter((v) => ~ids.indexOf(v[key]));
};

/**
 *
 * @description 判断target项内容是否全部都在src项能找到
 * @param {array} target
 * @param {array} src
 * @param {string} key
 * @return {boolean}
 */
const fullInclude = (target, src, key) => {
  const arr1 = target;
  const arr2 = src;
  const lg = arr1.length;
  let intersectionLists = [];
  if (key) {
    const ids = arr1.map((item) => item[key]);

    intersectionLists = arr2.filter((v) => ~ids.indexOf(v[key]));
    return lg === intersectionLists.length;
  } else {
    intersectionLists = [...new Set([...arr1].filter((x) => new Set(arr2).has(x)))];
  }
  return lg === intersectionLists.length;
};

module.exports = {
  getRowByVal,
  cLV,
  getArrDifference,
  uniqueBy,
  getUniqueFrom2Arr,
  addExtraProperty,
  getActualNewItems,
  mergeAndDiff,
  compareByKey,
  findMostItems,
  countEachItem,
  fMap,
  sortByKey,
  toFirst,
  upGo,
  downGo,
  toEnd,
  addLastNewMember,
  findSum,
  getIntersectionItems,
  setUnion,
  arrayUnique2,
  setUnionByKey,
  getArrEntries,
  shuffle,
  getIntersectionByKey,
  fullInclude,
};
