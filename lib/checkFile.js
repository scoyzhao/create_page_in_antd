const fs = require('fs')
const path = require('path')
const { debug, error } = require('./util')

const checkoutFile = ({ fileName, relativePath }) => {
  try {
    const rootPath = process.cwd();
    const pagePath = path.join(rootPath, relativePath, fileName)
    debug(`检查目录 ${pagePath} 是否存在`)
    return fs.existsSync(pagePath)
  } catch (err) {
    debug(err)
    error(`检查目录是否存在失败~`)
  }
}

module.exports = checkoutFile
