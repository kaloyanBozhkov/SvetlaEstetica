const { override, addWebpackAlias, } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src'),
    UI: path.resolve(__dirname, 'src/components/UI'),
    components: path.resolve(__dirname, 'src/components'),
    templates: path.resolve(__dirname, 'src/templates'),
    redux: path.resolve(__dirname, 'src/redux'),
    pages: path.resolve(__dirname, 'pages'),
    helpers: path.resolve(__dirname, 'src/helpers'),
    domains: path.resolve(__dirname, 'src/domains'),
    theme: path.resolve(__dirname, 'src/theme'),
    server: path.resolve(__dirname, 'server'),
    lib: path.resolve(__dirname, 'lib'),
  })
)
