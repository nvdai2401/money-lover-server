import { asClass } from 'awilix'
import ServiceProvider from '../../ServiceProvider'
import UserProvider from './UserProvider'
import Authenticator from './Authenticator'

class UserServiceProvider extends ServiceProvider {
  register(): void {
    this.container.register(
      'userProvider',
      asClass(UserProvider).inject((injectedContainer) => ({
        users: injectedContainer.resolve('db').collection('users'),
      })),
    )
    this.container.register('authService', asClass(Authenticator).singleton())
  }
}

export default UserServiceProvider
