import { IUser } from '../../../interfaces/IUser'

const resolvers = {
  Query: {
    userList: (_, args, { container }) => {
      const userProvider = container.resolve('userProvider')
      return userProvider.findMany()
    },
  },
  Mutation: {
    createUser: (_, { user }, { container }): IUser =>
      container.resolve('authService').register(user),
  },
}

export default resolvers
