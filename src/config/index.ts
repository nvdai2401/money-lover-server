import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

const config = {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}

export default config
