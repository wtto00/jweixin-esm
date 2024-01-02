/**
 * 微信JS-SDK说明文档
 * [https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
 */
declare module WX {
  /**
   * config注入的jsApi
   * 即将废弃: onMenuShareTimeline onMenuShareAppMessage onMenuShareQQ onMenuShareQZone
   */
  type JsApi =
    | 'updateAppMessageShareData'
    | 'updateTimelineShareData'
    | 'onMenuShareTimeline'
    | 'onMenuShareAppMessage'
    | 'onMenuShareQQ'
    | 'onMenuShareWeibo'
    | 'onMenuShareQZone'
    | 'startRecord'
    | 'stopRecord'
    | 'onVoiceRecordEnd'
    | 'playVoice'
    | 'pauseVoice'
    | 'stopVoice'
    | 'onVoicePlayEnd'
    | 'uploadVoice'
    | 'downloadVoice'
    | 'chooseImage'
    | 'previewImage'
    | 'uploadImage'
    | 'downloadImage'
    | 'translateVoice'
    | 'getNetworkType'
    | 'openLocation'
    | 'getLocation'
    | 'hideOptionMenu'
    | 'showOptionMenu'
    | 'hideMenuItems'
    | 'showMenuItems'
    | 'hideAllNonBaseMenuItem'
    | 'showAllNonBaseMenuItem'
    | 'closeWindow'
    | 'scanQRCode'
    | 'chooseWXPay'
    | 'openProductSpecificView'
    | 'addCard'
    | 'chooseCard'
    | 'openCard'

  /**
   * 基本类
   * - 举报: "menuItem:exposeArticle"
   * - 调整字体: "menuItem:setFont"
   * - 日间模式: "menuItem:dayMode"
   * - 夜间模式: "menuItem:nightMode"
   * - 刷新: "menuItem:refresh"
   * - 查看公众号（已添加）: "menuItem:profile"
   * - 查看公众号（未添加）: "menuItem:addContact"
   */
  type BaseMenu =
    | 'menuItem:exposeArticle'
    | 'menuItem:setFont'
    | 'menuItem:dayMode'
    | 'menuItem:nightMode'
    | 'menuItem:refresh'
    | 'menuItem:profile'
    | 'menuItem:addContact'

  /**
   * 传播类
   * - 发送给朋友: "menuItem:share:appMessage"
   * - 分享到朋友圈: "menuItem:share:timeline"
   * - 分享到QQ: "menuItem:share:qq"
   * - 分享到Weibo: "menuItem:share:weiboApp"
   * - 收藏: "menuItem:favorite"
   * - 分享到FB: "menuItem:share:facebook"
   * - 分享到 QQ 空间 "menuItem:share:QZone"
   */
  type ShareMenu =
    | 'menuItem:share:appMessage'
    | 'menuItem:share:timeline'
    | 'menuItem:share:qq'
    | 'menuItem:share:weiboApp'
    | 'menuItem:favorite'
    | 'menuItem:share:facebook'
    | 'menuItem:share:QZone'

  /**
   * 保护类
   * - 编辑标签: "menuItem:editTag"
   * - 删除: "menuItem:delete"
   * - 复制链接: "menuItem:copyUrl"
   * - 原网页: "menuItem:originPage"
   * - 阅读模式: "menuItem:readMode"
   * - 在QQ浏览器中打开: "menuItem:openWithQQBrowser"
   * - 在Safari中打开: "menuItem:openWithSafari"
   * - 邮件: "menuItem:share:email"
   * - 一些特殊公众号: "menuItem:share:brand"
   */
  type ProtectMenu =
    | 'menuItem:editTag'
    | 'menuItem:delete'
    | 'menuItem:copyUrl'
    | 'menuItem:originPage'
    | 'menuItem:readMode'
    | 'menuItem:openWithQQBrowser'
    | 'menuItem:openWithSafari'
    | 'menuItem:share:email'
    | 'menuItem:share:brand'

  /**
   * config注入的开放标签
   * 微信开放标签有最低的微信版本要求、最低的系统版本要求，以及最低的JS接口文件版本要求。
   * - 微信版本要求为：7.0.12及以上
   * - 系统版本要求为：iOS 10.3及以上、Android 5.0及以上
   * - JS接口文件：1.6.0及以上
   * @link https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html
   */
  type OpenTag = 'wx-open-launch-weapp' | 'wx-open-launch-app' | 'wx-open-subscribe' | 'wx-open-audio'

  interface ConfigOptions {
    /**
     * 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
     */
    debug?: boolean
    /**
     * 必填，公众号的唯一标识
     */
    appId: string
    /**
     * 必填，生成签名的时间戳
     */
    timestamp: string
    /**
     * 必填，生成签名的随机串
     */
    nonceStr: string
    /**
     * 必填，签名。详情见[附录1](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)
     */
    signature: string
    /**
     * 必填，需要使用的JS接口列表 WX.JsApi
     * 详情见[附录2](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#63)
     */
    jsApiList: JsApi[]
    /**
     * 需要使用的开放标签列表
     * @example ['wx-open-launch-app']
     */
    openTagList?: OpenTag[]
  }

  /**
   * CommonApiOptions中的几个函数都带有一个参数，类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：
   * 调用成功时："xxx:ok" ，其中xxx为调用的接口名
   * 用户取消时："xxx:cancel"，其中xxx为调用的接口名
   * 调用失败时：其值为具体错误信息
   */
  type CommonApiOptionsCallbackParams<T extends object = {}> = {
    [key: string]: any
    errMsg: string
  } & T

