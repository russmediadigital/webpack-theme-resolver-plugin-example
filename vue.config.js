const ThemeResolverPlugin = require('../webpack-fallback-vue-resolver-plugin/dist/index')
const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            plugins: [
                new ThemeResolverPlugin([
                    {
                        prefix: 'awesome-components',
                        directories: [
                            path.resolve(__dirname, 'src/components/fancy-theme'),
                            path.resolve(__dirname, 'src/components/default-theme')
                        ],
                        module: 'webpack-theme-resolver-plugin-example-components',
                        singlePackage: true
                    }
                ])
            ]
        }
    }
}