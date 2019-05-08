function lightColor(fn, time) {
  fn()  // 亮灯
  return new Promise(resolve => {
     setTimeout(function(){
       resolve()
     }, time*1000)
  })
}

function red() {
console.log('red');
}
function green() {
console.log('green');
}
function yellow() {
console.log('yellow');
}

async function light() {
  await lightColor(green, 3)
  await lightColor(red, 2)
  await lightColor(yellow, 1)
  light()
}

light()
