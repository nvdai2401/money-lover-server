const logging = {
  Query: async (resolve, parent, args, context, info) => {
    console.log('graphql query logging middleware')
    return resolve(parent, args, context, info)
  },
  Mutation: async (resolve, parent, args, context, info) => {
    console.log('graphql mutation logging middleware')
    return resolve(parent, args, context, info)
  },
}

export default logging