  /**
   * T: success回调函数的参数
   * D: complete回调函数的参数
   */
  interface CommonApiOptions<T extends object = {}, D extends object = {}> {
    /**
     * 接口调用成功时执行的回调函数。
     */
    success?: (res?: CommonApiOptionsCallbackParams<T>) => void
    /**
     * 接口调用失败时执行的回调函数。
     */
    fail?: (res?: CommonApiOptionsCallbackParams) => void
    /**
     * 接口调用完成时执行的回调函数，无论成功或失败都会执行。
     */
    complete?: (res?: CommonApiOptionsCallbackParams<D>) => void
    /**
     * 用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
     */
    cancel?: (res?: CommonApiOptionsCallbackParams) => void
    /**
     * 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
     * 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回。
     */
    trigger?: (res?: CommonApiOptionsCallbackParams) => void
  }

  /**
   * 参数：判断当前客户端版本是否支持指定JS接口
   */
  interface CheckJsApioptions extends CommonApiOptions {
    /**
     * 需要检测的JS接口列表，所有JS接口列表见[WX.JsApi]
     */
    jsApiList: JsApi[]
  }

  /**
   * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
   */
  interface TimelineShareData extends CommonApiOptions {
    /**
     * 分享标题
     */
    title?: string
    /**
     * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
     */
    link?: string
    /**
     * 分享图标
     */
    imgUrl?: string
  }

  /**
   * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
   */
  interface AppMessageShareData extends TimelineShareData {
    /**
     * 分享描述
     */
    desc?: string
  }

  /**
   * 旧版自定义“分享给朋友”内容
   */
  interface MenuShareAppMessage extends AppMessageShareData {
    /**
     * 分享类型,music、video或link，不填默认为link
     */
    type?: 'music' | 'video' | 'link'
    /**
     * 如果type是music或video，则要提供数据链接，默认为空
     */
    dataUrl?: string
  }

  /**
   * 参数：拍照或从手机相册中选图接口
   */
  interface ChooseImageOptions
    extends CommonApiOptions<{
      /**
       * 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
       */
      localIds: string[]
    }> {
    /**
     * 默认9
     */
    count: number
    /**
     * 可以指定是原图还是压缩图，默认二者都有
     */
    sizeType: ('original' | 'compressed')[]
    /**
     * 可以指定来源是相册还是相机，默认二者都有
     */
    sourceType: ('album' | 'camera')[]
  }

  /**
   * 参数：预览图片接口
   */
  interface PreviewImageOptions extends CommonApiOptions {
    /**
     * 当前显示图片的http链接
     */
    current: string
    /**
     * 需要预览的图片http链接列表
     */
    urls: string[]
  }

  /**
   * 参数：上传资源接口
   */
  interface UploadOptions
    extends CommonApiOptions<{
      /**
       * 返回资源的服务器端ID
       */
      serverId: string
    }> {
    /**
     * 需要上传的资源的本地ID
     * uploadimage: 由chooseImage接口获得
     * uploadVoice: 由stopRecord接口获得
     */
    localId: string
    /**
     * 默认为1，显示进度提示
     */
    isShowProgressTips?: number
  }

  /**
   * 参数：下载资源接口
   */
  interface DownloadOptions
    extends CommonApiOptions<{
      /**
       * 返回资源下载后的本地ID
       */
      localId: string
    }> {
    /**
     * 需要下载的资源的服务器端ID
     * downloadImage: 由uploadImage接口获得
     * downloadVoice: 由uploadVoice接口获得
     */
    serverId: string
    /**
     * 默认为1，显示进度提示
     */
    isShowProgressTips?: number
  }

  /**
   * 参数：获取本地图片接口
   */
  interface GetLocalImgDataOptions
    extends CommonApiOptions<{
      /**
       * localData是图片的base64数据，可以用img标签显示
       */
      localData: string
    }> {
    /**
     * 图片的localID
     */
    localId: string
  }

  /**
   * 参数：播放语音接口
   * 参数：暂停播放接口
   * 参数：停止播放接口
   */
  interface PlayVoiceOptions extends CommonApiOptions {
    /**
     * 需要**播放/暂停播放/停止播放**的音频的本地ID，由stopRecord接口获得
     */
    localId: string
  }

  /**
   * 参数：识别音频并返回识别结果接口
   */
  interface TranslateVoiceOptions
    extends CommonApiOptions<{
      /**
       * 语音识别的结果
       */
      translateResult: string
    }> {
    /**
     * 需要识别的音频的本地Id，由录音相关接口获得
     */
    localId: string
    /**
     * 默认为1，显示进度提示
     */
    isShowProgressTips?: number
  }

  /**
   * 设备网络状态
   */
  type NetworkType = '2g' | '3g' | '4g' | 'wifi'

  /**
   * 参数：使用微信内置地图查看位置接口
   */
  interface OpenLocationOptions {
    /**
     * 纬度，浮点数，范围为90 ~ -90
     */
    latitude: number
    /**
     * 经度，浮点数，范围为180 ~ -180。
     */
    longitude: number
    /**
     * 位置名
     */
    name?: string
    /**
     * 地址详情说明
     */
    address?: string
    /**
     * 地图缩放级别,整型值,范围从1~28。默认为最大
     */
    scale?: number
    /**
     * 在查看位置界面底部显示的超链接,可点击跳转
     */
    infoUrl?: string
  }

  /**
   * 地理位置坐标类型
   */
  type LocationType = 'wgs84' | 'gcj02'

