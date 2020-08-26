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

  async login(email: string, password: string): Promise<any> {
    const user = await this.userProvider.findByEmail(email)

    if (!user) {
      throw new AuthenticationError('Email or password is invalid')
    }
    if (!this.bcrypt.compare(password, user.password)) {
      throw new AuthenticationError('Email or password is invalid')
    }

    return {
      token: this.jwt.encode({
        id: user._id,
        name: user._name,
        email: user._email,
      }),
      user,
    }
  }

  verify(token: string): any {
    try {
      const payload = this.jwt.decode(token)
      return this.userProvider.factory(payload)
    } catch (err) {
      throw new AuthenticationError('Invalid token', err)
    }
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
