import listenerClick from './listener/click.js'
import listenerScroll from './listener/scroll.js'
import listenerAttention from './listener/attention.js'
import upload from './upload.js'

class HotMap {
  init() {
    listenerClick()
    listenerScroll()
    listenerAttention()
    upload()
  }
}

const hotMap = new HotMap()

export default hotMap
