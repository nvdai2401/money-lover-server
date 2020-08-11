/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import jwt from 'jsonwebtoken'
import get from 'lodash/get'

class Jwt {
  private authConfig: any
  private options: unknown

  constructor(config: any) {
    this.authConfig = config.auth
    this.options = {
      expiresIn: get(this.authConfig, 'jwt.expiresIn', '1d'),
    }
  }

  encode(payload: any): string {
    return jwt.sign(
      payload,
      get(this.authConfig, 'jwt.privateKey', 'privateKey'),
    )
  }

  decode(token: string): any {
    return jwt.verify(token, this.authConfig.jwt.privateKey)
  }
}

export default Jwt
