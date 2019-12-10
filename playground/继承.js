
function Parent(value) {
    this.val = value
}
Parent.prototype.getValue = function() {
    console.log(this.val) 
}

function Child(value) {
    Parent.call(this, value)
}

//组合继承
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// const child = new Child(1)
// child.getValue()
// child instanceof Parent;


//寄生组合继承
Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
})

// const child = new Child(1)
// child.getValue()
// child instanceof Parent;