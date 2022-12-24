const componentGenerator = require('./component.generator.cjs')
const hookGenerator = require('./hook.generator.cjs')
const pageGenerator = require('./page.generator.cjs')

module.exports = function generator(plop) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('hook', hookGenerator)
  plop.setGenerator('page', pageGenerator)
}
