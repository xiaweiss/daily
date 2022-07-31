export {}

// 1
// interface SayHello {
//   (name: string): string;
// }

// const sayHello: SayHello = (name) => {
//   return 'hello,' + name
// }

// 2
function sayHello (name: string) : string {
  return 'hello,' + name
}


// res

const res = sayHello('hahahah')

console.log(res)
