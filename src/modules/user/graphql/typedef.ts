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

  type AuthPayload {
    token: String!
    user: User!
  }

  input CreateUserInput {
    password: String!
    name: String!
    email: String!
  }

  input LoginInput {
    password: String!
    email: String!
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): User
    login(user: LoginInput!): AuthPayload
  }

  extend type Query {
    userList: UserList
  }
`

export default typeDefs
