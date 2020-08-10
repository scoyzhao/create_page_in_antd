const { addComponent, askInitiaQuestion } = require('./lib/question/index')
const config = require('./config')
const { log, error, debug, mergeObject } = require('./lib/util')
const checkFile = require('./lib/checkFile')
const path = require('path')

const create = async (userConfig) => {
  const mergedObj = mergeObject(userConfig, config)
  const { retryTime, componentDir, componentName } = mergedObj

  try {
    const { type } = await askInitiaQuestion()
    debug(`type: ${type}`)
    let time = retryTime;
    if (type === 'component') {
      while (time) {
        time--
        const { name, dir } = await addComponent({
          defaultName: componentName,
          defaultDir: componentDir,
        })
        debug(`componentName: ${name}, componentDirname: ${dir}`)
        if (name === '' || dir === '') {
          if (time > 0) {
            error('error: 组件名或组件地址不能为空')
          }
        } else {
          const rootPath = process.cwd()
          const pagePath = path.join(rootPath, dir)
          if (!checkFile({ fileName: name, relativePath: dir })) {
            log(`在 ${dir}，创建组件 ${name} 中~`)
            return
          } else {
            error('error: 组件名字重复，组件创建失败~')
            process.exit(1)
          }
        }
      }
      error('error: 创建组件失败~')
      process.exit(1)
    }
  } catch (err) {
    error(err)
    process.exit(1)
  }
}

module.exports = create
