import { IUser } from '../../interfaces/IUser'

class User {
  readonly _id: string
  private _email: string
  private _password: string
  private _name: string
  private _lastModified: string
  private _avatar: string

  constructor(id: string) {
    this._id = id
    this._email = null
    this._password = null
    this._name = null
    this._lastModified = null
    this._avatar = null
  }

  public get id(): string {
    return this._id
  }

  public get email(): string {
    return this._email
  }

  public set email(email: string) {
    this._email = email
  }

  public get password(): string {
    return this._password
  }

  public set password(password: string) {
    this._password = password
  }

  public get name(): string {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get lastModified(): string {
    return this._lastModified
  }

  public set lastModified(lastModified: string) {
    this._lastModified = lastModified
  }

  public get avatar(): string {
    return this._avatar
  }

  public set avatar(avatar: string) {
    this._avatar = avatar
  }

  public toJson(): IUser {
    return {
      id: this._id,
      email: this._email,
      password: this._password,
      name: this._name,
      lastModified: this._lastModified,
      avatar: this._avatar,
    }
  }
}

export default User
