let a = {
  [Symbol.toPrimitive]() {
    return 2
  },
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },

}
console.log(1 + a) // => 3

console.log(+'b')
