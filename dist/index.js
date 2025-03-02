(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Api = __webpack_require__(40);
var Arr = __webpack_require__(96);
var Dom = __webpack_require__(139);
var Num = __webpack_require__(140);
var Obj = __webpack_require__(141);
var Str = __webpack_require__(151);
var Url = __webpack_require__(152);
var Validate = __webpack_require__(153);
var Explorer = __webpack_require__(158);
var Images = __webpack_require__(159);
var Others = __webpack_require__(160);
var Curry = __webpack_require__(161);
var Download = __webpack_require__(162);
var Http = __webpack_require__(163);
var Tip = __webpack_require__(166);
var Functions = __webpack_require__(167);

module.exports = (0, _extends3.default)({}, Api, Arr, Dom, Num, Obj, Str, Url, Validate, Explorer, Images, Others, Curry, Download, Http, Tip, Functions);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(4);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(21) });


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var ctx = __webpack_require__(8);
var hide = __webpack_require__(10);
var has = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(9);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(15);
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(38);
var toObject = __webpack_require__(39);
var IObject = __webpack_require__(25);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(23);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(20);
var toIObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(28)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(25);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 26 */
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 27 */
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24);
var toLength = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(31);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(30);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 30 */
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(30);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(7);
var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(34) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = true;


/***/ }),
/* 35 */
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 36 */
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof2 = __webpack_require__(41);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(74);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 递归进行ajax请求
 * @param {array} apiList
 * @param {this | function} fn
 * @example apiList : [] url集合 ; fn this | callback (url,res,rej)
 */
var request = function request(apiList, fn) {
  var self = fn || undefined;

  var reslist = [];
  var counts = 0;

  (function apirequest(url) {
    var p = new _promise2.default(function (res, rej) {
      if (fn && typeof fn === 'function') {
        fn(url, res, rej);
      } else {
        self.$axios.post(url).then(res).catch(rej);
      }
    });
    p.then(function (res) {
      counts++;
      if (counts > apiList.length) {
        return;
      }

      apirequest(apiList[counts]);
    }).catch(function (err) {
      counts++;
      if (counts > apiList.length) {
        return;
      }
      reslist.push({ index: counts - 1, url: url, fail: err.response });
      apirequest(apiList[counts]);
      console.warn(reslist);
    });
  })(apiList[0]);
};

/**
 * @description 用promise 二次封装async await
 * @returns {promise}
 */
var asyncHandle = function asyncHandle(promise) {
  var p = void 0;
  console.log(typeof promise === 'undefined' ? 'undefined' : (0, _typeof3.default)(promise));
  if (typeof promise === 'function') {
    p = promise();
  } else {
    if (!promise || !promise.then) {
      return new _promise2.default(function (resolve, reject) {
        return reject(new Error('requires a promise as the param'));
      }).catch(function (err) {
        return [err, null];
      });
    } else {
      p = promise;
    }
  }
  return p.then(function (res) {
    return [null, res];
  }).catch(function (err) {
    return [err, null];
  });
};

/**
 * @description 模拟接口请求
 * @returns {promise}
 */
var simulateRequest = function simulateRequest(_ref) {
  var status = _ref.status,
      reason = _ref.reason,
      success = _ref.success,
      result = _ref.result;

  var data = {
    success: success === false ? false : true,
    status: status ? status : success ? '200' : '400',
    reason: reason ? reason : success ? 'OK' : 'FAIL',
    result: result || ''
  };
  return new _promise2.default(function (res, rej) {
    return setTimeout(function () {
      return data.success ? res(data) : rej(new Error(data));
    }, 200);
  });
};
module.exports = {
  request: request,
  asyncHandle: asyncHandle,
  simulateRequest: simulateRequest

};

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(42);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(61);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(44);
__webpack_require__(56);
module.exports = __webpack_require__(60).f('iterator');


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(45)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(30);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(47);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(48);
var $iterCreate = __webpack_require__(49);
var setToStringTag = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(55);
var ITERATOR = __webpack_require__(54)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(10);


