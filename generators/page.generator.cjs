module.exports = {
  description: 'application page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        'Qual o nome da página? Se a página possuir mais de uma palavra insira um espaço entre elas.'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/index.js',
      templateFile: './templates/page/index.js.hbs'
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
      templateFile: './templates/page/page.jsx.hbs'
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.test.jsx',
      templateFile: './templates/page/test.jsx.hbs'
    }
  ]
}
