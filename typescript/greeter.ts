// function greeter(person: string) {
//     return "Hello, " + person;
// }

// greeter(user);

// enum Color { Red, Green = 2, Blue}
// let user = undefined;

// let c = Color.Green
// console.log(c)

// declare function create(o: object | null): void;
// create([0,1,2])
// create(null)

// let someValue: any = "this is a string";

// let strLength: number = (someValue).length;

// console.log(strLength)

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: { label: string}) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);



// export {}
