export {}

interface IPerson {
  name: string;
  age: number;
}

// class Person implements IPerson {
//   name: string;
//   age: number;
// }

// const obj: IPerson = {
//   name: 'guang',
//   age: 18
// }

interface PersonConstructor {
  new (name: string, age: number): IPerson;
}

function createPerson(ctor: PersonConstructor) {
  return new ctor('guang', 18);
}


class person {

}

// res

const res = createPerson(person)

console.log(res)
