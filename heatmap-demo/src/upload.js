
import { CLICK_EVENT, SCROLL_EVENT, ATTENTION_EVENT } from './const.js'
import emitter from './emitter.js'

function upload () {
  emitter.on(CLICK_EVENT, (data) => {
    console.log('upload click', data)
    submitData(data)
  })
  emitter.on(SCROLL_EVENT, (data) => {
    console.log('upload scroll', data)
    submitData(data)
  })

  emitter.on(ATTENTION_EVENT, (data) => {
    console.log('upload attention', data)
    submitData(data)
  })
}

function submitData (data) {
  const img = new Image()
  const baseUrl = 'https://static001.geekbang.org/static/university/img/02@3x.594f218.png?data='
  img.src = baseUrl + decodeURIComponent(JSON.stringify(data))
}

export default upload
