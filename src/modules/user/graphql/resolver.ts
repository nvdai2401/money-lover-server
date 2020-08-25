import { IUser } from '../../../interfaces/IUser'
import { createUser } from '../validationSchema'

const resolvers = {
  Query: {
    userList: (_, args, { container }) => {
      const userProvider = container.resolve('userProvider')
      return userProvider.findMany()
    },
  },
  Mutation: {
    createUser: {
      extensions: {
        validationSchema: createUser,
      },
      resolve: (_, { user }, { container }): IUser =>
        container.resolve('authService').register(user),
    },
  },
}

export default resolvers
