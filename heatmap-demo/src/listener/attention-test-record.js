/* 页面注意力 */
// https://juejin.im/post/5ced34d5f265da1b94212a6f
var scrollTop = 0
var time = Date.now()
var moveData = []
var currentMoveIndex = 0
function move () {
  var currentTime = Date.now()
  var currentScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  var dis = currentScrollTop - scrollTop
  var disTime = currentTime - time
  // 上一次滑动页面和这次滑动页面的时间差大于100ms，就视作用户在某一个段时间做了停留
  if (disTime > 100) {
    if (moveData[currentMoveIndex] && moveData[currentMoveIndex].down === 0) {
      moveData[currentMoveIndex].time += disTime
    } else {
      moveData.push({
        down: 0,
        initTime: time, // initTime表示进入该状态的初始时间
        initDis: currentScrollTop, //initDis 表示进入该状态的初始位置
        sliderDis: dis, // 在该状态内滑动的距离
        time: disTime // 在该状态经历的时间（ms）
      })
    }
  } else {
    // 向下滑动
    if (dis >= 0) {
      // 如果之前已经是向下滑动的状态，只需要在原来的数据上累加滑动距离和滑动时间
      if (moveData[currentMoveIndex] && moveData[currentMoveIndex].down > 0) {
        moveData[currentMoveIndex].sliderDis += dis
        moveData[currentMoveIndex].time += disTime
      } else {
        moveData.push({
          down: 1,
          initTime: currentTime,
          initDis: currentScrollTop,
          sliderDis: dis,
          time: disTime
        })
      }
    } else {
      if (moveData[currentMoveIndex] && moveData[currentMoveIndex].down < 0) {
        moveData[currentMoveIndex].sliderDis += dis
        moveData[currentMoveIndex].time += disTime
      } else {
        moveData.push({
          down: -1,
          initTime: currentTime,
          initDis: currentScrollTop,
          sliderDis: dis,
          time: disTime
        })
      }
    }
  }
  console.log(moveData)
  currentMoveIndex = moveData.length - 1
  time = currentTime
  scrollTop = currentScrollTop
}

function attention () {
  document.addEventListener('scroll', e => {
    move()
    // emitter.emit(ATTENTION_EVENT, moveData)
  }, {
    passive: true,
    capture: true
  })
}

export default attention
