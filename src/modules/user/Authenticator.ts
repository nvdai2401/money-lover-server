import UserProvider from './UserProvider'
import { AuthenticationError } from '../errors'
import { IUser } from '../../interfaces/IUser'

class Authenticator {
  private bcrypt: any
  private userProvider: any
  private jwt: any

  constructor(bcrypt: any, userProvider: any, jwt: any) {
    this.bcrypt = bcrypt
    this.userProvider = userProvider
    this.jwt = jwt
  }

  async register(user: any): Promise<IUser> {
    const registeredUser = await this.userProvider.findByEmail(user.email)
    if (registeredUser) {
      throw new AuthenticationError('The email already exists.')
    }
    const newUser = { ...user }
    newUser.password = await this.createPassword(newUser.password)
    return this.userProvider.create(newUser)
  }

  createPassword(text: string): string {
    return this.bcrypt.hash(text, 10)
  }
}

export default Authenticator
