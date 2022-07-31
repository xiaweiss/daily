let helloWorld = "Hello World"

interface User {
  name: string;
  id: number
}


// const user: User = {
//   name: "Hayes",
//   id: 0,
// }


class UserAccount {
  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }

  name: string
  id: number
}

const user: User = new UserAccount("Hayes", 0)

function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  //...
}
