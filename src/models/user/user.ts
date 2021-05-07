export class User {
  socketId: string;
  name: string;

  constructor (socketId: string, name: string) {
    this.socketId = socketId
    this.name = name
    User.allUsers[socketId] = this
  }

  static allUsers: any = {};
  static getAllUsers () {
    return User.allUsers
  }

  static get (id: string) {
    return User.allUsers[id]
  }
}
