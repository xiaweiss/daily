/* 页面触达率，取最大滚动距离 */
import { SCROLL_EVENT } from '../const.js'
import emitter from '../emitter.js'

function scroll () {
  let timer = null
  let maxScrollBottom = 0
  document.addEventListener('scroll', e => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      const viewHeight = document.body.clientHeight
      const scrollBottom = scrollTop + viewHeight

      // maxScrollBottom = scrollBottom > maxScrollBottom ? scrollBottom : maxScrollBottom
      if (scrollBottom > maxScrollBottom) {
        maxScrollBottom = scrollBottom
      }
      const data = maxScrollBottom
      emitter.emit(SCROLL_EVENT, data)
      timer = null
    }, 200)
  }, { passive: true })
}

export default scroll
