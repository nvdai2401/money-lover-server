const resolvers = {
  Query: {
    userList: (_, args, { container }) => {
      const userProvider = container.resolve('userProvider')
      return userProvider.findMany()
    },
  },
  Mutation: {
    createUser: (_, { user }, { container }) => container.register(user),
  },
}

export default resolvers
