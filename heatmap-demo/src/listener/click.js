/* 页面点击, 记 body 点击坐标 */
import { CLICK_EVENT } from '../const.js'
import emitter from '../emitter.js'

function offset() {
  var e = (this[0] && this[0].ownerDocument).documentElement;
  return {
    top: this[0].getBoundingClientRect().top + window.pageYOffset - e.clientTop,
    left: this[0].getBoundingClientRect().left + window.pageXOffset - e.clientLeft
  }
}

function click () {
  document.addEventListener('click', e => {
    console.log('click', e)
    // const viewWidth = document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth
    const pageWidth = document.body.scrollWidth
    const data = {
      x: e.pageX - pageWidth/2,
      y: e.pageY,
      nodeName: e.target.nodeName,
      className: e.target.className
    }
    emitter.emit(CLICK_EVENT, data)
  }, { capture: true })
}

export default click
