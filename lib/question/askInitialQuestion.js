const inquirer = require('inquirer')

module.exports = () => {
  const questions = [
    {
      type: 'list',
      name: 'type',
      message: '你要新建的页面类型?',
      choices: [
        'component',
        'modal',
      ],
    },
  ];

  return inquirer.prompt(questions);
}
