import { asClass } from 'awilix'
import ServiceProvider from '../../ServiceProvider'
import TransactionProvider from './TransactionProvider'

class TransactionServiceProvider extends ServiceProvider {
  register(): void {
    this.container.register(
      'transactionProvider',
      asClass(TransactionProvider).inject((injectedContainer) => ({
        transactions: injectedContainer
          .resolve('db')
          .collection('transactions'),
      })),
    )
  }
}

export default TransactionServiceProvider
