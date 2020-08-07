import gql from 'graphql-tag'
import { mergeTypes } from 'merge-graphql-schemas'

const baseTypeDefs = gql`
  directive @isAuthenticated on FIELD_DEFINITION
  scalar Upload
  scalar Date

  type Query {
    hello: String
  }

  type Mutation {
    hello(name: String): String
  }
`

const typeDefs = [baseTypeDefs]

export default mergeTypes(typeDefs, { all: true })
