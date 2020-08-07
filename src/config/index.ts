const config = {
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 8000,
    env: process.env.NODE_ENV || 'development',
    host: process.env.APP_HOST || 'http://localhost',
  },
  mongodb: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/money_lover',
  },
  graphqlUploadExpress: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 100000000,
    maxFiles: parseInt(process.env.MAX_FILES, 10) || 10,
  },
  serviceProviders: [],
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
