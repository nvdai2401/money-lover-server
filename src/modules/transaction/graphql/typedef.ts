import gql from 'graphql-tag'

const typeDefs = gql`
  type Transaction {
    id: ID!
    amount: Int
    category: String
    createdAt: String
    updatedAt: String
    note: String
    image: String
  }

  type TransactionList {
    items: [Transaction]!
    total: Int!
  }

  input CreateTransactionInput {
    amount: Int!
    category: String!
    createdAt: String!
    name: String
    image: String
  }

  extend type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction
  }

  extend type Query {
    transactionList: TransactionList
  }
`

export default typeDefs
