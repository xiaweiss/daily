fruits = ['Apple', 'Banana']

// 会改变自身的方法
// push pop shift unshift 操作原数组
fruits.push('Orange', 'Apple', 'Banana')
console.log(fruits)

// splice, reverse, sort

// es6 fill, copyWithin

// 不会改变自身的方法

// concat, join, indexOf, lastIndexOf

// es6 includes

fruits.slice()
console.log(fruits)

// 遍历方法

// forEach, filter

// 不常用的 entries
// every 和数学中的"所有"类似，当所有的元素都符合条件才返回true
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(words);


[1,2,3,4,5].reduce((previous, current) => previous + current) // 10

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon","Kiwi");
