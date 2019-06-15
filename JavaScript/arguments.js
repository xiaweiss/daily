function foo (p1, p2) {
    console.log(p1)
    // p1[0] = 4
    arguments[0][0] = 5
    console.log(p1)
    console.log(arguments[0])
    console.log(p1 === arguments[0])
    console.log(Object.prototype.toString.call(arguments.slice()))
}

foo([1,2,3]);