import get from 'lodash/get'
import { AuthenticationError } from './errors'

const directiveResolvers = {
  isAuthenticated: async (next, source, args, { container, req }) => {
    const token = get(req, 'headers.authorization', '').replace('Bearer ', '')

    if (!token) {
      throw new Error('You must supply a JWT for authorization')
    }

    try {
      req.user = await container.resolve('authService').verify(token)
      next()
    } catch (err) {
      if (err instanceof AuthenticationError) {
        throw new Error('User is not authenticated')
      }
      throw err
    }
  },
}

export default directiveResolvers