  /**
   * 参数：获取地理位置接口
   */
  interface GetLocationOptions
    extends CommonApiOptions<{
      /**
       * 纬度，浮点数，范围为90 ~ -90
       */
      latitude: number
      /**
       * 经度，浮点数，范围为180 ~ -180。
       */
      longitude: number
      /**
       * 速度，以米/每秒计
       */
      speed: number
      /**
       * 位置精度
       */
      accuracy: number
    }> {
    /**
     * 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
     */
    type?: LocationType
  }

  /**
   * 参数：开启查找周边ibeacon设备接口
   */
  interface StartSearchBeaconsOptions extends CommonApiOptions {
    /**
     * 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
     */
    ticket: string
  }

  /**
   * 周边ibeacon设备精度
   */
  enum BeaconsProximity {
    CLProximityUnknown = '0',
    CLProximityImmediate = '1',
    CLProximityNear = '2',
    CLProximityFar = '3'
  }

  /**
   * 周边ibeacon设备
   */
  interface Beacons {
    major: number
    minor: number
    uuid: string
    /**
     * 距离，单位为米
     */
    accuracy: string
    /**
     * 接收信号的强度指示
     */
    rssi: string
    /**
     * 精度，0：CLProximityUnknown, 1：CLProximityImmediate, 2：CLProximityNear, 3：CLProximityFar
     */
    proximity: BeaconsProximity
    /**
     * 接收信号时设备的方向（安卓设备返回有此字段，iOS无）；iOS设备若需要获取方向，可以利用HTML5标准API获取， 查看示例
     */
    heading: string
  }

  /**
   * 参数：批量隐藏功能按钮接口
   */
  interface HideMenuItemsOptions extends CommonApiOptions {
    /**
     * 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见[附录3](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#%E9%99%84%E5%BD%953-%E6%89%80%E6%9C%89%E8%8F%9C%E5%8D%95%E9%A1%B9%E5%88%97%E8%A1%A8)
     */
    menuList: (ShareMenu | ProtectMenu)[]
  }

  /**
   * 参数：批量隐藏功能按钮接口
   */
  interface ShowMenuItemsOptions extends CommonApiOptions {
    /**
     * 要显示的菜单项，所有menu项见[附录3](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#%E9%99%84%E5%BD%953-%E6%89%80%E6%9C%89%E8%8F%9C%E5%8D%95%E9%A1%B9%E5%88%97%E8%A1%A8)
     */
    menuList: (BaseMenu | ShareMenu | ProtectMenu)[]
  }

  /**
   * 参数：调起微信扫一扫接口
   */
  interface ScanQRCodeOptions
    extends CommonApiOptions<{
      resultStr?: string
    }> {
    /**
     * 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
     */
    needResult?: 0 | 1
    /**
     * 可以指定扫二维码还是一维码，默认二者都有
     */
    scanType?: ('qrCode' | 'barCode')[]
  }

  /**
   * 参数：跳转微信商品页接口
   */
  interface OpenProductSpecificViewOptions extends CommonApiOptions {
    /**
     * 商品id
     */
    productId: string
    /**
     * 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
     */
    viewType?: 0 | 1 | 2
  }

  interface Card {
    cardId: string
    [key: string]: any
  }

  /**
   * 参数：拉取适用卡券列表并获取用户选择信息
   */
  interface ChooseCardOptions
    extends CommonApiOptions<{
      /**
       * 用户选中的卡券列表信息
       */
      cardList: Card[]
    }> {
    /**
     * 门店ID。shopID用于筛选出拉起带有指定location_list(shopID)的卡券列表，非必填。
     */
    shopId?: string
    /**
     * 卡券类型，用于拉起指定卡券类型的卡券列表。当cardType为空时，默认拉起所有卡券的列表，非必填。
     */
    cardType?: string
    /**
     * 卡券ID，用于拉起指定cardId的卡券列表，当cardId为空时，默认拉起所有卡券的列表，非必填。
     */
    cardId?: string
    /**
     * 时间戳。
     */
    timestamp: string
    /**
     * 随机字符串。
     */
    nonceStr: string
    /**
     * 签名方式，目前仅支持SHA1
     */
    signType?: 'SHA1'
    /**
     * 签名。详见[附录4](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#%E9%99%84%E5%BD%954-%E5%8D%A1%E5%88%B8%E6%89%A9%E5%B1%95%E5%AD%97%E6%AE%B5%E5%8F%8A%E7%AD%BE%E5%90%8D%E7%94%9F%E6%88%90%E7%AE%97%E6%B3%95)。
     */
    cardSign: string
  }

  /**
   * 参数：批量添加卡券接口
   */
  interface AddCardOptions
    extends CommonApiOptions<{
      /**
       * 添加的卡券列表信息
       */
      cardList: Card[]
    }> {
    /**
     * 需要添加的卡券列表
     */
    cardList: {
      /**
       * 卡券ID
       */
      cardId: string
      /**
       * [附录4](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#%E9%99%84%E5%BD%954-%E5%8D%A1%E5%88%B8%E6%89%A9%E5%B1%95%E5%AD%97%E6%AE%B5%E5%8F%8A%E7%AD%BE%E5%90%8D%E7%94%9F%E6%88%90%E7%AE%97%E6%B3%95)
       * 开发者若调用接口报签名错误、已领完等异常情况可以参照：[卡券签名错误排查方法](http://mp.weixin.qq.com/s/WhYpWmfuhUBw2wseTXdt2A)
       */
      cardExt: string
    }[]
  }

