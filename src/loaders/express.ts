import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from '../config'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ app }: { app: express.Application }) => {
  app.get('/', (req, res) => {
    res.send('Hello world')
  })

  app.use(cors())
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())
}
