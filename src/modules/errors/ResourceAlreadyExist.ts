import DomainError from './DomainError'

class ResourceAlreadyExist extends DomainError {
  constructor(resource: string, query: unknown) {
    super(`Resource ${resource} already exist.`, 404)
    this.data = { resource, query }
  }
}

export default ResourceAlreadyExist
