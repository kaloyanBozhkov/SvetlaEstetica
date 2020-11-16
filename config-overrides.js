const { override, addWebpackAlias, } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src'),
    UI: path.resolve(__dirname, 'src/components/UI'),
    components: path.resolve(__dirname, 'src/components'),
    templates: path.resolve(__dirname, 'src/templates'),
    redux: path.resolve(__dirname, 'src/redux'),
  })
)