  /**
   * 参数：查看微信卡包中的卡券接口
   */
  interface OpenCardOptions extends CommonApiOptions {
    /**
     * 需要打开的卡券列表
     */
    cardList: {
      /**
       * 卡券ID
       */
      cardId: string
      /**
       * unknown
       */
      code?: string
    }[]
  }

  /**
   * 参数：发起一个微信支付请求
   */
  interface ChooseWXPayOptions extends CommonApiOptions {
    /**
     * 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
     */
    timestamp: string
    /**
     * 支付签名随机串，不长于 32 位
     */
    nonceStr: string
    /**
     * 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
     */
    package: string
    /**
     * 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致
     */
    signType: string
    /**
     * 支付签名
     */
    paySign: string
  }

  /**
   * 参数：共享收货地址接口
   */
  interface OpenAddressOptions
    extends CommonApiOptions<{
      /**
       * 收货人姓名
       */
      userName: string
      /**
       * 邮编
       */
      postalCode: string
      /**
       * 国标收货地址第一级地址（省）
       */
      provinceName: string
      /**
       * 国标收货地址第二级地址（市）
       */
      cityName: string
      /**
       * 国标收货地址第三级地址（区）
       */
      countryName: string
      /**
       * 详细收货地址信息
       */
      detailInfo: string
      /**
       * 收货地址国家码
       */
      nationalCode: string
      /**
       * 收货人手机号码
       */
      telNumber: string
    }> {}

  /**
   * 小程序页面间事件通信通道
   * @link [官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.html)
   */
  interface MPEventChannel {
    /**
     * 触发一个事件
     * @param eventName 事件名称
     * @param args 事件参数
     */
    emit: (eventName: string, args: any) => void
    /**
     * 持续监听一个事件
     * @param eventName 事件名称
     * @param fn 事件监听函数
     */
    on: (eventName: string, fn: (args: any) => void) => void
    /**
     * 监听一个事件一次，触发后失效
     * @param eventName 事件名称
     * @param fn 事件监听函数
     */
    once: (eventName: string, fn: (args: any) => void) => void
    /**
     * 取消监听一个事件。
     * 给出第二个参数时，只取消给出的监听函数，
     * 否则取消所有监听函数
     * @param eventName 事件名称
     * @param fn 事件监听函数
     */
    off: (eventName: string, fn: (args: any) => void) => void
  }
  /**
   * 小程序路由跳转参数
   */
  interface MPRouterOptions<T extends object = {}> extends CommonApiOptions<T> {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数。
     * 参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；
     * 如 'path?key=value&key2=value2'
     */
    url: string
  }
  /**
   * 小程序 wx.miniProgram.navigateTo 参数
   */
  interface MPNavigateToOptions extends MPRouterOptions<MPEventChannel> {
    /**
     * 页面间通信接口，用于监听被打开页面发送到当前页面的数据。
     * 基础库 2.7.3 开始支持。
     */
    events?: Record<string, (args: any) => void>
    /**
     * 2.29.2 自定义路由类型，相关文档 [自定义路由](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/custom-route.html)
     */
    routeType?: string
  }
  /**
   * 小程序 wx.miniProgram.navigateBack 参数
   */
  interface MPNavigateBackOptions extends CommonApiOptions {
    /**
     * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     */
    delta: number
  }
  /**
   * 小程序相关API
   * @link [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3-1)
   */
  interface MiniProgram {
    /**
     * 获取当前环境,是否是小程序web-view
     * @param callback 回调函数
     */
    getEnv: (callback: (res: { miniprogram?: boolean }) => void) => void
    /**
     * 向小程序发送消息，
     * 会在以下特定时机触发组件的message事件：
     * 小程序后退、组件销毁、分享、复制链接（2.31.1）
     * @param params 向小程序发送的消息体
     */
    postMessage: (params: { data: any }) => void
    /**
     * 保留当前页面，跳转到应用内的某个页面。
     * 但是不能跳到 tabbar 页面。
     * 使用 wx.navigateBack 可以返回到原页面。
     * 小程序中页面栈最多十层。
     * @param options 跳转参数
     */
    navigateTo: (options: MPNavigateToOptions) => void
    /**
     * 关闭当前页面，返回上一页面或多级页面。
     * @param options 跳转参数
     */
    navigateBack: (options: MPNavigateBackOptions) => void
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @param options 跳转参数
     */
    switchTab: (options: MPRouterOptions) => void
    /**
     * 关闭所有页面，打开到应用内的某个页面
     * @param options 跳转参数
     */
    reLaunch: (options: MPRouterOptions) => void
    /**
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
     * @param options 跳转参数
     */
    redirectTo: (options: MPRouterOptions) => void
  }

  /* --------------------------------- 以下是所有方法 --------------------------------- */

  /**
   * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用
   * （同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用）。
   * ```javascript
   * wx.config({
   *   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
   *   appId: '', // 必填，公众号的唯一标识
   *   timestamp: , // 必填，生成签名的时间戳
   *   nonceStr: '', // 必填，生成签名的随机串
   *   signature: '',// 必填，签名
   *   jsApiList: [] // 必填，需要使用的JS接口列表
   * });
   * ```
   * @param options debug,appId,timestamp,nonceStr,signature,jsApiList
   */
  function config(options: ConfigOptions): void

  /**
   * 通过ready接口处理成功验证
   * ```javascript
   * wx.ready(function(){
   *   // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
   * });
   * ```
   * @param callback 回调函数
   */
  function ready(callback: () => void): void

