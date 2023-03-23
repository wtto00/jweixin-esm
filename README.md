# jweixin-esm

微信 JSSDK, ESM 模块, 附带 TS 类型以及详细注释

![官方版本:1.6.0](https://img.shields.io/badge/官方版本-1.6.0-blue?style=flat-square&logo=Tencent%20QQ) ![Types](https://img.shields.io/badge/Types-TypeScript-blue?style=flat-square&logo=TypeScript&&labelColor=success) ![PR:WELCOME](https://img.shields.io/badge/PR-WELCOME-blue?style=flat-square) ![ISSUE:WELCOME](https://img.shields.io/badge/ISSUE-WELCOME-blue?style=flat-square)

## Install

```shell
pnpm add jweixin-esm
# npm i jweixin-esm
# yarn add jweixin-esm
```

## Useage

```typescript
import weixin from 'jweixin-esm'
// or:
// import 'jweixin-esm'

// weixin的类型是WX，已全局声明

console.log(weixin) // 导入的名称
console.log(window.wx) // wx已全局暴露
console.log(window.jWeixin) // jWeixin已全局暴露

// 这里 weixin=window.wx=window.jWeixin
// 所有的类型全部在WX中，可以直接使用，不用额外导入或配置。已全局声明。

const configData: WX.ConfigOptions = {
  debug: true,
  appId: '',
  timestamp: '',
  nonceStr: '',
  signature: '',
  jsApiList: [] // WX.JsApi[]
}
weixin.config(configData)
```

## About

基于微信官方的 JSSDK [jweixin-1.6.0.js](http://res.wx.qq.com/open/js/jweixin-1.6.0.js) 改造。[官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
