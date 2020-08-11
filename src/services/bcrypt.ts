import bcrypt from 'bcrypt'
import get from 'lodash/get'

class Bcrypt {
  private saltRounds: number
  constructor(config: unknown) {
    this.saltRounds = get(config, 'auth.bcrypt.saltRounds', 10)
  }

  hash(plaintext: string): string {
    return bcrypt.hash(plaintext, this.saltRounds)
  }

  compare(plaintext: string, hash: string): boolean {
    return bcrypt.compareSync(plaintext, hash)
  }
}

export default Bcrypt
