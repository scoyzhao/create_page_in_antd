const inquirer = require('inquirer')

module.exports = ({ defaultName, defaultDir }) => {
  const questions = [
    {
      name: 'name',
      type: 'input',
      message: '请输入组件的名称',
      default: defaultName,
    },
    {
      name: 'dir',
      type: 'input',
      message: '请输入组件的目录',
      default: defaultDir,
    },
  ];

  return inquirer.prompt(questions);
}

