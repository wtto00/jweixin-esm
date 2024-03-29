# jweixin-esm

微信 JSSDK, ESM 模块, 附带 TS 类型以及详细注释

[![jweixin:1.6.0](https://img.shields.io/badge/jweixin.js-1.6.0-blue?style=flat-square&logo=WeChat)](http://res.wx.qq.com/open/js/jweixin-1.6.0.js) [![DOCUMENT](https://img.shields.io/badge/DOCUMENT-GO%20TO-blue?style=flat-square&logo=WeChat)](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)  
[![NPM](https://flat.badgen.net/npm/v/@wtto00/jweixin-esm?icon=npm)](https://www.npmjs.com/package/@wtto00/jweixin-esm) [![GitHub Package](https://img.shields.io/github/package-json/v/wtto00/jweixin-esm?style=flat-square&logo=github&label=package)](https://github.com/wtto00/jweixin-esm/pkgs/npm/jweixin-esm) ![TypeScript:SUPPORT](https://img.shields.io/badge/TypeScript-SUPPORT-blue?style=flat-square)  
[![PR:WELCOME](https://img.shields.io/badge/PR-WELCOME-blue?style=flat-square)](https://github.com/wtto00/jweixin-esm/pulls) [![ISSUE:WELCOME](https://img.shields.io/badge/ISSUE-WELCOME-blue?style=flat-square)](https://github.com/wtto00/jweixin-esm/issues)

## About

基于微信官方的 JSSDK [jweixin-1.6.0.js](http://res.wx.qq.com/open/js/jweixin-1.6.0.js) 改造的 **ESM 模块**，支持 **TypeScript 类型**，并且**附带完整的注释文档**。[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

## Installation

```shell
pnpm add @wtto00/jweixin-esm
# npm i @wtto00/jweixin-esm
# yarn add @wtto00/jweixin-esm
```

## Usage

```typescript
import weixin from '@wtto00/jweixin-esm'
// or:
// import '@wtto00/jweixin-esm'

// weixin的类型是WX，已全局声明

console.log(weixin) // 导入的名称
console.log(window.wx) // wx已挂载全局window
console.log(window.jWeixin) // jWeixin已挂载全局window

// 这里 weixin=window.wx=window.jWeixin

// 所有的类型全部在WX中，可以直接使用，不用额外导入或配置。已全局声明。

const configData: WX.ConfigOptions = {
  debug: true,
  appId: '',
  timestamp: '',
  nonceStr: '',
  signature: '',
  jsApiList: [], // WX.JsApi[]
  openTagList: [] // WX.OpenTag[]
}
weixin.config(configData)
```

## Note

使用过程中有任何问题，请[提 ISSUE](https://github.com/wtto00/jweixin-esm/issues/new/choose)。也非常欢迎所有的 PR。

有一些接口我只是看官方文档写的类型定义，并没有全部测试过，所以可能是会有错误的。如果发现了错误，麻烦提个 ISSUE，非常感谢。
