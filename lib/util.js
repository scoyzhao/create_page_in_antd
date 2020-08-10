const chalk = require('chalk')
const config = require('../config')

const error = (message) => {
  console.log(chalk.red(message))
}
const log = (message) => {
  console.log(chalk.green(message))
}

const debug = (message) => {
  if (config.logLevel === 0) {
    console.log(chalk.yellow(message))
  }
}

const mergeObject = (userConfig, config) => {
  for (const key in config) {
    if (userConfig.hasOwnProperty(key)) {
      config[key] = userConfig[key]
    }
  }

  return config
}

module.exports = {
  error,
  log,
  debug,
  mergeObject,
}