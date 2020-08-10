class DomainError extends Error {
  data: unknown

  constructor(message: string, code: unknown) {
    super(message)
    this.name = this.constructor.name
    this.data = { message, code }
    Error.captureStackTrace(this, this.constructor)
  }
}

export default DomainError
