const resolvers = {
  Query: {
    transactionList: (_, args, { container }): Promise<any> => {
      return
    },
  },
  Mutation: {
    createTransaction: (_, { transaction }, { container }) => {
      console.log(transaction)
      return container.resolve('transactionProvider').create(transaction)
    },
  },
}

export default resolvers
