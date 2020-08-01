import Agenda from 'agenda'
import config from '../config'

export default ({ mongoConnection }) => {
  return new Agenda({
    mongodb: mongoConnection,
    db: { collection: config.agenda.dbCollection },
    processEverything: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  })
}
