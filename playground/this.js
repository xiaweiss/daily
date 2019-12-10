// function foo() {
//   console.log(this.a)
// }

// a = 1
// foo()

// const obj = {
//   a: 2,
//   foo: foo
// }
// obj.foo()

// const c = new foo()

// function d() {
//   return () => {
//     return () => {
//       console.log(this)
//     }
//   }
// }
// console.log(d().bind(obj)()())


function foo() {
  console.log(this.a);
}

var a = 2;
var o = {a: 3, foo: foo};
var p = {a:4};

(p.foo = o.foo)();