const mongoose = require('mongoose')
const app = require('./app')
const config = require('./util/configurations')
const logger = require('./util/logger')

const start = async () => {
  try {
    logger.info('Connecting to', config.URL)

    await mongoose.connect(config.URL, { family: 4 })

    logger.info('Connected to', config.URL)

    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
    })
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error.message)
    process.exit(1)
  }
}

start()