function cat () {
    this.say = () => {
        console.log('meo')
    }
    this.jump = () => {
        console.log('jump')
    }
}

function tigger () {
    cat.call(this)
    this.say = () => {
        console.log('roar')
    }
}

var Cat = new cat
Cat.say()

var Tigger = new tigger
Tigger.say()
Tigger.jump()


