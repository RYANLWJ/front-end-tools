# A useful custom front-end public tools/methods.

******

### Array

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| getRowByVal（arr,val,key）  | 根据 value 值获取其在数组对象所属的对象 | arr: 原数组 val: 值 key: 这个值所属的键|Object
| cLV(arr, label, value)   | 枚举资源'label'/'value' 键名的转换 | arr: 资源数组，label:['label','enumName']  将原本 key 为 enumName 转为 label, value:['value','enumCode'] 将原本 key 为 enumCode 转为 value|Array
| getArrDifference (arr1, arr2)  | 获取两个普通数组不重复元素 | arr1: 第一个数组 arr2：第二个数组|Array|
| uniqueBy(arr, fn)  | 根据属性去重数组 | arr：去重的数组，fn[string: 去重的 key,callback：？？？）]|Array|
| getUniqueFrom2Arr(arr1, arr2) | 比对两个数组，获取实际唯一项 | arr1: 第一个数组，arr2: 第二个数组|string|
| addExtraProperty(list, extra)  | 给数组对象里的每一项添加属性 | list: 数组 extra: 要给每项添加的键值对|Array|
| getActualNewItems (orin, curr, key) | 根据某个 key 获取实际新增项 [{...},{...}] |orin: 原始数组，curr: 现在的数组，key：键名|Array|
| mergeAndDiff (list, key, name) | 合并列表子项数组并去重|list, key, name|Array|
| compareByKey(arr, key, callback)   | 在数组对象中，比较各项某个 key 值，获取最终筛选项 |arr: 原数组，key：键，callback：（prev: 前一项，cur: 后一项）|Array|
| findMostItems (arr)  | 获取出现次数最多次数项|arr: 数组|Array|
| countEachItem (arr, key)  | 统计数组每项元素出现次数|arr:数组, key:空的时候统计普通类型数组每项元素出现的次数,否则就只统计数组对象里指定key名的元素出现次数|Number|
| fMap(arr, fn1, fn2)   | 利用 filter 和 map 实现过滤数据和添加额外属性|arr, fn1, fn2|Array| let _arr = fMap( arr,(item) => item.age == 28,(item) => ({ ...item, sex: sex })
| sortByKey (key, arr, callback)  | 根据数组对象的某个 key 进行排序|key:string ,arr:array, callback:function|Array|
| toFirst(arr, index)  | 將某个元素置頂|arr:数组,index:索引|Array|toFirst([1,2,3,4,5],2)  返回[3,1,2,4,5]
| upGo  (arr, index)  | 將某个元素往前移动一个格子|arr:数组,index:索引|Array|例如upGo([1,2,3,4,5],2)  返回[1,3,2,4,5]
| downGo(arr, index)  | 將某个元素往后移动一个格子|arr:数组,index:索引|Array|例如downGo([1,2,3,4,5],2)  返回[1,2,4,3,5]
| toEnd(arr, index) | 将某个元素设置到末尾|arr:数组,index:索引|Array|例如toEnd([1,2,3,4,5],2)  返回[1,2,4,5,3]
| addLastNewMember(list, item, key)  | 根据某个 key 进行数组中的旧项删除并加入这个新的项|list: 原数组，item：最新的一项，key: 筛选键|Array|

### Object

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| clearObj(obj)|清空对象 |obj:Object ||
| deepClone(obj)|深度拷贝对象 |obj:Object |Object|
| objectFilter(options)|过滤对象里空的键值对 |options: 基准对象 |Object|
| replaceKeys(obj, keyOrig, keyCurr)|转换对象指定的 key 名 |obj:Object ,keyOrig: 要被替换的原始键名 ，keyCur: 新的键名|Object|
| selector(from, selectors, keys = null)|从对象中检索出给定选择器指定的一组属性 |？|？|

### String

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| getStrCount(aStr, aChar) |获取某个指定字符在一串字符中出现的次数 | aStr: 原始字符串 aChar: 要检索的字符| Number|
| trimSpace(str)|去除字符串前后空格  |str: 字符串|  String|
| addZero(str, num)| 给字符串补 0 |str, num| String | ?

### Number

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| random(min, max)  |生成n ~ m 随机数 | min:最小值,max:最大值| Number|


### Validate

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| is|类型判断  |.array: 判断是否为数组 , .object: 判断是否为对象 , .function: 判断是否为函数 , .string: 判断是否为字符串 , .boolean: 判断是否为布尔值 , .empty: 判断是否为空 / .number: 判断是否为数字|  Boolean|
| hasChange(base, target, keyList)|校验两个对象某些字段值是否相等 |base: 基准对象，target: 目标对象，keyList: 要进行比较的键集合（不传则比较全部键集合）| Boolean |
| checkKeyChain(obj, ...keyList))|检查对象是否存在我们定义的连续属性 |obj:Object, keyList: 定义的键名顺序|Boolean| checkKeyChain(res,"data","result",...)|
| hasEmpty(options, keyList)|检查目标项是否存在空的 |options: 基准对象，keyList: 要检测的键| [Boolean,Array/null] |
| isEmpty(v) |检查所有类型非空 | v：any| Boolean|

### API

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| request(apiList, fn) | 递归进行 ajax 请求 | apiList：[] url 集合，fn: this / callback (url,res,rej)| Promise|
| asyncHandle(promise) | 用 promise 二次封装 async await  |promise：可以返回 promise 对象的异步函数|  Promise|
| simulateRequest ({ status, reason, success, result })  | 模拟接口请求 |{status:string 状态值，reason:string 原因，success:boolean 布尔值 ， result:object 结果}| Promise |

### URL

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| getQueryString(names) | 获取 url 的全部参数或指定参数 | names 为数组 names 为空则默认获取全部参数| Object|
| toQueryString(params) | 把对象转换成 get 请求？后面的参数  |params: 参数|  String|
| getAllUrlParams(url) | 获取路由的所有参数集合 |url：路由地址| Object |
| toFormData(options) | 把对象转换成 form 表单的请求参数 |options：参数| Object |


### Explorer

| 方法名  | 说明  | 参数|返回值|e.g|
|  ----  | ----  | ---- |----|----|
| deviceVersions()|获取移动终端浏览器版本信息 | |String|



# RYAN