/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = {};


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(53);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(54)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 53 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = __webpack_require__(11).f;
var has = __webpack_require__(20);
var TAG = __webpack_require__(54)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(35);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 55 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(20);
var toObject = __webpack_require__(39);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(57);
var global = __webpack_require__(6);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(48);
var TO_STRING_TAG = __webpack_require__(54)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 57 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(58);
var step = __webpack_require__(59);
var Iterators = __webpack_require__(48);
var toIObject = __webpack_require__(24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = function () { /* empty */ };


/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(54);


/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 62 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(63);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(47);
var META = __webpack_require__(64).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(33);
var setToStringTag = __webpack_require__(53);
var uid = __webpack_require__(35);
var wks = __webpack_require__(54);
var wksExt = __webpack_require__(60);
var wksDefine = __webpack_require__(65);
var enumKeys = __webpack_require__(66);
var isArray = __webpack_require__(67);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(39);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(18);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(50);
var gOPNExt = __webpack_require__(68);
var $GOPD = __webpack_require__(70);
var $GOPS = __webpack_require__(37);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(38).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 64 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(35)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(20);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 65 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(60);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 66 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(38);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 67 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(26);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 68 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(24);
var gOPN = __webpack_require__(69).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(23);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(38);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(18);
var has = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(14);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 71 */
/***/ (() => {



/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(65)('asyncIterator');


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(65)('observable');


/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(71);
__webpack_require__(44);
__webpack_require__(56);
__webpack_require__(76);
__webpack_require__(94);
__webpack_require__(95);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(34);
var global = __webpack_require__(6);
var ctx = __webpack_require__(8);
var classof = __webpack_require__(77);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(9);
var anInstance = __webpack_require__(78);
var forOf = __webpack_require__(79);
var speciesConstructor = __webpack_require__(83);
var task = __webpack_require__(84).set;
var microtask = __webpack_require__(86)();
var newPromiseCapabilityModule = __webpack_require__(87);
var perform = __webpack_require__(88);
var userAgent = __webpack_require__(89);
var promiseResolve = __webpack_require__(90);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(54)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(91)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(53)($Promise, PROMISE);
__webpack_require__(92)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(93)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(26);
var TAG = __webpack_require__(54)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 79 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(8);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(29);
var getIterFn = __webpack_require__(82);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 80 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 81 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(48);
var ITERATOR = __webpack_require__(54)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(77);
var ITERATOR = __webpack_require__(54)('iterator');
var Iterators = __webpack_require__(48);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 83 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(9);
var SPECIES = __webpack_require__(54)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 84 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(8);
var invoke = __webpack_require__(85);
var html = __webpack_require__(52);
var cel = __webpack_require__(17);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(26)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 85 */
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 86 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(84).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(26)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 87 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(9);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 88 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 89 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 90 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(87);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hide = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 92 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(54)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 93 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(54)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(7);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(83);
var promiseResolve = __webpack_require__(90);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(87);
var perform = __webpack_require__(88);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 96 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = __webpack_require__(100);

var _map2 = _interopRequireDefault(_map);

var _set = __webpack_require__(116);

var _set2 = _interopRequireDefault(_set);

var _keys = __webpack_require__(122);

var _keys2 = _interopRequireDefault(_keys);

var _values = __webpack_require__(126);

var _values2 = _interopRequireDefault(_values);

var _toConsumableArray2 = __webpack_require__(130);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(135);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description: 根据key和value获取指定项
 * @param {array}arr-资源数组
 * @param {string}val-值
 * @param {string}key-键名
 */
var getRowByVal = function getRowByVal(arr, val, key) {
  return arr.filter(function (item) {
    return item[key] === val;
  });
};

/**
 * @description:将非常规下拉选项数组转换成label,value常规状态
 * @param {array}arr-资源数组
 * @param {array}label ['label','enumName']  将原本key为enumName转为label
 * @param {array}value ['value','enumCode'] 将原本key为enumCode转为value
 * @returns {array}[{label:xxx,value:xxx}]
 */
var cLV = function cLV(arr, label, value) {
  return arr.map(function (item) {
    var _ref;

    return _ref = {}, (0, _defineProperty3.default)(_ref, label[0], item[label[1]]), (0, _defineProperty3.default)(_ref, value[0], item[value[1]]), _ref;
  });
};

/**
 *@description 获取两个普通数组不重复元素
 * @param {*} arr1
 * @param {*} arr2
 * @return {array}
 */
var getArrDifference = function getArrDifference(arr1, arr2) {
  return arr1.concat(arr2).filter(function (v, i, arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  });
};

/**
 * 根据属性去重数组
 * @param {array} arr 去重的数组
 * @param {string} fn 去重的key
 * @example utilscore.uniqueBy([{name:'1111'},{name:'1111'},{name:'222'},{name:'333'}],'name') => [{name:'1111'},{name:'222'},{name:'333'}
 *  普通数组去重
 * @param {array} arr 去重的数组
 * @example utilscore.uniqueBy ([1,2,2,3,4,3,4,7]) => [1, 2, 3, 4, 7] uniqueBy(arr, row => row)
 */
var uniqueBy = function uniqueBy(arr, fn) {
  return arr.filter(function (element, index, array) {
    return array.findIndex(function (row) {
      return typeof fn === "function" ? fn.call(undefined, row) === fn.call(undefined, element) : row[fn] === element[fn];
    }) === index;
  });
};

/**
 * @description:比对两个数组,获取实际唯一项
 * @return {arr}
 */
var getUniqueFrom2Arr = function getUniqueFrom2Arr(arr1, arr2) {
  return arr1.filter(function (item) {
    return !arr2.includes(item);
  });
};

/**
 * @description:给数组对象里的每一项添加属性
 * @return {object}
 */
var addExtraProperty = function addExtraProperty(list, extra) {
  return (list || []).map(function (item) {
    return (0, _extends3.default)({}, item, extra);
  });
};

/**
 * @description: 获取实际新增项 [{...},{...}]
 */
var getActualNewItems = function getActualNewItems(orin, curr, key) {
  // orin 为基准数组对象 curr 为基准数组比较数组对象 根据某个键名最终筛选出基准数组对象里没有的新增项
  var list = [];
  curr.forEach(function (item) {
    if (orin.every(function (it) {
      return it[key] !== item[key];
    })) list.push(item);
  });

  return list;
};

/**
 * @description: 合并列表子项数组并去重
 */
var mergeAndDiff = function mergeAndDiff(list, key, name) {
  var result = {};
  key instanceof Array && key.length > 0 ? key.forEach(function (item) {
    return result[item] = [];
  }) : result[key] = [];

  list.forEach(function (item) {
    if (key instanceof Array && key.length > 0) {
      key.forEach(function (key) {
        if (item[key] && item[key] instanceof Array && item[key].length > 0) {
          result[key] = arrayUnique([].concat((0, _toConsumableArray3.default)(result[key]), (0, _toConsumableArray3.default)(item[key])), name);
        }
      });
    } else {
      result[key] = arrayUnique([].concat((0, _toConsumableArray3.default)(result[key]), (0, _toConsumableArray3.default)(item[key])), name);
    }
  });

  return result;

  function arrayUnique(arr, name) {
    var hash = {};
    return arr.reduce(function (item, next) {
      hash[next[name]] ? "" : hash[next[name]] =  true && item.push(next);
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
var compareByKey = function compareByKey(arr, key, callback) {
  return arr.reduce(function (acc, cur) {
    return callback(acc[key], cur[key]) ? cur : acc;
  });
};

/**
 * @description 获取出现次数最多次数项
 * @param {array} arr
 * @return {array}
 */
var findMostItems = function findMostItems(arr) {
  var results = [];
  var objGroup = arr.reduce(function (obj, name) {
    // 统计每个元素出现次数
    obj[name] = obj[name] ? ++obj[name] : 1;
    return obj;
  }, {});

  var max = Math.max.apply(null, (0, _values2.default)(objGroup)); // 获取出现最多次数项的出现次数

  (0, _keys2.default)(objGroup).forEach(function (key) {
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
var countEachItem = function countEachItem(arr, key) {
  return arr.reduce(function (prev, curr) {
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
var fMap = function fMap(arr, fn1, fn2) {
  return arr instanceof Array && arr.length > 0 ? arr.filter(fn1).map(fn2) : [];
};

/**
 * @description 根据数组对象的某个key进行排序
 * @params {key:string ,arr:array, callback:function}
 * @returns {array}
 */
var sortByKey = function sortByKey(key, arr, callback) {
  return arr.sort(function (_ref2, _ref3) {
    var a = _ref2[key];
    var b = _ref3[key];
    return callback(a, b);
  });
};

//將某个元素置頂   参数为数组，索引   例如toFirst([1,2,3,4,5],2)  返回[3,1,2,4,5]
var toFirst = function toFirst(arr, index) {
  if (index != 0) {
    arr.unshift(arr.splice(index, 1)[0]);
  }
};

//將某个元素往前移动一个格子  参数为数组，索引   例如upGo([1,2,3,4,5],2)  返回[1,3,2,4,5]
var upGo = function upGo(arr, index) {
  if (index != 0) {
    arr[index] = arr.splice(index - 1, 1, arr[index])[0];
  } else {
    arr.push(arr.shift());
  }
};

//將某个元素往后移动一个格子  参数为数组，索引   例如downGo([1,2,3,4,5],2)  返回[1,2,4,3,5]
var downGo = function downGo(arr, index) {
  if (index != arr.length - 1) {
    arr[index] = arr.splice(index + 1, 1, arr[index])[0];
  } else {
    arr.unshift(arr.splice(index, 1)[0]);
  }
};

//将某个元素设置到末尾  参数为数组，索引   例如toEnd([1,2,3,4,5],2)  返回[1,2,4,5,3]
var toEnd = function toEnd(arr, index) {
  arr.push(arr[index]);
  arr.splice(index, 1);
  return arr;
};

var addLastNewMember = function addLastNewMember(list, item, key) {
  var v = item[key];

  for (var i = 0; i < list.length; i++) {
    var _v = list[i][key];

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
var findSum = function findSum(arr, sum) {
  return arr.some(function (set) {
    return function (n) {
      return set.has(n) || !set.add(sum - n);
    };
  }(new _set2.default()));
};

/**
 *
 *@description 获取两个普通数组的交集项
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
var getIntersectionItems = function getIntersectionItems(arr1, arr2) {
  return new _set2.default([].concat((0, _toConsumableArray3.default)(arr1)).filter(function (x) {
    return new _set2.default(arr2).has(x);
  }));
};

/**
 *
 * @description 使两个数组并集
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
var setUnion = function setUnion(arr1, arr2) {
  return new _set2.default([].concat((0, _toConsumableArray3.default)(new _set2.default(arr1)), (0, _toConsumableArray3.default)(new _set2.default(arr2))));
};

/**
 *
 *@description 和原数组根据某个键值进行比较 只添加原数组不存在的项
 * @param {*} orig
 * @param {*} curr
 * @param {*} key
 * @return {*}
 */
var setUnionByKey = function setUnionByKey(orig, curr, key) {
  if (orig.length == 0) return curr;
  if (curr.length == 0) return orig;

  curr.forEach(function (item) {
    for (var i = 0; i < orig.length; i++) {
      var it = orig[i];
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
var arrayUnique2 = function arrayUnique2(arr, name) {
  return function (myMap) {
    return arr.filter(function (item) {
      return !myMap.has(item.name) && myMap.set(item.name, true);
    });
  }(new _map2.default());
};

/**
 *
 * @description 回调函数获取数组的每项索引和值
 * @param {array} arr
 * @param {function} callback
 */
var getArrEntries = function getArrEntries(arr, callback) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(arr.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      callback && callback(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/**
 * 乱序（洗牌算法）
 *
 * @param {Array} arr 数组
 * @returns {Array} 经过随机乱序后的数组
 */
var shuffle = function shuffle() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var cursor = arr.length;

  while (--cursor) {
    var random = Math.floor(Math.random() * cursor);
    var _ref4 = [arr[random], arr[cursor]];
    arr[cursor] = _ref4[0];
    arr[random] = _ref4[1];
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
var getIntersectionByKey = function getIntersectionByKey(arr1, arr2, key) {
  var ids = arr1.map(function (item) {
    return item[key];
  });
  return arr2.filter(function (v) {
    return ~ids.indexOf(v[key]);
  });
};

var hasSingleTarget = function hasSingleTarget(list, target, key) {
  var arr = list.filter(function (item) {
    return key ? item[key] === target[key] : item === target;
  });
  return arr.length > 0 ? true : false;
};

/**
 *
 * @description 判断target项内容是否全部都在src项能找到
 * @param {array} target
 * @param {array} src
 * @param {string} key
 * @return {boolean}
 */
var hasAllTargets = function hasAllTargets(targets, src, key) {
  var intersectionLists = [];
  if (key) {
    var ids = targets.map(function (item) {
      return item[key];
    });
    intersectionLists = src.filter(function (v) {
      return ~ids.indexOf(v[key]);
    });
  } else {
    intersectionLists = [].concat((0, _toConsumableArray3.default)(new _set2.default([].concat((0, _toConsumableArray3.default)(targets)).filter(function (x) {
      return new _set2.default(src).has(x);
    }))));
  }
  return targets.length === intersectionLists.length;
};

/**
 *
 * @description 输入数字转换成值递增数组 从1开始  输入3 返回[1,2,3]
 * @param {number} nums
 * @return {*}
 */
var num2Arr = function num2Arr(nums) {
  var arr = [];
  nums = +nums + 1;
  while (--nums) {
    arr.push(nums);
  }return arr.sort();
};

module.exports = {
  getRowByVal: getRowByVal,
  cLV: cLV,
  getArrDifference: getArrDifference,
  uniqueBy: uniqueBy,
  getUniqueFrom2Arr: getUniqueFrom2Arr,
  addExtraProperty: addExtraProperty,
  getActualNewItems: getActualNewItems,
  mergeAndDiff: mergeAndDiff,
  compareByKey: compareByKey,
  findMostItems: findMostItems,
  countEachItem: countEachItem,
  fMap: fMap,
  sortByKey: sortByKey,
  toFirst: toFirst,
  upGo: upGo,
  downGo: downGo,
  toEnd: toEnd,
  addLastNewMember: addLastNewMember,
  findSum: findSum,
  getIntersectionItems: getIntersectionItems,
  setUnion: setUnion,
  arrayUnique2: arrayUnique2,
  setUnionByKey: setUnionByKey,
  getArrEntries: getArrEntries,
  shuffle: shuffle,
  getIntersectionByKey: getIntersectionByKey,
  hasAllTargets: hasAllTargets,
  hasSingleTarget: hasSingleTarget,
  num2Arr: num2Arr
};

/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(56);
__webpack_require__(44);
module.exports = __webpack_require__(99);


/***/ }),
/* 99 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(12);
var get = __webpack_require__(82);
module.exports = __webpack_require__(7).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 100 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(71);
__webpack_require__(44);
__webpack_require__(56);
__webpack_require__(102);
__webpack_require__(109);
__webpack_require__(112);
__webpack_require__(114);
module.exports = __webpack_require__(7).Map;


/***/ }),
/* 102 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(103);
var validate = __webpack_require__(104);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(105)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 103 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = __webpack_require__(11).f;
var create = __webpack_require__(50);
var redefineAll = __webpack_require__(91);
var ctx = __webpack_require__(8);
var anInstance = __webpack_require__(78);
var forOf = __webpack_require__(79);
var $iterDefine = __webpack_require__(46);
var step = __webpack_require__(59);
var setSpecies = __webpack_require__(92);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(64).fastKey;
var validate = __webpack_require__(104);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 104 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 105 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(5);
var meta = __webpack_require__(64);
var fails = __webpack_require__(16);
var hide = __webpack_require__(10);
var redefineAll = __webpack_require__(91);
var forOf = __webpack_require__(79);
var anInstance = __webpack_require__(78);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(53);
var dP = __webpack_require__(11).f;
var each = __webpack_require__(106)(0);
var DESCRIPTORS = __webpack_require__(15);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 106 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(8);
var IObject = __webpack_require__(25);
var toObject = __webpack_require__(39);
var toLength = __webpack_require__(29);
var asc = __webpack_require__(107);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 107 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(108);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 108 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(67);
var SPECIES = __webpack_require__(54)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(110)('Map') });


/***/ }),
/* 110 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(77);
var from = __webpack_require__(111);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 111 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forOf = __webpack_require__(79);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(113)('Map');


/***/ }),
/* 113 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(115)('Map');


/***/ }),
/* 115 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);
var aFunction = __webpack_require__(9);
var ctx = __webpack_require__(8);
var forOf = __webpack_require__(79);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 116 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(71);
__webpack_require__(44);
__webpack_require__(56);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
module.exports = __webpack_require__(7).Set;


/***/ }),
/* 118 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(103);
var validate = __webpack_require__(104);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(105)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(110)('Set') });


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(113)('Set');


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(115)('Set');


/***/ }),
/* 122 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(124);
module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(39);
var $keys = __webpack_require__(22);

__webpack_require__(125)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 125 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(7);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 126 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(128);
module.exports = __webpack_require__(7).Object.values;


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5);
var $values = __webpack_require__(129)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 129 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(15);
var getKeys = __webpack_require__(22);
var toIObject = __webpack_require__(24);
var isEnum = __webpack_require__(38).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(131);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 131 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(44);
__webpack_require__(133);
module.exports = __webpack_require__(7).Array.from;


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(8);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(39);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var toLength = __webpack_require__(29);
var createProperty = __webpack_require__(134);
var getIterFn = __webpack_require__(82);

$export($export.S + $export.F * !__webpack_require__(93)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 134 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(136);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 136 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(138);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 139 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _toConsumableArray2 = __webpack_require__(130);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(41);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(135);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Dom;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 获取盒子宽高，滚动距离
 * @returns {string}
 */
var getBoxSpec = function getBoxSpec(key, el) {
  var _cat;

  var res = [];
  var cat = (_cat = {}, (0, _defineProperty3.default)(_cat, "网页可见区域宽", function _() {
    return document.body.clientWidth;
  }), (0, _defineProperty3.default)(_cat, "vw", function vw() {
    return document.body.clientWidth;
  }), (0, _defineProperty3.default)(_cat, "网页可见区域高", function _() {
    return document.body.clientHeight;
  }), (0, _defineProperty3.default)(_cat, "vh", function vh() {
    return document.body.clientHeight;
  }), (0, _defineProperty3.default)(_cat, "网页被卷去的高", function _() {
    return document.body.scrollTop;
  }), (0, _defineProperty3.default)(_cat, "pst", function pst() {
    return document.body.scrollTop;
  }), (0, _defineProperty3.default)(_cat, "网页被卷去的左", function _() {
    return document.body.scrollLeft;
  }), (0, _defineProperty3.default)(_cat, "psl", function psl() {
    return document.body.scrollLeft;
  }), (0, _defineProperty3.default)(_cat, "目标滚动高度", function _() {
    return el ? document.querySelector(el).scrollTop : warn();
  }), (0, _defineProperty3.default)(_cat, "st", function st() {
    return el ? document.querySelector(el).scrollTop : warn();
  }), (0, _defineProperty3.default)(_cat, "目标滚动的左", function _() {
    return el ? document.querySelector(el).scrollLeft : warn();
  }), (0, _defineProperty3.default)(_cat, "sl", function sl() {
    return el ? document.querySelector(el).scrollLeft : warn();
  }), (0, _defineProperty3.default)(_cat, "高", function _() {
    return el ? document.querySelector(el).clientHeight : warn();
  }), (0, _defineProperty3.default)(_cat, "h", function h() {
    return el ? document.querySelector(el).clientHeight : warn();
  }), (0, _defineProperty3.default)(_cat, "宽", function _() {
    return el ? document.querySelector(el).clientWidth : warn();
  }), (0, _defineProperty3.default)(_cat, "w", function w() {
    return el ? document.querySelector(el).clientWidth : warn();
  }), _cat);
  if (typeof key === "string") {
    return cat[key] ? cat[key]() : null;
  }
  if ((typeof key === "undefined" ? "undefined" : (0, _typeof3.default)(key)) === "object" && key.constructor === Array && key.length > 0) {
    for (var i = 0; i < key.length; i++) {
      cat[key[i]] && res.push(cat[key[i]]());
    }
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
var getEl = function getEl() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  keyList = list[0] instanceof Array ? list[0] : list;
  if (keyList.length > 0) {
    var el = void 0;
    var i = 0;
    return function getBySelector() {
      if (arguments.length == 1) {
        var _document;

        return (_document = document).querySelector.apply(_document, arguments);
      }
      if (i < arguments.length - 1) {
        var key0 = arguments.length <= i ? undefined : arguments[i];
        var key1 = arguments.length <= i + 1 ? undefined : arguments[i + 1];
        if (i == 0) {
          el = document.querySelector(key0).querySelector(key1);
          i++;
          getBySelector.apply(undefined, arguments);
        } else if (i < arguments.length - 1) {
          el = el.querySelector(key1);
          i++;
        }
      }

      return el;
    }.apply(undefined, (0, _toConsumableArray3.default)(keyList));
  } else {
    console.warn("parameter 'list' could not be empty # function getEl #");
  }
};

/**
 * @description 按顺序获取顺序最后一个指定元素的样式
 * @returns {string}
 */
function getstyle(cls) {
  for (var _len2 = arguments.length, ele = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    ele[_key2 - 1] = arguments[_key2];
  }

  var getEl = function getEl() {
    for (var _len3 = arguments.length, list = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      list[_key3] = arguments[_key3];
    }

    keyList = list[0] instanceof Array ? list[0] : list;
    if (keyList.length > 0) {
      var el = void 0;
      var i = 0;
      return function getBySelector() {
        if (arguments.length == 1) {
          var _document2;

          return (_document2 = document).querySelector.apply(_document2, arguments);
        }
        if (i < arguments.length - 1) {
          var key0 = arguments.length <= i ? undefined : arguments[i];
          var key1 = arguments.length <= i + 1 ? undefined : arguments[i + 1];
          if (i == 0) {
            el = document.querySelector(key0).querySelector(key1);
            i++;
            getBySelector.apply(undefined, arguments);
          } else if (i < arguments.length - 1) {
            el = el.querySelector(key1);
            i++;
          }
        }

        return el;
      }.apply(undefined, (0, _toConsumableArray3.default)(keyList));
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
var getScrollTop = function getScrollTop() {
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
var getScrollHeight = function getScrollHeight() {
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
var getWindowHeight = function getWindowHeight() {
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
    position: "absolute"
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

function getPosition(element) {
  var offsety = 0;
  offsety += element.offsetTop;
  var offsetx = 0;
  offsetx += element.offsetLeft;
  if (element.offsetParent != null) {
    getPosition(element.offsetParent);
  }
  return { Left: offsetx, Top: offsety };
}

/**
 *
 * @description 拖拽函数
 * @param {object} target 要被拖动的元素
 * @param {function} callback 鼠标按压,拖动以及松开时调用的函数
 * (可以结构type类型出来进行区分 onmouseup , onmousemove,onmousedown)
 *
 */
var drag = function drag(target, callback) {
  var getCss = function getCss(o, key) {
    return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
  };

  var params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
  };
  if (getCss(target, "left") !== "auto") {
    params.left = getCss(target, "left");
  }
  if (getCss(target, "top") !== "auto") {
    params.top = getCss(target, "top");
  }

  target.onmousedown = function (event) {
    params.flag = true;
    if (!event) {
      event = window.event;
      target.onselectstart = function () {
        return false;
      };
    }
    var e = event;
    params.currentX = e.clientX;
    params.currentY = e.clientY;
    if (typeof callback == "function") {
      callback({
        type: "onmousedown",
        ref: target,

        left: parseInt(params.left),
        right: parseInt(params.right),
        clientX: params.clientX,
        clientY: params.clientY
      });
    }
  };
  document.onmouseup = function () {
    params.flag = false;
    if (getCss(target, "left") !== "auto") {
      params.left = getCss(target, "left");
    }
    if (getCss(target, "top") !== "auto") {
      params.top = getCss(target, "top");
    }
    if (typeof callback == "function") {
      callback({
        type: "onmouseup",
        ref: target,
        left: parseInt(params.left),
        top: parseInt(params.top),
        clientX: params.clientX,
        clientY: params.clientY
      });
    }
  };
  document.onmousemove = function (event) {
    var e = event ? event : window.event;
    if (params.flag) {
      var nowX = e.clientX;
      var nowY = e.clientY;
      var disX = nowX - params.currentX;
      var disY = nowY - params.currentY;
      if (typeof callback == "function") {
        callback({
          type: "onmousemove",
          ref: target,
          disX: disX,
          disY: disY,
          left: parseInt(params.left),
          right: parseInt(params.right),
          clientX: params.clientX,
          clientY: params.clientY
        });
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      return false;
    }
  };
};

function getTextWidth(content, fontSize) {
  var span = document.createElement("span");
  span.innerText = content;
  span.style.fontSize = fontSize + "px";
  span.style.position = "absolute";
  document.body.appendChild(span);
  var width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
}

var Dom = (_Dom = {
  getTextWidth: getTextWidth,
  getBoxSpec: getBoxSpec,
  getEl: getEl,
  getstyle: getstyle,
  getScrollTop: getScrollTop,
  getScrollHeight: getScrollHeight,
  getWindowHeight: getWindowHeight,
  $: $,
  prev: prev,
  next: next,
  first: first,
  last: last,
  parent: parent,
  tag: tag,
  hasClass: hasClass,
  text: text,
  attr: attr,
  before: before,
  create: create,
  checkElem: checkElem,
  append: append
}, (0, _defineProperty3.default)(_Dom, "checkElem", checkElem), (0, _defineProperty3.default)(_Dom, "remove", remove), (0, _defineProperty3.default)(_Dom, "empty", empty), (0, _defineProperty3.default)(_Dom, "stopBubble", stopBubble), (0, _defineProperty3.default)(_Dom, "stopDefault", stopDefault), (0, _defineProperty3.default)(_Dom, "getStyle", getStyle), (0, _defineProperty3.default)(_Dom, "pageX", pageX), (0, _defineProperty3.default)(_Dom, "pageY", pageY), (0, _defineProperty3.default)(_Dom, "parentX", parentX), (0, _defineProperty3.default)(_Dom, "parentY", parentY), (0, _defineProperty3.default)(_Dom, "posX", posX), (0, _defineProperty3.default)(_Dom, "posY", posY), (0, _defineProperty3.default)(_Dom, "setX", setX), (0, _defineProperty3.default)(_Dom, "setY", setY), (0, _defineProperty3.default)(_Dom, "getHeight", getHeight), (0, _defineProperty3.default)(_Dom, "getWidth", getWidth), (0, _defineProperty3.default)(_Dom, "fullHeight", fullHeight), (0, _defineProperty3.default)(_Dom, "resetCss", resetCss), (0, _defineProperty3.default)(_Dom, "restoreCss", restoreCss), (0, _defineProperty3.default)(_Dom, "drag", drag), _Dom);

module.exports = {
  Dom: Dom
};

/***/ }),
/* 140 */
/***/ ((module) => {

"use strict";


/**
 * 方法：生成n ~ m 随机数
 * 调用：common.random(0,10);
 * @param min = 最小值
 * @param max = 最大值
 * @returns {number}
 */
var random = function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
module.exports = {
  random: random
};

/***/ }),
/* 141 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _slicedToArray2 = __webpack_require__(142);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(146);

var _entries2 = _interopRequireDefault(_entries);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(41);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(122);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(149);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description: 过滤对象里空的键值对
 * @param {options} 基准对象
 * @return: {Object}
 */
var objectFilter = function objectFilter(options) {
  var ops = {};
  var isEmpty = function isEmpty(v) {
    //是否为空数据
    if (v === "" || v === "" || v === "undefined" || v === undefined || v === null) {
      return true;
    }
    if ((0, _stringify2.default)(v) == "{}" || (0, _stringify2.default)(v) == "[]" || (0, _stringify2.default)(v) == "[{}]") {
      return true;
    }
    return false;
  };
  (0, _keys2.default)(options).forEach(function (key) {
    return !isEmpty(options[key]) && (ops[key] = options[key]);
  });
  return ops;
};

/**
 * @description: 清空对象
 * @param {object}obj-对象
 */
var clearObj = function clearObj(obj) {
  if (obj.constructor !== Object) return;
  for (var key in obj) {
    delete obj[key];
  }
};

/**
 * @description 深度拷贝对象
 * @param {object} obj
 * @return {object}
 */
var deepClone = function deepClone(obj) {
  var new_obj = Array.isArray(obj) ? [] : {};
  if ((typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) != "object") return new_obj = obj;
  if (obj instanceof Array) {
    //数组
    for (var i = 0; i < obj.length; i++) {
      new_obj[i] = obj[i];
      if ((0, _typeof3.default)(new_obj[i]) == "object") deepClone(new_obj[i]); //数组中的对象
    }
  } else {
    //对象
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 对象中的数组和对象
        if ((0, _typeof3.default)(obj[key]) == "object") new_obj[key] = deepClone(obj[key]);else new_obj[key] = obj[key];
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
var selector = function selector(from, selectors) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  keys = keys || selectors.match(/([\w]+)/g);
  if (!!keys && !!keys.length && !!from) {
    var key = keys.splice(0, 1);
    var value = from[key];
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
var replaceKeys = function replaceKeys(obj, keyOrig, keyCurr) {
  var newObj = (0, _extends3.default)({}, obj);
  if (typeof keyOrig === "string" && typeof keyCurr === "string") {
    newObj[keyCurr] = obj[keyOrig];
    delete newObj[keyOrig];
  } else if ((typeof keyOrig === "undefined" ? "undefined" : (0, _typeof3.default)(keyOrig)) === "object" && keyOrig instanceof Array && keyOrig.length > 0 && (typeof keyCurr === "undefined" ? "undefined" : (0, _typeof3.default)(keyCurr)) === "object" && keyCurr instanceof Array && keyCurr.length > 0) {
    for (var i = 0; i < keyOrig.length; i++) {
      (newObj[keyCurr[i]] = newObj[keyOrig[i]]) && delete newObj[keyOrig[i]];
    }
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
var convertNum2Str = function convertNum2Str(obj, keys) {
  var _obj = (0, _extends3.default)({}, obj);
  if (keys instanceof Array && keys.length > 0) {
    keys.forEach(function (key) {
      _obj[key] = obj[key].toString();
    });
  } else {
    (0, _keys2.default)(obj).forEach(function (key) {
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
var formattedErrorMsgs = function formattedErrorMsgs(obj) {
  return (0, _entries2.default)(result).map(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return key + ":" + value;
  });
};

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
  return arr.reduce(function (acc, cur) {
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
var defaultAKey = function defaultAKey(obj, property, defaultValue) {
  return obj.hasOwnProperty(property) ? obj[property] : defaultValue === false ? false : true;
};
module.exports = {
  pick: pick,
  objectFilter: objectFilter,
  clearObj: clearObj,
  deepClone: deepClone,
  selector: selector,
  replaceKeys: replaceKeys,
  convertNum2Str: convertNum2Str,
  formattedErrorMsgs: formattedErrorMsgs,
  defaultAKey: defaultAKey
};

/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(143);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 143 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(56);
__webpack_require__(44);
module.exports = __webpack_require__(145);


/***/ }),
/* 145 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(77);
var ITERATOR = __webpack_require__(54)('iterator');
var Iterators = __webpack_require__(48);
module.exports = __webpack_require__(7).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 146 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(148);
module.exports = __webpack_require__(7).Object.entries;


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5);
var $entries = __webpack_require__(129)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 149 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 150 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 151 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _defineProperty2 = __webpack_require__(135);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _module$exports;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description 获取某个指定字符在一串字符中出现的次数
 * @param {string} aStr - 原始字符串
 * @param {string} aChar - 要检索的字符
 * @return {number}
 */
var getStrCount = function getStrCount(aStr, aChar) {
  var regex = new RegExp(aChar, "g"); // 使用g表示整个字符串都要匹配
  var result = aStr.match(regex);
  var count = !result ? 0 : result.length;
  return count;
};

/**
 * @description 去除字符串前后空格
 * @param {*} str
 */
var trimSpace = function trimSpace(str) {
  return str.replace(/^\s+/, "").replace(/\s+$/, "");
};

/**
 *
 * @description 给字符串补0
 * @param {string} str
 * @param {number} num
 * @return {string}
 */
var addZero = function addZero(str, num) {
  for (var i = 0; i < str.length; i++) {
    str.length < num && (str += "0");
  }return str;
};

/**
 *
 * @description 转换占位符
 * @param {string} placeholders
 * @return {array}
 */
var getPlaceholders = function getPlaceholders(placeholders) {
  var regex = /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g;
  var arr = placeholders.match(regex);
  var types = [];
  arr.forEach(function (item) {
    regex.exec("");
    var res = regex.exec(item);
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
var insertStr = function insertStr(str, positions, newStr) {
  var insert = function insert(str, start, newStr) {
    return str.slice(0, start) + newStr + str.slice(start);
  };
  var lg = newStr.length;
  var _str = str;
  if (positions instanceof Array) {
    for (var i = 0; i < positions.length; i++) {
      var idx = i == 0 ? positions[i] : positions[i] + i * lg;
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
var getStrIndexList = function getStrIndexList(str, keyString) {
  var positions = []; // 收集关键字符keyString的出现索引
  var strList = []; // 根据关键字符keyString ,将字符串切割成数组
  var pos = str.indexOf(keyString);
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
var splitStringByKey = function splitStringByKey(str, keyString) {
  var positions = []; // 收集关键字符keyString的出现索引
  var strList = []; // 根据关键字符keyString ,将字符串切割成数组
  var pos = str.indexOf(keyString);
  while (pos > -1) {
    positions.push(pos);
    pos = str.indexOf(keyString, pos + 1);
  }
  for (var i = 0; i < positions.length; i++) {
    if (positions.length <= 1) {
      return str;
    }
    if (positions.length > 1) {
      var start = positions[i];
      var end = positions[i + 1];
      var s = end ? str.slice(start, end).trim() : str.slice(start).trim();
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
var wrapStringBy = function wrapStringBy(keyString, str) {
  if (str.lastIndexOf(keyString) === 0) {
    return str;
  } else {
    var positions = []; // 收集关键字符keyString的出现索引
    var strList = []; // 根据关键字符keyString ,将字符串切割成数组
    var pos = str.indexOf(keyString);
    while (pos > -1) {
      positions.push(pos);
      pos = str.indexOf(keyString, pos + 1);
    }

    for (var i = 0; i < positions.length; i++) {
      if (positions.length <= 1) {
        return str;
      }
      if (positions.length > 1) {
        var start = positions[i];
        var end = positions[i + 1];
        var s = end ? str.slice(start, end).trim() : str.slice(start).trim();
        strList.push(s);
      }
    }
    var firstClip = strList[0];
    strList.shift();
    strList = strList.map(function (str) {
      return "\n" + str;
    }).join("");
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
function trim(str, type) {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
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
  return str.replace(/[-_][^-_]/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

/**
 * 防XSS攻击过滤
 *
 * @param {string} str 原始字符串
 * @returns {string} 过滤后字符串
 */
function xssFilter(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
module.exports = (_module$exports = {
  xssFilter: xssFilter,
  camelize: camelize,
  trim: trim,
  getStrCount: getStrCount,
  trimSpace: trimSpace
}, (0, _defineProperty3.default)(_module$exports, "getStrCount", getStrCount), (0, _defineProperty3.default)(_module$exports, "addZero", addZero), (0, _defineProperty3.default)(_module$exports, "getPlaceholders", getPlaceholders), (0, _defineProperty3.default)(_module$exports, "insertStr", insertStr), (0, _defineProperty3.default)(_module$exports, "getStrIndexList", getStrIndexList), (0, _defineProperty3.default)(_module$exports, "splitStringByKey", splitStringByKey), (0, _defineProperty3.default)(_module$exports, "wrapStringBy", wrapStringBy), _module$exports);

/***/ }),
/* 152 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _stringify = __webpack_require__(149);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(41);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description 获取url的全部参数或指定参数
 * @param {array | void} names - names为数组 names为空则默认获取全部参数
 * @return {object}
 */
var getQueryString = function getQueryString(names) {
  var obj = {};
  if (names) {
    names.forEach(function (item) {
      var reg = new RegExp('(^|&)' + item + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        obj[item] = unescape(r[2]);
      } else {
        obj[item] = null;
      }
    });
    return obj;
  } else {
    var params = window.location.search.substr(1).split('&');

    params.forEach(function (item, index) {
      var aParam = params[index].split('=');
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
var toQueryString = function toQueryString(params) {
  var str = '';
  var i = 0;
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var item = params[key];
      if ((typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object') {
        item = (0, _stringify2.default)(item);
      }
      i === 0 ? str += key + '=' + item : str += '&' + key + '=' + item;
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
var getAllUrlParams = function getAllUrlParams(url) {
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
var toFormData = function toFormData(options) {
  var data = new FormData();

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      console.log(options[key]);
      if ((0, _typeof3.default)(options[key]) === 'object') {
        data.append([key], (0, _stringify2.default)(options[key]));
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
  getQueryString: getQueryString,
  toQueryString: toQueryString,
  getAllUrlParams: getAllUrlParams,
  toFormData: toFormData
};

/***/ }),
/* 153 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _regenerator = __webpack_require__(154);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(142);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(157);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(74);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(149);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(41);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description: 检查所有类型非空
 * @param {Object} v
 * @return Boolean
 */
var isEmpty = function isEmpty(v) {
  switch (typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) {
    case "undefined":
      return true;
    case "string":
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length === 0) return true;
      break;
    case "boolean":
      if (!v) return true;
      break;
    case "number":
      if (v === 0 || isNaN(v)) return true;
      break;
    case "object":
      if (v === null || v.length === 0) return true;
      for (var i in v) {
        if (v.hasOwnProperty(i)) {
          return false;
        }
      }
      return true;
  }
  return false;
};

/**
 * @description: 类型判断
 * @param {any} v
 * @example is.string("1") //true
 */
var is = {
  array: function array(v) {
    return (typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) === "object" && v.constructor === Array;
  },
  object: function object(v) {
    return (typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) === "object" && v.constructor === Object;
  },
  function: function _function(v) {
    return typeof v === "function";
  },
  string: function string(v) {
    return typeof v === "string";
  },
  boolean: function boolean(v) {
    return typeof v === "boolean";
  },
  number: function number(v) {
    return typeof v === "number";
  },
  empty: isEmpty //v是否为空
};

/**
 * @description: 校验两个对象某些字段值是否相等
 * @param {object}base -基准对象
 * @param {object} target -比较对象
 * @param {array} keyList -进行比较的属性名
 * @return: {Boolean}
 */
var hasChange = function hasChange(base, target, keyList) {
  //base 为基准对象 target 为基准对象的比较对象 keyList为比较的属性名

  keyList = keyList || getKey();

  var obj3 = {};
  var obj4 = {};

  function getKey() {
    var keyList = [];
    for (var key in base) {
      if (base.hasOwnProperty(key)) keyList.push(key);
    }
    return keyList;
  }

  keyList.forEach(function (item) {
    obj3[item] = base[item];
    obj4[item] = target[item];
  });
  for (var i = 0; i < keyList.length; i++) {
    var key = keyList[i];
    if (obj3[key] !== obj4[key]) return false;
  }
  return true;
};

/**
 * @description: 检查目标项是否存在空的
 * @param {object}options-参数
 * @param {array}keyList-keyList 要被检查的字段
 * @returns:[boolean,keyList]
 */
var hasEmpty = function hasEmpty(options, keyList) {
  // options 参数 | keyList 要被检查的字段
  keyList = keyList || getKey();
  function getKey() {
    var keyList = [];
    for (var key in options) {
      if (options.hasOwnProperty(key)) keyList.push(key);
    }
    return keyList;
  }
  var res = [];
  for (var i = 0; i < keyList.length; i++) {
    var key = keyList[i];
    if (options[key] == null || options[key] == undefined || options[key] == "" || options[key] instanceof Array && options[key].length == 0 || (0, _stringify2.default)(options[key]) == "{}") res.push(key);
  }

  return res.length != 0 ? [true, res] : [false, null];
};

/**
 * @description: 检查对象是否存在我们定义的连续属性
 * @param {object}obj-数据
 * @param {array}keyList-定义的键名顺序
 * @returns:{Boolean}
 * @example if(checkKeyChain(res,"data","result",...))
 */
var checkKeyChain = function checkKeyChain(obj) {
  for (var _len = arguments.length, keyList = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keyList[_key - 1] = arguments[_key];
  }

  if (keyList.length > 0) {
    return function checkKey(obj) {
      for (var _len2 = arguments.length, keyList = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        keyList[_key2 - 1] = arguments[_key2];
      }

      var key = keyList[0];
      if (keyList.length > 0) {
        if (obj && obj.hasOwnProperty(key)) {
          keyList.splice(0, 1);
          return checkKey.apply(undefined, [obj[key]].concat(keyList));
        } else {
          return false;
        }
      } else {
        return true;
      }
    }.apply(undefined, [obj].concat(keyList));
  } else {
    throw Error("parameter 'keyList' is not could be empty");
  }
};

/**
 *
 * @description 表格行校验
 * @param {*} selections
 * @param {*} callback(row) 校验不通过项必须return[pass:boolean , reason:string] 
 * @return {*} promise
 */
function checkIfAllow(selections, callback) {
  var _this = this;

  if (!callback) return;
  var pass = true,
      reason = "",
      payload = null;
  return new _promise2.default(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
      var i, _ref2, _ref3;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < selections.length)) {
                _context.next = 27;
                break;
              }

              if (!callback(selections[i])) {
                _context.next = 18;
                break;
              }

              if (!callback(selections[i]).then) {
                _context.next = 14;
                break;
              }

              _context.next = 6;
              return callback(selections[i]);

            case 6:
              if (!(payload = _context.sent)) {
                _context.next = 10;
                break;
              }

              _context.t2 = payload;
              _context.next = 11;
              break;

            case 10:
              _context.t2 = [true, ""];

            case 11:
              _context.t1 = _context.t2;
              _context.next = 15;
              break;

            case 14:
              _context.t1 = callback(selections[i]);

            case 15:
              _context.t0 = _context.t1;
              _context.next = 19;
              break;

            case 18:
              _context.t0 = [true, ""];

            case 19:
              _ref2 = _context.t0;
              _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
              pass = _ref3[0];
              reason = _ref3[1];

              if (pass.toString() === "false") resolve(false, reason);

            case 24:
              i++;
              _context.next = 1;
              break;

            case 27:
              resolve(true, reason);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}
module.exports = {
  isEmpty: isEmpty,
  is: is,
  hasChange: hasChange,
  hasEmpty: hasEmpty,
  checkKeyChain: checkKeyChain,
  checkIfAllow: checkIfAllow
};

/***/ }),
/* 154 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(155);


/***/ }),
/* 155 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(156);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 156 */
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = "object" === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(74);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 158 */
/***/ ((module) => {

"use strict";


/**
 * 方法：获取移动终端浏览器版本信息
 */
var deviceVersions = function deviceVersions() {
  var u = navigator.userAgent,
      app = navigator.appVersion;
  return {
    trident: u.indexOf("Trident") > -1, //IE内核
    presto: u.indexOf("Presto") > -1, //opera内核
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动设备
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1, //判断是否为android
    iPhone: u.indexOf("iPhone") > -1, //判断是否为iPhone
    iPad: u.indexOf("iPad") > -1, //是否iPad
    Safari: u.indexOf("Safari") == -1, //Safari
    weixin: u.toLowerCase().indexOf("micromessenger") > -1 //weixin
  };
};

module.exports = { deviceVersions: deviceVersions };

/***/ }),
/* 159 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPLOAD_PICTURE_CROP = exports.UPLOAD_PICTURE = undefined;

var _promise = __webpack_require__(74);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert an image
 * to a base64 string
 * @param  {String}   url
 * @param  {Function} callback
 * @param  {String}   [outputFormat=image/png]
 */
var convertImgToBase64 = function convertImgToBase64(url, callback, outputFormat) {
  var canvas = document.createElement("CANVAS"),
      ctx = canvas.getContext("2d"),
      img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    var dataURL = void 0;
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback.call(this, dataURL);
    canvas = null;
  };
  img.src = url;
};
module.exports = {
  convertImgToBase64: convertImgToBase64
};

/**
 * 图片base64转换 图片压缩
 * @param  this
 * @param  file
 * @param  {boolean} 选参，默认压缩
 * @param {Array}  选参，默认支持的图片类型 jpeg ,png ,bmp
 * @param {Number}  选参，默认10M
 * @param {Number}  选参，压缩图片目标宽度,默认413px
 * @param {Number} 选参，压缩图片目标高度,默认626px
 * @param {Number} 选参，导出的图片质量,默认值是0.85
 * @date 2019/03/22
 * @version 0.0.1
 */
var UPLOAD_PICTURE = exports.UPLOAD_PICTURE = function UPLOAD_PICTURE(obj, file) {
  var zip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var fileType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['jpeg', 'png', 'bmp'];
  var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 413;
  var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 626;
  var q = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0.85;

  var that = obj;
  return new _promise2.default(function (resolve, reject) {
    // 限制图片大小
    var isLt10M = file.size / 1024 / 1024 < s;

    // 限制图片格式
    var isFormat = 0;
    for (var i = 0; i < fileType.length; i++) {
      if ('image/' + fileType[i] === file.type) {
        isFormat++;
      }
    }
    var ft = fileType.join(',');
    if (!isFormat) {
      return that.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u4EC5\u9650\u4E8E " + ft + " \u683C\u5F0F!");
    }

    if (!isLt10M) {
      that.$message.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 " + s + "MB!");
      return false;
    }

    // 选择的文件是图片
    if (file.type.indexOf('image') === 0) {
      // 压缩图片需要的一些元素和对象
      var reader = new FileReader();
      // 创建一个img对象
      var img = new Image();

      reader.readAsDataURL(file);
      // 文件base64化，以便获知图片原始尺寸
      reader.onload = function (e) {
        img.src = e.target.result;
        if (!zip) {
          resolve(img.src);
        }
      };

      if (!zip) {
        return false;
      }

      // base64地址图片加载完毕后执行
      img.onload = function () {
        // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        // 图片原始尺寸
        var originWidth = this.width;
        var originHeight = this.height;

        // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
        var maxWidth = w;
        var maxHeight = h;
        // 目标尺寸
        var targetWidth = originWidth;
        var targetHeight = originHeight;
        // 图片尺寸超过300x300的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        /* 第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高 */

        // 压缩后的图片转base64 url
        /* canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
         * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92 */
        var newUrl = canvas.toDataURL('image/jpeg', q); // base64 格式
        resolve(newUrl);
      };
    }
  });
};
/**
 * 图片base64转换 裁剪图片
 * @param  myCroppa
 */
var UPLOAD_PICTURE_CROP = exports.UPLOAD_PICTURE_CROP = function UPLOAD_PICTURE_CROP(myCroppa) {
  return new _promise2.default(function (resolve, reject) {
    myCroppa.generateBlob(function (blob) {
      // console.log(blob)
      resolve(myCroppa.generateDataUrl());
    }, 'image/png', 1.0);
  });
};

/***/ }),
/* 160 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _promise = __webpack_require__(74);

var _promise2 = _interopRequireDefault(_promise);

var _arguments = arguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description 流量单位转换
 * @param {*} val
 * @param {*} type
 * @return {*}
 */
var flow2str = function flow2str(val, type) {
  switch (type) {
    case "GB":
      return (val / 1024 / 1024 / 1024).toFixed(2);
    case "MB":
      return (val / 1024 / 1024).toFixed(2);
    case "KB":
      return (val / 1024).toFixed(2);
    case "B":
      return val.toFixed(2);
    default:
      {
        var gb = (val / 1024 / 1024 / 1024).toFixed(2);
        var mb = (val / 1024 / 1024).toFixed(2);
        var kb = (val / 1024).toFixed(2);
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
var debounce = function debounce(handle, delay) {
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
var throttle = function throttle(handle, delay, immediately) {
  if (immediately == undefined) {
    immediately = false;
  }
  if (immediately) {
    var time = null;
    if (!time || Date.now() - time >= delay) {
      handle.apply(undefined, _arguments);
      time = Date.now();
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
      }, delay);
    };
  }
};

/**
 *
 *@description 用promise封装倒计时
 * @param {number} ms 倒计时毫秒
 * @param {any} arg 倒计时结束返回的数据
 */
var sleep = function sleep(ms, arg) {
  return new _promise2.default(function (resolve) {
    return setTimeout(resolve, ms, arg);
  });
};

/**
 *
 * @description 获取类型
 * @param {*} val
 * @return {*} 
 */
function typeIs(val) {
  var typeStr = Object.prototype.toString.call(val);
  return typeStr.substring(8, typeStr.length - 1).toLowerCase();
}

function returnThis(obj) {
  return typeof obj === "function" ? obj() : obj;
}

module.exports = {
  flow2str: flow2str,
  debounce: debounce,
  throttle: throttle,
  sleep: sleep,
  typeIs: typeIs,
  returnThis: returnThis
};

/***/ }),
/* 161 */
/***/ ((module) => {

"use strict";


var _arguments = arguments;
var curry = function curry(func) {
  var args = [].slice.call(_arguments, 1);
  var self = undefined;
  return function () {
    var totalParams = args.concat([].slice.call(arguments, 0));
    if (func.length == totalParams.length) {
      return func.apply(this, totalParams);
    } else {
      totalParams.unshift(func);
      return curry.apply(self, totalParams);
    }
  };
};
var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (res) {
    return fns.reduce(function (accum, next) {
      return next(accum);
    }, res);
  };
};
module.exports = {
  curry: curry,
  compose: compose
};

/***/ }),
/* 162 */
/***/ ((module) => {

"use strict";


/**
 *
 * @description 文件流方式下载文件
 * @param {string} url
 * @param {string} type  "iframe" | "a"
 */
var downloadFile = function downloadFile(url, type) {
  if (!type || type === "iframe") {
    // 创建iframe
    var iframe = document.createElement("iframe");
    iframe.style.display = "none"; // 防止影响页面
    iframe.style.height = 0; // 防止影响页面
    iframe.src = url;
    document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
    setTimeout(function () {
      iframe.remove();
    }, 5 * 60 * 1000);
  } else if (type === "a") {
    // 创建a 标签
    var a = document.createElement("a"); // 创建a标签
    var e = document.createEvent("MouseEvents"); // 创建鼠标事件对象
    e.initEvent("click", false, false); // 初始化事件对象
    a.href = url; // 设置下载地址
    a.download = ""; // 设置下载文件名
    a.dispatchEvent(e);
  }
};

module.exports = {
  downloadFile: downloadFile
};

/***/ }),
/* 163 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _stringify = __webpack_require__(149);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(74);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(164);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(165);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyHttp = function () {
  function EasyHttp() {
    (0, _classCallCheck3.default)(this, EasyHttp);
  }

  (0, _createClass3.default)(EasyHttp, [{
    key: "get",

    // get
    value: function get(url) {
      return new _promise2.default(function (resolve, reject) {
        fetch(url).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }

    // post

  }, {
    key: "post",
    value: function post(url, data) {
      return new _promise2.default(function (resolve, reject) {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: (0, _stringify2.default)(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }

    // put

  }, {
    key: "put",
    value: function put(url, data) {
      return new _promise2.default(function (resolve, reject) {
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-type": "application/json"
          },
          body: (0, _stringify2.default)(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }

    // delete

  }, {
    key: "delete",
    value: function _delete(url) {
      return new _promise2.default(function (resolve, reject) {
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve("数据删除成功!");
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }]);
  return EasyHttp;
}();

module.exports = { EasyHttp: EasyHttp };

/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(136);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 166 */
/***/ ((module) => {

"use strict";


var getTimeStr = function getTimeStr(timestr) {
  var setTime = function setTime(num) {
    return num < 10 ? "0" + num : num;
  };
  var _date = timestr ? new Date(timestr) : new Date();
  var _month = setTime(_date.getMonth() + 1);
  var _day = setTime(_date.getDate());
  var _hour = setTime(_date.getHours());
  var _minute = setTime(_date.getMinutes());
  var _second = setTime(_date.getSeconds());

  return _date.getFullYear() + "/" + _month + "/" + _day + " " + _hour + ":" + _minute + ":" + _second;
};

var colors = {
  end: "%s\x1b[0m",
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m"
};

colors.get = function (type) {
  var THIS = this;
  return THIS[type] + THIS.end;
};

var Tip = {
  safe: function safe(info, timebool) {
    if (!info) return false;

    console.log(colors.get("FgGreen"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  log: function log(info, timebool) {
    // normal log
    if (!info) return false;

    console.log(timebool ? getTimeStr() + ":" : "" + info);
  },
  error: function error(info, timebool) {
    // error log
    if (!info) return false;

    console.log(colors.get("FgRed"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  strongError: function strongError(info, timebool) {
    // strong error log
    if (!info) return false;

    console.log(colors.get("BgRed"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  warn: function warn(info, timebool) {
    // warn log
    if (!info) return false;

    console.log(colors.get("FgYellow"), (timebool ? getTimeStr() + ":" : "") + info);
  },
  strongWarn: function strongWarn(info, timebool) {
    // strong warn log
    if (!info) return false;

    console.log(colors.get("BgYellow"), (timebool ? getTimeStr() + ":" : "") + info);
  }
};

module.exports = Tip;

/***/ }),
/* 167 */
/***/ ((module) => {

"use strict";


/**
 * 函数组合
 * 可将 fn1(fn2(fn3(fn4(x)))) 这种嵌套的调用方式
 * 改成 compose(fn1,fn2,fn3,fn4)(x) 的方式调用
 *
 * @param  {...Function} funcs 方法
 * @returns {Function} 组合结果方法
 */
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

module.exports = { compose: compose };

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
;
});