import DomainError from './DomainError'

class ResourceNotFoundError extends DomainError {
  constructor(resource: string, query: unknown) {
    super(`Resource ${resource} was not found.`, 404)
    this.data = { resource, query }
  }
}

export default ResourceNotFoundError
