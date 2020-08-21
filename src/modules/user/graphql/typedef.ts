import gql from 'graphql-tag'

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    lastModified: Date
    avatar: String
  }

  type UserList {
    items: [User]!
  }

  input CreateUserInput {
    password: String!
    name: String!
    email: String!
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): User
  }

  extend type Query {
    userList(): UserList
  }
`

export default typeDefs
