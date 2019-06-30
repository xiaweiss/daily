function cat () {
    this.say = () => {
        console.log('meo')
    }
    this.jump = () => {
        console.log('jump')
    }
}

function tigger () {
    this.say = () => {
        console.log('roar')
    }
}

tigger.prototype = new cat
var Cat = new cat
var Tigger = new tigger
Tigger.say()
Tigger.jump()

console.log(Tigger, Tigger instanceof cat) // true
console.log(tigger, tigger instanceof cat) // false


