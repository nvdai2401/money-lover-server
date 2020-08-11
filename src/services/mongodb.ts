import { MongoClient } from 'mongodb'

export default function (config): any {
  return new Promise((resolve, reject) => {
    const basConfig = { native_parser: true, useUnifiedTopology: true }
    const mongoConfig =
      process.env.NODE_ENV === 'development'
        ? basConfig
        : {
            ...basConfig,
            auth: {
              user: 'foobar',
              password: 'foobarPassword',
            },
            readPreference: 'secondaryPreferred',
            replicaSet: 'mongo-replica-set',
          }

    MongoClient.connect(config.mongodb.url, mongoConfig, (err, client) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        client.db('money_lover')
        resolve(client)
      }
    })
  })
}
