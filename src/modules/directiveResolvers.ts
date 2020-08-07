const directiveResolvers = {
  isAuthenticated: async (next, source, args, { container, req }) => {
    console.log('isAuthenticated directive resolver logging')
  },
}

export default directiveResolvers
