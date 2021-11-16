import EventEmitter from 'wolfy87-eventemitter'

const emitter = new EventEmitter()

export default emitter

// // https://stackoverflow.com/questions/22186467/how-to-use-javascript-eventtarget
// class Emitter {
//   constructor() {
//     var delegate = document.createDocumentFragment();
//     [
//       'addEventListener',
//       'dispatchEvent',
//       'removeEventListener'
//     ].forEach(f =>
//       this[f] = (...xs) => delegate[f](...xs)
//     )
//   }
// }
//
// // sample class to use Emitter
// class Example extends Emitter {}
//
// // run it
// var e = new Example()
// e.addEventListener('something', event => console.log(event))
// e.dispatchEvent(new Event('something'))
