/* eslint-disable no-new */
/* eslint-disable no-undef */
import { User } from './user'
import faker from 'faker'

describe('[user.ts]', () => {
  const { lorem: { word } } = faker

  beforeEach(() => {
    User.allUsers = []
  })

  it('creates instance of user', () => {
    const socketId = word()
    const name = word()
    const user = new User(socketId, name)

    expect(user instanceof User).toBe(true)
    expect(user.name).toBe(name)
    expect(user.socketId).toBe(socketId)
  })

  it('creates multiple instance of user and returns all users', () => {
    const socketId1 = word()
    const socketId2 = word()
    const name1 = word()
    const name2 = word()
    new User(socketId1, name1)
    new User(socketId2, name2)

    const users = User.getAllUsers()
    expect(Object.keys(users)).toHaveLength(2)
    expect(users[socketId1]).toBeInstanceOf(User)
    expect(users[socketId1].name).toBe(name1)
    expect(users[socketId1].socketId).toBe(socketId1)
  })

  it('creates multiple instance of user and returns user by given id', () => {
    const socketId1 = word()
    const socketId2 = word()
    const name1 = word()
    const name2 = word()
    new User(socketId1, name1)
    new User(socketId2, name2)

    const user = User.get(socketId1)

    expect(user.name).toBe(name1)
    expect(user.socketId).toBe(socketId1)
  })
})
