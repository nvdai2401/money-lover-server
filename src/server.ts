// import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
import cluster from 'cluster'
import os from 'os'
import http from 'http'

import createApp from './app'
import config from './config'
import bootstrapper from './bootstrapper'

const runApp = async () => {
  const container = await bootstrapper()
  const app = createApp(container)
  const httpServer = http.createServer(app)
  httpServer.listen(config.app.port, () => {
    console.log(
      `Running a GraphQL API server at ${config.app.host}:${config.app.port}${config.api.graphql}`,
    )
  })
}

if (config.app.env === 'production') {
  if (cluster.isMaster) {
    os.cpus().forEach(cluster.fork)
  } else if (cluster.isWorker) {
    runApp().catch(console.error)
  }
} else {
  runApp().catch(console.error)
}
