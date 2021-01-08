# An useful custom front-end public tools/methods. 一个常用的前端方法库

- 这个自定义库包含了后台管理系统项目中最常用的方法 / 功能。特别是当你的项目使用 es6 / axios / elementUI / vue.js 等。帮助你！享受它 :)
-  This custom library contains the most commonly used methods/functions in backstage management system project. Especially if your project work with es6 / axios / elementUI / vue.js etc. That helps you! Enjoy it :)

### Array

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :-------:|  :--  | :--  | :-- |:--|:--|
|  1| getRowByVal（arr,val,key）  | 根据 value 值获取其在数组对象所属的对象 | arr:array 原数组 <br/> val:string 值 <br/> key:string 这个值所属的键|Object
|  2| cLV(arr, label, value)   | 枚举资源'label'/'value' 键名的转换 | arr:array 资源数组<br/>label:array ['label','enumName']  将原本 key 为 enumName 转为 label<br/>value:array['value','enumCode'] 将原本 key 为 enumCode 转为 value|Array
|  3| getArrDifference (arr1, arr2)  | 获取两个普通数组不重复元素 | arr1:array 第一个数组<br/> arr2:array 第二个数组|Array|
|  4| uniqueBy(arr, fn)  | 根据属性去重数组 | arr:array 去重的数组<br/>fn[string: 去重的 key/callback:row=>row 普通数组去重|Array|
|  5| getUniqueFrom2Arr(arr1, arr2) | 比对两个数组，获取实际唯一项 | arr1:array 第一个数组<br/>arr2:array 第二个数组|string|
|  6| addExtraProperty(list, extra)  | 给数组对象里的每一项添加属性 | list:array 数组 <br/> extra:object 要给每项添加的键值对|Array|
|  7| getActualNewItems (orin, curr, key) | 根据某个 key 获取实际新增项 [{...},{...}] |orin:array 原始数组<br/>curr:array 现在的数组<br/>key:string 键名|Array|
|  8| mergeAndDiff (list, key, name) | 合并列表子项数组并去重|list:array<br/> key:string/array<br/> name:string|Array|
|  9| compareByKey(arr, key, callback)   | 在数组对象中，比较各项某个 key 值，获取最终筛选项 |arr:array 原数组<br/>key:string 键<br/>callback:fn（prev: 前一项，cur: 后一项）|Array|
|  10| findMostItems (arr)  | 获取出现次数最多次数项|arr:array 数组|Array|
|  11| countEachItem (arr, key)  | 统计数组每项元素出现次数|arr:array 数组，key:string 空的时候统计普通类型数组每项元素出现的次数，否则就只统计数组对象里指定 key 名的元素出现次数|Object|
|  12| fMap(arr, fn1, fn2)   | 利用 filter 和 map 实现过滤数据和添加额外属性|arr:array<br/> fn1:fn<br/> fn2:fn |Array| let _arr = fMap( arr,(item) => item.age == 28,(item) => ({ ...item, sex: sex })
|  13| sortByKey (key, arr, callback)  | 根据数组对象的某个 key 进行排序|key:string <br/>arr:array<br/> callback:function|Array|
|  14| toFirst(arr, index)  | 將某个元素置頂|arr:array 数组<br/>index:number 索引|Array|toFirst([1,2,3,4,5],2)  返回 [3,1,2,4,5]
|  15| upGo  (arr, index)  | 將某个元素往前移动一个格子|arr:array 数组<br/>index:number 索引|Array|例如 upGo([1,2,3,4,5],2)  返回 [1,3,2,4,5]
|  16| downGo(arr, index)  | 將某个元素往后移动一个格子|arr:array 数组 <br/>index:number 索引|Array|例如 downGo([1,2,3,4,5],2)  返回 [1,2,4,3,5]
|  17| toEnd(arr, index) | 将某个元素设置到末尾|arr:array 数组<br/>index:number 索引|Array|例如 toEnd([1,2,3,4,5],2)  返回 [1,2,4,5,3]
|  18| addLastNewMember(list, item, key)  | 根据某个 key 进行数组中的旧项删除并加入这个新的项|list:array 原数组<br/>item:object 最新的一项<br/>key:string 筛选键|Array|
|  19| findSum(arr, sum)  | 给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回 true。否则，返回 false。|arr:array 数组<br/>sum:number 任意两项和目标值|Boolean|
| 20| getIntersectionItems(arr, sum)  | 获取两个数组的交集项|arr1:array 第一个数组<br/>arr2:array 第二个数组|array|
|  21| setUnion(arr1, arr2)  | 使两个数组并集|arr1:array 第一个数组<br/>arr2:array 第二个数组|array|
|  22| arrayUnique2(arr, name) | 数组对象去重|arr:array 数组对象<br/>name:string 筛选键|array|

### Object

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| clearObj(obj)|清空对象 |obj:object ||
|  2| deepClone(obj)|深度拷贝对象 |obj:object |Object|
|  3| objectFilter(options)|过滤对象里空的键值对 |options: 基准对象 |Object|
|  4| replaceKeys(obj, keyOrig, keyCurr)|转换对象指定的 key 名 |obj:object <br/>keyOrig:string 要被替换的原始键名 <br/>keyCur:string 新的键名|Object|

<!-- | selector(from, selectors, keys = null)|从对象中检索出给定选择器指定的一组属性 |？|？| -->

### String

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| getStrCount(aStr, aChar) |获取某个指定字符在一串字符中出现的次数 | aStr:string 原始字符串<br/> aChar:string 要检索的字符| Number|
|  2| trimSpace(str)|去除字符串前后空格  |str:string 字符串|  String|
|  3| getPlaceholders(placeholders)|转换占位符  |placeholders:string|  Array| getPlaceholders("@FIRSRT @LAST")

<!-- | addZero(str, num)| 给字符串补 0 |str, num| String | ? -->

### Number

|序号| 方法名 | 说明 | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| | random(min, max)  |生成 n ~ m 随机数 | min: 最小值，max: 最大值| Number|

### Validate

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| is|<div style="width: 200pt">类型判断  | .array: 判断是否为数组 <br/> .object: 判断是否为对象 <br/> .function: 判断是否为函数 <br/> .string: 判断是否为字符串 <br/> .boolean: 判断是否为布尔值 <br/> .empty: 判断是否为空 <br/> .number: 判断是否为数字|  Boolean|
|  2| hasChange(base, target, keyList)|校验两个对象某些字段值是否相等 |base:object 基准对象<br/>target:object 目标对象<br/>keyList:array 要进行比较的键集合（不传则比较全部键集合）| Boolean |
|  3| checkKeyChain(obj, ...keyList))|检查对象是否存在我们定义的连续属性 |obj:Object<br/> keyList:[string] 定义的键名顺序|Boolean| checkKeyChain<br/>(res,"data","result",...)|
|  4| hasEmpty(options, keyList)|检查目标项是否存在空的 |options:object 基准对象<br/>keyList:array 要检测的键| [Boolean,Array/null] |
|  5| isEmpty(v) |检查所有类型非空 | v:any| Boolean|

### API

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| request(apiList, fn) | 递归进行 ajax 请求 | apiList：array url 集合<br/>fn: this / callback (url,res,rej)| Promise|
|  2| asyncHandle(promise) | 用 promise 二次封装 async await  |promise：async fn 可以返回 promise 对象的异步函数|  Promise|
|  3| simulateRequest ({ status, reason, success, result })  | 模拟接口请求 |{<br/>status:string 状态值，<br/>reason:string 原因，<br/>success:boolean 布尔值 ，<br/> result:object 结果 <br/>}| Promise |

### URL

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| getQueryString(names) | 获取 url 的全部参数或指定参数 | names:array 为数组获取指定参数 <br/>names:null 为空则默认获取全部参数| Object|
|  2| toQueryString(params) | 把对象转换成 get 请求？后面的参数  |params:object 参数|  String|
|  3| getAllUrlParams(url) | 获取路由的所有参数集合 |url：string 路由地址| Object |
|  4| toFormData(options) | 把对象转换成 form 表单的请求参数 |options：object 参数| Object |

### Http

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| EasyHttp |用Promise封装的fetch函数 |get(url) <br/>post(url, data) <br/> put(url, data) <br/>delete(url) |Promise|


### Explorer

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| deviceVersions()|获取移动终端浏览器版本信息 | |String|

### Images

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| convertImgToBase64(url, callback, outputFormat)|把图片转换成base64字符串 |url:string 图片链接 <br/>  callback:function outputFormat:string |String|    convertImgToBase64("./img123.png" ,(base64str)=>el.src = base64str)

### Download

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| downloadFile(url, type)|文件流方式下载文件 |url:string 文件下载链接 <br/>  type:string ("iframe","a") | |



### Others

|序号| 方法名  | 说明  | 参数|返回值|e.g|
|  :--:|  :--  | :--  | :-- |:--|:--|
|  1| flow2str (val, type)|流量单位转换 |val:number 流量值 <br/>  type:string 流量单位 ("GB","MB","KB","B") |String|
|  2| debounce (handle, delay)|防抖函数 |handle:function 要进行防抖的函数 <br/>  delay:number 设定的时间区间|function|
|  3| throttle (handle, delay, immediately)|函数节流 |handle:function 要进行节流的函数 <br/>  delay:number 时间区间 <br/>immediately:boolean 是否要进行立即执行版本的节流 |function|


## RYAN 👾

```json
_________________________________   ________________________________
__  ____/_  __ \__  __ \__  ____/   ___  __ )__  ____/_  ___/__  __/
_  /    _  / / /_  / / /_  __/      __  __  |_  __/  _____ \__  /   
/ /___  / /_/ /_  /_/ /_  /___      _  /_/ /_  /___  ____/ /_  /    
\____/  \____/ /_____/ /_____/      /_____/ /_____/  /____/ /_/     

__ _____ ________________  _____________   ___  ___  ______ _____ __
__ _____ _________  __ \ \/ /__    |__  | / /  __ / _______ _____ __
__ _____ ________  /_/ /_  /__  /| |_   |/ /  __ / ________ _____ __
__ _____ _______  _, _/_  / _  ___ |  /|  /   _ /__________ _____ __
__ _____ ______/_/ |_| /_/  /_/  |_/_/ |_/  / _____/_______ _____ __

```