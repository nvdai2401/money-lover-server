import { asClass } from 'awilix'
import ServiceProvider from '../../ServiceProvider'
import UserProvider from './UserProvider'

class UserServiceProvider extends ServiceProvider {
  register(): void {
    this.container.register(
      'userProvider',
      asClass(UserProvider).inject((injectedContainer) => ({
        users: injectedContainer.resolve('db').collection('users'),
      })),
    )
  }
}

export default UserServiceProvider