  /**
   * 通过error接口处理失败验证
   * ```javascript
   * wx.error(function(res){
   *   // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
   * });
   * ```
   * @param callback 回调函数
   */
  function error(callback: (res?: CommonApiOptionsCallbackParams) => void): void

  /* --------------------------------- 基础接口 Start --------------------------------- */
  /**
   * 判断当前客户端版本是否支持指定JS接口
   * ```javascript
   * wx.checkJsApi({
   *   jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
   *   success: function(res) {
   *   // 以键值对的形式返回，可用的api值true，不可用为false
   *   // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
   *   }
   * });
   * ```
   * 备注：checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
   * @param options jsApiList
   */
  function checkJsApi(options: CheckJsApioptions): void
  /* --------------------------------- 基础接口 End --------------------------------- */

  /* --------------------------------- 分享接口 Start --------------------------------- */
  /**
   * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
   * ```javascript
   * wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
   *   wx.updateTimelineShareData({
   *     title: '', // 分享标题
   *     link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   *     imgUrl: '', // 分享图标
   *     success: function () {
   *       // 设置成功
   *     }
   *   })
   * });
   * ```
   * @param shareData title,link,imgUrl
   */
  function updateTimelineShareData(shareData: TimelineShareData): void

  /**
   * @deprecated
   *
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
   * ```javascript
   * wx.onMenuShareTimeline({
   *   title: '', // 分享标题
   *   link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   *   imgUrl: '', // 分享图标
   *   success: function () {
   *   // 用户点击了分享后执行的回调函数
   *   }
   * });
   * ```
   * @param shareData title,link,imgUrl
   */
  function onMenuShareTimeline(shareData: TimelineShareData): void

  /**
   * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
   * ```javascript
   * wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
   *   wx.updateAppMessageShareData({
   *     title: '', // 分享标题
   *     desc: '', // 分享描述
   *     link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   *     imgUrl: '', // 分享图标
   *     success: function () {
   *       // 设置成功
   *     }
   *   })
   * });
   * ```
   * @param shareData title,desc,link,imgUrl
   */
  function updateAppMessageShareData(shareData: AppMessageShareData): void

  /**
   * @deprecated
   *
   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
   * ```javascript
   * wx.onMenuShareAppMessage({
   *   title: '', // 分享标题
   *   desc: '', // 分享描述
   *   link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   *   imgUrl: '', // 分享图标
   *   type: '', // 分享类型,music、video或link，不填默认为link
   *   dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
   *   success: function () {
   *     // 用户点击了分享后执行的回调函数
   *   }
   * });
   * ```
   * @param shareData title,desc,link,type,dataUrl,imgUrl
   */
  function onMenuShareAppMessage(shareData: MenuShareAppMessage): void

  /**
   * @deprecated
   *
   * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
   * ```javascript
   * wx.onMenuShareQQ({
   *   title: '', // 分享标题
   *   desc: '', // 分享描述
   *   link: '', // 分享链接
   *   imgUrl: '', // 分享图标
   *   success: function () {
   *   // 用户确认分享后执行的回调函数
   *   },
   *   cancel: function () {
   *   // 用户取消分享后执行的回调函数
   *   }
   * });
   * ```
   * @param shareData title,desc,link,imgUrl
   */
  function onMenuShareQQ(shareData: AppMessageShareData): void

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
   * ```javascript
   * wx.onMenuShareWeibo({
   *   title: '', // 分享标题
   *   desc: '', // 分享描述
   *   link: '', // 分享链接
   *   imgUrl: '', // 分享图标
   *   success: function () {
   *   // 用户确认分享后执行的回调函数
   *   },
   *   cancel: function () {
   *   // 用户取消分享后执行的回调函数
   *   }
   * });
   * ```
   * @param shareData title,desc,link,imgUrl
   */
  function onMenuShareWeibo(shareData: AppMessageShareData): void

  /**
   * @deprecated
   *
   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
   * ```javascript
   * wx.onMenuShareQZone({
   *   title: '', // 分享标题
   *   desc: '', // 分享描述
   *   link: '', // 分享链接
   *   imgUrl: '', // 分享图标
   *   success: function () {
   *   // 用户确认分享后执行的回调函数
   *   },
   *   cancel: function () {
   *   // 用户取消分享后执行的回调函数
   *   }
   * });
   * ```
   * @param shareData title,desc,link,imgUrl
   */
  function onMenuShareQZone(shareData: AppMessageShareData): void
  /* --------------------------------- 分享接口 End --------------------------------- */

  /* --------------------------------- 图像接口 Start --------------------------------- */
  /**
   * 拍照或从手机相册中选图接口
   * ```javascript
   * wx.chooseImage({
   *   count: 1, // 默认9
   *   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
   *   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
   *   success: function (res) {
   *   var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
   *   }
   * });
   * ```
   * @param options count,sizeType,sourceType,success
   */
  function chooseImage(options: ChooseImageOptions): void

  /**
   * 预览图片接口
   * ```javascript
   * wx.previewImage({
   *   current: '', // 当前显示图片的http链接
   *   urls: [] // 需要预览的图片http链接列表
   * });
   * ```
   * @param options current,urls
   */
  function previewImage(options: PreviewImageOptions): void

