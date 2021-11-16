/* 页面注意力, 记分区的停留时长 */
import { ATTENTION_EVENT } from '../const.js'
import emitter from '../emitter.js'

function attention () {
  let timer = null
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  let viewHeight = document.documentElement.clientHeight

  const scrollHeight = document.documentElement.scrollHeight
  const attentionTime = 2000
  const screenShotTime = 300
  const blockHeight = 100
  const blockList = new Array(Math.ceil(scrollHeight/blockHeight)).fill('').map((v,k) => ({no: k, inScreen: false, exposeTime: 0, enterTime: 0}))

  // 开始给每个块记状态时间
  updateBlockList({blockList, blockHeight, scrollTop, viewHeight})

  // 视口变化时，更新 viewHeight
  document.addEventListener('resize', e => {
    requestAnimationFrame(() => {
      viewHeight = document.documentElement.clientHeight
    })
  }, { passive: true })

  document.addEventListener('scroll', e => {
    if (Date.now() - timer < screenShotTime) {
      return
    }
    timer = Date.now()
    requestAnimationFrame(() => {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      // 滚动时，更新每个块的状态时间
      updateBlockList({blockList, blockHeight, scrollTop, viewHeight})
      timer = null
    })
  }, { passive: true })

  // 离开页面前发送数据
  window.addEventListener('beforeunload', () => {
    updateBlockList({blockList, blockHeight, scrollTop, viewHeight})
  })

  /**
   * 计算并更新页面分块的数据
   * @param {array}  blockList    页面分块数据
   * @param {number} blockHeight  页面分块每块高度
   * @param {number} scrollTop    页面滚动高度
   * @param {number} viewHeight   窗口高度
   */
  function updateBlockList({blockList, blockHeight, scrollTop, viewHeight}) {
    const startNo = Math.floor(scrollTop / blockHeight)
    const endNo = Math.floor((scrollTop + viewHeight) / blockHeight)

    // console.log('startNo', startNo, scrollTop)
    // console.log('endNo', endNo, scrollTop + viewHeight)

    blockList.forEach((item) => {
      if (item.no >= startNo && item.no <= endNo) {
        // 从外部进入屏幕的，先设定进入时间，等下次滚动再计算时间
        if(!item.inScreen) {
          item.inScreen = true
          item.enterTime = Date.now()

        // 原先在屏幕内的
        } else {
          const newTime = Date.now() - item.enterTime
          if (newTime > item.exposeTime) {
            item.exposeTime = newTime
          }
        }
      } else {
        // 离开屏幕的
        // 时长超过一定时间，加入上报列表
        if (item.inScreen && item.exposeTime >= attentionTime) {
          const data = {...item}
          emitter.emit(ATTENTION_EVENT, data)
          console.log(blockList)
        }

        item.inScreen = false
        item.exposeTime = 0
        item.enterTime = 0
      }
    })
  }
}

export default attention
