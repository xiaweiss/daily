function setName(obj) {
    obj.name = 'aaaa'
    obj = new Object()
    obj.name = 'bbbb'
}

var person = new Object()
setName(person)

console.log(person.name) // 'aaaa'


var a = new RegExp('abc')
var b = /abc/g

console.log(typeof a) // object
console.log(typeof b) // object