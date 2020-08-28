import { merge } from 'lodash'
import { GraphQLUpload } from 'graphql-upload'
import userResolver from './user/graphql/resolver'
import transactionResolver from './transaction/graphql/resolver'

const baseResolver = {
  Upload: GraphQLUpload,
  Query: {
    hello: (): string => 'world',
  },
  Mutation: {
    hello: (_, { name }): string => `Hello ${name}`,
  },
}

export default merge(baseResolver, userResolver, transactionResolver)
