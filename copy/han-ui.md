## Han-UI :poultry_leg: :poultry_leg: :poultry_leg:

### Welcome to Han-UI

---

### 1. HOC/withIntl

### How to use?

```js
import { withIntl } from "han-ui/HOC";

// or

import { HOC } from "han-ui";
const { withIntl } = HOC;
```

**$\color{green}{Note}$: Before use it, You need to create a folder call `lang` in the project root directort and create some files. Operating as follows. Otherwise, it will be error**

- 1. `mkdir lang`
- 2. create some files, such as `zh.js en.js index.js`

```js
// index.js
import zh from "./zh";
import en from "./en";
const langType = {
  zh,
  en,
};
export default langType;

// zh.js
// key可以为string类型也可以为object类型，已做对应处理，除了common
const zh = {
  // 约定：common必须是个对象，因此zh.js en.js的作用的common的作用就是公共语言提示，即如果多个页面用到可以将语言放在common里面
  // 约定：common里的键值首字母建议大写，防止不必要冲突
  common: {
    ErrorTip: "错误提示",
  },
  hello: "欢迎入坑",
};
export default zh;

// en.js
// key可以为string类型也可以为object类型，已做对应处理，除了common
const en = {
  // 约定：common必须是个对象，因此zh.js en.js的作用的common的作用就是公共语言提示，即如果多个页面用到可以将语言放在common里面
  // 约定：common里的键值首字母建议大写，防止不必要冲突
  common: {
    ErrorTip: "error tip",
  },
  hello: "hello world",
};
export default en;
```

- 3. And then, you can use in the page. as follows 👇

```js
// page

export default withIntl(pathName)(PageName);
```

- 4. **Highlight to use:**
     What is a pathName and what dose the pathName do?
     anwser: To need to load(按需加载) the page international language

```js
// withIntl.js
/**
 * withIntl组件：使用的时候配合lang模块，需要一齐存在
 * 国际化组件，引入规则withIntl(pathName)(WrappedComponent)
 * 在lang模块中自定义语言包， 并在index.js引入自定义语言包，如果语言包没有注入默认展示英文版
 * @params {string} pathName - 举个例子，比如路由名： routerConfig[pageName].name
 * @if pathName === 'combine'，以一层对象注入所有页面文字语言，因此可能之前的同名语言key值被覆盖
 * @if pathName === routerConfig[pageName].name， 注入公共文字语言与对应页面文字语言
 * @if pathName === null，以原始对象注入文字语言
 * @doc 约定：common必须是个对象，因此zh.js en.js的作用的common的作用就是公共语言提示，即如果多个页面用到可以将语言放在common里面
 * @doc 约定：common里的键值首字母建议大写，防止不必要冲突
 */
```
