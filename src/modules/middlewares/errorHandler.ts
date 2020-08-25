import { ValidationError } from '@hapi/joi'

const errorHandler = async (
  resolve,
  parent,
  args,
  context,
  info,
): Promise<any> => {
  const { container } = context
  const config = container.resolve('config')
  try {
    return await resolve(parent, args, context, info)
  } catch (err) {
    if (config.app.env === 'development' || err instanceof ValidationError)
      return err
  }
}

export default errorHandler
