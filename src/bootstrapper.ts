import { asValue, AwilixContainer } from 'awilix'
import container from './container'
import config from './config'

const bootstrapper = async (): Promise<AwilixContainer> => {
  const { serviceProviders } = config

  container.register({
    config: asValue(config),
  })

  const services = serviceProviders.map((Service) => new Service(container))
  services.forEach((service) => {
    service.register()
  })

  for (const service of services) {
    if (typeof service.boot === 'function') {
      await service.boot()
    }
  }
  return container
}

export default bootstrapper