  /**
   * 上传图片接口
   * ```javascript
   * wx.uploadImage({
   *   localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
   *   isShowProgressTips: 1, // 默认为1，显示进度提示
   *   success: function (res) {
   *     var serverId = res.serverId; // 返回图片的服务器端ID
   *   }
   * });
   * ```
   * 备注：上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，
   * 此处获得的 serverId 即 media_id。
   * @param options localId,isShowProgressTips,success
   */
  function uploadImage(options: UploadOptions): void

  /**
   * 下载图片接口
   * ```javascript
   * wx.downloadImage({
   *   serverId: '', // 需要下载的图片的服务器端ID，由uploadImage接口获得
   *   isShowProgressTips: 1, // 默认为1，显示进度提示
   *   success: function (res) {
   *     var localId = res.localId; // 返回图片下载后的本地ID
   *   }
   * });
   * ```
   * @param options serverId,isShowProgressTips,success
   */
  function downloadImage(options: DownloadOptions): void

  /**
   * 获取本地图片接口
   * ```javascript
   * wx.getLocalImgData({
   *   localId: '', // 图片的localID
   *   success: function (res) {
   *     var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
   *   }
   * });
   * ```
   * 备注：此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题。
   * 具体可参考《[iOS WKWebview网页开发适配指南](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/iOS_WKWebview)》
   * @param options localId,success
   */
  function getLocalImgData(options: GetLocalImgDataOptions): void
  /* --------------------------------- 图像接口 End --------------------------------- */

  /* --------------------------------- 音频接口 Start --------------------------------- */
  /**
   * 开始录音接口
   * ```javascript
   * wx.startRecord();
   * ```
   */
  function startRecord(): void

  /**
   * 停止录音接口
   * ```javascript
   * wx.stopRecord({
   *   success: function (res) {
   *     var localId = res.localId;
   *   }
   * });
   * ```
   * @param options success
   */
  function stopRecord(
    options: CommonApiOptions<{
      /**
       * 录音获得的本地资源ID
       */
      localId: string
    }>
  ): void

  /**
   * 监听录音自动停止接口
   * ```javascript
   * wx.onVoiceRecordEnd({
   *   // 录音时间超过一分钟没有停止的时候会执行 complete 回调
   *   complete: function (res) {
   *     var localId = res.localId;
   *   }
   * });
   * ```
   * @param options complete
   */
  function onVoiceRecordEnd(
    options: CommonApiOptions<
      {},
      {
        /**
         * 本地资源ID
         */
        localId: string
      }
    >
  ): void

  /**
   * 播放语音接口
   * ```javascript
   * wx.playVoice({
   *   localId: '' // 需要播放的音频的本地ID，由stopRecord接口获得
   * });
   * ```
   * @param options localId
   */
  function playVoice(options: PlayVoiceOptions): void

  /**
   * 暂停播放接口
   * ```javascript
   * wx.pauseVoice({
   *   localId: '' // 需要暂停的音频的本地ID，由stopRecord接口获得
   * });
   * ```
   * @param options localId
   */
  function pauseVoice(options: PlayVoiceOptions): void

  /**
   * 停止播放接口
   * ```javascript
   * wx.stopVoice({
   *   localId: '' // 需要停止的音频的本地ID，由stopRecord接口获得
   * });
   * ```
   * @param options localId
   */
  function stopVoice(options: PlayVoiceOptions): void

  /**
   * 监听语音播放完毕接口
   * ```javascript
   * wx.onVoicePlayEnd({
   *   success: function (res) {
   *     var localId = res.localId; // 返回音频的本地ID
   *   }
   * });
   * ```
   * @param options success
   */
  function onVoicePlayEnd(
    options: CommonApiOptions<{
      /**
       * 返回音频的本地ID
       */
      localId: string
    }>
  ): void

  /**
   * 上传语音接口
   * ```javascript
   * wx.uploadVoice({
   *   localId: '', // 需要上传的音频的本地ID，由stopRecord接口获得
   *   isShowProgressTips: 1, // 默认为1，显示进度提示
   *   success: function (res) {
   *     var serverId = res.serverId; // 返回音频的服务器端ID
   *   }
   * });
   * ```
   * 备注：上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，
   * 此处获得的 serverId 即 media_id，
   * 参考文档 .目前多媒体文件下载接口的频率限制为10000次/天，
   * 如需要调高频率，请登录微信公众平台，在开发 - 接口权限的列表中，
   * 申请提高临时上限。
   * @param options localId,isShowProgressTips,success
   */
  function uploadVoice(options: UploadOptions): void

  /**
   * 下载语音接口
   * ```javascript
   * wx.downloadVoice({
   *   serverId: '', // 需要下载的音频的服务器端ID，由uploadVoice接口获得
   *   isShowProgressTips: 1, // 默认为1，显示进度提示
   *   success: function (res) {
   *     var localId = res.localId; // 返回音频的本地ID
   *   }
   * });
   * ```
   * @param options serverId,isShowProgressTips,success
   */
  function downloadVoice(options: DownloadOptions): void

  /* --------------------------------- 音频接口 End --------------------------------- */

  /* --------------------------------- 智能接口 Start --------------------------------- */
  /**
   * 识别音频并返回识别结果接口
   * ```javascript
   * wx.translateVoice({
   *   localId: '', // 需要识别的音频的本地Id，由录音相关接口获得
   *   isShowProgressTips: 1, // 默认为1，显示进度提示
   *   success: function (res) {
   *     alert(res.translateResult); // 语音识别的结果
   *   }
   * });
   * ```
   * @param options localId,isShowProgressTips,success
   */
  function translateVoice(options: TranslateVoiceOptions): void
  /* --------------------------------- 智能接口 End --------------------------------- */

