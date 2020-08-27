import { IUser } from '../../../interfaces/IUser'
import { createUser, login } from '../validationSchema'

const resolvers = {
  Query: {
    // me: (_, args, { container, req }) =>
    //   container.resolve('userProvider').findById(req.user.id),
    userList: async (_, args, { container }): Promise<any> => {
      const userProvider = container.resolve('userProvider')
      const users = await userProvider.find()
      return users
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
