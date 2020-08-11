import { asClass, asValue } from 'awilix'
import Bcrypt from './bcrypt'
import Jwt from './jwt'
import mongodb from './mongodb'
import ServiceProvider from '../ServiceProvider'

class ThirdPartyServiceProvider extends ServiceProvider {
  register(): void {
    this.container.register({
      jwt: asClass(Jwt).singleton(),
      bcrypt: asClass(Bcrypt).singleton(),
    })
  }

  async boot(): Promise<void> {
    const config = this.container.resolve('config')
    const db = (await mongodb(config)).db('money_lover')

    this.container.register({
      db: asValue(db),
    })
  }
}

export default ThirdPartyServiceProvider