  /* --------------------------------- 设备信息 Start --------------------------------- */
  /**
   * 获取网络状态接口
   * ```javascript
   * wx.getNetworkType({
   *   success: function (res) {
   *     var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
   *   }
   * });
   * ```
   * @param options success
   */
  function getNetworkType(
    options: CommonApiOptions<{
      networkType: NetworkType
    }>
  ): void
  /* --------------------------------- 设备信息 End --------------------------------- */

  /* --------------------------------- 地理位置 Start --------------------------------- */
  /**
   * 使用微信内置地图查看位置接口
   * ```javascript
   * wx.openLocation({
   *   latitude: 0, // 纬度，浮点数，范围为90 ~ -90
   *   longitude: 0, // 经度，浮点数，范围为180 ~ -180。
   *   name: '', // 位置名
   *   address: '', // 地址详情说明
   *   scale: 1, // 地图缩放级别,整型值,范围从1~28。默认为最大
   *   infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
   * });
   * ```
   * @param options latitude,longitude,name,address,scale,infoUrl
   */
  function openLocation(options: OpenLocationOptions): void

  /**
   * 获取地理位置接口
   * ```javascript
   * wx.getLocation({
   *   type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
   *   success: function (res) {
   *     var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
   *     var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
   *     var speed = res.speed; // 速度，以米/每秒计
   *     var accuracy = res.accuracy; // 位置精度
   *   }
   * });
   * ```
   * @param options type,success
   */
  function getLocation(options: GetLocationOptions): void
  /* --------------------------------- 地理位置 End --------------------------------- */

  /* --------------------------------- 摇一摇周边 Start --------------------------------- */
  /**
   * 开启查找周边ibeacon设备接口
   * ```javascript
   * wx.startSearchBeacons({
   *   ticket:"",  //摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
   *   complete:function(argv){
   *     //开启查找完成后的回调函数
   *   }
   * });
   * ```
   * 备注：如需接入摇一摇周边功能，请参考：申请开通摇一摇周边
   * @param options ticket,complete
   */
  function startSearchBeacons(options: StartSearchBeaconsOptions): void

  /**
   * 关闭查找周边ibeacon设备接口
   * ```javascript
   * wx.stopSearchBeacons({
   *   complete:function(res){
   *     //关闭查找完成后的回调函数
   *   }
   * });
   * ```
   * @param options complete
   */
  function stopSearchBeacons(options: CommonApiOptions): void

  /**
   * 监听周边ibeacon设备接口
   * ```javascript
   * wx.onSearchBeacons({
   *   complete:function(argv){
   *     //回调函数，可以数组形式取得该商家注册的在周边的相关设备列表
   *   }
   * });
   * ```
   * [官方文档](https://developers.weixin.qq.com/doc/offiaccount/Shake_Nearby/Active_from_Html5/HTML_5_Page_Get_Device_Info.html#%E7%9B%91%E5%90%AC%E5%91%A8%E8%BE%B9ibeacon%E8%AE%BE%E5%A4%87%E6%8E%A5%E5%8F%A3)
   * @param options complete
   */
  function onSearchBeacons(options: CommonApiOptions<{}, { onSearchBeacons: { beacons: Beacons[] } }>): void
  /* --------------------------------- 摇一摇周边 End --------------------------------- */

  /* --------------------------------- 界面操作 Start --------------------------------- */
  /**
   * 关闭当前网页窗口接口
   * ```javascript
   * wx.closeWindow();
   * ```
   */
  function closeWindow(): void

  /**
   * 批量隐藏功能按钮接口
   * ```javascript
   * wx.hideMenuItems({
   *   menuList: [] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
   * });
   * ```
   * @param options menuList
   */
  function hideMenuItems(options: HideMenuItemsOptions): void

  /**
   * 批量显示功能按钮接口
   * ```javascript
   * wx.showMenuItems({
   *   menuList: [] // 要显示的菜单项，所有menu项见附录3
   * });
   * ```
   * @param options menuList
   */
  function showMenuItems(options: ShowMenuItemsOptions): void

  /**
   * 隐藏所有非基础按钮接口
   * ```javascript
   * wx.hideAllNonBaseMenuItem();
   * // “基本类”按钮详见附录3
   * ```
   * [附录3](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#%E9%99%84%E5%BD%953-%E6%89%80%E6%9C%89%E8%8F%9C%E5%8D%95%E9%A1%B9%E5%88%97%E8%A1%A8)
   */
  function hideAllNonBaseMenuItem(): void

  /**
   * 显示所有功能按钮接口
   * ```javascript
   * wx.showAllNonBaseMenuItem();
   * ```
   */
  function showAllNonBaseMenuItem(): void
  /* --------------------------------- 界面操作 End --------------------------------- */

  /* --------------------------------- 微信扫一扫 Start --------------------------------- */
  /**
   * 调起微信扫一扫接口
   * ```javascript
   * wx.scanQRCode({
   *   needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
   *   scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
   *   success: function (res) {
   *     var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
   *   }
   * });
   * ```
   * @param options needResult,scanType,success
   */
  function scanQRCode(options: ScanQRCodeOptions): void
  /* --------------------------------- 微信扫一扫 End --------------------------------- */

  /* --------------------------------- 微信小店 Start --------------------------------- */
  /**
   * 跳转微信商品页接口
   * ```javascript
   * wx.openProductSpecificView({
   *   productId: '', // 商品id
   *   viewType: '' // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
   * });
   * ```
   * @param options productId,viewType
   */
  function openProductSpecificView(options: OpenProductSpecificViewOptions): void
  /* --------------------------------- 微信小店 End --------------------------------- */

