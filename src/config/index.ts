/* eslint-disable @typescript-eslint/no-var-requires */
const config = {
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 8000,
    env: process.env.NODE_ENV || 'development',
    host: process.env.APP_HOST || 'http://localhost',
  },
  mongodb: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/money_lover',
  },
  auth: {
    jwt: {
      privateKey: process.env.JWT_PRIVATE_KEY || 'privateKey',
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },
    bcrypt: {
      saltRounds: parseInt(process.env.BCRYPT_SALT_ROUND, 10) || 10,
    },
  },
  graphqlUploadExpress: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 100000000,
    maxFiles: parseInt(process.env.MAX_FILES, 10) || 10,
  },
  serviceProviders: [require('../services/ThirdPartyServiceProvider').default],
  /**
   * API configs
   */
  api: {
    prefix: '/api',
    graphql: '/graphql',
    playground: '/playground',
  },
  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}

export default config
