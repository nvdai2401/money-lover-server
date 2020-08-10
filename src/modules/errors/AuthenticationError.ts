import DomainError from './DomainError'

class AuthenticationError extends DomainError {
  constructor(message: string, info: unknown) {
    super(message, 400)
    this.data = { message, code: 400, info }
  }
}

export default AuthenticationError
