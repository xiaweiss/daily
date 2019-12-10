function foo() {
    this.a = 'a'
}

foo.prototype.b = 'b';

const Foo = new foo();

console.log(foo.prototype.constructor === foo) // true

console.log(foo.prototype)
console.log(Foo.__proto__)

console.log(foo.prototype === Foo.__proto__) // true
