import { makeExecutableSchema } from 'graphql-tools'
import { applyMiddleware } from 'graphql-middleware'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import directiveResolvers from './directiveResolvers'
import { logging, validation, errorHandler } from './middlewares'

export default applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers, directiveResolvers }),
  errorHandler,
  logging,
  validation,
)
