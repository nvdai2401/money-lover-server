/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Container } from 'typedi'
import LoggerInstance from './logger'
import agendaFactory from './agenda'

export default ({
  mongoConnection,
  models,
}: {
  mongoConnection
  models: { name: string; model: any }[]
}) => {
  try {
    models.forEach((model) => {
      Container.set(model.name, model.model)
    })
    const agendaInstance = agendaFactory({ mongoConnection })
    Container.set('agendaInstance', agendaInstance)
    Container.set('loggerInstance', LoggerInstance)
    LoggerInstance.info('✌️ Agenda injected into container')
    return { agenda: agendaInstance }
  } catch (err) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', err)
    throw err
  }
}
