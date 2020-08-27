/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { scopePerRequest } from 'awilix-express'
import { graphqlHTTP } from 'express-graphql'
import { graphqlUploadExpress } from 'graphql-upload'
import expressPlayground from 'graphql-playground-middleware-express'

import schema from './modules'
import router from './http/router'

/**
 * @param  {} container
 * @returns express.Application
 */
export default (container): express.Application => {
  const config = container.resolve('config')
  const app = express()
  app.use(bodyParser.json())
  app.use(scopePerRequest(container))
  app.use(cors())
  app.use(config.api.prefix, router)
  app.use(
    config.api.graphql,
    // graphqlUploadExpress(config.graphqlUploadExpress),
    graphqlHTTP((req) => ({
      schema,
      graphiql: config.app.env === 'development',
      context: { container: req.container, req }, // bind http request context to graphQl context
    })),
  )
  app.get(
    config.api.playground,
    expressPlayground({
      endpoint: `${config.app.host}:${config.app.port}/graphql`,
    }),
  )
  return app
}
