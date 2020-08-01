/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
import expressLoader from './express'
import dependencyInjectorLoader from './dependencyInjector'
import mongooseLoader from './mongoose'
import jobsLoader from './jobs'
import Logger from './logger'

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader()
  Logger.info('✌️ DB loaded and connected!')

  const userModel = {
    name: 'userModel',
    model: require('../models/user').default,
  }

  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [userModel],
  })
  Logger.info('✌️ Dependency Injector loaded')

  await jobsLoader({ agenda })
  Logger.info('✌️ Jobs loaded')

  await expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded')
}
