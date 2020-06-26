import express from 'express'
import config from './config'

const app: express.Application = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(config.port, (err) => {
  if (err) console.error(err)
  console.log(`Server is listening at http://localhost:${config.port}`)
})
