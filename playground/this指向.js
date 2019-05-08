function foo() {
  console.log(this.a)
}

a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()

function d() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(d().bind(obj)()())
