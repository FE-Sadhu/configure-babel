`npm i && ./node_modules/.bin/babel src --out-dir lib`
#### 1. `@babel/preset-env` 
提供了一系列插件预设（否则我们要一个语法插件一个语法插件得配），负责 ES6+ 的语法转换为 ES5 
> stage-3 以下的语法不包含的预设，要使用额外装插件
> 查提案到这个仓库: [传送门](https://github.com/tc39/proposals)

#### 2. `core-js` 
是结合预设 `@babel/preset-env` 用的，安好库后，如下配置后，可以按需加载垫片（polyfill）
```json
"presets": [
    [
      "@babel/env",
      {
        "targets": "> 0.25%, not dead", // 浏览器市场份额超过0.25％的用户所需的 polyfill 和代码转换（忽略没有安全更新的浏览器，如 IE10 和 BlackBerry）:
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ],
```
目前的方式有两个缺陷：

(1). 注入的内置对象的 Polyfill 如 Promise、Array.includes 等，会污染全局变量（可以亲自转译看看），这是开源组件库、工具库等不能忍的，因为无法确定代码的运行环境。

(2). 假如转译下 `class` 之类的语法，你会发现 babel 会为每个文件注入对应的帮助函数(helper)如 `__createClass2` 等。假如文件多了，每个都直接往文件内注入代码，那么代码体积将会很大。

#### 3. `@babel/plugin-transform-runtime`

**这个插件就是为了解决问题 (1)、(2) 缺陷的。**

跟这个插件结合下载使用的有： `@babel/runtime`、`@babel/runtime-corejs3` 这两个库（runtime -> --save）。

此时 `core-js` 可以没用了。我们如下配置：
```json
{
  "presets": [
    [
      "@babel/env" // 把 useBuiltIns 等删了，因为和 @babel/runtime-corejs3 功能重复了
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3 // 默认按需引入，并且使用 @babel/runtime-corejs3 库，并且不会污染全局环境
      }
    ]
  ]
}
```
也可以不配置 `"corejs": 3 ` 参数，这样的话，就只解决缺陷 (2)。

这种引入 polyfill 的方式的缺陷估计就是 `@babel/runtime-corejs3/XXX` 的包本身比 `core-js/modules/XXX` 要大一些.

|序号|.babelrc 配置|webpack mode production
|---|---|---
|0|不使用 @babel/plugin-transform-runtime|36KB
|1|使用@babel/plugin-transform-runtime，并配置参数 corejs: 3。不会污染全局环境|37KB
|2|使用@babel/plugin-transform-runtime，不配置 corejs|22KB