  /* --------------------------------- 微信卡券 Start --------------------------------- */
  /**
   * 拉取适用卡券列表并获取用户选择信息
   * ```javascript
   * wx.chooseCard({
   *   shopId: '', // 门店Id
   *   cardType: '', // 卡券类型
   *   cardId: '', // 卡券Id
   *   timestamp: 0, // 卡券签名时间戳
   *   nonceStr: '', // 卡券签名随机串
   *   signType: '', // 签名方式，默认'SHA1'
   *   cardSign: '', // 卡券签名
   *   success: function (res) {
   *     var cardList= res.cardList; // 用户选中的卡券列表信息
   *   }
   * });
   * ```
   * 开发者特别注意：签名错误会导致拉取卡券列表异常为空，请仔细检查参与签名的参数有效性。
   * **特别提醒: **拉取列表仅与用户本地卡券有关，拉起列表异常为空的情况通常有三种：签名错误、时间戳无效、筛选机制有误。请开发者依次排查定位原因。
   * @param options shopId,cardType,cardId,timestamp,nonceStr,signType,cardSign,success
   */
  function chooseCard(options: ChooseCardOptions): void

  /**
   * 批量添加卡券接口
   * ```javascript
   * wx.addCard({
   *   cardList: [{
   *     cardId: '',
   *     cardExt: ''
   *   }], // 需要添加的卡券列表
   *   success: function (res) {
   *     var cardList = res.cardList; // 添加的卡券列表信息
   *   }
   * });
   * ```
   * @param options cardList,success
   */
  function addCard(options: AddCardOptions): void

  /**
   * 查看微信卡包中的卡券接口
   * ```javascript
   * wx.openCard({
   *   cardList: [{
   *     cardId: '',
   *     code: ''
   *   }]// 需要打开的卡券列表
   * });
   * ```
   * @param options cardList
   */
  function openCard(options: OpenCardOptions): void
  /* --------------------------------- 微信卡券 End --------------------------------- */

  /* --------------------------------- 微信支付 Start --------------------------------- */
  /**
   * 发起一个微信支付请求
   * ```javascript
   * wx.chooseWXPay({
   *   timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
   *   nonceStr: '', // 支付签名随机串，不长于 32 位
   *   package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
   *   signType: '', // 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致
   *   paySign: '', // 支付签名
   *   success: function (res) {
   *     // 支付成功后的回调函数
   *   }
   * });
   * ```
   * 备注：prepay_id 通过微信支付统一下单接口拿到，paySign 采用统一的微信支付 Sign 签名生成方法，注意这里 appId 也要参与签名，appId 与 config 中传入的 appId 一致，签名格式要求以微信支付文档为准。
   * @param options timestamp,nonceStr,package,signType,paySign,success
   */
  function chooseWXPay(options: ChooseWXPayOptions): void
  /* --------------------------------- 微信支付 End --------------------------------- */

  /* --------------------------------- 快速输入 Start --------------------------------- */
  /**
   * 共享收货地址接口
   * ```javascript
   * wx.openAddress({
   *   success: function (res) {
   *     var userName = res.userName; // 收货人姓名
   *     var postalCode = res.postalCode; // 邮编
   *     var provinceName = res.provinceName; // 国标收货地址第一级地址（省）
   *     var cityName = res.cityName; // 国标收货地址第二级地址（市）
   *     var countryName = res.countryName; // 国标收货地址第三级地址（国家）
   *     var detailInfo = res.detailInfo; // 详细收货地址信息
   *     var nationalCode = res.nationalCode; // 收货地址国家码
   *     var telNumber = res.telNumber; // 收货人手机号码
   *   }
   * });
   * ```
   * 微信地址共享使用的数据字段包括：
   * - 收货人姓名
   * - 地区，省市区三级
   * - 详细地址
   * - 邮编
   * - 联系电话
   * 其中，地区对应是国标三级地区码，如“广东省-广州市-天河区”，对应的邮编是是510630。详情参考链接：http://xzqh.mca.gov.cn/defaultQuery
   * @param options success
   */
  function openAddress(options: OpenAddressOptions): void
  /* --------------------------------- 快速输入 End --------------------------------- */

  /* --------------------------------- 小程序 Start --------------------------------- */
  /**
   * 微信小程序相关API
   */
  export const miniProgram: MiniProgram
  /* --------------------------------- 小程序 End --------------------------------- */
}

declare module '@wtto00/jweixin-esm' {
  export default WX
}

interface Window {
  wx: typeof WX
  jWeixin: typeof WX
  /**
   * 微信环境中才有该字段，外部浏览器无此字段
   */
  WeixinJSBridge?: {
    call: () => void
    invoke: (e: any, t: any, n: any) => void
    log: (e: any) => void
    on: (e: any, t: Function) => void
  }
  /**
   * 小程序web-view中才有该字段
   * [小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3-4)
   */
  __wxjs_environment?: 'miniprogram'
}

interface GlobalEventHandlersEventMap {
  /**
   * 对于符合微信或系统最低版本要求但仍无法使用微信开放标签的场景，
   * 将会在下方使用步骤中的wx.config权限验证成功后触发WeixinOpenTagsError事件告知开发者。
   * 仅无法使用微信开发标签，JS-SDK其他功能不受影响。
   */
  WeixinOpenTagsError: CustomEvent<{ errMsg?: string }>
}
