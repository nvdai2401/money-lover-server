import { IUser } from '../../../interfaces/IUser'
import { createUser, login } from '../validationSchema'

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
    login: {
      extensions: {
        validationSchema: login,
      },
      resolve: (_, { user }, { container }): any =>
        container.resolve('authService').login(user.email, user.password),
    },
  },
}

export default resolvers
