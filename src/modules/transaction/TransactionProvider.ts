import { ObjectId } from 'mongodb'
import moment from 'moment'
import { ITransaction } from '../../interfaces/ITransaction'
import Transaction from './Transaction'

class TransactionProvider {
  private transactions: any

  constructor(transactions: [ITransaction]) {
    this.transactions = transactions
  }

  async find(): Promise<any> {
    const transactions = await this.transactions
      .find({ deleted: false })
      .toArray()
    return {
      total: transactions.length,
      items: transactions.map((transaction) => this.factory(transaction)),
    }
  }

  async create(transaction: any): Promise<any> {
    const { amount, category, note, image, createdAt } = transaction
    const inserted = await this.transactions.insertOne({
      amount,
      category,
      note,
      image,
      createdAt,
      lastModified: moment().format(),
    })
    return this.factory(inserted.ops[0])
  }

  factory(rawData: any): ITransaction {
    if (!rawData) return null

    const data: any = {}
    Object.keys(rawData).forEach((key) => {
      if (rawData[key] instanceof ObjectId) {
        data[key] = rawData[key].toString()
      } else {
        data[key] = rawData[key]
      }
    })

    const transaction = new Transaction(data._id || data.id)

    transaction.amount = data.amount
    transaction.category = data.category
    transaction.createdAt = data.createdAt
    transaction.lastModified = data.lastModified
    transaction.note = data.note
    transaction.image = data.image

    return transaction
  }
}

export default TransactionProvider
