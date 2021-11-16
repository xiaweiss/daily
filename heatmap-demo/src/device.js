import { desktop, mobile, tablet } from './const.js'

class Device {
  constructor () {
    return {
      type: this.type(),
      ua: this.ua(),
    }
  }
  type () {
    if (!/iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(ua) && !/ipad/i.test(ua)) {
        return 'desktop'
    } else if (/iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(ua) && !/ipad/i.test(ua) || document.body.clientWidth <= 768) {
        // TODO: 暂时按 768，但有些项目不是 768，考虑在geek_elements 里做一个公用的 pageContainer
        // TODO: 窗口缩放时，响应式的处理
        return 'mobile'
    } else {
        // NOTE: iPad 以外，其他平板的横屏先按 desktop 来处理
        return 'tablet'
    }
  }
  ua () {
    return navigator.userAgent
  }
}

export default Device
