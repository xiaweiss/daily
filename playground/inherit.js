var cat = {
    say() {
        console.log('meo')
    },
    jump() {
        console.log('jump')
    }
}

var tigger = Object.create(cat, {
    say: {
        value: function() {
            console.log('roar')
        }
    }
})

var anotherCat = Object.create(cat)

anotherCat.say()

var anotherTigger = Object.create(tigger)

anotherTigger.say()

console.log(anotherTigger)