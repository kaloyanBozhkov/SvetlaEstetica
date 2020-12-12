const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages((withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
})))