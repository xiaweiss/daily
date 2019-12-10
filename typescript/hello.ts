// // function showName(): void {
// //     console.log('My name is Tom');
// // }

// // showName()

// // let unusable: void = undefined;

// // let u: undefined = undefined;
// // let n: null = null;


// // let num: number = unusable;

// // let myFavoriteNumber;
// // myFavoriteNumber = 'seven';
// // myFavoriteNumber = 7;

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// // let myFavoriteNumber = [];

// function getString(something: string | number): string {
//     return something.toString();
// }



// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     ttt: 89
// };

// // let me: {age?: number} = {}

// let me


// let { age } = me || {};

// function show (p) {
//     let {age} = p || {}
//     return age
// }

// show(tom)


// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let a = Symbol('ass')

// let tom: Person = {
//     name: 'Tom',
//     // 1: 'male'
// };

// tom[0] = '123'

interface Person {
    name: string;
    readonly age?: number;
    [propName: string]: string|number;
}

var tom: Person = {
    name: 'Tom',
    // age: 25,
    gender: 'male'
};

tom.age = 12




function sum() {
    let args: IArguments = arguments;
    return args
}

sum(123)


let mySum = (x: number, y: number):number => {
    return x + y;
};



