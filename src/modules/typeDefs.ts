import gql from 'graphql-tag'
import { mergeTypes } from 'merge-graphql-schemas'
console.log('object')
import userTypeDefs from './user/graphql/typedef'

const baseTypeDefs = gql`
  # directive @isAuthenticated on FIELD_DEFINITION
  scalar Upload
  scalar Date

  type Query {
    hello: String
  }

  type Mutation {
    hello(name: String): String
  }
`
console.log('object')
console.log(userTypeDefs)
const typeDefs = [baseTypeDefs]

export default mergeTypes(typeDefs, { all: true })
