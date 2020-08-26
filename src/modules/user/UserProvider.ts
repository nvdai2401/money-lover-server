import { ObjectId } from 'mongodb'
import moment from 'moment'
import { ResourceNotFoundError, ResourceAlreadyExist } from '../errors'
import { IUser } from '../../interfaces/IUser'
import User from './User'

class UserProvider {
  private users: any

  constructor(users: any) {
    this.users = users
  }

  async find(): Promise<any> {
    const users = await this.users.find({ deleted: false }).toArray()

    return {
      total: users.length,
      items: users.map((user) => this.factory(user)),
    }
  }

  findById(id: string): IUser {
    return this.users
      .findOne({ _id: ObjectId(id), deleted: false })
      .then(this.factory)
  }

  findByEmail(email: string): IUser {
    return this.users.findOne({ email, deleted: false }).then(this.factory)
  }

  async create(user: any): Promise<IUser> {
    const inserted = await this.users.insertOne({
      email: user.email,
      name: user.name,
      password: user.password,
      deleted: false,
      lastModified: moment().format(),
      avatar: user.avatar,
    })
    return this.factory(inserted.ops[0])
  }

  public factory(rawData: any): IUser {
    if (!rawData) return null

    const data: any = {}
    Object.keys(rawData).forEach((key) => {
      if (rawData[key] instanceof ObjectId) {
        data[key] = rawData[key].toString()
      } else {
        data[key] = rawData[key]
      }
    })
    const user = new User(data._id || data.id)
    user.password = data.password
    user.email = data.email
    user.name = data.name
    user.lastModified = data.lastModified
    user.avatar = data.avatar

    return user
  }
}

export default UserProvider
