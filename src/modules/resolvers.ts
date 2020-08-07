import { merge } from 'lodash'
import { GraphQLUpload } from 'graphql-upload'

const baseResolver = {
  Upload: GraphQLUpload,
  Query: {
    hello: (): string => 'world',
  },
  Mutation: {
    hello: (_, { name }): string => `Hello ${name}`,
  },
}

export default merge(baseResolver)
